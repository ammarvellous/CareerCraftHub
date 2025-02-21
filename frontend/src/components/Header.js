// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {

  return (
    <header className="header">
      <div className="logo">CareerCraft AI</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Logout</a></li>
          <li><a href="/career-guidance">Career Guidance</a></li>
          <li><a href="/job-market-analytics">Job Market Analytics</a></li>
          <li><a href="/emotional-intelligence-hub">Emotional Intelligence Hub</a></li>
          <li><a href="/Chatbot">CRAFT-TALK</a></li>
          <li><a href="/user-details">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;