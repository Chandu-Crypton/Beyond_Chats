import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Button from "../ui/Button";
import { Validation } from "../utils/Validation";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const validationError = Validation(formData);
    if (validationError) {
      setError(validationError);
      return;
    }
    navigate("/verify-email");
  };

  return (
    <div className="flex flex-col registration-container items-center justify-center h-[500px] bg-gray-100 p-4">
      <div className="w-full max-w-md  p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Name"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <Button onClick={handleClick} className="w-full mt-6 p-4 text-lg hover-scale">
          Register
        </Button>
        <Button variant="outline" className="w-full mt-4 flex gap-2 items-center justify-center">
          <FaGoogle /> Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default Registration;