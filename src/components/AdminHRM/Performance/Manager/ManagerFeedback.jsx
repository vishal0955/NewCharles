// import React, { useState } from 'react';
// import { Table, Button, Form, Row, Col, Modal } from 'react-bootstrap';

// const ManagerFeedback = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [viewFeedback, setViewFeedback] = useState(null); // State to store the feedback to view
//   const [searchTerm, setSearchTerm] = useState('');

//   const feedbackData = [
//     {
//       id: 1,
//       name: 'Nikurj Kumar',
//       date: '2024-04-10',
//       rating: '4.5',
//       workQuality: 5,
//       teamwork: 4,
//       initiative: 4,
//       comments: 'Great performance.',
//       suggestions: 'Improve communication skills.',
//       status: 'Reviewed',
//     },
//     {
//       id: 2,
//       name: 'John Doe',
//       date: '2024-04-12',
//       rating: '4.0',
//       workQuality: 4,
//       teamwork: 5,
//       initiative: 3,
//       comments: 'Good team player.',
//       suggestions: 'Take more initiative in projects.',
//       status: 'Pending',
//     },
//     // 12 additional dummy feedback entries
//     {
//       id: 3,
//       name: 'Jane Smith',
//       date: '2024-04-15',
//       rating: '4.8',
//       workQuality: 5,
//       teamwork: 5,
//       initiative: 4,
//       comments: 'Excellent work.',
//       suggestions: 'Keep up the great work.',
//       status: 'Reviewed',
//     },
//     {
//       id: 4,
//       name: 'Emily Davis',
//       date: '2024-04-18',
//       rating: '3.9',
//       workQuality: 4,
//       teamwork: 3,
//       initiative: 4,
//       comments: 'Good effort.',
//       suggestions: 'Focus on teamwork.',
//       status: 'Pending',
//     },
//     {
//       id: 5,
//       name: 'Michael Brown',
//       date: '2024-04-20',
//       rating: '4.2',
//       workQuality: 4,
//       teamwork: 4,
//       initiative: 4,
//       comments: 'Consistent performance.',
//       suggestions: 'Take more ownership of tasks.',
//       status: 'Reviewed',
//     },
//     {
//       id: 6,
//       name: 'Sophia Wilson',
//       date: '2024-04-22',
//       rating: '4.7',
//       workQuality: 5,
//       teamwork: 5,
//       initiative: 4,
//       comments: 'Great leadership skills.',
//       suggestions: 'Continue mentoring others.',
//       status: 'Reviewed',
//     },
//     {
//       id: 7,
//       name: 'James Taylor',
//       date: '2024-04-25',
//       rating: '3.8',
//       workQuality: 4,
//       teamwork: 3,
//       initiative: 4,
//       comments: 'Needs improvement in communication.',
//       suggestions: 'Work on clarity in communication.',
//       status: 'Pending',
//     },
//     {
//       id: 8,
//       name: 'Olivia Martinez',
//       date: '2024-04-28',
//       rating: '4.6',
//       workQuality: 5,
//       teamwork: 4,
//       initiative: 5,
//       comments: 'Excellent initiative.',
//       suggestions: 'Maintain consistency.',
//       status: 'Reviewed',
//     },
//     {
//       id: 9,
//       name: 'William Anderson',
//       date: '2024-05-01',
//       rating: '4.3',
//       workQuality: 4,
//       teamwork: 4,
//       initiative: 4,
//       comments: 'Good overall performance.',
//       suggestions: 'Focus on attention to detail.',
//       status: 'Reviewed',
//     },
//     {
//       id: 10,
//       name: 'Isabella Thomas',
//       date: '2024-05-03',
//       rating: '4.9',
//       workQuality: 5,
//       teamwork: 5,
//       initiative: 5,
//       comments: 'Outstanding performance.',
//       suggestions: 'Keep up the excellent work.',
//       status: 'Reviewed',
//     },
//     {
//       id: 11,
//       name: 'Alexander Moore',
//       date: '2024-05-05',
//       rating: '3.7',
//       workQuality: 4,
//       teamwork: 3,
//       initiative: 3,
//       comments: 'Needs improvement in teamwork.',
//       suggestions: 'Collaborate more with peers.',
//       status: 'Pending',
//     },
//     {
//       id: 12,
//       name: 'Mia Jackson',
//       date: '2024-05-08',
//       rating: '4.4',
//       workQuality: 4,
//       teamwork: 5,
//       initiative: 4,
//       comments: 'Great team player.',
//       suggestions: 'Take on more challenging tasks.',
//       status: 'Reviewed',
//     },
//     {
//       id: 13,
//       name: 'Ethan White',
//       date: '2024-05-10',
//       rating: '4.1',
//       workQuality: 4,
//       teamwork: 4,
//       initiative: 4,
//       comments: 'Consistent and reliable.',
//       suggestions: 'Focus on innovation.',
//       status: 'Reviewed',
//     },
//     {
//       id: 14,
//       name: 'Charlotte Harris',
//       date: '2024-05-12',
//       rating: '4.5',
//       workQuality: 5,
//       teamwork: 4,
//       initiative: 4,
//       comments: 'Great attention to detail.',
//       suggestions: 'Continue refining skills.',
//       status: 'Reviewed',
//     },
//   ];

//   const handleViewFeedback = (feedback) => {
//     setViewFeedback(feedback);
//     setShowModal(true);
//   };

//   return (
//     <div className="container py-4">
//       {/* Header Cards */}
//       <Row className="mb-4 text-center">
//         <Col><div className="bg-primary text-white p-3 rounded shadow"><strong>Total Feedback</strong><br /> 2.18M</div></Col>
//         <Col><div className="bg-warning text-white p-3 rounded shadow"><strong>Pending</strong><br /> 618.02K</div></Col>
//         <Col><div className="bg-danger text-white p-3 rounded shadow"><strong>New This Month</strong><br /> 990.58K</div></Col>
//         <Col><div className="bg-secondary text-white p-3 rounded shadow"><strong>Reviewed</strong><br /> 201.02K</div></Col>
//       </Row>

//       {/* Filter Buttons */}
//       <div className="mb-3 d-flex flex-wrap gap-2">
//         <Button variant="primary">All Feedback</Button>
//         <Button variant="outline-primary">Pending</Button>
//         <Button variant="outline-primary">Reviewed</Button>
//         <Button variant="outline-primary">My Team</Button>
//         <Button variant="outline-primary">All Views</Button>
//       </div>

//       {/* Search and Filters */}
//       <Row className="mb-3">
//         <Col md={4}>
//           <Form.Control
//             type="text"
//             placeholder="Search Employee..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </Col>
//         <Col md={2}><Form.Select><option>Rating</option></Form.Select></Col>
//         <Col md={2}><Form.Select><option>Status</option></Form.Select></Col>
//         <Col md={2}><Form.Select><option>Date</option></Form.Select></Col>
//         <Col md={2}><Button variant="success" onClick={() => setShowModal(true)}>Add Feedback</Button></Col>
//       </Row>

//       {/* Feedback Table */}
//       <Table bordered hover responsive className="shadow-sm">
//         <thead className="table-light">
//           <tr>
//             <th><Form.Check type="checkbox" /></th>
//             <th>Employee Name</th>
//             <th>Feedback Date</th>
//             <th>Rating</th>
//             <th>Comments</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {feedbackData.map((item) => (
//             <tr key={item.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{item.name}</td>
//               <td>{item.date}</td>
//               <td>{item.rating}</td>
//               <td>{item.comments}</td>
//               <td>{item.status}</td>
//               <td>
//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   className="me-1"
//                   onClick={() => handleViewFeedback(item)}
//                 >
//                   View
//                 </Button>
//                 <Button variant="outline-primary" size="sm" className="me-1">Edit</Button>
//                 <Button variant="outline-success" size="sm">Export</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Pagination */}
//       <div className="d-flex justify-content-between align-items-center">
//         <div>Showing 1 to 10 of 15 entries</div>
//         <div>
//           <Button variant="light" disabled>{'<'}</Button>
//           <Button variant="primary" className="mx-1">1</Button>
//           <Button variant="light">2</Button>
//           <Button variant="light">{'>'}</Button>
//         </div>
//       </div>

//       {/* Modal for Viewing Feedback */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>View Feedback</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {viewFeedback && (
//             <Form>
//               <Form.Group className="mb-3">
//                 <Form.Label>Employee Name</Form.Label>
//                 <Form.Control type="text" value={viewFeedback.name} readOnly />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Feedback Date</Form.Label>
//                 <Form.Control type="text" value={viewFeedback.date} readOnly />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Work Quality</Form.Label>
//                 <Form.Control type="number" value={viewFeedback.workQuality} readOnly />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Teamwork</Form.Label>
//                 <Form.Control type="number" value={viewFeedback.teamwork} readOnly />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Initiative</Form.Label>
//                 <Form.Control type="number" value={viewFeedback.initiative} readOnly />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Comments</Form.Label>
//                 <Form.Control as="textarea" rows={3} value={viewFeedback.comments} readOnly />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Suggestions for Improvement</Form.Label>
//                 <Form.Control as="textarea" rows={3} value={viewFeedback.suggestions} readOnly />
//               </Form.Group>
//             </Form>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ManagerFeedback;


import React, { useState } from 'react';
import { Table, Button, Form, Row, Col, Modal } from 'react-bootstrap';

const ManagerFeedback = () => {
  const [showModal, setShowModal] = useState(false);
  const [viewFeedback, setViewFeedback] = useState(null); // State to store the feedback to view
  const [searchTerm, setSearchTerm] = useState('');

  const feedbackData = [
    {
      id: 1,
      name: 'Nikurj Kumar',
      date: '2024-04-10',
      rating: '4.5',
      workQuality: 5,
      teamwork: 4,
      initiative: 4,
      comments: 'Great performance.',
      suggestions: 'Improve communication skills.',
      status: 'Reviewed',
    },
    {
      id: 2,
      name: 'John Doe',
      date: '2024-04-12',
      rating: '4.0',
      workQuality: 4,
      teamwork: 5,
      initiative: 3,
      comments: 'Good team player.',
      suggestions: 'Take more initiative in projects.',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Jane Smith',
      date: '2024-04-15',
      rating: '4.8',
      workQuality: 5,
      teamwork: 5,
      initiative: 4,
      comments: 'Excellent work.',
      suggestions: 'Keep up the great work.',
      status: 'Reviewed',
    },
    {
      id: 4,
      name: 'Emily Davis',
      date: '2024-04-18',
      rating: '3.9',
      workQuality: 4,
      teamwork: 3,
      initiative: 4,
      comments: 'Good effort.',
      suggestions: 'Focus on teamwork.',
      status: 'Pending',
    },
    {
      id: 5,
      name: 'Michael Brown',
      date: '2024-04-20',
      rating: '4.2',
      workQuality: 4,
      teamwork: 4,
      initiative: 4,
      comments: 'Consistent performance.',
      suggestions: 'Take more ownership of tasks.',
      status: 'Reviewed',
    },
    {
      id: 6,
      name: 'Sophia Wilson',
      date: '2024-04-22',
      rating: '4.7',
      workQuality: 5,
      teamwork: 5,
      initiative: 4,
      comments: 'Great leadership skills.',
      suggestions: 'Continue mentoring others.',
      status: 'Reviewed',
    },
    {
      id: 7,
      name: 'James Taylor',
      date: '2024-04-25',
      rating: '3.8',
      workQuality: 4,
      teamwork: 3,
      initiative: 4,
      comments: 'Needs improvement in communication.',
      suggestions: 'Work on clarity in communication.',
      status: 'Pending',
    },
    {
      id: 8,
      name: 'Olivia Martinez',
      date: '2024-04-28',
      rating: '4.6',
      workQuality: 5,
      teamwork: 4,
      initiative: 5,
      comments: 'Excellent initiative.',
      suggestions: 'Maintain consistency.',
      status: 'Reviewed',
    },
    {
      id: 9,
      name: 'William Anderson',
      date: '2024-05-01',
      rating: '4.3',
      workQuality: 4,
      teamwork: 4,
      initiative: 4,
      comments: 'Good overall performance.',
      suggestions: 'Focus on attention to detail.',
      status: 'Reviewed',
    },
    {
      id: 10,
      name: 'Isabella Thomas',
      date: '2024-05-03',
      rating: '4.9',
      workQuality: 5,
      teamwork: 5,
      initiative: 5,
      comments: 'Outstanding performance.',
      suggestions: 'Keep up the excellent work.',
      status: 'Reviewed',
    },
    {
      id: 11,
      name: 'Alexander Moore',
      date: '2024-05-05',
      rating: '3.7',
      workQuality: 4,
      teamwork: 3,
      initiative: 3,
      comments: 'Needs improvement in teamwork.',
      suggestions: 'Collaborate more with peers.',
      status: 'Pending',
    },
    {
      id: 12,
      name: 'Mia Jackson',
      date: '2024-05-08',
      rating: '4.4',
      workQuality: 4,
      teamwork: 5,
      initiative: 4,
      comments: 'Great team player.',
      suggestions: 'Take on more challenging tasks.',
      status: 'Reviewed',
    },
    {
      id: 13,
      name: 'Ethan White',
      date: '2024-05-10',
      rating: '4.1',
      workQuality: 4,
      teamwork: 4,
      initiative: 4,
      comments: 'Consistent and reliable.',
      suggestions: 'Focus on innovation.',
      status: 'Reviewed',
    },
    {
      id: 14,
      name: 'Charlotte Harris',
      date: '2024-05-12',
      rating: '4.5',
      workQuality: 5,
      teamwork: 4,
      initiative: 4,
      comments: 'Great attention to detail.',
      suggestions: 'Continue refining skills.',
      status: 'Reviewed',
    },
  ];

  const handleViewFeedback = (feedback) => {
    setViewFeedback(feedback);
    setShowModal(true);
  };

  return (
    <div className="container py-4">
        <h2 className='text-start'>Manager Feedback</h2>
      {/* Header Cards */}
      <Row className="mb-4 text-center">
        <Col><div className="bg-primary text-white p-3 rounded shadow"><strong>Total Feedback</strong><br /> 2.18M</div></Col>
        <Col><div className="bg-warning text-white p-3 rounded shadow"><strong>Pending</strong><br /> 618.02K</div></Col>
        <Col><div className="bg-danger text-white p-3 rounded shadow"><strong>New This Month</strong><br /> 990.58K</div></Col>
        <Col><div className="bg-secondary text-white p-3 rounded shadow"><strong>Reviewed</strong><br /> 201.02K</div></Col>
      </Row>

      {/* Filter Buttons */}
      <div className="mb-3 d-flex flex-wrap gap-2">
        <Button variant="primary">All Feedback</Button>
        <Button variant="outline-primary">Pending</Button>
        <Button variant="outline-primary">Reviewed</Button>
        <Button variant="outline-primary">My Team</Button>
        <Button variant="outline-primary">All Views</Button>
      </div>

      {/* Search and Filters */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search Employee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={2}><Form.Select><option>Rating</option></Form.Select></Col>
        <Col md={2}><Form.Select><option>Status</option></Form.Select></Col>
        <Col md={2}><Form.Select><option>Date</option></Form.Select></Col>
        <Col md={2}><Button variant="success" onClick={() => setShowModal(true)}>Add Feedback</Button></Col>
      </Row>

      {/* Feedback Table */}
      <Table bordered hover responsive className="shadow-sm">
        <thead className="table-light">
          <tr>
            <th><Form.Check type="checkbox" /></th>
            <th>Employee Name</th>
            <th>Feedback Date</th>
            <th>Rating</th>
            <th>Comments</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((item) => (
            <tr key={item.id}>
              <td><Form.Check type="checkbox" /></td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.rating}</td>
              <td>{item.comments}</td>
              <td>{item.status}</td>
              <td>
                <Button className='gap-2'
                  
                  onClick={() => setViewFeedback(item)} // Pass the correct data for the clicked row
                >
                  View
                </Button>
                <Button variant="outline-success" size="sm">Export</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <div>Showing 1 to 10 of 15 entries</div>
        <div>
          <Button variant="light" disabled>{'<'}</Button>
          <Button variant="primary" className="mx-1">1</Button>
          <Button variant="light">2</Button>
          <Button variant="light">{'>'}</Button>
        </div>
      </div>
 {/* Modal for Add/Edit Feedback */}
 <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Manager Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" placeholder="Rate 1-5" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Comments</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="secondary" className="me-2" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="primary">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>


      {/* view */}
      <Modal show={viewFeedback !== null} onHide={() => setViewFeedback(null)} size="lg">
  <Modal.Header closeButton>
    <Modal.Title>Employee Feedback Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {viewFeedback && (
      <div className="d-flex flex-wrap gap-4">
        {/* Project Details Card */}
        <div className="flex-grow-1 p-3 bg-light rounded shadow-sm" style={{ minWidth: '300px' }}>
          <h5>Performance Summary</h5>
          <p>{viewFeedback.comments}</p>
          <Row className="mb-2">
            <Col><strong>Date:</strong> {viewFeedback.date}</Col>
            <Col><strong>Rating:</strong> {viewFeedback.rating}</Col>
          </Row>
          <Row className="mb-2">
            <Col><strong>Work Quality:</strong> {viewFeedback.workQuality}</Col>
            <Col><strong>Teamwork:</strong> {viewFeedback.teamwork}</Col>
            <Col><strong>Initiative:</strong> {viewFeedback.initiative}</Col>
          </Row>
          <div><strong>Status:</strong> <span className={`badge bg-${viewFeedback.status === 'Reviewed' ? 'success' : 'warning'}`}>{viewFeedback.status}</span></div>
        </div>

        {/* Custom Fields Card */}
        <div className="p-3 bg-light rounded shadow-sm" style={{ minWidth: '250px' }}>
          <h5>Custom Fields</h5>
          <p><strong>Name:</strong> {viewFeedback.name}</p>
          <p><strong>Email:</strong> john.anderson@example.com</p> {/* Static for now */}
          <p><strong>Phone:</strong> +1 (555) 123-4567</p> {/* Static */}
          <p><strong>Organization:</strong> Tech Solutions Inc.</p> {/* Static */}
        </div>
      </div>
    )}
  </Modal.Body>
</Modal>

    </div>
  );
};

export default ManagerFeedback;