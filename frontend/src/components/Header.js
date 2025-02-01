// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">CareerCraft AI</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/career-guidance">Career Guidance</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/chatbot">Chatbot</Link>
      </nav>
      <div className="profile-icon">
        <img src="profile.png" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;