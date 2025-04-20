import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Medicine Expiry Tracker</h1>
        <p>Ensuring safety, reducing waste, and improving inventory management.</p>
      </div>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            We aim to help individuals, pharmacists, and healthcare facilities efficiently track medicine expiry dates.
            Our platform provides timely alerts to prevent the use of expired medicines, ensuring health and safety.
          </p>
        </div>

        <div className="about-text">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>📌 Easy medicine tracking and management.</li>
            <li>📌 Instant notifications for expiry alerts.</li>
            <li>📌 Helps reduce medicine wastage.</li>
            <li>📌 Provides insightful analytics.</li>
          </ul>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="../src/assets/pharmacy1.jpg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="../src/assets/pharmacy2.jpg" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-card">
            <img src="../src/assets/pharmacy3.jpg" alt="Team Member" />
            <h3>David Wilson</h3>
            <p>Product Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
