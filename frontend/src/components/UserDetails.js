import React, { useState } from "react";
import "./UserDetails.css";

const UserDetails = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [careerGoals, setCareerGoals] = useState("");
  const [pastEducation, setPastEducation] = useState("");
  const [name, setName] = useState("");
  const [skills, setSkills] = useState([]);
  const [goals, setGoals] = useState([]);

  const handleSaveDetails = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user-details/save-details`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, email, password, careerGoals, pastEducation, name, skills, goals }),
    });
    const data = await response.json();
    if (data.message) {
      alert(data.message);
    } else {
      alert("Error saving details");
    }
  };

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <div className="form-group">
        <label>User ID</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Career Goals</label>
        <input
          type="text"
          value={careerGoals}
          onChange={(e) => setCareerGoals(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Past Education</label>
        <input
          type="text"
          value={pastEducation}
          onChange={(e) => setPastEducation(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Skills</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value.split(","))}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Goals</label>
        <input
          type="text"
          value={goals}
          onChange={(e) => setGoals(e.target.value.split(","))}
          className="form-control"
        />
      </div>
      <button onClick={handleSaveDetails} className="btn btn-primary">
        Save Details
      </button>
    </div>
  );
};

export default UserDetails;