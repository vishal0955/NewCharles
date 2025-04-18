import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SalaryForm from "./SalaryForm";

const SalaryDisbursement = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const handleClick = () => {
    navigate("/finance/salarydetails");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const [salaries] = useState([
    {
      id: 1,
      empId: "EMP001",
      name: "John Smith",
      department: "Engineering",
      salary: "$4,500",
      paymentDate: "2025-04-01",
      status: "Paid",
    },
    {
      id: 2,
      empId: "EMP002",
      name: "Sarah Johnson",
      department: "Marketing",
      salary: "$3,800",
      paymentDate: "2025-04-01",
      status: "Paid",
    },
    {
      id: 3,
      empId: "EMP003",
      name: "Michael Brown",
      department: "Finance",
      salary: "$5,200",
      paymentDate: "2025-04-03",
      status: "Paid",
    },
    {
      id: 4,
      empId: "EMP004",
      name: "Emily Davis",
      department: "Human Resources",
      salary: "$3,900",
      paymentDate: "2025-04-01",
      status: "Paid",
    },
    {
      id: 5,
      empId: "EMP005",
      name: "David Wilson",
      department: "Operations",
      salary: "$4,100",
      paymentDate: "2025-04-05",
      status: "Unpaid",
    },
    {
      id: 6,
      empId: "EMP006",
      name: "Jessica Taylor",
      department: "Customer Support",
      salary: "$3,600",
      paymentDate: "2025-04-05",
      status: "Unpaid",
    },
    {
      id: 7,
      empId: "EMP007",
      name: "Ryan Martinez",
      department: "Engineering",
      salary: "$4,800",
      paymentDate: "2025-04-05",
      status: "Unpaid",
    },
    {
      id: 8,
      empId: "EMP008",
      name: "Lauren Anderson",
      department: "Marketing",
      salary: "$3,700",
      paymentDate: "2025-04-10",
      status: "Unpaid",
    },
    {
      id: 9,
      empId: "EMP009",
      name: "Kevin Thomas",
      department: "IT Support",
      salary: "$4,300",
      paymentDate: "2025-04-10",
      status: "Unpaid",
    },
    {
      id: 10,
      empId: "EMP010",
      name: "Amanda Garcia",
      department: "Sales",
      salary: "$4,500",
      paymentDate: "2025-04-10",
      status: "Unpaid",
    },
    {
      id: 11,
      empId: "EMP011",
      name: "Jason Rodriguez",
      department: "Product",
      salary: "$5,100",
      paymentDate: "2025-04-15",
      status: "Scheduled",
    },
    {
      id: 12,
      empId: "EMP012",
      name: "Melissa Lee",
      department: "Design",
      salary: "$4,200",
      paymentDate: "2025-04-15",
      status: "Scheduled",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedSalaries = salaries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(salaries.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [selectedView, setSelectedView] = useState("all-salaries");

  const views = [
    { id: "all-salaries", name: "All Salaries" },
    { id: "paid", name: "Paid" },
    { id: "unpaid", name: "Unpaid" },
    { id: "scheduled", name: "Scheduled" },
    { id: "recent-disbursements", name: "Recent Disbursements" },
  ];

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
      <div className="d-flex justify-content-between mb-4 gap-2 gap-md-0">
        <div className="align-items-center">
          <h4 className="mb-0 me-2">Salary Disbursement</h4>
        </div>

<div className="d-flex gap-2">
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
              <a className="dropdown-item" href="#export-excel">
                Export to Excel
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#export-pdf">
                Export to PDF
              </a>
            </li>
          </ul>
         
        </div>
        <button className="btn inv-new-button order-sm-2" onClick={handleOpenModal}>
            + Add Salary
          </button>
          </div>
      </div>

      {/* Metrics Cards */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : null} inv-stat-box h-100`}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-primary">
                <i className="fa-solid fa-money-bill-wave"></i>
              </div>
              <div>
                <div className="inv-stat-label">Total Disbursements</div>
                <p className="inv-stat-value">$52,400</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : null} inv-stat-box h-100`}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-success">
                <i className="fa-solid fa-check-circle"></i>
              </div>
              <div>
                <div className="inv-stat-label">Paid Salaries</div>
                <p className="inv-stat-value">$17,400</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : null} inv-stat-box h-100`}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-danger">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div>
                <div className="inv-stat-label">Pending Payments</div>
                <p className="inv-stat-value">$25,800</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : null} inv-stat-box h-100`}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-warning">
                <i className="fa-solid fa-calendar"></i>
              </div>
              <div>
                <div className="inv-stat-label">Scheduled Payments</div>
                <p className="inv-stat-value">$9,200</p>
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
            className={`${darkMode ? "card-dark" : null} btn btn-sm ${
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
      <div className={`${darkMode ? "dark-mode" : null} card inv-main-card mb-4`}>
        <div className="card-body">
          <div className="row g-2 mb-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="inv-search-wrapper">
                <i className="bi bi-search inv-search-icon" />
                <input
                  type="text"
                  className={`${darkMode ? "dark-mode" : null} inv-search-input h-11`}
                  placeholder="Search Employees..."
                  aria-label="Search Employees"
                />
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : null} inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Department
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#engineering">
                      Engineering
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#marketing">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#finance">
                      Finance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#hr">
                      Human Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : null} inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Payment Date
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#today">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#this-week">
                      This Week
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#this-month">
                      This Month
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : null} inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Status
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#paid">
                      Paid
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#unpaid">
                      Unpaid
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#scheduled">
                      Scheduled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : null} inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Salary Range
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#range1">
                      $3,000 - $4,000
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#range2">
                      $4,000 - $5,000
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#range3">
                      $5,000+
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className={`${darkMode ? "table-dark" : null} table inv-table`}>
              <thead>
                <tr className={`${darkMode ? "dark-mode" : null}`}>
                  <th style={{ width: "20px" }}>
                    <input
                      type="checkbox"
                      className="inv-checkbox"
                      id="selectAll"
                    />
                  </th>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th className="d-none d-md-table-cell">Department</th>
                  <th>Salary</th>
                  <th className="d-none d-lg-table-cell">Payment Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedSalaries.map((salary) => (
                  <tr key={salary.id}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>
                    <td>{salary.empId}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="contact-avatar me-2">
                          {salary.name.charAt(0)}
                        </div>
                        <span className="d-inline-block text-truncate" style={{maxWidth: '150px'}} onClick={handleClick}>
                          {salary.name}
                        </span>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">{salary.department}</td>
                    <td>{salary.salary}</td>
                    <td className="d-none d-lg-table-cell">{salary.paymentDate}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(salary.status)}`}>
                        {salary.status}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary" onClick={handleClick}>
                          <i className="fa-solid fa-eye"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-secondary" onClick={handleOpenModal}>
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <i className="fa-solid fa-ellipsis-v"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#export-pdf">Export PDF</a></li>
                            <li><a className="dropdown-item" href="#send-email">Send Email</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item text-danger" href="#delete">Delete</a></li>
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
          {Math.min(indexOfLastItem, salaries.length)} of {salaries.length} entries
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
                <div className={`${darkMode ? "dark-mode" : null} modal-header`}>
                  <h5 className="modal-title">Add/Edit Salary Information</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className={`${darkMode ? "dark-mode" : null} modal-body`}>
                  <SalaryForm handleClose={handleCloseModal} />
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

export default SalaryDisbursement;