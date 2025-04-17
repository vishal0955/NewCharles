import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TicketSummary = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-lg">
            <i className="fas fa-chevron-down mr-3"></i>
            Ticket Summary
          </button>
        </div>

        {/* Ticket Card */}
        <div className="relative p-6 bg-white rounded-lg overflow-hidden">
          <div className="relative">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Ticket #377799113
            </h2>

            <div className="flex items-center text-gray-600 mb-6">
              <span>Generated 25 Dec 2024</span>
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <i className="fas fa-sync-alt"></i>
              </button>
            </div>

            {/* Ticket Description */}
            <div className="text-gray-700 mb-8 leading-relaxed">
              <p>
                The ticket from{" "}
                <span className="font-medium">John Doe</span>, Managing
                Director of{" "}
                <span className="font-medium">XYZ Technology Group Ltd</span>,
                contains a simple message stating &#34;test.&#34; There are no
                additional details or context provided, and no calls have been
                recorded for this ticket. It appears to be a placeholder or
                test entry rather than a substantive inquiry.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 mb-6">
              {["thumbs-up", "thumbs-down", "copy"].map((icon, index) => (
                <button key={index} className="text-gray-400 hover:text-gray-600">
                  <i className={`far fa-${icon} text-xl`}></i>
                </button>
              ))}
            </div>

            {/* Ask a Question Button */}
            <button className="!rounded-button inline-flex items-center px-6 py-2.5 bg-custom text-white font-medium text-sm hover:bg-opacity-90 transition-colors">
              <i className="fas fa-star mr-2"></i>
              Ask a question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSummary;
