import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col, InputGroup, Table } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const AddUserModal = ({ show, handleClose }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: '',
  });

  // State for module permissions
  const [permissions, setPermissions] = useState({
    employee: { read: false, write: false, create: false, delete: false, import: false, export: false },
    holidays: { read: false, write: false, create: false, delete: false, import: false, export: false },
    leaves: { read: false, write: false, create: false, delete: false, import: false, export: false },
    events: { read: false, write: false, create: false, delete: false, import: false, export: false },
  });

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle permission checkbox changes
  const handlePermissionChange = (module, permission) => {
    setPermissions({
      ...permissions,
      [module]: {
        ...permissions[module],
        [permission]: !permissions[module][permission],
      }
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    console.log('Permissions:', permissions);
    // Add user logic here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Username and Email */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Password Fields */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <Button 
                    variant="outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <Button 
                    variant="outline-secondary"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          {/* Phone and Role */}
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                  <option value="client">Client</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Module Permissions */}
          <h5 className="mb-3">Module Permissions</h5>
          <div className="table-responsive">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Module Permissions</th>
                  <th className="text-center">Read</th>
                  <th className="text-center">Write</th>
                  <th className="text-center">Create</th>
                  <th className="text-center">Delete</th>
                  <th className="text-center">Import</th>
                  <th className="text-center">Export</th>
                </tr>
              </thead>
              <tbody>
                {/* Employee Module */}
                <tr>
                  <td>Employee</td>
                  {['read', 'write', 'create', 'delete', 'import', 'export'].map((permission) => (
                    <td key={`employee-${permission}`} className="text-center">
                      <Form.Check
                        type="checkbox"
                        checked={permissions.employee[permission]}
                        onChange={() => handlePermissionChange('employee', permission)}
                      />
                    </td>
                  ))}
                </tr>

                {/* Holidays Module */}
                <tr>
                  <td>Holidays</td>
                  {['read', 'write', 'create', 'delete', 'import', 'export'].map((permission) => (
                    <td key={`holidays-${permission}`} className="text-center">
                      <Form.Check
                        type="checkbox"
                        checked={permissions.holidays[permission]}
                        onChange={() => handlePermissionChange('holidays', permission)}
                      />
                    </td>
                  ))}
                </tr>

                {/* Leaves Module */}
                <tr>
                  <td>Leaves</td>
                  {['read', 'write', 'create', 'delete', 'import', 'export'].map((permission) => (
                    <td key={`leaves-${permission}`} className="text-center">
                      <Form.Check
                        type="checkbox"
                        checked={permissions.leaves[permission]}
                        onChange={() => handlePermissionChange('leaves', permission)}
                      />
                    </td>
                  ))}
                </tr>

                {/* Events Module */}
                <tr>
                  <td>Events</td>
                  {['read', 'write', 'create', 'delete', 'import', 'export'].map((permission) => (
                    <td key={`events-${permission}`} className="text-center">
                      <Form.Check
                        type="checkbox"
                        checked={permissions.events[permission]}
                        onChange={() => handlePermissionChange('events', permission)}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </div>
        </Form>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="light" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="dark" onClick={handleSubmit}>
          Add User
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Example usage in parent component
const UserManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  
  return (
    <div>
      <Button variant="dark" onClick={() => setShowAddModal(true)}>
        Add User
      </Button>
      
      <AddUserModal 
        show={showAddModal} 
        handleClose={() => setShowAddModal(false)} 
      />
    </div>
  );
};

export default UserManagement;