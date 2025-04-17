import React from "react";

const RecordManagement = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-['Inter']">
      <div className="max-w-8xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
          <div className="divide-y divide-gray-100">
            {/* Companies Section */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-chevron-down text-gray-400 text-sm"></i>
                  <h3 className="font-medium text-gray-900">Companies (0)</h3>
                </div>
                <button className="text-custom hover:text-custom/80 font-medium text-sm rounded-lg">
                  + Add
                </button>
              </div>
              <p className="text-gray-500 text-sm pl-6">
                See the businesses or organizations associated with this record.
              </p>
            </div>

            {/* Deals Section */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-chevron-down text-gray-400 text-sm"></i>
                  <h3 className="font-medium text-gray-900">Deals (0)</h3>
                </div>
                <button className="text-custom hover:text-custom/80 font-medium text-sm rounded-lg">
                  + Add
                </button>
              </div>
              <p className="text-gray-500 text-sm pl-6">
                Track the revenue opportunities associated with this record.
              </p>
            </div>

            {/* Tickets Section */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-chevron-down text-gray-400 text-sm"></i>
                  <h3 className="font-medium text-gray-900">Tickets (0)</h3>
                </div>
                <button className="text-custom hover:text-custom/80 font-medium text-sm rounded-lg">
                  + Add
                </button>
              </div>
              <p className="text-gray-500 text-sm pl-6">
                Track the customer requests associated with this record.
              </p>
            </div>

            {/* Tasks Section */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-chevron-down text-gray-400 text-sm"></i>
                  <h3 className="font-medium text-gray-900">Tasks (0)</h3>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded font-medium">
                    NEW
                  </span>
                </div>
                <button className="text-custom hover:text-custom/80 font-medium text-sm rounded-lg">
                  Create task
                </button>
              </div>
              <p className="text-gray-500 text-sm pl-6">
                See tasks associated with this record.
              </p>
            </div>

            {/* Attachments Section */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-chevron-down text-gray-400 text-sm"></i>
                  <h3 className="font-medium text-gray-900">Attachments</h3>
                </div>
                <div className="flex items-center gap-1">
                  <button className="text-custom hover:text-custom/80 font-medium text-sm rounded-lg">
                    Add
                  </button>
                  <i className="fa-solid fa-chevron-down text-gray-400 text-sm"></i>
                </div>
              </div>
              <p className="text-gray-500 text-sm pl-6">
                See the files attached to your activities or uploaded to this record.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordManagement;
