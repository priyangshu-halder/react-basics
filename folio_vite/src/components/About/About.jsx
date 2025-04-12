import React from "react";
import styles from './About.module.css';

const About = () => {
    // Replace percentage-based skills with logo information
    const skills = [
        { name: "HTML", icon: "html5-icon.svg" },
        { name: "CSS", icon: "css3-icon.svg" },
        { name: "JavaScript", icon: "javascript-icon.svg" },
        { name: "React", icon: "react-icon.svg" },
        { name: "Git", icon: "git-icon.svg" },
        
    ];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <h3 className={styles.aboutSubtitle}>I'm Priyangshu Halder, a Web Developer</h3>
                        <p className={styles.aboutDescription}>
                            My approach combines creative design thinking with technical expertise, allowing me to craft solutions 
                            that meet both aesthetic and functional requirements. I believe in clean code, responsive design, 
                            and staying current with the latest web technologies.
                        </p>
                        <p className={styles.aboutDescription}>
                            I've had the opportunity to work 
                            on a diverse range of projects, from e-commerce platforms to complex web applications. 
                            I'm passionate about creating intuitive, user-friendly experiences that solve real-world problems.
                        </p>
                        
                        <div className={styles.personalInfo}>
                            
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Email:</span>
                                <span className={styles.infoValue}>contact.priyangshu.work@gmail.com</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Freelance:</span>
                                <span className={styles.infoValue}>Available</span>
                            </div>
                        </div>
                        
                        <a href="#contact" className={styles.contactBtn}>Get In Touch</a>
                    </div>
                    
                    <div className={styles.aboutSkills}>
                        <h3 className={styles.skillsTitle}>Technical Skills</h3>
                        <div className={styles.skillsGrid}>
                            {skills.map((skill, index) => (
                                <div key={index} className={styles.skillItem}>
                                    <div className={styles.skillLogo}>
                                        <img 
                                            src={`/assets/skills/${skill.icon}`} 
                                            alt={`${skill.name} icon`} 
                                            className={styles.skillIcon}
                                        />
                                    </div>
                                    <h4 className={styles.skillName}>{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;