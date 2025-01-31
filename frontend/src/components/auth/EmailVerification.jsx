import React, { useState } from "react";
import Button from "../ui/Button";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ValidationVerification } from "../utils/ValidationVerification ";
const EmailVerification = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    const validationError = ValidationVerification(code);
    if (validationError) {
      setError(validationError);
      return;
    }
    navigate("/setup-organization");
  };

  return (
    <div className="flex items-center justify-center registration-container h-[500px] bg-gray-100 p-4">
      <div className="w-full max-w-md  p-8 rounded-lg shadow-md">
        <MdEmail className="text-blue-600 text-5xl mx-auto" />
        <h2 className="text-3xl font-semibold mt-6 text-center">Verify Your Email</h2>
        <input
          type="number"
          className="w-full mt-6 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Verification Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-2 text-center">Give any 4-digit code</p>
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        <Button onClick={handleClick} className="w-full mt-6 p-4 text-lg hover-scale">
          Verify
        </Button>
      </div>
    </div>
  );
};

export default EmailVerification;