import React from "react";
import { Link } from 'gatsby'

const FullMenu = ({ data, show, setShow }) => {
//   const [show, setShow] = useState(false)

    return (
        <>
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
                    {/* <h3><Link to='/'>Home</Link></h3> */}
                    {/* <h3><Link to='/about'>About</Link></h3> */}
                    {/* <h3><Link to='/painting'>Painting All</Link></h3> */}
                    {/* <h3><Link to='/projects'>Projects</Link></h3> */}
                    {data.allContentfulProject.edges?.map((edge) => (
                     <h3 key={edge.node.id}><Link to={`/projects/${edge.node.slug}`}>{edge.node.title}</Link></h3>
                   ))}
                   
        </div>
        </>
    )
}

export default FullMenu;