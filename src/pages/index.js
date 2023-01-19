import React, { useState, useEffect } from 'react'   
import Layout from '../components/layout';
import MatterFull from '../components/matterfull';
import MatterMobile from '../components/mattermobile';

function IndexPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    setIsMobile(window.innerWidth);
  }

  console.log("MOBILE????",isMobile)

  if (isMobile > 768) {
    return (
      <Layout>
        <MatterFull />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <MatterMobile />
      </Layout>
    )
  }
}

export default IndexPage;
