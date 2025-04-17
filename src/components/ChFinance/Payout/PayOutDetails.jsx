import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PayoutForm from "./PAyoutForm";


const PayoutDetails = () => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const darkMode = useSelector((state) => state.theme?.isDarkMode) || false;

  // In a real application, this data would be fetched from an API
  // based on the ID from the URL or props
  const [payoutData] = useState({
    id: 1,
    recipientName: "John Doe",
    recipientType: "Employee",
    amount: "$2,500.00",
    paymentMethod: "Bank Transfer",
    status: "Processed",
    frequency: "Monthly",
    accountDetails: "**** 4532",
    bankName: "Chase Bank",
    routingNumber: "**** 0987",
    payoutDate: "15/04/2025",
    createdAt: "01/04/2025",
    createdBy: "Admin User",
    lastModified: "03/04/2025",
    notes: "Monthly salary payment for April 2025",
    paymentHistory: [
      {
        id: 1,
        date: "15/03/2025",
        amount: "$2,500.00",
        status: "Processed",
        reference: "PAY-2025-03-15-001"
      },
      {
        id: 2,
        date: "15/02/2025",
        amount: "$2,500.00",
        status: "Processed",
        reference: "PAY-2025-02-15-001"
      },
      {
        id: 3,
        date: "15/01/2025",
        amount: "$2,500.00",
        status: "Processed",
        reference: "PAY-2025-01-15-001"
      }
    ]
  });

  const handleBackClick = () => {
    navigate("/payouts");
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case "processed":
        return "bg-success";
      case "pending":
        return "bg-warning";
      case "scheduled":
        return "bg-info";
      case "failed":
        return "bg-danger";
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
            className="btn btn-outline-secondary me-3" 
            onClick={handleBackClick}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <h4 className="mb-0">Payout Details</h4>
        </div>
        <div className="d-flex gap-2">
          <button 
            className="btn btn-outline-primary" 
            onClick={handleOpenEditModal}
          >
            <i className="bi bi-pencil me-1"></i> Edit
          </button>
          <div className="dropdown">
            <button
              className="inv-filter-button dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Actions
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#export-pdf">
                  <i className="bi bi-file-pdf me-2"></i> Export as PDF
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#duplicate">
                  <i className="bi bi-copy me-2"></i> Duplicate
                </a>
              </li>
              <li>
                <a className="dropdown-item text-danger" href="#delete">
                  <i className="bi bi-trash me-2"></i> Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Status and Summary */}
      <div className="row mb-4">
        <div className="col-12">
          <div className={`${darkMode ? "dark-mode card-dark" : ""} card inv-main-card`}>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3 mb-md-0">
                    <div className="me-3">
                      <div className="contact-avatar" style={{ width: "48px", height: "48px", fontSize: "1.5rem" }}>
                        {payoutData.recipientName.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">{payoutData.recipientName}</h5>
                      <div className="text-muted small">
                        {payoutData.recipientType} • ID: #{payoutData.id}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-wrap justify-content-md-end gap-3 mt-3 mt-md-0">
                    <div className="text-center me-4">
                      <div className="h5 mb-0">{payoutData.amount}</div>
                      <div className="text-muted small">Amount</div>
                    </div>
                    <div className="text-center me-4">
                      <div className="h5 mb-0">{payoutData.frequency}</div>
                      <div className="text-muted small">Frequency</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-0">
                        <span className={`badge ${getStatusBadgeClass(payoutData.status)}`}>
                          {payoutData.status}
                        </span>
                      </div>
                      <div className="text-muted small">Status</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Sections */}
      <div className="row g-4">
        {/* Payment Details */}
        <div className="col-12 col-lg-8">
          <div className={`${darkMode ? "dark-mode card-dark" : ""} card inv-main-card h-100`}>
            <div className="card-header border-bottom">
              <h5 className="mb-0">Payment Details</h5>
            </div>
            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-6">
                  <h6 className="text-muted mb-3">Payment Information</h6>
                  <div className="mb-3">
                    <div className="text-muted small">Payment Method</div>
                    <div>{payoutData.paymentMethod}</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-muted small">Next Payout Date</div>
                    <div>{payoutData.payoutDate}</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-muted small">Frequency</div>
                    <div>{payoutData.frequency}</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-muted small">Amount</div>
                    <div className="fw-medium">{payoutData.amount}</div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <h6 className="text-muted mb-3">Bank Information</h6>
                  {payoutData.paymentMethod === "Bank Transfer" && (
                    <>
                      <div className="mb-3">
                        <div className="text-muted small">Bank Name</div>
                        <div>{payoutData.bankName}</div>
                      </div>
                      <div className="mb-3">
                        <div className="text-muted small">Account Number</div>
                        <div>{payoutData.accountDetails}</div>
                      </div>
                      <div className="mb-3">
                        <div className="text-muted small">Routing Number</div>
                        <div>{payoutData.routingNumber}</div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {payoutData.notes && (
                <div className="mt-4">
                  <h6 className="text-muted mb-2">Notes</h6>
                  <p>{payoutData.notes}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="col-12 col-lg-4">
          <div className={`${darkMode ? "dark-mode card-dark" : ""} card inv-main-card mb-4`}>
            <div className="card-header border-bottom">
              <h5 className="mb-0">Metadata</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="text-muted small">Created On</div>
                <div>{payoutData.createdAt}</div>
              </div>
              <div className="mb-3">
                <div className="text-muted small">Created By</div>
                <div>{payoutData.createdBy}</div>
              </div>
              <div className="mb-3">
                <div className="text-muted small">Last Modified</div>
                <div>{payoutData.lastModified}</div>
              </div>
              <div className="mb-3">
                <div className="text-muted small">Record ID</div>
                <div>#{payoutData.id}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="col-12">
          <div className={`${darkMode ? "dark-mode card-dark" : ""} card inv-main-card`}>
            <div className="card-header border-bottom d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Payment History</h5>
              <button className="btn btn-sm btn-outline-primary">
                View All
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className={`${darkMode ? "table-dark" : ""} table inv-table mb-0`}>
                  <thead>
                    <tr className={`${darkMode ? "dark-mode" : ""}`}>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Reference</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payoutData.paymentHistory.map((payment) => (
                      <tr key={payment.id}>
                        <td>{payment.date}</td>
                        <td>{payment.amount}</td>
                        <td>{payment.reference}</td>
                        <td>
                          <span className={`badge ${getStatusBadgeClass(payment.status)}`}>
                            {payment.status}
                          </span>
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
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className={`${darkMode ? "dark-mode" : "border-none"} modal-content`}>
                <div className={`${darkMode ? "dark-mode" : ""} modal-header`}>
                  <h5 className="modal-title">Edit Payout</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseEditModal}
                  />
                </div>
                <div className={`${darkMode ? "dark-mode" : ""} modal-body`}>
                  <PayoutForm 
                    handleClose={handleCloseEditModal} 
                    editData={{
                      recipientName: payoutData.recipientName,
                      recipientType: payoutData.recipientType.toLowerCase(),
                      amount: payoutData.amount.replace("$", ""),
                      paymentMethod: "bank",
                      accountNumber: payoutData.accountDetails.replace("**** ", ""),
                      bankName: payoutData.bankName,
                      routingNumber: payoutData.routingNumber.replace("**** ", ""),
                      frequency: payoutData.frequency.toLowerCase(),
                      payoutDate: "2025-04-15", // Format for date input
                      notes: payoutData.notes
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Modal backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseEditModal}
          ></div>
        </>
      )}
    </div>
  );
};

export default PayoutDetails;