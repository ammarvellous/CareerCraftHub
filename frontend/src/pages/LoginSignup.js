// src/pages/LoginSignup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/users/login" : "/api/users/register";
    console.log(process.env.REACT_APP_API_URL)
    const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="login-signup-container">
      <div className="background-illustration"></div>
      <div className="form-container">
        <h1>CareerCraft AI</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;