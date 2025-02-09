const User = require("../models/User");

const saveUserDetails = async (req, res) => {
  const { userId, email, password, careerGoals, pastEducation, name, skills, goals } = req.body;
  console.log(req.body)
  try {
    let user = await User.findOne({ userId });
    if (!user) {
      // Create a new user if not found
    }

    // Update existing user details
    if (careerGoals) user.careerGoals = careerGoals;
    if (pastEducation) user.pastEducation = pastEducation;
    if (name) user.profile.name = name;
    if (skills) user.profile.skills = skills;
    if (goals) user.profile.goals = goals;

    await user.save();

    res.status(200).json({ message: "User details saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveUserDetails };