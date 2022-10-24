import * as React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";

const PaintingPage = ({ data, actions }) => {

    
    // const { createPage } = actions
    // console.log(data)

    // const paintings = data.allContentfulPaint.edges

    return (
        <Layout>
            <p>All Paintings go HERE</p>
            {data.allContentfulPaint.nodes?.map((node) => (
                <Link key={node.id}to={`/painting/${node.slug}`}>
                    <img 
                    src={node.image ? node.image.file.url : null }
                    alt={node.title}
                    style={{ width: 'auto', height: 300 }}/>
                </Link>
            ))}
            {/* {paintings?.forEach(({ node, next, previous }) => {
                createPage({
                    path: `/painting/{contenfulPaint.slug}`,
                    component: path.resolve(`./src/pages/painting/{contentfulPaint.slug}.js`),
                    context: {
                        previous, 
                        next,
                    }
                })
            })} */}
        </Layout>
    )
}

export const query = graphql`
query allPaint {
    allContentfulPaint(sort: {fields: [updatedAt], order: ASC}) {
      nodes {
        id
        image {
          file {
            url
          }
        }
        slug
        title
      }
      edges {
        next {
          image {
            file {
              url
            }
          }
        }
        previous {
          image {
            file {
              url
            }
          }
          gatsbyPath(filePath: "/painting/{contentfulPaint.slug}")
        }
      }
    }
  }
`

export default PaintingPage;