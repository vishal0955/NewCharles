import React, { useState } from "react";
import AddCostomerForm from "./AddCostomerForm";

const CustomerList = () => {
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
              <h1 className="text-xl font-semibold text-gray-900">
                Inventory - Customers List
              </h1>
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-cog text-lg" />
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-bell text-lg" />
                </button>
                <div className="flex items-center">
                  <span className="bg-gray-200 text-sm px-3 py-1 rounded-md">
                    XYz Technology Group Ltd
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-lg font-medium text-gray-900">Customers</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom"
                />
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <button
              className="ml-4 inline-flex items-center px-4 py-2 !rounded-button bg-blue-600 text-white text-sm font-medium hover:bg-blue-600"
              onClick={handleOpenModal}>
              <i className="fas fa-plus" />
              <span>Add customer</span>
            </button>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="!rounded-button border border-gray-300 px-4 py-2 text-sm flex items-center space-x-2">
                    <i className="fas fa-file-import" />
                    <span>Import</span>
                  </button>
                  <button className="!rounded-button border border-gray-300 px-4 py-2 text-sm flex items-center space-x-2">
                    <i className="fas fa-file-export" />
                    <span>Export</span>
                  </button>
                  <button className="!rounded-button border border-gray-300 px-4 py-2 text-sm flex items-center space-x-2">
                    <span>Actions</span>
                    <i className="fas fa-chevron-down text-xs" />
                  </button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>0 customers selected</span>
                  <button className="text-custom hover:underline">
                    Select all 1 customer
                  </button>
                </div>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    #1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            BTS
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          BTS llg
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    info@xyz.global
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">1</span> of{" "}
                <span className="font-medium">1</span> results
              </div>
            </div>
          </div>
        </main>
        <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-custom text-white shadow-lg flex items-center justify-center">
          <i className="fas fa-plus text-lg" />
        </button>
      </div>
      {/* Modal for Add Customer */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Customer</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <AddCostomerForm />
                </div>
              </div>
            </div>
          </div>
          {/* Modal backdrop */}
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
};

export default CustomerList;
