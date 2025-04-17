import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PayoutReceipt = ({ payoutData, onClose }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Payout_Receipt_${payoutData.id}`,
    onAfterPrint: () => {
      console.log("Print completed");
    }
  });

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="modal fade show d-block" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Payout Receipt</h5>
            <div>
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={handlePrint}
              >
                <i className="bi bi-printer me-1"></i> Print
              </button>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
          </div>
          <div className="modal-body">
            <div ref={componentRef} className="p-4">
              {/* Receipt Content */}
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h2 className="mb-1">Payment Receipt</h2>
                  <p className="text-muted">Reference: {payoutData.paymentHistory[0].reference}</p>
                </div>
                <div className="text-end">
                  <h4 className="mb-1">Your Company Name</h4>
                  <p className="mb-0">123 Business Street</p>
                  <p className="mb-0">City, State 12345</p>
                  <p>contact@yourcompany.com</p>
                </div>
              </div>
              
              <div className="row mb-4">
                <div className="col-6">
                  <div className="mb-3">
                    <div className="fw-bold">Payment To:</div>
                    <div>{payoutData.recipientName}</div>
                    <div>{payoutData.recipientType}</div>
                  </div>
                </div>
                <div className="col-6 text-end">
                  <div className="mb-3">
                    <div className="fw-bold">Payment Date:</div>
                    <div>{payoutData.payoutDate}</div>
                  </div>
                  <div>
                    <div className="fw-bold">Receipt Date:</div>
                    <div>{currentDate}</div>
                  </div>
                </div>
              </div>
              
              <table className="table table-bordered mb-4">
                <thead className="table-light">
                  <tr>
                    <th>Description</th>
                    <th>Payment Method</th>
                    <th>Frequency</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {payoutData.notes || `Payment to ${payoutData.recipientName}`}
                    </td>
                    <td>{payoutData.paymentMethod}</td>
                    <td>{payoutData.frequency}</td>
                    <td className="text-end fw-bold">{payoutData.amount}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" className="text-end fw-bold">Total:</td>
                    <td className="text-end fw-bold">{payoutData.amount}</td>
                  </tr>
                </tfoot>
              </table>
              
              <div className="row mb-4">
                <div className="col-6">
                  <div className="mb-3">
                    <div className="fw-bold">Payment Details:</div>
                    <div>Bank: {payoutData.bankName}</div>
                    <div>Account: {payoutData.accountDetails}</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <div className="fw-bold">Payment Status:</div>
                    <div>{payoutData.status}</div>
                  </div>
                </div>
              </div>
              
              <div className="border-top pt-4 mt-4">
                <p className="mb-1"><strong>Note:</strong> This is an electronic receipt. No signature is required.</p>
                <p className="text-muted small mb-0">Please retain this receipt for your records. For any questions regarding this payment, please contact the finance department.</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handlePrint}>
              <i className="bi bi-printer me-1"></i> Print
            </button>
          </div>
        </div>
      </div>
      {/* Modal backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </div>
  );
};

export default PayoutReceipt;