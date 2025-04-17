import React from 'react'

const InventoryHistory = () => {
  return (
    <div className="min-h-screen flex flex-col">
    {/* <header className="bg-white border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <div>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      Inventory
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-sm mx-2" />
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      Inventory Item Card
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-sm mx-2" />
                    <span className="text-gray-700">History</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-bell" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-cog" />
            </button>
            <span className="bg-gray-200 px-2 py-1 rounded-md text-sm">0</span>
          </div>
        </div>
      </div>
    </header> */}
    <main className="">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Products &gt; CP3
            </h1>
            <button className="!rounded-button inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-copy mr-2" />
              Duplicate product
            </button>
            <button className="!rounded-button inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-moon mr-2" />
            </button>
          </div>
        </div> */}
        <div className="bg-white shadow rounded-lg">
          {/* <nav className="border-b border-gray-200">
            <div className="flex space-x-8 px-6" aria-label="Tabs">
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm"
              >
                Inventory
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm"
              >
                Variations
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm"
              >
                Pricing
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm"
              >
                Settings
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm"
              >
                Online Store
              </a>
              <a
                href="#"
                className="border-custom text-custom py-4 px-1 border-b-2 font-medium text-sm"
              >
                History
              </a>
            </div>
          </nav> */}
          <div className="flex">
            <div className="flex-1 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Items
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Order
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Employee
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      22-12-2024 18:35
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Picked up
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      CP3-1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      #1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-500">
                            BTS
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            BTS Big
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-500">
                            BTS
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            BTS Big
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="text-sm text-gray-700">Showing 1 of 1</div>
              </div>
            </div>
            <div className="w-80 border-l border-gray-200">
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">Tags</h3>
                    <button className="text-gray-400 hover:text-gray-500">
                      <i className="fas fa-chevron-down" />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      Barcode
                    </h3>
                    <button className="text-gray-400 hover:text-gray-500">
                      <i className="fas fa-chevron-down" />
                    </button>
                  </div>
                  <button className="!rounded-button mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <i className="fas fa-barcode mr-2" />
                    Add barcode
                  </button>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      Collections
                    </h3>
                    <button className="text-gray-400 hover:text-gray-500">
                      <i className="fas fa-chevron-down" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    This product is not added to any collections yet.
                  </p>
                  <button className="!rounded-button mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Add to collections
                  </button>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">Notes</h3>
                    <button className="text-gray-400 hover:text-gray-500">
                      <i className="fas fa-chevron-down" />
                    </button>
                  </div>
                  <button className="!rounded-button mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Add a new note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div className="fixed bottom-4 right-4">
      <button className="!rounded-button h-12 w-12 flex items-center justify-center text-white bg-custom rounded-full shadow-lg hover:bg-custom/90">
        <i className="fas fa-comments" />
      </button>
    </div>
  </div>
  )
}

export default InventoryHistory