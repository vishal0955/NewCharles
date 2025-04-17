import React from "react";

const CreateNewGoal = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-10">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex items-center">
              <button className="text-gray-600 hover:text-gray-900 mr-4">
                <i className="fas fa-arrow-left"></i>
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">
                Create New Goal
              </h1>
            </div>

            {/* Form Section */}
            <div className="bg-white shadow rounded-lg p-6 space-y-8">
              <div className="space-y-6">
                {/* Goal Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Goal Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                    placeholder="Enter goal name"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Goals are high-level containers that can be broken down
                    into smaller Targets.
                  </p>
                </div>

                {/* Goal Owner */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Goal Owner
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button pl-10"
                      placeholder="Search and select owner"
                    />
                    <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>

                {/* Access Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Access Level
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center justify-center p-6 border-2 border-custom bg-blue-50 !rounded-button">
                      <i className="fas fa-users text-2xl text-custom mb-2"></i>
                      <span className="text-sm font-medium text-gray-900">
                        Workspace
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        Visible to all members
                      </span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 !rounded-button hover:border-custom">
                      <i className="fas fa-lock text-2xl text-gray-400 mb-2"></i>
                      <span className="text-sm font-medium text-gray-900">
                        Private
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        Only visible to you
                      </span>
                    </button>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows="4"
                    className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                    placeholder="Enter goal description"
                  ></textarea>
                </div>

                {/* Target Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Date
                  </label>
                  <input
                    type="date"
                    className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 pt-6 border-t">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 !rounded-button">
                  Cancel
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-custom hover:bg-custom/90 !rounded-button">
                  Create Goal
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateNewGoal;
