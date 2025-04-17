import React from 'react'

const ItemCardVariation = () => {
  return (
<> 
<div className="min-h-screen flex flex-col">
    {/* <header className="bg-white border-b border-gray-200">
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between items-center px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="text-sm text-gray-600">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li>
                    <a href="#" className="hover:text-custom">
                      Products
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-400">/</span>
                  </li>
                  <li className="text-gray-900">CP3</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-copy mr-2" />
              Duplicate product
            </button>
            <button className="!rounded-button p-2 text-gray-400 hover:text-gray-500">
              <i className="fas fa-expand" />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-4" aria-label="Tabs">
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Inventory
            </a>
            <a
              href="#"
              className="border-custom text-custom whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              aria-current="page"
            >
              Variations
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Pricing
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Settings
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Online store
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              History
            </a>
          </nav>
        </div>
      </div>
    </header> */}
    <main className="flex-1 max-w-8xl w-full mx-auto">
      <div className="flex min-h-0 flex-1">
        <div className="w-full md:w-3/4 bg-white p-6">
          <div className="max-w-3xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Variations
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Enable variations if the product comes in different options,
                  like sizes or colors.
                </p>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="!rounded-button bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-custom focus:ring-offset-2"
                  role="switch"
                  aria-checked="false"
                >
                  <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                </button>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  Enable variations
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/4 border-l border-gray-200">
          <div className="px-4 py-6 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Barcode</h3>
                <button className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-chevron-up" />
                </button>
              </div>
              <div className="mt-4">
                <button className="!rounded-button w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <i className="fas fa-barcode mr-2" />
                  Add barcode
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  Collections
                </h3>
                <button className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-chevron-up" />
                </button>
              </div>
              <div className="mt-4">
                <button className="!rounded-button w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <i className="fas fa-folder-plus mr-2" />
                  Add to collections
                </button>
                <p className="mt-2 text-sm text-gray-500">
                  This product is not added to any collections yet.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Notes</h3>
                <button className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-chevron-up" />
                </button>
              </div>
              <div className="mt-4">
                <button className="!rounded-button w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <i className="fas fa-plus mr-2" />
                  Add a new note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <div className="fixed bottom-4 right-4">
    <button className="!rounded-button h-14 w-14 flex items-center justify-center text-white bg-custom hover:bg-custom/90 rounded-full shadow-lg">
      <i className="fas fa-comment-dots text-xl" />
    </button>
  </div>
</>
  )
}

export default ItemCardVariation
