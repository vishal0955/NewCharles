import React from 'react'
import { Table, Badge, Button, Container } from "react-bootstrap";
import { useSelector } from 'react-redux';


const orders = [
  {
    orderId: "67AB0D6C566B9805259725",
    name: "test",
    plan: "Platinum",
    price: "$500",
    status: "Success",
    paymentType: "STRIPE",
    date: "11 Feb 2025",
    coupon: "-",
    invoice: "Receipt",
  },
  {
    orderId: "6762BA7EEE9BB151277160",
    name: "Workdo",
    plan: "Platinum",
    price: "$500",
    status: "Success",
    paymentType: "Aamarpay",
    date: "18 Dec 2024",
    coupon: "-",
    invoice: "-",
  },
];
function OrderPlan() {
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <Container className="mt-4 vh-100">
      <h2 className="mb-3 fw-bold">Order Plan</h2>
      <Table striped bordered hover  responsive className={`${darkMode ? "table-dark" : null }`}>
        <thead className="bg-dark text-white">
          <tr>
            <th>Order Id</th>
            <th>Name</th>
            <th>Plan</th>
            <th>Price</th>
            <th>Status</th>
            <th>Payment Type</th>
            <th>Date</th>
            <th>Coupon</th>
            <th>Invoice</th>
           
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderId}</td>
              <td>{order.name}</td>
              <td>{order.plan}</td>
              <td>{order.price}</td>
              <td>
                <Badge bg="success">{order.status}</Badge>
              </td>
              <td>{order.paymentType}</td>
              <td>{order.date}</td>
              <td>{order.coupon}</td>
              <td>{order.invoice}</td>
             
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default OrderPlan
