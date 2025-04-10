import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
    <nav className="navbar">
        <a href="/" className="logo">Portfolio</a>
        <div className="nav-links">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
    </nav>

    );
};

export default Navbar;
