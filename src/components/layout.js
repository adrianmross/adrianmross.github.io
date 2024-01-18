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

const sitemap = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  // blog, work, food
]

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
        <div style={{ padding: "1em", paddingTop: "2em" }}>
          <hr style={{ border: "1px solid" }}></hr>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", lineHeight: "1.5em", fontFamily: "Supply Mono", fontSize: "0.875em" }}>
              <p>SITEMAP:</p>
              <ul style={{ listStyle: "none", paddingInlineStart: 0 }}>
                {sitemap.map(page => (
                  <li key={page.name}>
                    <Link to={page.route} className={navLinkText}>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "right", lineHeight: "1.5em", fontFamily: "Supply Mono", fontSize: "0.875em" }}>
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
        <p style={{ fontFamily: "Supply Mono", fontSize: "0.875em" }}>Adrian Michael Ross &#169; 2023</p>
      </footer>
    </>
  )
}

export default Layout