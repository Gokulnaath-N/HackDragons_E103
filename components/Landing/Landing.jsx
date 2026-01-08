import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function Page() {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useUser();

  return (
    <div className={`landing-page-root ${isDarkMode ? 'theme-night' : 'theme-day'}`}>
      {/* Cinematic Background Layers */}
      <div className="cinematic-bg">
        <div className="bg-neural-grid"></div>
        <div className="bg-energy-waves">
          <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
            <path className="energy-path path-1" d="M-100,400 Q300,300 700,500 T1500,400" />
            <path className="energy-path path-2" d="M-100,500 Q400,600 800,400 T1500,500" />
            <path className="energy-path path-3" d="M-100,300 Q200,500 600,300 T1500,600" />
          </svg>
        </div>
        <div className="bg-particle-field">
          {[...Array(45)].map((_, i) => (
            <div key={i} className="bg-particle" style={{ '--delay': `${i * 0.3}s`, '--left': `${Math.random() * 100}%`, '--top': `${Math.random() * 100}%` }}></div>
          ))}
        </div>
        <div className="bg-vignette"></div>
      </div>

      <div className="container landing-content-wrap" style={{ position: 'relative', zIndex: 10 }}>
        <div className="logo-box-floating">
          <div className="logo-sparkle-container">
            <svg className="logo-sparkle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
              <path d="M5 3l1 1" /><path d="M19 3l-1 1" /><path d="M5 21l1-1" /><path d="M19 21l-1-1" />
            </svg>
          </div>
          <div className="logo-glow"></div>
        </div>
        <h1>
          <span className="hero-brand-badge">LearnFlow</span>
        </h1>
        <h1 className="title-gradient main-hero-title">Your Personal <span className="accent-text">Learning</span> Architect</h1>
        <p className="subtitle hero-subtitle">
          AI-powered personalized learning paths tailored to your goals, pace, and preferred learning style.
        </p>
        <div className="hero-actions">
          <button className="nav-button hero-cta" onClick={() => navigate("/name")}>
            Get Started <span className="arrow-icon">→</span>
            <div className="btn-glow-layer"></div>
          </button>
        </div>
      </div>

      {/* Global Theme Toggle */}
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

export default Page;
