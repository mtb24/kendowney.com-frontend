import * as React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import styled from "styled-components"

export const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <div>
      &lt;K2 /&gt;
    </div>
  </StyledHeader>
)

const StyledHeader = styled.header`
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-header-background);
`

Header.propTypes = {
  /**
   * String to display as the site title
   */
  siteTitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  siteTitle: `Title missing...`,
}
