// Step 1: Import React
import * as React from 'react'
import {
  Layout,
  Seo,
  EndOfPageDetector,
  PageEndProvider,
} from "../components";

// Step 2: Define your component
const ContactPage = () => {
  return (
    <>
      <PageEndProvider>
        {/* Header */}
        <div style={{ padding: 1 + "em", paddingTop: 2 + "em" }}>
          <hr style={{ border: 2 + "px solid" }}></hr>
        </div>
        <Layout pageTitle="Contact">
          <br /> <br /> <br /> <br />
          <br />
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Reach out to me if you want to chat about my work experience or
            anything else!
          </p>
          <br />
          <EndOfPageDetector />
          {/* <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> */}
        </Layout>
      </PageEndProvider>
    </>
  );
}

export const Head = () => <Seo title="Contact" />

// Step 3: Export your component
export default ContactPage;