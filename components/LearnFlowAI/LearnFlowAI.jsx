import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext';

function LearnFlowAI() {
    const navigate = useNavigate();
    const { userData, isDarkMode, toggleTheme } = useUser();
    const [plusOpen, setPlusOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isChatting, setIsChatting] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSearch = (e) => {
        setInputValue(e.target.value);
        if (e.target.value.trim() !== "") {
            setIsChatting(true);
        } else {
            setIsChatting(false);
        }
    };

    return (
        <div className={`ai-chat-root ${sidebarOpen ? 'sidebar-active' : ''} ${isDarkMode ? 'theme-night' : 'theme-day'}`}>
            {/* Header / Branding */}
            <div className="ai-chat-header">
                <button className="back-to-home" onClick={() => navigate('/dashboard')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>
                <div className="chatbot-branding">
                    <div className="ai-brand-logo-wrapper">
                        <div className="ai-tiny-icon"></div>
                        <div className="online-indicator"></div>
                    </div>
                    <div className="chatbot-text-info">
                        <h1 className="chatbot-name">LearnFlow Chatbot</h1>
                        <span className="ai-status-text">AI Powered • Always Active</span>
                    </div>
                </div>
            </div>

            {/* Sidebar Toggle Button */}
            <button className={`sidebar-toggle-btn ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </button>

            {/* Sidebar Overlay */}
            <div className={`ai-sidebar-overlay ${sidebarOpen ? 'visible' : ''}`} onClick={() => setSidebarOpen(false)}></div>

            {/* Sidebar Panel */}
            <aside className={`ai-sidebar-panel ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h3>AI Context</h3>
                </div>

                <div className="sidebar-content">
                    <div className="sidebar-section">
                        <button className="new-chat-btn" onClick={() => { setIsChatting(false); setSidebarOpen(false); setInputValue(""); }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            New Chat
                        </button>
                    </div>

                    <div className="sidebar-section">
                        <h4 className="section-title">Chat History</h4>
                        <div className="sidebar-list">
                            <div className="history-item">
                                <span className="history-icon">💬</span>
                                <span className="history-text">React Performance...</span>
                            </div>
                            <div className="history-item">
                                <span className="history-icon">💬</span>
                                <span className="history-text">UI Design Trends...</span>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <h4 className="section-title">My Learnings</h4>
                        <div className="sidebar-list">
                            <div className="learning-item" onClick={() => navigate('/dashboard')}>
                                <span className="learning-icon">📚</span>
                                <span className="learning-text">Active Courses</span>
                            </div>
                            <div className="learning-item">
                                <span className="learning-icon">⭐</span>
                                <span className="learning-text">Saved Concepts</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-footer">
                    <div className="user-mini-profile">
                        <div className="mini-avatar"></div>
                        <div className="mini-info">
                            <span className="mini-name">{userData.name || 'Learner'}</span>
                            <span className="mini-status">Premium Learner</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Central Greeting Area / Chat Display */}
            <div className="ai-chat-main-display">
                {!isChatting ? (
                    <div className="ai-greeting-area">
                        <div className="greeting-content">
                            <div className="ai-orb-system">
                                <div className="orb-core"></div>
                                <div className="orb-nebula"></div>
                                <div className="orb-ring-large"></div>
                                <div className="orb-ring-medium"></div>
                            </div>
                            <h2 className="greeting-text">
                                Here we <span className="gradient-text">Learn and Grow</span> together,<br />
                                <span className="sub-greeting">Happy Learning !!</span>
                            </h2>
                        </div>
                    </div>
                ) : (
                    <div className="chat-conversation-area">
                        <div className="ai-message-bubble">
                            <div className="ai-bubble-avatar"></div>
                            <div className="ai-bubble-content">
                                <p>Here iam, How can i Help you?</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Interaction Bar */}
            <div className="ai-input-wrapper">
                <div className="ai-input-container">
                    <div className="plus-menu-container">
                        <button
                            className={`plus-btn ${plusOpen ? 'open' : ''}`}
                            onClick={() => setPlusOpen(!plusOpen)}
                        >
                            <span>+</span>
                        </button>

                        {plusOpen && (
                            <div className="upload-dropup">
                                <button className="upload-item">
                                    <span className="item-icon">🎙️</span>
                                    <span>Audio</span>
                                </button>
                                <button className="upload-item">
                                    <span className="item-icon">🎥</span>
                                    <span>Video</span>
                                </button>
                                <button className="upload-item">
                                    <span className="item-icon">📄</span>
                                    <span>Text</span>
                                </button>
                            </div>
                        )}
                    </div>

                    <input
                        type="text"
                        className="ai-search-bar"
                        placeholder="Ask LearnFlow AI anything..."
                        value={inputValue}
                        onChange={handleSearch}
                    />

                    <button className="mic-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                    </button>

                    <button className="send-btn" onClick={() => setInputValue("")}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Theme Toggle (Bottom Left) */}
            <button
                className={`theme-toggle-btn ${isDarkMode ? 'dark' : 'light'}`}
                onClick={toggleTheme}
                title={isDarkMode ? "Switch to Day Mode" : "Switch to Night Mode"}
            >
                <div className="toggle-icon-wrapper">
                    {isDarkMode ? (
                        <svg className="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    ) : (
                        <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    )}
                </div>
            </button>
        </div>
    );
}

export default LearnFlowAI;
