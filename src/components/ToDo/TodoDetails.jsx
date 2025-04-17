import React from 'react';
import { useLocation } from 'react-router-dom';
import "../Task/task.css";

const TodoDetail = () => {
  const location = useLocation();
  const { task } = location.state || {}; // Get the task from the state

  if (!task) {
    return <div>No task found!</div>; // Handle case where no task is found
  }

  return (
    <div>
      <div className="container py-5 ">
        <div className="task-card">
          <div className="d-flex justify-content-between align-items-start mb-4">
            <h4 className="mb-0">Task Details</h4>
            <a href="#" className="edit-btn">
              <i className="bi bi-pencil" /> Edit Task
            </a>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <h5 className="mb-3">Task Description</h5>
              <p className="text-muted mb-4">{task.description}</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="task-metadata">
                    <i className="bi bi-calendar" />
                    <span>Due: {new Date(task.dueDate).toLocaleDateString()} - {task.dueDate.split('-')[2]}:00 PM</span>
                  </div>
                  <div className="task-metadata">
                    <i className="bi bi-person" />
                    <span>Assigned to: {task.assignees.map(id => getAssigneeName(id)).join(', ')}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="task-metadata">
                    <i className="bi bi-flag" />
                    <span>Priority: {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span>
                  </div>
                  <div className="task-metadata">
                    <i className="bi bi-folder" />
                    <span>Project: {task.project || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h5 className="mb-3">Attachments</h5>
              {task.attachments && task.attachments.length > 0 ? (
                task.attachments.map((attachment, index) => (
                  <div className="attachment-item" key={index}>
                    <div className="d-flex align-items-center">
                      <i className={`bi bi-file-${attachment.type} text-${attachment.color} me-2`} />
                      <div>
                        <div>{attachment.name}</div>
                        <div className="file-size">{attachment.size}</div>
                      </div>
                    </div>
                    <a href={attachment.url} className="text-muted">
                      <i className="bi bi-download" />
                    </a>
                  </div>
                ))
              ) : (
                <p>No attachments available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;