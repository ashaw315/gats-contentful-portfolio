import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {

  return (
    <Layout pageTitle={"Contact"}>
        <style>{`
        .main-menu {
            color: white;
        }
        .menu-toggle:hover {
            border-bottom: 1px solid white!important;
        }
        .main-menu a {
            color: white!important;
        }
        .main-menu a:hover {
            border-bottom: 1px solid white!important;
        }
        .menu-toggle.menu_active {
            color: black;
        }
        `}    
        </style>
        <div className='contact-container'>
            <a href="mailto:ashaw315@gmail.com">ashaw315@gmail.com</a>
        </div>
    </Layout>
  )
}

export default ContactPage;