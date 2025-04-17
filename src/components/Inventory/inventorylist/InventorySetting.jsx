import React from 'react'

const InventorySetting = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* <header className="py-6">
      <div className="flex items-center justify-between">
        <div>
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">
              Products
            </a>
            <i className="fas fa-chevron-right text-xs mx-2" />
            <span className="text-gray-900">Nike Air Max 2024</span>
          </nav>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900">
            Inventory - Product Settings
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <i className="fas fa-copy mr-2" />
            Duplicate
          </button>
          <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <i className="fas fa-tag mr-2" />
            Tags
          </button>
        </div>
      </div>
      <nav className="mt-6">
        <div className="border-b border-gray-200">
          <div className="-mb-px flex space-x-8">
            <a
              href="#"
              className="border-b-2 border-custom py-4 px-1 text-sm font-medium text-custom"
            >
              Settings
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Inventory
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Variations
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Pricing
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Online Store
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              History
            </a>
          </div>
        </div>
      </nav>
    </header> */}
    <main className="py-6">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              General Information
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom"
                  defaultValue="Nike Air Max 2024"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SKU
                </label>
                <input
                  type="text"
                  className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom"
                  defaultValue="NKE-AM24-001"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom"
                  placeholder="Enter product description..."
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Images</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A professional product photography of a modern athletic shoe with sleek design, positioned against a clean white background, showcasing premium materials and innovative features&width=200&height=200&orientation=squarish&flag=3ed6d50b-c6bf-4adb-860c-72e0126e9523"
                  className="w-48 h-48 object-cover rounded-lg"
                  alt="Product"
                />
              </div>
              <div className="space-x-4">
                <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <i className="fas fa-upload mr-2" />
                  Upload
                </button>
                <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <i className="fas fa-search mr-2" />
                  Find Online
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Barcode</h3>
            <button className="!rounded-button w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-barcode mr-2" />
              Add barcode
            </button>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Collections
            </h3>
            <button className="!rounded-button w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-folder-plus mr-2" />
              Add to collections
            </button>
            <p className="mt-4 text-sm text-gray-500">
              This product is not added to any collections yet.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Notes</h3>
            <button className="!rounded-button w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-plus mr-2" />
              Add a new note
            </button>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Availability Settings
            </h3>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="!rounded-button w-4 h-4 text-custom border-gray-300 focus:ring-custom"
                />
                <span className="ml-3 text-sm text-gray-700">
                  Allow shortage
                </span>
              </label>
              <p className="text-sm text-gray-500">
                Receive orders for customers, even when items are temporarily
                unavailable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default InventorySetting