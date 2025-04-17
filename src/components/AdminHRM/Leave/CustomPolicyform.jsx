import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const CustomPolicyModal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;
    
  const [leaveType, setLeaveType] = useState("Annual Leave");
  const [policyName, setPolicyName] = useState("");
  const [days, setDays] = useState("");
  const [employee, setEmployee] = useState("");

  return (
    <div className="modal fade" id="customPolicyModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <div className="modal-header">
            <h5 className="modal-title">New Custom Policy</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Leave Type</label>
              <select className="form-select" value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
                <option>Annual Leave</option>
                <option>Sick Leave</option>
                <option>Maternity Leave</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Policy Name</label>
                <input type="text" className="form-control" value={policyName} onChange={(e) => setPolicyName(e.target.value)} placeholder="Enter policy name" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">No of Days</label>
                <input type="number" className="form-control" value={days} onChange={(e) => setDays(e.target.value)} placeholder="Enter days" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Add Employee</label>
              <select className="form-select" value={employee} onChange={(e) => setEmployee(e.target.value)}>
                <option>Select employee</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-dark">Add Leaves</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPolicyModal;
