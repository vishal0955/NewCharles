import React from "react";
import { useSelector } from "react-redux";

const NewExpenseClaim = () => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
      <div
        className={`${
          darkMode ? "card-dark" : "bg-white"
        } top-0 left-0 right-0 bg-white border-b border-gray-200 z-50`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times text-lg" />
              </button>
              <h1 className="ml-4 text-lg font-medium">New expense claim</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-sm border border-gray-300 !rounded-button">
                Save draft
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 !rounded-button">
                Submit
              </button>
              <button className="px-4 py-2 text-sm text-white bg-custom !rounded-button">
                Approve
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-ellipsis-v" />
              </button>
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
              darkMode ? "card-dark" : "bg-white"
            } bg-white border border-gray-200 rounded-lg p-8`}
          >
            <div className="h-96 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-gray-400 mb-3">
                <i className="far fa-receipt text-4xl" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Drag &amp; drop here, or select your file manually
              </p>
              <button className="px-4 py-2 text-sm text-custom border border-custom !rounded-button hover:bg-gray-50">
                Upload
              </button>
            </div>
          </div>
          <div className={`${darkMode ? "card-dark" : "bg-white" } space-y-6 p-3 rounded`}>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Purchase amount</label>
                <span className="text-sm text-custom">Itemise</span>
              </div>
              <div className="flex">
                <select className={`${darkMode ? "card-dark" : "bg-white" } !rounded-r-none border-r-0 w-24`}>
                  <option>GBP</option>
                </select>
                <input
                  type="text"
                  className={`${darkMode ? "card-dark" : "bg-white" } flex-1 !rounded-l-none`}
                  placeholder={0.0}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <div className="relative">
                <textarea
                  className={`${darkMode ? "card-dark" : "bg-white" } w-full h-24`}
                  placeholder="What was it for?"
                  defaultValue={""}
                />
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  0/1000
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                How did you pay?
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="text-custom"
                    defaultChecked=""
                  />
                  <span className="ml-3 text-sm">
                    Company money (non-reimbursable)
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" className="text-custom" />
                  <span className="ml-3 text-sm">
                    Personal money (reimbursable)
                  </span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Company bank account
              </label>
              <select className={`${darkMode ? "card-dark" : "bg-white" } w-full`}>
                <option>XYZ Consultants Ltd</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Spent at</label>
              <select className={`${darkMode ? "card-dark" : "bg-white" }  w-full bg-white`}>
                <option>Select contact</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Spent on</label>
              <input type="date" className={`${darkMode ? "card-dark" : "bg-white" } w-full`} defaultValue="2024-12-27" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Account</label>
              <select className={`${darkMode ? "card-dark" : "bg-white" }  w-full bg-white`}>
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
                  <input type="text" className={`${darkMode ? "card-dark" : "bg-white" } w-full`} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Label
                  </label>
                  <input type="text" className={`${darkMode ? "card-dark" : "bg-white" } w-full`} />
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Subtotal</span>
                  <button className="ml-2 text-custom text-sm">
                    including tax <i className="fas fa-chevron-down ml-1" />
                  </button>
                </div>
                <span className="text-sm">GBP 0.00</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <button className="text-custom text-sm">
                  Select tax rate <i className="fas fa-chevron-down ml-1" />
                </button>
                <span className="text-sm">GBP 0.00</span>
              </div>
              <div className="flex justify-between items-center font-medium">
                <span>Total</span>
                <span>GBP 0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewExpenseClaim;
