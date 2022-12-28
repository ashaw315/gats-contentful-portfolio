// const path = require(`path`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//   query allProject {
//     allContentfulProject {
//       edges {
//         node {
//           id
//           slug
//           title
//           projectGroup {
//             id
//             slug
//             title
//             image {
//               file {
//                 url
//               }
//             }
//             description {
//               description
//             }
//           }
//         }
//       }
//     }
//   }`)

//   result.data.allContentfulProject.edges.forEach(page => {
//     createPage({
//       path: `/projects/${page.node.slug}`,
//       component: path.resolve(`src/templates/project-template.js`),
//       context: {
//         slug: page.node.slug,
//         id: page.node.id,
//         title: page.node.title
//       },
//     })
//     if(page.node.projectGroup) {
//       page.node.projectGroup.forEach(group => {
//         createPage({
//           path: `/projects/${page.slug}/${group.slug}`,
//           component: path.resolve(`src/templates/painting-template.js`),
//           context: {
//             slug: group.slug,
//             id: group.id,
//             title: group.title
//           },
//         })
//       })
//     }
//   })
// }

//   // const result = 
  
// //   const result = await graphql(`
// //     query createPaint {
// //         allContentfulPaint {
// //             nodes {
// //               id
// //               image {
// //                 file {
// //                   url
// //                 }
// //               }
// //               slug
// //               title
// //             }
// //           }
// //         }
// //       `)

// //   const templatePath = path.resolve(`src/pages/painting`)
  
// //   result.data.allContentfulPaint.nodes.forEach(({node, next, previous}) => {
// //     createPage({
// //       path: `/painting/${node.id}`,
// //       component: templatePath,
// //       context: {
// //         painting: node,
// //       },
// //     })
// //   })
// // }
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
                slug
                title
                id
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