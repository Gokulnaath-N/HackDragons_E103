
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function Page() {
  const navigate = useNavigate();
  const { userData } = useUser();

  return (
    <div className="container">
      <div className="success-circle">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h1 className="title-gradient">You're all set, {userData.name || 'Learner'}!</h1>
      <p className="subtitle">
        Your personalized learning experience awaits. Let's start your journey!
      </p>

      <button className="nav-button" onClick={() => navigate("/dashboard")}>
        Start Learning <span>→</span>
      </button>
    </div>
  );
}

export default Page;
