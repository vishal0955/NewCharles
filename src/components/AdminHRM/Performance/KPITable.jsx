





// import React, { useState } from "react";
// import {
//   Table,
//   Container,
//   Row,
//   Col,
//   Button,
//   Form,
//   InputGroup,
//   DropdownButton,
//   Dropdown,
//   ProgressBar,
//   Card,
// } from "react-bootstrap";
// import {
//   FaFileExcel,
//   FaFilePdf,
//   FaEye,
//   FaEdit,
//   FaTrashAlt,
// } from "react-icons/fa"; // Importing icons
// import { Link } from "react-router-dom";
// import { Pagination } from "react-bootstrap";

// const KPITable = () => {
//   const [kpis, setKpis] = useState([
//     {
//       id: 1,
//       employeeName: "John Doe",
//       kpiName: "Sales Target",
//       target: 100,
//       actual: 85,
//       progress: 85,
//       status: "Not Achieved",
//     },
//     {
//       id: 2,
//       employeeName: "Jane Smith",
//       kpiName: "Customer Satisfaction",
//       target: 90,
//       actual: 92,
//       progress: 102,
//       status: "Achieved",
//     },
//   ]);

//   const [filteredKpis, setFilteredKpis] = useState(kpis);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     const filtered = kpis.filter((kpi) =>
//       kpi.employeeName.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setFilteredKpis(filtered);
//   };

//   const handleExport = (type) => {
//     console.log("Exporting as", type);
//   };

//   return (
//     <Container fluid className="mt-4">
//       <Row>
//         <Col xs={12} className="mb-4 text-center">
//           <h2 className="font-weight-bold text-primary mb-3">KPI Tracker</h2>
//           <p className="text-muted">
//             Track and manage employee performance KPIs.
//           </p>
//         </Col>
//       </Row>

//       {/* Search and Filter Section */}
//       <Row className="mb-4">
//         <Col md={4}>
//           <InputGroup>
//             <Form.Control
//               type="text"
//               placeholder="Search by employee name"
//               value={searchQuery}
//               onChange={handleSearch}
//               className="form-control-lg"
//             />
//           </InputGroup>
//         </Col>
//         <Col md={8} className="d-flex justify-content-end">
//           <Button variant="primary" className="mr-2">
//             Add New KPI
//           </Button>
//           <DropdownButton
//             variant="secondary"
//             title="Export"
//             id="export-dropdown"
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

//       {/* KPI Table */}
//       <Row>
//         <Col xs={12}>
//           <Card className="shadow-sm">
//             <Card.Body>
//               <Table striped bordered hover responsive className="table-hover">
//                 <thead className="bg-info text-white">
//                   <tr>
//                     <th>Employee Name</th>
//                     <th>KPI Name</th>
//                     <th>Target</th>
//                     <th>Actual</th>
//                     <th>Progress</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredKpis.map((kpi) => (
//                     <tr key={kpi.id}>
//                       <td>{kpi.employeeName}</td>
//                       <td>{kpi.kpiName}</td>
//                       <td>{kpi.target}</td>
//                       <td>{kpi.actual}</td>
//                       <td>
//                         <ProgressBar
//                           now={kpi.progress}
//                           label={`${kpi.progress}%`}
//                           variant={kpi.progress >= 100 ? "success" : "warning"}
//                         />
//                       </td>
//                       <td>
//                         <span
//                           className={
//                             kpi.status === "Achieved"
//                               ? "badge bg-success"
//                               : "badge bg-warning"
//                           }
//                         >
//                           {kpi.status}
//                         </span>
//                       </td>
//                       <td>
//                         {/* Adding Icons for View, Edit, Delete */}
//                         <Link to={`/kpi/${kpi.id}`}>
//                           <Button variant="info" className="mr-2">
//                             <FaEye />
//                           </Button>
//                         </Link>
//                         <Button variant="warning" className="mr-2">
//                           <FaEdit />
//                         </Button>
//                         <Button variant="danger">
//                           <FaTrashAlt /> 
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
//         <Col xs={12} className="d-flex justify-content-end mt-3">
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

// export default KPITable;


import React, { useState } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  DropdownButton,
  Dropdown,
  ProgressBar,
  Card,
  Pagination,
} from "react-bootstrap";
import {
  FaFileExcel,
  FaFilePdf,
  FaEye,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const KPITable = () => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const [kpis, setKpis] = useState([
    {
      id: 1,
      employeeName: "John Doe",
      kpiName: "Sales Target",
      target: 100,
      actual: 85,
      progress: 85,
      status: "Not Achieved",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      kpiName: "Customer Satisfaction",
      target: 90,
      actual: 92,
      progress: 102,
      status: "Achieved",
    },
  ]);

  const [filteredKpis, setFilteredKpis] = useState(kpis);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = kpis.filter((kpi) =>
      kpi.employeeName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredKpis(filtered);
  };

  const handleExport = (type) => {
    console.log("Exporting as", type);
  };

  return (
    <Container fluid className={`${darkMode ? "bg-dark text-white" : ""} mt-4`} style={{height:"100vh"}}>
    
      <Row>
        <Col xs={12} className="mb-4 text-start text-3xl font-bold">
          <h2 className="font-weight-bold mb-3">KPI Tracker</h2>
        </Col>
      </Row>

      {/* Search and Filter Section */}
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

          <Button variant="primary" className="mr-2">
            Add New KPI
          </Button>

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
        </Col>
      </Row>

      {/* KPI Table */}
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
                    <th>KPI Name</th>
                    <th>Target</th>
                    <th>Actual</th>
                    <th>Progress</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredKpis.map((kpi) => (
                    <tr key={kpi.id}>
                      <td>{kpi.employeeName}</td>
                      <td>{kpi.kpiName}</td>
                      <td>{kpi.target}</td>
                      <td>{kpi.actual}</td>
                      <td>
                        <ProgressBar
                          now={kpi.progress}
                          label={`${kpi.progress}%`}
                          variant={kpi.progress >= 100 ? "success" : "warning"}
                        />
                      </td>
                      <td>
                        <span
                          className={
                            kpi.status === "Achieved"
                              ? "badge bg-success"
                              : "badge bg-warning"
                          }
                        >
                          {kpi.status}
                        </span>
                      </td>
                      <td>
                        <Link to={`/kpi/${kpi.id}`}>
                          <Button variant="link" className="mr-2">
                            <FaEye color="#000000" /> {/* View icon */}
                          </Button>
                        </Link>
                        <Button variant="link" className="mr-2">
                          <FaEdit color="#007bff" />
                        </Button>
                        <Button variant="link">
                          <FaTrashAlt color="#dc3545" />
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
    </Container>
  );
};

export default KPITable;
