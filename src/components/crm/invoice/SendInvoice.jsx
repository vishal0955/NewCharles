import React from "react";
import "./invoice.css";
import { useSelector } from "react-redux";

const SendInvoice = () => {

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
      <div
        className="modal-custom"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-modal="true"
      >
        {/* Header */}
        <div className="modal-header bg-primary text-white rounded-2">
          <span className="fw-medium" id="modalTitle">
            Invoice created and ready to send!
          </span>
        </div>
        {/* Body */}
        <div className="p-4">
          <form id="sendInvoiceForm" noValidate="">
            {/* To Field */}
            <div className="mb-3">
              <label
                htmlFor="toField"
                className="form-label text-secondary mb-2"
              >
                To
              </label>
              <input
                type="text"
                id="ccField"
                className={`${darkMode ? "card-dark" : null} form-control`}
                placeholder="Search recipients..."
                aria-describedby="ccHelp"
              />
            </div>
            {/* CC Field */}
            <div className="mb-3">
              <label
                htmlFor="ccField"
                className="form-label text-secondary mb-2"
              >
                Cc
              </label>
              <input
                type="text"
                id="ccField"
                className={`${darkMode ? "card-dark" : null} form-control`}
                placeholder="Search recipients..."
                aria-describedby="ccHelp"
              />
              <div id="ccHelp" className="form-text visually-hidden">
                Type to search and add CC recipients
              </div>
            </div>
            {/* From Field */}
            <div className="mb-4">
              <label className="form-label text-secondary mb-2">From</label>
              <input
                type="text"
                id="ccField"
                className={`${darkMode ? "card-dark" : null} form-control`}
                placeholder="John Doe from XYZ Technology Group Ltd (accounts@XYZ.com) "
                aria-describedby="ccHelp"
              />
            </div>
            {/* Help Link */}
            <div className="mb-4">
              <a href="#" className="learn-more text-dark">
                <i className="bi bi-info-circle me-2" aria-hidden="true" />
                Learn more about sending invoices
              </a>
            </div>
            {/* Actions */}
            <div className="d-flex gap-2 mobile-stack">
              <button type="submit" className="inv-new-button" id="sendBtn">
                <span>Send invoice</span>
              </button>
              <button type="button" className="inv-filter-button" id="writeBtn">
                Write email manually
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SendInvoice;
