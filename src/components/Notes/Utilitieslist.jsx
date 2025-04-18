import React, { useState } from 'react';
import { Search, Plus, Edit, Eye, FileText, Download, Bell, X } from 'lucide-react';

// Sample utilities data
const initialUtilities = [
  { id: 1, name: "Monthly Budget Calculator", type: "Calculator", status: "Active" },
  { id: 2, name: "Document Uploader", type: "File Uploader", status: "Active" },
  { id: 3, name: "Task Tracker", type: "Shortcut", status: "Inactive" },
  { id: 4, name: "Meeting Notes Template", type: "Template", status: "Active" },
  { id: 5, name: "Expense Reporter", type: "Calculator", status: "Active" },
  { id: 6, name: "Quick Email Formatter", type: "Tool", status: "Inactive" },
];

// Utility types for filter dropdown
const utilityTypes = ["All Types", "Calculator", "File Uploader", "Shortcut", "Template", "Tool"];

export default function UtilitiesPanel() {
  const [utilities, setUtilities] = useState(initialUtilities);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All Types');
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUtility, setSelectedUtility] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [notification, setNotification] = useState(null);
  
  const itemsPerPage = 5;
  
  // Filter utilities based on search and filters
  const filteredUtilities = utilities.filter(utility => {
    const matchesSearch = utility.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All Types' || utility.type === filterType;
    const matchesStatus = filterStatus === 'All' || utility.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });
  
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUtilities = filteredUtilities.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUtilities.length / itemsPerPage);
  
  // Handle utility selection
  const handleUtilitySelect = (utility) => {
    setSelectedUtility(utility);
    setIsDetailView(true);
    setIsEditMode(false);
  };
  
  // Handle edit mode
  const handleEditMode = () => {
    setIsEditMode(true);
  };
  
  // Handle save changes
  const handleSaveChanges = () => {
    setIsEditMode(false);
    showNotification("Utility updated successfully!");
  };
  
  // Handle add new utility
  const handleAddUtility = () => {
    const newUtility = {
      id: utilities.length + 1,
      name: "New Utility",
      type: "Calculator",
      status: "Inactive"
    };
    setUtilities([...utilities, newUtility]);
    setSelectedUtility(newUtility);
    setIsDetailView(true);
    setIsEditMode(true);
    showNotification("New utility added!");
  };
  
  // Export functionality
  const handleExport = (format) => {
    showNotification(`Exported to ${format} successfully!`);
  };
  
  // Show notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };
  
  // Handle back to list
  const handleBackToList = () => {
    setIsDetailView(false);
    setSelectedUtility(null);
  };

  // Render page navigation
  const renderPagination = () => {
    return (
      <nav aria-label="Utilities pagination">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <div className="container-fluid p-4">
      {/* Notification Toast */}
      {notification && (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
          <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header bg-success text-white">
              <strong className="me-auto">Notification</strong>
              <button type="button" className="btn-close btn-close-white" onClick={() => setNotification(null)}></button>
            </div>
            <div className="toast-body">
              {notification}
            </div>
          </div>
        </div>
      )}
      
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white d-flex justify-content-between align-items-center p-3">
          <h5 className="mb-0 fw-bold text-primary">Utilities Panel</h5>
          {!isDetailView && (
            <button className="btn btn-primary d-flex align-items-center" onClick={handleAddUtility}>
              <Plus size={18} className="me-1" /> Add Utility
            </button>
          )}
          {isDetailView && (
            <button className="btn btn-outline-secondary d-flex align-items-center" onClick={handleBackToList}>
              <span>Back to List</span>
            </button>
          )}
        </div>
        
        <div className="card-body">
          {!isDetailView ? (
            /* Utilities List View */
            <>
              {/* Search and Filters */}
              <div className="row mb-4 g-3">
                <div className="col-md-5">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <Search size={18} className="text-muted" />
                    </span>
                    <input 
                      type="text" 
                      className="form-control border-start-0" 
                      placeholder="Search utilities..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <select 
                    className="form-select" 
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    {utilityTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-2">
                  <select 
                    className="form-select" 
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle w-100" type="button" id="exportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                      <Download size={18} className="me-1" /> Export
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="exportDropdown">
                      <li><button className="dropdown-item" onClick={() => handleExport('PDF')}>Export as PDF</button></li>
                      <li><button className="dropdown-item" onClick={() => handleExport('Excel')}>Export as Excel</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Utilities Table */}
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Status</th>
                      <th scope="col" className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUtilities.length > 0 ? (
                      currentUtilities.map((utility) => (
                        <tr key={utility.id}>
                          <td>{utility.id}</td>
                          <td>{utility.name}</td>
                          <td><span className="badge bg-light text-dark">{utility.type}</span></td>
                          <td>
                            <span className={`badge ${utility.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                              {utility.status}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center gap-2">
                              <button 
                                className="btn btn-sm btn-outline-primary" 
                                onClick={() => handleUtilitySelect(utility)}
                                title="View Details"
                              >
                                <Eye size={16} />
                              </button>
                              <button 
                                className="btn btn-sm btn-outline-secondary" 
                                onClick={() => {
                                  handleUtilitySelect(utility);
                                  handleEditMode();
                                }}
                                title="Edit"
                              >
                                <Edit size={16} />
                              </button>
                              <button 
                                className="btn btn-sm btn-outline-info" 
                                onClick={() => handleExport('PDF')}
                                title="Export"
                              >
                                <FileText size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center py-4">
                          No utilities found matching your criteria
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && renderPagination()}
            </>
          ) : (
            /* Utility Detail View */
            <div className="row">
              <div className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">
                      {isEditMode ? "Edit Utility" : "Utility Details"}
                    </h6>
                    <div className="d-flex gap-2">
                      {!isEditMode && (
                        <button 
                          className="btn btn-sm btn-outline-primary" 
                          onClick={handleEditMode}
                        >
                          <Edit size={16} className="me-1" /> Edit
                        </button>
                      )}
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="exportDetailDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                          <Download size={16} className="me-1" /> Export
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="exportDetailDropdown">
                          <li><button className="dropdown-item" onClick={() => handleExport('PDF')}>Export as PDF</button></li>
                          <li><button className="dropdown-item" onClick={() => handleExport('Excel')}>Export as Excel</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    {isEditMode ? (
                      /* Edit Form */
                      <form>
                        <div className="mb-3">
                          <label htmlFor="utilityName" className="form-label">Utility Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="utilityName" 
                            defaultValue={selectedUtility?.name || ""}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="utilityType" className="form-label">Type</label>
                          <select 
                            className="form-select" 
                            id="utilityType"
                            defaultValue={selectedUtility?.type || ""}
                          >
                            {utilityTypes.filter(type => type !== 'All Types').map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="utilityStatus" className="form-label">Status</label>
                          <select 
                            className="form-select" 
                            id="utilityStatus"
                            defaultValue={selectedUtility?.status || ""}
                          >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="utilityConfig" className="form-label">Configuration</label>
                          <textarea 
                            className="form-control" 
                            id="utilityConfig" 
                            rows="4"
                            defaultValue="// Configuration settings here"
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label className="form-label d-block">Integrations</label>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="integrationNotes" defaultChecked />
                            <label className="form-check-label" htmlFor="integrationNotes">Personal Notes</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="integrationLinks" />
                            <label className="form-check-label" htmlFor="integrationLinks">Quick Links</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="integrationReminders" />
                            <label className="form-check-label" htmlFor="integrationReminders">Reminders</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                          <button 
                            type="button" 
                            className="btn btn-outline-secondary"
                            onClick={() => setIsEditMode(false)}
                          >
                            Cancel
                          </button>
                          <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={handleSaveChanges}
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    ) : (
                      /* Detail View */
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-4">
                            <h6 className="text-muted mb-2">Utility Information</h6>
                            <div className="mb-3">
                              <p className="mb-1 fw-bold">ID</p>
                              <p className="mb-0">{selectedUtility?.id}</p>
                            </div>
                            <div className="mb-3">
                              <p className="mb-1 fw-bold">Name</p>
                              <p className="mb-0">{selectedUtility?.name}</p>
                            </div>
                            <div className="mb-3">
                              <p className="mb-1 fw-bold">Type</p>
                              <p className="mb-0">
                                <span className="badge bg-light text-dark">{selectedUtility?.type}</span>
                              </p>
                            </div>
                            <div className="mb-3">
                              <p className="mb-1 fw-bold">Status</p>
                              <p className="mb-0">
                                <span className={`badge ${selectedUtility?.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                                  {selectedUtility?.status}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <h6 className="text-muted mb-2">Configuration</h6>
                            <div className="card bg-light">
                              <div className="card-body">
                                <pre className="mb-0 text-muted" style={{ fontSize: '0.875rem' }}>
                                  // Sample configuration for {selectedUtility?.name}
                                  {"\n"}
                                  {"{"}
                                  {"\n  "}"settings": {"{"}
                                  {"\n    "}"autoStart": true,
                                  {"\n    "}"notifications": true,
                                  {"\n    "}"theme": "light"
                                  {/* {"\n  "}"},
                                  {"\n  "}"permissions": ["read", "write"]
                                  {"\n"}"} */}
                                </pre>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h6 className="text-muted mb-2">Integrations</h6>
                            <div className="d-flex flex-wrap gap-2">
                              <span className="badge bg-primary">Personal Notes</span>
                              <span className="badge bg-secondary">Quick Links</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}