import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import "../components/layout.css"
import Nav from "../components/nav"
import Main from "../components/main"
import Footer from "../components/footer"

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
      <Header
        siteTitle={data.allSite.nodes[0]?.siteMetadata?.title || `Title`}
      />
      <Nav links={data.allWpPage.nodes} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
