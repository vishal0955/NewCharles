import React, { useEffect } from "react";
import "./project.css";

const AddNewProject = () => {
  return (
    <>
      <div className="container">
        <div className="task-form-container">
          <form>
            <div className="row mb-4">
              {/* Logo Upload */}
              <div className="col-12 mb-4">
                <label className="form-label">Project Logo</label>
                <div
                  className="upload-area"
                  onclick="document.getElementById('logoUpload').click()">
                  <input
                    type="file"
                    id="logoUpload"
                    hidden=""
                    accept="image/*"
                  />
                  <i className="bi bi-cloud-upload upload-icon" />
                  <div className="upload-text">Upload Logo</div>
                  <div className="upload-hint">Max 4MB</div>
                </div>
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
              {/* Client */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Client</label>
                <select className="form-select">
                  <option selected="" disabled="">
                    Select client
                  </option>
                  <option>Client 1</option>
                  <option>Client 2</option>
                  <option>Client 3</option>
                </select>
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
                  <option selected="" disabled="">
                    Select priority
                  </option>
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
                    placeholder={0.0}
                  />
                </div>
              </div>
              {/* Description */}
              <div className="col-12 mb-4">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Project description..."
                  defaultValue={""}
                />
              </div>
              {/* Attachments */}
              <div className="col-12 mb-4">
                <label className="form-label">Attachments</label>
                <div
                  className="upload-area"
                  onclick="document.getElementById('fileUpload').click()">
                  <input type="file" id="fileUpload" hidden="" multiple="" />
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
              <button type="button" className="btn btn-light">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewProject;
