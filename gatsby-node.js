const { create } = require("domain")
const path = require("path")

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * ----------------------------------------
 * // ===== DYNAMICALLY CREATE NEW PAGES ===== //
 * ----------------------------------------
 * * * * * * * * * * * * * * * * * * * * * * * * */

// 1. Get path to template
// 2. Get markdown data
// 3. Create new pages

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
