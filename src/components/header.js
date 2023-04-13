import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
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

export default Header
