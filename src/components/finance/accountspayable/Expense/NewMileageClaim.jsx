import React from "react";
import { useSelector } from "react-redux";

const NewMileageClaim = () => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
      <div
        className={`${
          darkMode ? "card-dark" : null
        } top-0 left-0 right-0 bg-white border-b border-gray-200 z-50`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times text-lg" />
              </button>
              <h1 className="ml-4 text-lg font-medium">New mileage claim</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-sm border border-gray-300 !rounded-button">
                Save draft
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 !rounded-button">
                Submit
              </button>
              <button className="px-4 py-2 text-sm text-white bg-custom !rounded-button hover:bg-custom/90">
                Approve
              </button>
              <div className="relative dropdown">
                <button className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-ellipsis-v" />
                </button>
                <div
                  className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10 hidden"
                  id="actions-dropdown"
                >
                  <ul className="py-2">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      >
                        <i className="fas fa-copy text-gray-400" /> Duplicate
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      >
                        <i className="fas fa-trash text-gray-400" /> Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm">
            X-PAY
          </div>
          <div className="ml-3 flex items-center">
            <span className="text-sm font-medium">John Doe (You)</span>
            <i className="fas fa-chevron-down ml-2 text-gray-500 text-xs" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className={`${
              darkMode ? "card-dark" : null
            }bg-white border border-gray-200 rounded-lg p-8`}
          >
            <div className="h-96 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-gray-400 mb-3">
                <i className="fas fa-road text-4xl" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Upload a map screenshot or route details (optional)
              </p>
              <button className="px-4 py-2 text-sm text-custom border border-custom !rounded-button hover:bg-gray-50">
                Upload
              </button>
            </div>
          </div>
          <div
            className={`${
              darkMode ? "card-dark" : null
            } space-y-6 p-3 rounded`}
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                Trip Description
              </label>
              <div className="relative">
                <textarea
                  className={`${darkMode ? "card-dark" : null } w-full h-24 border`}
                  placeholder="Describe the purpose of your trip"
                  defaultValue={""}
                />
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  0/1000
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Distance Traveled
              </label>
              <div className="flex">
                <input type="number" className={`${darkMode ? "card-dark" : null } flex-1 border`} placeholder={0.0} />
                <select className={`${darkMode ? "card-dark" : null } !rounded-l-none border-l-0 w-24 bg-white border`}>
                  <option>Miles</option>
                  <option>Kilometers</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Vehicle Type
              </label>
              <select className={`${darkMode ? "card-dark" : null } w-full bg-white border`}>
                <option>Select vehicle type</option>
                <option>Car</option>
                <option>Motorcycle</option>
                <option>Bicycle</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Mileage Rate
              </label>
              <div className="flex">
                <input
                  type="number"
                  className={`${darkMode ? "card-dark" : null } flex-1 border`}
                  placeholder={0.0}
                  defaultValue="0.45"
                />
                <select className={`${darkMode ? "card-dark" : null } !rounded-l-none border-l-0 w-24 bg-white border`}>
                  <option>GBP per mile</option>
                  <option>GBP per kilometer</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Date of Travel
              </label>
              <input type="date" className={`${darkMode ? "card-dark" : null } w-full border`} defaultValue="2024-12-27" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Account</label>
              <select className={`${darkMode ? "card-dark" : null } w-full border`}>
                <option>Select account</option>
              </select>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Optional</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Assign to project or customer
                  </label>
                  <input type="text" className={`${darkMode ? "card-dark" : null } w-full border`} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Label
                  </label>
                  <input type="text" className={`${darkMode ? "card-dark" : null } w-full border`} />
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center font-medium">
                <span>Total Claim Amount</span>
                <span>GBP 0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMileageClaim;
