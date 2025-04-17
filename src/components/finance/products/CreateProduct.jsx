import React from "react";
import { useSelector } from "react-redux";

const CreateProduct = () => {

  const darkMode = useSelector((state) => (state.theme.isDarkMode))
  
  return (
    <div className="min-h-screen">
      <header className={`${darkMode ? "card-dark" : "bg-white" }  bg-white border-b border-gray-200`}>
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between h-auto md:h-16">
            {/* Left Section */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="flex items-center"
              >
                <i className="fas fa-arrow-left" />
                <span className="ml-2">Companies</span>
              </a>
              <h1 className="text-lg font-semibold">Product Overview</h1>
            </div>

            {/* Right Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <button className={`${darkMode ? "card-dark" : "bg-white" }  !rounded-button rounded my-3 px-4 py-2 text-gray-700 bg-white border border-gray-200 w-full sm:w-auto`}>
                Actions <i className="fas fa-chevron-down ml-2" />
              </button>
              <button className={`${darkMode ? "card-dark" : "bg-white" }  !rounded-button rounded my-3 px-4 py-2 text-gray-700 bg-white border border-gray-200 w-full sm:w-auto flex items-center justify-center`}>
                <i className="fas fa-cog" />
                <span className="ml-2">Customize record</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-8xl mx-auto px-4 py-6">
        <div className=" row ">
          <main className="col-md-9 flex-1">
            <div className={`${darkMode ? "card-dark" : "bg-white" }  bg-white rounded-lg shadow mb-6`}>
              <div className="border-b border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2 text-center">
                  <button className="!rounded-button w-full px-4 py-2 flex justify-center items-center">
                    <i className="fas fa-plus" />
                    <span className="ml-2">Add Product</span>
                  </button>
                  <button className="!rounded-button w-full px-4 py-2 flex justify-center items-center">
                    <i className="fas fa-edit" />
                    <span className="ml-2">Edit</span>
                  </button>
                  <button className="!rounded-button w-full px-4 py-2 flex justify-center items-center">
                    <i className="fas fa-trash" />
                    <span className="ml-2">Delete</span>
                  </button>
                  <button className="!rounded-button w-full px-4 py-2 flex justify-center items-center">
                    <i className="fas fa-download" />
                    <span className="ml-2">Export</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <nav className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium"
                  >
                    Details
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium"
                  >
                    Inventory
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium"
                  >
                    Analytics
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium"
                  >
                    Reviews
                  </a>
                </nav>
                <div className="space-y-6">
                  <section>
                    <h3 className="text-lg font-medium mb-4">
                      Product Details
                    </h3>
                    <textarea
                      className={`${darkMode ? "card-dark" : "bg-white" }  w-full p-3 border border-gray-300 rounded-md`}
                      rows={4}
                      placeholder="Add product description here..."
                      defaultValue={""}
                    />
                  </section>
                  <section>
                    <h3 className="text-lg font-medium mb-4">
                      Product Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm">Product Status</p>
                        <p className="mt-1">In Stock</p>
                      </div>
                      <div>
                        <p className="text-sm">Category</p>
                        <p className="mt-1">Electronics</p>
                      </div>
                    </div>
                  </section>
                  <section>
                    <h3 className="text-lg font-medium mb-4">
                      Product Research
                    </h3>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                      <button className="w-full rounded sm:w-auto !rounded-button flex items-center px-4 py-2 border border-gray-300">
                        <i className="fas fa-chart-line mr-2" />
                        Market Analysis
                      </button>
                      <button className="w-full rounded sm:w-auto !rounded-button flex items-center px-4 py-2 border border-gray-300">
                        <i className="fas fa-tags mr-2" />
                        Price History
                      </button>
                      <button className="w-full rounded sm:w-auto !rounded-button flex items-center px-4 py-2 border border-gray-300">
                        <i className="fas fa-boxes mr-2" />
                        Similar Products
                      </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-medium mb-4">
                      Sales Analytics
                    </h3>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                      <select className={`${darkMode ? "card-dark" : "bg-white" } !rounded-button rounded border border-gray-300 px-4 py-2`}>
                        <option>Delivery Performance</option>
                        <option>Monthly Orders</option>
                        <option>Quality Metrics</option>
                      </select>
                      <select className={`${darkMode ? "card-dark" : "bg-white" } !rounded-button rounded border border-gray-300 px-4 py-2`}>
                        <option>All data</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                      </select>
                    </div>
                    <div className={`${darkMode ? "card-dark" : "bg-white" }  h-64 mt-4 bg-gray-50 rounded-lg border border-gray-200 mt-2`} />
                  </section>
                </div>
              </div>
            </div>
          </main>
          <aside className="col-md-3 ">
            <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg shadow`}>
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-medium">Product Summary</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>SKU</span>
                    <span>PRD-001</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Price</span>
                    <span>$99.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Stock</span>
                    <span>150 units</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sales</span>
                    <span>1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rating</span>
                    <span>4.5/5</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span>Performance</span>
                      <span className="text-green-500">High</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Demand</span>
                      <span className="text-green-500">Strong</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
