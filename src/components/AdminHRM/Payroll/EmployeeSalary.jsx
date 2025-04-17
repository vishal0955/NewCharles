// import React, { useState } from "react";
// import { FiSettings, FiEdit, FiTrash, FiX } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import {
//   FaPlus,
//   FaFileExport,
//   FaCog,
//   FaTrash,
//   FaEdit,
//   FaTimes,
// } from "react-icons/fa";
// import AddEmployeeSalaryModal from "./AddEmployeeSalaryModal";

// const defaultEarnings = {
//   basic: 3000,
//   hra: 1000,
//   conveyance: 200,
//   others: 100,
// };

 

// const defaultDeductions = {
//   tds: 200,
//   pf: 300,
//   esi: 150,
//   loan: 50,
// };

// const employee = [
//   {
//     id: "Emp-001",
//     name: "Anthony Lewis",
//     email: "anthony@example.com",
//     phone: "(123) 4567 890",
//     designation: "Finance",
//     joining: "12 Sep 2024",
//     salary: "40000",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     earnings: defaultEarnings,
//     deductions: defaultDeductions,
//     payslipNo: "PS4283",
//     salaryMonth: "October 2024",
//   },
//   {
//     id: "Emp-002",
//     name: "Brian Villalobos",
//     email: "brian@example.com",
//     phone: "(179) 7382 829",
//     designation: "Developer",
//     joining: "24 Oct 2024",
//     salary: "35000",
//     image: "https://i.pravatar.cc/40?u=2",
//     earnings: defaultEarnings,
//     deductions: defaultDeductions,
//     payslipNo: "PS4284",
//     salaryMonth: "October 2024",
//   },
//   // ... same for others
// ];


// export default function EmployeeSalary() {
//   const [showModal, setShowModal] = useState(false);
//   const [employees, setEmployees] = useState(employee);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isEdit, setIsEdit] = useState(false);

//   const navigate = useNavigate();

//   const handleAddSalary = () => {
//     setShowModal(true);
//   };

//   const addEmployee = (newEmp) => {
//     const id = `Emp-${String(employees.length + 1).padStart(3, "0")}`;
//     const dummyImage = `https://randomuser.me/api/portraits/men/${Math.floor(
//       Math.random() * 100
//     )}.jpg`;

//     const employeeWithSlip = {
//       ...newEmp,
//       id,
//       image: dummyImage,
//       earnings: {
//         basic: 3000,
//         hra: 1000,
//         conveyance: 200,
//         others: 100,
//       },
//       deductions: {
//         tds: 200,
//         pf: 300,
//         esi: 150,
//         loan: 50,
//       },
//       payslipNo: "PS" + Math.floor(1000 + Math.random() * 9000),
//       salaryMonth: "October 2024", // You can make this dynamic
//     };

//     setEmployees([...employees, employeeWithSlip]);
//     setShowModal(false);
//   };

//   const deleteEmployee = (id) => {
//     const updated = employees.filter((emp) => emp.id !== id);
//     setEmployees(updated);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-semibold text-gray-800">
//             Employee Salary
//           </h1>
//           <p className="text-gray-500 text-sm">HR / Employee Salary</p>
//         </div>
//         <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-0">
//           <button className="flex items-center px-4 py-2 border border-black text-black rounded-md">
//             <FaFileExport className="mr-2" />
//             Export
//           </button>
//           <button
//             onClick={handleAddSalary}
//             className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-black"
//           >
//             <FaPlus className="mr-2" />
//             Add Salary
//           </button>
//         </div>
//       </div>

//       <div className="bg-white shadow-md rounded-lg p-4">
//         <div className="flex flex-wrap justify-between items-center p-3 rounded-md">
//           <h1 className="text-xl font-semibold text-gray-800">
//             Employee Salary List
//           </h1>
//           <div className="flex flex-wrap gap-2">
//             <select className="border p-2 rounded-md text-sm">
//               <option>Status</option>
//               <option>Active</option>
//               <option>Inactive</option>
//             </select>
//             <select className="border p-2 rounded-md text-sm">
//               <option>Sort By : Last 7 Days</option>
//               <option>Last 30 Days</option>
//             </select>
//           </div>
//         </div>

