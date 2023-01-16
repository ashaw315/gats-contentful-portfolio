import React from "react";
import { Link } from 'gatsby'

const FullMenu = ({ data, show, setShow }) => {

    return (
        <>
        <div className='menu-container'>
            <div className={`menu-left ${show ? `menu_active` : null }`}>
                  <Link className="right-link" to='/'>AS</Link>
                  <button className={`menu-toggle ${show ? `menu_active` : null } right-link`} onClick={() => setShow(!show)}>Projects</button>
            </div>
              <button className='main-right'  onClick={() => show ? setShow(false) : null}>
                  <Link className='main-link' to='/text'>Text</Link>
                  <Link className='main-link' to='/contact'>Contact</Link>
              </button>
            </div>
            <button className={`nav-container ${show ? `menu_active` : null }`} onClick={() => setShow(!show)}>      
                {data.allContentfulProject.edges?.map((edge) => (
                     <h3 key={edge.node.id}><Link to={`/projects/${edge.node.slug}`}>{edge.node.title}</Link></h3>
                ))}
            </button>
        </>
    )
}

export default FullMenu;