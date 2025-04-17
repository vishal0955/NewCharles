import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllBills = () => {

  const darkMode = useSelector((state) => (state.theme.isDarkMode))

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Bills</h1>
        <div className="flex items-center space-x-4">
          <div className="relative dropdown">
            <button className={`${darkMode ? "dark-mode" : "bg-white" } !rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}>
              Actions
              <i className="fas fa-chevron-down ml-2" />
            </button>
            <div
              className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10 hidden"
              id="actions-dropdown"
            >
              <ul className="py-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <i className="fas fa-envelope text-gray-400" /> Send
                    Remitance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <i className="fas fa-copy text-gray-400" /> Duplicate
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <i className="fas fa-edit text-gray-400" /> Edit Remitance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <i className="fas fa-trash text-gray-400" /> Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/finance/newbill">
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-custom/90">
              Create Bill
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border p-6 shadow-sm`}>
          <h3 className="text-sm font-medium text-gray-500">Total Invoice</h3>
          <p className="text-2xl font-semibold mt-2">$3,237.94</p>
          <div className="mt-2 flex items-center">
            <div className="w-full h-1 bg-gray-100 rounded">
              <div className="w-3/4 h-1 bg-pink-500 rounded" />
            </div>
          </div>
          <p className="mt-2 text-sm text-green-600 flex items-center">
            <i className="fas fa-arrow-up mr-1" />
            +32.40% from last month
          </p>
        </div>
        <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border p-6 shadow-sm`}>
          <h3 className="text-sm font-medium text-gray-500">Outstanding</h3>
          <p className="text-2xl font-semibold mt-2">$3,237.94</p>
          <div className="mt-2 flex items-center">
            <div className="w-full h-1 bg-gray-100 rounded">
              <div className="w-1/2 h-1 bg-purple-500 rounded" />
            </div>
          </div>
          <p className="mt-2 text-sm text-red-600 flex items-center">
            <i className="fas fa-arrow-down mr-1" />
            -4.40% from last month
          </p>
        </div>
        <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border p-6 shadow-sm`}>
          <h3 className="text-sm font-medium text-gray-500">Draft</h3>
          <p className="text-2xl font-semibold mt-2">$3,237.94</p>
          <div className="mt-2 flex items-center">
            <div className="w-full h-1 bg-gray-100 rounded">
              <div className="w-1/4 h-1 bg-yellow-500 rounded" />
            </div>
          </div>
          <p className="mt-2 text-sm text-green-600 flex items-center">
            <i className="fas fa-arrow-up mr-1" />
            +12% from last month
          </p>
        </div>
        <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border p-6 shadow-sm`}>
          <h3 className="text-sm font-medium text-gray-500">Total Overdue</h3>
          <p className="text-2xl font-semibold mt-2">$3,237.94</p>
          <div className="mt-2 flex items-center">
            <div className="w-full h-1 bg-gray-100 rounded">
              <div className="w-2/3 h-1 bg-red-500 rounded" />
            </div>
          </div>
          <p className="mt-2 text-sm text-red-600 flex items-center">
            <i className="fas fa-arrow-down mr-1" />
            -15.40% from last month
          </p>
        </div>
      </div>
      {/* <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8 flex items-center justify-between">
      <div className="flex items-center">
        <i className="fas fa-exclamation-triangle text-orange-500 mr-3" />
        <p className="text-gray-700">
          We noticed you have 11 sets of duplicate bills. Would you like to
          review them?
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-custom hover:text-custom-600 font-medium !rounded-button">
          Review
        </button>
        <button className="text-gray-400 hover:text-gray-500">
          <i className="fas fa-times" />
        </button>
      </div>
    </div> */}
      <div className={`${darkMode ? "card-dark" : null } rounded-lg border shadow-sm p-6`}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
          <div className="relative flex-1 max-w-md me-4">
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter a contact, amount, or reference"
              className={`${darkMode ? "card-dark" : "bg-white" } w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom`}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <input
                type="date"
                className={`${darkMode ? "card-dark" : "bg-white" } pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom`}
              />
            </div>
            <div className="relative">
              <input
                type="date"
                className={`${darkMode ? "card-dark" : "bg-white" } pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom`}
              />
            </div>
            <select className={`${darkMode ? "card-dark" : "bg-white" } pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom appearance-none`}>
              <option>Any date</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button className={`${darkMode ? "card-dark" : "bg-white" } inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 !rounded-button`}>
              <i className="fas fa-filter mr-2" />
              Filter
            </button>
            <button className={`${darkMode ? "card-dark" : "bg-white" } inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 !rounded-button`}>
              <i className="fas fa-columns mr-2" />
              Columns
            </button>
          </div>
        </div>
        <div className={`${darkMode ? "dark-mode" : "bg-white" } overflow-x-auto`}>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className={`${darkMode ? "card-dark" : "bg-white" } px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                  View
                </th>
                <th className={`${darkMode ? "card-dark" : "bg-white" } px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                  From
                </th>
                <th className={`${darkMode ? "card-dark" : "bg-white" } px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                  Status
                </th>
                <th className={`${darkMode ? "card-dark" : "bg-white" } px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                  Reference
                </th>
                <th className={`${darkMode ? "card-dark" : "bg-white" } px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                  Date
                </th>
                <th className={`${darkMode ? "card-dark" : "bg-white" } px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                  Due date
                </th>
                <th className={`${darkMode ? "card-dark" : "bg-white" } px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                  Paid
                </th>
                <th className={`${darkMode ? "card-dark" : "bg-white" } px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                  Due
                </th>
                <th className={`${darkMode ? "card-dark" : "bg-white" } px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                  Currency
                </th>
                <th className={`${darkMode ? "card-dark" : "bg-white" } px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                  Files
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? "card-dark" : "bg-white" } bg-white divide-y divide-gray-200`}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-gray-500">
                    <i className="far fa-eye" />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">John Smith</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">#INV-001</td>
                <td className="px-6 py-4 whitespace-nowrap">Jan 01, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">Jan 15, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">$1,250.00</td>
                <td className="px-6 py-4 whitespace-nowrap">$0.00</td>
                <td className="px-6 py-4 whitespace-nowrap">USD</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-custom hover:text-custom-600">
                    <i className="far fa-file mr-1" />1
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-gray-500">
                    <i className="far fa-eye" />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Sarah Johnson</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">#INV-002</td>
                <td className="px-6 py-4 whitespace-nowrap">Dec 23, 2024</td>
                <td className="px-6 py-4 whitespace-nowrap">Jan 06, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">$0.00</td>
                <td className="px-6 py-4 whitespace-nowrap">$2,500.00</td>
                <td className="px-6 py-4 whitespace-nowrap">USD</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-custom hover:text-custom-600">
                    <i className="far fa-file mr-1" />2
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-3 flex items-center justify-between border-t border-gray-200">
          <div className="flex-1 flex justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">1122</span> results
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-700">
                Total Amount: <span className="font-medium">$10,674.30</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBills;
