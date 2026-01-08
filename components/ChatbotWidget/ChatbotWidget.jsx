import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ChatbotWidget() {
    const navigate = useNavigate();
    const location = useLocation();

    // Hide widget if already on the AI Chat page
    if (location.pathname === "/learnflow-ai") return null;

    return (
        <div className="chatbot-container" onClick={() => navigate("/learnflow-ai")}>
            <div className="robot-circle">
                <svg className="robot-icon" viewBox="0 0 24 24" fill="currentColor">
                    {/* Robot head/face */}
                    <rect x="6" y="6" width="12" height="10" rx="2" fill="currentColor" />
                    {/* Antenna */}
                    <circle cx="12" cy="4" r="1.5" fill="currentColor" />
                    <line x1="12" y1="5.5" x2="12" y2="6" stroke="currentColor" strokeWidth="1" />
                    {/* Left eye */}
                    <circle cx="9" cy="10" r="1.5" fill="white" />
                    {/* Right eye */}
                    <circle cx="15" cy="10" r="1.5" fill="white" />
                    {/* Mouth */}
                    <rect x="9" y="13" width="6" height="1" rx="0.5" fill="white" />
                </svg>
            </div>
            <div className="chatbot-text">Ask me ?</div>
        </div>
    );
}

export default ChatbotWidget;
