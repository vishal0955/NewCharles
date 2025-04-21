import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const AddTask = ({handleCloseModal}) => {
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);

  const darkMode = useSelector((state) => state.theme.isDarkMode);

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
  return (
    <>
    <div className="container">
  <div className={`${darkMode ? "dark-mode" : "" }  task-form-container `}>
    <form>
      {/* Task Name */}
      <div className="mb-3">
        <label htmlFor="taskName" className={`${darkMode ? "dark-mode" : "" }  form-label `}>
          Task Name
        </label>
        <input
          type="text"
          className={`${darkMode ? "dark-mode" : "" } form-control `}
          id="taskName"
          placeholder="Enter task name"
        />
      </div>
      {/* Description */}
      <div className="mb-3">
        <label htmlFor="description" className={`${darkMode ? "dark-mode" : "" }  form-label `}>
          Description
        </label>
        <textarea
          className={`${darkMode ? "dark-mode" : "" } form-control `}
          id="description"
          placeholder="Enter task description..."
          defaultValue={""}
        />
      </div>
      <div className="row mb-3">
        {/* Project */}
        <div className="col-md-6 mb-3 mb-md-0">
          <label htmlFor="project" className={`${darkMode ? "dark-mode" : "" }  form-label `}>
            Project
          </label>
          <select className={`${darkMode ? "dark-mode" : "" } form-select `} id="project">
            <option>Brand Refresh Project</option>
            <option>Backend Modernization</option>
            <option>Marketing Campaign Q4</option>
          </select>
        </div>
        {/* Status */}
        <div className="col-md-6">
          <label htmlFor="status" className={`${darkMode ? "dark-mode" : "" }  form-label `}>
            Status
          </label>
          <select className={`${darkMode ? "dark-mode" : "" } form-select `} id="status">
            <option>In Progress</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        {/* Priority */}
        <div className="col-md-6 mb-3 mb-md-0">
          <label htmlFor="priority" className={`${darkMode ? "dark-mode" : "" }  form-label `}>
            Priority
          </label>
          <select className={`${darkMode ? "dark-mode" : "" } form-select `} id="priority">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        {/* Due Date */}
        <div className="col-md-6">
          <label htmlFor="dueDate" className={`${darkMode ? "dark-mode" : "" }  form-label `}>
            Due Date
          </label>
          <input type="date" className={`${darkMode ? "dark-mode" : "" } form-control `} id="dueDate" />
        </div>
      </div>
      {/* Assigned To */}
 

      <div className="mb-4">
                <label className={`${darkMode ? "dark-mode" : "" }  form-label `}>Assigned to</label>
                <div className="position-relative">
                  <div 
                    className={`${darkMode ? "dark-mode" : "" } form-control d-flex flex-wrap align-items-center`}
                    onClick={toggleTeamDropdown}
                    style={{ minHeight: '38px', cursor: 'pointer' }}
                  >
                    {selectedTeamMembers.length === 0 ? (
                      <span className="">Select  members</span>
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
                          className={`${darkMode ? "dark-mode" : "" } px-3 py-2 d-flex align-items-center `}
                          onClick={() => handleTeamMemberToggle(member.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          <input 
                            type="checkbox" 
                            className={`${darkMode ? "dark-mode" : "" } form-check-input me-2 `}
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
      {/* Attachments */}
      <div className="mb-4">
        <label className={`${darkMode ? "dark-mode" : "" }  form-label `}>Attachments</label>
        <div className="file-upload-btn">
          <input type="file" id="fileInput" multiple="" />
          <i className="bi bi-paperclip me-2" />
          <span>Add Files</span>
          <div className="text-muted mt-1">Upload any relevant files</div>
        </div>
        <div id="fileList" className="file-list" />
      </div>
      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-2">
        <button type="button" className="btn btn-outline-secondary"  onClick={handleCloseModal}>
          Cancel
        </button>
        <button type="submit" className="btn create-btn">
          Create Task
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default AddTask



