import React from 'react'

const AddTask = ({handleCloseModal}) => {
  return (
    <>
    <div className="container">
  <div className="task-form-container">
    <form>
      {/* Task Name */}
      <div className="mb-3">
        <label htmlFor="taskName" className="form-label">
          Task Name
        </label>
        <input
          type="text"
          className="form-control"
          id="taskName"
          placeholder="Enter task name"
        />
      </div>
      {/* Description */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          placeholder="Enter task description..."
          defaultValue={""}
        />
      </div>
      <div className="row mb-3">
        {/* Project */}
        <div className="col-md-6 mb-3 mb-md-0">
          <label htmlFor="project" className="form-label">
            Project
          </label>
          <select className="form-select" id="project">
            <option>Brand Refresh Project</option>
            <option>Backend Modernization</option>
            <option>Marketing Campaign Q4</option>
          </select>
        </div>
        {/* Status */}
        <div className="col-md-6">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select className="form-select" id="status">
            <option>In Progress</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        {/* Priority */}
        <div className="col-md-6 mb-3 mb-md-0">
          <label htmlFor="priority" className="form-label">
            Priority
          </label>
          <select className="form-select" id="priority">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        {/* Due Date */}
        <div className="col-md-6">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input type="date" className="form-control" id="dueDate" />
        </div>
      </div>
      {/* Assigned To */}
      <div className="mb-4">
        <label htmlFor="assignedTo" className="form-label">
          Assigned To
        </label>
        <select className="form-select" id="assignedTo">
          <option>Sarah Chen</option>
          <option>Michael Johnson</option>
          <option>Emily Wilson</option>
        </select>
      </div>
      {/* Attachments */}
      <div className="mb-4">
        <label className="form-label">Attachments</label>
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
        <button type="button" className="btn cancel-btn"  onClick={handleCloseModal}>
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