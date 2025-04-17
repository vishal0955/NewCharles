import React from "react";
import { useSelector } from "react-redux";

const NewPurchaseOrder = () => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li>
            <a href="#" className="text-gray-600 hover:text-custom">
              Purchases overview
            </a>
          </li>
          <li className="flex items-center">
            <i className="fas fa-chevron-right text-gray-400 mx-2" />
            <a href="#" className="text-gray-600 hover:text-custom">
              Purchase Orders
            </a>
          </li>
        </ol>
      </nav>
      <h1 className="text-2xl font-semibold mb-8">New Purchase Order</h1>
      <div className={`${darkMode ? "card-dark" : "bg-gray-100" } bg-gray-50 rounded-lg shadow-sm p-6 border`}>
        <div className="flex justify-end mb-6">
          <button className="text-custom hover:text-custom-dark">
            <i className="far fa-clone mr-2" />
            Copy
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Supplier
            </label>
            <input
              type="text"
              placeholder="Enter supplier name..."
              className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Issue Date
            </label>
            <input
              type="date"
              defaultValue="2024-12-27"
              className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Expected Delivery Date
            </label>
            <input
              type="date"
              className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              PO Number
            </label>
            <input
              type="text"
              defaultValue="PO-13607"
              className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
              readOnly=""
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Supplier Reference
            </label>
            <input
              type="text"
              placeholder="Enter supplier reference..."
              className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Department
            </label>
            <select className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}>
              <option>XYZ Tech Group</option>
              <option>Finance</option>
              <option>Operations</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <select className={`${darkMode ? "card-dark" : "bg-white" } border rounded-button focus:border-custom focus:ring-custom`}>
            <option>GBP British Pound</option>
            <option>USD US Dollar</option>
            <option>EUR Euro</option>
          </select>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Amounts are</span>
            <select className={`${darkMode ? "card-dark" : "bg-white" } border rounded-button focus:border-custom focus:ring-custom`}>
              <option>Tax Inclusive</option>
              <option>Tax Exclusive</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Item Code
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Item Description
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Qty Ordered
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Unit Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Discount %
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Cost Center
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Tax Rate
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Line Total GBP
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">
                  <input
                    type="text"
                    placeholder="Enter item code..."
                    className={`${darkMode ? "card-dark" : "bg-white" } w-full border rounded-button focus:border-custom focus:ring-custom`}
                  />
                </td>
                <td className="px-4 py-3">
                  <textarea
                    className={`${darkMode ? "card-dark" : "bg-white" } w-full border rounded-button focus:border-custom focus:ring-custom`}
                    rows={1}
                    placeholder="Enter description..."
                    defaultValue={""}
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    step="0.01"
                    placeholder={0.0}
                    className={`${darkMode ? "card-dark" : "bg-white" }  w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    step="0.01"
                    placeholder={0.0}
                    className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
                  />
                </td>
                <td className="px-4 py-3">
                  <select className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}>
                    <option>Select cost center...</option>
                    <option>General Expenses</option>
                    <option>IT Equipment</option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  <select className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}>
                    <option>20% VAT</option>
                    <option>0% VAT</option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    step="0.01"
                    defaultValue={0.0}
                    className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
                    readOnly=""
                  />
                </td>
                <td className="px-4 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <i className="fas fa-times" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mb-8">
          <button className="text-custom hover:text-custom-dark !rounded-button">
            <i className="fas fa-plus mr-2" />
            Add a new line
          </button>
          <div className="text-right">
            <div className="mb-2">
              <span>Subtotal:</span>
              <span> 0.00</span>
            </div>
            <div className="text-lg font-medium">
              <span>Total:</span>
              <span> 0.00</span>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <button className="flex items-center text-custom hover:text-custom-dark mb-4">
            <i className="fas fa-chevron-down mr-2" />
            Delivery Address
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Shipping Address
                </label>
                <div>
                  <p>XYZ Technology Group Ltd</p>
                  <p>Ground Floor, Unit 1</p>
                  <p>Prisma Park</p>
                  <p>Berrington Way</p>
                  <p>Basingstoke</p>
                  <p>Hampshire</p>
                  <p>RG24 8GT</p>
                  <p>United Kingdom</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  defaultValue="Accounts Team"
                  className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  defaultValue="+44 333 344 3201"
                  className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Special Instructions
                </label>
                <textarea
                  className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-button focus:border-custom focus:ring-custom border`}
                  rows={4}
                  maxLength={500}
                  placeholder="Enter any special delivery instructions..."
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-x-4">
            <button className={`${darkMode ? "card-dark" : "bg-white" } bg-custom rounded px-4 py-2 !rounded-button hover:bg-custom-dark border`}>
              Save
            </button>
            <button className="bg-green-500 text-white px-4 py-2 !rounded-button hover:bg-green-600">
              Approve
            </button>
          </div>
          <button className={`${darkMode ? "card-dark" : "bg-white" } px-4 py-2 !rounded-button rounded border`}>
            Cancel
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">
          History &amp; Notes
        </h2>
        <button className={`${darkMode ? "card-dark" : "bg-white" }text-custom hover:text-custom-dark !rounded-button`}>
          <i className="fas fa-plus mr-2" />
          Add a note
        </button>
      </div>
    </div>
  );
};

export default NewPurchaseOrder;
