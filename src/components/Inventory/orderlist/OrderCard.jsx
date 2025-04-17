import React from 'react'

const OrderCard = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold text-gray-900">
        Inventory - Orders Card
      </h1>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-question-circle" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-cog" />
        </button>
        <div className="relative">
          <button className="flex items-center text-gray-700 hover:text-gray-900">
            <span className="mr-2">
              Technology Group Ltd - All Business Units
            </span>
            <i className="fas fa-chevron-down" />
          </button>
        </div>
      </div>
    </header>
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-medium">Orders</h2>
            <span className="text-gray-500">#1</span>
            <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
              Picked up
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-undo mr-2" />
              Return
            </button>
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-custom/90">
              <i className="fas fa-envelope mr-2" />
              Send email
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Customer
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://i.ibb.co/dJ68VsWW/image.png"
                    alt="BTS Big"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium">BTS Big</h4>
                  <p className="text-sm text-gray-500">info@btsbig.global</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Rental period
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Pick up
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      defaultValue="27-12-2024 08:15"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom sm:text-sm"
                      readOnly=""
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Return
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      defaultValue="31-12-2024 14:30"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom sm:text-sm"
                      readOnly=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-700">
                  Information
                </h3>
                <button className="text-custom hover:text-custom/90 text-sm font-medium">
                  Add field
                </button>
              </div>
              <p className="text-sm text-gray-500" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Order Notes:</span>
                  <span className="text-sm text-gray-900">
                    Customer requested early pickup
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">
                    Special Requirements:
                  </span>
                  <span className="text-sm text-gray-900">
                    Handle with care
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">
                    Contact Preference:
                  </span>
                  <span className="text-sm text-gray-900">Email only</span>
                </div>
              </div>
              <p />
              <button className="mt-4 text-custom hover:text-custom/90 text-sm font-medium">
                Set up custom fields
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="mt-4 bg-gray 50 rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Additional Fields
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Order Type
                </label>
                <input
                  type="text"
                  defaultValue="Standard Rental"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Payment Status
                </label>
                <input
                  type="text"
                  defaultValue="Paid"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Delivery Method
                </label>
                <input
                  type="text"
                  defaultValue="Self Pickup"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Insurance
                </label>
                <input
                  type="text"
                  defaultValue="Basic Coverage"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search to add products"
                className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-custom focus:ring-custom sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400" />
              </div>
            </div>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Available
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Charge
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center group cursor-pointer">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-md"
                        src="https://creatie.ai/ai/api/search-image?query=A professional camera equipment on a clean white background, showing high-end technology and precision engineering&width=40&height=40&orientation=squarish&flag=8ac89890-8d32-4fa7-8535-2fa159e1837f&flag=ccf9e38b-1bd6-4fd2-a9aa-5f34e7aaacf3&flag=25bd885c-3cdf-43fa-8bf6-05849f52ea3c&flag=0846107c-a7c6-4da5-9f53-de8170770be6"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        CP3
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Picked up
                      </span>
                    </div>
                    <div className="hidden group-hover:flex absolute bg-white shadow-lg rounded-lg p-4 z-10">
                      <img
                        className="w-64 h-64 object-cover rounded-lg"
                        src="https://creatie.ai/ai/api/search-image?query=A professional camera equipment on a clean white background, showing high-end technology and precision engineering&width=256&height=256&orientation=squarish&flag=1c19a0f9-efa6-4847-b8aa-894b9eec9b59&flag=d4d4ad69-8a2f-4c99-b1d9-af33e71d3826"
                      />
                      <div className="mt-2">
                        <h3 className="font-medium">CP3</h3>
                        <p className="text-sm text-gray-500">
                          Professional Camera Equipment
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    2 left
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button className="!rounded-button text-gray-500 hover:text-gray-700">
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      type="text"
                      defaultValue={1}
                      className="block w-16 text-center rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom sm:text-sm"
                    />
                    <button className="!rounded-button text-gray-500 hover:text-gray-700">
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">5 days</div>
                  <div className="text-sm text-gray-500">€250.00</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  €250.00
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center group cursor-pointer">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-md"
                        src="https://creatie.ai/ai/api/search-image?query=Professional+lens+equipment&width=40&height=40&orientation=squarish&flag=7b630faf-9e0d-466d-8b45-1c9430ea5145&flag=e62f1b9e-cd5c-4aee-8506-a6ffd66d7e7d&flag=9dfebf2f-a15f-4d0e-bac2-de7f51dfcadb"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        HD Lens Kit
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Picked up
                      </span>
                    </div>
                    <div className="hidden group-hover:flex absolute bg-white shadow-lg rounded-lg p-4 z-10">
                      <img
                        className="w-64 h-64 object-cover rounded-lg"
                        src="https://creatie.ai/ai/api/search-image?query=Professional+lens+equipment&width=256&height=256&orientation=squarish&flag=ba2ebbfc-4212-4b0c-aa5d-2b44a1767a91&flag=c8d4c8a2-1030-4260-9ca6-53116bc3dd6c"
                      />
                      <div className="mt-2">
                        <h3 className="font-medium">HD Lens Kit</h3>
                        <p className="text-sm text-gray-500">
                          Professional Lens Equipment
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    4 left
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button className="!rounded-button text-gray-500 hover:text-gray-700">
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      type="text"
                      defaultValue={1}
                      className="block w-16 text-center rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom sm:text-sm"
                    />
                    <button className="!rounded-button text-gray-500 hover:text-gray-700">
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">5 days</div>
                  <div className="text-sm text-gray-500">€180.00</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  €180.00
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Add custom line
            </button>
            <div className="text-right">
              <p className="text-sm text-gray-700">Subtotal (2 items)</p>
              <p className="text-lg font-medium text-gray-900">€430.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OrderCard
