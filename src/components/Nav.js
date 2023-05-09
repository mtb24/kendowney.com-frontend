import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = ({ links }) => {
  return (
    <StyledNav>
      <ul>
        {links.length &&
          links.map(link => (
            <li key={link.title}>
              <Link to={link.uri}>{link.title}</Link>
            </li>
          ))}
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  margin: 0 0 var(--space-4) 0;
  ul {
    height: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    background-color: #fff4db;
    margin: 0;

    li {
      display: inline-block;
      margin: 0 var(--space-4);

      a {
        text-decoration: none;
      }
    }
  }
`

export default Nav
