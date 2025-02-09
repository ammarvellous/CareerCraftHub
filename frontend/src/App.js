import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import LoginSignup from "./pages/LoginSignup";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CareerGuidance from "./components/CareerGuidance";
import JobMarketAnalytics from "./components/JobMarketAnalytics";
import EmotionalIntelligenceHub from "./components/EmotionalIntelligenceHub";
import ProtectedRoute from './components/ProtectedRoute';
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Chatbot" element={<Chatbot />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/CareerGuidance" element={<CareerGuidance />} />
          <Route path="/EmotionalIntelligenceHub" element={<EmotionalIntelligenceHub />} />
          <Route path="/JobMarketAnalytics" element={<JobMarketAnalytics />} />
          <Route path="/ProtectedRoute" element={<ProtectedRoute />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;