
const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      articles:allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.articles.nodes.forEach(article => {
    createPage({
      path: `/${article.slug}`,
      component: path.resolve(`src/templates/article-template.tsx`),
      context: {
        slug: article.slug,
      },
    })
  })
}
