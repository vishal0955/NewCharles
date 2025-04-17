import React, { useState } from "react";
import {
  FaPlus,
  FaFileExport,
  FaCog,
  FaTrash,
  FaEdit,
  FaTimes,
} from "react-icons/fa";

const initialDepartments = [
  { id: 1, name: "Finance", employees: 20, status: "Active" },
  { id: 2, name: "Application Development", employees: 30, status: "Active" },
  { id: 3, name: "IT Management", employees: 15, status: "Active" },
  { id: 4, name: "Web Development", employees: 20, status: "Active" },
  { id: 5, name: "Sales", employees: 20, status: "Active" },
  { id: 6, name: "UI / UX", employees: 30, status: "Active" },
  { id: 7, name: "Account Management", employees: 15, status: "Active" },
  { id: 8, name: "Marketing", employees: 10, status: "Inactive" },
  { id: 9, name: "Administration", employees: 5, status: "Active" },
];

const Department = () => {
  const [departments, setDepartments] = useState(initialDepartments);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [newDepartment, setNewDepartment] = useState({
    name: "",
    employees: "20",
    status: "Active",
  });

  // Open Add/Edit Modal
  const openModal = (department = null) => {
    if (department) {
      setEditingDepartment(department);
      setNewDepartment(department);
    } else {
      setEditingDepartment(null);
      setNewDepartment({ name: "", employees: "20", status: "Active" });
    }
    setIsModalOpen(true);
  };

  // Save Department (Add or Edit)
  const handleSave = (e) => {
    e.preventDefault();
    if (editingDepartment) {
      setDepartments(
        departments.map((dept) =>
          dept.id === editingDepartment.id ? newDepartment : dept
        )
      );
    } else {
      setDepartments([
        ...departments,
        { ...newDepartment, id: departments.length + 1 },
      ]);
    }
    setIsModalOpen(false);
  };

  // Delete Department
  const handleDelete = (id) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };

  // Filtered Departments for Search
  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Departments</h1>
          <p className="text-gray-500 text-sm">Employee / Departments</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-0">
          <button className="inv-filter-button d-flex">
            <FaFileExport className="mr-2 mt-1" />
            Export
          </button>
          <button
            className="inv-new-button d-flex"
            onClick={() => openModal()} // Open Add Modal
          >
            <FaPlus className="mr-2 mt-1" />
            Add Department
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="quotes-card">
        <div className="flex flex-wrap justify-between items-center p-3 rounded-md">
          <h1 className="text-xl font-semibold text-gray-800">
            Department List
          </h1>
          <div className="flex flex-wrap gap-2">
            <select className="inv-filter-button">
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <select className="inv-filter-button">
              <option>Sort By : Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-between items-center p-3 rounded-md border-t-2  gap-4">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium">Row Per Page</label>
            <select className="border p-2 rounded-md text-sm">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="inv-search-input w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table (Responsive) */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead className="bg-gray-300 text-gray-700 text-sm">
              <tr>
                <th className="px-4 py-3 w-12">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-3 text-left">Department</th>
                {/* <th className="px-4 py-3 text-left">No of Employees</th> */}
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDepartments.map((dept) => (
                <tr key={dept.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-3">{dept.name}</td>
                  {/* <td className="px-4 py-3">{dept.employees}</td> */}
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-sm rounded-full ${
                        dept.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {dept.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex space-x-2">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => openModal(dept)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(dept.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal (Add / Edit Department) */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)} // Close modal
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {editingDepartment ? "Edit Department" : "Add Department"}
            </h2>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Department Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newDepartment.name}
                  onChange={(e) =>
                    setNewDepartment({ ...newDepartment, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newDepartment.status}
                  onChange={(e) =>
                    setNewDepartment({
                      ...newDepartment,
                      status: e.target.value,
                    })
                  }
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <button
                type="submit"
                className="inv-new-button"
              >
                {editingDepartment ? "Update Department" : "Add Department"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Department;
