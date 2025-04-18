// import React from "react";
// import { useParams } from "react-router-dom";
// import { Container, Card, Button } from "react-bootstrap";

// const KPIDetailPage = () => {
//   const { id } = useParams();

//   // Sample Data
//   const kpiDetails = {
//     1: {
//       kpiName: "Sales Target",
//       description: "The target sales for the quarter.",
//       target: 100,
//       weightage: "20%",
//       measurementCriteria: "Sales Achievement",
//       actualPerformance: 85,
//       status: "Not Achieved",
//     },
//     2: {
//       kpiName: "Customer Satisfaction",
//       description: "Measure customer satisfaction levels.",
//       target: 90,
//       weightage: "15%",
//       measurementCriteria: "Customer Feedback",
//       actualPerformance: 92,
//       status: "Achieved",
//     },
//   };

//   const kpi = kpiDetails[id];

//   if (!kpi) return <div>KPI not found.</div>;

//   return (
//     <Container fluid className="mt-4">
//       <h2 className="text-center mb-4">KPI Overview</h2>
//       <Card className="shadow-lg">
//         <Card.Body>
//           <h3 className="text-info">{kpi.kpiName}</h3>
//           <p>
//             <strong>Description:</strong> {kpi.description}
//           </p>
//           <p>
//             <strong>Target:</strong> {kpi.target}
//           </p>
//           <p>
//             <strong>Weightage:</strong> {kpi.weightage}
//           </p>
//           <p>
//             <strong>Measurement Criteria:</strong> {kpi.measurementCriteria}
//           </p>
//           <p>
//             <strong>Actual Performance:</strong> {kpi.actualPerformance}
//           </p>
//           <p>
//             <strong>Status:</strong> {kpi.status}
//           </p>
//           <Button variant="warning" className="mr-2">
//             Edit KPI
//           </Button>
//           <Button variant="success">Export to PDF/Excel</Button>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default KPIDetailPage;


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux"; // Importing to get the dark mode state

const KPIDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.isDarkMode); // Getting dark mode state

  // Sample Data
  const kpiDetails = {
    1: {
      kpiName: "Sales Target",
      description: "The target sales for the quarter.",
      target: 100,
      weightage: "20%",
      measurementCriteria: "Sales Achievement",
      actualPerformance: 85,
      status: "Not Achieved",
    },
    2: {
      kpiName: "Customer Satisfaction",
      description: "Measure customer satisfaction levels.",
      target: 90,
      weightage: "15%",
      measurementCriteria: "Customer Feedback",
      actualPerformance: 92,
      status: "Achieved",
    },
  };

  const kpi = kpiDetails[id];

  if (!kpi) return <div>KPI not found.</div>;

  return (
    <Container
      fluid
      className={`${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      } mt-4`} // Apply dark mode to container
    >
      <Row className="mb-4">
        <Col className="text-left">
          <Button variant="outline-primary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Col>
        <Col className="text-center">
          <h2 className="text-info font-weight-bold">KPI Overview</h2>
        </Col>
      </Row>
      <Card
        className={`${
          darkMode ? "bg-dark text-white" : "bg-light text-dark"
        } shadow-lg rounded-lg`} // Apply dark mode to card
      >
        <Card.Body>
          <h3 className="text-primary">{kpi.kpiName}</h3>
          <div className="mb-3">
            <p>
              <strong>Description:</strong> {kpi.description}
            </p>
            <p>
              <strong>Target:</strong> {kpi.target}
            </p>
            <p>
              <strong>Weightage:</strong> {kpi.weightage}
            </p>
            <p>
              <strong>Measurement Criteria:</strong> {kpi.measurementCriteria}
            </p>
            <p>
              <strong>Actual Performance:</strong> {kpi.actualPerformance}
            </p>
            <p>
              <strong>Status:</strong> {kpi.status}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <Button variant="warning" className="mr-2">
              Edit KPI
            </Button>
            <Button variant="success">Export to PDF/Excel</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default KPIDetailPage;
