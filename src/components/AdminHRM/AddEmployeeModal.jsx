import React, { useState, useEffect } from "react";

const departments = [
  "IT Department",
  "HR Department",
  "Finance Department",
  "Marketing Department",
];
const designations = [
  "Senior Developer",
  "HR Manager",
  "Marketing Specialist",
  "Finance Manager",
];

const AddEmployeeModal = ({ isOpen, onClose, onSave, editData }) => {
  const [activeTab, setActiveTab] = useState("basic");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    status: "",
    department: "",
    designation: "",
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        status: "",
        department: "",
        designation: "",
      });
    }
  }, [editData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[800px] max-w-full p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-semibold">
            {editData ? "Edit Employee" : "Add New Employee"}
            <span className="text-gray-500">Employee ID : EMP-0024</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            &times;
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b mt-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "basic"
                ? "border-primary border-b-2 text-primary"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("basic")}
          >
            Basic Information
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "permissions"
                ? "border-primary border-b-2 text-primary"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("permissions")}
          >
            Permissions
          </button>
        </div>

        {/* Content */}
        <div className="mt-4">
          {activeTab === "basic" ? (
            // Basic Information Form
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 flex flex-col items-center">
                <div className="border border-gray-300 rounded-full p-2 w-24 h-24 flex items-center justify-center">
                  <span className="text-gray-500">+</span>
                </div>
                <button
                  className="mt-2  px-3 py-1 rounded-md text-sm  text-white"
                  style={{
                    backgroundColor:
                      "#2563eb",
                  }}
                >
                  <input type="file" placeholder="upload" />
                </button>
              </div>

              <input
                className="border p-2 rounded-md"
                type="text"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <input
                className="border p-2 rounded-md"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
              <input
                className="border p-2 rounded-md"
                type="text"
                placeholder="Employee ID *"
              />
              <input
                className="border p-2 rounded-md"
                type="date"
                placeholder="Joining Date *"
              />
              <input
                className="border p-2 rounded-md"
                type="text"
                placeholder="Username *"
              />
              <input
                className="border p-2 rounded-md"
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                className="border p-2 rounded-md"
                type="password"
                placeholder="Password *"
              />
              <input
                className="border p-2 rounded-md"
                type="password"
                placeholder="Confirm Password *"
              />
              <input
                className="border p-2 rounded-md"
                type="text"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <input
                className="border p-2 rounded-md"
                type="text"
                placeholder="Company *"
              />

              {/* Department Dropdown */}
              <select
                className="border p-2 rounded-md"
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
              >
                <option value="">Select Department</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              {/* Designation Dropdown */}
              <select
                className="border p-2 rounded-md"
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
              >
                <option value="">Select Designation</option>
                {designations.map((desg, index) => (
                  <option key={index} value={desg}>
                    {desg}
                  </option>
                ))}
              </select>

              <select
                className="border p-2 rounded-md"
                name="status"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <textarea
                className="border p-2 rounded-md col-span-2"
                placeholder="About *"
              ></textarea>
            </div>
          ) : (
            // Permissions Tab
            <div className="mt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-700 font-semibold">
                  Enable Options
                </span>
                <div>
                  <label className="mr-2">
                    <input type="checkbox" /> Enable all Module
                  </label>
                  <label>
                    <input type="checkbox" /> Select All
                  </label>
                </div>
              </div>

              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border p-2">Module</th>
                    <th className="border p-2">Read</th>
                    <th className="border p-2">Write</th>
                    <th className="border p-2">Create</th>
                    <th className="border p-2">Delete</th>
                    <th className="border p-2">Import</th>
                    <th className="border p-2">Export</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Holidays",
                    "Leaves",
                    "Clients",
                    "Projects",
                    "Tasks",
                    "Chats",
                    "Assets",
                    "Timing Sheets",
                  ].map((module, index) => (
                    <tr key={index} className="text-center">
                      <td className="border p-2 text-left">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> {module}
                        </label>
                      </td>
                      {[
                        "Read",
                        "Write",
                        "Create",
                        "Delete",
                        "Import",
                        "Export",
                      ].map((perm, idx) => (
                        <td key={idx} className="border p-2">
                          <input type="checkbox" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-4 gap-2">
          <button onClick={onClose} className="inv-filter-button">
            Cancel
          </button>
          <button onClick={() => onSave(formData)} className="inv-new-button">
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
