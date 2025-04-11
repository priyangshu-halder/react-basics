import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Priyangshu</h1>
                <p className={styles.subtitle}>I'm a Fullstack Developer</p>
                <p className={styles.description}>
                    I craft modern web apps with clean code, elegant UI, and seamless UX. 
                    With a passion for problem-solving and a love for learning, I specialize 
                    in building scalable and performant applications from frontend to backend.
                </p>
                <a href="#contact" className={styles.ctaButton}>Contact Me</a>
            </div>
        </section>
    );
};

export default Hero;
