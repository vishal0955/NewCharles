import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaFileExport } from "react-icons/fa";
import { Link } from "react-router-dom";

const PayrollDeductions = () => {
  const [data, setData] = useState([
    { name: "Absent amount", amount: "$12" },
    { name: "Advance", amount: "$7" },
    { name: "Unpaid leave", amount: "$3" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    unitCalc: false,
    assignee: "No Assignee",
  });

  const handleAddOrUpdate = () => {
    if (!formData.name || !formData.amount) {
      alert("All fields are required!");
      return;
    }

    const newItem = {
      name: formData.name,
      amount: `$${formData.amount}`,
    };

    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = newItem;
      setData(updated);
    } else {
      setData([...data, newItem]);
    }

    setShowModal(false);
    setFormData({
      name: "",
      amount: "",
      unitCalc: false,
      assignee: "No Assignee",
    });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const item = data[index];
    setFormData({
      name: item.name,
      amount: item.amount.replace("$", ""),
      unitCalc: false,
      assignee: "No Assignee",
    });
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure to delete this item?")) {
      const updated = [...data];
      updated.splice(index, 1);
      setData(updated);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Payroll Items
          </h1>
          <p className="text-gray-500 text-sm">HR / Payroll Items</p>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 border rounded">
            <FaFileExport className="mr-2" /> Export
          </button>
          <button
            className="flex items-center px-4 py-2 bg-gray-800 hover:bg-black text-white rounded"
            onClick={() => setShowModal(true)}
          >
            <FaPlus className="mr-2" /> Add Deduction
          </button>
        </div>
      </div>

      <div className="flex space-x-2 mb-4">
        <Link
          to="/payrollitem"
          className="px-4 py-2 rounded border bg-white text-gray-700"
        >
          Additions
        </Link>
        <Link
          to="/payroll/overtime"
          className="px-4 py-2 rounded border bg-white text-gray-700"
        >
          Overtime
        </Link>
        <button className="px-4 py-2 rounded border bg-[#20626c] text-white">
          Deductions
        </button>
      </div>

      <div className="bg-white rounded shadow-md">
        <div className="flex justify-between items-center border-b px-4 py-2">
          <h2 className="font-semibold">Deductions List</h2>
          <div className="flex items-center space-x-2">
            <select className="border p-2 rounded text-sm">
              <option>Sort By : Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="border p-2 rounded text-sm"
            />
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-4 mb-2">
            <label className="text-sm font-medium">Row Per Page</label>
            <select className="border p-2 rounded text-sm">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>

          <table className="w-full border-collapse border border-gray-200 text-nowrap">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">
                  <input type="checkbox" />
                </th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Default / Unit Amount</th>
                <th className="p-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-sm">
                  <td className="p-2 border text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.amount}</td>
                  <td className="p-2 border text-center space-x-3">
                    <button
                      className="text-blue-600"
                      onClick={() => handleEdit(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600"
                      onClick={() => handleDelete(index)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <p>
              Showing 1 - {data.length} of {data.length} entries
            </p>
            <div className="space-x-2">
              <button className="px-2 py-1 border rounded">{"<"}</button>
              <button className="px-3 py-1 bg-orange-500 text-white rounded">
                1
              </button>
              <button className="px-2 py-1 border rounded">{">"}</button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editIndex !== null ? "Edit Deduction" : "Add Deduction"}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setFormData({
                    name: "",
                    amount: "",
                    unitCalc: false,
                    assignee: "No Assignee",
                  });
                  setEditIndex(null);
                }}
                className="text-gray-500 text-xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-medium text-sm mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full">
                  <label className="block font-medium text-sm mb-1">
                    Amount
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                  />
                </div>
                <div className="pt-5">
                  <label className="text-sm font-medium">
                    Unit Calculation
                  </label>
                  <input
                    type="checkbox"
                    className="ml-2"
                    checked={formData.unitCalc}
                    onChange={(e) =>
                      setFormData({ ...formData, unitCalc: e.target.checked })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4">
                {["No Assignee", "All Employees", "Select Employee"].map(
                  (val) => (
                    <label key={val} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="assignee"
                        value={val}
                        checked={formData.assignee === val}
                        onChange={(e) =>
                          setFormData({ ...formData, assignee: e.target.value })
                        }
                      />
                      <span>{val}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => {
                  setShowModal(false);
                  setFormData({
                    name: "",
                    amount: "",
                    unitCalc: false,
                    assignee: "No Assignee",
                  });
                  setEditIndex(null);
                }}
                className="px-4 py-2 rounded border"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrUpdate}
                className="px-4 py-2 bg-gray-800 hover:bg-black text-white rounded"
              >
                {editIndex !== null ? "Update" : "Add Deduction"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollDeductions;
