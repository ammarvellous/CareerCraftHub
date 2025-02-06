// src/components/Chatbot.js
import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleSend = async () => {
    const endpoint = "/api/chatbot/chat";
    const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setConversation([...conversation, { user: message, bot: data.reply }]);
    setMessage("");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {conversation.map((msg, index) => (
          <div key={index}>
            <div className="user-message">{msg.user}</div>
            <div className="bot-message">{msg.bot}</div>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;