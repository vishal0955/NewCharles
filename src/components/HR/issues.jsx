import React from "react";

const HRIssuesLog = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                alt="Logo"
                className="h-8 w-auto"
              />
              <nav className="ml-6 flex space-x-2 items-center text-sm">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Home
                </a>
                <span className="text-gray-400">/</span>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  HR
                </a>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900">Issues</span>
              </nav>
            </div>
            <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium flex items-center">
              <i className="fas fa-plus mr-2"></i> Add New Issue
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">
                HR Issues Log
              </h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select className="!rounded-button appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 text-sm">
                    <option>10 entries</option>
                    <option>25 entries</option>
                    <option>50 entries</option>
                  </select>
                </div>
                <div className="relative">
                  <select className="!rounded-button appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 text-sm">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                  </select>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="!rounded-button pl-10 pr-4 py-2 border border-gray-300 w-64 text-sm"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="w-12 py-3 px-4">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="py-3 px-4 text-sm font-medium text-gray-500">
                      Issue Type
                    </th>
                    <th className="py-3 px-4 text-sm font-medium text-gray-500">
                      Subject
                    </th>
                    <th className="py-3 px-4 text-sm font-medium text-gray-500">
                      Description
                    </th>
                    <th className="py-3 px-4 text-sm font-medium text-gray-500">
                      Start Date
                    </th>
                    <th className="py-3 px-4 text-sm font-medium text-gray-500">
                      End Date
                    </th>
                    <th className="py-3 px-4 text-sm font-medium text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="py-4 px-4 text-sm">Performance</td>
                    <td className="py-4 px-4 text-sm">Meeting Deadlines</td>
                    <td className="py-4 px-4 text-sm">
                      Consistently missing project deadlines
                    </td>
                    <td className="py-4 px-4 text-sm">Jan 15, 2024</td>
                    <td className="py-4 px-4 text-sm">Feb 15, 2024</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="py-4 px-4 text-sm">Behavioral</td>
                    <td className="py-4 px-4 text-sm">Communication</td>
                    <td className="py-4 px-4 text-sm">
                      Inappropriate communication with colleagues
                    </td>
                    <td className="py-4 px-4 text-sm">Jan 20, 2024</td>
                    <td className="py-4 px-4 text-sm">Jan 27, 2024</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                        Resolved
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="py-4 px-4 text-sm">Attendance</td>
                    <td className="py-4 px-4 text-sm">Late Arrival</td>
                    <td className="py-4 px-4 text-sm">Frequent late arrivals to work</td>
                    <td className="py-4 px-4 text-sm">Feb 1, 2024</td>
                    <td className="py-4 px-4 text-sm">—</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-gray-500">Showing 1 to 3 of 3 entries</p>
              <div className="flex items-center space-x-2">
                <button
                  className="!rounded-button px-4 py-2 text-sm border border-gray-300 bg-white text-gray-500 disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button
                  className="!rounded-button px-4 py-2 text-sm border border-gray-300 bg-white text-gray-500 disabled:opacity-50"
                  disabled
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-center">
            <p className="text-sm text-gray-500">© 2024 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HRIssuesLog;
