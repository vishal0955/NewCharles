import React from 'react'

const SignaturePayment = () => {
  return (
    <>
        <div className="container ">
      <div className="signature-main">
        {/* Row with Flexbox */}
        <div className="row d-flex justify-content-between mt-4">
          {/* Left Column (Your Information) */}
          <div className="col-md-6 col-sm-12 p-4 mb-4 shadow-sm ">
            <h3 className="mb-3 fw-bold">Your Information</h3>
            <p>
              Check the information about you and your company that will appear
              on the quote.
            </p>

            {/* Quote Sender Info */}
            <label>Quote Sender</label>
            <div
              className="d-flex align-items-center bg-light p-3 mt-2 rounded"
              style={{ gap: "15px" }}
            >
              <img
                
                alt="User"
                className="rounded-circle"
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#ccc",
                  objectFit: "cover",
                }}
              />
              <div className="flex-grow-1">
                <h5 className="mb-1">john</h5>
                <p className="mb-0 text-muted">No title</p>
                <p className="mb-0 text-muted">john@gmai.com</p>
                <p className="mb-0 text-muted">+44 1234658965</p>
              </div>
            </div>

            {/* Company Selection */}
            <div className="mt-4">
              <label>Your Company</label>
              <br />
              <select className="form-select mt-2 border border-secondary rounded">
                <option>XYZ Technology Group Ltd</option>
              </select>
            </div>

            {/* Company Address */}
            <div className="bg-light p-3 mt-3 rounded">
              <p className="mb-1">
              XYZ 
              </p>
              <p className="mb-1">America </p>
              <p className="mb-0">United Kingdom</p>
            </div>
          </div>

          {/* Right Column (Signature Preferences) */}
          <div className="col-md-5 col-sm-12 p-4 shadow-sm">
            <h5 className="fw-bold">Signature Preferences</h5>

            {/* Signature Options */}
            <div className="mt-3">
              <label>Signature Type</label>
              <div className="border border-secondary rounded p-3 mt-2">
                <input type="radio" name="signatureType" className="me-2" />
                <span>No Signature Required</span>
                <p className="text-muted small mb-0">
                  Quote will be sent without requiring any signature.
                </p>
              </div>

              <div className="border border-secondary rounded p-3 mt-2">
                <input type="radio" name="signatureType" className="me-2" />
                <span>Written Signature</span>
                <p className="text-muted small mb-0">
                  Requires physical signature on a printed document.
                </p>
              </div>

              <div className="border border-secondary rounded p-3 mt-2">
                <input type="radio" name="signatureType" className="me-2" />
                <span>E-Signature</span>
                <p className="text-muted small mb-0">
                  Secure digital signature through our platform.
                </p>
              </div>
            </div>

            {/* Counter Signature */}
            <div className="mt-4">
              <label>Counter Signature</label>
              <div className="border border-secondary rounded p-3 mt-2">
                <input type="checkbox" className="me-2" />
                <span>Require Counter Signature</span>
                <p className="text-muted small mb-0">
                  Additional signature will be required from another party.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignaturePayment
