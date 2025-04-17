import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
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
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AddEmployeeModal from "./AddEmployeeModal";

const departments = [
  "IT Department",
  "HR Department",
  "Finance Department",
  "Marketing Department",
];
const designations = [
  "Senior Developer",
  "HR Manager",
  "Marketing Specialist",
  "Finance Manager",
];

const employee = [
  {
    id: "EMP001",
    name: "John Doe",
    role: "Software Developer",
    designation: "Senior Developer",
    projects: 20,
    done: 13,
    progress: 7,
    productivity: 65,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "purple",
    department: "IT Department",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    status: "Active",
    // image: "https://randomuser.me/api/portraits/men/1.jpg",
    dateOfJoin: "2023-01-01",
  },
  {
    id: "EMP002",
    name: "Harvey Smith",
    role: "Developer",
    projects: 25,
    done: 7,
    progress: 18,
    productivity: 20,
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    color: "red",
    designation: "HR Manager",
    department: "HR Department",
    email: "jane.smith@example.com",
    phone: "+1 234 567 891",
    status: "Active",
    dateOfJoin: "2023-02-01",
  },
  {
    id: "EMP003",
    name: "Jane Smith",
    role: "Developer",
    projects: 30,
    done: 10,
    progress: 20,
    productivity: 30,
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    color: "yellow",
    designation: "HR Manager",
    department: "HR Department",
    email: "jane.smith@example.com",
    phone: "+1 234 567 891",
    status: "Active",
    dateOfJoin: "2023-02-01",
  },
  {
    id: "EMP004",
    name: "Stephan Peralt",
    role: "Software Developer",
    projects: 15,
    done: 13,
    progress: 2,
    productivity: 90,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    color: "green",
    designation: "HR Manager",
    department: "HR Department",
    email: "jane.smith@example.com",
    phone: "+1 234 567 891",
    status: "Active",
    dateOfJoin: "2023-02-01",
  },
];

const EmployeeGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [employees, setEmployees] = useState(employee);
  const [editEmployee, setEditEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeButton, setActiveButton] = useState("list");

  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    designation: designations[0],
    department: departments[0],
    status: "Active",
    dateOfJoin: "",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSaveEmployee = (e) => {
    e.preventDefault();
    if (editingEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editingEmployee.id
            ? { ...newEmployee, id: editingEmployee.id }
            : emp
        )
      );
      setEditingEmployee(null);
    } else {
      setEmployees([
        ...employees,
        { ...newEmployee, id: `EMP00${employees.length + 1}` },
      ]);
    }
    setIsModalOpen(false);
    setNewEmployee({
      id: "",
      name: "",
      email: "",
      phone: "",
      designation: designations[0],
      department: departments[0],
      status: "Active",
      dateOfJoin: "",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    });
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const handleEditEmployee = (employee) => {
    setEditEmployee(employee);
    setModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-gray-50 font-sans flex flex-col items-center">
      <div className="w-full rounded-lg p-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Employee Grid
            </h1>
            <p className="text-gray-500 text-sm">Employee &gt; Employee Grid</p>
          </div>
          <div className="flex space-x-2 sm:space-x-4 mt-4 sm:mt-0 flex-wrap">
            <Link to={"/employeelist"}>
              <button
                className={`p-2 ${
                  activeButton === "grid"
                    ? "bg-black text-white"
                    : "bg-white border"
                } rounded-lg hover:bg-black`}
                onClick={() => setActiveButton("grid")}
              >
                <FaBars />
              </button>
            </Link>

            <Link>
              <button
                className={`p-2 ${
                  activeButton === "list"
                    ? "bg-black text-white"
                    : "bg-white border"
                } rounded-lg hover:bg-black`}
                onClick={() => setActiveButton("list")}
              >
                <FaTh />
              </button>
            </Link>

            <button
              onClick={() => {
                setEditEmployee(null);
                setModalOpen(true);
              }}
              className="inv-new-button d-flex"
            >
              <FaPlus className="mr-2 mt-1" /> Add Employee
            </button>
          </div>
        </div>

        {/* Stats Cards Section */}
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
          <div className="quotes-card-body">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className="bg-white p-6 rounded-lg shadow-md relative"
                >
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    className="absolute top-4 left-4 w-5 h-5 text-blue-600 border-gray-300 rounded"
                  />

                  {/* Three-dot menu
                  <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <FaEllipsisV />
                  </button> */}

                  {/* Profile Picture */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <img
                        src={employee.image}
                        alt={employee.name}
                        className="w-20 h-20 rounded-full border-4 border-gray-200 object-cover"
                      />
                      <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-white border-2 rounded-full"></span>
                    </div>
                  </div>

                  {/* Employee Name & Role */}
                  <div className="text-center mt-3">
                    <Link to={`/employee/${employee.id}`}>
                      <div className="font-medium text-gray-900">
                        {employee.name}
                      </div>
                    </Link>
                    {/* <h3 className="text-lg font-semibold">{employee.name}</h3> */}
                    <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
                      {employee.role}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="mt-4 text-center text-gray-700 text-sm">
                    <div className="flex justify-around">
                      <div>
                        <p className="font-bold">{employee.projects}</p>
                        <p>Projects</p>
                      </div>
                      <div>
                        <p className="font-bold">{employee.done}</p>
                        <p>Done</p>
                      </div>
                      <div>
                        <p className="font-bold">{employee.progress}</p>
                        <p>Progress</p>
                      </div>
                    </div>
                  </div>

                  {/* Productivity */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-600 font-medium">
                      Productivity:{" "}
                      <span className="font-bold">
                        {employee.productivity}%
                      </span>
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className={`h-2 rounded-full bg-${employee.color}-500`}
                        style={{ width: `${employee.productivity}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                className="absolute top-4 left-4 w-5 h-5 text-blue-600 border-gray-300 rounded"
              />

              {/* Three-dot menu */}
              {/* <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <FaEllipsisV />
              </button> */}

              {/* Profile Picture */}
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-20 h-20 rounded-full border-4 border-gray-200 object-cover"
                  />
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-white border-2 rounded-full"></span>
                </div>
              </div>

              {/* Employee Name & Role */}
              <div className="text-center mt-3">
                <Link to={`/employee/${employee.id}`}>
                  <div className="font-medium text-gray-900">
                    {employee.name}
                  </div>
                </Link>
                {/* <h3 className="text-lg font-semibold">{employee.name}</h3> */}
                <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
                  {employee.role}
                </span>
              </div>

              {/* Stats */}
              <div className="mt-4 text-center text-gray-700 text-sm">
                <div className="flex justify-around">
                  <div>
                    <p className="font-bold">{employee.projects}</p>
                    <p>Projects</p>
                  </div>
                  <div>
                    <p className="font-bold">{employee.done}</p>
                    <p>Done</p>
                  </div>
                  <div>
                    <p className="font-bold">{employee.progress}</p>
                    <p>Progress</p>
                  </div>
                </div>
              </div>

              {/* Productivity */}
              <div className="mt-4 text-center">
                <p className="text-gray-600 font-medium">
                  Productivity:{" "}
                  <span className="font-bold">{employee.productivity}%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className={`h-2 rounded-full bg-${employee.color}-500`}
                    style={{ width: `${employee.productivity}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center p-4 border-t mt-4">
          <div className="text-sm text-gray-600">
            Showing 1 to {employees.length} of {employees.length} entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-200 rounded-md disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-200 rounded-md bg-blue-600 text-white">
              1
            </button>
            <button className="px-3 py-1 border border-gray-200 rounded-md disabled:opacity-50">
              Next
            </button>
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

export default EmployeeGrid;
