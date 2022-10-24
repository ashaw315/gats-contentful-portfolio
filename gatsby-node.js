const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  query allProject {
    allContentfulProject {
      nodes {
        title
        slug
        projectGroup {
          slug
          title
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
  }`)

  result.data.allContentfulProject.nodes.forEach(page => {
    createPage({
      path: `/projects/${page.slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        slug: page.slug
      },
    })
    if(page.projectGroup) {
      page.projectGroup.forEach(group => {
        createPage({
          path: `/projects/${page.slug}/${group.slug}`,
          component: path.resolve(`src/templates/painting-template.js`),
          context: {
            slug: group.slug
          },
        })
      })
    }
  })
}

  // const result = 
  
//   const result = await graphql(`
//     query createPaint {
//         allContentfulPaint {
//             nodes {
//               id
//               image {
//                 file {
//                   url
//                 }
//               }
//               slug
//               title
//             }
//           }
//         }
//       `)

//   const templatePath = path.resolve(`src/pages/painting`)
  
//   result.data.allContentfulPaint.nodes.forEach(({node, next, previous}) => {
//     createPage({
//       path: `/painting/${node.id}`,
//       component: templatePath,
//       context: {
//         painting: node,
//       },
//     })
//   })
// }
