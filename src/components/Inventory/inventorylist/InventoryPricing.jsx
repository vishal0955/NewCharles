import React from 'react'

const InventoryPricing = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="bg-white rounded-lg shadow">
    
      <div className="grid grid-cols-4 gap-8 p-8">
        <div className="col-span-3">
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg">
              <label className="flex items-center justify-between">
                <span className="font-medium text-gray-900">
                  Charge for all fields
                </span>
                <button
                  type="button"
                  className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                  role="switch"
                  aria-checked="true"
                >
                  <span
                    aria-hidden="true"
                    className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  />
                </button>
              </label>
              <p className="mt-1 text-sm text-gray-500">
                Enable this option to apply pricing settings to all fields.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Field pricing method
                </h3>
                <button className="text-custom hover:text-custom-dark text-sm font-medium">
                  <i className="fas fa-eye mr-1" />
                  Preview all fields pricing
                </button>
              </div>
              <div className="space-y-4">
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      type="radio"
                      name="pricing-method"
                      className="h-4 w-4 text-custom border-gray-300 focus:ring-custom"
                      defaultChecked=""
                    />
                  </div>
                  <div className="ml-3">
                    <label className="font-medium text-gray-900">
                      Flat fee
                    </label>
                    <p className="text-gray-500 text-sm">
                      Apply flat rate to all fields (for example: $50 per field
                      per day)
                    </p>
                  </div>
                </div>
                <div className="ml-7 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price
                    </label>
                    <div className="relative rounded-button">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="text"
                        className="block w-full rounded-button border-gray-300 pl-7 pr-12 focus:border-custom focus:ring-custom sm:text-sm"
                        placeholder={0.0}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Per
                    </label>
                    <select className="block w-full rounded-button border-gray-300 focus:border-custom focus:ring-custom sm:text-sm">
                      <option>Day</option>
                      <option>Week</option>
                      <option>Month</option>
                    </select>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      type="radio"
                      name="pricing-method"
                      className="h-4 w-4 text-custom border-gray-300 focus:ring-custom"
                    />
                  </div>
                  <div className="ml-3">
                    <label className="font-medium text-gray-900">
                      Fixed price
                    </label>
                    <p className="text-gray-500 text-sm">
                      Fixed price per field per order (for example: $50 per
                      field)
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      type="radio"
                      name="pricing-method"
                      className="h-4 w-4 text-custom border-gray-300 focus:ring-custom"
                    />
                  </div>
                  <div className="ml-3">
                    <label className="font-medium text-gray-900">
                      Pricing structure
                    </label>
                    <p className="text-gray-500 text-sm">
                      Tiered pricing for all fields (for example: $50 per field
                      for one day and $80 per field for two days)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Advanced field pricing rules
                </h3>
                <button className="text-custom hover:text-custom-dark text-sm font-medium">
                  Manage pricing rulesets
                </button>
              </div>
              <select className="block w-full rounded-button border-gray-300 focus:border-custom focus:ring-custom sm:text-sm">
                <option>No ruleset</option>
              </select>
              <p className="mt-2 text-sm text-gray-500">
                Rulesets are applied on top of your regular field pricing.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Barcode</h3>
            <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-barcode mr-2" />
              Add barcode
            </button>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Collections
            </h3>
            <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-plus mr-2" />
              Add to collections
            </button>
            <p className="mt-2 text-sm text-gray-500">
              This product is not added to any collections yet.
            </p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Notes</h3>
            <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-plus mr-2" />
              Add a new note
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InventoryPricing