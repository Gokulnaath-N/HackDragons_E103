
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function Page() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [error, setError] = useState(false);

  const options = [
    { label: "School Student", value: "school" },
    { label: "College Student", value: "college" },
    { label: "Working Professional", value: "professional" },
    { label: "Lifelong Learner", value: "other" }
  ];

  const handleContinue = () => {
    if (!userData.education) {
      setError(true);
    } else {
      navigate("/topics");
    }
  };

  return (
    <div className="container">
      <h1 className="title-gradient">Your Learning Stage</h1>
      <p className="subtitle">Where are you in your journey?</p>

      <div className="option-list">
        {options.map((opt) => (
          <div
            key={opt.value}
            className={`option-item ${userData.education === opt.value ? 'selected' : ''}`}
            onClick={() => {
              updateUserData({ education: opt.value });
              if (error) setError(false);
            }}
          >
            {opt.label}
          </div>
        ))}
      </div>

      {error && <p style={{ color: 'var(--accent-pink)', marginTop: '20px' }}>Please select a stage to continue</p>}

      <button className="nav-button" onClick={handleContinue}>
        Continue <span>→</span>
      </button>
    </div>
  );
}

export default Page;
