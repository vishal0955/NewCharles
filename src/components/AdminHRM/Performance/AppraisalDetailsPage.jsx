
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom"; // Importing useNavigate
// import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

// const AppraisalDetailPage = () => {
//   const { id } = useParams();
//   const [appraisal, setAppraisal] = useState(null);
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   useEffect(() => {
//     const appraisalData = {
//       1: {
//         employeeName: "John Doe",
//         role: "Software Engineer",
//         department: "IT",
//         appraisalScore: 85,
//         managerFeedback: "John has shown significant improvement this year.",
//         goals: [
//           "Improve coding skills - Achieved",
//           "Increase team collaboration - Ongoing",
//         ],
//         startDate: "Jan 15, 2024",
//         dueDate: "Mar 30, 2024",
//         status: "In Progress",
//         priority: "High",
//         contactName: "John Anderson",
//         contactEmail: "john.anderson@example.com",
//         contactPhone: "+1 (555) 123-4567",
//         organization: "Tech Solutions Inc.",
//       },
//       2: {
//         employeeName: "Jane Smith",
//         role: "Data Analyst",
//         department: "Analytics",
//         appraisalScore: 90,
//         managerFeedback: "Excellent performance, consistently meeting goals.",
//         goals: [
//           "Data analysis efficiency - Achieved",
//           "Team collaboration - Achieved",
//         ],
//         startDate: "Feb 1, 2024",
//         dueDate: "Apr 10, 2024",
//         status: "Pending",
//         priority: "Medium",
//         contactName: "Jane Doe",
//         contactEmail: "jane.doe@example.com",
//         contactPhone: "+1 (555) 987-6543",
//         organization: "Data Corp.",
//       },
//     };

//     const appraisalId = parseInt(id, 10);
//     setAppraisal(appraisalData[appraisalId] || null);
//   }, [id]);

//   if (appraisal === null)
//     return <div className="text-center mt-5">Appraisal not found.</div>;

//   const statusVariant = {
//     "In Progress": "success",
//     Pending: "warning",
//     Completed: "primary",
//   };

//   const priorityVariant = {
//     High: "danger",
//     Medium: "warning",
//     Low: "secondary",
//   };

//   return (
//     <Container className="mt-5">
//       <h2 className="text-start font-weight-bold mb-4 text-primary">
//         Appraisal Details
//       </h2>
//       <Button variant="secondary" onClick={() => navigate(-1)} className="mb-4">
//         Back
//       </Button>
//       <Card className="shadow-lg border-0 rounded-lg">
//         <Card.Body>
//           <Row>
//             {/* Left Side: Employee Details */}
//             <Col md={6} className="border-end pe-5">
//               <h5 className="text-muted mb-3">Employee Information</h5>
//               <p className="fs-5 mb-3">
//                 <strong>Name:</strong> {appraisal.employeeName}
//               </p>
//               <p className="fs-5 mb-3">
//                 <strong>Role:</strong> {appraisal.role}
//               </p>
//               <p className="fs-5 mb-3">
//                 <strong>Department:</strong> {appraisal.department}
//               </p>
//               <p className="fs-5 mb-3">
//                 <strong>Score:</strong> {appraisal.appraisalScore}
//               </p>

//               <h6 className="mt-4 text-muted">Manager's Feedback</h6>
//               <p className="fst-italic text-primary mb-4">
//                 {appraisal.managerFeedback}
//               </p>

//               <h6 className="mt-3 text-muted">Goals & Achievements</h6>
//               <ul className="list-unstyled">
//                 {appraisal.goals.map((goal, idx) => (
//                   <li key={idx} className="fs-5 mb-2">
//                     <span className="badge bg-success">{goal}</span>
//                   </li>
//                 ))}
//               </ul>
//             </Col>

//             {/* Right Side: Project Details & Custom Fields */}
//             <Col md={6} className="ps-5">
//               <h5 className="text-muted mb-3">Project Details</h5>
//               <p className="fs-5 mb-3">
//                 <strong>Start Date:</strong> {appraisal.startDate}
//               </p>
//               <p className="fs-5 mb-3">
//                 <strong>Due Date:</strong> {appraisal.dueDate}
//               </p>
//               <p className="fs-5 mb-3">
//                 <strong>Status:</strong>{" "}
//                 <Badge bg={statusVariant[appraisal.status]} className="fs-5">
//                   {appraisal.status}
//                 </Badge>
//               </p>
//               <p className="fs-5 mb-3">
//                 <strong>Priority:</strong>{" "}
//                 <Badge
//                   bg={priorityVariant[appraisal.priority]}
//                   className="fs-5"
//                 >
//                   {appraisal.priority}
//                 </Badge>
//               </p>

//               <h6 className="mt-4 text-muted">Contact Information</h6>
//               <p className="fs-5 mb-3">
//                 <strong>Contact Name:</strong> {appraisal.contactName}
//               </p>
//               <p className="fs-5 mb-3">
//                 <strong>Email:</strong> {appraisal.contactEmail}
//               </p>
//               <p className="fs-5 mb-3">
//                 <strong>Phone:</strong> {appraisal.contactPhone}
//               </p>
//               <p className="fs-5 mb-3">
//                 <strong>Organization:</strong> {appraisal.organization}
//               </p>

//               <div className="d-flex justify-content-start">
//                 <Button variant="warning" className="me-3">
//                   Edit KPI
//                 </Button>
//                 <Button variant="success">Export to PDF/Excel</Button>
//               </div>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default AppraisalDetailPage;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importing useNavigate
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { useSelector } from "react-redux"; // Importing to get the dark mode state

const AppraisalDetailPage = () => {
  const { id } = useParams();
  const [appraisal, setAppraisal] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically
  const darkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state

  useEffect(() => {
    const appraisalData = {
      1: {
        employeeName: "John Doe",
        role: "Software Engineer",
        department: "IT",
        appraisalScore: 85,
        managerFeedback: "John has shown significant improvement this year.",
        goals: [
          "Improve coding skills - Achieved",
          "Increase team collaboration - Ongoing",
        ],
        startDate: "Jan 15, 2024",
        dueDate: "Mar 30, 2024",
        status: "In Progress",
        priority: "High",
        contactName: "John Anderson",
        contactEmail: "john.anderson@example.com",
        contactPhone: "+1 (555) 123-4567",
        organization: "Tech Solutions Inc.",
      },
      2: {
        employeeName: "Jane Smith",
        role: "Data Analyst",
        department: "Analytics",
        appraisalScore: 90,
        managerFeedback: "Excellent performance, consistently meeting goals.",
        goals: [
          "Data analysis efficiency - Achieved",
          "Team collaboration - Achieved",
        ],
        startDate: "Feb 1, 2024",
        dueDate: "Apr 10, 2024",
        status: "Pending",
        priority: "Medium",
        contactName: "Jane Doe",
        contactEmail: "jane.doe@example.com",
        contactPhone: "+1 (555) 987-6543",
        organization: "Data Corp.",
      },
    };

    const appraisalId = parseInt(id, 10);
    setAppraisal(appraisalData[appraisalId] || null);
  }, [id]);

  if (appraisal === null)
    return <div className="text-center mt-5">Appraisal not found.</div>;

  const statusVariant = {
    "In Progress": "success",
    Pending: "warning",
    Completed: "primary",
  };

  const priorityVariant = {
    High: "danger",
    Medium: "warning",
    Low: "secondary",
  };

  return (
    <div
      className={`container ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <h2 className="text-start font-weight-bold mb-4 text-primary">
        Appraisal Details
      </h2>
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-4">
        Back
      </Button>
      <Card
        className={`${
          darkMode ? "bg-dark text-white" : ""
        } shadow-lg border-0 rounded-lg`}
      >
        <Card.Body>
          <Row>
            {/* Left Side: Employee Details */}
            <Col md={6} className="border-end pe-5">
              <h5 className="text-muted mb-3">Employee Information</h5>
              <p className="fs-5 mb-3">
                <strong>Name:</strong> {appraisal.employeeName}
              </p>
              <p className="fs-5 mb-3">
                <strong>Role:</strong> {appraisal.role}
              </p>
              <p className="fs-5 mb-3">
                <strong>Department:</strong> {appraisal.department}
              </p>
              <p className="fs-5 mb-3">
                <strong>Score:</strong> {appraisal.appraisalScore}
              </p>

              <h6 className="mt-4 text-muted">Manager's Feedback</h6>
              <p className="fst-italic text-primary mb-4">
                {appraisal.managerFeedback}
              </p>

              <h6 className="mt-3 text-muted">Goals & Achievements</h6>
              <ul className="list-unstyled">
                {appraisal.goals.map((goal, idx) => (
                  <li key={idx} className="fs-5 mb-2">
                    <span className="badge bg-success">{goal}</span>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Right Side: Project Details & Custom Fields */}
            <Col md={6} className="ps-5">
              <h5 className="text-muted mb-3">Project Details</h5>
              <p className="fs-5 mb-3">
                <strong>Start Date:</strong> {appraisal.startDate}
              </p>
              <p className="fs-5 mb-3">
                <strong>Due Date:</strong> {appraisal.dueDate}
              </p>
              <p className="fs-5 mb-3">
                <strong>Status:</strong>{" "}
                <Badge bg={statusVariant[appraisal.status]} className="fs-5">
                  {appraisal.status}
                </Badge>
              </p>
              <p className="fs-5 mb-3">
                <strong>Priority:</strong>{" "}
                <Badge
                  bg={priorityVariant[appraisal.priority]}
                  className="fs-5"
                >
                  {appraisal.priority}
                </Badge>
              </p>

              <h6 className="mt-4 text-muted">Contact Information</h6>
              <p className="fs-5 mb-3">
                <strong>Contact Name:</strong> {appraisal.contactName}
              </p>
              <p className="fs-5 mb-3">
                <strong>Email:</strong> {appraisal.contactEmail}
              </p>
              <p className="fs-5 mb-3">
                <strong>Phone:</strong> {appraisal.contactPhone}
              </p>
              <p className="fs-5 mb-3">
                <strong>Organization:</strong> {appraisal.organization}
              </p>

              <div className="d-flex justify-content-start">
                <Button variant="warning" className="me-3">
                  Edit KPI
                </Button>
                <Button variant="success">Export to PDF/Excel</Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AppraisalDetailPage;
