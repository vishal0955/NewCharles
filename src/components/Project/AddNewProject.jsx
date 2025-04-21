import React, { useEffect } from "react";
import "./project.css";



import { useState } from 'react';
import { Link } from "react-router-dom";

const AddNewProject = ( {handleAddOrEditProject}) => {
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isClientDropdownOpen, setIsClientDropdownOpen] = useState(false);
  const [isAddingNewClient, setIsAddingNewClient] = useState(false);
  const [newClientName, setNewClientName] = useState('');
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState([
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
    { id: 5, name: 'Client 5' },
    { id: 6, name: 'Client 6' },

  ]);
  const [teamMembers] = useState([
    { id: 1, name: 'Team Member 1' },
    { id: 2, name: 'Team Member 2' },
    { id: 3, name: 'Team Member 3' },
    { id: 4, name: 'Team Member 4' },
    { id: 5, name: 'Team Member 5' },
    { id: 6, name: 'Team Member 6' },
    { id: 7, name: 'Team Member 7' },
    { id: 8, name: 'Team Member 8' },
    { id: 9, name: 'Team Member 9' },
    { id: 10, name: 'Team Member 10' },
  ]);

  const toggleTeamDropdown = () => {
    setIsTeamDropdownOpen(!isTeamDropdownOpen);
    if (isClientDropdownOpen) setIsClientDropdownOpen(false);
  };

  const toggleClientDropdown = () => {
    setIsClientDropdownOpen(!isClientDropdownOpen);
    if (isTeamDropdownOpen) setIsTeamDropdownOpen(false);
  };

  const handleTeamMemberToggle = (memberId) => {
    if (selectedTeamMembers.includes(memberId)) {
      setSelectedTeamMembers(selectedTeamMembers.filter(id => id !== memberId));
    } else {
      setSelectedTeamMembers([...selectedTeamMembers, memberId]);
    }
  };

  const getSelectedMemberNames = () => {
    return teamMembers
      .filter(member => selectedTeamMembers.includes(member.id))
      .map(member => member.name);
  };

  const handleSelectClient = (client) => {
    setSelectedClient(client);
    setIsClientDropdownOpen(false);
  };

  const showAddClientForm = (e) => {
    e.stopPropagation();
    setIsAddingNewClient(true);
    setIsClientDropdownOpen(false);
  };

  const handleAddNewClient = (e) => {
    e.preventDefault();
    if (newClientName.trim()) {
      const newClient = {
        id: clients.length + 1,
        name: newClientName.trim()
      };
      setClients([...clients, newClient]);
      setSelectedClient(newClient);
      setNewClientName('');
      setIsAddingNewClient(false);
    }
  };

  const cancelAddNewClient = () => {
    setIsAddingNewClient(false);
    setNewClientName('');
  };

  return (
    <>
      <div className="container">
        <div className="">
          <form>
            <div className="row mb-4">
              {/* Header */}
              <div className="col-12 mb-4">
                <h2 className="form-label font-bold">Add New Project</h2>
              </div>
              
              {/* Project Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Project Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter project name"
                />
              </div>
              
              {/* Client Dropdown */}
              <div className="col-md-6 mb-3">
                <div className="d-flex  justify-content-between">
                  <label className="form-label me-2">Client</label>
                  <button 
                    type="button" 
                    className="btn btn-sm btn-primary" 
                    onClick={showAddClientForm}
                    style={{ marginBottom: '2px' }}
                  >
                    <i className="bi bi-plus"></i> Add
                  </button>
                </div>
                
                {isAddingNewClient ? (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter new client name"
                      value={newClientName}
                      onChange={(e) => setNewClientName(e.target.value)}
                    />
                    <button 
                      className="btn btn-success" 
                      type="button"
                      onClick={handleAddNewClient}
                    >
                      <i className="bi bi-check"></i>
                    </button>
                    <button 
                      className="btn btn-danger" 
                      type="button"
                      onClick={cancelAddNewClient}
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  </div>
                ) : (
                  <div className="position-relative">
                    <div 
                      className="form-control d-flex align-items-center"
                      onClick={toggleClientDropdown}
                      style={{ cursor: 'pointer' }}
                    >
                      {selectedClient ? selectedClient.name : (
                        <span className="text-muted">Select client</span>
                      )}
                    </div>
                    
                    {isClientDropdownOpen && (
                      <div className="position-absolute w-100 bg-white border rounded shadow-sm py-1" 
                           style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}
                      >
                        {clients.map(client => (
                          <div 
                            key={client.id}
                            className="px-3 py-2" 
                            onClick={() => handleSelectClient(client)}
                            style={{ cursor: 'pointer' }}
                          >
                            {client.name}
                          </div>
                        ))}
                        <div 
                          className="px-3 py-2 text-primary border-top" 
                          onClick={showAddClientForm}
                          style={{ cursor: 'pointer' }}
                        >
                          <i className="bi bi-plus-circle me-2"></i>
                          Add new client
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Project Goal */}
              <div className="col-12 mb-3">
                <label className="form-label">Project Goal</label>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Describe project goals..."
                />
              </div>
              
              {/* Scope of Work */}
              <div className="col-12 mb-3">
                <label className="form-label">Scope of Work</label>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Define the scope of work..."
                />
              </div>
              
              {/* Client Requirements */}
              <div className="col-12 mb-3">
                <label className="form-label">Client Requirements</label>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="List client requirements..."
                />
              </div>
              
              {/* Custom Multi-Select Dropdown for Team Members */}
              <div className="col-12 mb-3">
                <label className="form-label">Assigned Team members</label>
                <div className="position-relative">
                  <div 
                    className="form-control d-flex flex-wrap align-items-center"
                    onClick={toggleTeamDropdown}
                    style={{ minHeight: '38px', cursor: 'pointer' }}
                  >
                    {selectedTeamMembers.length === 0 ? (
                      <span className="text-muted">Select team members</span>
                    ) : (
                      getSelectedMemberNames().map((name, index) => (
                        <span 
                          key={index} 
                          className="badge bg-primary me-1 mb-1"
                        >
                          {name}
                        </span>
                      ))
                    )}
                  </div>
                  
                  {isTeamDropdownOpen && (
                    <div className="position-absolute w-100 bg-white border rounded shadow-sm py-1" 
                         style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}
                    >
                      {teamMembers.map(member => (
                        <div 
                          key={member.id}
                          className="px-3 py-2 d-flex align-items-center" 
                          onClick={() => handleTeamMemberToggle(member.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          <input 
                            type="checkbox" 
                            className="form-check-input me-2" 
                            checked={selectedTeamMembers.includes(member.id)}
                            readOnly
                          />
                          <span>{member.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Helpful links & resources */}
              <div className="col-12 mb-3">
                <label className="form-label">Helpful links & resources</label>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Add helpful links and resources..."
                />
              </div>
              
              {/* Start Date */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Start Date</label>
                <input type="date" className="form-control" />
              </div>
              
              {/* End Date */}
              <div className="col-md-6 mb-3">
                <label className="form-label">End Date</label>
                <input type="date" className="form-control" />
              </div>
              
              {/* Priority */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Priority</label>
                <select className="form-select">
                  <option selected disabled>Select priority</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              
              {/* Project Value */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Project Value</label>
                <div className="input-group">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0.0"
                  />
                </div>
              </div>
              
              {/* Notes Field */}
              <div className="col-12 mb-4">
                <label className="form-label">Notes</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Add any additional notes..."
                />
              </div>
              
              {/* Attachments */} 
              <div className="col-12 mb-4">
                <label className="form-label">Attachments</label>
                <div
                  className="upload-area border p-2 rounded"
                  onClick={() => document.getElementById('fileUpload').click()}>
                  <input type="file" id="fileUpload" hidden multiple />
                  <i className="bi bi-file-earmark-arrow-up upload-icon" />
                  <div className="upload-text">
                    Upload files or drag and drop
                  </div>
                  <div className="upload-hint">PNG, JPG, PDF up to 10MB</div>
                </div>
              </div>
            </div>
            
            {/* Form Actions */}
            <div className="d-flex justify-content-end gap-2">
              <Link to="/allproject" >
              <button type="button" className="btn btn-light">
                Cancel
              </button>
              </Link>
              <Link to="/allproject" >
              <button type="submit" className="btn btn-primary" onClick={handleAddOrEditProject} >
                Create Project
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewProject;