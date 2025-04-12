import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>Portfolio</a>
        <div className={styles.navlinks}>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    );
};

export default Navbar;
