// Section 1: Import Dependencies
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Section 2: Import Styling
import {
  container,
  profileImage,
  typewriterText,
  typewriterContainer,
} from './index.module.css'

// Section 3: Helper Components
const Headshot = () => {
  return (
    <div className={container}>
      <StaticImage className={profileImage}
        alt="Self portrait"
        src="../images/profile.jpeg"
      />
    </div>
  )
}

// Section 4: Main Component
const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page">
      <br /> <br /> <br /> <br />
      <Headshot />
      <br /> <br />
      <div className={typewriterContainer}>
        <p className={typewriterText}>Hi 👋 I'm Adrian!</p>
      </div>
      <br />
      <p>I am a, &#127891; senior <a href="https://csb.lehigh.edu">B.S. Honors Computer & Business</a> @ <a href="https://www.lehigh.edu">Lehigh University</a>, &#x1F52C; Researcher @ <a href="https://sss.cse.lehigh.edu">Scalable Systems & Software Research Group</a> in <a href="https://blockchain.cse.lehigh.edu">Blockchain Lab</a>, and President of the <a href="https://csb.lehigh.edu/csba">CSBA</a>!</p>
      <br /> 
      <p>&nbsp;&nbsp;&nbsp;Thanks for popping by! My name is <strong>Adrian Michael Ross</strong> and I am a fourth-year undergraduate and researcher at Lehigh University working towards a dually accredited honors degree in computer science and business.</p>
      <p>&nbsp;&nbsp;&nbsp;I am studying at Lehigh University, PA, within the P.C. Rossin College of Engineering and Applied Sciences and the College of Business and Economics. My focuses are in &#x26D3; blockchain, &#x1F4B0; fintech, and &#x1F4CA; data science, doing research in the former and minors in the latter.</p>
      <p>I also enjoy &#x1F3BF; skiing, &#x1F373; cooking, and &#x1F3B9; playing the piano.</p>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Section 5: Export your component
export default IndexPage