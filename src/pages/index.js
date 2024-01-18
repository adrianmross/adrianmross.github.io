// Section 1: Import Dependencies
import * as React from 'react'
import { Link, StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from "../components/Hero";
import ScrollBoxes from "../components/ScrollBoxes";
import '../../global.css'
// import { Box, Text } from "@chakra-ui/core";

// Section 2: Import Styling
import {
  container,
  profileImage,
  typewriterText,
  typewriterContainer,
  headerLinkText,
} from './index.module.css'

// Section 3: Helper Components
const Headshot = () => {
  return (
    <div className={container}>
      <StaticImage className={profileImage}
        alt="Self portrait"
        src="../images/profile.jpeg"
        objectFit='cover'
        // objectPosition='100% 100%'
      />
    </div>
  )
}

// Section 4: Main Component
const IndexPage = () => {

  return (
    <>
      {/* Header */}
      <div style={{ padding: 1 + "em", paddingTop: 2 + "em" }}>
        <hr style={{ border: 2 + "px solid" }}></hr>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <header style={{ fontFamily: "Mondwest", fontWeight: "semi-bold" }}>
              <span style={{ fontSize: 3.5 + "em" }}>A</span>
              <span style={{ fontSize: 3 + "em" }}>drian M. Ross</span>
            </header>
            <p style={{ fontFamily: "Supply Mono", fontSize: 0.875 + "em" }}>
              An Aspiring Polymath
            </p>
          </div>
          {/* <div style={{display: "flex", flexDirection: "column", textAlign: "right", lineHeight: 0.1+"em", fontFamily: "Supply Mono", fontSize: 0.875+"em"}}>
            <p>
              <Link to="/" className={headerLinkText}>
                Home
              </Link>
            </p>
            <p>
              <Link to="/about" className={headerLinkText}>
                About
              </Link>
            </p>
          </div> */}
        </div>
      </div>
      <Hero />
      <br /> <br /> <br /> <br />
      <section id="recent-happenings" style={{ background: "#151515" }}>
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "Supply Mono",
            fontSize: 2.5 + "em",
            marginTop: 0.5 + "em",
          }}
        >
          Recent Happenings
        </h2>
        <ScrollBoxes
          box1Content="Content for Box 1"
          box2Content="Content for Box 2"
          box3Content="Content for Box 3"
          box4Content="Content for Box 4"
          box5Content="Content for Box 5"
          box6Content="Content for Box 6"
          box7Content="Content for Box 7"
          box8Content="Content for Box 8"
        />
      </section>
      <Layout pageTitle="Home Page">{/* <p> Homepage </p> */}</Layout>
    </>
  );
}

export const Head = () => <Seo title="Home Page" />

// Section 5: Export your component
export default IndexPage