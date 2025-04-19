import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KPIForm({handleclose}) {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeId: '',
    department: '',
    position: '',
    manager: '',
    appraisalPeriod: '',
    appraisalDate: '',
    
    // Performance metrics
    jobKnowledge: 0,
    qualityOfWork: 0,
    productivity: 0,
    communication: 0,
    teamwork: 0,
    problemSolving: 0,
    initiative: 0,
    leadership: 0,
    
    strengths: '',
    areasOfImprovement: '',
    goals: '',
    trainingNeeds: '',
    additionalComments: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value, 10)
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally submit the data to a backend
    console.log("Form submitted:", formData);
    
    // Calculate average score
    const ratingFields = [
      'jobKnowledge', 'qualityOfWork', 'productivity', 'communication', 
      'teamwork', 'problemSolving', 'initiative', 'leadership'
    ];
    
    const totalScore = ratingFields.reduce((sum, field) => sum + formData[field], 0);
    const averageScore = (totalScore / ratingFields.length).toFixed(1);
    
    alert(`Appraisal submitted successfully! Average Score: ${averageScore}/5`);
    setSubmitted(true);
  };
  
  const resetForm = () => {
    setFormData({
      employeeName: '',
      employeeId: '',
      department: '',
      position: '',
      manager: '',

      jobKnowledge: 0,
      qualityOfWork: 0,
      productivity: 0,
      communication: 0,
      teamwork: 0,
      problemSolving: 0,
      initiative: 0,
      leadership: 0,
      
      strengths: '',
      areasOfImprovement: '',
      goals: '',
      trainingNeeds: '',
      additionalComments: '',
    });
    setSubmitted(false);
  };
  
  // Rating descriptions for the tooltip
  const ratingDescriptions = {
    1: "Poor - Does not meet expectations",
    2: "Below Average - Partially meets expectations",
    3: "Average - Meets expectations",
    4: "Good - Exceeds expectations",
    5: "Excellent - Far exceeds expectations"
  };
  
  const renderRatingInput = (label, name) => (
    <div className="mb-3">
      <label className="form-label d-block">{label}</label>
      <div className="d-flex align-items-center">
        <div className="rating-container d-flex align-items-center justify-content-between w-75">
          {[1, 2, 3, 4, 5].map(value => (
            <div key={value} className="form-check mx-2">
              <input
                className="form-check-input"
                type="radio"
                name={name}
                id={`${name}${value}`}
                value={value}
                checked={formData[name] === value}
                onChange={handleRatingChange}
              />
              <label className="form-check-label" htmlFor={`${name}${value}`}>
                {value}
              </label>
            </div>
          ))}
        </div>
        <div className="rating-description text-muted small ms-3 w-25">
          {formData[name] ? ratingDescriptions[formData[name]] : "Select a rating"}
        </div>
      </div>
    </div>
  );
  
  if (submitted) {
    return (
      <div className="container mt-4">
        <div className="card bg-light">
          <div className="card-body text-center">
            <h3 className="card-title text-success mb-4">Appraisal Submitted Successfully!</h3>
            <p className="lead">The appraisal for {formData.employeeName} has been recorded.</p>
            <button className="btn btn-primary mt-3" onClick={resetForm}>
              Create Another Appraisal
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container-fluid my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">New Employee Appraisal</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Employee Information Section */}
            <div className="row mb-4">
              <div className="col-12">
                <h4 className="border-bottom pb-2">Employee Information</h4>
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="employeeName" className="form-label">Employee*</label>
                  <select 
                    className="form-select" 
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="">Select Employee</option>
                    <option value="IT">John Doe</option>
                    <option value="HR">Smith Dawyne</option>
                    <option value="Finance">John Doe</option>


                  </select>
                </div>
              </div>
              
              {/* <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="employeeId" className="form-label">Employee ID*</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="employeeId"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div> */}
              
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="department" className="form-label">Department</label>
                  <select 
                    className="form-select" 
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="">Select Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Operations">Operations</option>
                    <option value="Sales">Sales</option>
                  </select>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="position" className="form-label">Position</label>
                  <select 
                    className="form-select" 
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="">Select Position</option>
                    <option value="IT">Sales</option>
                    <option value="HR">Manager</option>
                    <option value="Finance">developer</option>
                    <option value="Marketing">Support </option>
                    <option value="Operations">Operations</option>
                
                  </select>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="manager" className="form-label">Manager/Supervisor*</label>
                  <select 
                    className="form-select" 
                    id="manager"
                    name="manager"
                    value={formData.manager}
                    onChange={handleChange}
                  >
                    <option value=""> Manager</option>
                    <option value="IT">John Doe</option>
                    <option value="HR">Smith Dawyne</option>
                    <option value="Finance">John Doe</option>


                  </select>
                </div>
              </div>
              
              {/* <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="appraisalPeriod" className="form-label">Appraisal Period*</label>
                  <select 
                    className="form-select" 
                    id="appraisalPeriod"
                    name="appraisalPeriod"
                    value={formData.appraisalPeriod}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Period</option>
                    <option value="Q1 2025">Q1 2025</option>
                    <option value="Q2 2025">Q2 2025</option>
                    <option value="Q3 2025">Q3 2025</option>
                    <option value="Q4 2025">Q4 2025</option>
                    <option value="Annual 2024">Annual 2024</option>
                    <option value="Mid-Year 2025">Mid-Year 2025</option>
                  </select>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="appraisalDate" className="form-label">Appraisal Date*</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    id="appraisalDate"
                    name="appraisalDate"
                    value={formData.appraisalDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div> */}
            </div>
            
            {/* Performance Evaluation Section */}
            <div className="row mb-4">
              <div className="col-12">
                <h4 className="border-bottom pb-2">Performance Evaluation</h4>
                <p className="text-muted small">Rate on a scale of 1-5 (1: Poor, 5: Excellent)</p>
              </div>
              
              <div className="col-md-6">
                {renderRatingInput("Job Knowledge & Technical Skills", "jobKnowledge")}
                {renderRatingInput("Quality of Work", "qualityOfWork")}
                {renderRatingInput("Productivity & Efficiency", "productivity")}
                {renderRatingInput("Communication Skills", "communication")}
              </div>
              
              <div className="col-md-6">
                {renderRatingInput("Teamwork & Collaboration", "teamwork")}
                {renderRatingInput("Problem Solving & Decision Making", "problemSolving")}
                {renderRatingInput("Initiative & Creativity", "initiative")}
                {renderRatingInput("Leadership (if applicable)", "leadership")}
              </div>
            </div>
            
            {/* Comments Section */}
            <div className="row mb-4">
              <div className="col-12">
                <h4 className="border-bottom pb-2">Feedback & Development</h4>
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="strengths" className="form-label">Key Strengths & Achievements</label>
                  <textarea 
                    className="form-control" 
                    id="strengths"
                    name="strengths"
                    rows="3"
                    value={formData.strengths}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="areasOfImprovement" className="form-label">Areas for Improvement</label>
                  <textarea 
                    className="form-control" 
                    id="areasOfImprovement"
                    name="areasOfImprovement"
                    rows="3"
                    value={formData.areasOfImprovement}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="goals" className="form-label">Goals for Next Period</label>
                  <textarea 
                    className="form-control" 
                    id="goals"
                    name="goals"
                    rows="3"
                    value={formData.goals}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="trainingNeeds" className="form-label">Training & Development Needs</label>
                  <textarea 
                    className="form-control" 
                    id="trainingNeeds"
                    name="trainingNeeds"
                    rows="3"
                    value={formData.trainingNeeds}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="additionalComments" className="form-label">Additional Comments</label>
                  <textarea 
                    className="form-control" 
                    id="additionalComments"
                    name="additionalComments"
                    rows="3"
                    value={formData.additionalComments}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            
            {/* Form Actions */}
            <div className="row">
              <div className="col-12 d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-outline-secondary" onClick={ () => navigate("/performance/kpitable")}>
                  Cancel
                </button>
             
                <button type="submit" className="btn btn-primary" onClick={ () => navigate("/performance/kpitable")}>
                  Submit 
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}