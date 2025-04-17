import React from "react";

const TicketDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto p-6 bg-white shadow-sm rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">About this ticket</h1>
          <button className="rounded-md bg-white border border-gray-200 px-4 py-2 text-gray-700 flex items-center space-x-2 hover:bg-gray-50">
            <span>Actions</span>
            <i className="fas fa-chevron-down text-sm"></i>
          </button>
        </div>

        {/* Ticket Details */}
        <div className="space-y-6">
          {/* Ticket Description */}
          <div>
            <h2 className="text-gray-600 mb-2">Ticket description</h2>
            <p className="text-gray-800 mb-2">
              Hi there! The festive season is such an exciting time for online businesses, with shoppers actively...
            </p>
            <button className="text-blue-500 font-medium hover:underline">See more</button>
          </div>

          {/* Priority */}
          <div>
            <h2 className="text-gray-600 mb-2">Priority</h2>
            <button className="rounded-md bg-white border border-gray-200 px-4 py-2 text-gray-700 flex items-center space-x-2 w-40">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span>Medium</span>
              <i className="fas fa-chevron-down text-sm ml-auto"></i>
            </button>
          </div>

          {/* Category */}
          <div>
            <h2 className="text-gray-600 mb-2">Category</h2>
            <div className="text-gray-400">--</div>
          </div>

          {/* Create Date */}
          <div>
            <h2 className="text-gray-600 mb-2">Create date</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-800">
                <i className="far fa-calendar text-gray-400"></i>
                <span>20/12/2024</span>
              </div>
              <button className="rounded-md bg-gray-50 px-4 py-1 text-gray-600 text-sm hover:bg-gray-100">Details</button>
            </div>
          </div>

          {/* Ticket Tags */}
          <div>
            <h2 className="text-gray-600 mb-2">Ticket Tags</h2>
            <div className="text-gray-400">--</div>
          </div>

          {/* Source */}
          <div>
            <h2 className="text-gray-600 mb-2">Source</h2>
            <button className="rounded-md bg-white border border-gray-200 px-4 py-2 text-gray-700 flex items-center justify-between w-40">
              <span>Email</span>
              <i className="fas fa-chevron-down text-sm"></i>
            </button>
          </div>

          {/* Ticket ID */}
          <div>
            <h2 className="text-gray-600 mb-2">Ticket ID</h2>
            <div className="text-gray-800">5426258768</div>
          </div>

          {/* Pipeline */}
          <div>
            <h2 className="text-gray-600 mb-2">Pipeline</h2>
            <div className="text-gray-800">Support Pipeline</div>
          </div>

          {/* Business Units */}
          <div>
            <h2 className="text-gray-600 mb-2">Business units</h2>
            <div className="text-gray-400">--</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
