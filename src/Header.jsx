import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>


            <header>

                <div className="container">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" >Home</Link>
                            </li>
                            <li>
                                <Link to="/about" >About</Link>
                            </li>
                            <li>
                                <Link to="/contact-Us" >Contant-Us</Link>
                            </li>
                            <li>
                                <Link to="/services" >Services</Link>
                            </li>
                            <li>
                                <Link to="/books" >Books</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;