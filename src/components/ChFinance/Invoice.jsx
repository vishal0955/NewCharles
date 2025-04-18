import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Invoice() {
  const navigate = useNavigate();
  // Dummy data to replace what's in the image
  const invoiceData = {
    company: {
      name: "Company name",
      address: "Company address ",
      phone: "1234567891"
    },
    invoice: {
      number: "INV#021",
      date: "16-04-2025",
      status: "PAID"
    },
    client: {
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Clientcompany PLC",
      address: "9578 New Street Suite 445",
      cityState: "Port Elijahfurt, NE 65205"
    },
    items: [
      {
        description: "Air Purifier",
        quantity: 1,
        unit: "Pcs",
        unitPrice: 162.00,
        tax: "",
        amount: 162.00
      }
    ],
    totals: {
      subTotal: 162.00,
      total: 162.00,
      paid: 162.00,
      due: 0.00
    }
  };

  return (
    <div className="container mt-2">
      <div className="">
        <button className="btn btn-outline-secondary" type="button" onClick={() =>  navigate("/finance/invoiceslist")}>
          <i className="bi bi-arrow-left" aria-hidden="true"></i> Back
        </button>
      </div>
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary text-white p-3 rounded me-3">
                  <h3 className="mb-0">Logo</h3>
                </div>
                <div>
                  <h5 className="mb-0">{invoiceData.company.name}</h5>
                  <p className="mb-0 text-muted small">{invoiceData.company.address}</p>
                  <p className="mb-0 text-muted small">{invoiceData.company.phone}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 text-md-end">
              <h2>INVOICE</h2>
              <div className="border p-3 mt-3 d-inline-block">
                <div className="row g-3">
                  <div className="col-6 text-start">
                    <div className="text-muted small">Invoice Number</div>
                  </div>
                  <div className="col-6 text-end">
                    <div>{invoiceData.invoice.number}</div>
                  </div>
                  <div className="col-6 text-start">
                    <div className="text-muted small">Invoice Date</div>
                  </div>
                  <div className="col-6 text-end">
                    <div>{invoiceData.invoice.date}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6">
              <h6 className="text-muted">Billed To</h6>
              <h5>{invoiceData.client.name}</h5>
              <p className="mb-0">{invoiceData.client.email}</p>
              <p className="mb-0">{invoiceData.client.company}</p>
              <p className="mb-0">{invoiceData.client.address}</p>
              <p className="mb-0">{invoiceData.client.cityState}</p>
            </div>
            
            <div className="col-md-6 text-md-end">
              <div className="bg-success text-white d-inline-block px-4 py-2 rounded">
                {invoiceData.invoice.status}
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead className="bg-light">
                <tr>
                  <th className="text-muted">Description</th>
                  <th className="text-muted text-center">Quantity</th>
                  <th className="text-muted text-end">Unit Price (GBP)</th>
                  <th className="text-muted text-center">Tax</th>
                  <th className="text-muted text-end">Amount ( £)</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.description}</td>
                    <td className="text-center">
                      {item.quantity}
                      <br />
                      <small className="text-muted">{item.unit}</small>
                    </td>
                    <td className="text-end"> £{item.unitPrice.toFixed(2)}</td>
                    <td className="text-center">{item.tax}</td>
                    <td className="text-end"> £{item.amount.toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5" className="text-muted">
                    <small>Additional details about the product or service provided. Terms and other important information can be included here.</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row justify-content-end">
            <div className="col-md-5">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="text-end text-muted">Sub Total</td>
                    <td className="text-end">{invoiceData.totals.subTotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="text-end text-muted">Total</td>
                    <td className="text-end">{invoiceData.totals.total.toFixed(2)}</td>
                  </tr>
                  <tr className="bg-light">
                    <td className="text-end fw-bold">Total Paid</td>
                    <td className="text-end fw-bold">{invoiceData.totals.paid.toFixed(2)} </td>
                  </tr>
                  <tr className="bg-light">
                    <td className="text-end fw-bold">Total Due</td>
                    <td className="text-end fw-bold">{invoiceData.totals.due.toFixed(2)} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <h6 className="text-muted">Note</h6>
              <p>-</p>
            </div>
            <div className="col-md-6 text-end">
              <p className="text-muted mb-0">Terms and Conditions</p>
              <p className="text-muted mb-0">Thank you for your business.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}