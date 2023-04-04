/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Nav from "./nav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pageLinks = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Page 2",
      url: "page-2",
    },
    { text: "Blog", url: "blog" },
  ]

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Nav links={pageLinks} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            margin: `var(--space-5) 0`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Ken Downey
        </footer>
      </div>
    </>
  )
}

export default Layout
