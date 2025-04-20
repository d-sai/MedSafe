import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import "../pages/Home.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const menuRef = useRef();
  const toggleRef = useRef();
  const navigate = useNavigate();
  // Check user's preferred color scheme on initial load
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(()=>{
    const handleClickOutside =(event) =>{
      if(menuOpen && menuRef.current && !menuRef.current.contains(event.target) && !toggleRef.current.contains(event.target)){
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  },[menuOpen]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    // logout();  
    localStorage.removeItem("token");
    setMenuOpen(false); // Optional: close menu
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Medicine Expiry Tracker</h1>
      </Link>

      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <div ref={toggleRef} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`} ref={menuRef}>
        {isAuthenticated ? (
          <>
            <FaUserCircle size={24} style={{ marginRight: "10px" }} />
            <button onClick={()=>{handleLogout(); setMenuOpen(false);}}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button>Login</button>
            </Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              <button>Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;