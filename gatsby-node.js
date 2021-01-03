export async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  // TODO: Find the fields: slug porperty

  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.map((blog) => console.log(blog));
}
