import React, { useState, useEffect } from "react";
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
import { Link, useLocation } from "react-router-dom";
import AddExpenseModal from "./AddExpenseModal"; // You'll need to create this component

const ExpenseList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([
    {
      id: "EXP001",
      category: "Office Supplies",
      description: "Printer paper and ink cartridges",
      amount: 149.99,
      date: "2025-04-10",
      vendor: "Office Depot",
      paymentMethod: "Credit Card",
      status: "Paid",
    },
    {
      id: "EXP002",
      category: "Travel",
      description: "Business trip to Chicago",
      amount: 785.50,
      date: "2025-04-05",
      vendor: "Airlines Inc.",
      paymentMethod: "Company Card",
      status: "Paid",
    },
    {
      id: "EXP003",
      category: "Utilities",
      description: "Monthly internet service",
      amount: 89.99,
      date: "2025-04-15",
      vendor: "ISP Provider",
      paymentMethod: "Bank Transfer",
      status: "Unpaid",
    },
    {
      id: "EXP004",
      category: "Software",
      description: "Annual subscription",
      amount: 599.00,
      date: "2025-03-28",
      vendor: "Adobe",
      paymentMethod: "Credit Card",
      status: "Paid",
    },
  ]);
  const [editExpense, setEditExpense] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeButton, setActiveButton] = useState("list");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const location = useLocation();

  useEffect(() => {
    setActiveButton(location.pathname === "/expenselist" ? "list" : "grid");
  }, [location]);

  // Add or Edit Expense
  const handleSaveExpense = (expenseData) => {
    console.log("Expense Data Received:", expenseData);

    const newId = `EXP${expenses.length + 1}`.padStart(6, '0');

    const newExpense = {
      id: newId,
      category: expenseData.category || "Miscellaneous",
      description: expenseData.description || "Not Provided",
      amount: parseFloat(expenseData.amount) || 0.00,
      date: expenseData.date || new Date().toISOString().split("T")[0],
      vendor: expenseData.vendor || "Not Provided",
      paymentMethod: expenseData.paymentMethod || "Cash",
      status: expenseData.status || "Unpaid",
    };

    if (editExpense) {
      setExpenses((prev) =>
        prev.map((exp) =>
          exp.id === editExpense.id ? { ...exp, ...newExpense } : exp
        )
      );
    } else {
      setExpenses((prev) => [...prev, newExpense]);
    }

    setEditExpense(null);
    setModalOpen(false);
  };

  // Delete Expense
  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  // Open Edit Modal
  const handleEditExpense = (expense) => {
    setEditExpense(expense);
    setModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter expenses based on search and filters
  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          expense.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          expense.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory ? expense.category === filterCategory : true;
    const matchesStatus = filterStatus ? expense.status === filterStatus : true;
    
    let matchesDate = true;
    if (dateRange.start && dateRange.end) {
      const expenseDate = new Date(expense.date);
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      matchesDate = expenseDate >= startDate && expenseDate <= endDate;
    }
    
    return matchesSearch && matchesCategory && matchesStatus && matchesDate;
  });

  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const paidExpenses = expenses.filter(exp => exp.status === "Paid").reduce((sum, exp) => sum + exp.amount, 0);
  const unpaidExpenses = expenses.filter(exp => exp.status === "Unpaid").reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="bg-gray-50 font-sans flex flex-col items-center overflow-x-hidden">
      <div className="container rounded-lg p-2 mx-auto">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Expense List
            </h1>
        
          </div>
          <div className="d-flex gap-2 mt-3 mt-sm-0">
            {/* <Link to={"/expenselist"}>
              <button
                className={`btn ${
                  activeButton === "list"
                    ? "btn-dark"
                    : "btn-outline-dark"
                }`}
              >
                <FaBars />
              </button>
            </Link>

            <Link to={"/expensegrid"}>
              <button
                className={`btn ${
                  activeButton === "grid"
                    ? "btn-dark"
                    : "btn-outline-dark"
                }`}
              >
                <FaTh />
              </button>
            </Link> */}

            <button
              onClick={() => {
                setEditExpense(null);
                setModalOpen(true);
              }}
              className="btn btn-primary d-flex align-items-center"
            >
              <FaPlus className="me-2" /> Add Expense
            </button>
            <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Export
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Export as PDF</a></li>
                <li><a className="dropdown-item" href="#">Export as Excel</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Cards Section */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="text-primary fs-4 me-3">
                  <FaMoneyBill />
                </div>
                <div>
                  <div className="text-muted small">Total Expenses</div>
                  <p className="fs-5 fw-semibold mb-0">${totalExpenses.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="text-success fs-4 me-3">
                  <FaCheckCircle />
                </div>
                <div>
                  <div className="text-muted small">Paid</div>
                  <p className="fs-5 fw-semibold mb-0">${paidExpenses.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="text-danger fs-4 me-3">
                  <FaTimesCircle />
                </div>
                <div>
                  <div className="text-muted small">Unpaid</div>
                  <p className="fs-5 fw-semibold mb-0">${unpaidExpenses.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="text-warning fs-4 me-3">
                  <FaCalendarAlt />
                </div>
                <div>
                  <div className="text-muted small">This Month</div>
                  <p className="fs-5 fw-semibold mb-0">{expenses.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row mb-4 g-3">
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Expenses..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-md-end gap-2 flex-wrap">
              <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Status
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Unpaid</a></li>
                <li><a className="dropdown-item" href="#">Paid</a></li>
              </ul>
            </div>
                
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Expense ID</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Vendor</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredExpenses.map((expense) => (
                    <tr key={expense.id}>
                      <td>
                        <Link to={`/finance/expensedetails`} className="text-decoration-none">
                          <div className="fw-medium text-dark">
                            #{expense.id}
                          </div>
                        </Link>
                      </td>
                      <td>{expense.category}</td>
                      <td>
                        <div className="text-truncate" style={{ maxWidth: "150px" }}>
                          {expense.description}
                        </div>
                      </td>
                      <td>${expense.amount.toFixed(2)}</td>
                      <td>{expense.date}</td>
                      <td>{expense.vendor}</td>
                      <td>
                        <span className={`badge ${expense.status === "Paid" ? "bg-success" : "bg-warning"}`}>
                          {expense.status}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <Link to="/finance/expensedetails" className="btn btn-sm btn-outline-primary">
                            <FaRegEye />
                          </Link>
                          <button
                            onClick={() => handleEditExpense(expense)}
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <FaPen />
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDeleteExpense(expense.id)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
              <div className="text-muted small mb-2 mb-md-0">
                Showing 1 to {filteredExpenses.length} of {expenses.length} expenses
              </div>
              <nav>
                <ul className="pagination mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* You'll need to create this modal component */}
      {modalOpen && (
        <AddExpenseModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveExpense}
          editData={editExpense}
        />
      )}
    </div>
  );
};

export default ExpenseList;