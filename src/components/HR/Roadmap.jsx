import React from "react";

const Roadmap = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      {/* <nav className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                />
              </div>
              <div className="ml-4 text-xl font-semibold text-gray-900">
                HR Timeline
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white">
                <i className="fas fa-search"></i>
              </button>
              <button className="text-gray-300 hover:text-white">
                <i className="fas fa-bell"></i>
              </button>
              <button className="text-gray-300 hover:text-white">
                <i className="fas fa-ellipsis-v"></i>
              </button>
              <div className="flex items-center">
                <span className="text-gray-300 mr-2">Your Company Name</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://creatie.ai/ai/api/search-image?query=professional headshot of a person smiling warmly"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Section */}
        {/* <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full"
                src="https://creatie.ai/ai/api/search-image?query=professional headshot"
                alt="Wade Wilson"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  Wade Wilson
                </h1>
                <div className="flex items-center mt-1">
                  <span className="px-2 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
                    Active
                  </span>
                  <span className="ml-2 text-gray-400">
                    Designer (Product) • Product • HR • UK – Remote
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="!rounded-button bg-gray-100 text-gray-700 px-4 py-2 flex items-center hover:bg-gray-200">
                <i className="fas fa-comment-alt mr-2"></i>
                Add feedback
              </button>
              <button className="!rounded-button bg-gray-100 text-gray-700 px-3 py-2 hover:bg-gray-200">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>

   
          <div className="flex items-center space-x-8 border-t border-gray-200 pt-4">
            {[
              "Profile",
              "Goals",
              "Performance • 78%",
              "Roadmap",
              "Compensation",
              "Talent • 4 • 52%",
              "Documents",
              "Time off • 1",
            ].map((item, index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-gray-900">
                {item}
              </a>
            ))}
          </div>
        </div> */}

        {/* Performance Overview */}
        <div className="grid grid-cols-12 gap-8">
          {/* <div className="col-span-3">
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-gray-900">Q4 2023</div>
                <div className="text-green-500 font-medium">Exceeding</div>
              </div>
              <div className="text-gray-400">Overall grade</div>
            </div>

       
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="space-y-4">
                {[
                  { quarter: "Q4", period: "Q4 '24", level: "Mid III", status: "Pending" },
                  { quarter: "Q3", period: "Q3 '24", level: "Mid II", status: "Exceeding" },
                  { quarter: "Q2", period: "Q2 '24", level: "Mid II", status: "Performing" },
                ].map((goal, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{goal.quarter}</div>
                      <div className="text-xs text-gray-400">{goal.period}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-400">{goal.level}</div>
                    <div className={`text-sm ${goal.status === "Exceeding" ? "text-green-500" : goal.status === "Performing" ? "text-blue-500" : "text-gray-500"}`}>
                      {goal.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Employee Goals Timeline */}
          <div className="col-span-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Employee Goals Timeline
              </h2>
              <p className="text-gray-400 mb-6">
                Track individual and team performance goals over time
              </p>

              <div className="bg-gray-100 rounded-lg p-4">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    {[
                      { date: "Jan 2024", goal: "Complete UI Design for Customer Portal", status: "Completed" },
                      { date: "Feb 2024", goal: "Implement New Feature Set", status: "In Progress" },
                      { date: "Mar 2024", goal: "Team Leadership Training", status: "Not Started" },
                    ].map((item, index) => (
                      <div key={index} className="relative flex items-center">
                        <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-white ${item.status === "Completed" ? "bg-green-500" : item.status === "In Progress" ? "bg-yellow-500" : "bg-red-500"}`}>
                          ✓
                        </div>
                        <div className="ml-12 p-4 bg-white rounded-lg border w-full">
                          <span className="text-sm text-gray-500">{item.date}</span>
                          <h4 className="text-gray-900 font-medium mt-1">{item.goal}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Roadmap;
