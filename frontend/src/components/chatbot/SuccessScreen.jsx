import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { FaCheckCircle, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const SuccessScreen = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setShowConfetti(false);
      document.body.style.overflow = "auto"; 
    }, 5000);
  }, []);
  

  return (
    <div className="flex flex-col items-center justify-center registration-container h-[500px] bg-gray-100 p-4">
      
      {showConfetti && (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Confetti width={400} height={400} />
    </div>
  )}
      <div className="w-full max-w-md  p-6 rounded-lg shadow-md text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h2 className="text-3xl font-semibold">Integration Successful!</h2>
        <p className="text-gray-600 mt-2">Your chatbot is now live on your website.</p>

        <div className="mt-6 space-y-3">
          <Button variant="primary" className="w-full hover-scale" onClick={() => navigate("/admin")}>
            Explore Admin Panel
          </Button>
          <Button variant="outline" className="w-full hover-scale" onClick={() => navigate("/chat")}>
            Start Talking to Your Chatbot
          </Button>
        </div>

       
        <div className="mt-6 flex space-x-4 justify-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 text-3xl hover-scale1" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 text-3xl hover-scale1" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 text-3xl hover-scale1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
