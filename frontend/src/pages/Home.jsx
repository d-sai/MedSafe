import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";

import {  FaPills,  FaBell,  FaSearch,  FaChartBar,  FaArrowRight,} from "react-icons/fa";

const Home = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Pharmacy Owner",
      image: "../src/assets/pharmacy1.jpg",
      text: "This app has revolutionized how we manage our inventory. We've reduced waste by 40% in just three months!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Hospital Pharmacist",
      image: "../src/assets/pharmacy2.jpg",
      text: "The alert system is incredible. We never miss an expiry date now, which has improved our compliance significantly.",
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "Clinic Manager",
      image: "../src/assets/pharmacy3.jpg",
      text: "Easy to use and extremely reliable. The dashboard insights help us make better purchasing decisions.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h2>Track, Manage & Stay Alert</h2>
          <p>Avoid wastage and expired medicines with real-time tracking.</p>
          <Link to="/login">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="../src/assets/medicine-tracker.png"
            alt="Medicine Tracker"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h3>Features</h3>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaPills />
            </div>
            <p>Add & Manage Medicines</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaBell />
            </div>
            <p>Expiry Alerts & Notifications</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaSearch />
            </div>
            <p>Search & Filter</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaChartBar />
            </div>
            <p>Dashboard Insights</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h3>How It Works</h3>
        <div className="steps-container">
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <p>Add Medicines</p>
            </div>
            <div className="step-arrow">
              <FaArrowRight />
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <p>Track Expiry Dates</p>
            </div>
            <div className="step-arrow">
              <FaArrowRight />
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <p>Get Alerts</p>
            </div>
            <div className="step-arrow">
              <FaArrowRight />
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <p>Manage Inventory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3>What Our Users Say</h3>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
