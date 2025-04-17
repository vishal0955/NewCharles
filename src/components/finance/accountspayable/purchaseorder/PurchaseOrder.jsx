import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PurchaseOrder = () => {

  const darkMode = useSelector((state) => (state.theme.isDarkMode))

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">
          {" "}
          Purchase Orders
        </h1>
        <div className="flex items-center gap-4 relative">
          <div className="relative">
            <button
              id="actions-button"
              className="inline-flex rounded items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Actions <i className="fas fa-chevron-down ml-2" />
            </button>
            <div
              id="dropdown-menu"
              className="hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
            >
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Export to Excel
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Export to PDF
                </a>
              </div>
            </div>
          </div>
          <Link to="/finance/newpurchaseorder">
            <button className="inline-flex rounded items-center px-4 py-2 border border-transparent text-sm font-medium rounded-button text-white bg-blue-600 hover:bg-blue-500">
              Create Purchase Order
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border p-6 shadow-sm`}>
          <div className="mb-2">
            <h3 className="text-sm font-medium">Total Invoice</h3>
            <p className="text-2xl font-semibold">$3,237.94</p>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full w-3/4" />
          </div>
          <p className="mt-2 text-sm text-green-600">
            <i className="fas fa-arrow-up mr-1" />
            32.40% from last month
          </p>
        </div>
        <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border p-6 shadow-sm`}>
          <div className="mb-2">
            <h3 className="text-sm font-medium ">Outstanding</h3>
            <p className="text-2xl font-semibold">$3,237.94</p>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full w-1/2" />
          </div>
          <p className="mt-2 text-sm text-red-600">
            <i className="fas fa-arrow-down mr-1" />
            4.40% from last month
          </p>
        </div>
        <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border p-6 shadow-sm`}>
          <div className="mb-2">
            <h3 className="text-sm font-medium ">Draft</h3>
            <p className="text-2xl font-semibold">$3,237.94</p>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-2/3" />
          </div>
          <p className="mt-2 text-sm text-green-600">
            <i className="fas fa-arrow-up mr-1" />
            12% from last month
          </p>
        </div>
        <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border p-6 shadow-sm`}>
          <div className="mb-2">
            <h3 className="text-sm font-medium ">Total Overdue</h3>
            <p className="text-2xl font-semibold">$3,237.94</p>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full w-1/4" />
          </div>
          <p className="mt-2 text-sm text-red-600">
            <i className="fas fa-arrow-down mr-1" />
            15.40% from last month
          </p>
        </div>
      </div>
      <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border shadow-sm`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search all quotes"
                className={`${darkMode ? "card-dark" : "bg-white" } w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom`}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400" />
              </div>
            </div>
            <div className="flex gap-4">
              <select className={`${darkMode ? "card-dark" : "bg-white" } border border-gray-300 rounded-md py-2 pl-3 pr-8 focus:ring-custom focus:border-custom`}>
                <option>All</option>
              </select>
              <select className={`${darkMode ? "card-dark" : "bg-white" } border border-gray-300 rounded-md py-2 pl-3 pr-8 focus:ring-custom focus:border-custom`}>
                <option>All users</option>
              </select>
              <select className={`${darkMode ? "card-dark" : "bg-white" } border border-gray-300 rounded-md py-2 pl-3 pr-8 focus:ring-custom focus:border-custom`}>
                <option>Active</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className={`${darkMode ? "table-dark" : "bg-white" } min-w-full divide-y divide-gray-200`}>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Quote
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Quote Amount
                  <i className="fas fa-info-circle ml-1 text-gray-400" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Quote Owner
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Create Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-custom">
                  QUOTE-1234
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  £14
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-1.5" />
                    Pending signature (0/1)
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://i.ibb.co/dJ68VsWW/image.png"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        John Doe
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  20 Dec 2024
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-custom">
                  QUOTE-1235
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  £2,500
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5" />
                    Approved
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=Sarah+Johnson"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        Sarah Johnson
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  19 Dec 2024
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-custom">
                  QUOTE-1236
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  £890
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-1.5" />
                    Rejected
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=Michael+Chen"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        Michael Chen
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  18 Dec 2024
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-custom">
                  QUOTE-1237
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  £3,750
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5" />
                    In Progress
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=Emma+Wilson"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        Emma Wilson
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  17 Dec 2024
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="!rounded-button border border-gray-300 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Previous
            </button>
            <button className="!rounded-button ml-3 border border-gray-300 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button className="!rounded-button relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium">
                  <span className="sr-only">Previous</span>
                  <i className="fas fa-chevron-left" />
                </button>
                <button className="!rounded-button bg-custom border-custom relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </button>
                <button className="!rounded-button border-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  2
                </button>
                <button className="!rounded-button relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium ">
                  <span className="sr-only">Next</span>
                  <i className="fas fa-chevron-right" />
                </button>
              </nav>
            </div>
            <div className="flex items-center">
              <select className={`${darkMode ? "card-dark" : "bg-white" } border border-gray-300 rounded-md py-2 pl-3 pr-8 focus:ring-custom focus:border-custom`}>
                <option>25 per page</option>
                <option>50 per page</option>
                <option>100 per page</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
