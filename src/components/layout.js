import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
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
        <nav>
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
            {/* <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                Blog
                </Link>
            </li> */}
            </ul>
        </nav>
        <main className={mainContent}>
            {/* <h1 className={heading}>{pageTitle}</h1> */}
            {children}
        </main>
        </div>
        <footer className={footerBar}>
            <p>Adrian Michael Ross &#169; 2023</p>
        </footer>
    </>
  )
}

export default Layout