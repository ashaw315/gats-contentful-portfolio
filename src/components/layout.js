import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

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
    


    return (
        <div id="main-container" >
           <title>{pageTitle} | {data.site.siteMetadata.title}</title>
           <div id="mouse">
            <div id="mouse-bg"></div>
            <div id="tooltip"></div>
          </div>
            <div className='main-menu'  onClick={() => show ? setShow(false) : null}>
                <div className={`menu-toggle ${show ? `menu_active` : null }`} onClick={() => setShow(!show)}>Projects</div>
                <h3><Link to='/'>Home</Link></h3>
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

