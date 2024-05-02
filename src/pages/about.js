// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image";
import Seo from '../components/seo'
import HomeButton from '../components/HomeButton';
import { PageEndProvider } from "../components/PageMessages/PageEndContext";
import EndOfPageDetector from "../components/PageMessages/EndOfPageDetector";
import ScrollDownMessage from "../components/PageMessages/ScrollDownMessage";
import "../../global.css";

// Section 2: Import Styling
import {
  container,
  profileImage,
  typewriterText,
  typewriterContainer,
  // headerLinkText,
  extendedBackgroundSection,
  coolBeans,
} from "./about.module.css";

// Section 3: Helper Components
const Headshot = () => {
  return (
    <div className={container}>
      <StaticImage className={profileImage}
        alt="Self portrait"
        src={"../images/profile.jpeg"}
        objectFit='cover'
      />
    </div>
  )
}

// Step 2: Define your component
const AboutPage = () => {
  return (
    <>
      <PageEndProvider>
        {/* Header */}
        <div style={{ padding: 1 + "em", paddingTop: 2 + "em" }}>
          <hr style={{ border: 2 + "px solid" }}></hr>
        </div>
        <Layout pageTitle="About Me">
          <HomeButton page="about" />
          <br /> <br /> <br /> <br />
          <Headshot />
          <br /> <br />
          <div className={typewriterContainer}>
            <p className={typewriterText}>Hi 👋 I'm Adrian!</p>
          </div>
          <br />
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            I am a, &#127891; senior{" "}
            <a href="https://csb.lehigh.edu">B.S. Honors Computer & Business</a>{" "}
            @ <a href="https://www.lehigh.edu">Lehigh University</a>, &#x1F52C;
            Researcher @{" "}
            <a href="https://sss.cse.lehigh.edu">
              Scalable Systems & Software Research Group
            </a>{" "}
            in <a href="https://blockchain.cse.lehigh.edu">Blockchain Lab</a>,
            and Fmr. President of the{" "}
            <a href="https://csb.lehigh.edu/csba">CSBA</a>!
          </p>
          <br />
          <p>
            Thanks for popping by! My name is{" "}
            <strong>Adrian Michael Ross</strong> and I am a fourth-year
            undergraduate and researcher at Lehigh University working towards a
            dually accredited honors degree in computer science and business.
          </p>
          <br />
          <p>
            I am studying at Lehigh University, PA, within the P.C. Rossin
            College of Engineering and Applied Sciences and the College of
            Business and Economics. My focuses are in &#x26D3; blockchain,
            &#x1F4B0; fintech, and &#x1F4CA; data science, doing research in the
            former and minors in the latter.
          </p>
          <br />
          <p>
            I also enjoy &#x2615; making coffee, &#x1F3BF; skiing, &#x1F373;
            cooking, and &#x1F3B9; playing the piano.
          </p>
          <br /> <br />
          <ScrollDownMessage />
          <br /> <br />
          <section className={extendedBackgroundSection}>
            <div>
              <h2>📚 Education</h2>
              <h3>BACHELOR OF SCIENCE</h3>
              <h4>MAJOR: Computer Science & Business 🎓 </h4>
              <h5>MINORS: Data Science & FinTech</h5>
              <p>
                The Computer Science & Business honors program is a special
                program at Lehigh that is both ABET and AACSB accredited,
                meaning it is a full computer science and full business degree.
                I learn everything a computer science student learns, everything
                a business major learns, and how these disciplines interact in
                the modern world. At the time of my enrollment, only 40 students
                were admitted to the program each year.
              </p>
              <button
                className={coolBeans}
                onClick={() => {
                  window.open("/resume.pdf");
                }}
              >
                Résumé
              </button>
            </div>
          </section>
          <br /> <br />
          <section>
            {/* skills */}
            <h2>🧠 Skills</h2>
            <h3>Programming Languages</h3>
            <p>
              <strong>Proficient:</strong> Python, Java, TypeScript/JavaScript,
              C/C++
            </p>
            <p>
              <strong>Familiar:</strong> HTML/CSS, Rust, GoLang, C#, R,
              Solidity, LaTeX
            </p>
            <h3>SWE Tools</h3>
            <p>
              <strong>Proficient:</strong> SQL, React, Node.js, Gatsby,
              Express.js, MongoDB, PostgreSQL, Docker, Kubernetes
            </p>
            <p>
              <strong>Familiar:</strong> GraphQL, Firebase, AWS, Azure
            </p>
          </section>
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <EndOfPageDetector />
          {/* <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> */}
        </Layout>
      </PageEndProvider>
    </>
  );
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage