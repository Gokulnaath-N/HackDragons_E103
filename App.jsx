import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider, useUser } from "./UserContext";
import Navbar from "./components/Navbar/Navbar";
import ChatbotWidget from "./components/ChatbotWidget/ChatbotWidget";
import Landing from "./components/Landing/Landing";
import ExploreRoles from "./components/ExploreRoles/ExploreRoles";
import RoleDetail from "./components/RoleDetail/RoleDetail";
import UserName from "./components/UserName/UserName";
import Education from "./components/Education/Education";
import Topics from "./components/Topics/Topics";
import Formats from "./components/Formats/Formats";
import Timeline from "./components/Timeline/Timeline";
import Success from "./components/Success/Success";
import Dashboard from "./components/Dashboard/Dashboard";
import CourseView from "./components/CourseView/CourseView";
import LearnFlowAI from "./components/LearnFlowAI/LearnFlowAI";
import Auth from "./components/Auth/Auth";

function AppContent() {
  const { isDarkMode } = useUser();

  return (
    <div className={`app-container ${isDarkMode ? 'theme-night' : 'theme-day'}`}>
      <BrowserRouter>
        <Navbar />
        <ChatbotWidget />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore-roles" element={<ExploreRoles />} />
          <Route path="/role/:id" element={<RoleDetail />} />
          <Route path="/name" element={<UserName />} />
          <Route path="/education" element={<Education />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/formats" element={<Formats />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<CourseView />} />
          <Route path="/learnflow-ai" element={<LearnFlowAI />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
