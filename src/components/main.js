import * as React from "react"
import styled from "styled-components"

const Main = ({ children }) => <StyledMain>{children}</StyledMain>

const StyledMain = styled.main`
  padding: var(--space-3) var(--space-2);
  overflow-y: scroll;
  height: inherit;

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

export default Main
