import React from "react";

const Talent = () => {
  return (
    <div className="bg-white min-h-screen">
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
                  src="https://creatie.ai/ai/api/search-image?query=professional headshot of a person smiling warmly against a neutral background&width=100&height=100&orientation=squarish"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full"
                src="https://creatie.ai/ai/api/search-image?query=professional headshot of a person smiling warmly against a neutral background&width=100&height=100&orientation=squarish"
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
                    Senior AV Systems Engineer • Technical • AV Integration • UK
                    – Remote
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
        </div> */}

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-gray-900">Q4 2023</div>
                <div className="text-green-500 font-medium">Exceeding</div>
              </div>
              <div className="text-gray-400">Overall grade</div>
            </div>
          </div>

          <div className="col-span-9">
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Training Matrix
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Training One", status: "Completed", color: "green" },
                  { name: "Training Two", status: "Completed", color: "green" },
                  {
                    name: "Training Three",
                    status: "In Progress - Due Mar 15, 2024",
                    color: "yellow",
                  },
                ].map((training, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg bg-white"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{training.name}</span>
                      <span className={`text-${training.color}-500`}>
                        <i className="fas fa-check-circle"></i>
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {training.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {[
                { title: "AV Programming", skills: ["Crestron", "Extron", "QSC"] },
                { title: "DSP Programming", skills: ["Biamp", "Kramer", "AMX"] },
                { title: "Control Systems", skills: ["Aurora", "CUE"] },
                { title: "Technical Skills", skills: ["System Design", "AV Consulting", "2D CAD"] },
              ].map((category, index) => (
                <div key={index} className="flex flex-col p-4 border rounded-lg">
                  <div className="font-medium mb-2">{category.title}</div>
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{skill}</span>
                        <span className="text-sm font-medium">4/4</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 rounded-full h-2 w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
