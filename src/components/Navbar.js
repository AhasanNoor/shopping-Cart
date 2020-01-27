import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <Link to="/" className="brand-logo">Shop</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/cart">My Cart</NavLink></li>
                            <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
