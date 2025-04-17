import React from 'react'

const Refferal = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Referrals Management</title>
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
    <div className="min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Referrals</h1>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                <a href="#" className="hover:text-custom">
                  Administration
                </a>
                <i className="fas fa-chevron-right text-xs" />
                <span>Referrals</span>
              </div>
            </div>
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-file-export mr-2" />
              Export
            </button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Referrals List
              </h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select className="!rounded-button form-select block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm">
                    <option>All Roles</option>
                    <option>Developer</option>
                    <option>Designer</option>
                    <option>Manager</option>
                  </select>
                </div>
                <div className="relative">
                  <select className="!rounded-button form-select block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm">
                    <option>Sort By: Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select className="!rounded-button form-select block w-20 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                </div>
                <span className="text-sm text-gray-700">Entries</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="!rounded-button inline-flex rounded-2 items-center px-4 py-2 bg-custom border border-transparent text-sm font-medium  hover:bg-custom/90"
                  /> 
                  <div className="absolute inset-y-0 right-3 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400" />
                  </div>
                </div>
                <button className="!rounded-button inline-flex items-center px-4 py-2 bg-custom border border-transparent text-sm font-medium  hover:bg-custom/90">
                  <i className="fas fa-plus mr-2" />
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="w-12 px-6 py-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Referrals ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Referrer Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Job Referred
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Referee Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Referrals Bonus
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Reff-001
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person with neutral expression on plain background&width=40&height=40&orientation=squarish&flag=70feecdf-d3e9-4c42-8f89-a96d774308fc"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Anthony Lewis
                        </div>
                        <div className="text-sm text-gray-500">Finance</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <i className="fab fa-apple text-gray-500 mr-2" />
                      <span className="text-sm text-gray-900">
                        Senior iOS Developer
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person with neutral expression on plain background&width=40&height=40&orientation=squarish&flag=f77f30e9-9f12-4bec-996a-a56d3672ce9f"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Harold Gaynor
                        </div>
                        <div className="text-sm text-gray-500">
                          harold@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-custom hover:text-custom/80 mr-3">
                      <i className="fas fa-edit" style={{color:"blue"}} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <i className="fas fa-trash-alt" />
                    </button>
                  </td>
                </tr>
                {/* More rows... */}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing 1 to 10 of 50 entries
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="!rounded-button inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  disabled=""
                >
                  <i className="fas fa-chevron-left mr-2" />
                  Previous
                </button>
                <button className="!rounded-button inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Next
                  <i className="fas fa-chevron-right ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </></div>
  )
}

export default Refferal