import React from "react"
import { Link } from "gatsby"

const Nav = ({links}) => {
    return (
        <nav>
            <ul>
                {links.length && links.map(link => (
                    <li>
                        <Link to={link.url}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
