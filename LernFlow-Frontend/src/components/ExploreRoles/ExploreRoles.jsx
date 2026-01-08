import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExploreRoles() {
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [levelFilter, setLevelFilter] = useState("Beginner");
    const [isVisible, setIsVisible] = useState(false);

    const baseRoles = [
        { title: "Data Analyst", desc: "Transforming raw data into actionable business insights.", accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)" },
        { title: "Project Manager", desc: "Leading teams to deliver successful products on time.", accent: "linear-gradient(135deg, #FFA500 0%, #FFD700 100%)" },
        { title: "Cyber Security Analyst", desc: "Protecting systems from digital threats and attacks.", accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)" },
        { title: "Data Scientist", desc: "Uncovering insights from complex datasets using AI.", accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)" },
        { title: "Business Intelligence Analyst", desc: "Analyzing data to support strategic business decisions.", accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)" },
        { title: "Digital Marketing Specialist", desc: "Driving growth through modern digital channels.", accent: "linear-gradient(135deg, #FFA500 0%, #FFD700 100%)" },
        { title: "UI / UX Designer", desc: "Crafting intuitive and beautiful digital experiences.", accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)" },
        { title: "Machine Learning Engineer", desc: "Building intelligent systems that learn from data.", accent: "linear-gradient(135deg, #FFA500 0%, #FFD700 100%)" },
        { title: "Social Media Specialist", desc: "Engaging audiences and building brands online.", accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)" },
        { title: "Computer Support Specialist", desc: "Solving technical issues and supporting users.", accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)" }
    ];

    const generateRoles = () => {
        return Array.from({ length: 100 }, (_, i) => {
            const base = baseRoles[i % baseRoles.length];
            return {
                id: i + 1,
                title: `${base.title} ${Math.floor(i / baseRoles.length) > 0 ? `Level ${Math.floor(i / baseRoles.length) + 1}` : ''}`.trim(),
                description: base.desc,
                accent: base.accent
            };
        });
    };

    const [roles, setRoles] = useState(generateRoles());

    const shuffleRoles = () => {
        setIsVisible(false);
        setTimeout(() => {
            setRoles(prevRoles => [...prevRoles].sort(() => Math.random() - 0.5));
            setIsVisible(true);
        }, 300);
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleLevelChange = (e) => {
        setLevelFilter(e.target.value);
        shuffleRoles();
    };

    const filters = [
        "All",
        "Software Engineering & IT",
        "Business",
        "Sales & Marketing",
        "Data Science & Analytics",
        "Healthcare"
    ];

    return (
        <div className={`explore-roles-page ${isVisible ? 'fade-in' : ''}`}>
            <div className="mesh-gradient"></div>

            <div className="explore-roles-header">
                <h1>Explore roles</h1>
                <p className="explore-description">
                    Advance in your career with recognized credentials across levels. Choose from 100 roles.
                </p>
            </div>

            <div className="filter-section">
                <div className="filter-row">
                    <div className="level-filter">
                        <select
                            value={levelFilter}
                            onChange={handleLevelChange}
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
            </div>

            <div className="roles-grid" key={levelFilter}>
                {roles.map((role, index) => (
                    <div
                        key={role.id}
                        className="role-card"
                        style={{ '--delay': `${Math.min(index * 0.02, 1)}s` }}
                        onClick={() => navigate(`/role/${role.id}`)}
                    >
                        <div className="role-card-image-container abstract-container">
                            <div className="abstract-shape" style={{ background: role.accent }}></div>
                            <div className="abstract-blob"></div>
                            <div className="abstract-ring"></div>
                            <div className="role-accent-overlay"></div>
                        </div>
                        <div className="role-card-content">
                            <h3 className="role-card-title">{role.title}</h3>
                            <p className="role-card-description">{role.description}</p>
                            <button className="start-learning-btn" onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/role/${role.id}`);
                            }}>
                                <span>Start Learning</span>
                                <div className="btn-glow"></div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreRoles;
