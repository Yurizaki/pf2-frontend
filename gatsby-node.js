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

  console.log(result);
  const templatePath = path.resolve(`./src/templates/Blog.js`)

  result.data.allContentfulBlog.edges.forEach((node) => {
    console.log("node.slugnode.slugnode.slugnode.slugnode.slug");
    console.log(node);
    console.log(node.node.slug);
    createPage({
      path: "/blogs/"+node.node.slug,
      component: templatePath,
      context: {
        slug: node.node.slug,
      },
    })
  })
}
