import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { 
  FaPlus, 
  FaFilter, 
  FaDownload, 
  FaPen, 
  FaTrash, 
  FaRegEye,
  FaMoneyBill,
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaBars,
  FaTh
} from "react-icons/fa";

import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";

const statusBadge = {
  Accepted: "badge bg-success",
  Pending: "badge bg-danger text-light ",
  Rejected: "badge bg-warning text-dark",
  "No Interview yet": "badge bg-secondary",
};

const invoices = [
  { code: "INV-001", invoice: "Website Development", project: "Project Alpha", client: "John Doe", total: "$5,000", date: "12 Sep 2024", status: "Pending" },
  { code: "INV-002", invoice: "Mobile App Design", project: "Project Beta", client: "Jane Smith", total: "$3,000", date: "14 Sep 2024", status: "Accepted" },
  { code: "INV-003", invoice: "Backend API Development", project: "Project Gamma", client: "Mike Johnson", total: "$4,500", date: "16 Sep 2024", status: "Rejected" },
  { code: "INV-004", invoice: "Frontend Development", project: "Project Delta", client: "Emily Davis", total: "$6,000", date: "18 Sep 2024", status: "Pending" },
  { code: "INV-005", invoice: "QA Testing", project: "Project Epsilon", client: "Robert Wilson", total: "$2,500", date: "20 Sep 2024", status: "Accepted" },
  { code: "INV-006", invoice: "Project Management", project: "Project Zeta", client: "Laura Lee", total: "$7,000", date: "22 Sep 2024", status: "Pending" },
  { code: "INV-007", invoice: "DevOps Setup", project: "Project Eta", client: "Chris Brown", total: "$8,000", date: "24 Sep 2024", status: "Rejected" },
  { code: "INV-008", invoice: "Graphic Design", project: "Project Theta", client: "Sophia White", total: "$3,500", date: "26 Sep 2024", status: "Accepted" },
  { code: "INV-009", invoice: "Cloud Architecture", project: "Project Iota", client: "Daniel Miller", total: "$9,000", date: "28 Sep 2024", status: "Pending" },
  { code: "INV-010", invoice: "HR Management", project: "Project Kappa", client: "Olivia Clark", total: "$4,000", date: "30 Sep 2024", status: "Accepted" },
  { code: "INV-011", invoice: "Android Development", project: "Project Lambda", client: "Ethan Moore", total: "$5,500", date: "02 Oct 2024", status: "Pending" },
  { code: "INV-012", invoice: "Product Ownership", project: "Project Mu", client: "Ava Scott", total: "$6,500", date: "04 Oct 2024", status: "Rejected" },
  { code: "INV-013", invoice: "System Analysis", project: "Project Nu", client: "Lucas Turner", total: "$7,500", date: "06 Oct 2024", status: "Accepted" },
  { code: "INV-014", invoice: "Marketing Campaign", project: "Project Xi", client: "Mia Perez", total: "$3,000", date: "08 Oct 2024", status: "Pending" },
  { code: "INV-015", invoice: "Technical Support", project: "Project Omicron", client: "William Young", total: "$2,000", date: "10 Oct 2024", status: "Accepted" },
];

export const InvoicesList = () => {
const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const indexOfLastInvoice = currentPage * entriesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - entriesPerPage;
  const currentInvoices = invoices.slice(indexOfFirstInvoice, indexOfLastInvoice);
  const totalPages = Math.ceil(invoices.length / entriesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-0">Invoices</h3>
        <div className="d-flex flex-wrap gap-2">
          {/* <div className="dropdown">
            <button className="btn btn-white border border-dark px-4 py-2" type="button" data-bs-toggle="dropdown">
              Recurring Invoice <i className="bi ms-2"></i>
            </button>
          </div> */}
          {/* <div className="dropdown">
            <button className="btn btn-white border border-dark px-4 py-2" type="button" data-bs-toggle="dropdown">
              Create TimeLog Invoice <i className="bi ms-2"></i>
            </button>
          </div> */}
          <div className="d-flex gap-2">
          <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Export
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Export as PDF</a></li>
                <li><a className="dropdown-item" href="#">Export as Excel</a></li>
              </ul>
            </div>
            <Link to="/finance/invoiceform" >
            <button className="btn inv-new-button" >Create Invoice</button>
            </Link>
           
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="text-primary fs-4 me-3">
                  <FaMoneyBill />
                </div>
                <div>
                  <div className="text-muted small">Total Invoices</div>
                  <p className="fs-5 fw-semibold mb-0">23</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="text-success fs-4 me-3">
                <FaCalendarAlt />
                </div>
                <div>
                  <div className="text-muted small">Pending</div>
                  <p className="fs-5 fw-semibold mb-0">10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="text-danger fs-4 me-3">
                 
                  <FaCheckCircle />
                </div>
                <div>
                  <div className="text-muted small">Accepted</div>
                  <p className="fs-5 fw-semibold mb-0">6</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="text-warning fs-4 me-3">
                 
                  <FaTimesCircle />
                </div>
                <div>
                  <div className="text-muted small">Rejected</div>
                  <p className="fs-5 fw-semibold mb-0">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle border-0">
          <thead className="table-light border-0">
            <tr>
              <th className="border-0"><Form.Check type="checkbox" /></th>
              <th className="border-0">Code</th>
              <th className="border-0">Invoice</th>
              <th className="border-0">Project</th>
              <th className="border-0">Client</th>
              <th className="border-0">Total</th>
              <th className="border-0">Invoice date</th>
              <th className="border-0">Status</th>
              <th className="border-0">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentInvoices.map((invoice, idx) => (
              <tr key={idx}>
                <td className="border-0"><Form.Check type="checkbox" /></td>
                <td className="border-0">{invoice.code}</td>
              
                <td className="border-0" style={{cursor: "pointer"}} onClick={() => navigate("/finance/invoice")}>{invoice.invoice}</td>
                <td className="border-0">{invoice.project}</td>
                <td className="border-0">{invoice.client}</td>
                <td className="border-0">{invoice.total}</td>
                <td className="border-0">{invoice.date}</td>
                <td className="border-0"><span className={statusBadge[invoice.status]}>{invoice.status}</span></td>
                <td className="border-0">
                  <Button variant="link" className="p-0 me-2 text-primary"><BsPencilSquare /></Button>
                  <Button variant="link" className="p-0 text-danger"><BsTrash /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Footer Controls */}
      <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
        <div className="d-flex align-items-center mb-2">
          <span className="me-2">Show</span>
          <Form.Select value={entriesPerPage} onChange={(e) => { setEntriesPerPage(Number(e.target.value)); setCurrentPage(1); }} style={{ width: "80px" }}>
            {[5, 10, 20, 50].map((num) => <option key={num} value={num}>{num}</option>)}
          </Form.Select>
          <span className="ms-2">entries</span>
        </div>

        <div className="mb-2 ">
          Showing {indexOfFirstInvoice + 1} to {Math.min(indexOfLastInvoice, invoices.length)} of {invoices.length} entries
        </div>

        <nav className="mb-2">
          <ul className="pagination mb-0 me-4">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      </div>
      </div>

      
    </div>
  );
};

export default InvoicesList;