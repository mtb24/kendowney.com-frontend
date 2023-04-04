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
    query {
      allWpPage {
        nodes {
          id
          title
          uri
        }
      }
      allSite {
        nodes {
          siteMetadata {
            title
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.allSite.nodes[0]?.siteMetadata?.title || `Title`} />
      <Nav links={data.allWpPage.nodes} />
      <main>{children}</main>
      <footer
        style={{
          margin: `var(--space-5) 0`,
          fontSize: `var(--font-sm)`,
        }}
      >
        © {new Date().getFullYear()} &middot; Ken Downey
      </footer>
    </>
  )
}

export default Layout
