import React, { useState } from "react";
import PayoutForm from "./PayoutForm";
import { useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";

const PayoutSettings = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedView, setSelectedView] = useState("all-payouts");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handleCLick = () => {
    navigate("/payouts/details");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const [payouts] = useState([
    {
      id: 1,
      recipientName: "John Doe",
      amount: "$2,500.00",
      paymentMethod: "Bank Transfer",
      status: "Processed",
      frequency: "Monthly",
      accountDetails: "**** 4532",
      payoutDate: "15/04/2025",
    },
    {
      id: 2,
      recipientName: "Jane Smith",
      amount: "$1,800.00",
      paymentMethod: "Direct Deposit",
      status: "Pending",
      frequency: "Monthly",
      accountDetails: "**** 7821",
      payoutDate: "17/04/2025",
    },
    {
      id: 3,
      recipientName: "Michael Brown",
      amount: "$3,200.00",
      paymentMethod: "Check",
      status: "Scheduled",
      frequency: "Monthly",
      accountDetails: "—",
      payoutDate: "20/04/2025",
    },
    {
      id: 4,
      recipientName: "Sarah Johnson",
      amount: "$1,500.00",
      paymentMethod: "Bank Transfer",
      status: "Processed",
      frequency: "Bi-weekly",
      accountDetails: "**** 9654",
      payoutDate: "12/04/2025",
    },
    {
      id: 5,
      recipientName: "David Wilson",
      amount: "$4,200.00",
      paymentMethod: "Direct Deposit",
      status: "Failed",
      frequency: "Monthly",
      accountDetails: "**** 3210",
      payoutDate: "15/04/2025",
    },
    {
      id: 6,
      recipientName: "Emily Davis",
      amount: "$2,800.00",
      paymentMethod: "Bank Transfer",
      status: "Processed",
      frequency: "Monthly",
      accountDetails: "**** 6547",
      payoutDate: "15/04/2025",
    },
    {
      id: 7,
      recipientName: "Robert Miller",
      amount: "$3,500.00",
      paymentMethod: "Check",
      status: "Scheduled",
      frequency: "Monthly",
      accountDetails: "—",
      payoutDate: "22/04/2025",
    },
    {
      id: 8,
      recipientName: "Jennifer Taylor",
      amount: "$1,900.00",
      paymentMethod: "Bank Transfer",
      status: "Pending",
      frequency: "Monthly",
      accountDetails: "**** 8821",
      payoutDate: "17/04/2025",
    },
    {
      id: 9,
      recipientName: "William Anderson",
      amount: "$2,600.00",
      paymentMethod: "Direct Deposit",
      status: "Processed",
      frequency: "Monthly",
      accountDetails: "**** 1122",
      payoutDate: "15/04/2025",
    },
    {
      id: 10,
      recipientName: "Lisa Thomas",
      amount: "$3,200.00",
      paymentMethod: "Bank Transfer",
      status: "Processing",
      frequency: "Bi-weekly",
      accountDetails: "**** 4433",
      payoutDate: "16/04/2025",
    },
    {
      id: 11,
      recipientName: "James Martin",
      amount: "$4,100.00",
      paymentMethod: "Direct Deposit",
      status: "Scheduled",
      frequency: "Monthly",
      accountDetails: "**** 5566",
      payoutDate: "20/04/2025",
    },
    {
      id: 12,
      recipientName: "Patricia White",
      amount: "$2,300.00", 
      paymentMethod: "Check",
      status: "Pending",
      frequency: "Monthly",
      accountDetails: "—",
      payoutDate: "18/04/2025",
    },
  ]);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedPayouts = payouts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(payouts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const views = [
    { id: "all-payouts", name: "All Payouts", count: 0 },
    { id: "processed-payouts", name: "Processed", count: 0 },
    { id: "pending-payouts", name: "Pending", count: 0 },
    { id: "scheduled-payouts", name: "Scheduled", count: 0 },
    { id: "failed-payouts", name: "Failed", count: 0 },
  ];

  const handleFilterChange = (filterId) => {
    if (selectedFilters.includes(filterId)) {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId));
    } else {
      setSelectedFilters([...selectedFilters, filterId]);
    }
  };

  const darkMode = useSelector((state) => state.theme?.isDarkMode) || false;

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
      case "processing":
        return "bg-primary";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="container-fluid px-3 px-md-4 py-3">
      <div className="d-flex justify-content-between mb-4 gap-2 gap-md-0">
        <div className="align-items-center">
          <h4 className="mb-0 me-2">Payout Settings</h4>
        </div>

        <div className="dropdown order-sm-1 d-flex gap-1">
          <button
            className="inv-filter-button dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
          >
            Actions
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#import">
                Import
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#export">
                Export to Excel
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#export-pdf">
                Export to PDF
              </a>
            </li>
          </ul>
          <button
            className="btn btn-primary rounded-3 px-3 px-sm-4 "
            onClick={handleOpenModal}
          >
            + Add Payout
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : ""} inv-stat-box h-100`}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-primary">
                <i className="fa-solid fa-money-bill-transfer"></i>
              </div>
              <div>
                <div className="inv-stat-label">Total Payouts</div>
                <p className="inv-stat-value">$32,800</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : ""} inv-stat-box h-100`}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-success">
                <i className="fa-solid fa-check-circle"></i>
              </div>
              <div>
                <div className="inv-stat-label">Processed</div>
                <p className="inv-stat-value">$15,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : ""} inv-stat-box h-100`}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-warning">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div>
                <div className="inv-stat-label">Pending</div>
                <p className="inv-stat-value">$12,200</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : ""} inv-stat-box h-100`}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-danger">
                <i className="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div>
                <div className="inv-stat-label">Failed</div>
                <p className="inv-stat-value">$4,200</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Views */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        {views.map((view) => (
          <button
            key={view.id}
            className={`${darkMode ? "card-dark" : ""} btn btn-sm ${
              selectedView === view.id
                ? "inv-new-button text-white active"
                : "inv-filter-button text-dark"
            }`}
            onClick={() => setSelectedView(view.id)}
          >
            {view.name}
          </button>
        ))}
        <button className="btn btn-sm btn-outline-primary rounded-3 px-3 px-sm-4">
          All Views
        </button>
      </div>

      {/* Filters */}
      <div
        className={`${darkMode ? "dark-mode" : ""} card inv-main-card mb-4`}
      >
        <div className="card-body">
          <div className="row g-2 mb-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="inv-search-wrapper">
                <i className="bi bi-search inv-search-icon" />
                <input
                  type="text"
                  className={`${darkMode ? "dark-mode" : ""} inv-search-input h-11`}
                  placeholder="Search Payouts..."
                  aria-label="Search Payouts"
                />
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : ""} inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Recipient
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#all">
                      All Recipients
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#employees">
                      Employees
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#vendors">
                      Vendors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : ""} inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Payment Method
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#all">
                      All Methods
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#bank">
                      Bank Transfer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#direct">
                      Direct Deposit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#check">
                      Check
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : ""} inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Status
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#all">
                      All Statuses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#processed">
                      Processed
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#pending">
                      Pending
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#scheduled">
                      Scheduled
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#failed">
                      Failed
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : ""} inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Date Range
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#all">
                      All Time
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#today">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#week">
                      This Week
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#month">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#custom">
                      Custom Range
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className={`${darkMode ? "table-dark" : ""} table inv-table`}>
              <thead>
                <tr className={`${darkMode ? "dark-mode" : ""}`}>
                  <th style={{ width: "20px" }}>
                    <input
                      type="checkbox"
                      className="inv-checkbox"
                      id="selectAll"
                    />
                  </th>
                  <th>Recipient</th>
                  <th className="d-none d-md-table-cell">Amount</th>
                  <th className="d-none d-sm-table-cell">Payment Method</th>
                  <th className="d-none d-lg-table-cell">Account Details</th>
                  <th className="d-none d-xl-table-cell">Frequency</th>
                  <th>Status</th>
                  <th className="d-none d-xl-table-cell">Payout Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPayouts.map((payout) => (
                  <tr key={payout.id} onClick={handleCLick}>
                    <td onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" className="form-check-input" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="contact-avatar me-2">
                          {payout.recipientName.charAt(0)}
                        </div>
                        <span className="d-inline-block text-truncate" style={{maxWidth: '150px'}}>
                          {payout.recipientName}
                        </span>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <span className="fw-medium">{payout.amount}</span>
                    </td>
                    <td className="d-none d-sm-table-cell">{payout.paymentMethod}</td>
                    <td className="d-none d-lg-table-cell">{payout.accountDetails}</td>
                    <td className="d-none d-xl-table-cell">{payout.frequency}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(payout.status)}`}>
                        {payout.status}
                      </span>
                    </td>
                    <td className="d-none d-xl-table-cell">{payout.payoutDate}</td>
                    <td onClick={(e) => e.stopPropagation()}>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => navigate("/finance/payoutdetails")}>
                          <i className="bi bi-eye"></i>
                        </button>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bi bi-three-dots"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#export-single">
                                Export
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#duplicate">
                                Duplicate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-danger" href="#delete">
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, payouts.length)} of {payouts.length} entries
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

      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className={`${darkMode ? "dark-mode" : "border-none"} modal-content`}>
                <div className={`${darkMode ? "dark-mode" : ""} modal-header`}>
                  <h5 className="modal-title">Add New Payout</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className={`${darkMode ? "dark-mode" : ""} modal-body`}>
                    <PayoutForm onClose={handleCloseModal} />
                </div>
              </div>
            </div>
          </div>
          {/* Modal backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}
          ></div>
        </>
      )}
    </div>
  );
};

export default PayoutSettings;