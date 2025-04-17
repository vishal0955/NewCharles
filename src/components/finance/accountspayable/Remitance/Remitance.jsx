import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Remittance = () => {

  const darkMode = useSelector((state) => (state.theme.isDarkMode))
  
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold">Remittance</h1>
      <div className="flex items-center space-x-4">
      
      <div className="dropdown">
            <button
              className={`${darkMode ? "card-dark" : "bg-white" } inv-filter-button  dropdown-toggle`}
              type="button"
              data-bs-toggle="dropdown"
            >
              Actions
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#import">
                  Import
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#export">
                  Export
                </a>
              </li>
            </ul>
          </div>

        
        <Link to='/finance/newremitance'>
        <button className="!rounded-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-custom/90">
          Create Remittance
        </button>
        </Link>
      </div>
    </div>
    <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white shadow rounded-lg`}>
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search all Remittance"
              className={`${darkMode ? "card-dark" : "bg-white" } block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom sm:text-sm`}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400" />
            </div>
          </div>
          <div className="flex gap-4">
            <select className={`${darkMode ? "card-dark" : "bg-white" } block w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm rounded-md`}>
              <option>All</option>
            </select>
            <select className={`${darkMode ? "card-dark" : "bg-white" } block w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm rounded-md`}>
              <option>All users</option>
              <option>John Doe</option>
              <option>Sarah johnson</option>
            </select>
            <select className={`${darkMode ? "card-dark" : "bg-white" } block w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm rounded-md`}>
              <option>Active</option>
              <option>Inactive</option>
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
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Remittance
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Remittance Amount
                <i className="fas fa-info-circle ml-1 text-gray-400" />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Remittance Owner
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Create Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-custom font-medium">
                Remittance #1234
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                £14.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 mr-2" />
                  <span className="text-sm">
                    Pending signature (0/1)
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://i.ibb.co/dJ68VsWW/image.png"
                    alt=""
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium ">
                      John Doe
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                Today at 23:17
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-custom font-medium">
                Remittance #1235
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                £2,500.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" />
                  <span className="text-sm">Accepted</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://ui-avatars.com/api/?name=Sarah+Johnson"
                    alt=""
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium ">
                      Sarah Johnson
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                Yesterday at 15:30
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-custom font-medium">
                Remittance #1236
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                £750.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2" />
                  <span className="text-sm">Declined</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://ui-avatars.com/api/?name=Michael+Chen"
                    alt=""
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium ">
                      Michael Chen
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                2 days ago
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-custom font-medium">
                Remittance #1237
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                £1,200.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-400 mr-2" />
                  <span className="text-sm">In Review</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://ui-avatars.com/api/?name=Emma+Wilson"
                    alt=""
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium ">
                      Emma Wilson
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                3 days ago
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="!rounded-button relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="!rounded-button ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
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
              <button className="!rounded-button border-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                3
              </button>
              <button className="!rounded-button border-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                4
              </button>
              <button className="!rounded-button border-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                5
              </button>
              <button className="!rounded-button relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium">
                <span className="sr-only">Next</span>
                <i className="fas fa-chevron-right" />
              </button>
            </nav>
          </div>
          <div className="flex items-center">
            <select className={`${darkMode ? "card-dark" : "bg-white" } block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm rounded-md`}>
              <option>25 per page</option>
              <option>50 per page</option>
              <option>100 per page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Remittance;

{/* <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Remittance Management</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css"
    rel="stylesheet"
  />

</> */}
