import React from "react";
// import { Helmet } from "react-helmet";

const TeamTimeOffCalendar = () => {
  return (
    <>
      {/* <Helmet>
        <title>Team Time Off Calendar</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com/3.4.5?plugins=forms@0.5.7,typography@0.5.13,aspect-ratio@0.4.2,container-queries@0.1.1"></script>
        <script
          src="https://ai-public.creatie.ai/gen_page/tailwind-config.min.js"
          data-color="#000000"
          data-border-radius="small"
        ></script>
      </Helmet> */}

      <div className="bg-gray-50 font-sans min-h-screen">
        {/* Header */}
        {/* <header className="bg-white border-b border-gray-200">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <img
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                  className="h-8 w-8 mr-3"
                />
                <h1 className="text-lg font-semibold">Team Time Off Calendar</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-search text-lg"></i>
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-bell text-lg"></i>
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-ellipsis-v text-lg"></i>
                </button>
                <div className="flex items-center">
                  <span className="mr-2">Your Company Name</span>
                  <img
                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot..."
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </header> */}

        {/* Main Content */}
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* <div className="mb-8">
           
            <div className="flex items-center mb-6">
              <img
                src="https://creatie.ai/ai/api/search-image?query=A professional headshot..."
                alt="Wade Wilson"
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold mr-2">Wade Wilson</h2>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Designer (Product) · Product - People Product - HR · UK - Remote
                </p>
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <i className="fas fa-comment-alt mr-2"></i>
                  Add feedback
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-ellipsis-h text-lg"></i>
                </button>
              </div>
            </div>

         
            <nav className="border-b border-gray-200">
              <div className="-mb-px flex space-x-8">
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 py-4 px-1 border-b-2 font-medium">
                  Team View
                </a>
                <a href="#" className="border-custom text-custom hover:border-custom hover:text-custom py-4 px-1 border-b-2 font-medium">
                  Team Calendar
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 py-4 px-1 border-b-2 font-medium">
                  Approvals
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 py-4 px-1 border-b-2 font-medium">
                  Reports
                </a>
              </div>
            </nav>
          </div> */}

          {/* Stats Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-8 grid grid-cols-4 gap-6">
            {[
              { value: 15, label: "Days Available", color: "text-gray-900" },
              { value: 7, label: "Days Approved", color: "text-green-500" },
              { value: 2, label: "Days Pending", color: "text-yellow-500" },
              { value: 24, label: "Total Days", color: "text-gray-400" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-lg shadow">
            <div className="grid grid-cols-7 gap-px bg-gray-200 border-b">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                <div key={index} className="bg-white p-4 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {[...Array(31)].map((_, index) => (
                <div key={index} className="bg-white p-4 min-h-[120px]">{index + 1}</div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TeamTimeOffCalendar;
