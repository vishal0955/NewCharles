import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const CreatePlanForm = ({onclose}) => {
  const [formData, setFormData] = useState({
    name: "",
    monthlyPrice: "",
    annualPrice: "",
    maxUsers: "",
    maxClients: "",
    maxProjects: "",
    description: "",
    status: true,
    trialEnabled: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h4 className="mb-3">Create Plan</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Name *</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Monthly Price *</label>
              <input type="number" className="form-control" name="monthlyPrice" value={formData.monthlyPrice} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Annual Price *</label>
              <input type="number" className="form-control" name="annualPrice" value={formData.annualPrice} onChange={handleChange} required />
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Maximum Users Per Workspace *</label>
              <input type="number" className="form-control" name="maxUsers" value={formData.maxUsers} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Maximum Clients Per Workspace *</label>
              <input type="number" className="form-control" name="maxClients" value={formData.maxClients} onChange={handleChange} required />
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Maximum Projects Per Workspace *</label>
              <input type="number" className="form-control" name="maxProjects" value={formData.maxProjects} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3 d-flex align-items-center">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" name="trialEnabled" checked={formData.trialEnabled} onChange={handleChange} />
                <label className="form-check-label ms-2">Trial is enabled</label>
              </div>
            </div>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} rows="3"></textarea>
          </div>
          
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-secondary me-2" onClick={onclose}>Cancel</button>
            <button type="submit" className="btn btn-success" onClick={() => onclose()}>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlanForm;
