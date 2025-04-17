import React from 'react'
import { Table, Badge, Container } from "react-bootstrap";
import { useSelector } from 'react-redux';


const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Inactive",
  },
];
function UserInfo() {
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <Container className="mt-4 vh-100">
      <h2 className="mb-3 fw-bold">User Info</h2>
      <Table striped bordered hover responsive className={`${darkMode ? "table-dark" : null }`}>
        <thead className="bg-dark text-white">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <div className="d-flex align-items-center">
                  <Badge bg={user.status === "Active" ? "success" : "danger"}>
                    {user.status}
                  </Badge>
                  <div className="form-check form-switch ms-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      defaultChecked={user.status === "Active"}
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default UserInfo
