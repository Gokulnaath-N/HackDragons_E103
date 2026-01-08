import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function RoleDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, [id]);

    const baseRolesData = {
        "Data Analyst": {
            title: "Data Analyst",
            intro: "Harness the power of data to drive business decisions by uncovering trends and patterns.",
            description: "A Data Analyst collects, processes, and performs statistical analyses of data. They transform raw data into useful information that can be used to make business decisions.",
            skills: ["Excel", "SQL", "Tableau", "Python", "Statistics", "Data Visualization", "Critical Thinking"],
            salary: "₹3,10,000.00",
            jobs: "25,000",
            accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)",
            courses: [
                { id: 1, title: "Google Data Analytics Professional Certificate", provider: "Google", rating: "4.8", students: "1.5M", type: "Professional Certificate" },
                { id: 2, title: "IBM Data Analyst Professional Certificate", provider: "IBM", rating: "4.7", students: "400K", type: "Professional Certificate" },
                { id: 3, title: "Data Analysis and Visualization Foundations Specialization", provider: "IBM", rating: "4.8", students: "200K", type: "Specialization" }
            ]
        },
        "Project Manager": {
            title: "Project Manager",
            intro: "Guide teams to success by managing resources, timelines, and project goals efficiently.",
            description: "A Project Manager is responsible for lead project planning, execution, and monitoring. They ensure projects are completed within scope, time, and budget constraints.",
            skills: ["Leadership", "Risk Management", "Agile Methodology", "Communication", "Budgeting", "Scrum"],
            salary: "₹4,50,000.00",
            jobs: "30,000",
            accent: "linear-gradient(135deg, #FFA500 0%, #FFD700 100%)",
            courses: [
                { id: 1, title: "Google Project Management Professional Certificate", provider: "Google", rating: "4.8", students: "1.1M", type: "Professional Certificate" },
                { id: 2, title: "PMP Prep Specialization", provider: "UCI", rating: "4.7", students: "250K", type: "Specialization" },
                { id: 3, title: "Applied Project Management Certificate", provider: "IBM", rating: "4.6", students: "100K", type: "Professional Certificate" }
            ]
        },
        "Cyber Security Analyst": {
            title: "Cyber Security Analyst",
            intro: "Protect organizations from cyber threats and ensure data integrity in an evolving digital landscape.",
            description: "A Cyber Security Analyst monitors IT systems, analyzes threats, finds vulnerabilities, and implements measures to protect data from cyber attacks.",
            skills: ["Network Security", "Threat Analysis", "Incident Response", "Vulnerability Assessment", "SIEM", "Python", "Cloud Security"],
            salary: "₹3,50,000.00",
            jobs: "15,432",
            accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)",
            courses: [
                { id: 1, title: "Google Cybersecurity Professional Certificate", provider: "Google", rating: "4.8", students: "500K", type: "Professional Certificate" },
                { id: 2, title: "IBM Cybersecurity Analyst Professional Certificate", provider: "IBM", rating: "4.7", students: "300K", type: "Professional Certificate" },
                { id: 3, title: "Introduction to Cyber Security Specialization", provider: "NYU", rating: "4.6", students: "200K", type: "Specialization" }
            ]
        },
        "Data Scientist": {
            title: "Data Scientist",
            intro: "Solve complex problems using advanced mathematics, statistics, and machine learning.",
            description: "A Data Scientist analyzes and interprets complex data to help organizations make better decisions through statistical modeling and machine learning.",
            skills: ["Data Visualization", "SQL", "R/Python", "Linear Algebra", "Data Wrangling", "Exploratory Data Analysis"],
            salary: "₹3,80,000.00",
            jobs: "18,600",
            accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)",
            courses: [
                { id: 1, title: "IBM Data Science Professional Certificate", provider: "IBM", rating: "4.6", students: "1.1M", type: "Professional Certificate" },
                { id: 2, title: "Google Data Analytics Professional Certificate", provider: "Google", rating: "4.8", students: "1.5M", type: "Professional Certificate" },
                { id: 3, title: "Data Science Specialization", provider: "Johns Hopkins", rating: "4.5", students: "600K", type: "Specialization" }
            ]
        },
        "Business Intelligence Analyst": {
            title: "Business Intelligence Analyst",
            intro: "Bridging the gap between data and business strategy through insightful reporting.",
            description: "A BI Analyst uses data to help organizations make better business decisions. They create reports and dashboards that visualize trends and performance metrics.",
            skills: ["Power BI", "SQL", "Data Modeling", "ETL Processes", "Statistics", "Business Strategy"],
            salary: "₹3,40,000.00",
            jobs: "12,000",
            accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)",
            courses: [
                { id: 1, title: "Microsoft Business Intelligence Specialization", provider: "Microsoft", rating: "4.8", students: "150K", type: "Specialization" },
                { id: 2, title: "Data Warehousing for Business Intelligence", provider: "UC Boulder", rating: "4.7", students: "80K", type: "Specialization" },
                { id: 3, title: "Business Analytics Specialization", provider: "Wharton", rating: "4.6", students: "300K", type: "Specialization" }
            ]
        },
        "Digital Marketing Specialist": {
            title: "Digital Marketing Specialist",
            intro: "Master the art of online growth, search rankings, and multi-channel campaign management.",
            description: "A Digital Marketing Specialist develops and executes marketing strategies across digital platforms to increase brand awareness and drive sales.",
            skills: ["SEO", "SEM", "Content Strategy", "Email Marketing", "Google Analytics", "PPC Advertising"],
            salary: "₹2,90,000.00",
            jobs: "40,000",
            accent: "linear-gradient(135deg, #FFA500 0%, #FFD700 100%)",
            courses: [
                { id: 1, title: "Google Digital Marketing & E-commerce Cert", provider: "Google", rating: "4.8", students: "600K", type: "Professional Certificate" },
                { id: 2, title: "Meta Social Media Marketing Professional Cert", provider: "Meta", rating: "4.9", students: "400K", type: "Professional Certificate" },
                { id: 3, title: "HubSpot Digital Marketing Specialization", provider: "HubSpot", rating: "4.7", students: "200K", type: "Specialization" }
            ]
        },
        "UI / UX Designer": {
            title: "User Interface / User Experience (UI / UX) Designer",
            intro: "Design the future of digital interaction by blending aesthetics with user-centric functionality.",
            description: "A UI/UX Designer creates and refines digital interfaces, ensuring they are user-friendly and visually appealing. Key skills include UI design, UX research, and wireframing.",
            skills: ["User Experience Design", "User Research", "Prototyping", "Interaction Design", "Usability Testing", "Figma (Design Software)", "Wireframing", "User Interface (UI) Design"],
            salary: "₹2,74,786.72",
            jobs: "22,124",
            accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)",
            courses: [
                { id: 1, title: "Google UX Design Professional Certificate", provider: "Google", rating: "4.8", students: "1.2M", type: "Professional Certificate" },
                { id: 2, title: "Foundations of User Experience (UX) Design", provider: "Google", rating: "4.9", students: "800K", type: "Course" },
                { id: 3, title: "UI/UX Design Specialization", provider: "CalArts", rating: "4.7", students: "450K", type: "Specialization" }
            ]
        },
        "Machine Learning Engineer": {
            title: "Machine Learning Engineer",
            intro: "Build the brains behind self-driving cars, recommendation systems, and future AI tech.",
            description: "A Machine Learning Engineer builds and optimizes algorithms that enable computers to learn from data, using large datasets and neural networks.",
            skills: ["Python", "TensorFlow", "Deep Learning", "Statistics", "Natural Language Processing", "Mathematics", "Cloud Computing"],
            salary: "₹4,20,000.00",
            jobs: "12,980",
            accent: "linear-gradient(135deg, #FFA500 0%, #FFD700 100%)",
            courses: [
                { id: 1, title: "Machine Learning Specialization", provider: "Stanford", rating: "4.9", students: "4.5M", type: "Specialization" },
                { id: 2, title: "Deep Learning Specialization", provider: "DeepLearning.AI", rating: "4.9", students: "1.5M", type: "Specialization" },
                { id: 3, title: "IBM Machine Learning Professional Certificate", provider: "IBM", rating: "4.7", students: "150K", type: "Professional Certificate" }
            ]
        },
        "Social Media Specialist": {
            title: "Social Media Specialist",
            intro: "Cultivate online communities and manage digital presence for world-class brands.",
            description: "A Social Media Specialist creates and manages content on social media platforms to engage users, build communities, and represent brand values.",
            skills: ["Content Creation", "Community Management", "Analytics", "Brand Strategy", "Video Editing", "Copywriting"],
            salary: "₹2,50,000.00",
            jobs: "35,000",
            accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)",
            courses: [
                { id: 1, title: "Meta Social Media Marketing Professional Cert", provider: "Meta", rating: "4.9", students: "400K", type: "Professional Certificate" },
                { id: 2, title: "Social Media Marketing Specialization", provider: "Northwestern", rating: "4.7", students: "120K", type: "Specialization" },
                { id: 3, title: "Strategy of Content Marketing Course", provider: "UC Davis", rating: "4.6", students: "90K", type: "Course" }
            ]
        },
        "Computer Support Specialist": {
            title: "Computer Support Specialist",
            intro: "Empower people through technology by providing critical technical support and expertise.",
            description: "A Computer Support Specialist provides technical assistance to computer users, resolving software and hardware issues and maintaining IT health.",
            skills: ["Technical Support", "Troubleshooting", "Operating Systems", "Networking Basis", "Customer Service", "System Maintenance"],
            salary: "₹2,80,000.00",
            jobs: "18,000",
            accent: "linear-gradient(135deg, #007cf0 0%, #00dfd8 100%)",
            courses: [
                { id: 1, title: "Google IT Support Professional Certificate", provider: "Google", rating: "4.8", students: "1.3M", type: "Professional Certificate" },
                { id: 2, title: "Technical Support Fundamentals", provider: "Google", rating: "4.9", students: "600K", type: "Course" },
                { id: 3, title: "Introduction to Computer Science for Support", provider: "IBM", rating: "4.7", students: "110K", type: "Course" }
            ]
        }
    };

    // Helper to get role data for any ID (1-100)
    const getRoleData = (roleId) => {
        const idNum = parseInt(roleId);
        const keys = Object.keys(baseRolesData);
        const baseKey = keys[(idNum - 1) % keys.length];
        const base = baseRolesData[baseKey];

        return {
            ...base,
            title: idNum > baseRolesData[baseKey].title.length ? `${base.title} ${Math.floor((idNum - 1) / keys.length) > 0 ? `Level ${Math.floor((idNum - 1) / keys.length) + 1}` : ''}`.trim() : base.title
        };
    };

    const role = getRoleData(id);

    if (!role) return <div className="loading">Loading...</div>;

    const recommendedCourses = role.courses || [];

    return (
        <div className={`role-detail-page bento-theme ${isVisible ? 'fade-in' : ''}`}>
            <div className="mesh-gradient"></div>
            <div className="noise-overlay"></div>

            <div className="detail-container">
                {/* Header Breadcrumbs */}
                <nav className="breadcrumbs bento-breadcrumb">
                    <Link to="/" className="breadcrumb-link">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                    </Link>
                    <span className="separator">›</span>
                    <Link to="/explore-roles" className="breadcrumb-link">Careers</Link>
                    <span className="separator">›</span>
                    <span className="current-role">{role.title}</span>
                </nav>

                <div className="bento-grid-container">
                    {/* Hero Card - Large */}
                    <div className="bento-card hero-card">
                        <div className="card-noise"></div>
                        <div className="hero-content">
                            <h1 className="role-title-main">{role.title}</h1>
                            <p className="role-intro-text">{role.intro}</p>
                            <div className="hero-ctas">
                                <button className="start-learning-cta">
                                    Start Career Path
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                                <button className="wishlist-btn">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image Card - Vertical -> Abstract Card */}
                    <div className="bento-card image-card abstract-container">
                        <div className="image-card-bg"></div>
                        <div className="card-noise"></div>
                        <div className="abstract-shape detail-shape" style={{ background: role.accent }}></div>
                        <div className="abstract-blob"></div>
                        <div className="abstract-ring"></div>
                    </div>

                    {/* Stats Card - Compact */}
                    <div className="bento-card stats-card">
                        <div className="card-noise"></div>
                        <div className="stat-item">
                            <span className="stat-label">Median Salary</span>
                            <span className="stat-value">{role.salary}</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-label">Job Availability</span>
                            <span className="stat-value">{role.jobs} <span className="stat-plus">+</span></span>
                        </div>
                    </div>

                    {/* Description Card - Wide */}
                    <div className="bento-card desc-card">
                        <div className="card-noise"></div>
                        <h3 className="card-title">Career Overview</h3>
                        <p className="role-detailed-desc">{role.description}</p>
                    </div>

                    {/* Skills Card - Large Vertical */}
                    <div className="bento-card skills-card">
                        <div className="card-noise"></div>
                        <h3 className="card-title">Skills you'll need</h3>
                        <div className="skills-tags">
                            {role.skills.map((skill, i) => (
                                <span key={i} className="skill-tag">
                                    <span className="dot"></span>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Credentials Card - Wide */}
                    <div className="bento-card credential-card-bento">
                        <div className="card-noise"></div>
                        <h3 className="card-title">Credential Details</h3>
                        <div className="bento-horizontal-scroll">
                            <div className="cred-mini-card">
                                <span className="cred-icon">🎓</span>
                                <div>
                                    <h5>Professional Certificate</h5>
                                    <p>Career-ready credential</p>
                                </div>
                            </div>
                            <div className="cred-mini-card">
                                <span className="cred-icon">🏢</span>
                                <div>
                                    <h5>Industry Recognized</h5>
                                    <p>Validated by top firms</p>
                                </div>
                            </div>
                            <div className="cred-mini-card">
                                <span className="cred-icon">⏱️</span>
                                <div>
                                    <h5>Self-Paced</h5>
                                    <p>Learn on your schedule</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recommendations Card - Massive */}
                    <div className="bento-card courses-card">
                        <div className="card-noise"></div>
                        <div className="courses-header">
                            <h3 className="card-title">Recommended Path</h3>
                            <button className="view-all-courses">
                                View All
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                        <div className="courses-bento-grid">
                            {recommendedCourses.map(course => (
                                <div key={course.id} className="course-bento-item">
                                    <div className="course-provider-icon">{course.provider[0]}</div>
                                    <div className="course-info">
                                        <span className="course-type-tiny">{course.type}</span>
                                        <h4 className="course-title-bento">{course.title}</h4>
                                        <div className="course-meta-bento">
                                            <span>★ {course.rating}</span>
                                            <span className="meta-sep">•</span>
                                            <span>{course.students} Learners</span>
                                        </div>
                                    </div>
                                    <button className="arrow-btn">
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoleDetail;
