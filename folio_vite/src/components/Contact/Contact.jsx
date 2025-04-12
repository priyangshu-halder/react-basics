import React from "react";
import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <div>
                <div>
                    <h4 >Email</h4>
                    <p >hello@example.com</p>
                </div>
                <div>
                    <h4 >Location</h4>
                    <p >San Francisco, CA</p>
                </div>
                <div>
                    <h4 >Availability</h4>
                    <p >Freelance & Full-time</p>
                </div>
            </div>
        </div>
    );
};

export default Contact