

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CreateOffer = () => {
    const darkMode = useSelector((state) => state.theme.isDarkMode);
    
    // Sample data for dropdowns
    const candidates = [
      { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "555-123-4567" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "555-987-6543" },
      { id: 3, name: "Michael Johnson", email: "michael.j@example.com", phone: "555-456-7890" },
      { id: 4, name: "Sarah Williams", email: "sarah.w@example.com", phone: "555-789-0123" },
      { id: 5, name: "David Brown", email: "david.b@example.com", phone: "555-234-5678" }
    ];
    
    const positions = [
      { id: 1, title: "Frontend Developer" },
      { id: 2, title: "Backend Developer" },
      { id: 3, title: "UX Designer" },
      { id: 4, title: "Product Manager" },
      { id: 5, title: "DevOps Engineer" },
      { id: 6, title: "Data Analyst" },
      { id: 7, title: "QA Engineer" }
    ];
    
    const hiringManagers = [
      { id: 1, name: "Alex Morgan (CTO)" },
      { id: 2, name: "Emma Watson (Tech Lead)" },
      { id: 3, name: "James Wilson (Department Head)" },
      { id: 4, name: "Lisa Park (Senior Developer)" },
      { id: 5, name: "Thomas Clark (Product Director)" }
    ];
    
    const hrManagers = [
      { id: 1, name: "Robert Chen" },
      { id: 2, name: "Olivia Martinez" },
      { id: 3, name: "Daniel Taylor" },
      { id: 4, name: "Sophia Rodriguez" }
    ];
    
    // State to handle form data
    const [formData, setFormData] = useState({
      candidateId: "",
      position: "",
      hiringManager: "",
      hrManager: "",
      // Add other form fields as needed
    });
    
    // Handle candidate selection
    const handleCandidateChange = (e) => {
      const candidateId = e.target.value;
      const selectedCandidate = candidates.find(c => c.id.toString() === candidateId);
      
      if (selectedCandidate) {
        // Update form with selected candidate's information
        document.getElementById("candidateEmail").value = selectedCandidate.email;
        document.getElementById("candidatePhone").value = selectedCandidate.phone;
      }
      
      setFormData({
        ...formData,
        candidateId
      });
    };
    
    // Handle other field changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

  return (
    <>
      <div className={`${darkMode ? "dark-mode" : null } container form-container mt-3`}>
        <div className="page-header d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Create Offer Letter</h2>
          <Link to="/recruitment/offerletter" className="btn btn-outline-secondary">
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
              <label htmlFor="candidateName" className={`${darkMode ? "dark-mode" : null} form-label`}>
                Candidate Name*
              </label>
              <select
                className={`${darkMode ? "dark-mode" : null} form-select`}
                id="candidateName"
                name="candidateId"
                value={formData.candidateId}
                onChange={handleCandidateChange}
                required=""
              >
                <option value="">Select Candidate</option>
                {candidates.map(candidate => (
                  <option key={candidate.id} value={candidate.id}>
                    {candidate.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="candidateEmail" className={`${darkMode ? "dark-mode" : null} form-label`}>
                Email Address*
              </label>
              <input
                type="email"
                className={`${darkMode ? "dark-mode" : null} form-control`}
                id="candidateEmail"
                readOnly
                required=""
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="candidatePhone" className={`${darkMode ? "dark-mode" : null} form-label`}>
                Phone Number
              </label>
              <input 
                type="tel" 
                className={`${darkMode ? "dark-mode" : null} form-control`} 
                id="candidatePhone" 
                readOnly
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="position" className={`${darkMode ? "dark-mode" : null} form-label`}>
                Position/Role*
              </label>
              <select
                className={`${darkMode ? "dark-mode" : null} form-select`}
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required=""
              >
                <option value="">Select Position</option>
                {positions.map(position => (
                  <option key={position.id} value={position.title}>
                    {position.title}
                  </option>
                ))}
              </select>
            </div>
            {/* Offer Details Section */}
            <div className="col-12 mt-4">
              <h4>Offer Details</h4>
              <hr />
            </div>
            <div className="col-md-6">
              <label htmlFor="offerID" className={`${darkMode ? "dark-mode" : null} form-label`}>
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
              <label htmlFor="department" className={`${darkMode ? "dark-mode" : null} form-label`}>
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
              <label htmlFor="joiningDate" className={`${darkMode ? "dark-mode" : null} form-label`}>
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
              <label htmlFor="ctcOffered" className={`${darkMode ? "dark-mode" : null} form-label`}>
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
              <label htmlFor="probationPeriod" className={`${darkMode ? "dark-mode" : null} form-label`}>
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
              <label htmlFor="offerExpiry" className={`${darkMode ? "dark-mode" : null} form-label`}>
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
              <label htmlFor="benefits" className={`${darkMode ? "dark-mode" : null} form-label`}>
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
              <label htmlFor="specialNotes" className={`${darkMode ? "dark-mode" : null} form-label`}>
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
              <label htmlFor="hiringManager" className={`${darkMode ? "dark-mode" : null} form-label`}>
                Hiring Manager
              </label>
              <select
                className={`${darkMode ? "dark-mode" : null} form-select`}
                id="hiringManager"
                name="hiringManager"
                value={formData.hiringManager}
                onChange={handleInputChange}
              >
                <option value="">Select Hiring Manager</option>
                {hiringManagers.map(manager => (
                  <option key={manager.id} value={manager.name}>
                    {manager.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="hrManager" className={`${darkMode ? "dark-mode" : null} form-label`}>
                HR Manager
              </label>
              <select
                className={`${darkMode ? "dark-mode" : null} form-select`}
                id="hrManager"
                name="hrManager"
                value={formData.hrManager}
                onChange={handleInputChange}
              >
                <option value="">Select HR Manager</option>
                {hrManagers.map(manager => (
                  <option key={manager.id} value={manager.name}>
                    {manager.name}
                  </option>
                ))}
              </select>
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
              <Link to="/recruitment/offerletter">
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