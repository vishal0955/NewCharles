import React from "react";

const CandidateProfile = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white border-b border-gray-200">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                alt="Logo"
                className="h-8 w-auto"
              />
              <div className="ml-10 flex items-center space-x-8">
                <a href="#" className="text-gray-500 font-medium">
                  Schedule
                </a>
                <a href="#" className="text-custom font-medium">
                  Board
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-gray-500">
                <i className="fas fa-search text-lg"></i>
              </button>
              <button className="text-gray-400 hover:text-gray-500 relative">
                <i className="fas fa-bell text-lg"></i>
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="flex items-center">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a business person in formal attire against a neutral background&width=40&height=40&orientation=squarish"
                  className="h-8 w-8 rounded-full"
                  alt="Profile"
                />
              </button>
            </div>
          </div>
        </nav>
      </header> */}

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Candidate Info */}
        <div className="mb-8 flex items-start justify-between">
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center text-white text-xl font-semibold">
              WW
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-semibold text-gray-900">Wade Wilson</h1>
              <p className="text-sm text-gray-500">
                Current stage: Problem Solving - 4/9 • Last activity at 12 Dec 2023, 16:00
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="!rounded-button bg-custom px-4 py-2 text-white font-medium">
              <i className="fas fa-calendar-alt mr-2"></i>Schedule Interview
            </button>
            <button className="!rounded-button bg-white px-4 py-2 text-gray-700 font-medium border border-gray-300">
              <i className="fas fa-exchange-alt mr-2"></i>Change Stage
            </button>
            <button className="!rounded-button bg-white px-4 py-2 text-gray-700 font-medium border border-gray-300">
              <i className="fas fa-envelope mr-2"></i>Send Email
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {["Overview", "Performance", "Documents (2)", "Forms (2)", "Emails (12)", "Comments (10)", "Timeline (20)"].map((tab, index) => (
              <a
                key={index}
                href="#"
                className={`border-b-2 px-1 py-4 text-sm font-medium ${
                  index === 0 ? "border-custom text-custom" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </a>
            ))}
          </nav>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Interview Progress</h2>
              <div className="space-y-6">
                {[
                  { name: "Val Purvis", time: "10 days ago", status: "Hire" },
                  { name: "Nathan Cooper", time: "6 days ago", status: "Hire" },
                  { name: "Jerrod Halbert", time: "4 days ago", status: "Intermediate, Hire" },
                ].map((interview, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a business person in formal attire"
                        className="h-10 w-10 rounded-full"
                        alt={interview.name}
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{interview.name}</p>
                        <p className="text-sm text-gray-500">{interview.time}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {interview.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Professional Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Professional Links</h2>
              <div className="space-y-4">
                <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                  <i className="fab fa-linkedin text-lg mr-2"></i>LinkedIn Profile<i className="fas fa-external-link-alt ml-2 text-sm"></i>
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                  <i className="far fa-file-alt text-lg mr-2"></i>Candidate CV<i className="fas fa-external-link-alt ml-2 text-sm"></i>
                </a>
              </div>
            </div>

            {/* Personal Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900">Personal Details</h2>
              <div className="space-y-4">
                {[
                  { label: "Email", value: "wade.wilson@gmail.com" },
                  { label: "Mobile", value: "+44 1234 567 890" },
                  { label: "Current Company", value: "Facebook" },
                  { label: "Location", value: "United Kingdom" },
                ].map((detail, index) => (
                  <div key={index}>
                    <p className="text-sm text-gray-500">{detail.label}</p>
                    <p className="text-sm font-medium text-gray-900">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateProfile;
