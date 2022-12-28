import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Marquee from "react-fast-marquee";
import useMousePosition from "../assets/useMousePosition";
import { motion } from 'framer-motion';
import gsap from "gsap";
import { Expo } from 'gsap';
import $ from "jquery";

const ProjectPage = ({ pageContext }) => {


// useEffect(() => {
//   function multiplyNode(node, count, deep) {
//     for (var i = 0, copy; i < count - 1; i++) {
//         copy = node.cloneNode(deep);
//         node.parentNode.insertBefore(copy, node);
//     }
// }

// multiplyNode(document.querySelector('.project-title'), 5, true);
// // multiplyNode(document.querySelector('.project-title-2'), 10, true);


// }, []);



let { data} = pageContext
// console.log("HELLLLLLLLOOOOOO",data)
console.log("HELLLLLLLLOOOOOO", pageContext)
let projects = pageContext.projectGroup
console.log("PROJECTS", projects)

projects.map((p) => {
  console.log("INDVI PROJECT",p)
})


// const previous = index === 0 ? null : items[index - 1].node

// console.log("PAGE Context",slug, title, id) 



    console.log("projectdata", data)

    return (
        <Layout>
            <div className="projects">
                <div className="project-header">
                  <Marquee 
                  loop={0}
                  delay={0}
                  speed={25}
                  gradient={false}
                  >
                    <span className="project-title">{pageContext.title}</span>
                    <span className="project-title">{pageContext.title}</span>
                    <span className="project-title">{pageContext.title}</span>
                    <span className="project-title">{pageContext.title}</span>
                    <span className="project-title">{pageContext.title}</span>
                  </Marquee>                  
                </div>
                <div className="project-images">
            {pageContext?.projectGroup.map((project) => (
              <Link className="project-image-link" key={project.id} to={`/projects/${pageContext.slug}/${project.slug}`}>
                <div className={`single-project ${project.slug}`}>
                    <div className="tooltip">
                        <h2>{project.title}</h2>
                        <p>{project.year}</p>
                        <p>{project.material}</p>
                        <p>{project.description.description}</p>
                    </div> 
                    <div className="project-image">
                        <img 
                            src={project.image ? project.image.file.url : null }
                            alt={project.title}
                            dd-tooltip={`${project.title}, ${project.description.description}`}
                        />
                    </div>
                </div>
              </Link>
              
            ))}       
            </div>     
            </div>
        </Layout>
    )
}

export const query = graphql`
query projectQ($id: String) {
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

export default ProjectPage;