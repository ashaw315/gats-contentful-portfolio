import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { navigate } from 'gatsby'

const PaintPage = ({data, pageContext}) => {
    // console.log(data)

    // console.log(pageContext.prev)

    let { all } = data
    let slug = data.contentfulPaint.slug
    let index = all.nodes.findIndex((n) => n.slug === slug)

    let prev = all.nodes[index - 1].slug
    let next = all.nodes[index + 1].slug

    console.log(all)

    console.log(prev)
    

    return(
        <Layout>
            <p>anything?</p>
            <Link to={`/painting/${next}`}>Previous</Link>
            <Link to={`/painting/${prev}`}>Next</Link>
            <img src={data.contentfulPaint.image.file.url}/>
        </Layout>
    )
}

export const query = graphql`
query onePaint($id: String) {
    contentfulPaint(id: {eq: $id}) {
        slug
        image {
          file {
            url
          }
          description
          title
        }
      }
      all: allContentfulPaint {
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
      }
    }
  `

export default PaintPage;