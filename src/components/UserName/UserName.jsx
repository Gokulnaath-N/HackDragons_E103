
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function Page() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [error, setError] = useState(false);

  const handleContinue = () => {
    if (userData.name.trim() === "") {
      setError(true);
    } else {
      navigate("/education");
    }
  };

  return (
    <div className="container">
      <h1 className="title-gradient">What should we call you?</h1>
      <p className="subtitle">Your journey starts with a name</p>

      <input
        type="text"
        className="name-input"
        placeholder="Enter your name"
        value={userData.name}
        onChange={(e) => {
          updateUserData({ name: e.target.value });
          if (error) setError(false);
        }}
        autoFocus
      />

      {error && <p style={{ color: 'var(--accent-pink)', marginBottom: '10px' }}>Please enter your name to continue</p>}

      <button className="nav-button" onClick={handleContinue}>
        Continue <span>→</span>
      </button>
    </div>
  );
}

export default Page;
