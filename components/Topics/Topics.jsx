
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function Page() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [error, setError] = useState(false);

  const topicsList = [
    "Machine Learning", "Web Development", "Data Science", "Physics",
    "Mathematics", "Chemistry", "Biology", "Computer Science",
    "Economics", "Languages"
  ];

  const toggleTopic = (topic) => {
    const newTopics = userData.topics.includes(topic)
      ? userData.topics.filter(t => t !== topic)
      : [...userData.topics, topic];
    updateUserData({ topics: newTopics });
    if (error && newTopics.length > 0) setError(false);
  };

  const handleContinue = () => {
    if (userData.topics.length === 0) {
      setError(true);
    } else {
      navigate("/formats");
    }
  };

  return (
    <div className="container">
      <h1 className="title-gradient">What topics excite you?</h1>
      <p className="subtitle">Select all that interest you</p>

      <div className="topic-wrap">
        {topicsList.map((topic) => (
          <div
            key={topic}
            className={`topic-tag ${userData.topics.includes(topic) ? 'selected' : ''}`}
            onClick={() => toggleTopic(topic)}
          >
            {topic}
          </div>
        ))}
      </div>

      {error && <p style={{ color: 'var(--accent-pink)', marginTop: '20px' }}>Please select at least one topic to continue</p>}

      <button className="nav-button" onClick={handleContinue}>
        Continue <span>→</span>
      </button>
    </div>
  );
}

export default Page;
