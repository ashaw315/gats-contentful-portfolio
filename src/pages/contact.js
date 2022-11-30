import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {

const randomColor = Math.floor(Math.random()*16777215).toString(16);

  return (
    <Layout pageTitle={"Contact"}>
        <style>{`
        .main-menu {
            color: white;
        }
        .main-menu a {
            color: white!important;
        }
        .main-menu a:hover {
            border-bottom: 1px solid white!important;
        }
        .menu-left.menu_active {
            color: black;
            border-left: none!important;
            border-top: none!important;
            border-right: none!important;
        }
        .contact-container {
            background: #${randomColor};
        }
        .contact-container a {
            mix-blend-mode: difference;
            filter: invert(1)
        }
        .menu-left {
            background: transparent!important;
            border-left: 2px solid!important;
            border-top: 2px solid!important;
            border-right: 2px solid!important;
            mix-blend-mode: difference;
            filter: invert(1)
        }
        .main-right {
            background: transparent!important;
            border-left: 2px solid!important;
            border-top: 2px solid!important;
            border-right: 2px solid!important;
            mix-blend-mode: difference;
            filter: invert(1)
        }
        .menu-left a {
            color: transparent!important;
        }
        `}    
        </style>
        <div className='contact-container'>
            <a href="mailto:ashaw315@gmail.com">ashaw315@gmail.com</a>
            <div className='circle'></div>
        </div>
    </Layout>
  )
}

export default ContactPage;