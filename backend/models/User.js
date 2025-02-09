const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    name: String,
    careerGoals: String,
    pastEducation: String,
    skills: [String],
    goals: [String],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;