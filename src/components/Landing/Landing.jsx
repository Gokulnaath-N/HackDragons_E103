import { useNavigate } from "react-router-dom";

function Page() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ position: 'relative', zIndex: 10 }}>
      <div className="logo-box">
        <svg className="logo-sparkle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
          <path d="M5 3l1 1" /><path d="M19 3l-1 1" /><path d="M5 21l1-1" /><path d="M19 21l-1-1" />
        </svg>
      </div>
      <h1>
        <span className="accent-text" style={{ fontSize: '1.2em' }}>LearnFlow</span>
      </h1>
      <h1 className="title-gradient">Your Personal <span className="accent-text">Learning</span> Architect</h1>
      <p className="subtitle">
        AI-powered personalized learning paths tailored to your goals, pace, and preferred learning style.
      </p>
      <button className="nav-button" onClick={() => navigate("/name")}>
        Get Started <span>→</span>
      </button>
    </div>
  );
}

export default Page;
