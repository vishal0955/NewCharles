
import React, { useState, useRef } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { FaPlus, FaFileExport } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AddEmployeeSalaryModal from "./AddEmployeeSalaryModal";
import { useSelector } from "react-redux";


const defaultEarnings = { basic: 3000, hra: 1000, conveyance: 200, others: 100 };
const defaultDeductions = { tds: 200, pf: 300, esi: 150, loan: 50 };

const seed = [
  {
    id: "Emp-001",
    name: "Anthony Lewis",
    email: "anthony@example.com",
    phone: "(123) 4567 890",
    designation: "Finance",
    joining: "12 Sep 2024",
    salary: "40000",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    earnings: defaultEarnings,
    deductions: defaultDeductions,
    payslipNo: "PS4283",
    salaryMonth: "October 2024",
  },
  {
    id: "Emp-002",
    name: "Brian Villalobos",
    email: "brian@example.com",
    phone: "(179) 7382 829",
    designation: "Developer",
    joining: "24 Oct 2024",
    salary: "35000",
    image: "https://i.pravatar.cc/40?u=2",
    earnings: defaultEarnings,
    deductions: defaultDeductions,
    payslipNo: "PS4284",
    salaryMonth: "October 2024",
  },
];

export default function EmployeeSalary() {
  const [employees, setEmployees] = useState(seed);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
   const dropdownRef = useRef(null);


  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const handleAddSalary = () => setShowModal(true);

  const addEmployee = (emp) => {
    const id = `Emp-${String(employees.length + 1).padStart(3, "0")}`;
    const avatar = `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`;

    const newEmp = {
      ...emp,
      id,
      image: avatar,
      earnings: defaultEarnings,
      deductions: defaultDeductions,
      payslipNo: "PS" + Math.floor(1000 + Math.random() * 9000),
      salaryMonth: "October 2024",
    };
    setEmployees([...employees, newEmp]);
    setShowModal(false);
  };

  const updateEmployee = (emp) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === emp.id ? emp : e))
    );
    setShowModal(false);
  };

  const deleteEmployee = (id) =>
    setEmployees((prev) => prev.filter((e) => e.id !== id));

  /* ───────────────────────── JSX ───────────────────────── */
  return (
    <div className={`${darkMode ? "table-dark" : null } container-fluid py-4  `} style={{height:"100vh"}}>
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
        <div>
          <h1 className="h4 fw-semibold mb-1">Employee Salary</h1>
          <small className="text-muted">HR / Employee Salary</small>
        </div>

        <div className="d-flex flex-wrap gap-2">
          {/* <button className="btn btn-outline-dark d-flex align-items-center">
            <FaFileExport className="me-2" /> Export
          </button> 
           
            */}

          <button
            className="btn btn-outline-dark d-flex align-items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaFileExport className="me-2" />
            Export
          </button>

          {showDropdown && (
            <div
              className="dropdown-menu show position-absolute mt-5"
              style={{ minWidth: "2rem" }}
            >
              <button
                className="dropdown-item"
                onClick={() => {
                  console.log("Export as PDF");
                  setShowDropdown(false);
                }}
              >
                Export as PDF
              </button>
              <button
                className="dropdown-item"
                onClick={() => {
                  console.log("Export as Excel");
                  setShowDropdown(false);
                }}
              >
                Export as Excel
              </button>
            </div>
          )}
          <button className="btn btn-outline-secondary d-flex align-items-center ">
            <FaFileExport className="p-0" /> Export
          </button>
          <button
            className="btn inv-new-button d-flex align-items-center"
            onClick={handleAddSalary}
          >
            <FaPlus className="me-2" /> Add Salary
          </button>
        </div>
      </div>

      {/* Card */}
      <div className={`${darkMode ? "card-dark" : null } card shadow-sm `}>
        <div className= {`${darkMode ? "card-dark" : null } card-body p-0 `}>
          {/* Card header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center p-3">
            <h2 className="h6 mb-3 mb-md-0 fw-semibold">
              Employee Salary List
            </h2>
            <div className="d-flex  gap-2">
              <input
                type="text"
                className={`${darkMode ? "card-dark" : null } form-control form-control-sm`}
                placeholder="Search"
              />
              <select className={`${darkMode ? "card-dark" : null }  form-select form-select-sm"`}>
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <select className={`${darkMode ? "card-dark" : null } -select form-select-sm `}>
                <option>Sort By : Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>

          {/* Filters */}
          <div className= {`${darkMode ? "table-dark" : null }  d-flex flex-column flex-md-row justify-content-between gap-2 p-3 border-top `} >
            
          </div>

          {/* Table */}
          {/* <div className="table-responsive">
            <table className="table table-hover align-middle mb-0 text-nowrap">
              <thead className="table-light">
                <tr>
                  <th>Emp ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Designation</th>
                  <th>Joining Date</th>
                  <th>Salary</th>
                  <th>Payslip</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e) => (
                  <tr key={e.id}>
                    <td>{e.id}</td>

                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={e.image}
                          alt={e.name}
                          className="rounded-circle"
                          width={20}
                          height={20}
                        />
                        <div>
                          <div className="fw-medium">{e.name}</div>
                          <small className="text-muted">{e.role}</small>
                        </div>
                      </div>
                    </td>

                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{e.designation}</td>
                    <td>{e.joining}</td>
                    <td>${e.salary}</td>

                    <td>
                      <button
                        className="btn btn-sm btn-dark"
                        onClick={() => {
                          localStorage.setItem("payslipData", JSON.stringify(e));
                          navigate(`/payslip/${e.id}`);
                        }}
                      >
                        Generate Slip
                      </button>
                    </td>

                    <td>
                      <div className="d-flex gap-2 justify-content-center">
                        <button
                          className="btn btn-link p-0 text-primary"
                          onClick={() => {
                            setSelected(e);
                            setIsEdit(true);
                            setShowModal(true);
                          }}
                        >
                          <FiEdit size={18} />
                        </button>
                        <button
                          className="btn btn-link p-0 text-danger"
                          onClick={() =>
                            window.confirm(`Delete ${e.name}?`) &&
                            deleteEmployee(e.id)
                          }
                        >
                          <FiTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
          {/* Wrapper adds horizontal scroll whenever needed */}
<div className={`${darkMode ? "dark-mode" : null } table-responsive `}>
  <table className={`${darkMode ? "table-dark" : null } table table-hover align-middle mb-0 `}>
    <thead className="">
      <tr>
        <th style={{ width: "90px" }}>Emp ID</th>
        <th style={{ minWidth: "220px" }}>Name</th>

                  {/* Hide on xs; show ≥ sm */}
                  <th
                    className="d-none d-sm-table-cell"
                    style={{ minWidth: "240px" }}
                  >
                    Email
                  </th>
                  <th
                    className="d-none d-sm-table-cell"
                    style={{ minWidth: "150px" }}
                  >
                    Phone
                  </th>
                  <th className="d-none d-md-table-cell">Designation</th>
                  <th className="d-none d-md-table-cell">Joining Date</th>

                  <th style={{ width: "110px" }}>Salary</th>
                  <th style={{ width: "120px" }}>Payslip</th>
                  <th style={{ width: "90px" }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((e) => (
                  <tr key={e.id}>
                    <td>{e.id}</td>

                    {/* NAME column – wraps nicely */}
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={e.image}
                          alt={e.name}
                          className="rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div className="text-wrap">
                          <div className="fw-medium">{e.name}</div>
                          <small className="text-muted">{e.role}</small>
                        </div>
                      </div>
                    </td>

                    {/* Optional columns hidden on small screens */}
                    <td className="d-none d-sm-table-cell text-wrap">
                      {e.email}
                    </td>
                    <td className="d-none d-sm-table-cell">{e.phone}</td>
                    <td className="d-none d-md-table-cell">{e.designation}</td>
                    <td className="d-none d-md-table-cell">{e.joining}</td>

                    <td>${e.salary}</td>

                    <td>
                      <button
                        className="btn btn-sm btn-dark"
                        onClick={() => {
                          localStorage.setItem(
                            "payslipData",
                            JSON.stringify(e)
                          );
                          navigate(`/payslip/${e.id}`);
                        }}
                      >
                        Slip
                      </button>
                    </td>

                    <td>
                      <div className="d-flex gap-2 justify-content-center">
                        <button
                          className="btn btn-link p-0 text-primary"
                          onClick={() => {
                            setSelected(e);
                            setIsEdit(true);
                            setShowModal(true);
                          }}
                        >
                          <FiEdit size={18} />
                        </button>
                        <button
                          className="btn btn-link p-0 text-danger"
                          onClick={() =>
                            window.confirm(`Delete ${e.name}?`) &&
                            deleteEmployee(e.id)
                          }
                        >
                          <FiTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <AddEmployeeSalaryModal
          onClose={() => {
            setShowModal(false);
            setIsEdit(false);
            setSelected(null);
          }}
          onSubmit={isEdit ? updateEmployee : addEmployee}
          isEdit={isEdit}
          employeeData={selected}
        />
      )}
    </div>
  );
}
