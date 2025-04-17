import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaPlus, FaFileExport } from "react-icons/fa";
// import { FaUpload } from "react-icons/fa";
import { useRef } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Quill ka default style

const PoliciesTable = () => {
  const [showModal, setShowModal] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const [editingIndex, setEditingIndex] = useState(null);
  const [policies, setPolicies] = useState([
    {
      id: 1,
      name: "Employee",
      department: "All Department",
      description: "Guidelines regarding employee absences from work",
      createdDate: "14 Jan 2024",
    },
    {
      id: 2,
      name: "Permission Policy",
      department: "Marketing",
      description: "Guidelines for accessing and using company resources",
      createdDate: "21 Jan 2024",
    },
    {
      id: 3,
      name: "Privacy Policy",
      department: "All Department",
      description: "Ensure compliance with data protection",
      createdDate: "18 Feb 2024",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [policyData, setPolicyData] = useState({
    name: "",
    date: "",
    department: "",
    file: null,
  });

  //   const filteredDepartments = policies.filter((department) =>
  //     department.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  const filteredDepartments = policies.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open Modal for Add/Edit
  const handleShow = (index = null) => {
    if (index !== null && policies[index]) {
      setEditingIndex(index);
      setPolicyData({
        name: policies[index].name,
        department: policies[index].department,
        description: policies[index].description,
        createdDate: policies[index].createdDate,
      });
    } else {
      setEditingIndex(null);
      setPolicyData({
        name: "",
        department: "",
        description: "",
        createdDate: "",
      });
    }
    setShowModal(true);
  };

  // Close Modal
  const handleClose = () => {
    setShowModal(false);
    setPolicyData({
      name: "",
      department: "",
      description: "",
      createdDate: "",
    });
  };

  // Handle Input Change
  const handleChange = (e) => {
    setPolicyData({ ...policyData, [e.target.name]: e.target.value });
  };
  // Import useRef

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPolicyData({ ...policyData, file: file });
  };

  // Handle Form Submit (Add/Edit)
  // const handleSubmit = () => {
  //   if (editingIndex !== null) {
  //     const updatedPolicies = [...policies];
  //     updatedPolicies[editingIndex] = policyData;
  //     setPolicies(updatedPolicies);
  //   } else {
  //     setPolicies([
  //       ...policies,
  //       { ...policyData, createdDate: new Date().toLocaleDateString() },
  //     ]);
  //   }
  //   handleClose();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedPolicies = [...policies];
      updatedPolicies[editingIndex] = policyData;
      setPolicies(updatedPolicies);
    } else {
      setPolicies([
        ...policies,
        {
          ...policyData,
          createdDate: new Date().toLocaleDateString(),
        },
      ]);
    }
    handleClose();
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (!policyData.name || !policyData.department || !policyData.description) {
  //       alert("Please fill all fields!"); // Validation
  //       return;
  //     }

  //     if (editingIndex !== null) {
  //       const updatedPolicies = [...policies];
  //       updatedPolicies[editingIndex] = policyData;
  //       setPolicies(updatedPolicies);
  //     } else {
  //       setPolicies([
  //         ...policies,
  //         { ...policyData, createdDate: new Date().toLocaleDateString() },
  //       ]);
  //     }

  //     // Reset Form & Close Modal
  //     setPolicyData({
  //       name: "",
  //       department: "",
  //       description: "",
  //       createdDate: "",
  //       file: null,
  //     });
  //     setShowModal(false);
  //   };

  const handleDelete = (index) => {
    const updatedPolicies = policies.filter((_, i) => i !== index);
    setPolicies(updatedPolicies);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Policies</h1>
          <p className="text-gray-500 text-sm">Employee / policies</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-0">
          <button className="flex items-center px-4 py-2 border border-black text-black rounded-md">
            <FaFileExport className="mr-2" />
            Export
          </button>
          <button
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-black"
            onClick={handleShow} // Open Add Modal
          >
            <FaPlus className="mr-2" />
            Add Policy
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="d-flex flex-wrap justify-between gap-2 mb-4">
        <div className="flex gap-2">
          <Form.Control type="date" className="w-auto" />
          <Form.Select className="w-auto">
            <option>Department</option>
            <option>All Department</option>
            <option>Marketing</option>
          </Form.Select>
          <Form.Select className="w-auto">
            <option>Sort By: Last 7 Days</option>
            <option>Last 30 Days</option>
          </Form.Select>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded-md text-sm w-full sm:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead className="bg-gray-300 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-3 w-12">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Department</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left text-nowrap">Created At</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredDepartments.map((dept, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3">{dept.name}</td>
                <td className="px-4 py-3">{dept.department}</td>
                <td className="px-4 py-3">{dept.description}</td>
                <td className="px-4 py-3">{dept.createdDate}</td>
                <td className="px-4 py-3 flex space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    // onClick={() => openModal(dept)}
                    onClick={() => handleShow(index)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    // onClick={() => handleDelete(dept.id)}
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {/* Add/Edit Policy Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">
            {editingIndex !== null ? "Edit Policy" : "Add Policy"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            {/* Policy Name */}
            <Form.Group className="mb-3">
              <Form.Label>Policy Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter policy name"
                name="name"
                value={policyData.name}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Department */}
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Select
                name="department"
                value={policyData.department}
                onChange={handleChange}
              >
                <option>Select</option>
                <option>All Department</option>
                <option>HR</option>
                <option>Marketing</option>
                <option>Finance</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Policy</Form.Label>
              <div className="border p-1 text-center rounded">
                {/* <FaUpload size={40} /> */}
                <p className="mt-2">Drag and drop your files</p>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setPolicyData((prev) => ({ ...prev, file }));
                    }
                  }}
                />
                <button
                  type="button"
                  className="bg-gray-800 p-2 text-white rounded hover:bg-black mt-2"
                  onClick={() =>
                    document.querySelector('input[type="file"]').click()
                  }
                >
                  Upload
                </button>
              </div>
            </Form.Group>

            {/* Description */}
            {/* <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter policy description"
                name="description"
                value={policyData.description}
                onChange={handleChange}
              />
            </Form.Group> */}

            {/* Description */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4} // Yeh height set karega
                placeholder="Enter policy description"
                name="description"
                value={policyData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <button
              className="bg-gray-800 p-2 text-white rounded hover:bg-black"
              onClick={handleSubmit}
              //   type="submit"
            >
              {editingIndex !== null ? "Update Policy" : "Add Policy"}
            </button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PoliciesTable;
