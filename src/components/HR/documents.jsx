import React from "react";

const MyDocuments = () => {
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
                <h1 className="text-2xl font-bold text-gray-900">Wade Wilson</h1>
                <div className="flex items-center mt-1">
                  <span className="px-2 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
                    Active
                  </span>
                  <span className="ml-2 text-gray-400">
                    Senior AV Systems Engineer • Technical • AV Integration • UK – Remote
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
              "Skills",
              "Performance • 78%",
              "Roadmap",
              "Compensation",
              "Talent • 13 • 87%",
              "Documents",
              "Time off • 1",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`text-gray-500 hover:text-gray-900 ${
                  item === "Documents" ? "text-blue-600 font-medium border-b-2 border-blue-600" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div> */}
        <div className="grid grid-cols-12 gap-8" style={{ marginTop: "-2rem" }}>
          <div className="col-span-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200" id="documents-section">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">My Documents</h2>
                <button className="!rounded-button bg-blue-600 text-white px-4 py-2 flex items-center hover:bg-blue-700">
                  <i className="fas fa-upload mr-2"></i>Upload New Document
                </button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: "fa-file-pdf text-red-500",
                    title: "Employment Contract (Signed)",
                    type: "PDF",
                    updated: "Updated 3 months ago",
                  },
                  {
                    icon: "fa-file-alt text-blue-500",
                    title: "Annual Performance Review 2023",
                    type: "DOC",
                    updated: "Updated 1 month ago",
                  },
                  {
                    icon: "fa-file-image text-green-500",
                    title: "Professional Certifications",
                    type: "ZIP",
                    updated: "Updated 2 weeks ago",
                  },
                  {
                    icon: "fa-file-pdf text-blue-500",
                    title: "Training Completion Records",
                    type: "PDF",
                    updated: "Updated 1 week ago",
                  },
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <i className={`fas ${doc.icon} text-xl mr-3`}></i>
                      <div>
                        <div className="font-medium">{doc.title}</div>
                        <div className="text-sm text-gray-500">
                          {doc.type} • {doc.updated}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-download"></i>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Files are securely stored on AWS S3 with encrypted access
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDocuments;
