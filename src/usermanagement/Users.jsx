import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  Dropdown,
  Badge,
  InputGroup,
  Pagination,
} from "react-bootstrap";
import { FaTrash, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { FaPenToSquare, FaRegEye } from "react-icons/fa6";
import { AddUserModal } from "./userModal";
import { useSelector } from "react-redux";

const Users = () => {
  // Sample data for initial users
  const initialUsers = [
    {
      id: 1,
      name: "Anthony Lewis",
      email: "anthony@example.com",
      createdDate: "12 Sep 2024",
      role: "Employee",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      createdDate: "15 Sep 2024",
      role: "Client",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael@example.com",
      createdDate: "18 Sep 2024",
      role: "Employee",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Jessica Smith",
      email: "jessica@example.com",
      createdDate: "20 Sep 2024",
      role: "Client",
      status: "Active",
    },
    {
      id: 5,
      name: "David Lee",
      email: "david@example.com",
      createdDate: "22 Sep 2024",
      role: "Employee",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Laura Black",
      email: "laura@example.com",
      createdDate: "25 Sep 2024",
      role: "Employee",
      status: "Active",
    },
    {
      id: 7,
      name: "John Brown",
      email: "john@example.com",
      createdDate: "28 Sep 2024",
      role: "Client",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Emily Davis",
      email: "emily@example.com",
      createdDate: "30 Sep 2024",
      role: "Employee",
      status: "Active",
    },
    {
      id: 9,
      name: "Charles Miller",
      email: "charles@example.com",
      createdDate: "02 Oct 2024",
      role: "Client",
      status: "Inactive",
    },
    {
      id: 10,
      name: "Olivia Wilson",
      email: "olivia@example.com",
      createdDate: "05 Oct 2024",
      role: "Employee",
      status: "Active",
    },
    {
      id: 11,
      name: "James Martinez",
      email: "james@example.com",
      createdDate: "07 Oct 2024",
      role: "Client",
      status: "Active",
    },
    {
      id: 12,
      name: "Sophia Taylor",
      email: "sophia@example.com",
      createdDate: "10 Oct 2024",
      role: "Employee",
      status: "Inactive",
    },
    {
      id: 13,
      name: "Daniel Anderson",
      email: "daniel@example.com",
      createdDate: "12 Oct 2024",
      role: "Client",
      status: "Active",
    },
    {
      id: 14,
      name: "Mia Thomas",
      email: "mia@example.com",
      createdDate: "15 Oct 2024",
      role: "Employee",
      status: "Inactive",
    },
    {
      id: 15,
      name: "Ethan Jackson",
      email: "ethan@example.com",
      createdDate: "18 Oct 2024",
      role: "Client",
      status: "Active",
    },
    {
      id: 16,
      name: "Ava Harris",
      email: "ava@example.com",
      createdDate: "20 Oct 2024",
      role: "Employee",
      status: "Inactive",
    },
    {
      id: 17,
      name: "Isabella Martin",
      email: "isabella@example.com",
      createdDate: "22 Oct 2024",
      role: "Client",
      status: "Active",
    },
    {
      id: 18,
      name: "Lucas Thompson",
      email: "lucas@example.com",
      createdDate: "25 Oct 2024",
      role: "Employee",
      status: "Inactive",
    },
    {
      id: 19,
      name: "Zoe Moore",
      email: "zoe@example.com",
      createdDate: "27 Oct 2024",
      role: "Client",
      status: "Active",
    },
    {
      id: 20,
      name: "Liam Scott",
      email: "liam@example.com",
      createdDate: "30 Oct 2024",
      role: "Employee",
      status: "Active",
    },
  ];

  const [tasks, setTasks] = useState(initialUsers); // Use `tasks` for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showAddModal, setShowAddModal] = useState(false); // Modal state for adding users

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;

  // Paginate based on the current page and slice the tasks
  const paginatedUsers = tasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortBy, setSortBy] = useState("Last 7 Days");

  // Avatar placeholder component
  const Avatar = ({ name }) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    const colors = ["#FF6B6B", "#6B66FF", "#66FFB8", "#FFD166"];
    const colorIndex = name.charCodeAt(0) % colors.length;

    return (
      <div
        style={{
          backgroundColor: colors[colorIndex],
          color: "#fff",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          marginRight: "10px",
        }}
      >
        {initials}
      </div>
    );
  };
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <Container fluid className="p-4">
      {/* Header */}
      <Row className="mb-4">
        <Col md={6}>
          <h2>Users</h2>
          <div className="">Administration / Users</div>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="outline-secondary" className="me-2">
            <i className="bi bi-download me-1"></i> Export
          </Button>
          <Button variant="dark" onClick={() => setShowAddModal(true)}>
            <i className="bi bi-plus me-1"></i> Add User
          </Button>
        </Col>
      </Row>

      <div className=" p-4 rounded shadow-sm mb-4">
        <Row className="mb-4">
          <Col>
            <h5>Users List</h5>
          </Col>
          <Col xs={12} md={2} className="mt-2">
            <InputGroup>
              <Form.Control
              className={`${darkMode ? "dark-mode" : null }`}
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                placeholder="Date"
               
              />
              <InputGroup.Text>
                <FaCalendarAlt />
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col xs={12} md={2} className="mt-2">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className={`${
                  darkMode ? "dark-mode" : null
                } w-100 text-start border`}
              >
                {roleFilter}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setRoleFilter("All Roles")}>
                  All Roles
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRoleFilter("Employee")}>
                  Employee
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRoleFilter("Client")}>
                  Client
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={12} md={2} className="mt-2">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className={`${
                  darkMode ? "dark-mode" : null
                } w-100 text-start border`}
              >
                {statusFilter}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setStatusFilter("All Status")}>
                  All Status
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setStatusFilter("Active")}>
                  Active
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setStatusFilter("Inactive")}>
                  Inactive
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={12} md={2} className="mt-2">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className={`${
                  darkMode ? "dark-mode" : null
                } w-100 text-start border`}
              >
                {sortBy}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortBy("Last 7 Days")}>
                  Last 7 Days
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("Last 30 Days")}>
                  Last 30 Days
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("Last 90 Days")}>
                  Last 90 Days
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Users Table */}
        <Table hover responsive className={`${darkMode ? "table-dark" : null } align-middle`}>
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Created Date</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <Form.Check type="checkbox" />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <Avatar name={user.name} />
                    <span>{user.name}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdDate}</td>
                <td>
                  <Badge
                    bg={user.role === "Employee" ? "danger" : "primary"}
                    className="bg-opacity-10 text-dark"
                  >
                    {user.role}
                  </Badge>
                </td>
                <td>
                  <Badge
                    bg={user.status === "Active" ? "success" : "danger"}
                    pill
                    className="px-3 py-2"
                  >
                    {user.status}
                  </Badge>
                </td>
                <td>
                  <button className="">
                    <FaRegEye />
                  </button>
                  <button
                    className=" action-btn  hover:text-blue-800"
                    style={{ color: "blue" }}
                  >
                    <FaPenToSquare />
                  </button>
                  <button className=" action-btn text-danger hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, tasks.length)} of {tasks.length} entries
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

        <AddUserModal
          show={showAddModal}
          handleClose={() => setShowAddModal(false)}
        />
      </div>
    </Container>
  );
};

export default Users;
