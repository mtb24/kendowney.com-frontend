import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import styled from "styled-components"

export const query = graphql`
    query($id: String!) {
        wpPage(id: { eq: $id }) {
            title
            content
        }
    }
`

const PageTemplate = props => (
    <Layout>
        <StyledHeading>{props.data.wpPage.title}</StyledHeading>
        <div dangerouslySetInnerHTML={{ __html: props.data.wpPage.content }} />
    </Layout>
)

const StyledHeading = styled.h1`
    margin: 0;
    padding: 0;
    line-height: var(--line-height-dense);
    letter-spacing: -0.01em;

    b {
        color: var(--color-primary);
    }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default PageTemplate
