import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/auth/Registration";
import EmailVerification from "./components/auth/EmailVerification";
import OrganizationSetup from "./components/setup/OrganizationSetup";
import ScrapedDataView from "./components/setup/ScrapedDataView";
import ChatbotIntegration from "./components/chatbot/ChatbotIntegration";
import SuccessScreen from "./components/chatbot/SuccessScreen";
import "./index.css"; 

const App = () => {
  return (
    <div className="h-screen flex bg justify-center items-center">
        <Router>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route path="/setup-organization" element={<OrganizationSetup />} />
            <Route path="/scraped-data" element={<ScrapedDataView />} />
            <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
            <Route path="/success" element={<SuccessScreen />} />
          </Routes>
        </Router>
    </div>
  );
};

export default App;