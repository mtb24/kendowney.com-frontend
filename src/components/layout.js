import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Nav from "./nav"
import Main from "./main"
import Footer from "./footer"

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
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
