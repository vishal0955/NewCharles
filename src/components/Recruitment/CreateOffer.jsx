import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CreateOffer = () => {
    const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <>

<div className={`${darkMode ? "dark-mode" : null } container form-container mt-3`}>
    <div className="page-header d-flex justify-content-between align-items-center">
      <h2 className="mb-0">Create Offer Letter</h2>
      <Link to ="/recruitment/offerletter"className="btn btn-outline-secondary">
       <i className="fas fa-arrow-left me-2"></i>
        Back to List
      </Link>
    </div>
    <form id="offerForm">
      <div className="row g-3">
        {/* Candidate Details Section */}
        <div className="col-12">
          <h4>Candidate Details</h4>
          <hr />
        </div>
        <div className="col-md-6">
          <label htmlFor="candidateName"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Candidate Name*
          </label>
          <input
            type="text"
            className={`${darkMode ? "dark-mode" : null} form-control`}
            id="candidateName"
            required=""
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="candidateEmail"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Email Address*
          </label>
          <input
            type="email"
            className={`${darkMode ? "dark-mode" : null} form-control`}
            id="candidateEmail"
            required=""
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="candidatePhone"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Phone Number
          </label>
          <input type="tel" className={`${darkMode ? "dark-mode" : null} form-control`} id="candidatePhone" />
        </div>
        <div className="col-md-6">
          <label htmlFor="position"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Position/Role*
          </label>
          <input
            type="text"
            className={`${darkMode ? "dark-mode" : null} form-control`}
            id="position"
            required=""
          />
        </div>
        {/* Offer Details Section */}
        <div className="col-12 mt-4">
          <h4>Offer Details</h4>
          <hr />
        </div>
        <div className="col-md-6">
          <label htmlFor="offerID"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Offer ID
          </label>
          <input
            type="text"
            className={`${darkMode ? "dark-mode" : null} form-control`}
            id="offerID"
            placeholder="OFR-XXX"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="department"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Department
          </label>
          <select className={`${darkMode ? "dark-mode" : null} form-select`} id="department">
            <option selected="">Select Department</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="QA">Quality Assurance</option>
            <option value="PM">Project Management</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="joiningDate"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Joining Date*
          </label>
          <input
            type="date"
            className={`${darkMode ? "dark-mode" : null} form-control`}
            id="joiningDate"
            required=""
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="ctcOffered"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            CTC Offered (Annual)*
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className={`${darkMode ? "dark-mode" : null} form-control`}
              id="ctcOffered"
              min={0}
              step="0.01"
              required=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="probationPeriod"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Probation Period
          </label>
          <select className={`${darkMode ? "dark-mode" : null} form-select`} id="probationPeriod">
            <option selected="" value={3}>
              3 Months
            </option>
            <option value={6}>6 Months</option>
            <option value={0}>No Probation</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="offerExpiry"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Offer Valid Until
          </label>
          <input type="date" className={`${darkMode ? "dark-mode" : null} form-control`} id="offerExpiry" />
        </div>
        {/* Additional Details Section */}
        <div className="col-12 mt-4">
          <h4>Additional Details</h4>
          <hr />
        </div>
        <div className="col-md-12">
          <label htmlFor="benefits"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Benefits
          </label>
          <textarea
            className={`${darkMode ? "dark-mode" : null} form-control`}
            id="benefits"
            rows={3}
            placeholder="Health insurance, stock options, etc."
            defaultValue={""}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="specialNotes"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Special Notes
          </label>
          <textarea
            className={`${darkMode ? "dark-mode" : null} form-control`}
            id="specialNotes"
            rows={3}
            placeholder="Any special conditions or notes"
            defaultValue={""}
          />
        </div>
        {/* Approvals Section */}
        <div className="col-12 mt-4">
          <h4>Approvals</h4>
          <hr />
        </div>
        <div className="col-md-6">
          <label htmlFor="hiringManager"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            Hiring Manager
          </label>
          <input type="text" className={`${darkMode ? "dark-mode" : null} form-control`} id="hiringManager" />
        </div>
        <div className="col-md-6">
          <label htmlFor="hrManager"  className={`${darkMode ? "dark-mode" : null} form-label`}>
            HR Manager
          </label>
          <input type="text" className={`${darkMode ? "dark-mode" : null} form-control`} id="hrManager" />
        </div>
        <div className="col-12 mt-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="sendOfferEmail"
            />
            <label className="form-check-label" htmlFor="sendOfferEmail">
              Send offer letter to candidate via email
            </label>
          </div>
        </div>
        {/* Submit Buttons */}
        <div className="col-12 mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
           <Link to ="/recruitment/offerletter">
          <button type="button" className="btn btn-secondary me-md-2">
            Cancel
          </button>
          </Link>
          <button type="button" className="btn btn-primary me-md-2">
            Save as Draft
          </button>
          <button type="submit" className="btn btn-success">
            Create Offer
          </button>
        </div>
      </div>
    </form>
  </div>
</>

  )
}

export default CreateOffer