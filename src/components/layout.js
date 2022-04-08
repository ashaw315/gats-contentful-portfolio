import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data)

    return (
        <div>
           <title>{pageTitle} | {data.site.siteMetadata.title}</title>
           <nav>
               <ul>
                   <li><Link to='/'>Home</Link></li>
                   <li><Link to='/about'>About</Link></li>
                   <li><Link to='/painting'>Painting</Link></li>
               </ul>
           </nav>
           <main>
               <h1>{pageTitle}</h1>
               {children}
           </main>
        </div>
    )
}

export default Layout;

