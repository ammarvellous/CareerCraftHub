// src/pages/Dashboard.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CareerGuidance from "../components/CareerGuidance";
import JobMarketAnalytics from "../components/JobMarketAnalytics";
import EmotionalIntelligenceHub from "../components/EmotionalIntelligenceHub";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <main>
        <CareerGuidance />
        <JobMarketAnalytics />
        <EmotionalIntelligenceHub />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;