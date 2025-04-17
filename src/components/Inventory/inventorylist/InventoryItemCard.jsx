import React, { useState } from 'react'
import ItemCardVariation from './ItemCardVariation';
import InventoryPricing from './InventoryPricing';
import InventorySetting from './InventorySetting';
import InventoryHistory from './InventoryHistory';

const InventoryItemCard = () => {
  const [activeTab, setActiveTab] = useState("Inventory");

  return (
    <div className="min-h-screen flex flex-col">
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold">Products &gt; CP3</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-copy mr-2" />
              Duplicate product
            </button>
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-tags mr-2" />
              Tags
            </button>
          </div>
        </div>
      </div>
    </header>

     <nav className="bg-white border-b border-gray-200">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {["Inventory", "Variations", "Pricing", "Settings", "History"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-4 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-custom text-custom"
                    : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="">
        {activeTab === "Inventory" && <><Inventory /></>}
        {activeTab === "Variations" && <> <ItemCardVariation /></>}
        {activeTab === "Pricing" && <> <InventoryPricing /></>}
        {activeTab === "Settings" && <> <InventorySetting /></>}
        {/* {activeTab === "Online store" && <p>Online Store Content</p>} */}
        {activeTab === "History" && <> <InventoryHistory /></>}
      </div>

    
    
  </div>
)
}

export default InventoryItemCard;


const Inventory =() => {
  return (
    <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6" aria-label="Tabs">
                <button className="border-b-2 border-custom text-custom whitespace-nowrap py-4 px-1 text-sm font-medium">
                  Current stock (3)
                </button>
                <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-4 px-1 text-sm font-medium">
                  Expected stock (0)
                </button>
              </nav>
            </div>
            <div className="p-6">
              <div className="flex space-x-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-search text-gray-400" />
                    </span>
                    <input
                      type="text"
                      className="!rounded-button block w-full pl-10 pr-3 py-2 border border-gray-300 text-sm"
                      placeholder="Search identifier"
                    />
                  </div>
                </div>
                <select className="!rounded-button block w-48 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm">
                  <option>Filter by status</option>
                  <option>In stock</option>
                  <option>Picked up</option>
                </select>
                <select className="!rounded-button block w-48 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm">
                  <option>Select...</option>
                </select>
                <button className="!rounded-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-custom hover:bg-custom/90">
                  Add stock items
                </button>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Identifier
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Available from
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Available till
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Created at
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <button className="text-custom hover:text-custom/90">
                        <i className="fas fa-plus mr-2" />
                        Add column
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      CP3-3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-green-400 mr-2" />
                        In stock
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Regular
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" />
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" />
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      27-12-2024 18:21
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <i className="fas fa-pen" />
                      </button>
                      <button className="ml-4 text-gray-400 hover:text-gray-500">
                        <i className="fas fa-barcode" />
                      </button>
                      <button className="ml-4 text-gray-400 hover:text-gray-500">
                        <i className="fas fa-ellipsis-v" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      CP3-2
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-green-400 mr-2" />
                        In stock
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Regular
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" />
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" />
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      27-12-2024 18:21
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <i className="fas fa-pen" />
                      </button>
                      <button className="ml-4 text-gray-400 hover:text-gray-500">
                        <i className="fas fa-barcode" />
                      </button>
                      <button className="ml-4 text-gray-400 hover:text-gray-500">
                        <i className="fas fa-ellipsis-v" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      CP3-1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-orange-400 mr-2" />
                        Picked up
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Regular
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" />
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" />
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      27-12-2024 18:21
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <i className="fas fa-pen" />
                      </button>
                      <button className="ml-4 text-gray-400 hover:text-gray-500">
                        <i className="fas fa-barcode" />
                      </button>
                      <button className="ml-4 text-gray-400 hover:text-gray-500">
                        <i className="fas fa-ellipsis-v" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="px-6 py-4 text-sm text-gray-500">
                Showing 1-3 of 3
              </div>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium">Barcode</h3>
              </div>
              <div className="p-4">
                <button className="!rounded-button w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <i className="fas fa-barcode mr-2" />
                  Add barcode
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium">Collections</h3>
              </div>
              <div className="p-4">
                <button className="!rounded-button w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Add to collections
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  This product is not added to any collections yet.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium">Notes</h3>
              </div>
              <div className="p-4">
                <button className="!rounded-button w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Add a new note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
