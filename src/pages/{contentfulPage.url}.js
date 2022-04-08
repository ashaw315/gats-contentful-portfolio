import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const Page = ({ data }) => {
    console.log(data)

    const allImages = data.contentfulPage.images?.map((pic) => (
        <div>
            <img 
            key={pic.title}
            src={pic.file.url}
            style={{ width: 300, height: 'auto' }}/>
        </div>
    ))

    console.log(data.contentfulPage.images)


    return (
        // <pre>{JSON.stringify(data, null, 2)}</pre>
        <Layout>
            <h1>{data.contentfulPage.title}</h1>
            {data.contentfulPage.description ? <p>{data.contentfulPage.description.description}</p> : null }
            {data.contentfulPage.image ? <img 
            src={data.contentfulPage.image.file.url}
            alt={data.title}
            style={{ width: 300, height: 'auto' }}/> : 
            null} 
            {allImages}
        </Layout>
    )
}

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: {eq: $id}) {
        url
        title
        description {
          description
        }
        images {
          file {
            url
          }
          description
          title
        }
        image {
          file {
            url
          }
        }
      }
    }
  `;


export default Page;
