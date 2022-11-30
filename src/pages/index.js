import * as React from 'react'   
import Layout from '../components/layout';
import MatterFull from '../components/matterfull';

function IndexPage() {
  return (
    <Layout pageTitle={"Home Page"}>
      <MatterFull />
      <p>hello</p>
    </Layout>
  
  )
}

export default IndexPage;
