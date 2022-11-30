import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
// import svgLogo from ""
// import svgLogo  from '../assets/logo'
import Logo from '../assets/logo'
import gsap from "gsap";
import { Expo } from 'gsap';
import $ from "jquery";


const Layout = ({ pageTitle, children }) => {

  const [show, setShow] = useState(false)

    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulProject {
        nodes {
          id
          slug
          title
        }
      }
    }
  `)
    
// console.log(show)

useEffect(() => {
    
  const mouseElement = document.querySelector("#mouse");
  const mouseBg = $("#mouse-bg");
  let lastMouseBg = "";
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.55;

  const xSet = gsap.quickSetter(mouseElement, "x", "px");
  const ySet = gsap.quickSetter(mouseElement, "y", "px");

  gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
      mouseBg.css("background-position",`${mouse.x}px ${mouse.y}px`)
      if(document.hidden){
        mouseToggle(false);
      }
    });

  const mouseToggle = (polarity) => {
      mouseOn = polarity;
      $("#mouse")[(polarity ? "removeClass":"addClass")]("hide");
    }

  const textLoop = document.querySelector(".bg-text")

  let mouseOn = false;
  window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
  let c = 0;
  if(!mouseOn){
      mouseToggle(true);
  }
  if (mouse.x <= mouse.y) {
    c = mouse.y - mouse.x;
}
  // textLoop.style.color= `rgb(${mouse.x}, ${(mouse.y - 255) * (-1)}, ${c})`;
  });

  const setToolTip = (text) => {
      // $("#tooltip").html(text);
      console.log($("#tooltip").html(text));
    }

  const toolTip = (polarity) => {
      $("#tooltip")[(polarity ? "addClass":"removeClass")]("active");
    }

    $(".single-project").mouseenter((e)=>{
      setToolTip($(e.target).closest(".single-project").find(".tooltip").html());
      console.log($(e.target).closest(".single-project").find(".tooltip").html());
      toolTip(true);
    }).mouseleave((e)=>{
      toolTip(false);
    });

    return () => {
      window.removeEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
        if(!mouseOn){
         mouseToggle(true);
        }
      })
    }

}, []);


    return (
        <div id="main-container" >
           <title>{pageTitle} | {data.site.siteMetadata.title}</title>
           <div id="mouse">
            <div id="mouse-bg"></div>
            <div id="tooltip"></div>
          </div>
          <div className='menu-container'>
            <div className={`menu-left ${show ? `menu_active` : null }`}>
                  <Link className="right-link" to='/'>AS</Link>
                  <div className={`menu-toggle ${show ? `menu_active` : null } right-link`} onClick={() => setShow(!show)}>Projects</div>
            </div>
              <div className='main-right'  onClick={() => show ? setShow(false) : null}>
                  <Link className='main-link' to='/text'>Text</Link>
                  <Link className='main-link' to='/contact'>Contact</Link>
              </div>
            </div>
               <div className={`nav-container ${show ? `menu_active` : null }`} onClick={() => setShow(!show)}>      
                    <h3><Link to='/'>Home</Link></h3>
                    <h3><Link to='/about'>About</Link></h3>
                    <h3><Link to='/painting'>Painting All</Link></h3>
                    <h3><Link to='/projects'>Projects</Link></h3>
                    {data.allContentfulProject.nodes?.map((node) => (
                     <h3 key={node.id}><Link to={`/projects/${node.slug}`}>{node.title}</Link></h3>
                   ))}
                   
               </div>
           {/* <h1>{query.allContentfulProject.nodes}</h1> */}
           <main onClick={() => setShow(false)}>
               {/* <h1>{pageTitle}</h1> */}
               {children}
           </main>
        </div>
    )
}


export default Layout;

