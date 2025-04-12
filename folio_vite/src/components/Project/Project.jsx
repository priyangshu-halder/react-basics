import React from "react";
import styles from "./Project.module.css";

const Project = () => {
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/path/to/project1.jpg", // You'll need to add actual images
      description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://project1-demo.com",
      codeLink: "https://github.com/username/project1"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Web Application",
      image: "/path/to/project2.jpg",
      description: "A productivity application that helps users organize tasks, set deadlines, and track progress.",
      technologies: ["React", "Redux", "Firebase"],
      demoLink: "https://project2-demo.com",
      codeLink: "https://github.com/username/project2"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      category: "API Integration",
      image: "/path/to/project3.jpg",
      description: "A weather application that provides real-time forecasts, historical data, and location-based weather information.",
      technologies: ["JavaScript", "REST API", "Chart.js", "Geolocation API"],
      demoLink: "https://project3-demo.com",
      codeLink: "https://github.com/username/project3"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "UI/UX Design",
      image: "/path/to/project4.jpg",
      description: "A personal portfolio website showcasing skills, projects, and professional experience.",
      technologies: ["React", "CSS Modules", "Framer Motion"],
      demoLink: "https://project4-demo.com",
      codeLink: "https://github.com/username/project4"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionSubtitle}>Recent work I've completed</p>
        
        <div className={styles.projectsGrid}>
          {projectsData.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;