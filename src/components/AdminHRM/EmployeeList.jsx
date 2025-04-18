import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import AddEmployeeModal from "./AddEmployeeModal";
import { FaRegEye } from "react-icons/fa6";
import {
  FaPlus,
  FaFilter,
  FaDownload,
  FaPenToSquare,
  FaTrash,
  FaUser,
  FaXmark,
} from "react-icons/fa6";
import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaUserPlus,
  FaBars,
  FaTh,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const EmployeeList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "John Doe",
      designation: "Senior Developer",
      department: "IT Department",
      email: "john.doe@example.com",
      phone: "+1 234 567 890",
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      dateOfJoin: "2023-01-01",
    },
    {
      id: "EMP002",
      name: "Jane Smith",
      designation: "HR Manager",
      department: "HR Department",
      email: "jane.smith@example.com",
      phone: "+1 234 567 891",
      status: "Active",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      dateOfJoin: "2023-02-01",
    },
  ]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeButton, setActiveButton] = useState("list");
  const location = useLocation();

  useEffect(() => {
    setActiveButton(location.pathname === "/employeelist" ? "list" : "grid");
  }, [location]);

  // Add or Edit Employee
  // const handleSaveEmployee = (employeeData) => {
  //   console.log("Employee Data Received:", employeeData);
  //   const newId = `EMP${employees.length + 1}`; // ID Format Fix
  //   if (editEmployee) {
  //     setEmployees((prev) =>
  //       prev.map((emp) =>
  //         emp.id === editEmployee.id ? { ...emp, ...employeeData } : emp
  //       )
  //     );
  //   } else {
  //     setEmployees((prev) => [...prev, { id: newId, ...employeeData }]);
  //   }
  //   setEditEmployee(null);
  //   setModalOpen(false);
  // };

  const handleSaveEmployee = (employeeData) => {
    console.log("Employee Data Received:", employeeData);

    const newId = `EMP${employees.length + 1}`;

    const newEmployee = {
      id: newId,
      name: `${employeeData.firstName} ${employeeData.lastName}`, // Combine first & last name
      designation: employeeData.designation || "Not Provided",
      department: employeeData.department || "Not Provided",
      email: employeeData.email || "Not Provided",
      phone: employeeData.phone || "Not Provided",
      status: employeeData.status || "Active",
      image:
        employeeData.image || "https://randomuser.me/api/portraits/men/3.jpg",
      dateOfJoin:
        employeeData.dateOfJoin || new Date().toISOString().split("T")[0],
    };

    if (editEmployee) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editEmployee.id ? { ...emp, ...newEmployee } : emp
        )
      );
    } else {
      setEmployees((prev) => [...prev, newEmployee]);
    }

    setEditEmployee(null);
    setModalOpen(false);
  };

  // Delete Employee
  const handleDeleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  // Open Edit Modal
  const handleEditEmployee = (employee) => {
    setEditEmployee(employee);
    setModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

    const darkMode =useSelector((state)=>state.theme.isDarkMode)
    console.log(darkMode);
    
  return (
    <div className={`${darkMode ? "dark-mode" : null }  bg-gray-50 font-sans flex flex-col items-center overflow-x-hidden`}>
      <div className="w-full rounded-lg p-2 ">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold ">
              Employee List
            </h1>
            <p className="text-gray-500 text-sm">Employee &gt; Employee List</p>
          </div>
          <div className="flex space-x-2 sm:space-x-4 mt-4 sm:mt-0 flex-wrap">
            <Link to={"/employeelist"}>
              <button
                className={`p-2 ${
                  activeButton === "list"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700"
                } rounded-lg hover:bg-orange-600`}
              >
                <FaBars />
              </button>
            </Link>

            <Link to={"/employeegrid"}>
              <button
                className={`p-2 ${
                  activeButton === "grid"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700"
                } rounded-lg hover:bg-orange-600`}
              >
                <FaTh />
              </button>
            </Link>

            <button
              onClick={() => {
                setEditEmployee(null);
                setModalOpen(true);
              }}
              className="d-flex inv-new-button"
            >
              <FaPlus className="mr-2 mt-1" /> Add Employee
            </button>
          </div>
        </div>

        {/* Stats Cards Section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white shadow rounded-md p-4 flex items-center space-x-4">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-primary">
                <FaUsers />
              </div>
              <div>
                <div className="inv-stat-label">Total...</div>
                <p className="inv-stat-value">1007</p>
              </div>
            </div>
          </div>
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-warning">
                <FaUserCheck />
              </div>
              <div>
                <div className="inv-stat-label">Active</div>
                <p className="inv-stat-value">800</p>
              </div>
            </div>
          </div>
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-danger">
                <FaUserTimes />
              </div>
              <div>
                <div className="inv-stat-label">Inactive</div>
                <p className="inv-stat-value">150</p>
              </div>
            </div>
          </div>
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-neutral">
                <FaUserPlus />
              </div>
              <div>
                <div className="inv-stat-label">New...</div>
                <p className="inv-stat-value">57</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white shadow rounded-md p-4 flex items-center space-x-4">
            <div className="text-blue-600 text-xl">
              <FaUsers />
            </div>
            <div>
              <div className="text-sm text-gray-500">Total...</div>
              <p className="text-lg font-semibold">1007</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-md p-4 flex items-center space-x-4">
            <div className="text-yellow-600 text-xl">
              <FaUserCheck />
            </div>
            <div>
              <div className="text-sm text-gray-500">Active</div>
              <p className="text-lg font-semibold">800</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-md p-4 flex items-center space-x-4">
            <div className="text-red-600 text-xl">
              <FaUserTimes />
            </div>
            <div>
              <div className="text-sm text-gray-500">Inactive</div>
              <p className="text-lg font-semibold">150</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-md p-4 flex items-center space-x-4">
            <div className="text-gray-600 text-xl">
              <FaUserPlus />
            </div>
            <div>
              <div className="text-sm text-gray-500">New...</div>
              <p className="text-lg font-semibold">57</p>
            </div>
          </div>
        </div>

        <div className="quotes-card">
          <div className=" quotes-card-body">
            <div className="quotes-filters row mb-4">
              <div className="col-md-6">
                <div className="inv-search-wrapper">
                  <i className="bi bi-search inv-search-icon" />
                  <input
                    type="text"
                    className="inv-search-input"
                    placeholder="Search Employees..."
                    aria-label="Search Employees..."
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-end gap-3">
                <button className="inv-filter-button d-flex">
                  <FaFilter className="mr-2 mt-1" /> Filter
                </button>
                <button className="inv-filter-button d-flex">
                  <FaDownload className="mr-2 mt-1" /> Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="min-w-full text-sm text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600">
                    <th className="px-4 py-3">Employee</th>
                    <th className="px-4 py-3">Designation</th>
                    <th className="px-4 py-3">Department</th>
                    <th className="px-2 py-3 break-words max-w-xs">Email</th>
                    <th className="px-4 py-3">Phone</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-nowrap">
                  {employees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="px-3 py-3 flex items-center space-x-3">
                        <div>
                          <Link to={`/employee/${employee.id}`}>
                            <div className="font-medium text-gray-900">
                              {employee.name}
                            </div>
                          </Link>
                          <div className="text-sm text-gray-500">
                            #{employee.id}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-sm">
                        {employee.designation}
                      </td>
                      <td className="px-3 py-3 text-sm">
                        {employee.department}
                      </td>
                      <td className="px-3 py-3 text-sm">{employee.email}</td>
                      <td className="px-3 py-3 text-sm">{employee.phone}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-sm text-green-800 bg-green-100 rounded-full">
                          {employee.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 flex space-x-2">
                        <button
                          onClick={() => handleEditEmployee(employee)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <FaPenToSquare />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleDeleteEmployee(employee.id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="quotes-footer d-flex justify-content-between align-items-center mt-4">
              <div className="quotes-results-info">
                Showing 1 to 10 of 97 results
              </div>
              <nav className="quotes-pagination">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="bi bi-chevron-left" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="bi bi-chevron-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <AddEmployeeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveEmployee}
        editData={editEmployee}
      />
    </div>
  );
};

export default EmployeeList;
