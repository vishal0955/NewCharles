import React from 'react'
import { Container, Table, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from 'react-redux';

function PlanRequest() {
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const planRequests = [
    {
      name: "Workdo",
      email: "workdo@gmail.com",
      phoneNo: 9197956482,
      contact: "-",
      description: "text",
      
    },
    {
      name: "GrowBiz",
      email: "Gold",
      phoneNo: 25,
      contact: "-",
      description: "text",
     
    },
  ];

  const handleEdit = (name) => {
    console.log("Edit plan:", name);
  };

  const handleDelete = (name) => {
    console.log("Delete plan:", name);
  };
  return (
    <Container className="mt-4 vh-100">
    {/* ✅ Fixed heading for mobile screens */}
    <h2 className="mb-3 fw-bold">Plan Request </h2>

    {/* ✅ Responsive Table with Horizontal Scroll */}
    <div style={{ overflowX: "auto", width: "100%" }}>
      <Table striped bordered hover responsive="md" className={`${darkMode ? "table-dark" : null } text-center `}>
        <thead className="bg-dark text-white">
          <tr>
            <th>Name</th>
            <th>Email </th>
            <th>Phone No</th>
            <th>Contact Method</th>
            <th>Description</th>
          
          </tr>
        </thead>
        <tbody>
          {planRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>{request.phoneNo}</td>
              <td>{request.contact}</td>
              <td>{request.description}</td>
             
            
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </Container>
  )
}

export default PlanRequest
