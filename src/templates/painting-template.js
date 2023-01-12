import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

const PaintingTemplate = ({ pageContext }) => {

  // Current Painting, all data!
  const painting = pageContext.group;
  // Current Painting image
  const paintingImage = painting.image.file.url;

  // Array of all works in current Project
  const works = pageContext.group.project[0].projectGroup;
  // Current Project slug
  const currentProject = pageContext.group.project[0].slug
  
  // Working methodology for Next/Prev
  //   previous = index === 0 ? null : works[index - 1].work
  //   nextnext = index === works.length - 1 ? null : works[index + 1].work
  
  // Grab Path name
  const pathArray = window.location.pathname.split('/');
  const paintingPath = pathArray[3];

  // Get index of works in Project
  const index = works.findIndex((n) => n.slug === paintingPath)

  //declare variables for next and prev
  let prev;
  let next;

  //logic for next and prev
    if (index < works.length - 1) {
        next = works[index + 1].slug;
      }
      if (index > 0) {
        prev = works[index - 1].slug;
      }

    return (
        <Layout>
          <div className="painting-container">
                <div className='single-painting'>
                  {prev ? 
                  <Link className="prev" to={`/projects/${currentProject}/${prev}`}></Link>
                  : 
                  <div className="no-prev"></div>
                  }
                    <div className="painting-image">
                        <img 
                            src={paintingImage ? paintingImage : null }
                            alt={painting.title}
                        />
                    </div>
                  {next ? 
                  <Link className="next" to={`/projects/${currentProject}/${next}`}></Link>
                  :
                  <div className="no-next"></div>
                  }
                </div>
                <div className="single-painting-info">
                    <div className="painting-info">
                        <h4>{painting.title}</h4>
                        <p>{painting.year}</p>
                        <p>{painting.material}</p>
                        <p>{painting.description.description}</p>
                    </div> 
                    <div className="prev-next-container">
                      {prev ? <Link to={`/projects/${currentProject}/${prev}`}>
                        <img id="prev-icon" src='/prev-icon-2.svg' alt='prev-icon'/>
                        </Link> : null}
                        <Link to={`/projects/${currentProject}`}>
                        <img id="back-to-project-icon" src='/back-to-project-icon.svg' alt='prev-icon'/>
                        </Link>
                      {next ? <Link to={`/projects/${currentProject}/${next}`}>
                      <img id="next-icon" src='/next-icon-2.svg' alt='prev-icon'/>
                        </Link> : null}
                    </div>
                </div>
              </div>
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