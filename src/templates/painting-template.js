import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

const PaintingTemplate = ({data}) => {

    console.log(data)

    let { all } = data

    const pathArray = window.location.pathname.split('/');
    let paintingPath = pathArray[3];
    // console.log(typeof paintingPath)

    const painting = data.contentfulProject.projectGroup.find((painting) => painting.slug === paintingPath)
    // console.log("WHAT you are looking for!",painting)
    
    console.log("THIS!",data.contentfulProject.projectGroup[0].slug)
    // let slug = data.contentfulPaint.slug
    let index = data.contentfulProject.projectGroup.findIndex((n) => n.slug === paintingPath)
    console.log(index)

    let p = index - 1

    let prev;
    let next;
    // if(index !== 0) {
    //     prev = data.contentfulProject.projectGroup[index - 1].slug;
    // }

    // if(index + 1) {
    //     next = data.contentfulProject.projectGroup[index + 1].slug;
    // }
    console.log("length",data.contentfulProject.projectGroup.length)

    if (index < data.contentfulProject.projectGroup.length - 1) {
        prev = data.contentfulProject.projectGroup[index + 1].slug;
      }
      if (index > 0) {
        next = data.contentfulProject.projectGroup[index - 1].slug;
      }
    
    // let prev = data.contentfulProject.projectGroup[p].slug
    console.log("prev",prev)
    console.log("hello",next)
    

    return (
        <Layout>
                <div className='single-painting'>
                  <div className="prev" data-image="/prev-icon.png">
                    <div className="prev-image">
                      {/* <img src="/prev-icon.png"/> */}
                    </div>
                  </div>
                    <div className="painting-image">
                        <img 
                            src={painting.image ? painting.image.url : null }
                            alt={painting.title}
                        />
                    </div>
                    <div className="next"></div>
                </div>
                <div className="single-painting-info">
                    <div className="painting-info">
                        <h4>{painting.title}</h4>
                        <p>{painting.year}</p>
                        <p>{painting.material}</p>
                        <p>{painting.description.description}</p>
                    </div> 
                </div>
                {/* <Link to={`/projects/${data.contentfulProject.slug}/${next}`}>Previous</Link>
            <Link to={`/projects/${data.contentfulProject.slug}/${prev}`}>Next</Link> */}
        </Layout>
    )
}

export const query = graphql`
query paintingtQ($id: String) {
    contentfulProject(id: {eq: $id}) {
      title
      slug
      projectGroup {
        slug
        id
        title
        year
        material
        description {
          description
        }
        image {
          id
          url
        }
      }
    }
  }`

export default PaintingTemplate;