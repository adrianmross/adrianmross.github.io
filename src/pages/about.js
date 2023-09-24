// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>

      <p> My name is <strong>Adrian Michael Ross</strong> and I am a fourth-year undergraduate and researcher at Lehigh University working towards a dually accredited honors degree in computer science and business.</p>
      <p>I am studying at Lehigh University, PA, within the P.C. Rossin College of Engineering and Applied Sciences and the College of Business and Economics. My focuses are in &#x26D3; blockchain, &#x1F4B0; fintech, and &#x1F4CA; data science, doing research in the former and minors in the latter.</p>
      <p>I also enjoy &#x2615; making coffee, &#x1F3BF; skiing, &#x1F373; cooking, and &#x1F3B9; playing the piano.</p>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage