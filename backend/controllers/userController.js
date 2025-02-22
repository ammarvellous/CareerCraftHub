const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register User
const registerUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    // userid will be email till @ symbol
    const userId = email.substring(0, email.indexOf('@'));
    user = new User({ userId, email, password });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({ message: "User registered successfully", token });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      const token = generateToken(user);
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get User Profile
const getUserProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };