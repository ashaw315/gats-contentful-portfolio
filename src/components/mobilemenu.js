import React from "react";
import { Link } from 'gatsby'

const MobileMenu = ({ data, show, setShow }) => {
//   const [show, setShow] = useState(false)

    return (
        <>
            <div id='menu-container-mobile'>
                <Link className="home-logo" to='/'>AS</Link>
                {/* <div className={`menu-left ${show ? `menu_active` : null }`}> */}
                    
                    <button className={`menu-toggle ${show ? `menu_active` : null }`} onClick={() => setShow(!show)} onKeyDown={() => setShow(!show)} tabIndex="0">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                    </button>
                {/* </div> */}
            </div>
            <div className={`nav-container-mobile ${show ? `menu_active` : null }`} >      
                {data.allContentfulProject.edges?.map((edge) => (
                    <h3 key={edge.node.id}><Link to={`/projects/${edge.node.slug}`}>{edge.node.title}</Link></h3>
                ))}
                <h3><Link className='text-link' to='/text'>Text</Link></h3>
                <h3><Link className='contact-link' to='/contact'>Contact</Link></h3>  
            </div>
        </>
    )
}

export default MobileMenu;