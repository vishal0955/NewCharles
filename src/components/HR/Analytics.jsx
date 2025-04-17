import React from "react";

const MyProfile = () => {
  return (
    <div className=" min-h-screen">
      <nav className="bg-white border-b border-gray-200">
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
                My Profile
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
                  src="https://creatie.ai/ai/api/search-image?query=professional%20headshot"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full"
                src="https://creatie.ai/ai/api/search-image?query=professional%20headshot"
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
                    Designer (Product) • Product • People Product • HR • UK –
                    Remote
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="!rounded-button bg-gray-100 text-gray-700 px-4 py-2 flex items-center hover:bg-gray-200">
                <i className="fas fa-comment-alt mr-2"></i> Add feedback
              </button>
              <button className="!rounded-button bg-gray-100 text-gray-700 px-3 py-2 hover:bg-gray-200">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-8 border-t border-gray-200 pt-4">
            {[
              "Profile",
              "Performance",
              "Goals • 78%",
              "Roadmap",
              "Analytics • 4",
              "Talent • 4 • 52%",
              "Documents",
              "Time off • 1",
              "Compensation",
            ].map((item, index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-gray-900">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-gray-900">Q3</div>
                <div className="text-green-500 font-medium">Exceeding</div>
              </div>
              <div className="text-gray-400">Overall grade</div>
            </div>
          </div>

          <div className="col-span-9">
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
              <div className="grid grid-cols-4 gap-8">
                {[
                  { label: "Review cycles", value: "3/4", desc: "4 cycles required" },
                  { label: "Performing grades", value: "1/2", desc: "2 required" },
                  { label: "Mid II → Mid III", value: " ", desc: "On track for Q1 '25" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <span>{item.value}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-gray-900 font-medium">{item.label}</div>
                      <div className="text-gray-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Q2 2024</h2>
                  <div className="text-gray-400">Performance cycle</div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="!rounded-button bg-custom text-white px-4 py-2">
                    <i className="fas fa-plus mr-2"></i> Request review
                  </button>
                  <button className="!rounded-button bg-gray-100 text-gray-700 px-3 py-2">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <i className="fas fa-bullseye text-blue-500 mr-2"></i>
                    <span className="text-gray-900 font-medium">Goals</span>
                  </div>
                  <span className="text-green-500 font-medium">Exceeding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default MyProfile;
