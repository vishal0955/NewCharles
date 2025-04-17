import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Expense = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const darkMode = useSelector((state) => (state.theme.isDarkMode))

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="flex items-center justify-between h-16 border-b border-gray-200">
      <div className="flex items-center space-x-8">
        <h1 className="text-xl font-semibold">Expenses</h1>
        <div className="flex space-x-1">
          <button className="px-4 py-2 text-custom border-b-2 border-custom">
            Your own
          </button>
          <button className="px-4 py-2 text-gray-500">
            To review <span className="text-gray-400">0</span>
          </button>
          <button className="px-4 py-2 text-gray-500">
            To pay <span className="text-gray-400">6</span>
          </button>
          <button className="px-4 py-2 text-gray-500">All</button>
          <button className="px-4 py-2 text-gray-500">Explorer</button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative dropdown">
          <button onClick={toggleDropdown} className="!rounded-button bg-green-600 hover:bg-green-700 text-white px-4 py-2 flex items-center">
            New expense
            <i className="fas fa-chevron-down ml-2" />
          </button>
          {
            dropdownOpen &&  (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
            <ul className="py-2">
              <li>
                <Link to="/finance/newexpenseclaim"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <i className="fas fa-file-invoice text-gray-400" /> Expense
                  claim
                </Link>
              </li>
              <li>
                <Link to="/finance/newmileageclaim"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <i className="fas fa-truck text-gray-400" /> Mileage claim
                </Link>
              </li>
            </ul>
          </div>)
          }
        
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <i className="fas fa-cog text-xl" />
        </button>
      </div>
    </nav>
    <div className="mt-8 max-w-6xl mx-auto mb-4">
      <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border shadow-sm p-6 relative mb-8`}>
        <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          <i className="fas fa-times" />
        </button>
        <div className="flex justify-between items-start">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">
              Capture expenses paid with company money
            </h2>
            <p className="mb-6">
              Employees can submit non-reimbursable expense claims when they've
              been assigned company bank accounts. Simply edit their expense
              settings and assign relevant bank accounts.
            </p>
            <div className="flex items-center space-x-4">
              <button className="!rounded-button bg-custom px-4 py-2">
                Go to settings
              </button>
              <a
                href="#"
                className="text-custom hover:text-blue-600 flex items-center"
              >
                Learn more about expenses paid with company money
                <i className="fas fa-external-link-alt ml-2" />
              </a>
            </div>
          </div>
          <img
            src="https://creatie.ai/ai/api/search-image?query=A 3D vector-style image with a clean background showing two cartoon characters pulling a rope, representing teamwork and collaboration in a playful style&width=300&height=200&orientation=landscape&removebg=true&flag=62bf5e5b-42bd-4c5f-a1ba-fe19628dbef1"
            className="w-64"
            alt="Teamwork illustration"
          />
        </div>
      </div>
      <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border shadow-sm p-8 text-center`}>
        <img
          src="https://creatie.ai/ai/api/search-image?query=A 3D vector-style illustration of two hands holding a document or receipt with a simple clean background, using orange as the primary color&width=200&height=200&orientation=squarish&removebg=true&flag=9d004963-0c7f-4e80-a801-d7a06643ada3"
          className="mx-auto w-32 mb-6"
          alt="Document illustration"
        />
        <h2 className="text-2xl font-semibold mb-4">
          Submit your first expense
        </h2>
        <p className="text-gray-600 mb-8">
          Purchased anything for your business that needs to be paid back?
        </p>
        <div className="max-w-md mx-auto">
          <h3 className="text-lg font-medium mb-4">
            Download the  app and manage expense claims on the go
          </h3>
          <p className="text-gray-600 mb-6">
            Capture your costs as they happen by snapping and submitting your
            expenses and mileage claims anytime, anywhere.
          </p>
          <p className="mb-4">Scan the QR code to download App</p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
            className="mx-auto w-48 h-48 bg-gray-200 mb-4"
            alt="QR Code"
          />
          <p className="text-gray-600 mb-4">Or click on the app store link</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="!rounded-button">
              <img
                src="https://ai-public.creatie.ai/gen_page/app-store-badge.png"
                className="h-10"
                alt="Download on App Store"
              />
            </a>
            <a href="#" className="!rounded-button">
              <img
                src="https://ai-public.creatie.ai/gen_page/google-play-badge.png"
                className="h-10"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Expense