//         <div className="flex flex-wrap justify-between items-center p-3 rounded-md border-t-2  gap-4">
//           <div className="flex items-center space-x-4">
//             <label className="text-sm font-medium">Row Per Page</label>
//             <select className="border p-2 rounded-md text-sm">
//               <option>10</option>
//               <option>20</option>
//               <option>50</option>
//             </select>
//           </div>
//           <input
//             type="text"
//             placeholder="Search"
//             className="border p-2 rounded-md text-sm w-full sm:w-auto"
//           />
//         </div>
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100 text-nowrap">
//               <th className="p-2 text-left">Emp ID</th>
//               <th className="p-2 text-left">Name</th>
//               <th className="border p-2">Email</th>
//               <th className="border p-2">Phone</th>
//               <th className="border p-2">Designation</th>
//               <th className="border p-2">Joining Date</th>
//               <th className="border p-2">Salary</th>
//               <th className="border p-2">Payslip</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee.id} className="text-center border text-nowrap">
//                 <td className="p-2 border">{employee.id}</td>
//                 <td className="p-2 mx-4 flex items-center gap-2">
//                   <img
//                     src={employee.image}
//                     alt="avatar"
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <div>
//                     <div className="font-medium">{employee.name}</div>
//                     <div className="text-sm text-gray-500">{employee.role}</div>
//                   </div>
//                 </td>
//                 <td className="p-2 border">{employee.email}</td>
//                 <td className="p-2 border">{employee.phone}</td>
//                 <td className="p-2 border">{employee.designation}</td>
//                 <td className="p-2 border">{employee.joining}</td>
//                 <td className="p-2 border">${employee.salary}</td>
//                 <td className="p-2 border">
//                   <button
//                     onClick={() => {
//                       localStorage.setItem(
//                         "payslipData",
//                         JSON.stringify(employee)
//                       );
//                       navigate(`/payslip/${employee.id}`);
//                     }}
//                     className="bg-black text-white px-3 py-1 rounded-md"
//                   >
//                     Generate Slip
//                   </button>
//                 </td>
//                 {/* <td className="p-2 border flex justify-center gap-2">
//                   <button className="text-blue-500">
//                     <FiEdit size={18} />
//                   </button>
//                   <button className="text-red-500">
//                     <FiTrash size={18} />
//                   </button>
//                 </td> */}

//                 <td className="p-2 border flex justify-center gap-2">
//                   <button
//                     className="text-blue-500"
//                     onClick={() => {
//                       setSelectedEmployee(employee);
//                       setIsEdit(true);
//                       setShowModal(true);
//                     }}
//                   >
//                     <FiEdit size={18} />
//                   </button>

//                   <button
//                     className="text-red-500"
//                     onClick={() => {
//                       if (
//                         window.confirm(
//                           `Are you sure to delete ${employee.name}?`
//                         )
//                       ) {
//                         deleteEmployee(employee.id);
//                       }
//                     }}
//                   >
//                     <FiTrash size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* Modal */}
//       {showModal && (
//         <AddEmployeeSalaryModal
//           onClose={() => {
//             setShowModal(false);
//             setIsEdit(false);
//             setSelectedEmployee(null);
//           }}
//           onSubmit={isEdit ? updateEmployee : addEmployee}
//           isEdit={isEdit}
//           employeeData={selectedEmployee}
//         />
//       )}
//     </div>
//   );
// }


// src/pages/EmployeeSalary.jsx
import React, { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { FaPlus, FaFileExport } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AddEmployeeSalaryModal from "./AddEmployeeSalaryModal";

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

  /* ───────────────────────── helpers ───────────────────────── */
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
    <div className="container-fluid py-4">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
        <div>
          <h1 className="h4 fw-semibold mb-1">Employee Salary</h1>
          <small className="text-muted">HR / Employee Salary</small>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-outline-dark d-flex align-items-center">
            <FaFileExport className="me-2" /> Export
          </button>
          <button
            className="btn btn-dark d-flex align-items-center"
            onClick={handleAddSalary}
          >
            <FaPlus className="me-2" /> Add Salary
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          {/* Card header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center p-3">
            <h2 className="h6 mb-3 mb-md-0 fw-semibold">
              Employee Salary List
            </h2>
            <div className="d-flex  gap-2">
            
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search"
            />
              <select className="form-select form-select-sm">
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <select className="form-select form-select-sm">
                <option>Sort By : Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
              
            </div>
          </div>

          {/* Filters */}
          <div className="d-flex flex-column flex-md-row justify-content-between gap-2 p-3 border-top">
            {/* <div className="d-flex align-items-center gap-2">
              <label className="small mb-0">Rows per page</label>
              <select className="form-select form-select-sm w-auto">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div> */}
          
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
<div className="table-responsive">
  <table className="table table-hover align-middle mb-0">
    <thead className="table-light">
      <tr>
        <th style={{ width: "90px" }}>Emp ID</th>
        <th style={{ minWidth: "220px" }}>Name</th>

        {/* Hide on xs; show ≥ sm */}
        <th className="d-none d-sm-table-cell" style={{ minWidth: "240px" }}>
          Email
        </th>
        <th className="d-none d-sm-table-cell" style={{ minWidth: "150px" }}>
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
          <td className="d-none d-sm-table-cell text-wrap">{e.email}</td>
          <td className="d-none d-sm-table-cell">{e.phone}</td>
          <td className="d-none d-md-table-cell">{e.designation}</td>
          <td className="d-none d-md-table-cell">{e.joining}</td>

          <td>${e.salary}</td>

          <td>
            <button
              className="btn btn-sm btn-dark"
              onClick={() => {
                localStorage.setItem("payslipData", JSON.stringify(e));
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
                  window.confirm(`Delete ${e.name}?`) && deleteEmployee(e.id)
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
