import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <img src="" alt="LOGO"/>
        <nav>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header