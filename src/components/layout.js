import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
// import svgLogo from ""
// import svgLogo  from '../assets/logo'
import Logo from '../assets/logo'
import gsap from "gsap";
import { Expo, TweenMax } from 'gsap';
import $ from "jquery";
import FullMenu from './fullmenu'
import MobileMenu from './mobilemenu'


const Layout = ({ pageTitle, children }) => {

  const [show, setShow] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth)

    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulProject {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)
    
// console.log("SITE",data.allContentfulProject.edges)
// let test = data.allContentfulProject.edges?.map((edge) => (
//   console.log("THIS?",edge.node.id)
// ))
// console.log(test)



useEffect(() => {
    
  const mouseElement = document.querySelector("#mouse");
  const mouseBg = $("#mouse-bg");
  const mainContainer = $("#main-container")
  let lastMouseBg = "";
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.55;


  const xSet = gsap.quickSetter(mouseElement, "x", "px");
  const ySet = gsap.quickSetter(mouseElement, "y", "px");

  gsap.set("#mouse-bg", {xPercent: -50, yPercent: -50});

  TweenMax.to(mouseBg, {rotation:"360", duration: 25, ease: 'none', repeat:-1});

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
      console.log("tooltip find",$(e.target).closest(".single-project").find(".tooltip").html());
      toolTip(true);
    }).mouseleave((e)=>{
      toolTip(false);
    });

    $(".prev").mouseenter((e)=>{
      // mouseBg.css("background", `url('/prev-icon.png')`);
      mouseBg.css("background", `black`);
      mouseBg.css("clip-path", "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)")
      mainContainer.css("cursor", "none");
    }).mouseleave((e)=>{
        mouseBg.css("background","");
        mainContainer.css("cursor", "default");
      });

    $(".next").mouseenter((e)=>{
      // mouseBg.css("background", `url('/prev-icon.png')`);
      mouseBg.css("background", `black`);
      mouseBg.css("clip-path", "polygon(0% 35%, 35% 35%, 35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%)")
      mainContainer.css("cursor", "none");
    }).mouseleave((e)=>{
        mouseBg.css("background","");
        mainContainer.css("cursor", "default");
      });

      const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    // appHeight()

      function handleResize() {
        setIsMobile(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
        if(!mouseOn){
         mouseToggle(true);
        }
      })
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', appHeight)
    }

}, []);

console.log(data)

  if (isMobile < 768) {
    return (
      <div id="main-container" >
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <div id="mouse">
              <div id="mouse-bg"></div>
              <div id="tooltip"></div>
            </div>
            <MobileMenu data={data} show={show} setShow={setShow}/>
            {/* <h1>{query.allContentfulProject.nodes}</h1> */}
            <main onClick={() => setShow(false)}>
                {/* <h1>{pageTitle}</h1> */}
                {children}
            </main>
          </div>
    )
  } else {
    return (
      <div id="main-container" >
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <div id="mouse">
              <div id="mouse-bg"></div>
              <div id="tooltip"></div>
            </div>
            <FullMenu data={data} show={show} setShow={setShow}/>
            {/* <h1>{query.allContentfulProject.nodes}</h1> */}
            <main onClick={() => setShow(false)}>
                {/* <h1>{pageTitle}</h1> */}
                {children}
            </main>
          </div> 
    )
  }
}

export default Layout;

