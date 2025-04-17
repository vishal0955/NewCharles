import React, { useState } from "react";
import { useSelector } from "react-redux";

const AboutDealsForm = ({ data, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  const darkMode = useSelector((state) => (state.theme.isDarkMode))

  return (
    <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white`}>
      {/* Header */}
      <div
        className="flex justify-between items-center p-3 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <svg
            className={`w-4 h-4 mr-2 transform transition-transform ${
              isExpanded ? "rotate-0" : "-rotate-90"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="text-sm font-medium">About this deal</span>
        </div>
        <button className="text-blue-600 text-sm">Actions</button>
      </div>

      {/* Form Content */}
      {isExpanded && (
        <div className="p-3 border-t">
          <div className="space-y-4">
            <div>
              <label className="block text-xs mb-1">Email</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`${darkMode ? "card-dark" : "bg-white" } w-full p-2 text-sm border rounded focus:outline-none focus:border-blue-500`}
              />
            </div>

            <div>
              <label className="block text-xs mb-1">
                Phone number
              </label>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`${darkMode ? "card-dark" : "bg-white" }  w-full p-2 text-sm border rounded focus:outline-none focus:border-blue-500`}
              />
            </div>

            <div>
              <label className="block text-xs mb-1">
                Company name
              </label>
              <input
                type="text"
                value={data.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className={`${darkMode ? "card-dark" : "bg-white" }  w-full p-2 text-sm border rounded focus:outline-none focus:border-blue-500`}
              />
            </div>

            <div>
              <label className="block text-xs mb-1">
                Lead status
              </label>
              <div className="relative">
                <select
                  value={data.leadStatus}
                  onChange={(e) => handleChange("leadStatus", e.target.value)}
                  className={`${darkMode ? "card-dark" : "bg-white" }  w-full p-2 text-sm border rounded appearance-none focus:outline-none focus:border-blue-500`}
                >
                  <option value="">Select status</option>
                  <option value="new">New</option>
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="qualified">Qualified</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs mb-1">
                Lifecycle stage
              </label>
              <div className="relative">
                <select
                  value={data.lifecycleStage}
                  onChange={(e) =>
                    handleChange("lifecycleStage", e.target.value)
                  }
                  className={`${darkMode ? "card-dark" : "bg-white" } w-full p-2 text-sm border rounded appearance-none focus:outline-none focus:border-blue-500`}
                >
                  <option value="lead">Lead</option>
                  <option value="customer">Customer</option>
                  <option value="opportunity">Opportunity</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs mb-1">
                Buying Role
              </label>
              <input
                type="text"
                value={data.buyingRole}
                onChange={(e) => handleChange("buyingRole", e.target.value)}
                className={`${darkMode ? "card-dark" : "bg-white" } w-full p-2 text-sm border rounded focus:outline-none focus:border-blue-500`}
              />
            </div>

            <div>
              <label className="block text-xs mb-1">
                Contact owner
              </label>
              <input
                type="text"
                value={data.contactOwner}
                onChange={(e) => handleChange("contactOwner", e.target.value)}
                className={`${darkMode ? "card-dark" : "bg-white" } w-full p-2 text-sm border rounded focus:outline-none focus:border-blue-500`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutDealsForm;
