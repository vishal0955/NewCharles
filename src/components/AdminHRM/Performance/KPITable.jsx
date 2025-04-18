// import React, { useState } from "react";
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
//   ProgressBar,
//   Card,
// } from "react-bootstrap";
// import { FaFileExcel, FaFilePdf } from "react-icons/fa";

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
//   const [selectedEmployee, setSelectedEmployee] = useState("");
//   const [selectedStatus, setSelectedStatus] = useState("");

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     const filtered = kpis.filter((kpi) =>
//       kpi.employeeName.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setFilteredKpis(filtered);
//   };

//   const handleExport = (type) => {
//     // Implement the export functionality for Excel or PDF
//     console.log("Exporting as", type);
//   };

//   return (
//     <Container fluid className="mt-4">
//       <Row>
//         <Col xs={12} className="mb-4">
//           <h2 className="text-center mb-3">KPI Tracker</h2>
//           <p className="text-center text-muted">
//             Track and manage employee performance KPIs.
//           </p>
//         </Col>
//       </Row>

//       {/* Search and Filter Section */}
//       <Row className="mb-3">
//         <Col md={3}>
//           <InputGroup>
//             <Form.Control
//               type="text"
//               placeholder="Search by employee name"
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//           </InputGroup>
//         </Col>
//         <Col md={3}>
//           <Form.Control
//             as="select"
//             value={selectedEmployee}
//             onChange={(e) => setSelectedEmployee(e.target.value)}
//           >
//             <option value="">Select Employee</option>
//             {kpis.map((kpi) => (
//               <option key={kpi.id} value={kpi.employeeName}>
//                 {kpi.employeeName}
//               </option>
//             ))}
//           </Form.Control>
//         </Col>
//         <Col md={3}>
//           <Form.Control
//             as="select"
//             value={selectedStatus}
//             onChange={(e) => setSelectedStatus(e.target.value)}
//           >
//             <option value="">Select Status</option>
//             <option value="Achieved">Achieved</option>
//             <option value="Not Achieved">Not Achieved</option>
//           </Form.Control>
//         </Col>
//         <Col md={3} className="d-flex justify-content-end">
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
//           <Card className="shadow-sm mb-4">
//             <Card.Body>
//               <Table striped bordered hover responsive>
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
//                         <Button variant="info" className="mr-2">
//                           View
//                         </Button>
//                         <Button variant="warning" className="mr-2">
//                           Edit
//                         </Button>
//                         <Button variant="success">Export</Button>
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
//         <Col xs={12} className="text-center">
//           <Pagination>
//             <Pagination.Prev />
//             <Pagination.Item>1</Pagination.Item>
//             <Pagination.Item>2</Pagination.Item>
//             <Pagination.Item>3</Pagination.Item>
//             <Pagination.Next />
//           </Pagination>
//         </Col>
//       </Row>

//       {/* KPI Detail View */}
//       <Row>
//         <Col xs={12}>
//           <Card className="shadow-sm mb-4">
//             <Card.Body>
//               <h3>KPI Overview</h3>
//               <p>
//                 <strong>KPI Name:</strong> Sales Target
//               </p>
//               <p>
//                 <strong>Description:</strong> The target sales for the quarter.
//               </p>
//               <p>
//                 <strong>Target:</strong> 100 Sales
//               </p>
//               <p>
//                 <strong>Weightage:</strong> 20%
//               </p>
//               <p>
//                 <strong>Measurement Criteria:</strong> Sales Achievement
//               </p>
//               <h5>Employee Data:</h5>
//               <p>
//                 <strong>Actual Performance:</strong> 85 Sales
//               </p>
//               <p>
//                 <strong>Status:</strong> Not Achieved
//               </p>
//               <Button variant="warning" className="mr-2">
//                 Edit KPI
//               </Button>
//               <Button variant="success">Export to PDF/Excel</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default KPITable;




// import React, { useState } from "react";
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
//   ProgressBar,
//   Card,
// } from "react-bootstrap";
// import { FaFileExcel, FaFilePdf } from "react-icons/fa";

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
//     // Implement the export functionality for Excel or PDF
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
//                         <Button variant="info" className="mr-2">
//                           View
//                         </Button>
//                         <Button variant="warning" className="mr-2">
//                           Edit
//                         </Button>
//                         <Button variant="success">Export</Button>
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
//              <Col xs={12} className="d-flex justify-content-end mt-3">
//                <Pagination>
//                  <Pagination.Prev />
//                  <Pagination.Item>1</Pagination.Item>
//                  <Pagination.Item>2</Pagination.Item>
//                  <Pagination.Item>3</Pagination.Item>
//                  <Pagination.Next />
//                </Pagination>
//              </Col>
//            </Row>

//       {/* KPI Detail View */}
//       <Row>
//         <Col xs={12}>
//           <Card className="shadow-sm mt-5">
//             <Card.Body>
//               <h3 className="text-info">KPI Overview</h3>
//               <p>
//                 <strong>KPI Name:</strong> Sales Target
//               </p>
//               <p>
//                 <strong>Description:</strong> The target sales for the quarter.
//               </p>
//               <p>
//                 <strong>Target:</strong> 100 Sales
//               </p>
//               <p>
//                 <strong>Weightage:</strong> 20%
//               </p>
//               <p>
//                 <strong>Measurement Criteria:</strong> Sales Achievement
//               </p>
//               <h5 className="mt-3">Employee Data:</h5>
//               <p>
//                 <strong>Actual Performance:</strong> 85 Sales
//               </p>
//               <p>
//                 <strong>Status:</strong> Not Achieved
//               </p>
//               <Button variant="warning" className="mr-2">
//                 Edit KPI
//               </Button>
//               <Button variant="success">Export to PDF/Excel</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default KPITable;





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
// import { FaFileExcel, FaFilePdf } from "react-icons/fa";
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
//                         <Link to={`/kpi/${kpi.id}`}>
//                           <Button variant="info" className="mr-2">
//                             View
//                           </Button>
//                         </Link>
//                         <Button variant="warning" className="mr-2">
//                           Edit
//                         </Button>
//                         <Button variant="success">Export</Button>
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
} from "react-bootstrap";
import {
  FaFileExcel,
  FaFilePdf,
  FaEye,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const KPITable = () => {
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
    <Container fluid className="mt-4" style={{height:"100vh"}}>
      <Row>
        <Col xs={12} className="mb-4 text-center">
          <h2 className="font-weight-bold text-primary mb-3">KPI Tracker</h2>
          <p className="text-muted">
            Track and manage employee performance KPIs.
          </p>
        </Col>
      </Row>

      {/* Search and Filter Section */}
      <Row className="mb-4">
        <Col md={4}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search by employee name"
              value={searchQuery}
              onChange={handleSearch}
              className="form-control-lg"
            />
          </InputGroup>
        </Col>
        <Col md={8} className="d-flex justify-content-end">
          <Button variant="primary" className="mr-2">
            Add New KPI
          </Button>
          <DropdownButton
            variant="secondary"
            title="Export"
            id="export-dropdown"
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
          <Card className="shadow-sm">
            <Card.Body>
              <Table striped bordered hover responsive className="table-hover">
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
                        {/* Adding Icons for View, Edit, Delete */}
                        <Link to={`/kpi/${kpi.id}`}>
                          <Button variant="info" className="mr-2">
                            <FaEye />
                          </Button>
                        </Link>
                        <Button variant="warning" className="mr-2">
                          <FaEdit />
                        </Button>
                        <Button variant="danger">
                          <FaTrashAlt /> 
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
