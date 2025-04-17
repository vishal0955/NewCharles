import React, { useState} from 'react'
import AddRole from './AddRole';
import "./roles.css"
const RolesPermission = () => {

      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.classList.add("modal-open"); 
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove("modal-open"); // Remove modal-open class
      };

  return (
    <div>
        <div className="container py-4">
  {/* Header */}
  <div className="d-flex justify-content-between align-items-center mb-4">
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#" className="text-decoration-none text-dark">
              Administration
            </a>
          </li>
          <li className="breadcrumb-item active">Roles</li>
        </ol>
      </nav>
    </div>
    <div className="d-flex gap-2">
      <button className="btn btn-light-hover">
        <i className="bi bi-download me-2" />
        Export
      </button>
      <button
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#addRoleModal"

        onClick={handleOpenModal}
      >
        <i className="bi bi-plus-lg me-2" />
        Add Roles
      </button>
    </div>
  </div>
  {/* Main Card */}
  <div className="card border-0 shadow-sm rounded-2">
    <div className="card-body">
      {/* Filters */}
      <div className="g-3 mb-4">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
          <h4 className="mb-0">Roles List</h4>
          <div className="d-flex flex-column flex-sm-row gap-2">
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                defaultValue="2024-03-12"
              />
            </div>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                defaultValue="2024-03-18"
              />
            </div>
            <select className="form-select">
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <select className="form-select">
              <option>Sort By: Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      {/* Table Controls */}
      <div className="d-flex justify-content-between align-items-center mb-3">
     
        <div className="position-relative">
          <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3" />
          <input
            type="search"
            className="form-control ps-5"
            placeholder="Search"
            style={{ width: 250 }}
          />
        </div>
      </div>
      {/* Table */}
      <div className="table-responsive">
        <table className="table align-middle table-hover table-bordered">
          <thead className="bg-light">
            <tr>
              <th>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>Role</th>
              <th>Created Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>Admin</td>
              <td>12 Sep 2024</td>
              <td>
                <span className="badge badge-active rounded-pill px-3 py-2">
                  Active
                </span>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <i className="bi bi-eye action-icon" />
                  <i className="bi bi-pencil action-icon" />
                  <i className="bi bi-trash action-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>HR Manager</td>
              <td>24 Oct 2024</td>
              <td>
                <span className="badge badge-active rounded-pill px-3 py-2">
                  Active
                </span>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <i className="bi bi-eye action-icon" />
                  <i className="bi bi-pencil action-icon" />
                  <i className="bi bi-trash action-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>Recruitment Manager</td>
              <td>18 Feb 2024</td>
              <td>
                <span className="badge badge-active rounded-pill px-3 py-2">
                  Active
                </span>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <i className="bi bi-eye action-icon" />
                  <i className="bi bi-pencil action-icon" />
                  <i className="bi bi-trash action-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>Payroll Manager</td>
              <td>17 Oct 2024</td>
              <td>
                <span className="badge badge-active rounded-pill px-3 py-2">
                  Active
                </span>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <i className="bi bi-eye action-icon" />
                  <i className="bi bi-pencil action-icon" />
                  <i className="bi bi-trash action-icon" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  { isModalOpen && (
    <AddRole onClose={handleCloseModal} />
  )}
</div>
    </div>
  )
}

export default RolesPermission