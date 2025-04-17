import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AddTodayWork = ({ onClose }) => {
  const [formData, setFormData] = useState({
    project: '',
    deadline: '',
    totalHours: '',
    remainingHours: '',
    date: new Date().toISOString().split('T')[0],
    hours: ''
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity()) {
      // Handle form submission
      console.log('Form data:', formData);
      onClose();
    }

    setValidated(true);
  };

  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow">
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title fw-bold">Add Today's Work</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            />
          </div>
          
          <div className="modal-body px-4">
            <form 
              noValidate 
              validated={validated.toString()} 
              onSubmit={handleSubmit}
              className="needs-validation"
            >
              <div className="mb-3">
                <label className="form-label">
                  Project <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a project</option>
                  <option value="1">Project Alpha</option>
                  <option value="2">Project Beta</option>
                  <option value="3">Project Gamma</option>
                </select>
                <div className="invalid-feedback">
                  Please select a project
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Deadline <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please select a deadline
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Total Hours <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="totalHours"
                  value={formData.totalHours}
                  onChange={handleChange}
                  min="0"
                  step="0.5"
                  required
                />
                <div className="invalid-feedback">
                  Please enter total hours
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Remaining Hours <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="remainingHours"
                  value={formData.remainingHours}
                  onChange={handleChange}
                  min="0"
                  step="0.5"
                  required
                />
                <div className="invalid-feedback">
                  Please enter remaining hours
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please select a date
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Hours <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  min="0"
                  step="0.5"
                  required
                />
                <div className="invalid-feedback">
                  Please enter hours
                </div>
              </div>

              <div className="modal-footer border-top-0 px-0 pb-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  // style={{ backgroundColor: '#ff6b35', borderColor: '#ff6b35' }}
                >
                  Add Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodayWork;