import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import useMousePosition from "../assets/useMousePosition";
import { motion } from 'framer-motion';
import gsap from "gsap";
import { Expo } from 'gsap';
import $ from "jquery";

const ProjectPage = ({ data }) => {

// useEffect(() => {
    
//     const mouseElement = document.querySelector("#mouse");
//     const mouseBg = $("#mouse-bg");
//     let lastMouseBg = "";
//     const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//     const mouse = { x: pos.x, y: pos.y };
//     const speed = 0.55;

//     const xSet = gsap.quickSetter(mouseElement, "x", "px");
//     const ySet = gsap.quickSetter(mouseElement, "y", "px");

//     gsap.ticker.add(() => {
//         // adjust speed for higher refresh monitors
//         const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
//         pos.x += (mouse.x - pos.x) * dt;
//         pos.y += (mouse.y - pos.y) * dt;
//         xSet(pos.x);
//         ySet(pos.y);
//         mouseBg.css("background-position",`${mouse.x}px ${mouse.y}px`)
//         if(document.hidden){
//           mouseToggle(false);
//         }
//       });

//     const mouseToggle = (polarity) => {
//         mouseOn = polarity;
//         $("#mouse")[(polarity ? "removeClass":"addClass")]("hide");
//       }

//     let mouseOn = false;
//     window.addEventListener("mousemove", e => {
//     mouse.x = e.x;
//     mouse.y = e.y;
//     if(!mouseOn){
//         mouseToggle(true);
//     }
//     });

//     const setToolTip = (text) => {
//         // $("#tooltip").html(text);
//         console.log($("#tooltip").html(text));
//       }

//     const toolTip = (polarity) => {
//         $("#tooltip")[(polarity ? "addClass":"removeClass")]("active");
//       }

//       $(".single-project").mouseenter((e)=>{
//         setToolTip($(e.target).closest(".single-project").find(".tooltip").html());
//         console.log($(e.target).closest(".single-project").find(".tooltip").html());
//         toolTip(true);
//       }).mouseleave((e)=>{
//         toolTip(false);
//       });

//       return () => {
//         window.removeEventListener('mousemove', (e) => {
//           mouse.x = e.x;
//           mouse.y = e.y;
//           if(!mouseOn){
//            mouseToggle(true);
//           }
//         })
//       }

//  }, []);

 

// console.log( x, y)

    // console.log("projectdata", data)

    return (
        <Layout>
            <div className="projects">
            <h1>{data.contentfulProject.title}</h1>
            {data.contentfulProject.projectGroup.map((project) => (
              <Link key={project.id} to={`/projects/${data.contentfulProject.slug}/${project.slug}`}>
                <div className={`single-project ${project.slug}`}>
                    <div className="tooltip">
                        <h2>{project.title}</h2>
                        <p>{project.description.description}</p>
                    </div> 
                    <div className="project-image">
                        <img 
                            src={project.image ? project.image.url : null }
                            alt={project.title}
                            dd-tooltip={`${project.title}, ${project.description.description}`}
                        />
                    </div>
                </div>
              </Link>
              
            ))}            
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