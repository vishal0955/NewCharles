import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InventoryAddProduct from './InventoryAddProduct';

const InventoryList = () => {
    const navigate = useNavigate();
      
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    
      const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove("modal-open"); // Remove modal-open class
      };

  return (
    <>
        <div className="min-h-screen flex flex-col">
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Inventory - Inventory List
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <i className="fas fa-question-circle" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <i className="fas fa-cog" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 relative">
              <i className="fas fa-bell" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
            </button>
            <div className="relative">
              <button className="flex items-center space-x-2 text-sm text-gray-700">
                <span>BMWT Technology Group Ltd</span>
                <i className="fas fa-chevron-down" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main className="flex-1 max-w-8xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex space-x-8">
        <div className="w-64 flex-shrink-0">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product type
              </label>
              <select className="mt-1 block w-full !rounded-button border-gray-300 text-sm">
                <option>All Products</option>
                <option>Physical Products</option>
                <option>Digital Products</option>
                <option>Services</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Template structure
              </label>
              <select className="mt-1 block w-full !rounded-button border-gray-300 text-sm">
                <option>All Templates</option>
                <option>Basic Template</option>
                <option>Advanced Template</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price ruleset
              </label>
              <select className="mt-1 block w-full !rounded-button border-gray-300 text-sm">
                <option>All Rules</option>
                <option>Standard Pricing</option>
                <option>Discount Rules</option>
              </select>
            </div>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center px-4 py-2 !rounded-button border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <i className="fas fa-file-import mr-2" />
                Import
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 !rounded-button border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <i className="fas fa-file-export mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full !rounded-button border-gray-300 pl-10 pr-3 py-2 text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400" />
              </div>
            </div>
            <button className="ml-4 inline-flex items-center px-4 py-2 !rounded-button bg-blue-600 text-white text-sm font-medium hover:bg-blue-600" onClick={handleOpenModal}>
              <i className="fas fa-plus mr-2" />
              Add product
            </button>
          </div>
          <div className="bg-white shadow !rounded-button overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                <a
                  href="#"
                  className="border-b-2 border-custom px-6 py-3 text-sm font-medium text-custom"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="border-b-2 border-transparent px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  Bundles
                </a>
                <a
                  href="#"
                  className="border-b-2 border-transparent px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  Collections
                </a>
              </nav>
            </div>
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <select className="!rounded-button border-gray-300 text-sm mr-4">
                  <option>Actions</option>
                  <option>Delete</option>
                  <option>Archive</option>
                </select>
                <span className="text-sm text-gray-600">
                  0 products selected
                </span>
                <button className="ml-4 text-sm text-custom font-medium">
                  Select all 1 product
                </button>
              </div>
              <span className="text-sm text-gray-600">Showing 1 - 1 of 1</span>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input
                      type="checkbox"
                      className="!rounded-button border-gray-300 text-custom focus:ring-custom"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Online store
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Stock Keeping Unit (SKU)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="!rounded-button border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center cursor-pointer" onClick={()=>navigate("/inventory/itemcard")}>
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-lg object-cover"
                          src="https://creatie.ai/ai/api/search-image?query=A professional product photo of a sleek modern computer accessory against a clean white background, with soft shadows and high-end finish, showcasing premium quality and attention to detail&width=40&height=40&orientation=squarish&flag=7e4e2bf4-0fd2-4d15-bb7b-681c5a5d1b99"
                          alt=""
                        />
                      </div>
                      <div className="ml-4" >
                        <div className="text-sm font-medium text-gray-900">
                          Cp3
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Rental product</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 !rounded-button text-xs font-medium bg-green-100 text-green-800">
                      Visible
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    CP3
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
        {/* Modal for Add Customer */}
        {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Product</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <InventoryAddProduct />
                </div>
              </div>
            </div>
          </div>
          {/* Modal backdrop */}
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  )
}

export default InventoryList



