
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import Navbar from "./components/Navbar/Navbar";
import ChatbotWidget from "./components/ChatbotWidget/ChatbotWidget";
import Landing from "./components/Landing/Landing";
import ExploreRoles from "./components/ExploreRoles/ExploreRoles";
import UserName from "./components/UserName/UserName";
import Education from "./components/Education/Education";
import Topics from "./components/Topics/Topics";
import Formats from "./components/Formats/Formats";
import Timeline from "./components/Timeline/Timeline";
import Success from "./components/Success/Success";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <ChatbotWidget />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore-roles" element={<ExploreRoles />} />
          <Route path="/name" element={<UserName />} />
          <Route path="/education" element={<Education />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/formats" element={<Formats />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
