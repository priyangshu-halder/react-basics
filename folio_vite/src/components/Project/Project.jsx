import React from "react";
import styles from "./Project.module.css";

const Project = () => {
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      codeLink: ""
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Web Application",
      description: "A productivity application that helps users organize tasks, set deadlines, and track progress.",
      technologies: ["Django", "React", "MySQL"],
      codeLink: ""
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionSubtitle}>Recent work I've completed</p>
        
        <div className={styles.projectsGrid}>
          {projectsData.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectInfo}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                {project.codeLink && (
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.codeLink}
                  >
                    GitHub Repository
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;