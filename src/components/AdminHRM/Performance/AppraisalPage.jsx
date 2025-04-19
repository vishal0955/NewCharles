// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import {
//   Table,
//   Container,
//   Row,
//   Col,
//   Button,
//   Form,
//   InputGroup,
//   Pagination,
//   DropdownButton,
//   Dropdown,
//   Card,
// } from "react-bootstrap";
// import { FaFileExcel, FaFilePdf, FaEye, FaEdit, FaTrash } from "react-icons/fa"; // Added icons

// const AppraisalPage = () => {
//   const [appraisals, setAppraisals] = useState([
//     {
//       id: 1,
//       employeeName: "John Doe",
//       appraisalDate: "2024-03-15",
//       appraisalScore: 85,
//       status: "Completed",
//     },
//     {
//       id: 2,
//       employeeName: "Jane Smith",
//       appraisalDate: "2024-03-18",
//       appraisalScore: 90,
//       status: "Pending",
//     },
//   ]);

//   const [filteredAppraisals, setFilteredAppraisals] = useState(appraisals);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     const filtered = appraisals.filter((appraisal) =>
//       appraisal.employeeName
//         .toLowerCase()
//         .includes(e.target.value.toLowerCase())
//     );
//     setFilteredAppraisals(filtered);
//   };

//   const handleExport = (type) => {
//     // Implement the export functionality for Excel or PDF
//     console.log("Exporting as", type);
//   };

//   return (
//     <Container fluid className="mt-4">
//       <Row>
//         <Col xs={12} className="mb-4">
//           <h2 className="text-center mb-3">Employee Appraisals</h2>
//           <p className="text-center text-muted">
//             Manage and track employee performance appraisals.
//           </p>
//         </Col>
//       </Row>

//       {/* Search and Export Section */}
//       <Row className="mb-3">
//         <Col md={4}>
//           <InputGroup>
//             <Form.Control
//               type="text"
//               placeholder="Search by employee name"
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//           </InputGroup>
//         </Col>
//         <Col md={8} className="d-flex justify-content-end">
//           <Button variant="primary" className="mr-2">
//             Add New Appraisal
//           </Button>
//           <DropdownButton
//             variant="secondary"
//             title="Export"
//             id="export-dropdown"
//             className="mr-2"
//           >
//             <Dropdown.Item onClick={() => handleExport("PDF")}>
//               <FaFilePdf /> Export to PDF
//             </Dropdown.Item>
//             <Dropdown.Item onClick={() => handleExport("Excel")}>
//               <FaFileExcel /> Export to Excel
//             </Dropdown.Item>
//           </DropdownButton>
//         </Col>
//       </Row>

//       {/* Appraisal Table */}
//       <Row>
//         <Col xs={12}>
//           <Card className="shadow-sm mb-4">
//             <Card.Body>
//               <Table striped bordered hover responsive>
//                 <thead className="bg-info text-white">
//                   <tr>
//                     <th>Employee Name</th>
//                     <th>Appraisal Date</th>
//                     <th>Appraisal Score</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredAppraisals.map((appraisal) => (
//                     <tr key={appraisal.id}>
//                       <td>{appraisal.employeeName}</td>
//                       <td>{appraisal.appraisalDate}</td>
//                       <td>{appraisal.appraisalScore}</td>
//                       <td>
//                         <span
//                           className={
//                             appraisal.status === "Completed"
//                               ? "badge bg-success"
//                               : "badge bg-warning"
//                           }
//                         >
//                           {appraisal.status}
//                         </span>
//                       </td>
//                       <td>
//                         <Link to={`/appraisedetailpage/${appraisal.id}`}>
                         
//                           <Button variant="info" className="mr-2">
//                             <FaEye /> {/* View icon */}
//                           </Button>
//                         </Link>
//                         <Button variant="warning" className="mr-2">
//                           <FaEdit /> {/* Edit icon */}
//                         </Button>
//                         <Button variant="danger">
//                           <FaTrash /> {/* Delete icon */}
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Pagination */}
//       <Row>
//         <Col xs={12} className="d-flex justify-content-end">
//           <Pagination>
//             <Pagination.Prev />
//             <Pagination.Item>1</Pagination.Item>
//             <Pagination.Item>2</Pagination.Item>
//             <Pagination.Item>3</Pagination.Item>
//             <Pagination.Next />
//           </Pagination>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AppraisalPage;



import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Pagination,
  DropdownButton,
  Dropdown,
  Card,
} from "react-bootstrap";
import { FaFileExcel, FaFilePdf, FaEye, FaEdit, FaTrash } from "react-icons/fa"; // Added icons
import { useSelector } from "react-redux"; // Import useSelector for Redux state
import AppraisalForm from "./AppraisalForm";

const AppraisalPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  // Fetching darkMode from the Redux store
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const [appraisals, setAppraisals] = useState([
    {
      id: 1,
      employeeName: "John Doe",
      appraisalDate: "2024-03-15",
      appraisalScore: 85,
      status: "Completed",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      appraisalDate: "2024-03-18",
      appraisalScore: 90,
      status: "Pending",
    },
  ]);

  const [filteredAppraisals, setFilteredAppraisals] = useState(appraisals);
  const [searchQuery, setSearchQuery] = useState("");

   const handleCloseModal = () => {
    setIsModalOpen(false);
    }
    const handleOpenModal = () => {
      setIsModalOpen(true);
      }

 
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = appraisals.filter((appraisal) =>
      appraisal.employeeName
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setFilteredAppraisals(filtered);
  };

  const handleExport = (type) => {
    console.log("Exporting as", type);
  };

  return (
    <Container
      fluid
      className={`${darkMode ? "bg-dark text-white" : ""} mt-4`}
    >
      <Row>
        <Col xs={8} className="mb-4 font-bold text-3xl">
          <h2 className="text-start mb-3">Employee Appraisals</h2>
        </Col>
        <Col xs={4} className="d-flex justify-content-end">
    

          <DropdownButton
            variant="secondary"
            title="Export"
            id="export-dropdown"
            className="mr-2"
          >
            <Dropdown.Item onClick={() => handleExport("PDF")}>
              <FaFilePdf /> Export to PDF
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleExport("Excel")}>
              <FaFileExcel /> Export to Excel
            </Dropdown.Item>
          </DropdownButton>
          <Button variant="btn inv-new-button" className="mr-2" onClick={handleOpenModal}>
            Add New Appraisal
          </Button>
        </Col>

      </Row>

      {/* Search and Export Section */}
      <Row className="mb-3">
        <Col md={4}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search by employee name"
              value={searchQuery}
              onChange={handleSearch}
            />
          </InputGroup>
        </Col>
        <Col md={8} className="d-flex justify-content-end">
          {/* Filtered by Rating Button with Dropdown */}
          <DropdownButton
            variant="outline-info"
            title="Filter Rating"
            id="rating-dropdown"
            className="mr-2"
          >
            <Dropdown.Item onClick={() => handleFilterByRating("High")}>
              High
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterByRating("Medium")}>
              Medium
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterByRating("Low")}>
              Low
            </Dropdown.Item>
          </DropdownButton>

          {/* Filtered by Status Button with Dropdown */}
          <DropdownButton
            variant="outline-warning"
            title="Filter Status"
            id="status-dropdown"
            className="mr-2"
          >
            <Dropdown.Item onClick={() => handleFilterByStatus("Active")}>
              Active
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterByStatus("Inactive")}>
              Inactive
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterByStatus("Pending")}>
              Pending
            </Dropdown.Item>
          </DropdownButton>

      
        </Col>
      </Row>

      {/* Appraisal Table */}
      <Row>
        <Col xs={12}>
          <Card
            className={`${darkMode ? "bg-dark text-white" : ""} shadow-sm mb-4`}
          >
            <Card.Body>
              <Table
                striped
                bordered
                hover
                responsive
                className={`${darkMode ? "table-dark" : ""} table-hover`}
              >
                <thead className="bg-info text-white">
                  <tr>
                    <th>Employee Name</th>
                    <th>Appraisal Date</th>
                    <th>Appraisal Score</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppraisals.map((appraisal) => (
                    <tr key={appraisal.id}>
                      <td>{appraisal.employeeName}</td>
                      <td>{appraisal.appraisalDate}</td>
                      <td>{appraisal.appraisalScore}</td>
                      <td>
                        <span
                          className={
                            appraisal.status === "Completed"
                              ? "badge bg-success"
                              : "badge bg-warning"
                          }
                        >
                          {appraisal.status}
                        </span>
                      </td>
                      <td>
                        <Link to={`/appraisedetailpage/${appraisal.id}`}>
                          <Button variant="link" className="mr-2">
                            <FaEye color="#000000" /> {/* View icon */}
                          </Button>
                        </Link>
                        <Button variant="link" className="mr-2">
                          <FaEdit color="#007bff" /> {/* Edit icon */}
                        </Button>
                        <Button variant="link" className="mr-2">
                          <FaTrash color="#dc3545" /> {/* Delete icon */}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Pagination */}
      <Row>
        <Col xs={12} className="d-flex justify-content-end mt-3">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>


        {isModalOpen && (
              <>
                <div className="modal fade show d-block" role="dialog">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className={`${darkMode ? "dark-mode" : "border-none" } modal-content`}>
                      <div className={`${darkMode ? "dark-mode" : null } modal-header`}>
                        <h5 className="modal-title">Add Appraisal</h5>

                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={handleCloseModal}
                        />
                      </div>
                      <div className={`${darkMode ? "dark-mode" : null } modal-body`}>
                        <AppraisalForm handleclose={handleCloseModal} />
                      </div>
                    </div>
                  </div>
                </div>
   
                <div
                  className="modal-backdrop fade show"
                  onClick={handleCloseModal}
                ></div>
              </>
            )}
    </Container>
  );
};

export default AppraisalPage;





