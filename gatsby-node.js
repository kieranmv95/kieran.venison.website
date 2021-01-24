import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const res = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

  const pageSize = parseInt(process.env.GATSBY_ARTICLES_PER_PAGE);
  const pageCount = Math.ceil(posts.length / pageSize);

  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/blog/${i + 1}`,
      component: path.resolve('./src/pages/index.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
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
