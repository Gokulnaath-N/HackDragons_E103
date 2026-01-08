
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function Page() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [error, setError] = useState(false);

  const formats = [
    { id: "video", label: "Video", icon: "📺" },
    { id: "podcast", label: "Podcasts", icon: "🎧" },
    { id: "reading", label: "Reading", icon: "📄" },
    { id: "interactive", label: "Interactive", icon: "🎮" }
  ];

  const handleContinue = () => {
    if (!userData.format) {
      setError(true);
    } else {
      navigate("/timeline");
    }
  };

  return (
    <div className="container">
      <h1 className="title-gradient">How do you learn best?</h1>
      <p className="subtitle">Select your preferred formats</p>

      <div className="grid-formats">
        {formats.map((f) => (
          <div
            key={f.id}
            className={`format-card ${userData.format === f.id ? 'selected' : ''}`}
            onClick={() => {
              updateUserData({ format: f.id });
              if (error) setError(false);
            }}
          >
            <div style={{ fontSize: '2rem' }}>{f.icon}</div>
            <div style={{ fontWeight: '500' }}>{f.label}</div>
          </div>
        ))}
      </div>

      {error && <p style={{ color: 'var(--accent-pink)', marginTop: '20px' }}>Please select a preferred format to continue</p>}

      <button className="nav-button" onClick={handleContinue}>
        Continue <span>→</span>
      </button>
    </div>
  );
}

export default Page;
