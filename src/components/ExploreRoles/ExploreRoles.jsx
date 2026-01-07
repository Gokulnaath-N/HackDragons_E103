import React, { useState } from "react";

function ExploreRoles() {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [levelFilter, setLevelFilter] = useState("Beginner");

    const filters = [
        "All",
        "Software Engineering & IT",
        "Business",
        "Sales & Marketing",
        "Data Science & Analytics",
        "Healthcare"
    ];

    return (
        <div className="explore-roles-page">
            <div className="explore-roles-header">
                <h1>Explore roles</h1>
                <p className="explore-description">
                    Advance in your career with recognized credentials across levels. Choose from 60 roles.
                </p>
            </div>

            <div className="filter-bar">
                <div className="level-filter">
                    <select
                        value={levelFilter}
                        onChange={(e) => setLevelFilter(e.target.value)}
                        className="level-dropdown"
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                <div className="category-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                            onClick={() => setSelectedFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="roles-grid">
                <div className="role-card">
                    <div className="role-card-image" style={{ background: 'linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)' }}>
                        <div className="role-card-icon">
                            <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                        </div>
                    </div>
                    <div className="role-card-content">
                        <h3 className="role-card-title">User Interface / User Experience (UI / UX) Designer</h3>
                        <p className="role-card-description">A UI/UX Designer creates and refines digital interfaces to be user-friendly and visually appealing, with skills in UI design and UX research.</p>
                        <button className="start-learning-btn">Start Learning</button>
                    </div>
                </div>

                <div className="role-card">
                    <div className="role-card-image" style={{ background: 'linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)' }}>
                        <div className="role-card-icon">
                            <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                            </svg>
                        </div>
                    </div>
                    <div className="role-card-content">
                        <h3 className="role-card-title">Cyber Security Analyst</h3>
                        <p className="role-card-description">A Cyber Security Analyst monitors IT systems, analyzes threats, finds vulnerabilities, and implements measures to protect data from cyber attacks.</p>
                        <button className="start-learning-btn">Start Learning</button>
                    </div>
                </div>

                <div className="role-card">
                    <div className="role-card-image" style={{ background: 'linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)' }}>
                        <div className="role-card-icon">
                            <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                            </svg>
                        </div>
                    </div>
                    <div className="role-card-content">
                        <h3 className="role-card-title">Cyber Security Specialist / Technician</h3>
                        <p className="role-card-description">A Cyber Security Specialist monitors systems for security issues, responds to cyber incidents, and protects sensitive data from threats.</p>
                        <button className="start-learning-btn">Start Learning</button>
                    </div>
                </div>

                <div className="role-card">
                    <div className="role-card-image" style={{ background: 'linear-gradient(135deg, #FFA500 0%, #FFD700 100%)' }}>
                        <div className="role-card-icon">
                            <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                                <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
                            </svg>
                        </div>
                    </div>
                    <div className="role-card-content">
                        <h3 className="role-card-title">Machine Learning Engineer</h3>
                        <p className="role-card-description">A Machine Learning Engineer builds and optimizes algorithms that enable computers to learn from data, using large datasets and neural networks.</p>
                        <button className="start-learning-btn">Start Learning</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreRoles;
