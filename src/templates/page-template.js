import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

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
        <h1>{props.data.wpPage.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.data.wpPage.content }} />
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default PageTemplate
