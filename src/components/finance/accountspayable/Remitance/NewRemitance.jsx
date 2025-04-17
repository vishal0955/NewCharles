import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const NewRemitance = () => {

  const darkMode = useSelector((state) => (state.theme.isDarkMode))
  
  return (
    <div className="max-w-8xl mx-auto p-6">
    <nav className="text-sm mb-4">
      <Link to="/finance/remittance" className="text-custom hover:text-custom/80">
        Remittance slips
      </Link>
      <span className="mx-2 text-gray-400">&gt;</span>
      <a href="#" className="text-custom hover:text-custom/80">
        New slip
      </a>
    </nav>
    <h1 className="text-2xl font-semibold mb-6">
      New Remittance Slip
    </h1>
    <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg shadow-sm border border-gray-200 p-6`}>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">
            Payment To
          </label>
          <input
            type="text"
            className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Date
          </label>
          <select className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}>
            <option>27 Dec 2024</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Due Date
          </label>
          <select className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}>
            <option>26 Jan 2025</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Reference
          </label>
          <input
            type="text"
            className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}
          />
        </div>
      </div>
      <div className="flex justify-between mb-6">
        <select className={`${darkMode ? "card-dark" : "bg-white" } border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}>
          <option>GBP British Pound</option>
        </select>
        <div className="flex items-center gap-2">
          <span className="text-sm">Amounts are</span>
          <select className={`${darkMode ? "card-dark" : "bg-white" } border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}>
            <option>Tax Inclusive</option>
          </select>
        </div>
      </div>
      <table className="w-full mb-6">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-sm font-medium">
              Payment Description
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium">
              Reference Number
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium">
              Bank Account
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium">
              Payment Amount
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium">
              Account
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium">
              Tax Rate
            </th>
            <th className="text-right py-3 px-4 text-sm font-medium">
              Amount GBP
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">
              <input
                type="text"
                className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}
              />
            </td>
            <td className="py-3 px-4">
              <input
                type="text"
                className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}
              />
            </td>
            <td className="py-3 px-4">
              <input
                type="text"
                className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}
              />
            </td>
            <td className="py-3 px-4">
              <input
                type="text"
                className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}
              />
            </td>
            <td className="py-3 px-4">
              <input
                type="text"
                className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}
              />
            </td>
            <td className="py-3 px-4">
              <input
                type="text"
                className={`${darkMode ? "card-dark" : "bg-white" } w-full border-gray-300 rounded-md shadow-sm focus:border-custom focus:ring-custom`}
              />
            </td>
            <td className="py-3 px-4 text-right">0.00</td>
            <td className="py-3 px-4">
              <button className="text-gray-400 hover:text-gray-600">
                <i className="fas fa-times" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-4 mb-8">
        <button className={`${darkMode ? "card-dark" : "bg-white" } !rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom`}>
          Add Payment Line
        </button>
        <button className={`${darkMode ? "card-dark" : "bg-white" } !rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50`}>
          Assign expenses to a customer or project
        </button>
      </div>
      <div className="flex justify-end mb-6">
        <div className="w-64">
          <div className="flex justify-between mb-2">
            <span className="text-sm">Subtotal</span>
            <span className="text-sm font-medium">0.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm">VAT</span>
            <span className="text-sm font-medium">0.00</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-200">
            <span className="text-base font-semibold">TOTAL</span>
            <span className="text-base font-semibold">0.00</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="!rounded-button inline-flex items-center px-4 py-2 bg-custom border border-transparent text-sm font-medium rounded-md text-white hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
          Submit Remittance
        </button>
        <div className="flex gap-4">
          <button className="!rounded-button inline-flex items-center px-4 py-2 bg-green-500 border border-transparent text-sm font-medium rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Process Payment
          </button>
          <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div className="mt-8">
      <h2 className="text-lg font-medium mb-4">
        History &amp; Notes
      </h2>
      <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
        Add Note
      </button>
    </div>
  </div>
  )
}

export default NewRemitance


