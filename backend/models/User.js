const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  careerGoals: { type: String },
  pastEducation: { type: String },
  profile: {
    name: String,
    skills: [String],
    goals: [String],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;