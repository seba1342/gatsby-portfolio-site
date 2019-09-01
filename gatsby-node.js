const path = require('path');

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const projectPostTemplate = path.resolve('src/templates/projectPost.js');

    resolve(
      graphql(
        `query{
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }`).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path;
          createPage({
            path: path,
            component: projectPostTemplate,
            context: {
              pathSlug: path,
            }
          });

          resolve();
        });
      })
    );
  });
});
