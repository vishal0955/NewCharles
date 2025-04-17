import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SalaryDetails = () => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const navigate = useNavigate();
  
  const [salaryData, setSalaryData] = useState({
    id: 1,
    employeeId: "EMP001",
    name: "John Smith",
    department: "Engineering",
    position: "Senior Developer",
    email: "john.smith@company.com",
    phoneNumber: "+1 (555) 123-4567",
    joiningDate: "2022-03-15",
    baseSalary: 4200.00,
    bonus: 300.00,
    overtime: 150.00,
    deductions: 120.00,
    taxAmount: 430.00,
    netSalary: 4100.00,
    paymentDate: "2025-04-01",
    paymentMethod: "Bank Transfer",
    bankAccount: "XXXX-XXXX-XXXX-1234",
    status: "Paid",
    paymentHistory: [
      { id: 101, date: "2025-03-01", amount: 4080.00, status: "Paid" },
      { id: 102, date: "2025-02-01", amount: 4050.00, status: "Paid" },
      { id: 103, date: "2025-01-01", amount: 4000.00, status: "Paid" },
    ],
    notes: "Annual performance bonus included in April payment."
  });

  const handleBackClick = () => {
    navigate("/finance/salarydisbursement", { replace: true });
  };

  const handleExportPDF = () => {
    console.log("Exporting PDF for employee:", salaryData.employeeId);
    // Implementation for PDF export would go here
  };

  const handleExportExcel = () => {
    console.log("Exporting Excel for employee:", salaryData.employeeId);
    // Implementation for Excel export would go here
  };

  const handleEdit = () => {
    console.log("Editing salary information for:", salaryData.employeeId);
    // Navigate to edit form or open modal
  };

  // Function to get status badge class
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Paid":
        return "bg-success";
      case "Unpaid":
        return "bg-danger";
      case "Scheduled":
        return "bg-warning text-dark";
      default:
        return "bg-secondary";
    }
  };
  
  return (
    <div className="container-fluid px-3 px-md-4 py-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <button 
            className="btn btn-sm btn-outline-secondary me-3"
            onClick={handleBackClick}
          >
            <i className="fa-solid fa-arrow-left me-1"></i> Back
          </button>
          <h4 className="mb-0">Salary Details</h4>
        </div>
        <div className="d-flex gap-2">
          <button 
            className="btn btn-outline-secondary"
            onClick={handleEdit}
          >
            <i className="fa-solid fa-edit me-1"></i> Edit
          </button>
          <div className="dropdown">
            <button 
              className="btn btn-primary dropdown-toggle" 
              type="button" 
              data-bs-toggle="dropdown"
            >
              Export
            </button>
            <ul className="dropdown-menu">
              <li>
                <a 
                  className="dropdown-item" 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleExportPDF();
                  }}
                >
                  <i className="fa-solid fa-file-pdf me-2"></i>Export as PDF
                </a>
              </li>
              <li>
                <a 
                  className="dropdown-item" 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleExportExcel();
                  }}
                >
                  <i className="fa-solid fa-file-excel me-2"></i>Export as Excel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row g-3">
        {/* Employee Information Card */}
        <div className="col-12 col-lg-4">
          <div className={`${darkMode ? "card-dark" : ""} card h-100`}>
            <div className="card-header">
              <h5 className="mb-0">Employee Information</h5>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <div className="contact-avatar mx-auto mb-3" style={{ width: "80px", height: "80px", fontSize: "2rem" }}>
                  {salaryData.name.charAt(0)}
                </div>
                <h5 className="mb-1">{salaryData.name}</h5>
                <p className="text-muted mb-0">{salaryData.position}</p>
                <span className={`badge ${getStatusBadgeClass(salaryData.status)} mt-2`}>
                  {salaryData.status}
                </span>
              </div>
              
              <div className="border-top pt-3">
                <div className="row mb-2">
                  <div className="col-5 fw-bold">Employee ID:</div>
                  <div className="col-7">{salaryData.employeeId}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-5 fw-bold">Department:</div>
                  <div className="col-7">{salaryData.department}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-5 fw-bold">Email:</div>
                  <div className="col-7 text-truncate">{salaryData.email}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-5 fw-bold">Phone:</div>
                  <div className="col-7">{salaryData.phoneNumber}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-5 fw-bold">Joining Date:</div>
                  <div className="col-7">{salaryData.joiningDate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Current Salary Card */}
        <div className="col-12 col-lg-8">
          <div className={`${darkMode ? "card-dark" : ""} card h-100`}>
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Current Salary Information</h5>
              <div className="text-muted small">Payment Date: {salaryData.paymentDate}</div>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-6 mb-3 mb-md-0">
                  <div className={`${darkMode ? "bg-dark text-white" : "bg-light"} rounded p-3 h-100`}>
                    <h6 className="mb-3">Earnings</h6>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Base Salary:</span>
                      <span>${salaryData.baseSalary.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Bonus:</span>
                      <span>${salaryData.bonus.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Overtime:</span>
                      <span>${salaryData.overtime.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between font-weight-bold mt-3 pt-2 border-top">
                      <span className="fw-bold">Total Earnings:</span>
                      <span className="fw-bold">${(salaryData.baseSalary + salaryData.bonus + salaryData.overtime).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={`${darkMode ? "bg-dark text-white" : "bg-light"} rounded p-3 h-100`}>
                    <h6 className="mb-3">Deductions</h6>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Tax:</span>
                      <span>${salaryData.taxAmount.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Other Deductions:</span>
                      <span>${salaryData.deductions.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between font-weight-bold mt-3 pt-2 border-top">
                      <span className="fw-bold">Total Deductions:</span>
                      <span className="fw-bold">${(salaryData.taxAmount + salaryData.deductions).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row mb-4">
                <div className="col-12">
                  <div className={`${darkMode ? "bg-dark text-white" : "bg-light"} rounded p-3`}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Net Salary:</h5>
                      <h4 className="mb-0 text-primary">${salaryData.netSalary.toFixed(2)}</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row mb-4">
                <div className="col-12">
                  <h6 className="mb-3">Payment Details</h6>
                  <div className="table-responsive">
                    <table className={`${darkMode ? "table-dark" : ""} table table-bordered`}>
                      <tbody>
                        <tr>
                          <th style={{ width: "30%" }}>Payment Method</th>
                          <td>{salaryData.paymentMethod}</td>
                        </tr>
                        {salaryData.paymentMethod === "Bank Transfer" && (
                          <tr>
                            <th>Bank Account</th>
                            <td>{salaryData.bankAccount}</td>
                          </tr>
                        )}
                        <tr>
                          <th>Payment Date</th>
                          <td>{salaryData.paymentDate}</td>
                        </tr>
                        <tr>
                          <th>Payment Status</th>
                          <td>
                            <span className={`badge ${getStatusBadgeClass(salaryData.status)}`}>
                              {salaryData.status}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {salaryData.notes && (
                <div className="row mb-4">
                  <div className="col-12">
                    <h6 className="mb-2">Notes</h6>
                    <div className={`${darkMode ? "bg-dark text-white" : "bg-light"} rounded p-3`}>
                      <p className="mb-0">{salaryData.notes}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Payment History Card */}
        <div className="col-12">
          <div className={`${darkMode ? "card-dark" : ""} card`}>
            <div className="card-header">
              <h5 className="mb-0">Payment History</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className={`${darkMode ? "table-dark" : ""} table inv-table`}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Payment Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryData.paymentHistory.map((payment, index) => (
                      <tr key={payment.id}>
                        <td>{index + 1}</td>
                        <td>{payment.date}</td>
                        <td>${payment.amount.toFixed(2)}</td>
                        <td>
                          <span className={`badge ${getStatusBadgeClass(payment.status)}`}>
                            {payment.status}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="fa-solid fa-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-secondary">
                              <i className="fa-solid fa-file-pdf"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryDetails;