import React from 'react'

const TaskGrid = () => {
  return (
    <>
        {/* Search and Filters */}
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="search-container">
              <input
                type="text"
                className="search-box"
                placeholder="Search tasks..."
              />
            </div>
            <div className="d-flex gap-2">
              <select className="form-select filter-select">
                <option>All Status</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
              <select className="form-select filter-select">
                <option>All Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
          <div className="row g-4">
            {/* Project Cards */}
            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="d-flex justify-content-between align-items-start">
                  <span className="project-status status-ongoing">Ongoing</span>
                  <button className="project-options">
                    <i className="bi bi-three-dots" />
                  </button>
                </div>
                <h5 className="project-title">Brand Refresh Project</h5>
                <p className="project-description">
                  Redesigning company brand identity and visual guidelines
                </p>
                <div className="project-meta">Due Oct 15</div>
                <div className="team-avatars">
                  <img
                    src="https://i.ibb.co/PGg1c87h/Ellipse-5-6.png"
                    className="avatar"
                    alt="avatar"
                  />
                  <img
                    src="https://i.ibb.co/Jj86BTPS/Ellipse-5-7.png"
                    className="avatar"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>
    </>
    
  )
}

export default TaskGrid