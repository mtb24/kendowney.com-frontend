/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const results = await graphql(`
    query {
      allWpPage {
        nodes {
          id
          title
          content
          uri
        }
      }
    }
  `)

  const pages = results.data.allWpPage.nodes
  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: require.resolve(`./src/templates/page-template.js`),
      context: {
        id: page.id,
        title: page.title,
        content: page.content,
      },
    })
  })
}
