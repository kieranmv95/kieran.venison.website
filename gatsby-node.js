import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';

export async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const res = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        posts: edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { posts } = res.data.allMarkdownRemark;
  const blogTemplate = path.resolve('./src/templates/blog-post.js');

  posts.forEach((post) => {
    createPage({
      path: `blog${post.node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
}

export function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}
