import React from "react"
import styled from "styled-components"

const Footer = () => (
    <StyledFooter>
        © {new Date().getFullYear()} &middot; Ken Downey
    </StyledFooter>
)

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-sm);
  background-color: var(--color-header-background);
`

export default Footer
