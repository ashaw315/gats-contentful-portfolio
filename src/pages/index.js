import React, { useState, useEffect } from 'react'   
import Layout from '../components/layout';
import MatterFull from '../components/matterfull';
import MatterMobile from '../components/mattermobile';

function IndexPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log("MOBILE????",isMobile)

  if (isMobile < 768) {
    return (
      <Layout>
        <MatterMobile />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <MatterFull />
      </Layout>
    )
  }
}

export default IndexPage;
