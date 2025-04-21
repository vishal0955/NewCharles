import React, { useState } from "react";
import InvoicePaymentSetting from "./InvoicePaymentSetting";
import { useSelector } from "react-redux";
import ContactForm from "../contact/ContactForm";
import CompanyForm from "../companies/CompanyForm";

const NewInvoice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const [iscontactModalOpen, setContactModalOpen] = useState(false);
    const [isCompanyModalOpen, setCompanyModalOpen] = useState(false);
  
    const handleCloseModal = () => {
      setContactModalOpen(false);
      setCompanyModalOpen(false);
      setIsModalOpen(false);
    };
  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
  };

  const handleMainCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open"); // Remove modal-open class
  };

  const darkMode = useSelector((state) => (state.theme.isDarkMode))

  return (
    <>
      <form>
        {/* Invoice Header */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <label className="fw-medium">Invoice Number</label>
            <input
              type="text"
              className={`${darkMode ? "card-dark" : null } form-control`}
              defaultValue="INVOICE-75627"
              readOnly=""
            />
          </div>
          <div className="col-md-4">
            <label className="fw-medium">Invoice Date</label>
            <input
              type="date"
              className={`${darkMode ? "dark-mode" : null }  form-control`}
              defaultValue="2024-03-20"
            />
          </div>
          <div className="col-md-4">
            <label className="fw-medium">Payment Terms</label>
            <select className={`${darkMode ? "dark-mode" : null }  form-select`}>
              <option>Net 30</option>
              <option>Net 15</option>
              <option>Net 45</option>
              <option>Due on Receipt</option>
            </select>
          </div>
        </div>
        {/* Client Information */}
        <div className={`${darkMode ? "card-dark" : null }  card bg-light border mb-4`}>
          <div className="card-body p-4">
            <h5 className="fw-semibold mb-4">Client Information</h5>
            <div className="row g-4">
              <div className="col-md-6">
                <label className="fw-medium">Bill To</label>
                <div className="input-group">
                  <select
                    type="text"
                    className={`${darkMode ? "dark-mode" : null } form-control`}
                    placeholder="Add Contact"
             
                  >
                    <option value="">Select Contact</option>
                    <option value="contact1">John Doe</option>
                    <option value="contact2">Jane Smith</option>
                    <option value="contact3">Bob Johnson</option>
                  </select>
                  <button className="btn btn-outline-primary" type="button"        onClick={() => setContactModalOpen(true)}>
                    <i className="bi bi-plus-lg" />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <label className="fw-medium">Company</label>
                <div className="input-group">
                  <select
                    type="text"
                    className={`${darkMode ? "dark-mode" : null } form-control`}
                    placeholder="Add Company"
                  >
                    <option value="">Select Company</option>
                    <option value="company1">xyz company</option>
                    <option value="company2">abc Company </option>
                    <option value="company3">Company 3</option>
                  </select>
                  <button className="btn btn-outline-primary" type="button" onClick={() => setCompanyModalOpen(true)}>
                    <i className="bi bi-plus-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Invoice Details */}
        <div className={`${darkMode ? "card-dark" : null } card bg-light border mb-4`}>
          <div className="card-body p-4">
            <h5 className="fw-semibold mb-4">Invoice Details</h5>
            <div className="row g-4">
              <div className="col-md-6">
                <label className="fw-medium">PO Number</label>
                <input
                  type="text"
                  className={`${darkMode ? "dark-mode" : null } form-control`}
                  placeholder="Enter PO number"
                />
              </div>
              <div className="col-md-6">
                <label className="fw-medium">Reference</label>
                <input
                  type="text"
                  className={`${darkMode ? "dark-mode" : null } form-control`}
                  placeholder="Add reference"
                />
              </div>
              <div className="col-12">
                <label className="fw-medium">Notes</label>
                <textarea
                  className={`${darkMode ? "dark-mode" : null } form-control`}
                  rows={3}
                  placeholder="Add notes or terms"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Line Items */}
        <div className={`${darkMode ? "dark-mode" : null } card bg-light border mb-4`}
        >
          <div className="card-body p-4">
            <h5 className="fw-semibold mb-2">Line Items</h5>
            <div className="empty-state text-center py-5 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://i.ibb.co/R4Dc5q1L/Screenshot-2025-03-20-191016.png"
                alt="Empty state"
                className="mb-3"
                style={{width: "100px",height:"100px"}}
              />
              <p className="mb-3">Add line items to your invoice</p>
              <p className="text-secondary mb-3">
                Add the items for the products you're selling to your customer
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button type="button" className="inv-new-button px-4">
                  <i className="bi bi-box me-2" />
                  Select from Product Library
                </button>
                <button type="button" className="btn btn-outline-primary px-4">
                  <i className="bi bi-plus-lg me-2" />
                  Create Custom Line Item
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Summary */}
        <div className={`${darkMode ? "dark-mode" : null } card bg-light border mb-4`}>
          <div className="card-body p-4">
            <h5 className="fw-semibold mb-4">Summary</h5>
            <hr />
            <div className="row justify-content-end">
              <div className="col-md-12">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-secondary">Subtotal</span>
                  <span className="fw-medium">£0.00</span>
                </div>
                <button
                  type="button"
                  className="btn btn-link text-decoration-none p-0 mb-3"
                >
                  <i className="bi bi-plus-lg me-2" />
                  Add discount, fee or tax
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="d-flex justify-content-end gap-2">
          <button type="button" className="inv-filter-button px-4">
            Save as Draft
          </button>
          <button
            type="button"
            className="inv-new-button px-4"
            onClick={handleOpenModal}
          >
            Create Invoice
          </button>
        </div>
      </form>
      {/* Modal for new payment setting */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className={`${darkMode ? "card-dark" : null} modal-content`}>
                <div className="modal-header">
                  <h5 className="modal-title">Payment setting</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <InvoicePaymentSetting />
                </div>
              </div>
            </div>
          </div>
          {/* Modal backdrop */}
          {/* <div
                        className="modal-backdrop fade show"
                        onClick={handleCloseModal}
                      ></div> */}
        </>
      )}


{iscontactModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-md" role="document">
              <div className={`${darkMode ? "dark-mode" : null } modal-content`}>
                <div className={`${darkMode ? "dark-mode" : null } modal-header`}>
                  <h5 className="modal-title">Add New Contact</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className={`${darkMode ? "dark-mode" : null } modal-body`}>
                  <ContactForm handleclose={handleCloseModal} />
                </div>
              </div>
            </div>
          </div>
          {/* Modal backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}
          ></div>
        </>
      )}


      {/* company Modal; */}

      {isCompanyModalOpen && (
        
              <>
                <div className="modal fade show d-block" role="dialog">
                  <div className="modal-dialog modal-md" role="document">
                    <div className={`${darkMode ? "dark-mode" : "bg-white" }  modal-content`}>
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={handleCloseModal}
                        />
                      </div>
                      <div className="modal-body">
                        <CompanyForm handleClose={handleCloseModal} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal-backdrop fade show"
                  onClick={handleCloseModal}
                ></div>
              </>
            )}
    </>
  );
};

export default NewInvoice;
