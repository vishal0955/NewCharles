
import React, { useState } from "react";
import { Button, Table, Modal, Form, Pagination } from "react-bootstrap";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa"; // Added icons

const SelfAssessment = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [selfAssessments, setSelfAssessments] = useState([
    { name: "John Doe", rating: 8, status: "Completed" },
    { name: "Jane Smith", rating: 7, status: "In Progress" },
  ]);

  const handleShowForm = (assessment) => {
    setSelectedAssessment(assessment);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmitForm = () => {
    // Save or submit the assessment data
    handleCloseForm();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="container" style={{height:"100vh"}}>
      <h2 className="mt-4">Self Assessment</h2>
      <div className="d-flex justify-content-between mb-3">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search by employee name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <select
            className="form-control"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="">Filter by status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        <Button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Add Self Assessment
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Self-Rating</th>
            <th>Self-Assessment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {selfAssessments
            .filter(
              (assessment) =>
                assessment.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) &&
                (filter ? assessment.status === filter : true)
            )
            .map((assessment, index) => (
              <tr key={index}>
                <td>{assessment.name}</td>
                <td>{assessment.rating}</td>
                <td>{assessment.status}</td>
                <td>
                  <Button
                    variant="info"
                    className="mr-2"
                    onClick={() => handleShowForm(assessment)}
                  >
                    <FaEdit /> {/* Edit icon */}
                  </Button>
                  <Button variant="danger">
                    <FaTrash /> {/* Delete icon */}
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Pagination className="justify-content-end">
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next />
      </Pagination>

      {/* Self-Assessment Form Modal */}
      <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedAssessment ? "Edit" : "Add"} Self Assessment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmployeeName">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter employee name"
                defaultValue={selectedAssessment?.name || ""}
              />
            </Form.Group>
            <Form.Group controlId="formRating">
              <Form.Label>Self-Rating (1-10)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter self-rating"
                defaultValue={selectedAssessment?.rating || ""}
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Self-Assessment Status</Form.Label>
              <Form.Control
                as="select"
                defaultValue={selectedAssessment?.status || "In Progress"}
              >
                <option>In Progress</option>
                <option>Completed</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formFeedback">
              <Form.Label>Feedback</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForm}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitForm}>
            {selectedAssessment ? "Save Changes" : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SelfAssessment;
