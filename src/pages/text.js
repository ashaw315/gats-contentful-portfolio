import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby";

 const TextPage = ({ data }) => {

    const text = data.contentfulPage.description.description;
    const txttmp = text.split(/\s+/);
    const keyword = txttmp[Math.floor(Math.random()*txttmp.length)];
    const chars = keyword.split('');
    console.log(chars)
     
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
     const span = chars.map((char, index) => {
        return (
            <span className={`span-${index} dance-char`} key={index}>{char}
                <style>{`
                .span-${index} {
                    position: absolute;
                    top: ${getRandomInt(65)}vh;
                    left: ${getRandomInt(75)}vw;
                    font-size: 20vw;
                    text-transform: capitalize;
                    }
                `}
                </style>
            </span>
            
        )
     })

   return (
     <Layout pageTitle={"Text Page"}>
       <div className='bg-text-container'>
        <div className='bg-text'>
            {span}
        </div>
        <div className='statement'>
            {text}
        </div>
       </div>
     </Layout>
   )
 }

 export const query = graphql`
 query textQuery {
    contentfulPage(url: {eq: "text"}) {
        description {
          description
        }
        title
        url
      }
    }
 `

 export default TextPage