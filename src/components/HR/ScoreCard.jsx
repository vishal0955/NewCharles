import React from "react";

const CandidateAssessment = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-search text-lg"></i>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-bell text-lg"></i>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-th text-lg"></i>
            </button>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-700">Your Company Name</span>
              <img
                src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a person in business attire with a neutral expression against a light background&width=32&height=32&orientation=squarish&flag=5d386e71-caba-479f-a80f-67c73a329f41"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex gap-8">
          {/* Left Section */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Bar raiser
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a person in business attire with a friendly smile against a light background&width=40&height=40&orientation=squarish&flag=6f43f9e5-6d1c-436a-b957-923a29420686"
                  alt="Wade Wilson"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Wade Wilson
                  </h2>
                  <p className="text-sm text-gray-500">Mid Product Designer</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="!rounded-button inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <i className="fas fa-book mr-2"></i>
                  Interview playbook
                </button>
                <button className="!rounded-button inline-flex items-center px-4 py-2 bg-red-50 text-red-700 text-sm font-medium hover:bg-red-100">
                  <i className="fas fa-times mr-2"></i>
                  Decline Feedback
                </button>
              </div>
            </div>

            {/* Purpose Section */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <i className="fas fa-bullseye text-gray-400"></i>
                <h3 className="text-lg font-medium text-gray-900">Purpose</h3>
              </div>
              <p className="text-gray-600">
                Establish whether candidate meets the role's specific values
                hiring bar
              </p>
            </section>

            {/* Values Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <i className="fas fa-star text-gray-400"></i>
                  <h3 className="text-lg font-medium text-gray-900">Values</h3>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Performing
                </span>
              </div>

              <div className="mb-8">
                <h4 className="text-base font-medium text-gray-900 mb-4">
                  Get It Done
                </h4>
                <div className="flex gap-2">
                  {["Don't know", "Poor", "Basic", "Intermediate", "Advanced", "Expert"].map((label, index) => (
                    <button
                      key={index}
                      className={`!rounded-button px-4 py-2 text-sm font-medium ${
                        label === "Intermediate"
                          ? "text-white bg-gray-900"
                          : "text-gray-500 bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Section */}
          <div className="w-[30%] min-w-[320px]">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  {["CV", "Candidate profile", "Previous feedback"].map(
                    (tab, index) => (
                      <button
                        key={index}
                        className={`px-6 py-4 text-sm font-medium ${
                          tab === "CV"
                            ? "text-custom border-b-2 border-custom"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </nav>
              </div>
              <div className="p-6">
                <a
                  href="#"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <i className="fab fa-linkedin text-blue-600 text-xl mr-3"></i>
                    <span className="text-sm font-medium text-gray-900">
                      LinkedIn profile
                    </span>
                  </div>
                  <i className="fas fa-external-link-alt text-gray-400"></i>
                </a>
                <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://creatie.ai/ai/api/search-image?query=A clean, modern resume template with professional layout and typography against a white background&width=600&height=800&orientation=portrait&flag=060052e9-aa5a-4217-9cf5-49c589ec7b25"
                    alt="CV Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateAssessment;
