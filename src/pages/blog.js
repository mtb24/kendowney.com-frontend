import React from 'react'
import { Link } from 'gatsby'

import Layout from '/src/components/Layout'
import Seo from '/src/components/Seo'

const BlogPage = () => (
  <Layout>
    <h1>Hi from the blog page</h1>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Ken Downey's Blog" />

export default BlogPage
