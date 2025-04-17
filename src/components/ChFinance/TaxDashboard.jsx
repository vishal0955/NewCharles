import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { useNavigate } from "react-router-dom";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const TaxDashboard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTax, setEditingTax] = useState(null);
  const darkMode = useSelector((state) => state.theme?.isDarkMode) || false;

  // Tax data state
  const [taxes] = useState([
    {
      id: 1,
      taxId: "TX-2025-001",
      type: "Income Tax",
      amount: 2450.00,
      dueDate: "2025-04-15",
      paidStatus: "Paid",
      paidDate: "2025-03-20",
      taxYear: "2024"
    },
    {
      id: 2,
      taxId: "TX-2025-002",
      type: "Property Tax",
      amount: 1820.50,
      dueDate: "2025-06-30",
      paidStatus: "Pending",
      paidDate: null,
      taxYear: "2025"
    },
    {
      id: 3,
      taxId: "TX-2025-003",
      type: "Sales Tax",
      amount: 935.25,
      dueDate: "2025-05-20",
      paidStatus: "Overdue",
      paidDate: null,
      taxYear: "2025"
    },
    {
      id: 4,
      taxId: "TX-2025-004",
      type: "Payroll Tax",
      amount: 3270.00,
      dueDate: "2025-04-30",
      paidStatus: "Paid",
      paidDate: "2025-04-15",
      taxYear: "2025"
    },
    {
      id: 5,
      taxId: "TX-2025-005",
      type: "Capital Gains",
      amount: 1540.75,
      dueDate: "2025-04-15",
      paidStatus: "Paid",
      paidDate: "2025-04-01",
      taxYear: "2024"
    },
    {
      id: 6,
      taxId: "TX-2025-006",
      type: "Corporate Tax",
      amount: 5690.50,
      dueDate: "2025-03-15",
      paidStatus: "Paid",
      paidDate: "2025-03-10",
      taxYear: "2024"
    },
    {
      id: 7,
      taxId: "TX-2025-007",
      type: "VAT",
      amount: 1875.30,
      dueDate: "2025-07-31",
      paidStatus: "Pending",
      paidDate: null,
      taxYear: "2025"
    },
    {
      id: 8,
      taxId: "TX-2025-008",
      type: "Excise Tax",
      amount: 745.60,
      dueDate: "2025-05-15",
      paidStatus: "Pending",
      paidDate: null,
      taxYear: "2025"
    },
    {
      id: 9,
      taxId: "TX-2025-009",
      type: "Income Tax",
      amount: 3120.00,
      dueDate: "2025-04-15",
      paidStatus: "Paid",
      paidDate: "2025-02-28",
      taxYear: "2024"
    },
    {
      id: 10,
      taxId: "TX-2025-010",
      type: "Property Tax",
      amount: 2250.75,
      dueDate: "2025-08-31",
      paidStatus: "Pending",
      paidDate: null,
      taxYear: "2025"
    }
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedTaxes = taxes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(taxes.length / itemsPerPage);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTaxType, setSelectedTaxType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Tax Payments',
        data: [3500, 2900, 4800, 3200, 5100, 4300],
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.2)',
        fill: true,
      },
      {
        label: 'Tax Liabilities',
        data: [4200, 3800, 5500, 3900, 5800, 4700],
        borderColor: '#dc3545',
        backgroundColor: 'rgba(220, 53, 69, 0.2)',
        fill: true,
      }
    ]
  };

  const pieData = {
    labels: ['Income Tax', 'Property Tax', 'Sales Tax', 'Payroll Tax', 'Other'],
    datasets: [
      {
        data: [30, 25, 15, 20, 10],
        backgroundColor: [
          '#0d6efd',
          '#6c757d',
          '#198754',
          '#dc3545',
          '#fd7e14'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Handler functions
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOpenModal = (tax = null) => {
    setEditingTax(tax);
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTax(null);
    document.body.classList.remove("modal-open");
  };

  const handleExport = (format) => {
    alert(`Exporting tax data as ${format}...`);
    // Implementation for export functionality would go here
  };

  // Computed values for dashboard metrics
  const totalTaxAmount = taxes.reduce((sum, tax) => sum + tax.amount, 0).toFixed(2);
  const paidTaxAmount = taxes
    .filter(tax => tax.paidStatus === "Paid")
    .reduce((sum, tax) => sum + tax.amount, 0)
    .toFixed(2);
  const pendingTaxAmount = taxes
    .filter(tax => tax.paidStatus === "Pending")
    .reduce((sum, tax) => sum + tax.amount, 0)
    .toFixed(2);
  const overdueTaxAmount = taxes
    .filter(tax => tax.paidStatus === "Overdue")
    .reduce((sum, tax) => sum + tax.amount, 0)
    .toFixed(2);

  return (
    <div className="container-fluid px-3 px-md-4 py-3">
      <div className="d-flex justify-content-between mb-4 gap-2 gap-md-0">
        <div className="align-items-center">
          <h4 className="mb-0 me-2">Tax Dashboard</h4>
        </div>
        
        <div className="dropdown order-sm-1 d-flex gap-1">
          <div className="dropdown">
            <button
              className="inv-filter-button dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Export
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={() => handleExport('PDF')}>
                  Export as PDF
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => handleExport('Excel')}>
                  Export as Excel
                </button>
              </li>
            </ul>
          </div>
          <button className="inv-new-button order-sm-2" onClick={() => handleOpenModal()}>
            + Add New Tax
          </button>
        </div>
      </div>
      
      {/* Metrics Cards */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : ""} inv-stat-box h-100`}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-primary">
                <i className="fa-solid fa-file-invoice-dollar"></i>
              </div>
              <div>
                <div className="inv-stat-label">Total Tax Liability</div>
                <p className="inv-stat-value">${totalTaxAmount}</p>
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
                <div className="inv-stat-label">Paid Taxes</div>
                <p className="inv-stat-value">${paidTaxAmount}</p>
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
                <div className="inv-stat-label">Pending Taxes</div>
                <p className="inv-stat-value">${pendingTaxAmount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : ""} inv-stat-box h-100`}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-danger">
                <i className="fa-solid fa-exclamation-triangle"></i>
              </div>
              <div>
                <div className="inv-stat-label">Overdue Taxes</div>
                <p className="inv-stat-value">${overdueTaxAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-lg-8">
          <div className={`${darkMode ? "card-dark" : ""} card inv-main-card h-100`}>
            <div className="card-header bg-transparent">
              <h5 className="mb-0">Tax Payments Over Time</h5>
            </div>
            <div className="card-body">
              <div style={{ height: "300px" }}>
                <Chart type="line" data={chartData} options={{ 
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className={`${darkMode ? "card-dark" : ""} card inv-main-card h-100`}>
            <div className="card-header bg-transparent">
              <h5 className="mb-0">Tax Breakdown</h5>
            </div>
            <div className="card-body d-flex justify-content-center align-items-center">
              <div style={{ height: "250px", width: "250px" }}>
                <Chart type="pie" data={pieData} options={{ 
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'right',
                    },
                  },
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tax List Table */}
      <div className={`${darkMode ? "dark-mode" : ""} card inv-main-card mb-4`}>
        <div className="card-body">
          <div className="row g-2 mb-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="inv-search-wrapper">
                <i className="bi bi-search inv-search-icon"></i>
                <input
                  type="text"
                  className={`${darkMode ? "dark-mode" : ""} inv-search-input h-11`}
                  placeholder="Search taxes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                  {selectedTaxType === "All" ? "Tax Type" : selectedTaxType}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedTaxType("All")}>
                      All Types
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedTaxType("Income Tax")}>
                      Income Tax
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedTaxType("Property Tax")}>
                      Property Tax
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedTaxType("Sales Tax")}>
                      Sales Tax
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedTaxType("Payroll Tax")}>
                      Payroll Tax
                    </button>
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
                  {selectedStatus === "All" ? "Payment Status" : selectedStatus}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedStatus("All")}>
                      All Statuses
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedStatus("Paid")}>
                      Paid
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedStatus("Pending")}>
                      Pending
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedStatus("Overdue")}>
                      Overdue
                    </button>
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
                  <th>Tax ID</th>
                  <th>Type</th>
                  <th>Amount ($)</th>
                  <th className="d-none d-md-table-cell">Due Date</th>
                  <th className="d-none d-sm-table-cell">Status</th>
                  <th className="d-none d-lg-table-cell">Tax Year</th>
                  <th className="d-none d-xl-table-cell">Payment Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTaxes.map((tax) => (
                  <tr key={tax.id}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>
                    <td>{tax.taxId}</td>
                    <td>{tax.type}</td>
                    <td>${tax.amount.toFixed(2)}</td>
                    <td className="d-none d-md-table-cell">{tax.dueDate}</td>
                    <td className="d-none d-sm-table-cell">
                      <span className={`badge ${
                        tax.paidStatus === "Paid" 
                          ? "bg-success" 
                          : tax.paidStatus === "Pending" 
                          ? "bg-warning text-dark" 
                          : "bg-danger"
                      }`}>
                        {tax.paidStatus}
                      </span>
                    </td>
                    <td className="d-none d-lg-table-cell">{tax.taxYear}</td>
                    <td className="d-none d-xl-table-cell">{tax.paidDate || "—"}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button 
                          className="btn btn-sm btn-outline-primary" 
                          onClick={() => handleOpenModal(tax)}
                          title="Edit"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-info" 
                          title="View"
                          onClick={() => navigate("/finance/taxdetails")}
                        >
                          <i className="bi bi-eye"></i>
                        </button>
                        <div className="dropdown d-inline-block">
                          <button 
                            className="btn btn-sm btn-outline-secondary dropdown-toggle" 
                            type="button" 
                            data-bs-toggle="dropdown"
                            title="More"
                          >
                            <i className="bi bi-three-dots"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button className="dropdown-item">
                                Download Receipt
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item">
                                Archive
                              </button>
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

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, taxes.length)} of {taxes.length} entries
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

      {/* Modal for Tax Form */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className={`${darkMode ? "dark-mode" : "border-none"} modal-content`}>
                <div className={`${darkMode ? "dark-mode" : ""} modal-header`}>
                  <h5 className="modal-title">{editingTax ? "Edit Tax" : "Add New Tax"}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className={`${darkMode ? "dark-mode" : ""} modal-body`}>
                  <form>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="taxId" className="form-label">Tax ID</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="taxId" 
                          defaultValue={editingTax?.taxId || "TX-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000)}
                          readOnly
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="taxType" className="form-label">Tax Type</label>
                        <select 
                          className="form-select" 
                          id="taxType"
                          defaultValue={editingTax?.type || ""}
                        >
                          <option value="">Select Tax Type</option>
                          <option value="Income Tax">Income Tax</option>
                          <option value="Property Tax">Property Tax</option>
                          <option value="Sales Tax">Sales Tax</option>
                          <option value="Payroll Tax">Payroll Tax</option>
                          <option value="Corporate Tax">Corporate Tax</option>
                          <option value="Capital Gains">Capital Gains</option>
                          <option value="VAT">VAT</option>
                          <option value="Excise Tax">Excise Tax</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="amount" className="form-label">Amount ($)</label>
                        <input 
                          type="number" 
                          className="form-control" 
                          id="amount"
                          step="0.01"
                          min="0"
                          defaultValue={editingTax?.amount || ""}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="taxYear" className="form-label">Tax Year</label>
                        <select 
                          className="form-select" 
                          id="taxYear"
                          defaultValue={editingTax?.taxYear || new Date().getFullYear().toString()}
                        >
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="dueDate" className="form-label">Due Date</label>
                        <input 
                          type="date" 
                          className="form-control" 
                          id="dueDate"
                          defaultValue={editingTax?.dueDate || ""}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="status" className="form-label">Payment Status</label>
                        <select 
                          className="form-select" 
                          id="status"
                          defaultValue={editingTax?.paidStatus || "Pending"}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Paid">Paid</option>
                          <option value="Overdue">Overdue</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="paidDate" className="form-label">Payment Date</label>
                        <input 
                          type="date" 
                          className="form-control" 
                          id="paidDate"
                          defaultValue={editingTax?.paidDate || ""}
                          disabled={editingTax?.paidStatus !== "Paid" && !editingTax}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                        <select 
                          className="form-select" 
                          id="paymentMethod"
                          disabled={editingTax?.paidStatus !== "Paid" && !editingTax}
                        >
                          <option value="">Select Payment Method</option>
                          <option value="Bank Transfer">Bank Transfer</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="Check">Check</option>
                          <option value="Cash">Cash</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="notes" className="form-label">Notes</label>
                      <textarea 
                        className="form-control" 
                        id="notes" 
                        rows="3"
                        defaultValue={editingTax?.notes || ""}
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end gap-2">
                      <button 
                        type="button" 
                        className="btn btn-secondary" 
                        onClick={handleCloseModal}
                      >
                        Cancel
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={handleCloseModal}
                      >
                        {editingTax ? "Update Tax" : "Save Tax"}
                      </button>
                    </div>
                  </form>
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

export default TaxDashboard;