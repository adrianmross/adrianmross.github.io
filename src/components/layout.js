import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import '../../global.css'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    mainContent,
    footerBar,
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <div className={container}>
        {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
        {/* <nav>
            <ul className={navLinks}>
            <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                Home
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>
                About
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                Blog
                </Link>
            </li>
            </ul>
        </nav> */}
        <main className={mainContent}>
            {/* <h1 className={heading}>{pageTitle}</h1> */}
            {children}
        </main>
        </div>
        <sitemap>
          <div style={{padding: 1+"em", paddingTop: 2+"em"}}>
            <hr style={{ border: 1+"px solid" }}></hr>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <div style={{display: "flex", flexDirection: "column", textAlign: "left", lineHeight: 0.1+"em", fontFamily: "Supply Mono", fontSize: 0.875+"em"}}>
                <p>SITEMAP:</p>
                <p>
                  <Link to="/" className={navLinkText}>
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/about" className={navLinkText}>
                    About
                  </Link>
                </p>
              </div>
              <div style={{display: "flex", flexDirection: "column", textAlign: "right", lineHeight: 0.1+"em", fontFamily: "Supply Mono", fontSize: 0.875+"em"}}>
                <p>SOCIALS:</p>
                <p>
                  <Link to="https://linkedin.com/in/adrianmross" className={navLinkText}>
                    LinkedIn
                  </Link>
                </p>
                <p>
                  <Link to="https://github.com/adrianmross" className={navLinkText}>
                    GitHub
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </sitemap>
        <footer className={footerBar}>
            <p style={{fontFamily: "Supply Mono", fontSize: 0.875+"em"}}>Adrian Michael Ross &#169; 2023</p>
        </footer>
    </>
  )
}

export default Layout