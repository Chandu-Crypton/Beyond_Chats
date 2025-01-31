import React, { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { ValidationOrganization } from "../utils/ValidationOrganization";

const OrganizationSetup = () => {
  const navigate = useNavigate();
  const [orgData, setOrgData] = useState({ name: "", website: "", description: "" });
  const [error, setError] = useState("");

  const handleClick = () => {
    const validationError = ValidationOrganization(orgData);
    if (validationError) {
      setError(validationError);
      return;
    }
    navigate("/scraped-data");
  };

  return (
    <div className="flex items-center justify-center registration-container h-[500px] bg-gray-100 p-4">
      <div className="w-full max-w-md  p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Setup Organization</h2>
        <input
          type="text"
          placeholder="Company Name"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={orgData.name}
          onChange={(e) => setOrgData({ ...orgData, name: e.target.value })}
        />
        <input
          type="url"
          placeholder="Website URL"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={orgData.website}
          onChange={(e) => setOrgData({ ...orgData, website: e.target.value })}
        />
        <p className="text-sm text-gray-500 mb-4 text-center">Give any dummy website link</p>
        <textarea
          placeholder="Company Description"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={orgData.description}
          onChange={(e) => setOrgData({ ...orgData, description: e.target.value })}
        />
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <Button onClick={handleClick} className="w-full hover-scale">
          Next
        </Button>
      </div>
    </div>
  );
};

export default OrganizationSetup;