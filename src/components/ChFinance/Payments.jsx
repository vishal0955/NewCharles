import React, { useState } from "react";

const Payments = () => {
  const statusBadge = {
    Complete: "badge bg-success",
    Pending: "badge bg-warning text-dark",
    "No Payments yet": "badge bg-secondary",
  };

  const data = [
    {
      id: 1,
      code: "EMA",
      project: "Email marketing and newsletter service",
      invoice: "INV#001",
      client: "Blaze Haag",
      order: "--",
      amount: "$11,267.00",
      paidOn: "27-01-2025",
      gateway: "Bank Transfer",
      status: "Complete",
    },
    {
      id: 2,
      code: "EPA",
      project: "Event planning and coordination service",
      invoice: "INV#002",
      client: "Kailee Kuvalis",
      order: "--",
      amount: "$39,795.00",
      paidOn: "04-01-2025",
      gateway: "Bank Transfer",
      status: "Complete",
    },
    {
      id: 3,
      code: "WAF",
      project: "Workout and fitness tracking app",
      invoice: "INV#003",
      client: "Jacey Grimes",
      order: "--",
      amount: "$14,376.00",
      paidOn: "29-01-2025",
      gateway: "Bank Transfer",
      status: "Complete",
    },
    {
      id: 4,
      code: "WAF",
      project: "Workout and fitness tracking app",
      invoice: "INV#004",
      client: "Jacey Grimes",
      order: "--",
      amount: "$49,179.00",
      paidOn: "26-01-2025",
      gateway: "Bank Transfer",
      status: "Complete",
    },
    {
      id: 5,
      code: "JBF",
      project: "Job board for remote job listings",
      invoice: "INV#005",
      client: "Mr. Gaylord Hyatt I",
      order: "--",
      amount: "$39,180.00",
      paidOn: "17-01-2025",
      gateway: "Bank Transfer",
      status: "Complete",
    },
    {
      id: 6,
      code: "OMF",
      project: "Opinion mining for social networking platforms",
      invoice: "INV#006",
      client: "Halie Wilkinson Sr.",
      order: "--",
      amount: "$44,744.00",
      paidOn: "23-01-2025",
      gateway: "Bank Transfer",
      status: "Complete",
    },
    {
      id: 7,
      code: "ALT",
      project: "Android local train ticketing system",
      invoice: "INV#007",
      client: "Laila Gerlach",
      order: "--",
      amount: "$35,940.00",
      paidOn: "03-01-2025",
      gateway: "Bank Transfer",
      status: "Complete",
    },
    {
      id: 8,
      code: "AIA",
      project: "Artificial intelligence (AI) and machine learning (ML) development service",
      invoice: "INV#008",
      client: "Jacey Grimes",
      order: "--",
      amount: "$12,474.00",
      paidOn: "23-01-2025",
      gateway: "Bank Transfer",
      status: "Complete",
    },
    {
      id: 9,
      code: "CRM",
      project: "Customer relationship management software",
      invoice: "INV#009",
      client: "Sophia Turner",
      order: "--",
      amount: "$25,000.00",
      paidOn: "15-02-2025",
      gateway: "Credit Card",
      status: "Pending",
    },
    {
      id: 10,
      code: "HRM",
      project: "Human resource management system",
      invoice: "INV#010",
      client: "William King",
      order: "--",
      amount: "$18,500.00",
      paidOn: "20-02-2025",
      gateway: "PayPal",
      status: "Complete",
    },
    {
      id: 11,
      code: "POS",
      project: "Point of sale system",
      invoice: "INV#011",
      client: "Emily Clark",
      order: "--",
      amount: "$22,300.00",
      paidOn: "10-03-2025",
      gateway: "Stripe",
      status: "Complete",
    },
    {
      id: 12,
      code: "ECS",
      project: "E-commerce store development",
      invoice: "INV#012",
      client: "James Bond",
      order: "--",
      amount: "$30,000.00",
      paidOn: "05-03-2025",
      gateway: "Bank Transfer",
      status: "Pending",
    },
    {
      id: 13,
      code: "CMS",
      project: "Content management system",
      invoice: "INV#013",
      client: "Margaret Soto",
      order: "--",
      amount: "$28,000.00",
      paidOn: "01-03-2025",
      gateway: "Credit Card",
      status: "Complete",
    },
    {
      id: 14,
      code: "ERP",
      project: "Enterprise resource planning software",
      invoice: "INV#014",
      client: "David Carmona",
      order: "--",
      amount: "$50,000.00",
      paidOn: "25-02-2025",
      gateway: "PayPal",
      status: "Complete",
    },
    {
      id: 15,
      code: "LMS",
      project: "Learning management system",
      invoice: "INV#015",
      client: "Kerry Drake",
      order: "--",
      amount: "$35,000.00",
      paidOn: "18-02-2025",
      gateway: "Stripe",
      status: "Complete",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const indexOfLastInvoice = currentPage * entriesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - entriesPerPage;
  const currentPayment = data.slice(indexOfFirstInvoice, indexOfLastInvoice);
  const totalPages = Math.ceil(data.length / entriesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  return (
    <>
      <div className="container my-4 d-flex justify-content-between align-items-center flex-wrap">
        <h2 className="mb-4 fw-bold">Payments</h2>
        <div className="d-flex flex-wrap gap-2">
          {/* Status Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-white border border-dark  px-4 py-2"
              type="button"
              data-bs-toggle="dropdown"
            >
              Payments Status <i className="bi bi-chevron-down ms-2"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item">Completed</button>
              </li>
              <li>
                <button className="dropdown-item">Pending</button>
              </li>
              <li>
                <button className="dropdown-item">No Payments yet</button>
              </li>
            </ul>
          </div>

          {/* Role Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-white border border-dark px-4 py-2"
              type="button"
              data-bs-toggle="dropdown"
            >
              Mode <i className="bi bi-chevron-down ms-2"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item">Online</button>
              </li>
              <li>
                <button className="dropdown-item">Offline</button>
              </li>
              <li>
                <button className="dropdown-item">Other</button>
              </li>
            </ul>
          </div>

          {/* Add Payments Button */}
          <button className="btn border-dark">Add Payments</button>

          {/* Export Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle border border-dark"
              data-bs-toggle="dropdown"
            >
              Export
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Export as PDF
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Export as Excel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover align-middle text-start w-100">
          <thead className="thead-light bg-light">
            <tr>
              <th scope="col" className="text-nowrap bg-light">
                <input type="checkbox" className="form-check-input " />
              </th>
              <th className="bg-light">ID</th>
              <th className="bg-light">Code</th>
              <th className="bg-light">Project</th>
              <th className="bg-light">Invoice#</th>
              <th className="bg-light">Client</th>
              <th className="bg-light">Order#</th>
              <th className="bg-light">Amount</th>
              <th className="bg-light">Paid On</th>
              <th className="bg-light">Payment Gateway</th>
              <th className="bg-light">Status</th>
              <th className="bg-light">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPayment.map((item) => (
              <tr key={item.id}>
                <td>
                  <input className="form-check-input " type="checkbox" />
                </td>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td className="text-wrap">{item.project}</td>
                <td>{item.invoice}</td>
                <td>{item.client}</td>
                <td>{item.order}</td>
                <td>{item.amount}</td>
                <td>{item.paidOn}</td>
                <td>{item.gateway}</td>
                <td>
                  <span className={statusBadge[item.status]}>{item.status}</span>
                </td>
                <td>
                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
                    <i
                      className="bi bi-pencil-square text-primary"
                      role="button"
                    ></i>
                    <i className="bi bi-trash text-danger" role="button"></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Controls */}
        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
          <div className="d-flex align-items-center mb-2">
            <span className="me-2">Show</span>
            <select
              className="form-select form-select-sm w-auto"
              value={entriesPerPage}
              onChange={handleEntriesChange}
            >
              {[5, 10, 20, 50].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <span className="ms-2">entries</span>
          </div>

          <div className="mb-2">
            Showing {indexOfFirstInvoice + 1} to{" "}
            {Math.min(indexOfLastInvoice, data.length)} of {data.length} entries
          </div>

          <nav className="mb-2">
            <ul className="pagination mb-0">
              <li
                className={`page-item ${
                  currentPage === 1 ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Payments;