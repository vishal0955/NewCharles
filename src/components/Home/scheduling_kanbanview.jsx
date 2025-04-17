import React from "react";

const ProjectManagementDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                  className="h-8 w-8"
                />
                <span className="font-semibold text-gray-900">
                  Scheduling - kanban view
                </span>
              </div>
              <nav className="flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Staff Scheduling</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Billing Last Week</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Board</a>
                <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  12 more... <i className="fas fa-chevron-down ml-1"></i>
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                <i className="fas fa-eye-slash mr-2"></i> Hide
              </button>
              <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                <i className="fas fa-cog mr-2"></i> Customize
              </button>
              <button className="!rounded-button inline-flex items-center px-4 py-2 bg-custom text-white text-sm font-medium rounded-lg hover:bg-custom/90">
                <i className="fas fa-plus mr-2"></i> Add Task
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-8xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow mb-6 p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent">
                <option>Group: Status</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
            <button className="text-gray-700 text-sm hover:text-gray-900">
              <i className="fas fa-compress mr-2"></i> Subtasks: Collapse all
            </button>
          </div>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-6">
          {[
            { title: "PLANNING", color: "bg-purple-500", count: 0 },
            { title: "IN-PROGRESS", color: "bg-yellow-500", count: 0 },
            { title: "ON-HOLD", color: "bg-red-500", count: 0 },
            { title: "COMPLETE", color: "bg-blue-500", count: 0 },
            { title: "BILLING", color: "bg-green-500", count: 1 },
          ].map((stage, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <div className="bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${stage.color} mr-2`}></div>
                    <h3 className="font-medium">{stage.title}</h3>
                    <span className="ml-2 text-gray-500 text-sm">{stage.count}</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <div className="p-4">
                  <button className="!rounded-button w-full text-left px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                    <i className="fas fa-plus mr-2"></i> Add Task
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementDashboard;