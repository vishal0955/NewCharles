import React, { useState } from "react";
import "./invoice.css";
import NewInvoice from "./NewInvoice";
import { useSelector } from "react-redux";
import {Pagination} from "react-bootstrap";

const AllInvoice = () => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  // Sample invoice data
  const invoices = [
    {
      id: 1,
      invoiceNo: "#INV-2024001",
      client: {
        name: "Acme Corp",
        email: "john@example.com",
        initial: "A"
      },
      amount: "£2,000.00",
      status: "Paid",
      dueDate: "Jan 25, 2024"
    },
    {
      id: 2,
      invoiceNo: "#INV-2024002",
      client: {
        name: "TechStart Inc",
        email: "sarah@example.com",
        initial: "T"
      },
      amount: "£3,500.00",
      status: "Pending",
      dueDate: "Jan 30, 2024"
    },
    {
      id: 3,
      invoiceNo: "#INV-2024003",
      client: {
        name: "Global Solutions",
        email: "mike@example.com",
        initial: "G"
      },
      amount: "£1,750.00",
      status: "Draft",
      dueDate: "Feb 5, 2024"
    },
    {
      id: 1,
      invoiceNo: "#INV-2024001",
      client: {
        name: "Acme Corp",
        email: "john@example.com",
        initial: "A"
      },
      amount: "£2,000.00",
      status: "Paid",
      dueDate: "Jan 25, 2024"
    },
    {
      id: 2,
      invoiceNo: "#INV-2024002",
      client: {
        name: "TechStart Inc",
        email: "sarah@example.com",
        initial: "T"
      },
      amount: "£3,500.00",
      status: "Pending",
      dueDate: "Jan 30, 2024"
    },
    {
      id: 3,
      invoiceNo: "#INV-2024003",
      client: {
        name: "Global Solutions",
        email: "mike@example.com",
        initial: "G"
      },
      amount: "£1,750.00",
      status: "Draft",
      dueDate: "Feb 5, 2024"
    },
    {
      id: 1,
      invoiceNo: "#INV-2024001",
      client: {
        name: "Acme Corp",
        email: "john@example.com",
        initial: "A"
      },
      amount: "£2,000.00",
      status: "Paid",
      dueDate: "Jan 25, 2024"
    },
    {
      id: 2,
      invoiceNo: "#INV-2024002",
      client: {
        name: "TechStart Inc",
        email: "sarah@example.com",
        initial: "T"
      },
      amount: "£3,500.00",
      status: "Pending",
      dueDate: "Jan 30, 2024"
    },
    {
      id: 3,
      invoiceNo: "#INV-2024003",
      client: {
        name: "Global Solutions",
        email: "mike@example.com",
        initial: "G"
      },
      amount: "£1,750.00",
      status: "Draft",
      dueDate: "Feb 5, 2024"
    },
    {
      id: 1,
      invoiceNo: "#INV-2024001",
      client: {
        name: "Acme Corp",
        email: "john@example.com",
        initial: "A"
      },
      amount: "£2,000.00",
      status: "Paid",
      dueDate: "Jan 25, 2024"
    },
    {
      id: 2,
      invoiceNo: "#INV-2024002",
      client: {
        name: "TechStart Inc",
        email: "sarah@example.com",
        initial: "T"
      },
      amount: "£3,500.00",
      status: "Pending",
      dueDate: "Jan 30, 2024"
    },
    {
      id: 3,
      invoiceNo: "#INV-2024003",
      client: {
        name: "Global Solutions",
        email: "mike@example.com",
        initial: "G"
      },
      amount: "£1,750.00",
      status: "Draft",
      dueDate: "Feb 5, 2024"
    },
    {
      id: 1,
      invoiceNo: "#INV-2024001",
      client: {
        name: "Acme Corp",
        email: "john@example.com",
        initial: "A"
      },
      amount: "£2,000.00",
      status: "Paid",
      dueDate: "Jan 25, 2024"
    },
    {
      id: 2,
      invoiceNo: "#INV-2024002",
      client: {
        name: "TechStart Inc",
        email: "sarah@example.com",
        initial: "T"
      },
      amount: "£3,500.00",
      status: "Pending",
      dueDate: "Jan 30, 2024"
    },
    {
      id: 3,
      invoiceNo: "#INV-2024003",
      client: {
        name: "Global Solutions",
        email: "mike@example.com",
        initial: "G"
      },
      amount: "£1,750.00",
      status: "Draft",
      dueDate: "Feb 5, 2024"
    },
    {
      id: 1,
      invoiceNo: "#INV-2024001",
      client: {
        name: "Acme Corp",
        email: "john@example.com",
        initial: "A"
      },
      amount: "£2,000.00",
      status: "Paid",
      dueDate: "Jan 25, 2024"
    },
    {
      id: 2,
      invoiceNo: "#INV-2024002",
      client: {
        name: "TechStart Inc",
        email: "sarah@example.com",
        initial: "T"
      },
      amount: "£3,500.00",
      status: "Pending",
      dueDate: "Jan 30, 2024"
    },
    {
      id: 3,
      invoiceNo: "#INV-2024003",
      client: {
        name: "Global Solutions",
        email: "mike@example.com",
        initial: "G"
      },
      amount: "£1,750.00",
      status: "Draft",
      dueDate: "Feb 5, 2024"
    }
    
  ];

  const [tasks, setTasks] = useState(invoices);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedDesignations = tasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className= {`${darkMode ? "dark-mode" : null } inv-dashboard-container container-fluid px-3 px-md-4 py-3`} >
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-md-4">
          <h2 className="fw-bold mb-3 mb-md-0">Invoices</h2>
          <div className="d-flex flex-row justify-content-between align-items-center gap-2">
          <button 
            className="inv-new-button btn btn-primary d-flex align-items-center"
            onClick={handleOpenModal}
          >
            <i className="bi bi-plus me-2" /> 
            <span className=" d-sm-inline">New Invoice</span>
          </button>
          <div className="dropdown order-sm-1 d-flex gap-1">
            <button
              className="inv-filter-button dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
            >
             Export
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#import">
                  Export as PDF
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#export">
                  Export as Excel
                </a>
              </li>
            </ul>

    
          </div>
          </div>
        </div>

        {/* Stats Section - Responsive Grid */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={`${darkMode ? "card-dark" : null } border inv-stat-box`}>
              <div className="inv-stat-content">
                <div className="inv-stat-icon inv-stat-icon-primary">
                  <i className="bi bi-arrow-left-right" />
                </div>
                <div>
                  <div className="inv-stat-label">Monthly Total</div>
                  <p className="inv-stat-value">£24,500</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={`${darkMode ? "card-dark" : null } border inv-stat-box`}>
              <div className="inv-stat-content">
                <div className="inv-stat-icon inv-stat-icon-warning">
                  <i className="bi bi-clock" />
                </div>
                <div>
                  <div className="inv-stat-label">Outstanding</div>
                  <p className="inv-stat-value">£8,250</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={`${darkMode ? "card-dark" : null } border inv-stat-box`}>
              <div className="inv-stat-content">
                <div className="inv-stat-icon inv-stat-icon-neutral">
                  <i className="bi bi-file-text" />
                </div>
                <div>
                  <div className="inv-stat-label">Draft</div>
                  <p className="inv-stat-value">£3,800</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={`${darkMode ? "card-dark" : null } border inv-stat-box`}>
              <div className="inv-stat-content">
                <div className="inv-stat-icon inv-stat-icon-danger">
                  <i className="bi bi-exclamation-circle" />
                </div>
                <div>
                  <div className="inv-stat-label">Overdue</div>
                  <p className="inv-stat-value">£2,150</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoices Section */}
        <div className="inv-main-card card">
          <div className={`${darkMode ? "dark-mode" : null } card-body`}>
            {/* Search and Filter Row */}
            <div className="row g-3 mb-4">
              <div className="col-12 col-md-8">
                <div className="inv-search-wrapper position-relative">
                  <i className="bi bi-search inv-search-icon position-absolute" />
                  <input
                    type="text"
                    className={`${darkMode ? "dark-mode" : null } inv-search-input form-control ps-4`}
                    placeholder="Search invoices..."
                    aria-label="Search invoices"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-end">
              <button
    className="btn btn-outline-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
  Status
  </button>
  <ul className="dropdown-menu">
    <li>
      <button className="dropdown-item d-flex align-items-center gap-2" >
Pending
      </button>
    </li>
    <li>
      <button className="dropdown-item d-flex align-items-center gap-2" onClick={() => console.log("Export clicked")}>
      Paid
      </button>
    </li>
  </ul>
              </div>
            </div>

            {/* Table for Desktop */}
            <div className="d-none d-md-block">
              <div className="table-responsive">
                <table className={`${darkMode ? "table-dark" : null } inv-table table table-hover`}>
                  <thead>
                    <tr>
                      <th style={{ width: "20px" }}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="selectAll"
                        />
                      </th>
                      <th>Invoice</th>
                      <th>Client</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Due Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {paginatedDesignations.map((invoice) => (
                   
                      <tr key={invoice.id}>
                        <td>
                          <input type="checkbox" className="form-check-input" />
                        </td>
                        <td>{invoice.invoiceNo}</td>
                        <td>
                          <div className="inv-client-wrapper d-flex align-items-center">
                            <div className="inv-client-avatar me-2">
                              {invoice.client.initial}
                            </div>
                            <div className="inv-client-info">
                              <div className="inv-client-name fw-semibold">
                                {invoice.client.name}
                              </div>
                              <div className="inv-client-email  small">
                                {invoice.client.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="fw-semibold">{invoice.amount}</td>
                        <td>
                          <span className={`inv-status inv-status-${invoice.status.toLowerCase()}`}>
                            {invoice.status}
                          </span>
                        </td>
                        <td>{invoice.dueDate}</td>
                        <td>
                          <button className="inv-action-button btn btn-sm btn-outline-primary">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, tasks.length)} of {tasks.length} entries
          </div>
          <Pagination>
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </Pagination>
        </div>

            {/* Cards for Mobile */}
            <div className="d-md-none">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="inv-mobile-card mb-3 p-3 border rounded">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <div className="fw-bold">{invoice.invoiceNo}</div>
                      <div className="small text-muted">{invoice.dueDate}</div>
                    </div>
                    <span className={`inv-status inv-status-${invoice.status.toLowerCase()}`}>
                      {invoice.status}
                    </span>
                  </div>
                  
                  <div className="d-flex align-items-center mb-2">
                    <div className="inv-client-avatar me-2">
                      {invoice.client.initial}
                    </div>
                    <div>
                      <div className="fw-semibold">{invoice.client.name}</div>
                      <div className="small text-muted">{invoice.client.email}</div>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="fw-bold">{invoice.amount}</div>
                    <div>
                      <input type="checkbox" className="form-check-input me-2" />
                      <button className="inv-action-button btn btn-sm btn-outline-primary">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Invoice Modal */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div className={`${darkMode ? "card-dark" : null } modal-content`}>
                <div className="modal-header">
                  <h5 className="modal-title">Add New Invoice</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <NewInvoice />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>
        </>
      )}
    </>
  );
};

export default AllInvoice;