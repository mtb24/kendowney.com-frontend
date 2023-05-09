import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const SiteHeader = ({ siteTitle }) => (
  <SiteHeader.Styled>
    <Link
      to='/'
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <div>&lt;K2 /&gt;</div>
  </SiteHeader.Styled>
)

SiteHeader.Styled = styled.header`
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-header-background);
`

SiteHeader.propTypes = {
  /**
   * String to display as the site title
   */
  siteTitle: PropTypes.string.isRequired,
}

SiteHeader.defaultProps = {
  siteTitle: `Title missing...`,
}

export default SiteHeader
