import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketManagementSystem = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownOptions = {
    "Ticket owner": ["Me", "Unassigned", "John Doe", "Jane Smith"],
    "Priority": ["High", "Medium", "Low", "Urgent"],
    "Pipeline": ["Sales", "Support", "Technical", "Marketing"],
    "Ticket status": ["Open", "Closed", "Pending", "In Progress"],
    "Assigned Teams": ["Sales Team", "Support Team", "Tech Team", "Marketing Team"]
  };

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleClick = () => {
    console.log("ticketcard clicked");
    navigate("/support/ticketcard");
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* Filters & Actions */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 space-y-4 md:space-y-0 d-grid" >
            <div className="flex flex-wrap gap-2">
              {Object.keys(dropdownOptions).map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => handleDropdownClick(index)}
                    className="!rounded-button inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <span className="whitespace-nowrap">{item}</span>
                    <i
                      className={`fas fa-chevron-down ml-2 text-gray-400 transition-transform duration-200 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>

                  {openDropdown === index && (
                    <div className="absolute z-10 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {dropdownOptions[item].map((option, optionIndex) => (
                          <button
                            key={optionIndex}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => {
                              console.log(`Selected ${option} for ${item}`);
                              setOpenDropdown(null);
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button className="!rounded-button inline-flex items-center px-3 py-2 bg-custom text-white text-sm font-medium hover:bg-custom/90 whitespace-nowrap">
                <i className="fas fa-plus mr-2"></i>
                <span>More</span>
              </button>
              {/* <button className="!rounded-button inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap">
              <i className="fas fa-filter mr-2"></i>
              <span>Advanced filters</span>
            </button> */}
            </div>
            
          </div>

          {/* Tickets Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
            <span className="text-sm text-gray-700">86 tickets</span>
            {/* <button className="!rounded-button inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap">
              Edit columns
            </button> */}
          </div>

          {/* Tickets Table */}
          <div className="bg-white shadow border border-gray-200 overflow-x-auto d-grid">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-12 px-3 sm:px-6 py-3 text-left">
                    <input type="checkbox" className="h-4 w-4 text-custom border-gray-300 focus:ring-custom" />
                  </th>
                  {["Channel", "Ticket Name", "Ticket → Contacts", "Company (Primary)"].map((col, index) => (
                    <th
                      key={index}
                      className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <span className="whitespace-nowrap">{col}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="h-4 w-4 text-custom border-gray-300 focus:ring-custom" />
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </td>
                  <td className="px-3 sm:px-6 py-4" onClick={handleClick}>
                    <div className="text-sm text-custom hover:text-custom/90">You have a new message</div>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap" onClick={handleClick}>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xs font-medium">BB</span>
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <div className="text-sm font-medium text-gray-900">Brayden Blessed</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center">
                        <span className="text-xs font-medium">AC</span>
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <div className="text-sm font-medium text-gray-900">AnswerConnect</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManagementSystem;