// import React from 'react';
// import { Table, Button, Form, Row, Col, InputGroup } from 'react-bootstrap';

// const ReviewSummary = () => {
//   return (
//     <div className="container mt-4">
//       {/* Summary Cards */}
//       <Row className="mb-4">
//         <Col><div className="p-3 bg-primary text-white rounded shadow-sm"><h6>Total Reviews</h6><h4>1.2K</h4></div></Col>
//         <Col><div className="p-3 bg-warning text-white rounded shadow-sm"><h6>Pending Reviews</h6><h4>480</h4></div></Col>
//         <Col><div className="p-3 bg-danger text-white rounded shadow-sm"><h6>Completed Reviews</h6><h4>720</h4></div></Col>
//       </Row>

//       {/* Filters & Actions */}
//       <Row className="align-items-center mb-3">
//         <Col md={4}>
//           <Form.Control type="text" placeholder="Search by employee name..." />
//         </Col>
//         <Col md={2}>
//           <Form.Select>
//             <option>All Status</option>
//             <option>Pending</option>
//             <option>Completed</option>
//           </Form.Select>
//         </Col>
//         <Col md={2}>
//           <Form.Select>
//             <option>All Ratings</option>
//             <option>1 - Poor</option>
//             <option>2 - Fair</option>
//             <option>3 - Good</option>
//             <option>4 - Very Good</option>
//             <option>5 - Excellent</option>
//           </Form.Select>
//         </Col>
//         <Col md={4} className="text-end">
//           <Button variant="primary" className="me-2">Add</Button>
//           <Button variant="secondary">Export</Button>
//         </Col>
//       </Row>

//       {/* Table */}
//       <Table bordered hover responsive className="shadow-sm">
//         <thead className="table-light">
//           <tr>
//             <th><Form.Check type="checkbox" /></th>
//             <th>Employee Name</th>
//             <th>Review Date</th>
//             <th>Status</th>
//             <th>Rating</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.from({ length: 10 }).map((_, idx) => (
//             <tr key={idx}>
//                 <td><Form.Check type="checkbox" /></td>
//               <td>Jane Doe</td>
//               <td>2024-12-15</td>
//               <td>Completed</td>
//               <td>4</td>
//               <td>
//                 <Button variant="outline-primary" size="sm" className="me-1">View</Button>
//                 <Button variant="outline-warning" size="sm" className="me-1">Edit</Button>
//                 <Button variant="outline-success" size="sm">Export</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Pagination */}
//       <div className="d-flex justify-content-between align-items-center">
//         <span>Showing 1 to 10 of 50 entries</span>
//         <div>
//           <Button variant="light" size="sm" className="me-2">&laquo;</Button>
//           <Button variant="primary" size="sm" className="me-2">1</Button>
//           <Button variant="light" size="sm">2</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewSummary;


// import React from 'react';
// import { Table, Button, Form, Row, Col, InputGroup } from 'react-bootstrap';

// const ReviewSummary = () => {
//   return (
//     <div className="container mt-4">
//         <h2 className='text-start'>Review Summary</h2>
//       {/* Summary Cards */}
//       <Row className="mb-4">
//         <Col><div className="p-3 bg-primary text-white rounded shadow-sm"><h6>Total Reviews</h6><h4>1.2K</h4></div></Col>
//         <Col><div className="p-3 bg-warning text-white rounded shadow-sm"><h6>Pending Reviews</h6><h4>480</h4></div></Col>
//         <Col><div className="p-3 bg-danger text-white rounded shadow-sm"><h6>Completed Reviews</h6><h4>720</h4></div></Col>
//       </Row>

//       {/* Filters & Actions */}
//       <Row className="align-items-center mb-3">
//         <Col md={4}>
//           <Form.Control type="text" placeholder="Search by employee name..." />
//         </Col>
//         <Col md={2}>
//           <Form.Select>
//             <option>All Status</option>
//             <option>Pending</option>
//             <option>Completed</option>
//           </Form.Select>
//         </Col>
//         <Col md={2}>
//           <Form.Select>
//             <option>All Ratings</option>
//             <option>1 - Poor</option>
//             <option>2 - Fair</option>
//             <option>3 - Good</option>
//             <option>4 - Very Good</option>
//             <option>5 - Excellent</option>
//           </Form.Select>
//         </Col>
//         <Col md={4} className="text-end">
//           {/* <Button variant="primary" className="me-2">Add</Button> */}
//           <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
//               Export
//             </button>
//             <ul className="dropdown-menu">
//               <li><a className="dropdown-item" href="#">Export as PDF</a></li>
//               <li><a className="dropdown-item" href="#">Export as Excel</a></li>
//             </ul>
//         </Col>
//       </Row>

//       {/* Table */}
//       <Table bordered hover responsive className="shadow-sm">
//         <thead className="table-light">
//           <tr>
//             <th><Form.Check type="checkbox" /></th>
//             <th>Employee Name</th>
//             <th>Review Date</th>
//             <th>Status</th>
//             <th>Rating</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.from({ length: 10 }).map((_, idx) => (
//             <tr key={idx}>
//                 <td><Form.Check type="checkbox" /></td>
//               <td>Jane Doe</td>
//               <td>2024-12-15</td>
//               <td>Completed</td>
//               <td>4</td>
//               <td>
//                 <Button variant="outline-primary" size="sm" className="me-1">View</Button>
//                 <Button variant="outline-warning" size="sm" className="me-1">Edit</Button>
//                 <Button variant="outline-success" size="sm">Export</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Pagination */}
//       <div className="d-flex justify-content-between align-items-center">
//         <span>Showing 1 to 10 of 50 entries</span>
//         <div>
//           <Button variant="light" size="sm" className="me-2">&laquo;</Button>
//           <Button variant="primary" size="sm" className="me-2">1</Button>
//           <Button variant="light" size="sm">2</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewSummary;

import React from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faFileExport } from '@fortawesome/free-solid-svg-icons';

const ReviewSummary = () => {
  return (
    <div className="container mt-4">
      <h2 className='text-start'>Review Summary</h2>

      {/* Summary Cards */}
      <Row className="mb-4">
        <Col><div className="p-3 bg-primary text-white rounded shadow-sm"><h6>Total Reviews</h6><h4>1.2K</h4></div></Col>
        <Col><div className="p-3 bg-warning text-white rounded shadow-sm"><h6>Pending Reviews</h6><h4>480</h4></div></Col>
        <Col><div className="p-3 bg-danger text-white rounded shadow-sm"><h6>Completed Reviews</h6><h4>720</h4></div></Col>
      </Row>

      {/* Filters & Actions */}
      <Row className="align-items-center mb-3">
        <Col md={4}>
          <Form.Control type="text" placeholder="Search by employee name..." />
        </Col>
        <Col md={2}>
          <Form.Select>
            <option>All Status</option>
            <option>Pending</option>
            <option>Completed</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select>
            <option>All Ratings</option>
            <option>1 - Poor</option>
            <option>2 - Fair</option>
            <option>3 - Good</option>
            <option>4 - Very Good</option>
            <option>5 - Excellent</option>
          </Form.Select>
        </Col>
        <Col md={4} className="text-end">
          <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
            Export
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Export as PDF</a></li>
            <li><a className="dropdown-item" href="#">Export as Excel</a></li>
          </ul>
        </Col>
      </Row>

      {/* Table */}
      <Table bordered hover responsive className="shadow-sm">
        <thead className="table-light">
          <tr>
            <th><Form.Check type="checkbox" /></th>
            <th>Employee Name</th>
            <th>Review Date</th>
            <th>Status</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, idx) => (
            <tr key={idx}>
              <td><Form.Check type="checkbox" /></td>
              <td>Jane Doe</td>
              <td>2024-12-15</td>
              <td>Completed</td>
              <td>4</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">
                  <FontAwesomeIcon icon={faEye} />
                </Button>
                <Button variant="outline-warning" size="sm" className="me-1">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
                <Button variant="outline-success" size="sm">
                  <FontAwesomeIcon icon={faFileExport} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <span>Showing 1 to 10 of 50 entries</span>
        <div>
          <Button variant="light" size="sm" className="me-2">&laquo;</Button>
          <Button variant="primary" size="sm" className="me-2">1</Button>
          <Button variant="light" size="sm">2</Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
