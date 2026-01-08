
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCourses } from '../../data/courses';
import api from '../../api';

function CourseView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Videos');
    const [videoSource, setVideoSource] = useState('ai');

    // State for backend data
    const [courseContent, setCourseContent] = useState({ youtube: [], ai: [] });
    const [loading, setLoading] = useState(false);

    // Find course by ID or fallback
    const course = allCourses.find(c => c.id === parseInt(id)) || allCourses[0];

    useEffect(() => {
        const fetchContent = async () => {
            if (!course) return;
            setLoading(true);
            try {
                // Pass course title to backend to get relevant content
                const response = await api.get('/courses/content', {
                    params: { courseName: course.title }
                });
                setCourseContent(response.data.videos);
            } catch (error) {
                console.error("Failed to fetch course content:", error);
            } finally {
                setLoading(false);
            }
        };

        if (activeTab === 'Videos') {
            fetchContent();
        }
    }, [course, activeTab]);

    return (
        <div className="course-view-root">
            {/* Top Bar Navigation */}
            <div className="course-view-top-bar">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>
                <div className="header-info">
                    <h2 className="course-view-title">{course.title}</h2>
                    <span className="course-view-cat">{course.category}</span>
                </div>
                <div className="progress-section">
                    <span className="progress-text">0% complete</span>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: '0%' }}></div>
                    </div>
                </div>
            </div>

            {/* Hero Image Section */}
            <div className="course-hero-banner">
                <img src={course.image} alt={course.title} className="hero-img" />
                <div className="hero-vignette"></div>
            </div>

            {/* Metadata & Enroll Bar */}
            <div className="course-meta-bar">
                <div className="meta-info-left">
                    <span className="meta-item">🕒 {course.duration}</span>
                    <span className="meta-item">👥 {course.students} students</span>
                    <span className="meta-item">⭐ {course.rating}</span>
                    <div className="meta-tags">
                        {course.tags.map(tag => (
                            <span key={tag} className="meta-tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <button className="enroll-now-btn">
                    <svg className="bookmark-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Enroll Now
                </button>
            </div>

            {/* Bottom Content Navigation */}
            <div className="course-content-tabs">
                <button className={`content-tab ${activeTab === 'Videos' ? 'active' : ''}`} onClick={() => setActiveTab('Videos')}>
                    <span className="tab-icon">▶️</span>
                    <span className="tab-label">Videos</span>
                    <span className="tab-count">({videoSource === 'ai' ? courseContent.ai.length : courseContent.youtube.length})</span>
                </button>
                <button className={`content-tab ${activeTab === 'Audio' ? 'active' : ''}`} onClick={() => setActiveTab('Audio')}>
                    <span className="tab-icon">🎧</span>
                    <span className="tab-label">Audio</span>
                    <span className="tab-count">(0)</span>
                </button>
                <button className={`content-tab ${activeTab === 'Reading' ? 'active' : ''}`} onClick={() => setActiveTab('Reading')}>
                    <span className="tab-icon">📄</span>
                    <span className="tab-label">Reading</span>
                    <span className="tab-count">(0)</span>
                </button>
                <button className={`content-tab ${activeTab === 'Quiz' ? 'active' : ''}`} onClick={() => setActiveTab('Quiz')}>
                    <span className="tab-icon">❓</span>
                    <span className="tab-label">Quiz</span>
                    <span className="tab-count">(0)</span>
                </button>
                <button className={`content-tab ${activeTab === 'Mentor' ? 'active' : ''}`} onClick={() => setActiveTab('Mentor')}>
                    <span className="tab-icon">🎙️</span>
                    <span className="tab-label">AI Voice Mentor</span>
                    <span className="tab-count">(0)</span>
                </button>
            </div>

            {/* Tab Content Area */}
            <div className="tab-content-display">
                {activeTab === 'Videos' && (
                    <div className="video-section">
                        <div className="video-controls">
                            <label className="source-label">Video Source:</label>
                            <div className="custom-select-wrapper">
                                <select
                                    className="video-source-select"
                                    value={videoSource}
                                    onChange={(e) => setVideoSource(e.target.value)}
                                >
                                    <option value="ai">AI-Generated Videos</option>
                                    <option value="youtube">YouTube Videos</option>
                                </select>
                                <svg className="select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>

                        <div className="video-grid" style={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: '20px',
                            paddingBottom: '20px',
                            scrollBehavior: 'smooth'
                        }}>
                            {loading ? (
                                <p>Loading videos...</p>
                            ) : (
                                <>
                                    {videoSource === 'ai' && courseContent.ai.length > 0 ? (
                                        courseContent.ai.map((video, idx) => (
                                            <div key={idx} className="video-card" style={{
                                                minWidth: '300px', // Ensure card width
                                                background: 'rgba(255,255,255,0.05)',
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                flexShrink: 0
                                            }}>
                                                <div className="video-thumbnail" style={{ height: '180px', background: '#000', position: 'relative' }}>
                                                    <video
                                                        width="100%"
                                                        height="100%"
                                                        controls
                                                        poster="https://via.placeholder.com/300x180/000000/FFFFFF?text=AI+Generated+Content"
                                                        style={{ objectFit: 'cover' }}
                                                    >
                                                        <source src={video.url} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </div>
                                                <div className="video-info" style={{ padding: '12px', whiteSpace: 'normal' }}>
                                                    <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{video.title}</h4>
                                                    <p style={{ margin: 0, fontSize: '14px', color: '#888' }}>{video.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : null}

                                    {videoSource === 'youtube' && courseContent.youtube.length > 0 ? (
                                        courseContent.youtube.map((video, idx) => (
                                            <div key={idx} className="video-card" style={{
                                                minWidth: '300px',
                                                background: 'rgba(255,255,255,0.05)',
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                flexShrink: 0
                                            }}>
                                                <iframe
                                                    width="100%"
                                                    height="180"
                                                    src={video.url}
                                                    title={video.title}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                                <div className="video-info" style={{ padding: '12px', whiteSpace: 'normal' }}>
                                                    <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{video.title}</h4>
                                                    <span style={{ fontSize: '12px', color: '#888' }}>Duration: {video.duration}</span>
                                                </div>
                                            </div>
                                        ))
                                    ) : null}

                                    {/* Empty States */}
                                    {!loading && videoSource === 'ai' && courseContent.ai.length === 0 && (
                                        <div className="empty-state-message">
                                            <div className="empty-icon">✨</div>
                                            <h3>AI-Generated Courses</h3>
                                            <p>AI is generating personalized video content for you...</p>
                                        </div>
                                    )}
                                    {!loading && videoSource === 'youtube' && courseContent.youtube.length === 0 && (
                                        <div className="empty-state-message">
                                            <div className="empty-icon">📹</div>
                                            <h3>YouTube Content</h3>
                                            <p>Curated YouTube videos will appear here...</p>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'Quiz' && (
                    <div className="ai-quiz-view">
                        <div className="ai-quiz-card">
                            <div className="quiz-icon-container">
                                <div className="quiz-icon-glow"></div>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h2 className="ai-quiz-headline">AI-Generated Quiz</h2>
                            <p className="ai-quiz-subtext">
                                Test your knowledge with a personalized quiz generated specifically for this course content.
                            </p>
                            <button className="ai-btn-primary">
                                <span className="sparkle-text">✨</span> Generate Quiz
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CourseView;
