import React, { useState } from "react";
import CreatePayment from "./CreatePayment";
import { useSelector } from "react-redux";
import { Pagination } from "react-bootstrap";

const PaymentList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const payment = [
    {
      linkName: "Premium Package",
      linkItem: "3 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
    {
      linkName: "Bacis Plan",
      linkItem: "1 Items",
      total: "£49.99",
      lastModified: "2024-01-14",
      views: 200,
      checkouts: 67,
      conversionRate: "35.3%",
    },
    {
      linkName: "Premium Package",
      linkItem: "3 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
    {
      linkName: "Basic Plan",
      linkItem: "3 Items",
      total: "£99.99",
      lastModified: "2024-01-13",
      views: 250,
      checkouts: 79,
      conversionRate: "36.3%",
    },
    {
      linkName: "Premium Package",
      linkItem: "3 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
    {
      linkName: "Basic Plan",
      linkItem: "4 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 399,
      checkouts: 99,
      conversionRate: "56.3%",
    },
    {
      linkName: "Premium Package",
      linkItem: "3 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
    {
      linkName: "Bacis Plan",
      linkItem: "2 Items",
      total: "£49.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
    {
      linkName: "Premium Package",
      linkItem: "3 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 189,
      checkouts: 89,
      conversionRate: "35.3%",
    },
    {
      linkName: "Premium Package",
      linkItem: "3 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
    {
      linkName: "Bacis Plan",
      linkItem: "3 Items",
      total: "£109.99",
      lastModified: "2024-01-15",
      views: 290,
      checkouts: 59,
      conversionRate: "69.3%",
    },
    {
      linkName: "Premium Package",
      linkItem: "3 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
    {
      linkName: "Premium Plan",
      linkItem: "5 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
    {
      linkName: "Bacis Plan",
      linkItem: "3 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
    {
      linkName: "Premium Package",
      linkItem: "3 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
    {
      linkName: "Premium Package",
      linkItem: "3 Items",
      total: "£199.99",
      lastModified: "2024-01-15",
      views: 295,
      checkouts: 89,
      conversionRate: "36.3%",
    },
  ];

  const [tasks, setTasks] = useState(payment);
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
      <div className="container py-4">
        {/* Header - Improved responsive layout */}
        <div
          className={`${
            darkMode ? "dark-mode" : null
          } d-flex flex-column flex-md-row   align-items-start align-items-md-center mb-4 gap-3 gap-md-0`}
        >
          <div>
            {" "}
            <h4 className="mb-0  ">Payment Links</h4>
          </div>
          <div className="d-flex flex-column flex-sm-row gap-3 w-100 w-md-auto justify-content-end">
            <a href="#" className="btn inv-filter-button">
              Go to Commerce
            </a>
            <button
              type="button"
              className="btn inv-new-button"
              onClick={handleOpenModal}
            >
              <i className="bi bi-plus-lg me-2" />
              Create Payment Link
            </button>
          </div>
        </div>

        <div className="shadow-sm">
          {/* Payment Links Card */}
          <div className="inv-main-card">
            <div className={`${darkMode ? "dark-mode" : null} border inv-card-header`}>
              <div className="d-flex justify-content-between align-items-center">
           
              </div>

              {/* Search and Filter - Improved responsive layout */}
              <div className="row mt-4">
                <div className="col-12 col-md-8 mb-3 mb-md-0">
                  <div className="inv-search-wrapper">
                    <i className="bi bi-search inv-search-icon" />
                    <input
                      type="text"
                      className={`${
                        darkMode ? "dark-mode" : null
                      } inv-search-input`}
                      placeholder="Search invoices..."
                      aria-label="Search invoices"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-2">
                  <div className="dropdown w-100">
                    <button
                      className={`${
                        darkMode ? "dark-mode" : null
                      } btn inv-filter-button w-100 d-flex justify-content-between align-items-center`}
                      data-bs-toggle="dropdown"
                    >
                      <span className="text-truncate">Status: All</span>
                      <i className="bi bi-chevron-down" />
                    </button>
                    <ul className="dropdown-menu w-100">
                      <li>
                        <a className="dropdown-item" href="#">
                          All
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Active
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Inactive
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-2 text-end">
                  <button
                    className={`${
                      darkMode ? "dark-mode" : null
                    } btn inv-filter-button w-100`}
                  >
                    <i className="bi bi-funnel me-2" />
                    <span className="d-none d-md-inline">Filters</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Table - Made more responsive */}
            <div className=" table-responsive">
              <table
                className={`${darkMode ? "table-dark" : null} table w-100`}
              >
                <thead>
                  <tr>
                    <th style={{ width: "20px" }}>
                      <input
                        type="checkbox"
                        className="inv-checkbox"
                        id="selectAll"
                      />
                    </th>
                    <th>Link Name</th>
                    <th className="d-none d-md-table-cell">Line Items</th>
                    <th>Total</th>
                    <th className="d-none d-lg-table-cell">Last Modified</th>
                    <th>Views</th>
                    <th className="d-none d-sm-table-cell">Checkouts</th>
                    <th className="d-none d-xl-table-cell">Conversion Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedDesignations.map((payment) => (
                    <tr key={payment.id}>
                      <td>
                        <input type="checkbox" className="form-check-input" />
                      </td>
                      <td>{payment.linkName}</td>
                      <td>
                        <div className="inv-client-wrapper d-flex align-items-center">
                          {payment.linkItem}
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="inv-client-info">{payment.total}</div>
                      </td>
                      <td>
                        <div className="inv-client-email text-muted small">
                          {payment.lastModified}
                        </div>
                      </td>
                      <td className="fw-semibold">{payment.views}</td>
                      <td>{payment.checkouts}</td>
                      <td>{payment.conversionRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
           <div>
             Showing {indexOfFirstItem + 1} to{" "}
             {Math.min(indexOfLastItem, payment.length)} of {payment.length} entries
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

      {/* Modal */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div
              className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Payment</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <CreatePayment />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}
          ></div>
        </>
      )}
    </>
  );
};

export default PaymentList;
