const { data } = require("jquery")
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  query allProject {
    allContentfulProject {
      edges {
        node {
          slug
          title
          id
          projectGroup {
            slug
            title
            material
            year
            description {
              description
            }
            id
            image {
              file {
                url
              }
            }
            project {
              id
              slug
              projectGroup {
                title
                id
                slug
                material
                year
                description {
                  description
                }
                image {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }`)

  // Extract item data from query
  const items = result.data.allContentfulProject.edges

  items.forEach(({ node }, index) => {
    createPage({
      path: `/projects/${node.slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: node
    })
    if(node.projectGroup) {
      node.projectGroup.forEach(group => {
        createPage({
          path: `/projects/${node.slug}/${group.slug}`,
          component: path.resolve(`src/templates/painting-template.js`),
          context: {
            group,
            slug: group.slug
        },
        })
      })
    }
  })
}