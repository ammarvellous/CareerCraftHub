// backend/routes/chatbotRoutes.js
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Corrected instantiation

router.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Correct API method
    const response = await model.generateContent(message); // Corrected function call

    // Extract response text
    const reply = response?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
    
    res.status(200).json({ reply });
  } catch (err) {
    console.error("Chatbot API Error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;