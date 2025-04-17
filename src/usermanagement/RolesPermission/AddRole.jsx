import React from 'react'

const AddRole = ({handleclose}) => {
  return (
    <div>
        <>
  {/* Add Role Modal */}
  <div className="modal fade" id="addRoleModal" tabIndex={-1}>
    <div className="modal-dialog" style={{ maxWidth: 600 }}>
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header border-bottom py-3 px-4">
          <h5 className="modal-title fw-semibold">Add Role</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        {/* Modal Body */}
        <div className="modal-body p-4">
          <form id="addRoleForm">
            {/* Role Name */}
            <div className="mb-4">
              <label className="form-label fw-medium">
                Role Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter role name"
                required=""
              />
            </div>
            {/* Status */}
            <div className="mb-4">
              <label className="form-label fw-medium">
                Status <span className="text-danger">*</span>
              </label>
              <select className="form-select" required="">
                <option value="">Select</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </form>
        </div>
        {/* Modal Footer */}
        <div className="modal-footer border-top py-3 px-4">
          <button
            type="button"
            className="btn btn-outline-dark px-4"
            data-bs-dismiss="modal"
            // onClick={() => handleclose}
          >
            Cancel
          </button>
          <button
            type="submit"
            form="addRoleForm"
            className="btn btn-dark px-4"
          >
            Add Role
          </button>
        </div>
      </div>
    </div>
  </div>
</>
    </div>
  )
}

export default AddRole

