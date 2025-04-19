import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddEmployeeSalaryModal = ({
  onClose,
  onSubmit,
  isEdit = false,
  employeeData = {},
}) => {
  const [earningsRows, setEarningsRows] = useState([{}]);
  const [deductionRows, setDeductionRows] = useState([{}]);

  const addEarning = () => setEarningsRows([...earningsRows, {}]);
  const removeEarning = (index) => {
    const updated = [...earningsRows];
    updated.splice(index, 1);
    setEarningsRows(updated);
  };

  const addDeduction = () => setDeductionRows([...deductionRows, {}]);
  const removeDeduction = (index) => {
    const updated = [...deductionRows];
    updated.splice(index, 1);
    setDeductionRows(updated);
  };

  const [formData, setFormData] = useState({
    name: employeeData?.name || "",
    email: employeeData?.email || "",
    phone: employeeData?.phone || "",
    role: employeeData?.role || "",
    designation: employeeData?.designation || "",
    joining: employeeData?.joining || "",
    salary: employeeData?.salary || "",
    id: employeeData?.id || "",
  });


  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const handleSubmit = () => {
    if (formData.name) {
      if (isEdit) {
        onSubmit(formData.id, formData); // updateEmployee(id, data)
      } else {
        onSubmit(formData); // addEmployee(data)
      }
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-30 flex items-center justify-center z-50">
      <div className={`${darkMode ? "dark-mode" : null } bg-white max-h-[90vh] overflow-y-auto w-[60%] max-w-5xl rounded shadow-lg p-6 `}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Employee Salary</h2>
          <button onClick={onClose} className="text-gray-500 text-xl">
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Employee Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className={`${darkMode ? "card-dark" : null } border p-2 rounded `}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="text"
              placeholder="Email"
              className={`${darkMode ? "card-dark" : null } border p-2 rounded `}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              placeholder="Phone"
              className={`${darkMode ? "card-dark" : null } border p-2 rounded `}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Designation
            </label>
            <input
              type="text"
              placeholder="Designation"
              className={`${darkMode ? "card-dark" : null } border p-2 rounded `}
              value={formData.designation}
              onChange={(e) =>
                setFormData({ ...formData, designation: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Joining Date
            </label>
            <input
              type="text"
              placeholder="Joining Date"
              className={`${darkMode ? "card-dark" : null } border p-2 rounded `}
              value={formData.joining}
              onChange={(e) =>
                setFormData({ ...formData, joining: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Net Salary</label>
            <input
              type="text"
              placeholder="Net Salary"
              className={`${darkMode ? "card-dark" : null } border p-2 rounded `}
              value={formData.salary}
              onChange={(e) =>
                setFormData({ ...formData, salary: e.target.value })
              }
            />
          </div>
        </div>

        {/* Earnings */}
        <h3 className="font-semibold mb-2">Earnings</h3>
        {earningsRows.map((_, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-2">
            <input placeholder="Basic" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            <input placeholder="DA(40%)" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            <input placeholder="HRA(15%)" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            <input placeholder="Conveyance" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            <input placeholder="Allowance" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            <input
              placeholder="Medical Allowance"
              className={`${darkMode ? "card-dark" : null } border p-2 rounded `}
            />
            <input placeholder="Others" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            {index > 0 && (
              <button
                onClick={() => removeEarning(index)}
                className="text-red-500"
              >
                🗑️
              </button>
            )}
          </div>
        ))}
        <button onClick={addEarning} className="text-orange-500 text-sm mb-4">
          + Add New
        </button>

        {/* Deductions */}
        <h3 className="font-semibold mb-2">Deductions</h3>
        {deductionRows.map((_, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-2">
            <input placeholder="TDS" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            <input placeholder="ESI" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            <input placeholder="PF" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            <input placeholder="Leave" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            <input placeholder="Prof. Tax" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            <input
              placeholder="Labour Welfare"
              className={`${darkMode ? "card-dark" : null } border p-2 rounded `}
            />
            <input placeholder="Others" className={`${darkMode ? "card-dark" : null } border p-2 rounded `} />
            {index > 0 && (
              <button
                onClick={() => removeDeduction(index)}
                className="text-red-500"
              >
                🗑️
              </button>
            )}
          </div>
        ))}
        <button onClick={addDeduction} className="text-orange-500 text-sm mb-4">
          + Add New
        </button>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 rounded border">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-gray-800 text-white hover:bg-black rounded"
          >
            {isEdit ? "Update Employee Salary" : "Add Employee Salary"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeSalaryModal;
