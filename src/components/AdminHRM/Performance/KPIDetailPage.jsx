import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const KPIDetailPage = () => {
  const { id } = useParams();

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
    <Container fluid className="mt-4">
      <h2 className="text-center mb-4">KPI Overview</h2>
      <Card className="shadow-lg">
        <Card.Body>
          <h3 className="text-info">{kpi.kpiName}</h3>
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
          <Button variant="warning" className="mr-2">
            Edit KPI
          </Button>
          <Button variant="success">Export to PDF/Excel</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default KPIDetailPage;
