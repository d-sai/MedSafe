import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css";
const Footer = () => {
  return (
    <>
      <footer>
        <p>
          <Link to="/about">
            <button style={{ background: "none" }}>About</button>|
          </Link>
          <Link to="/contact">
            <button style={{ background: "none" }}>Contact</button>|
          </Link>
          <Link to="####">
            <button style={{ background: "none" }}>Privacy Policy</button>
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
