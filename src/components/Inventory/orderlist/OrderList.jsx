import React, { useState} from 'react';
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom'

const OrderList = () => {
  const [statusOpen, setStatusOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

  return (
    <div>
          <div className="min-h-screen max-w-full flex flex-col">
   
    <div> <p>Order List</p></div>
    <div className="flex container">
      {/* <aside className="w-48 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="h-full  w-full flex flex-col">
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </h3>
                <div className="mt-2 space-y-1">
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <span className="truncate">Draft</span>
                    <span className="ml-auto text-gray-500 text-xs">(0)</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <span className="truncate">Reserved</span>
                    <span className="ml-auto text-gray-500 text-xs">(2)</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm font-medium text-custom bg-blue-50 rounded-md"
                  >
                    <span className="truncate">Picked up</span>
                    <span className="ml-auto text-gray-500 text-xs">(1)</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Payment Status
                </h3>
                <div className="mt-2 space-y-1">
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <span className="truncate">Payment due</span>
                    <span className="ml-auto text-gray-500 text-xs">(0)</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <span className="truncate">Partially paid</span>
                    <span className="ml-auto text-gray-500 text-xs">(1)</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <span className="truncate">Paid</span>
                    <span className="ml-auto text-gray-500 text-xs">(0)</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Date Range
                </h3>
                <div className="mt-2">
                  <div className="relative">
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom sm:text-sm"
                      placeholder="Select date range"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="fas fa-calendar text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button">
                <i className="fas fa-download mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </aside> */}
      <main className="flex-1 overflow-y-auto ">
      <div className="w-full bg-white border-b border-gray-200 p-4 flex items-center space-x-4 shadow-sm">
      {/* Status Dropdown */}
      <div className="relative">
        <button
          onClick={() => setStatusOpen(!statusOpen)}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
        >
          Status <ChevronDown className="ml-2 h-4 w-4" />
        </button>
        {statusOpen && (
          <div className="absolute  Z-30left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Draft (0)
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Reserved (2)
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Picked up (1)
            </button>
          </div>
        )}
      </div>

      {/* Payment Status Dropdown */}
      <div className="relative">
        <button
          onClick={() => setPaymentOpen(!paymentOpen)}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
        >
          Payment Status <ChevronDown className="ml-2 h-4 w-4" />
        </button>
        {paymentOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Payment due (0)
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Partially paid (1)
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Paid (0)
            </button>
          </div>
        )}
      </div>

      {/* Date Range Button */}
      <button className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
        Select Date Range
      </button>

      {/* Export Button */}
      <button className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center">
        <i className="fas fa-download mr-2" /> Export
      </button>
    </div>
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="relative rounded-md shadow-sm w-64">
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 pr-10 focus:border-custom focus:ring-custom sm:text-sm"
                  placeholder="Search orders..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <i className="fas fa-search text-gray-400" />
                </div>
              </div>
            </div>
            <Link to= "/inventory/ordercard">
            <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button">
              <i className="fas fa-plus mr-2" />
              Add order
            </button>
            </Link>
          </div>
          <div className="mb-4">
            <nav className="flex space-x-4" aria-label="Tabs">
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-custom border-b-2 border-custom"
              >
                All
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Upcoming
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Late
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                With shortage
              </a>
            </nav>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-custom focus:outline-none focus:ring-custom sm:text-sm">
                <option>Actions</option>
                <option>Delete</option>
                <option>Export</option>
              </select>
              <span className="ml-3 text-sm text-gray-500">
                0 orders selected
              </span>
            </div>
            <span className="text-sm text-gray-500">Showing 1-1 of 1</span>
          </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
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
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Pick up
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Return
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Payment status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          BT
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
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Picked up
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    27-12-2024 08:15
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    31-12-2024 14:30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    £250.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Partially paid
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="fixed bottom-4 right-4">
    <button className="w-12 h-12 rounded-full bg-custom text-white flex items-center justify-center shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button">
      <i className="fas fa-comments" />
    </button>
  </div>
    </div>
  )
}

export default OrderList



