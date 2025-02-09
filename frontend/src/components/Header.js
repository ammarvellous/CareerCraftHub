// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/user-details");
  };

  return (
    <header className="header">
      <div className="logo">CareerCraft AI</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/career-guidance">Career Guidance</a></li>
          <li><a href="/job-market-analytics">Job Market Analytics</a></li>
          <li><a href="/emotional-intelligence-hub">Emotional Intelligence Hub</a></li>
          <li><button onClick={handleProfileClick} className="profile-button">Profile</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;