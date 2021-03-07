import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../images/logo.png";

const Navbar = () => {
    const links = useRef();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-center">
                <BiMenuAltRight
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <Link to="/">
                    <div className="logo-wrapper">
                        <img src={logo} alt="The Onion Logo" className="logo" />
                        <span className="logo-text">
                            the <span className="onion">ONION</span>
                        </span>
                    </div>
                </Link>
                <ul className={`nav-links ${menuOpen && "active"}`} ref={links}>
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/search" onClick={() => setMenuOpen(false)}>
                            Search meal
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
