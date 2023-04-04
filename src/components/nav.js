import React from "react"
import { Link } from "gatsby"

const Nav = ({links}) => {
    return (
        <nav>
            <ul>
                {links.length && links.map(link => (
                    <li key={link.title}>
                        <Link to={link.uri}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
