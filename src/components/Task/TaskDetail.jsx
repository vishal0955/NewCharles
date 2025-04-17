

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./task.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddTask from './AddTask';

const TaskDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  // State for form fields
  const [customFields, setCustomFields] = useState({
    contactPhone: "",
    liveStatus: "TBC",
    organisation: "",
    bpavProject: "",
    contactEmail: "",
    contactName: "",
    progress: ""
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomFields(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Custom fields submitted:", customFields);
    // Here you would typically save the data
  };

  return (
    <>
      <div>
        <div className="container py-5">
          <div className={`${darkMode ? "card-dark" : null }  task-card p-3 rounded" `}>
            <div className="d-flex justify-content-between align-items-start mb-4">
              <h4 className="mb-0">Task Details</h4>
              <div className="">
                <button className="edit-btn " onClick={() => navigate(-1)}>
                  <i className="bi bi-arrow-left" />
                  Back
                </button>

                <button className="edit-btn"  onClick={handleOpenModal}>
                  <i className="bi bi-pencil" /> Edit Task
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <h5 className="mb-3">Task Description</h5>
                <p className=" text-[#a0a0a0] mb-4">
                  Design and implement new user interface components for the dashboard
                  section. Focus on improving user experience and maintaining
                  consistency with our design system.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="task-metadata">
                      <i className="bi bi-calendar" />
                      <span>Due: Oct 15, 2024 - 5:00 PM</span>
                    </div>
                    <div className="task-metadata">
                      <i className="bi bi-person" />
                      <span>Assigned to: Sarah Chen</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="task-metadata">
                      <i className="bi bi-flag" />
                      <span>Priority: High</span>
                    </div>
                    <div className="task-metadata">
                      <i className="bi bi-folder" />
                      <span>Project: Brand Refresh Project</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <h5 className="mb-3">Attachments</h5>
                <div className= {`${darkMode ? "dark-mode" : null } attachment-item `}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-file-pdf text-danger me-2" />
                    <div>
                      <div>Requirements.pdf</div>
                      <div className="file-size">2.4 KB</div>
                    </div>
                  </div>
                  <a href="#" className="">
                    <i className="bi bi-download" />
                  </a>
                </div>
                <div className={`${darkMode ? "dark-mode" : null } attachment-item `}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-file-image text-primary me-2" />
                    <div>
                      <div>Mockup.png</div>
                      <div className="file-size">1.8 MB</div>
                    </div>
                  </div>
                  <a href="#" className="">
                    <i className="bi bi-download" />
                  </a>
                </div>
                <div className={`${darkMode ? "dark-mode" : null } attachment-item `}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-file-word text-primary me-2" />
                    <div>
                      <div>Guidelines.doc</div>
                      <div className="file-size">850 KB</div>
                    </div>
                  </div>
                  <a href="#" className="">
                    <i className="bi bi-download" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              {/* <div className="col-lg-6">
                <h5 className="mb-3">Custom Fields</h5>
                <form onSubmit={handleSubmit} className= {`${darkMode ? "card-dark" : null } custom-fields-form `}>
                  <div className="field-item">
                    <div className="field-icon">📱</div>
                    <div className="field-label">Contact Phone</div>
                    <div className="field-input">
                      <input 
                        type="text" 
                        name="contactPhone"
                        value={customFields.contactPhone}
                        onChange={handleInputChange}
                        className={`${darkMode ? "card-dark" : null } form-control `}
                      />
                    </div>
                  </div>
                  
                  <div className="field-item">
                    <div className="field-icon">🔴</div>
                    <div className="field-label">Live status</div>
                    <div className="field-input">
                      <span className="status-badge">TBC</span>
                    </div>
                  </div>
                  
                  <div className="field-item">
                    <div className="field-icon">🏢</div>
                    <div className="field-label">Organisation</div>
                    <div className="field-input">
                      <input 
                        type="text" 
                        name="organisation"
                        value={customFields.organisation}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  
                  <div className="field-item">
                    <div className="field-icon">📊</div>
                    <div className="field-label">BPAV Project...</div>
                    <div className="field-input">
                      <input 
                        type="text" 
                        name="bpavProject"
                        value={customFields.bpavProject}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  
                  <div className="field-item">
                    <div className="field-icon">✉️</div>
                    <div className="field-label">Contact Email</div>
                    <div className="field-input">
                      <input 
                        type="email" 
                        name="contactEmail"
                        value={customFields.contactEmail}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  
                  <div className="field-item">
                    <div className="field-icon">👤</div>
                    <div className="field-label">Contact Name</div>
                    <div className="field-input">
                      <input 
                        type="text" 
                        name="contactName"
                        value={customFields.contactName}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  
                  <div className="field-item">
                    <div className="field-icon">📈</div>
                    <div className="field-label">Progress (%)</div>
                    <div className="field-input progress-container">
                      <div className="progress">
                        <div 
                          className="progress-bar bg-success" 
                          role="progressbar" 
                          style={{ width: `${customFields.progress}%` }}
                          aria-valuenow={customFields.progress} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="progress-text">{customFields.progress}%</span>
                    </div>
                    <input type="text"
                    name="progress"
                    value={customFields.progress}
                    onChange={handleInputChange}
                    className="form-control" />
                  </div>
                  
                  <div className="mt-3">
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </div>
                </form>
              </div> */}
              <div className='col-lg-12'>
                <h5 className="mb-3">Activity/Comments</h5>
                <div className="activity-item   ">
                  <input type="text-area" className="form-control" placeholder="Add a comment..." />
                  <button type="submit" className="btn btn-primary  mt-2">Add Comment</button>
                </div>
              </div>
            </div>
          </div>
          {isModalOpen && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Task</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <AddTask  handleCloseModal={handleCloseModal} />
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
        <style jsx>{`
        /* Add these styles to your task.css file */

.task-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  padding: 25px;
}

.edit-btn {
  display: inline-flex;
  align-items: center;
  background-color: #f8f9fa;
  color: #212529;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 8px 15px;
  margin-left: 10px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
}

.edit-btn:hover {
  background-color: #e9ecef;
}

.edit-btn i {
  margin-right: 5px;
}

.task-metadata {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #6c757d;
}

.task-metadata i {
  margin-right: 10px;
  font-size: 18px;
}

.attachment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  margin-bottom: 10px;
}

.file-size {
  font-size: 12px;
  color: #6c757d;
}

/* Custom Fields Styles */
.custom-fields-form {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.field-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
}

.field-icon {
  width: 24px;
  text-align: center;
  margin-right: 10px;
}

.field-label {
  flex: 0 0 140px;
  font-size: 14px;
  font-weight: 500;
  color: #495057;
}

.field-input {
  flex: 1;
}

.field-input input {
  height: 32px;
  padding: 4px 8px;
  font-size: 14px;
}

.status-badge {
  display: inline-block;
  background-color: #ffc107;
  color: #212529;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.progress-container {
  display: flex;
  align-items: center;
}

.progress {
  flex: 1;
  height: 8px;
  margin-right: 10px;
  background-color: #e9ecef;
}

.progress-text {
  font-size: 12px;
  color: #6c757d;
  width: 40px;
  text-align: right;
}

/* Make it responsive */
@media (max-width: 992px) {
  .field-label {
    flex: 0 0 110px;
  }
}

@media (max-width: 768px) {
  .field-item {
    flex-wrap: wrap;
  }
  
  .field-label {
    flex: 1 0 calc(100% - 34px);
    margin-bottom: 5px;
  }
  
  .field-input {
    flex: 1 0 calc(100% - 34px);
    margin-left: 34px;
  }
}

/* Optional: Add a drag & drop area for attachments */
.attachment-dropzone {
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin-top: 15px;
  color: #6c757d;
  cursor: pointer;
  transition: all 0.2s;
}

.attachment-dropzone:hover {
  border-color: #adb5bd;
  background-color: #f8f9fa;
}`
}</style>
      </div>
    </>
  );
};

export default TaskDetail;
