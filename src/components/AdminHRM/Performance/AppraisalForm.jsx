import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function AppraisalForm({ handleclose }) {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeId: '',
    department: '',
    position: '',
    manager: '',
    appraisalPeriod: '',
    appraisalDate: '',
    appraisalScore: '',
  });

   const darkMode = useSelector((state) => state.theme.isDarkMode);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      employeeName: '',
      employeeId: '',
      department: '',
      position: '',
      manager: '',
      appraisalPeriod: '',
      appraisalDate: '',
      appraisalScore: '',
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="container ">
        <div className="card bg-light">
          <div className="card-body text-center">
            <h3 className="card-title text-success mb-4">Appraisal Submitted Successfully!</h3>
            <p className="lead">The appraisal for {formData.employeeName || "the employee"} has been recorded.</p>
            <button className="btn btn-primary mt-3" onClick={resetForm}>
              Create Another Appraisal
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container ">
      <div className="card ">
      
        <div className="card-body">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Employee Name*</label>
              <input
                type="text"
                className="form-control"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Employee ID*</label>
              <input
                type="text"
                className="form-control"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Position</label>
              <input
                type="text"
                className="form-control"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Manager/Supervisor</label>
              <input
                type="text"
                className="form-control"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Appraisal Period</label>
              <select
                className="form-select"
                name="appraisalPeriod"
                value={formData.appraisalPeriod}
                onChange={handleChange}
              >
                <option value="">Select Period</option>
                <option value="Q1 2025">Q1 2025</option>
                <option value="Q2 2025">Q2 2025</option>
                <option value="Q3 2025">Q3 2025</option>
                <option value="Q4 2025">Q4 2025</option>
                <option value="Annual 2024">Annual 2024</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Appraisal Date</label>
              <input
                type="date"
                className="form-control"
                name="appraisalDate"
                value={formData.appraisalDate}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Appraisal Score</label>
              <input
                type="number"
                className="form-control"
                name="appraisalScore"
                value={formData.appraisalScore}
                onChange={handleChange}
                min="0"
                max="5"
                step="0.1"
              />
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-success" onClick={handleclose}>Submit Appraisal</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
