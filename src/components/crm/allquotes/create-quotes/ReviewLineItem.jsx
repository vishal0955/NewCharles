import React from "react";
import "../Quotes.css";
const ReviewLineItem = () => {
  return (
    <>
      <div className="bg-light p-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Header section */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="quote-header">Review Line Items</h5>
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Add line item
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          item 1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          item 2
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          item 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Empty state section */}
              <div className="quote-empty-state mb-4">
                <div className="row justify-content-center">
                  <div className="col-md-6 text-center">
                    <h6 className="quote-empty-title mb-2">
                      Add line items to your quote
                    </h6>
                    <a href="#" className="quote-learn-link d-block mb-4">
                      Learn more about the product library
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                    <div className="d-flex justify-content-center gap-3 mb-4">
                      <button className="btn quote-button-primary">
                        Select from product library
                      </button>
                      <button className="btn quote-button-secondary">
                        Create custom line item
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <img
                      src="https://i.ibb.co/XrS7nmpD/order-packed-757131-14929.jpg"
                      alt="Package illustration"
                      className="quote-illustration"
                    />
                  </div>
                </div>
              </div>

              {/* Summary section */}
              <div className="quote-summary-container">
                <h6 className="quote-summary-header">Summary</h6>

                <div className="quote-line">
                  <div className="quote-line-label">
                    Subtotal{" "}
                    <i className="bi bi-info-circle quote-info-icon"></i>
                  </div>
                  <div className="quote-line-value">--</div>
                </div>

                <div className="quote-line">
                  <a href="#" className="quote-add-btn">
                    + Add discount, fee, or tax{" "}
                    <i className="bi bi-info-circle quote-info-icon"></i>
                  </a>
                </div>

                <div className="quote-line">
                  <div className="quote-line-label">
                    Total contract value{" "}
                    <i className="bi bi-info-circle quote-info-icon"></i>
                  </div>
                  <div className="quote-line-value">--</div>
                </div>
              </div>

              {/* Display checkbox */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="displayTotalCheck"
                  defaultChecked
                />
                <label
                  className="form-check-label quote-checkbox-label"
                  htmlFor="displayTotalCheck">
                  Display total contract value on the published quote. (If no
                  terms are set, the default is an annual value.)
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewLineItem;
