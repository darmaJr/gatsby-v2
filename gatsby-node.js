//gatsby-node.js
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const BlogPostTemplate = path.resolve('./src/templates/BlogPostTemplate.js');
  const PageTemplate = path.resolve('./src/templates/page.js');
  const result = await graphql(`
    {
      allWpPost {
        edges {
          node {
            slug
            databaseId
          }
        }
      }
      allWpPage {
    edges {
      node {
        databaseId
        title
        slug
      }
    }
  }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }
  const BlogPosts = result.data.allWpPost.edges;
  BlogPosts.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.databaseId,
      },
    });
    const Pages = result.data.allWpPage.edges;
	 Pages.forEach(page => {
	 createPage({
	 path: `/${page.node.slug}`,
	 component: PageTemplate,
	 context: {
	 id: page.node.databaseId,
	 },
	});
  });
  });
};
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}