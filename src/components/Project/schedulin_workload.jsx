import React from "react";

const CreativeTeamDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-['Inter']">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-bell text-lg"></i>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-cog text-lg"></i>
              </button>
              <img
                src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young business person..."
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Header */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Creative Team Workload Dashboard
          </h1>
          <div className="flex space-x-4">
            <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <i className="fas fa-filter mr-2"></i>Filter
            </button>
            <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <i className="fas fa-sort mr-2"></i>Sort
            </button>
            <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <i className="fas fa-download mr-2"></i>Export
            </button>
            <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium hover:bg-blue-600">
              <i className="fas fa-plus mr-2"></i>Add Member
            </button>
          </div>
        </div>

        {/* Workload Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <i className="fas fa-expand-alt mr-2"></i>Expand All
              </button>
              <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <i className="fas fa-compress-alt mr-2"></i>Collapse All
              </button>
              <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <i className="fas fa-tasks mr-2"></i>View Backlog
              </button>
            </div>
            <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <i className="fas fa-comment mr-2"></i>Leave Feedback
            </button>
          </div>

          {/* Table Structure */}
          <div className="overflow-x-auto max-w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-64">
                    Team Member
                  </th>
                  {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, i) => (
                    <th
                      key={i}
                      className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase tracking-wider"
                      colSpan="7"
                    >
                      {week}
                    </th>
                  ))}
                </tr>
                <tr>
                  <th></th>
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                    <th key={i} className="px-2 py-2 text-xs font-medium text-gray-500">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Example Row */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a creative director..."
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                        <div className="text-sm text-gray-500">Creative Director</div>
                      </div>
                    </div>
                  </td>
                  {["32h", "38h", "45h", "28h", "34h", "-", "-"].map((hour, i) => (
                    <td key={i} className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-sm rounded-full ${
                        hour === "-"
                          ? "text-gray-400 bg-gray-100"
                          : hour.includes("h") && parseInt(hour) >= 40
                          ? "text-red-800 bg-red-100"
                          : "text-green-800 bg-green-100"
                      }`}>
                        {hour}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTeamDashboard;


// for using this file refer the below code