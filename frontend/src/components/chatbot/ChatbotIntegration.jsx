import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const ChatbotIntegration = () => {
  const navigate = useNavigate();
  const [showInstructions, setShowInstructions] = useState(false);

  const handleTestChatbot = () => {
    window.open("https://dummy-client-website.com", "_blank"); // Dummy website URL
  };

  return (
    <div className="relative flex flex-col items-center justify-center registration-container h-[500px] bg-gray-100 p-4">
      {/* 🔹 Sticky Top Bar */}
      <div className="absolute top-0 w-full bg-blue-600 text-white text-center py-2 font-medium">
        Chatbot not working as intended?{" "}
        <a href="#" className="underline">
          Share feedback
        </a>
      </div>

    
      <div className="w-full max-w-md  p-6 rounded-lg shadow-md mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Chatbot Integration</h2>
        <p className="text-gray-900 mb-4 text-center">Follow the instructions below to integrate the chatbot on your website.</p>

      
        <Button variant="primary" className="w-full mb-4 hover-scale" onClick={handleTestChatbot}>
          Test Chatbot
        </Button>

       
        <Button variant="outline" className="w-full mb-4 hover-scale" onClick={() => setShowInstructions(!showInstructions)}>
          Integrate on Your Website
        </Button>

       
        {showInstructions && (
          <div className="p-4 border rounded-lg bg-gray-50 mt-4">
            <p className="text-sm text-gray-600 mb-2">Copy and paste the following code into your website's Head section:</p>
            <code className="block bg-gray-200 p-2 rounded-md text-sm overflow-x-auto">
              {`<script src="https://dummy-client-website.com/chatbot.js"></script>`}
            </code>
            <p className="text-sm text-gray-600 mt-2">
              Or{" "}
              <a href="mailto:developer@example.com" className="text-blue-600 underline">
                email instructions
              </a>{" "}
              to your developer.
            </p>
          </div>
        )}

        
        <Button variant="secondary" className="w-full mt-6 bg-green-500 hover-scale" onClick={() => navigate("/success")}>
          Finish Setup
        </Button>
      </div>
    </div>
  );
};

export default ChatbotIntegration;