import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../assets/css/header.css'

const Header = () => {
    const data = useStaticQuery(graphql`
    query{
        site {
              siteMetadata {
                  title
            author
          }
        }
      }
    `)
    return (
        <header>
            <h1>{data.site.siteMetadata.title}</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header