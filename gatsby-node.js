const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const { data } = await graphql(`
    query getAllSlugs {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

    data.allContentfulBlogPost.edges.forEach(edge => {
        actions.createPage({
            // URL
            path: '/blog/' + edge.node.slug,
            // Template
            component: path.resolve('./src/templates/blogpost.jsx'),
            context: { slug: edge.node.slug}
        })
    })

}