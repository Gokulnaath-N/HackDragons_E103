import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);

    return (
        <div className="brand-header">
            <div className="nav-left">
                <div className="top-logo" onClick={() => navigate("/")}>
                    <div className="logo-icon"></div>
                    <span>LernFlow</span>
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
                                <h3 className="explore-section-title">Explore roles</h3>
                                <a href="#" className="explore-item">Data Analyst</a>
                                <a href="#" className="explore-item">Project Manager</a>
                                <a href="#" className="explore-item">Cyber Security Analyst</a>
                                <a href="#" className="explore-item">Data Scientist</a>
                                <a href="#" className="explore-item">Business Intelligence Analyst</a>
                                <a href="#" className="explore-item">Digital Marketing Specialist</a>
                                <a href="#" className="explore-item">UI / UX Designer</a>
                                <a href="#" className="explore-item">Machine Learning Engineer</a>
                                <a href="#" className="explore-item">Social Media Specialist</a>
                                <a href="#" className="explore-item">Computer Support Specialist</a>
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
            </div>

            <div className="nav-right">
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
                <div className="nav-auth">
                    <button className="login-link">Login</button>
                    <button className="signup-btn">Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
