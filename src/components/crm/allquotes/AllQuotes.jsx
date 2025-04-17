import React, { useState } from "react";
import { Pagination, Form } from "react-bootstrap";
import "./Quotes.css";
import CreateQuote from "./CreateQuote";
import { FaRegEye } from "react-icons/fa6";
import { useSelector } from "react-redux";
const AllQuotes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open"); // Remove modal-open class
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const [quotes] = useState([
    { quote: "#QT-2024-001", amount: "$2,500.00", status: "Pending", owner: "John Smith", created: "Jan 15, 2024" },
    { quote: "#QT-2024-002", amount: "$3,500.00", status: "Approved", owner: "Jane Doe", created: "Feb 15, 2024" },
    { quote: "#QT-2024-003", amount: "$4,000.00", status: "Rejected", owner: "James Brown", created: "Mar 15, 2024" },
    { quote: "#QT-2024-004", amount: "$1,200.00", status: "Pending", owner: "Emily Clark", created: "Apr 15, 2024" },
    { quote: "#QT-2024-005", amount: "$2,000.00", status: "Approved", owner: "Michael King", created: "May 15, 2024" },
    { quote: "#QT-2024-006", amount: "$2,800.00", status: "Pending", owner: "Olivia Scott", created: "Jun 15, 2024" },
    { quote: "#QT-2024-007", amount: "$3,100.00", status: "Approved", owner: "Daniel Harris", created: "Jul 15, 2024" },
    { quote: "#QT-2024-008", amount: "$1,500.00", status: "Pending", owner: "Sophia Lee", created: "Aug 15, 2024" },
    { quote: "#QT-2024-009", amount: "$2,700.00", status: "Rejected", owner: "Liam Walker", created: "Sep 15, 2024" },
    { quote: "#QT-2024-010", amount: "$2,400.00", status: "Pending", owner: "Amelia Green", created: "Oct 15, 2024" },
    { quote: "#QT-2024-011", amount: "$1,800.00", status: "Approved", owner: "William White", created: "Nov 15, 2024" },
    { quote: "#QT-2024-012", amount: "$2,200.00", status: "Pending", owner: "Ella Adams", created: "Dec 15, 2024" },
    { quote: "#QT-2024-013", amount: "$3,400.00", status: "Approved", owner: "Lucas Lewis", created: "Jan 10, 2025" },
    { quote: "#QT-2024-014", amount: "$2,600.00", status: "Pending", owner: "Mia Robinson", created: "Feb 20, 2025" },
    { quote: "#QT-2024-015", amount: "$3,000.00", status: "Rejected", owner: "Ethan Young", created: "Mar 25, 2025" }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedQuotes = quotes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(quotes.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="quotes-container container py-4">
        <div className="quotes-header d-flex justify-content-between align-items-center mb-4">
          <h2 className="quotes-title">All Quotes</h2>
          <div className="quotes-actions d-flex gap-3">
            <button
              className={`${
                darkMode ? "dark-mode" : null
              } inv-filter-button d-flex align-items-center gap-2`}
            >
              <i className="bi bi-upload" /> Import
            </button>
            <button
              className="inv-new-button quotes-create-btn btn d-flex align-items-center gap-2"
              onClick={handleOpenModal}
            >
              <i className="bi bi-plus-lg" /> Create quote
            </button>
          </div>
        </div>

        <div className="grid grid-row-1 md:grid-row-5 gap-4 ">
          <div className="inv-stats-grid">
            <div className={`${darkMode ? "card-dark" : null} border inv-stat-box`}>
              <div className="inv-stat-content">
                <div className="inv-stat-icon inv-stat-icon-primary">
                  <i class="bi bi-currency-pound"></i>
                </div>
                <div>
                  <div className="inv-stat-label">Total Amount Of Quotes.</div>
                  <p className="inv-stat-value">£1.18M</p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? "card-dark" : null} border inv-stat-box`}>
              <div className="inv-stat-content">
                <div className="inv-stat-icon inv-stat-icon-warning">
                  <i className="bi bi-clock" />
                </div>
                <div>
                  <div className="inv-stat-label">Quotes Per Status</div>
                  <p className="inv-stat-value">£616.62K</p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? "card-dark" : null} border inv-stat-box`}>
              <div className="inv-stat-content">
                <div className="inv-stat-icon inv-stat-icon-danger">
                  <i class="bi bi-x-circle-fill"></i>
                </div>
                <div>
                  <div className="inv-stat-label">Open Deal Amount </div>
                  <p className="inv-stat-value">£590.58K</p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? "card-dark" : null} border inv-stat-box`}>
              <div className="inv-stat-content">
                <div className="inv-stat-icon inv-stat-icon-neutral">
                  <i class="bi bi-plus-circle-fill"></i>
                </div>
                <div>
                  <div className="inv-stat-label">All Amount of Quotes</div>
                  <p className="inv-stat-value">£201.02K</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quotes Table */}
        <div className="quotes-card">
          <div className={`${darkMode ? "card-dark" : null} border quotes-card-body rounded`}>
            <div className="quotes-filters row mb-4">
              <div className="col-md-6">
                <div className="inv-search-wrapper">
                  <i className="bi bi-search inv-search-icon" />
                  <input
                    type="text"
                    className={`${darkMode ? "dark-mode" : null } inv-search-input`}
                    placeholder="Search invoices..."
                    aria-label="Search invoices"
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-end gap-3">
                <select className={`${darkMode ? "dark-mode" : null }  inv-filter-button quotes-status-select`}>
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
                <select className={`${darkMode ? "dark-mode" : null }  inv-filter-button quotes-status-select`}>
                  <option>All Users</option>
                </select>
              </div>
            </div>

            <div className="table-responsive">
              <table className={`${darkMode ? "table-dark" : null } table`}>
                <thead>
                  <tr>
                    <th style={{ width: "20px" }}>
                      <input type="checkbox" className="inv-checkbox" />
                    </th>
                    <th>Quote</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedQuotes.map((quote, index) => (
                    <tr key={index}>
                      <td>
                        <Form.Check type="checkbox" />
                        
                      </td>
                      <td>{quote.quote} </td>
                      <td><small className="text-muted">{quote.amount}</small></td>
                      <td>{quote.status}</td>
                      <td>{quote.owner}</td>
                      <td>{quote.created}</td>
                      <td>
                        <button className="btn btn-sm btn-info">
                          <FaRegEye />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, quotes.length)} of {quotes.length} entries
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
            </div>
         
          </div>
        </div>
     

      {/* Modal for Add Quote */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className=  "modal-dialog modal-xl" role="document">
              <div className={`${darkMode ? "card-dark" : null } modal-content `}>
                <div className="modal-header">
                  <h5 className="modal-title">Add New Quote</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <CreateQuote close={handleCloseModal} />
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
    </>
  );
};

export default AllQuotes;
