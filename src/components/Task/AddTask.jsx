import React from 'react'
import { useSelector } from 'react-redux';

const AddTask = ({handleCloseModal}) => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);
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
        <label htmlFor="assignedTo" className={`${darkMode ? "dark-mode" : "" }  form-label `}>
          Assigned To
        </label>
        <select className={`${darkMode ? "dark-mode" : "" } form-select `} id="assignedTo">
          <option>Sarah Chen</option>
          <option>Michael Johnson</option>
          <option>Emily Wilson</option>
        </select>
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