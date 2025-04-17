import React from "react";
import "./SuperAdminDashboard.css";
import Sidebar from "./Sidebar";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FaShoppingCart,
  FaClipboardList,
  FaBoxOpen,
  FaDollarSign,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function SuperAdminDashboard() {
  const stats = [
    {
      title: "Recent Orders",
      value: 5,
      icon: <FaShoppingCart size={30} color="#FF5733" />,
    },
    {
      title: "Total Orders",
      value: 150,
      icon: <FaClipboardList size={30} color="#33FF57" />,
    },
    {
      title: "Active Orders",
      value: 10,
      icon: <FaBoxOpen size={30} color="#337BFF" />,
    },
    {
      title: "Total Revenue",
      value: "$5000",
      icon: <FaDollarSign size={30} color="#FF33A6" />,
    },
  ];

  const data = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 20 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 40 },
    { name: "May", value: 50 },
  ];
  const borderColors = ["#FF5733", "#33FF57", "#337BFF", "#FF33A6"];
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className={`${darkMode ? "card-dark" : "bg-white" }p-0`}>
      <Container fluid className= " mt-4">
        {/* Stats Cards */}

        <Row className="mb-4">
          {stats.map((stat, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-3">
              <Card
                className="text-center shadow"
                // style={{
                //   border: `2px solid ${borderColors[index % borderColors.length]}`,
                //   boxShadow: `0px 4px 10px ${borderColors[index % borderColors.length]}50`,
                // }}
              >
                <Card.Body className={`${darkMode ? "card-dark" : "bg-white" }`}>
                  {/* ✅ Flexbox se icon aur text ek line me aa jayenge */}
                  <div className=" d-flex align-items-center justify-content-center gap-2">
                    {stat.icon} {/* ✅ Icon yaha aayega */}
                    <Card.Title className=" mb-0">
                      {stat.title}
                    </Card.Title>
                  </div>
                  <h4 className="fw-bold mt-2" style={{ fontSize: "20px" }}>
                    {stat.value}
                  </h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Graph Analytics */}
        <Card className="shadow">
          <Card.Body className={`${darkMode ? "card-dark" : "bg-white" }`}>
            <h5 className="text-center mb-3">Graph Analytics</h5>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default SuperAdminDashboard;
