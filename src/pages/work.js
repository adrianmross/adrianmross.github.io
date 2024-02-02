// Step 1: Import React
import * as React from 'react'
import { graphql } from "gatsby";
import {
  Layout,
  Seo,
  ScrollDownMessage,
  EndOfPageDetector,
  PageEndProvider,
  Timeline,
} from "../components";
import "../../global.css";

// Section 2: Import Styling
import {
  extendedBackgroundSection,
  coolBeans,
} from "./work.module.css";

// Step 2: Define your component
const WorkPage = ({ data }) => {
  const workExperience = data.allWorkExperienceJson.edges.map(edges => edges.node);

  return (
    <>
      <PageEndProvider>
        {/* Header */}
        <div style={{ padding: 1 + "em", paddingTop: 2 + "em" }}>
          <hr style={{ border: 2 + "px solid" }}></hr>
        </div>
        <Layout pageTitle="My Work">
          <br /> <br /> <br /> <br />
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            I interned as a cyberinfastructure engineer at the Federal Reserve
            Bank of KC, as well as a global analyst at Lockton Companies! Before
            that I made coffee ☕️.
          </p>
          <br />
          <br /> <br />
          <ScrollDownMessage />
          <br /> <br />
          <section className={extendedBackgroundSection}>
            <div>
              <h2>Experience</h2>
              <h3>Cyberinfastructure Engineer Intern</h3>
              <h4>Federal Reserve Bank of Kansas City </h4>
              <h5>
                Center for the Advancement of Data and Research in Economics
              </h5>
              <p>
                I worked with the CADRE team to develop and maintain the
                cyberinfastructure that supports the data and research needs of
                the Federal Reserve System.
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
          <Timeline events={workExperience} />
          <EndOfPageDetector />
          {/* <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> */}
        </Layout>
      </PageEndProvider>
    </>
  );
}

export const query = graphql`
  query {
    allWorkExperienceJson {
      edges {
        node {
          title
          company
          role
          period
          description
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Work" />

// Step 3: Export your component
export default WorkPage