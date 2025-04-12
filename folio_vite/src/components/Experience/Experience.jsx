import React from "react";
import styles from "./Experience.module.css"

const Experience = () => {

    const experienceData = [
        {
            id: 1,
            company: "Tech Innovations Inc.",
            position: "Senior Frontend Developer",
            period: "Jan 2023 - Present",
            description: "Developed and maintained multiple React-based web applications, improving performance by 40%. Implemented responsive design principles and collaborated with UI/UX designers to create intuitive user interfaces.",
            skills: ["React", "TypeScript", "Redux", "Tailwind CSS"]
        },
        {
            id: 2,
            company: "Digital Solutions Co.",
            position: "Full Stack Developer",
            period: "Mar 2021 - Dec 2022",
            description: "Built RESTful APIs using Node.js and Express, integrated with MongoDB database. Developed frontend interfaces with React and implemented authentication systems.",
            skills: ["Node.js", "Express", "MongoDB", "React", "JWT"]
        },
        {
            id: 3,
            company: "WebTech Startup",
            position: "Junior Web Developer",
            period: "Jun 2020 - Feb 2021",
            description: "Assisted in developing responsive websites for clients across various industries. Implemented designs from Figma mockups and collaborated in an agile development environment.",
            skills: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"]
        }
    ];
    
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>My Experience</h2>
                <p className={styles.sectionSubtitle}>My professional journey</p>

                <div className={styles.timeline}>
                    {experienceData.map((exp) => (
                        <div key={exp.id} className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.companyName}>{exp.company}</h3>
                                <h4 className={styles.position}>{exp.position}</h4>
                                <p className={styles.period}>{exp.period}</p>
                                <p className={styles.description}>{exp.description}</p>
                                <div className={styles.skills}>
                                    {exp.skills.map((skill, index) => (
                                        <span key={index} className={styles.skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience