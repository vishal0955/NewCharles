import React, { useState } from "react";
import SendInvoice from "./SendInvoice";
import { useSelector } from "react-redux";

const InvoicePaymentSetting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open"); // Remove modal-open class
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
      <div className="container py-4">
        <div className={`${darkMode ? "card-dark" : null} card shadow-sm`}>
          <div className="card-body p-4">
            <h4 className="ips-heading mb-2">Payment Settings</h4>
            <p className="text-secondary mb-4">
              Configure payment options for this invoice
            </p>
            <form
              id="paymentSettingsForm"
              className="needs-validation"
              noValidate="">
              {/* Payment Link */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4">
                <div>
                  <h6 className="ips-heading--sm mb-1">Enable Payment Link</h6>
                  <p className="text-secondary mb-0 fs-sm">
                    Allow customers to pay online via secure payment link
                  </p>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input ips-switch__input"
                    type="checkbox"
                    role="switch"
                    id="paymentLink"
                    defaultChecked=""
                  />
                </div>
              </div>
              {/* Payment Methods */}
              <div className="mb-4">
                <h6 className="ips-heading--sm mb-3">Payment Methods</h6>
                <div className="d-flex flex-column gap-3">
                  <div className="form-check ips-checkbox">
                    <input
                      className="form-check-input ips-checkbox__input"
                      type="checkbox"
                      id="creditCard"
                      name="paymentMethods"
                      defaultChecked=""
                      required=""
                    />
                    <label
                      className="form-check-label ips-checkbox__label d-flex align-items-center gap-2"
                      htmlFor="creditCard">
                      <i className="bi bi-credit-card ips-text-secondary" />
                      Credit/Debit Card
                    </label>
                  </div>
                  <div className="form-check ips-checkbox">
                    <input
                      className="form-check-input ips-checkbox__input"
                      type="checkbox"
                      id="directDebit"
                      name="paymentMethods"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label ips-checkbox__label d-flex align-items-center gap-2"
                      htmlFor="directDebit">
                      <i className="bi bi-bank ips-text-secondary" />
                      Direct Debit/BACS
                    </label>
                  </div>
                  <div className="form-check ips-checkbox">
                    <input
                      className="form-check-input ips-checkbox__input"
                      type="checkbox"
                      id="bankTransfer"
                      name="paymentMethods"
                    />
                    <label
                      className="form-check-label ips-checkbox__label d-flex align-items-center gap-2"
                      htmlFor="bankTransfer">
                      <i className="bi bi-arrow-left-right ips-text-secondary" />
                      Bank Transfer
                    </label>
                  </div>
                </div>
                <div className="invalid-feedback">
                  Please select at least one payment method
                </div>
              </div>
              {/* Invoice Summary */}
              <div className="mb-4">
                <h6 className="ips-heading--sm mb-3">Invoice Summary</h6>
                <div className= {`${darkMode ? "card-dark" : null} ips-summary`}>
                  <div className="ips-summary__item">
                    <div className="d-flex justify-content-between">
                      <span className="ips-summary__label">Total Amount</span>
                      <span className="ips-summary__value">£1,250.00</span>
                    </div>
                  </div>
                  <div className="ips-summary__item">
                    <div className="d-flex justify-content-between">
                      <span className="ips-summary__label">Due Date</span>
                      <span className="ips-summary__value">Jan 31, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional Settings */}
              <div className="mb-4">
                <div className="mb-3">
                  <label
                    className="ips-heading--sm"
                    htmlFor="paymentTerms">
                    Payment Terms <span className="text-danger">*</span>
                  </label>
                  <select
                    className={`${darkMode ? "card-dark" : null} form-select ips-select`}
                    id="paymentTerms"
                    required="">
                    <option value="">Select payment terms</option>
                    <option value={30} selected="">
                      Net 30
                    </option>
                    <option value={15}>Net 15</option>
                    <option value={45}>Net 45</option>
                    <option value={0}>Due on Receipt</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select payment terms
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    className="ips-heading--sm"
                    htmlFor="currency">
                    Currency <span className="text-danger">*</span>
                  </label>
                  <select
                    className={`${darkMode ? "card-dark" : null} form-select ips-select`}
                    id="currency"
                    required="">
                    <option value="">Select currency</option>
                    <option value="GBP" selected="">
                      GBP (£)
                    </option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a currency
                  </div>
                </div>
              </div>
              {/* Actions */}
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="inv-new-button"
                  onClick={handleOpenModal}>
                  Create Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Modal for send New invoice */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className={`${darkMode ? "card-dark" : null} modal-content`}>
                <div className="modal-header">
                  <h5 className="modal-title">Send New Invoice</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <SendInvoice />
                </div>
              </div>
            </div>
          </div>
          {/* Modal backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}></div>
        </>
      )}
    </>
  );
};

export default InvoicePaymentSetting;
