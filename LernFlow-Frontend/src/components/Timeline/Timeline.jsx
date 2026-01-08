
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function Page() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [error, setError] = useState(false);

  const options = [
    { label: "1 Week Sprint", value: "1week" },
    { label: "2 Weeks", value: "2weeks" },
    { label: "1 Month", value: "1month" },
    { label: "2 Months", value: "2months" },
    { label: "Flexible Pace", value: "flexible" }
  ];

  const handleContinue = () => {
    if (!userData.timeline) {
      setError(true);
    } else {
      navigate("/success");
    }
  };

  return (
    <div className="container">
      <h1 className="title-gradient">What's your timeline?</h1>
      <p className="subtitle">We'll pace your learning accordingly</p>

      <div className="option-list">
        {options.map((opt) => (
          <div
            key={opt.value}
            className={`option-item ${userData.timeline === opt.value ? 'selected' : ''}`}
            onClick={() => {
              updateUserData({ timeline: opt.value });
              if (error) setError(false);
            }}
          >
            {opt.label}
          </div>
        ))}
      </div>

      {error && <p style={{ color: 'var(--accent-pink)', marginTop: '20px' }}>Please select a timeline to complete setup</p>}

      <button className="nav-button" onClick={handleContinue}>
        Complete Setup <span>→</span>
      </button>
    </div>
  );
}

export default Page;
