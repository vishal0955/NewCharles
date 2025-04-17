import React, { useState } from "react";
import { X, Calendar, Clock, ChevronDown, Upload } from "lucide-react";

const AddProjectModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("basic");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">
            Add Project{" "}
            <span className="text-gray-500 text-sm">Project ID : PRO-0004</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex mt-4 border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === "basic"
                ? "border-b-2 border-orange-500 text-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("basic")}
          >
            Basic Information
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "members"
                ? "border-b-2 border-orange-500 text-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("members")}
          >
            Members
          </button>
        </div>

        {/* Form Content */}
        {activeTab === "basic" && (
          <div className="mt-4">
            {/* Upload Project Logo */}
            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Upload size={24} className="text-gray-400" />
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Image should be below 4 mb
              </p>
              <div className="mt-2 flex gap-2">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                  Upload
                </button>
                <button className="text-gray-500 px-4 py-2 rounded-md border">
                  Cancel
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="mt-4 space-y-4">
              {/* Project Name */}
              <div>
                <label className="block font-semibold text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 mt-1"
                />
              </div>

              {/* Client */}
              <div>
                <label className="block font-semibold text-gray-700">
                  Client
                </label>
                <select className="w-full border rounded-md p-2 mt-1">
                  <option>Select</option>
                </select>
              </div>

              {/* Start Date & End Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700">
                    Start Date
                  </label>
                  <div className="flex items-center border rounded-md p-2 mt-1">
                    <input
                      type="text"
                      className="w-full focus:outline-none"
                      value="02-05-2024"
                      readOnly
                    />
                    <Calendar size={16} className="text-gray-500" />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">
                    End Date
                  </label>
                  <div className="flex items-center border rounded-md p-2 mt-1">
                    <input
                      type="text"
                      className="w-full focus:outline-none"
                      value="02-05-2024"
                      readOnly
                    />
                    <Calendar size={16} className="text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Priority & Project Value */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700">
                    Priority
                  </label>
                  <select className="w-full border rounded-md p-2 mt-1">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">
                    Project Value
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-2 mt-1"
                    placeholder="$"
                  />
                </div>
              </div>

              {/* Working Hours & Extra Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700">
                    Total Working Hours
                  </label>
                  <div className="flex items-center border rounded-md p-2 mt-1">
                    <input
                      type="text"
                      className="w-full focus:outline-none"
                      value="02:05 AM"
                      readOnly
                    />
                    <Clock size={16} className="text-gray-500" />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">
                    Extra Time
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-2 mt-1"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-semibold text-gray-700">
                  Description
                </label>
                <textarea className="w-full border rounded-md p-2 mt-1 h-24"></textarea>
              </div>
            </div>
          </div>
        )}

        {/* Members Tab Content */}
        {activeTab === "members" && (
          <div className="mt-4">
            <p className="text-gray-500">Members section coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProjectModal;
