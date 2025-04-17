import React, { useState } from "react";
import { useSelector } from "react-redux";

const SalaryForm = ({ handleClose }) => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    department: "",
    baseSalary: "",
    bonus: "",
    overtime: "",
    deductions: "",
    taxAmount: "",
    netSalary: "",
    paymentDate: "",
    paymentMethod: "",
    bankAccount: "",
    status: "Unpaid",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically handle form submission, like API calls
    handleClose();
  };

  // Calculate net salary based on form inputs
  const calculateNetSalary = () => {
    const base = parseFloat(formData.baseSalary) || 0;
    const bonus = parseFloat(formData.bonus) || 0;
    const overtime = parseFloat(formData.overtime) || 0;
    const deductions = parseFloat(formData.deductions) || 0;
    const tax = parseFloat(formData.taxAmount) || 0;
    
    return (base + bonus + overtime - deductions - tax).toFixed(2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-12">
          <h5 className="border-bottom pb-2 mb-4">Employee Information</h5>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="employeeId" className="form-label">Employee ID</label>
          <input
            type="text"
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="employeeId"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            placeholder="EMP001"
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="name" className="form-label">Employee Name</label>
          <input
            type="text"
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="department" className="form-label">Department</label>
          <select
            className={`form-select ${darkMode ? "dark-mode" : ""}`}
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Operations">Operations</option>
            <option value="Sales">Sales</option>
            <option value="Customer Support">Customer Support</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <h5 className="border-bottom pb-2 mb-4">Salary Information</h5>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="baseSalary" className="form-label">Base Salary ($)</label>
          <input
            type="number"
            step="0.01"
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="baseSalary"
            name="baseSalary"
            value={formData.baseSalary}
            onChange={handleChange}
            placeholder="0.00"
            required
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="bonus" className="form-label">Bonus ($)</label>
          <input
            type="number"
            step="0.01"
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="bonus"
            name="bonus"
            value={formData.bonus}
            onChange={handleChange}
            placeholder="0.00"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="overtime" className="form-label">Overtime ($)</label>
          <input
            type="number"
            step="0.01"
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="overtime"
            name="overtime"
            value={formData.overtime}
            onChange={handleChange}
            placeholder="0.00"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="deductions" className="form-label">Deductions ($)</label>
          <input
            type="number"
            step="0.01"
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="deductions"
            name="deductions"
            value={formData.deductions}
            onChange={handleChange}
            placeholder="0.00"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="taxAmount" className="form-label">Tax Amount ($)</label>
          <input
            type="number"
            step="0.01"
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="taxAmount"
            name="taxAmount"
            value={formData.taxAmount}
            onChange={handleChange}
            placeholder="0.00"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="netSalary" className="form-label">Net Salary ($)</label>
          <input
            type="text"
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="netSalary"
            value={calculateNetSalary()}
            readOnly
            disabled
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <h5 className="border-bottom pb-2 mb-4">Payment Details</h5>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="paymentDate" className="form-label">Payment Date</label>
          <input
            type="date"
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="paymentDate"
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
          <select
            className={`form-select ${darkMode ? "dark-mode" : ""}`}
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Method</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cheque">Cheque</option>
            <option value="Cash">Cash</option>
            <option value="Digital Wallet">Digital Wallet</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="status" className="form-label">Payment Status</label>
          <select
            className={`form-select ${darkMode ? "dark-mode" : ""}`}
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
            <option value="Scheduled">Scheduled</option>
          </select>
        </div>
      </div>

      {formData.paymentMethod === "Bank Transfer" && (
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <label htmlFor="bankAccount" className="form-label">Bank Account</label>
            <input
              type="text"
              className={`form-control ${darkMode ? "dark-mode" : ""}`}
              id="bankAccount"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
          </div>
        </div>
      )}

      <div className="row mb-3">
        <div className="col-12 mb-3">
          <label htmlFor="notes" className="form-label">Notes</label>
          <textarea
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="notes"
            name="notes"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any additional notes regarding this salary payment..."
          ></textarea>
        </div>
      </div>

      <div className="d-flex justify-content-end gap-2 mt-4">
        <button type="button" className="btn btn-secondary" onClick={handleClose}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save Salary Information
        </button>
      </div>
    </form>
  );
};

export default SalaryForm;