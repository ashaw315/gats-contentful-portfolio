// // Step 1: Import React
import React, { useEffect } from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby";

 // Step 2: Define your component
 const TextPage = ({ data }) => {

    const text = data.contentfulPage.description.description;
    const txttmp = text.split(/\s+/);
    const keyword = txttmp[Math.floor(Math.random()*txttmp.length)];
    const chars = keyword.split('');
    console.log(chars)
     
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const randomColor = Math.floor(Math.random()*16777215).toString(16);



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

     console.log(span)

     
     
     
 
   const repeat = keyword.repeat(15000)
//    console.log(repeat)

 //   useEffect(() => {
 //   function multiplyNode(node, count, deep) {
 //     for (var i = 0, copy; i < count - 1; i++) {
 //         copy = node.cloneNode(deep);
 //         node.parentNode.insertBefore(copy, node);
 //     }/ // }

 // multiplyNode(document.querySelector('.bg-text'), 2000, true);
 // // multiplyNode(document.querySelector('.project-title-2'), 10, true);


 // }, []);



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

 // Step 3: Export your component
 export default TextPage
