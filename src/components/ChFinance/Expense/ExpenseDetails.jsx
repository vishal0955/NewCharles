

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaPen,
  FaDownload,
  FaTrash,
  FaMoneyBillWave,
  FaBuilding,
  FaCalendarAlt,
  FaCreditCard,
  FaFileInvoice
} from "react-icons/fa";

const ExpenseDetail = () => {
  const [expense, setExpense] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockExpense = {
      id: "EXP001",
      category: "Office Supplies",
      description: "Printer paper and ink cartridges for the marketing department. Monthly supply restocking.",
      amount: 149.99,
      date: "2025-04-10",
      vendor: "Office Depot",
      paymentMethod: "Credit Card",
      status: "Paid",
      createdBy: "John Smith",
      createdAt: "2025-04-10T09:15:00",
      attachments: [
        { name: "Receipt.pdf", size: "256KB" },
        { name: "Invoice.pdf", size: "128KB" }
      ],
      notes: "Approved by department manager. Monthly recurring expense.",
      paymentDetails: {
        cardLast4: "1234",
        cardType: "Visa",
        paymentDate: "2025-04-10"
      }
    };

    setTimeout(() => {
      setExpense(mockExpense);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 mb-0">Expense Details</h1>
     
        </div>
        <Link to="/finance/expenselist" className="btn btn-outline-secondary">
            <FaArrowLeft className="" /> <span>Back</span> 
          </Link>
        {/* <div className="d-flex gap-2">
          <Link to="/expenselist" className="btn btn-outline-secondary">
            <FaArrowLeft className="me-2" /> Back
          </Link>
          <button className="btn btn-outline-primary">
            <FaPen className="me-2" /> Edit
          </button>
          <button className="btn btn-outline-success">
            <FaDownload className="me-2" /> Export
          </button>
          <button className="btn btn-outline-danger">
            <FaTrash className="me-2" /> Delete
          </button>
        </div> */}
      </div>

      <div className="row g-4">
        <div className="col-lg-12">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Expense Information</h5>
            </div>
            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded-circle p-2 me-3">
                      <FaMoneyBillWave className="text-primary" />
                    </div>
                    <div>
                      <div className="text-muted small">Amount</div>
                      <div className="fw-bold fs-4">${expense.amount.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded-circle p-2 me-3">
                      <FaBuilding className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-muted small">Vendor</div>
                      <div className="fw-bold">{expense.vendor}</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded-circle p-2 me-3">
                      <FaCalendarAlt className="text-warning" />
                    </div>
                    <div>
                      <div className="text-muted small">Date</div>
                      <div className="fw-bold">{expense.date}</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded-circle p-2 me-3">
                      <FaCreditCard className="text-info" />
                    </div>
                    <div>
                      <div className="text-muted small">Payment Method</div>
                      <div className="fw-bold">{expense.paymentMethod}</div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <hr />
                  <div className="mb-3">
                    <div className="text-muted small mb-1">Category</div>
                    <div>{expense.category}</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-muted small mb-1">Description</div>
                    <div>{expense.description}</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-muted small mb-1">Status</div>
                    <div>
                      <span className={`badge ${expense.status === "Paid" ? "bg-success" : "bg-warning"}`}>
                        {expense.status}
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-muted small mb-1">Created By</div>
                    <div>{expense.createdBy} on {new Date(expense.createdAt).toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Notes</h5>
            </div>
            <div className="card-body">
              <p>{expense.notes}</p>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-4">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Payment Details</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="text-muted small mb-1">Card Type</div>
                <div>{expense.paymentDetails.cardType}</div>
              </div>
              <div className="mb-3">
                <div className="text-muted small mb-1">Card Number</div>
                <div>**** **** **** {expense.paymentDetails.cardLast4}</div>
              </div>
              <div className="mb-3">
                <div className="text-muted small mb-1">Payment Date</div>
                <div>{expense.paymentDetails.paymentDate}</div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Attachments</h5>
              <button className="btn btn-sm btn-outline-primary">Add File</button>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {expense.attachments.map((file, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <div className="d-flex align-items-center">
                      <FaFileInvoice className="text-muted me-2" />
                      <span>{file.name}</span>
                    </div>
                    <small className="text-muted">{file.size}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ExpenseDetail;

