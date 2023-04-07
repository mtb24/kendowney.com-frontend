import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"


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
      <StyledMain>{children}</StyledMain>
      <StyledFooter>
        © {new Date().getFullYear()} &middot; Ken Downey
      </StyledFooter>
    </>
  )
}

const StyledMain = styled.main`
  padding: var(--space-3) var(--space-2);
  overflow-y: scroll;

  h1 {
    text-align: center;
  }
  
  div figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 1rem;
    
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`
const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-sm);
  background-color: var(--color-header-background);
`

export default Layout
