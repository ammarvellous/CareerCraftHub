const User = require("../models/User");

const saveUserDetails = async (req, res) => {
  const { userId, email, password, profile } = req.body;
  const { name, careerGoals, pastEducation, skills, goals } = profile;
  console.log(req.body)
  try {
    let user = await User.findOne({ userId });
    if (!user) {
      // Create a new user if not found
      user = new User({
        userId,
        email,
        password,
        profile: {
          name,
          careerGoals,
          pastEducation,
          skills,
          goals,
        },
      });
    } else {
      // Update existing user details
      if (email) user.email = email;
      if (password) user.password = password;
      if (name) user.profile.name = name;
      if (careerGoals) user.profile.careerGoals = careerGoals;
      if (pastEducation) user.profile.pastEducation = pastEducation;
      if (skills) user.profile.skills = skills;
      if (goals) user.profile.goals = goals;
    }

    await user.save();

    res.status(200).json({ message: "User details saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveUserDetails };