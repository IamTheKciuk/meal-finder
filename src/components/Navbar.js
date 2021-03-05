import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <div className="logo-wrapper">
                        <img src={logo} alt="The Onion Logo" className="logo" />
                    </div>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search meal</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
