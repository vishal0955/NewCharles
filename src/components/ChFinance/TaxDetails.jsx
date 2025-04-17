import React, { useState } from "react";
import { Link } from "react-router-dom";

const TaxDetails = () => {
  const [tax] = useState({
    id: 1,
    taxId: "TX-2025-001",
    type: "Income Tax",
    amount: 2450.00,
    dueDate: "2025-04-15",
    paidStatus: "Paid",
    paidDate: "2025-03-20",
    taxYear: "2024",
    paymentMethod: "Bank Transfer",
    accountNumber: "****4532",
    routingNumber: "****0987",
    bankName: "Chase Bank",
    notes: "Annual income tax payment for fiscal year 2024"
  });
  
  // Tax payment history
  const [paymentHistory] = useState([
    {
      date: "2025-03-20",
      amount: 2450.00,
      reference: "TAX-2025-03-15-001",
      status: "Processed"
    },
    {
      date: "2024-03-15",
      amount: 2200.00,
      reference: "TAX-2024-03-15-001",
      status: "Processed"
    },
    {
      date: "2023-04-01",
      amount: 1950.00,
      reference: "TAX-2023-04-01-001",
      status: "Processed"
    }
  ]);

  return (
    <div className="container-fluid px-3 px-md-4 py-3">
      {/* Header with back button */}
      <div className="d-flex align-items-center mb-4">
        <Link to="/finance/tax" className="btn btn-sm btn-outline-secondary me-2">
          <i className="bi bi-arrow-left"></i>
        </Link>
        <h5 className="mb-0">Tax Details</h5>
        <div className="ms-auto">
          <button className="btn btn-sm btn-outline-secondary me-2">
            <i className="bi bi-pencil"></i> Edit
          </button>
          <div className="dropdown d-inline-block">
            <button
              className="btn btn-sm btn-outline-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Actions
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button className="dropdown-item">
                  <i className="bi bi-file-earmark-pdf me-2"></i>Download Receipt
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  <i className="bi bi-archive me-2"></i>Archive
                </button>
              </li>
              <li>
                <button className="dropdown-item text-danger">
                  <i className="bi bi-trash me-2"></i>Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tax summary header */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="bg-light rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                <span className="fs-5">T</span>
              </div>
            </div>
            <div className="col">
              <div className="ps-2">
                <h6 className="mb-0">{tax.type}</h6>
                <p className="text-muted small mb-0">ID: {tax.taxId} • Tax Year: {tax.taxYear}</p>
              </div>
            </div>
            <div className="col-auto text-end">
              <h5 className="mb-0">${tax.amount.toFixed(2)}</h5>
              <span className="badge bg-success">
                {tax.paidStatus}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Tax Details Column */}
        <div className="col-12 col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h6 className="card-title mb-3">Tax Information</h6>
              
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Tax Type</label>
                    <p className="mb-0">{tax.type}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Tax ID</label>
                    <p className="mb-0">{tax.taxId}</p>
                  </div>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Next Due Date</label>
                    <p className="mb-0">{tax.dueDate}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Payment Status</label>
                    <p className="mb-0">
                      <span className={`badge ${
                        tax.paidStatus === "Paid" 
                          ? "bg-success" 
                          : tax.paidStatus === "Pending" 
                          ? "bg-warning text-dark" 
                          : "bg-danger"
                      }`}>
                        {tax.paidStatus}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Amount</label>
                    <p className="mb-0">${tax.amount.toFixed(2)}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Tax Year</label>
                    <p className="mb-0">{tax.taxYear}</p>
                  </div>
                </div>
              </div>
              
              <hr className="my-4" />
              <h6 className="card-title mb-3">Payment Information</h6>
              
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Payment Method</label>
                    <p className="mb-0">{tax.paymentMethod}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Payment Date</label>
                    <p className="mb-0">{tax.paidDate || "—"}</p>
                  </div>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Bank Name</label>
                    <p className="mb-0">{tax.bankName}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Account Number</label>
                    <p className="mb-0">{tax.accountNumber}</p>
                  </div>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label text-muted small mb-1">Routing Number</label>
                    <p className="mb-0">{tax.routingNumber}</p>
                  </div>
                </div>
              </div>
              
              <hr className="my-4" />
              <h6 className="card-title mb-3">Notes</h6>
              <p className="mb-0">{tax.notes}</p>
            </div>
          </div>
          
          {/* Payment History */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="card-title mb-0">Payment History</h6>
                <button className="btn btn-sm btn-link text-decoration-none">View All</button>
              </div>
              
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>DATE</th>
                      <th>AMOUNT</th>
                      <th>REFERENCE</th>
                      <th>STATUS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.map((payment, index) => (
                      <tr key={index}>
                        <td>{payment.date}</td>
                        <td>${payment.amount.toFixed(2)}</td>
                        <td>{payment.reference}</td>
                        <td>
                          <span className="badge bg-success">{payment.status}</span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-secondary me-1">
                            <i className="bi bi-eye"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-download"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Metadata Column */}
        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title mb-3">Metadata</h6>
              
              <div className="mb-3">
                <label className="form-label text-muted small mb-1">Created On</label>
                <p className="mb-0">01/04/2025</p>
              </div>
              
              <div className="mb-3">
                <label className="form-label text-muted small mb-1">Created By</label>
                <p className="mb-0">Admin User</p>
              </div>
              
              <div className="mb-3">
                <label className="form-label text-muted small mb-1">Last Modified</label>
                <p className="mb-0">01/04/2025</p>
              </div>
              
              <div className="mb-3">
                <label className="form-label text-muted small mb-1">Record ID</label>
                <p className="mb-0">#1</p>
              </div>
              
              <hr className="my-4" />
              <h6 className="card-title mb-3">Related Documents</h6>
              
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action px-0 py-2 border-0">
                  <div className="d-flex align-items-center">
                    <div className="bg-light rounded p-2 me-3">
                      <i className="bi bi-file-earmark-pdf text-danger"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 small">2024_Tax_Receipt.pdf</h6>
                      <p className="text-muted mb-0 small">Added on 03/20/2025</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action px-0 py-2 border-0">
                  <div className="d-flex align-items-center">
                    <div className="bg-light rounded p-2 me-3">
                      <i className="bi bi-file-earmark-text text-primary"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 small">Tax_Filing_Confirmation.txt</h6>
                      <p className="text-muted mb-0 small">Added on 03/20/2025</p>
                    </div>
                  </div>
                </a>
              </div>
              
              <button className="btn btn-sm btn-outline-primary mt-3">
                <i className="bi bi-plus"></i> Add Document
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxDetails;