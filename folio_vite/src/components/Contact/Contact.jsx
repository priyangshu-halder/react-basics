import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setFormStatus({
            submitted: true,
            error: false,
            message: "Thanks for your message! I'll get back to you soon."
        });

        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <p className={styles.sectionSubtitle}>Let's work together</p>

                <div className={styles.contactWrapper}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <h4 className={styles.infoTitle}>Email</h4>
                            <p className={styles.infoContent}>contact.priyangshu.work@gmail.com</p>
                        </div>

                        <div className={styles.infoItem}>
                            <h4 className={styles.infoTitle}>Location</h4>
                            <p className={styles.infoContent}>Kolkata, West Bengal</p>
                        </div>

                        <div className={styles.infoItem}>
                            <h4 className={styles.infoTitle}>Availability</h4>
                            <p className={styles.infoContent}>Freelance & Full-time</p>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                GitHub
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className={styles.contactForm}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.formLabel}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={styles.formControl}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={styles.formControl}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className={styles.formControl}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.formLabel}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className={styles.formControl}
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>Send Message</button>

                            {formStatus.submitted && (
                                <p className={`${styles.formMessage} ${formStatus.error ? styles.error : styles.success}`}>
                                    {formStatus.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;