import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import '../../global.css'
import {
  container,
  // heading,
  // navLinks,
  // navLinkItem,
  navLinkText,
  // siteTitle,
  mainContent,
  sitemapContainer,
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

const social = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/adrianmross",
  },
  {
    name: "GitHub",
    url: "https://github.com/adrianmross",
  },
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

  // could add a feature that know's what page you're on and highlights it in the sitemap

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
      <sitemap className={sitemapContainer}>
          <hr style={{ border: "1px solid" }}/>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
              <h3>SITEMAP:</h3>
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
            <div style={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
              <h3>SOCIALS:</h3>
              <ul style={{ listStyle: "none", paddingInlineStart: 0 }}>
                {social.map(page => (
                  <li key={page.name}>
                    <Link to={page.url} className={navLinkText}>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </sitemap>
      <footer className={footerBar}>
        <p>Adrian Michael Ross &#169; 2023</p>
      </footer>
    </>
  )
}

export default Layout