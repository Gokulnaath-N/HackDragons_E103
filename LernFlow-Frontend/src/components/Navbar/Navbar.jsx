import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../UserContext";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated, user, logout } = useUser();
    const isAIRoute = location.pathname === "/learnflow-ai";

    const [searchExpanded, setSearchExpanded] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const handleLogout = () => {
        logout();
        setProfileDropdownOpen(false);
        navigate('/');
    };

    return (
        <div className={`brand-header ${isAIRoute ? 'hidden' : ''}`}>
            <div className="nav-left">
                <div className="top-logo" onClick={() => navigate("/")}>
                    <div className="logo-icon"></div>
                    <span>LearnFlow</span>
                </div>
                <button className="home-link" onClick={() => navigate("/")}>Home</button>
                <div className="explore-dropdown">
                    <button
                        className="explore-link"
                        onClick={() => setExploreOpen(!exploreOpen)}
                    >
                        Explore
                        <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>

                    {exploreOpen && (
                        <div className="explore-menu">
                            <div className="explore-column">
                                <h3
                                    className="explore-section-title"
                                    onClick={() => {
                                        navigate("/explore-roles");
                                        setExploreOpen(false);
                                    }}
                                >
                                    Explore roles
                                </h3>
                                <a href="#" style={{ cursor: 'pointer' }} className="explore-item" onClick={(e) => { e.preventDefault(); navigate("/role/1"); setExploreOpen(false); }}>Data Analyst</a>
                                <a href="#" style={{ cursor: 'pointer' }} className="explore-item" onClick={(e) => { e.preventDefault(); navigate("/role/2"); setExploreOpen(false); }}>Project Manager</a>
                                <a href="#" style={{ cursor: 'pointer' }} className="explore-item" onClick={(e) => { e.preventDefault(); navigate("/role/3"); setExploreOpen(false); }}>Cyber Security Analyst</a>
                                <a href="#" style={{ cursor: 'pointer' }} className="explore-item" onClick={(e) => { e.preventDefault(); navigate("/role/4"); setExploreOpen(false); }}>Data Scientist</a>
                                <a href="#" style={{ cursor: 'pointer' }} className="explore-item" onClick={(e) => { e.preventDefault(); navigate("/role/5"); setExploreOpen(false); }}>Business Intelligence Analyst</a>
                                <a href="#" style={{ cursor: 'pointer' }} className="explore-item" onClick={(e) => { e.preventDefault(); navigate("/role/6"); setExploreOpen(false); }}>Digital Marketing Specialist</a>
                                <a href="#" style={{ cursor: 'pointer' }} className="explore-item" onClick={(e) => { e.preventDefault(); navigate("/role/7"); setExploreOpen(false); }}>UI / UX Designer</a>
                                <a href="#" style={{ cursor: 'pointer' }} className="explore-item" onClick={(e) => { e.preventDefault(); navigate("/role/8"); setExploreOpen(false); }}>Machine Learning Engineer</a>
                                <a href="#" style={{ cursor: 'pointer' }} className="explore-item" onClick={(e) => { e.preventDefault(); navigate("/role/9"); setExploreOpen(false); }}>Social Media Specialist</a>
                                <a href="#" style={{ cursor: 'pointer' }} className="explore-item" onClick={(e) => { e.preventDefault(); navigate("/role/10"); setExploreOpen(false); }}>Computer Support Specialist</a>
                                <a href="#" className="view-all-link">View all</a>
                            </div>
                            <div className="explore-column">
                                <h3 className="explore-section-title">Explore categories</h3>
                                <a href="#" className="explore-item">Artificial Intelligence</a>
                                <a href="#" className="explore-item">Business</a>
                                <a href="#" className="explore-item">Data Science</a>
                                <a href="#" className="explore-item">Information Technology</a>
                                <a href="#" className="explore-item">Computer Science</a>
                                <a href="#" className="explore-item">Healthcare</a>
                                <a href="#" className="explore-item">Physical Science and Engineering</a>
                                <a href="#" className="explore-item">Personal Development</a>
                                <a href="#" className="explore-item">Social Sciences</a>
                                <a href="#" className="explore-item">Language Learning</a>
                                <a href="#" className="explore-item">Arts and Humanities</a>
                                <a href="#" className="view-all-link">View all</a>
                            </div>
                        </div>
                    )}
                </div>
                <button className="home-link" onClick={() => navigate("/dashboard")}>Dashboard</button>
            </div>

            <div className="nav-right">
                <button className="ai-btn" onClick={() => navigate('/learnflow-ai')}>LearnFlow-AI</button>
                <div className="search-container">
                    <input
                        type="text"
                        className={`search-input ${searchExpanded ? 'expanded' : ''}`}
                        placeholder="Search..."
                        onBlur={() => setSearchExpanded(false)}
                    />
                    <svg
                        className="search-icon"
                        onClick={() => setSearchExpanded(!searchExpanded)}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </div>

                {/* Conditional rendering: Show profile or auth buttons */}
                {isAuthenticated ? (
                    <div className="profile-dropdown-container">
                        <button
                            className="profile-icon-btn"
                            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                        >
                            <div className="profile-avatar">
                                {user?.name?.charAt(0).toUpperCase() || 'U'}
                            </div>
                        </button>

                        {profileDropdownOpen && (
                            <div className="profile-dropdown">
                                <div className="profile-dropdown-header">
                                    <div className="profile-dropdown-avatar">
                                        {user?.name?.charAt(0).toUpperCase() || 'U'}
                                    </div>
                                    <div className="profile-dropdown-info">
                                        <div className="profile-dropdown-name">{user?.name || 'User'}</div>
                                        <div className="profile-dropdown-email">{user?.email || 'user@example.com'}</div>
                                    </div>
                                </div>
                                <div className="profile-dropdown-divider"></div>
                                <button className="profile-dropdown-logout" onClick={handleLogout}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="nav-auth">
                        <button className="login-link" onClick={() => navigate('/auth?mode=login')}>Login</button>
                        <button className="signup-btn" onClick={() => navigate('/auth?mode=signup')}>Sign up</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
