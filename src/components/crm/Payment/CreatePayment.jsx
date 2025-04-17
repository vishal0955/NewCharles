import React, { useState, useEffect, useCallback } from "react";
import {Link} from "react-router-dom"
import "./payment.css";

const CreatePayment = () => {
  const [activeTab, setActiveTab] = useState("line-items");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currency, setCurrency] = useState("GBP");
  const [copied, setCopied] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");

  const showToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleDone = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowSuccessModal(true);
    } catch (err) {
      showToast("Failed to create payment link", "error");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://app.eu1.hubspot.com/payments/DmZ"
      );
      setCopied(true);
      showToast("Payment link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToast("Failed to copy payment link", "error");
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showSuccessModal && !e.target.closest(".pay-success-modal")) {
        setShowSuccessModal(false);
      }
    };

    if (showSuccessModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSuccessModal]);

  return (
    <div className="pay-container">
      {/* Header */}
      <div className="pay-header d-flex justify-content-between align-items-center">
        <Link to="/crm/Payment" className="pay-back-btn">
          <i className="bi bi-arrow-left"></i>
          Back
        </Link>
        <h1 className="pay-title">Add a payment link name</h1>
        <span className="pay-credits">Credits: 0</span>
      </div>

      {/* Tabs */}
      <div className="pay-tabs d-flex">
        <button
          className={`pay-tab ${activeTab === "line-items" ? "active" : ""}`}
          onClick={() => handleTabChange("line-items")}>
          Line Items
        </button>
        <button
          className={`pay-tab ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => handleTabChange("settings")}>
          Settings
        </button>
        <button
          className={`pay-tab ${activeTab === "preview" ? "active" : ""}`}
          onClick={() => handleTabChange("preview")}>
          Preview
        </button>
      </div>

      {/* Line Items Tab */}
      {activeTab === "line-items" && (
        <div className="pay-content">
          {/* Currency Selection */}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="dropdown">
              <button
                className="btn inv-filter-button dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown">
                British Pound Sterling (GBP) £
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    USD ($)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    EUR (€)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    GBP (£)
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex gap-2">
              {/* <button className="btn inv-filter-button">
                <i className="bi bi-grid" /> Edit columns
              </button> */}
              <button
                className={`inv-new-button ${
                  activeTab === "addlineitem" ? "active" : ""
                }`}
                onClick={() => handleTabChange("addlineitem")}>
                <i className="bi bi-plus" /> Add line item
              </button>
            </div>
          </div>
          {/* Logo Section */}
          <div className="text-center mt-3 mb-4">
            <h4 className=" fw-bold mb-3 mt-4">
              Add line items to your payment link
            </h4>
            <p className="text-muted">
              Add line items for the products you are selling and share it with
              your customer to get paid easily
            </p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              <button className="btn btn-outline-secondary">
                <i className="bi bi-box" /> Select from product library
              </button>
              <button className="btn btn-outline-secondary">
                <i className="bi bi-plus" /> Create custom line item
              </button>
            </div>
          </div>
          {/* Summary Section */}
          <div className="border-top pt-4 mt-5">
            <h6 className="mb-3">Summary</h6>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Subtotal</span>
              <span>£0.00</span>
            </div>
            <button className="btn btn-link text-decoration-none p-0 text-primary">
              <i className="bi bi-plus" /> Add discount, fee, or tax
            </button>
            <div className="d-flex justify-content-between mt-3 pt-3 border-top">
              <strong>Total</strong>
              <strong>£0.00</strong>
            </div>
          </div>
        </div>
      )}
    
    {/* add line item tab */}
    {activeTab === "addlineitem" && (
        <div className="container">
        <div className="form-container shadow-sm p-4 my-3 rounded-3">
          {/* Contact Info Section */}
          <div className="mb-5">
            <h5 className="mb-3">Contact info</h5>
            <p className="text-gray-600 mb-4">
              Add form fields to collect additional information from your customers.
            </p>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="emailRequired"
                defaultChecked=""
                aria-describedby="emailRequiredHelp emailRequiredError"
              />
              <label className="form-check-label" htmlFor="emailRequired">
                Email <span className="text-danger">*</span>
              </label>
              <div id="emailRequiredHelp" className="form-text">
                Collect customer email for order confirmation and updates
              </div>
              <div id="emailRequiredError" className="invalid-feedback">
                Email collection is required for payment processing
              </div>
            </div>
            <div className="d-flex gap-3 mb-4">
              <a
                href="#"
                className="add-property-btn text-decoration-none text-dark"
                data-bs-toggle="tooltip"
                title="Add custom contact fields"
              >
                <i className="bi bi-plus" /> Contact property
              </a>
              <a
                href="#"
                className="add-property-btn text-decoration-none text-dark"
                data-bs-toggle="tooltip"
                title="Add company-related fields"
              >
                <i className="bi bi-plus" /> Company property
              </a>
            </div>
          </div>
          {/* Online Payments Section */}
          <div className="mb-5">
            <h5 className="mb-3">
              Online Payments <span className="text-danger">*</span>
            </h5>
            <p className="text-gray-600 mb-4">Accepted forms of payment</p>
            <div className="mb-4" role="group" aria-labelledby="paymentMethodsLabel">
              <div id="paymentMethodsLabel" className="visually-hidden">
                Payment Methods
              </div>
              <div className="form-check mb-3 d-flex align-items-center gap-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="creditCard"
                  defaultChecked=""
                  aria-describedby="creditCardHelp creditCardError"
                />
                <label
                  className="form-check-label d-flex align-items-center gap-2"
                  htmlFor="creditCard"
                >
                  Credit or debit card
                  <div
                    className="payment-method-image"
                    role="img"
                    aria-label="Visa"
                  />
                  <div
                    className="payment-method-image"
                    role="img"
                    aria-label="Mastercard"
                  />
                  <div
                    className="payment-method-image"
                    role="img"
                    aria-label="American Express"
                  />
                </label>
                <div id="creditCardHelp" className="form-text visually-hidden">
                  Accept credit and debit card payments
                </div>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="bacs"
                  defaultChecked=""
                  aria-describedby="bacsHelp bacsError"
                />
                <label className="form-check-label" htmlFor="bacs">
                  BACS (direct debit)
                </label>
                <div id="bacsHelp" className="form-text">
                  Accept direct bank transfers via BACS
                </div>
              </div>
              <div id="paymentMethodError" className="invalid-feedback">
                Please select at least one payment method
              </div>
            </div>
            <div className="mb-4">
              <h6 className="mb-3">Billing address</h6>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="billingAddress"
                  defaultChecked=""
                  aria-describedby="billingAddressHelp billingAddressError"
                />
                <label className="form-check-label" htmlFor="billingAddress">
                  Collect billing address for credit card purchases
                </label>
                <div id="billingAddressHelp" className="form-text">
                  Required for payment verification
                </div>
                <div id="billingAddressError" className="invalid-feedback">
                  Billing address is required for credit card payments
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h6 className="mb-3">Shipping address</h6>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="shippingAddress"
                  aria-describedby="shippingAddressHelp shippingAddressError"
                />
                <label className="form-check-label" htmlFor="shippingAddress">
                  Collect shipping address
                </label>
                <div id="shippingAddressHelp" className="form-text">
                  Enable if you need to ship physical items
                </div>
                <div id="shippingAddressError" className="invalid-feedback">
                  Shipping address is required for physical items
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h6 className="mb-3">Store payment methods for future charges</h6>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="storePayment"
                  aria-describedby="storePaymentHelp"
                />
                <label
                  className="form-check-label d-flex align-items-center gap-2"
                  htmlFor="storePayment"
                >
                  Collect your customer's payment details at checkout for future
                  charges
                  <span className="badge-new">New</span>
                </label>
                <div id="storePaymentHelp" className="form-text">
                  Securely store payment methods for recurring payments
                </div>
              </div>
            </div>
          </div>
          {/* Checkout Confirmation Section */}
          <div className="mb-4">
            <h5 className="mb-3">Checkout confirmation</h5>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="confirmation"
                  id="defaultConfirmation"
                  defaultChecked=""
                  aria-describedby="defaultConfirmationHelp"
                />
                <label className="form-check-label" htmlFor="defaultConfirmation">
                  Show the default confirmation page
                </label>
                <div id="defaultConfirmationHelp" className="form-text">
                  Standard checkout completion page
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="confirmation"
                  id="redirectConfirmation"
                  aria-describedby="redirectConfirmationHelp redirectUrlError"
                />
                <label className="form-check-label" htmlFor="redirectConfirmation">
                  Redirect to a different page
                </label>
                <div id="redirectConfirmationHelp" className="form-text">
                  Redirect to a custom thank you or order confirmation page
                </div>
              </div>
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Please select or add a link"
                aria-label="Redirect URL"
                disabled=""
                aria-describedby="redirectUrlHelp redirectUrlError"
              />
              <div id="redirectUrlHelp" className="form-text">
                Enter a valid URL starting with http:// or https://
              </div>
              <div id="redirectUrlError" className="invalid-feedback">
                Please enter a valid URL
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="container mb-4">
          <div className="d-flex justify-content-end gap-3">
            <button
              type="button"
              className="inv-filter-button"
              data-bs-toggle="tooltip"
              title="Discard all changes"
            >
              Cancel
            </button>
            <button
              type="button"
              className="inv-new-button"
              data-bs-toggle="tooltip"
              title="Save all settings"
            >
              Create
            </button>
          </div>
        </div>
      </div>
      )}
    {/* add line item tab */}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="pay-settings">
          <h5 className="pay-settings-title">
            Manage settings for this payment link
          </h5>
          <p className="pay-settings-text">
            Settings here will only apply to this payment link. It won't
            override your
            <a href="#" className="text-primary ms-1">
              default settings
            </a>
          </p>

          <>
            {/* Deal Section */}
            <div className="mb-4">
              <div className="form-check form-switch mb-3 d-flex justify-content-between">
                <label
                  className="form-check-label fw-bold"
                  htmlFor="dealToggle">
                  Allow this link to create new deals
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="dealToggle"
                />
              </div>
              <p className="text-gray-600 small mb-4">
                When a customer pays, the payment will show on associated deals.
                If a deal doesn't exist, we'll create a new one.
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Deal pipeline</label>
                  <select className="form-select">
                    <option>Sales pipeline</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Deal stage</label>
                  <select className="form-select">
                    <option>Closed won</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Checkout Section */}
            <div className="mb-4">
              <h6 className="mb-3">Checkout</h6>
              <label className="form-label">Text box</label>
              <p className="text-gray-600 small mb-3">
                Provide next steps or any extra context your customers need to
                know. Customers will see this below the total on the checkout
                page.
                <a href="#" className="text-primary">
                  See an example
                </a>
              </p>
              <div className="border rounded-2 p-2 mb-3">
                <div className="btn-toolbar mb-2">
                  <div className="btn-group me-2">
                    <button className="btn btn-sm btn-light">
                      <i className="bi bi-type-bold" />
                    </button>
                    <button className="btn btn-sm btn-light">
                      <i className="bi bi-type-italic" />
                    </button>
                    <button className="btn btn-sm btn-light">
                      <i className="bi bi-type-underline" />
                    </button>
                  </div>
                  <div className="btn-group me-2">
                    <button className="btn btn-sm btn-light">
                      <i className="bi bi-list-ul" />
                    </button>
                    <button className="btn btn-sm btn-light">
                      <i className="bi bi-list-ol" />
                    </button>
                    <button className="btn btn-sm btn-light">
                      <i className="bi bi-quote" />
                    </button>
                  </div>
                  <div className="btn-group">
                    <button className="btn btn-sm btn-light">
                      <i className="bi bi-link-45deg" />
                    </button>
                    <button className="btn btn-sm btn-light">
                      <i className="bi bi-image" />
                    </button>
                    <button className="btn btn-sm btn-light">
                      <i className="bi bi-code" />
                    </button>
                  </div>
                </div>
                <textarea
                  className="form-control border-0"
                  rows={6}
                  placeholder="Type your message here..."
                  defaultValue={""}
                />
              </div>
            </div>
          </>
        </div>
      )}

      {/* Preview Tab */}
      {activeTab === "preview" && (
        <div className="pay-preview">
          <div className="pay-preview-container">
            {/* Summary Section */}
            <div className="pay-form-group">
              <h5 className="mb-3">Summary</h5>
              <div className="bg-light p-3 rounded">
                <div className="pay-summary-item">
                  <span>Administration Per Hour</span>
                  <span>£75.00</span>
                </div>
                <div className="pay-summary-item">
                  <span>Total (GBP)</span>
                  <span>£75.00</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="pay-form-group">
              <label className="pay-label" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                className="pay-input"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Payment Method Selection */}
            <div className="pay-form-group">
              <h5 className="mb-3">Payment info</h5>
              <div
                className={`pay-method-card ${
                  selectedPaymentMethod === "card" ? "active" : ""
                }`}
                onClick={() => setSelectedPaymentMethod("card")}>
                <svg
                  className="pay-method-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor">
                  <rect
                    x={2}
                    y={5}
                    width={20}
                    height={14}
                    rx={2}
                    strokeWidth={2}
                  />
                  <line x1={2} y1={10} x2={22} y2={10} strokeWidth={2} />
                </svg>
                <span>Card</span>
              </div>
              <div
                className={`pay-method-card ${
                  selectedPaymentMethod === "bank" ? "active" : ""
                }`}
                onClick={() => setSelectedPaymentMethod("bank")}>
                <svg
                  className="pay-method-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor">
                  <path
                    d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11"
                    strokeWidth={2}
                  />
                </svg>
                <span>Bank Direct Debit</span>
              </div>
            </div>

            {/* Card Details */}
            {selectedPaymentMethod === "card" && (
              <div className="pay-form-group">
                <div className="mb-3">
                  <label className="pay-label" htmlFor="cardNumber">
                    Card number
                  </label>
                  <input
                    type="text"
                    className="pay-input"
                    id="cardNumber"
                    placeholder="1234 1234 1234 1234"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="pay-label" htmlFor="expiryDate">
                      Expiry date
                    </label>
                    <input
                      type="text"
                      className="pay-input"
                      id="expiryDate"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="pay-label" htmlFor="securityCode">
                      Security code
                    </label>
                    <input
                      type="text"
                      className="pay-input"
                      id="securityCode"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Billing Address */}
            <div className="pay-form-group">
              <h5 className="mb-3">Billing address</h5>
              <div className="mb-3">
                <label className="pay-label" htmlFor="nameOnCard">
                  Name on card
                </label>
                <input type="text" className="pay-input" id="nameOnCard" />
              </div>
              <div className="mb-3">
                <label className="pay-label" htmlFor="country">
                  Country
                </label>
                <select className="inv-filter-button  w-100" id="country">
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="CA">Canada</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="pay-label" htmlFor="address">
                  Address line 1
                </label>
                <input type="text" className="pay-input" id="address" />
              </div>
            </div>

            <div className="pay-button-group">
              <button
                type="button"
                className="inv-filter-button"
                onClick={() => window.history.back()}>
                Cancel
              </button>
              <button
                type="button"
                className="inv-new-button"
                onClick={handleDone}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal with Backdrop */}
      {showSuccessModal && (
        <>
          <div className="pay-modal-backdrop show" />
          <div className="pay-success-modal show">
            <div className="pay-success-icon">
              <i className="bi bi-check-lg"></i>
            </div>
            <div className="text-center mb-4">
              <h5 className="mb-2">Your payment link is ready to be sent</h5>
              <p className="text-muted mb-0">
                Copy the link to share it with the customer and get paid
              </p>
            </div>
            <input
              type="text"
              className="pay-link-input"
              value="https://app.eu1.hubspot.com/payments/DmZ"
              readOnly
            />
            <button
              className={`pay-copy-btn ${copied ? "copied" : ""}`}
              onClick={handleCopy}>
              <i className={`bi ${copied ? "bi-check" : "bi-clipboard"}`}></i>
              {copied ? "Copied!" : "Copy"}
            </button>
            <div className="text-center">
              <a
                href="#"
                className="pay-close-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSuccessModal(false);
                }}>
                <i className="bi bi-x"></i>
                Close
              </a>
            </div>
          </div>
        </>
      )}

      {/* Toast Container */}
      <div className="pay-toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`pay-toast ${toast.type}`}>
            <i
              className={`bi ${
                toast.type === "success" ? "bi-check-circle" : "bi-x-circle"
              }`}></i>
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePayment;
