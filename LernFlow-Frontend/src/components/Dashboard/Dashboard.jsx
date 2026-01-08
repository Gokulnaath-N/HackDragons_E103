
import React, { useState, useEffect } from "react";
import { useUser } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import { allCourses } from "../../data/courses";

const categories = [
    "All", "Artificial Intelligence", "Data Science", "Web Development", "Physics", "Mathematics", "Software Engineering"
];

function Dashboard() {
    const { userData } = useUser();
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("All");
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Shuffle and take 12 courses (3 rows of 4)
        const shuffled = [...allCourses]
            .sort(() => 0.5 - Math.random())
            .slice(0, 12);
        setCourses(shuffled);
    }, []);

    const filteredCourses = activeCategory === "All"
        ? courses
        : courses.filter(c => c.category === activeCategory);

    return (
        <div className="dashboard-root">
            <div className="dashboard-container">
                <header className="dashboard-header">
                    <h1 className="welcome-text">
                        Welcome back, <span className="accent-text">{userData.name || 'Learner'}</span>
                    </h1>
                    <p className="dashboard-subtitle">Continue your learning journey or discover something new</p>
                </header>

                <div className="stats-grid">
                    <div className="stat-card streak">
                        <div className="stat-icon-box">
                            <span className="stat-icon">🔥</span>
                        </div>
                        <div className="stat-info">
                            <span className="stat-label">Streak</span>
                            <span className="stat-value">0 days</span>
                        </div>
                    </div>
                    <div className="stat-card hours">
                        <div className="stat-icon-box">
                            <span className="stat-icon">⏱️</span>
                        </div>
                        <div className="stat-info">
                            <span className="stat-label">This Week</span>
                            <span className="stat-value">0 hrs</span>
                        </div>
                    </div>
                    <div className="stat-card courses-stat">
                        <div className="stat-icon-box">
                            <span className="stat-icon">📚</span>
                        </div>
                        <div className="stat-info">
                            <span className="stat-label">Courses</span>
                            <span className="stat-value">0 active</span>
                        </div>
                    </div>
                    <div className="stat-card xp">
                        <div className="stat-icon-box">
                            <span className="stat-icon">✨</span>
                        </div>
                        <div className="stat-info">
                            <span className="stat-label">XP Earned</span>
                            <span className="stat-value">0</span>
                        </div>
                    </div>
                </div>

                <div className="explore-section">
                    <h2 className="section-title">Explore Courses</h2>
                    <div className="category-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="course-grid">
                        {filteredCourses.map((course, idx) => (
                            <div
                                key={course.id}
                                className="course-item-card"
                                style={{ '--delay': `${idx * 0.05}s`, cursor: 'pointer' }}
                                onClick={() => navigate(`/course/${course.id}`)}
                            >
                                <div className="course-preview">
                                    <img src={course.image} alt={course.title} />
                                    <div className="course-duration">
                                        <span>🕒 {course.duration}</span>
                                    </div>
                                    <div className="course-badge">{course.category.split(' ')[0]}</div>
                                </div>
                                <div className="course-details">
                                    <span className="course-cat-label">{course.category}</span>
                                    <h3 className="course-title">{course.title}</h3>
                                    <p className="course-desc">Master the core concepts of {course.category.toLowerCase()} with industry projects.</p>
                                    <div className="course-meta">
                                        <span className="rating">⭐ {course.rating}</span>
                                        <span className="students">👥 {course.students}</span>
                                        <div className="go-arrow">→</div>
                                    </div>
                                    <div className="course-tags">
                                        {course.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
