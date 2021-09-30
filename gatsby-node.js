const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const templatePath = path.resolve(`./src/templates/Blog.js`)

  result.data.allContentfulBlog.edges.forEach((node) => {
    createPage({
      path: "/blogs/"+node.node.slug,
      component: templatePath,
      context: {
        slug: node.node.slug,
      },
    })
  })
}
