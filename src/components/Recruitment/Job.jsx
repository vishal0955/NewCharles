import React, { useState } from "react";
import { List, Grid } from "lucide-react";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";

import { useSelector } from "react-redux";

const Job = () => {
  const [view, setView] = useState("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleView = (viewType) => {
    setView(viewType);
  };
    const darkMode = useSelector((state) => state.theme.isDarkMode);
  
  return (
    <>
      <div className={`${darkMode ? "dark-mode" : " " } min-vh-100 d-flex flex-column`} >
        {/* Header */}
        <header className=" border-bottom">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center py-3">
              <div className="d-flex align-items-center">
                <nav className="ms-4 d-flex align-items-center">
            
       
                  <a
                    href="#"
                    className="fw-medium text-decoration-none"
                  >
                    Jobs
                  </a>
                </nav>
              </div>
              <div className="d-flex align-items-center gap-3">
                {/* <button
                className="btn btn-light p-2"
                onClick={() => toggleView("grid")}
              >
                Grid
              </button>
              <button
                className="btn btn-light p-2"
                onClick={() => toggleView("list")}
              >
                List
              </button> */}

                <div className="mr-2 flex border border-gray-300 rounded">
                  <button
                    className={`p-2 ${
                      view === "list"
                        ? "bg-black text-white"
                        : "bg-white text-gray-700"
                    }`}
                    onClick={() => toggleView("list")}
                  >
                    <List size={18} />
                  </button>
                  <button
                    className={`p-2 ${
                      view === "grid"
                        ? "bg-black text-white"
                        : "bg-white text-gray-700"
                    }`}
                    onClick={() => toggleView("grid")}
                  >
                    <Grid size={18} />
                  </button>
                </div>

                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fas fa-file-export me-2"></i>Export
                  </button>
                  <ul className="dropdown-menu">
                
                    <li>
                      <a className="dropdown-item" href="#">
                        Export as PDF
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Export as Excel
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  className="btn inv-new-button"
                  onClick={() => setIsModalOpen(true)}
                >
                  Post Job
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow-1 py-4">
          <div className="container-fluid">
            <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
              <h1 className="h2 fw-semibold mb-3 mb-md-0">Job Board</h1>
              <div className="d-flex gap-3 ">
                <select className={`${darkMode ? "card-dark" : null } form-select `}>
                  <option>03/12/2025</option>
                </select>
                <select className={`${darkMode ? "card-dark" : null } form-select `}>
                  <option>Role</option>
                </select>
                <select className={`${darkMode ? "card-dark" : null } form-select `}>
                  <option>Status</option>
                </select>
                <select className={`${darkMode ? "card-dark" : null } form-select `}>
                  <option>Sort By: Last 7 Days</option>
                </select>
              </div>
            </div>

            {/* Grid View */}
            {view === "grid" && (
              <div id="grid-view">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {/* Job Card 1 */}
                  <div className="col">
                    <div className={`${darkMode ? "card-dark" : null }  card shadow-sm h-100 `}>
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <i className="fab fa-apple fa-2x me-3"></i>
                          <div>
                            <h3 className="h5 fw-medium mb-1">
                              Senior iOS Developer
                            </h3>
                            <p className=" small mb-0">
                              25 Applicants
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column gap-2 mb-3">
                          <div className="d-flex align-items-center  small">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            <span>New York, USA</span>
                          </div>
                          <div className="d-flex align-items-center  small">
                            <i className="fas fa-dollar-sign me-2"></i>
                            <span>30,000 - 35,000 / month</span>
                          </div>
                          <div className="d-flex align-items-center  small">
                            <i className="fas fa-briefcase me-2"></i>
                            <span>2 years of experience</span>
                          </div>
                        </div>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          <span className="badge bg-pink-100 text-pink-800">
                            Full Time
                          </span>
                          <span className="badge bg-blue-100 text-blue-800">
                            Expert
                          </span>
                        </div>
                        <div className="progress progress-custom mb-2">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                        <p className=" small mb-0">10 of 25 filled</p>
                      </div>
                    </div>
                  </div>

                  {/* Job Card 2 */}
                  <div className="col">
                    <div className={`${darkMode ? "card-dark" : null } card shadow-sm h-100 `}>
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <i className="fab fa-php fa-2x text-dark me-3"></i>
                          <div>
                            <h3 className="h5 fw-medium mb-1">
                              Junior PHP Developer
                            </h3>
                            <p className=" small mb-0">
                              25 Applicants
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column gap-2 mb-3">
                          <div className="d-flex align-items-center  small">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            <span>Los Angeles, USA</span>
                          </div>
                          <div className="d-flex align-items-center  small">
                            <i className="fas fa-dollar-sign me-2"></i>
                            <span>20,000 - 25,000 / month</span>
                          </div>
                          <div className="d-flex align-items-center  small">
                            <i className="fas fa-briefcase me-2"></i>
                            <span>4 years of experience</span>
                          </div>
                        </div>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          <span className="badge bg-pink-100 text-pink-800">
                            Full Time
                          </span>
                          <span className="badge bg-blue-100 text-blue-800">
                            Expert
                          </span>
                        </div>
                        <div className="progress progress-custom mb-2">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                        <p className=" small mb-0">10 of 25 filled</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* List View */}
            {view === "list" && (
              <div id="list-view">
                <div className={`${darkMode ? "table-dark" : null } table-responsive `}>
                  <table className={`${darkMode ? "table-dark border" : null }  table table-striped table-hover `}>
                    <thead>
                      <tr>
                        <th>
                          <input type="checkbox" className="form-check-input" />
                        </th>
                        <th>Job ID</th>
                        <th>Job Title</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Salary Range</th>
                        <th>Posted Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="checkbox" className="form-check-input" />
                        </td>
                        <td>Job-001</td>
                        <td>
                          Senior iOS Developer
                          <br />
                          <small>25 Applicants</small>
                        </td>
                        <td>Software</td>
                        <td>New York, USA</td>
                        <td>$30,000 - $35,000 / month</td>
                        <td>12 Sep 2024</td>
                        <td className="">
                          <button
                            className=" action-btn  hover:text-blue-800"
                            style={{ color: "blue" }}
                          >
                            <FaPenToSquare />
                          </button>
                          <button className=" action-btn text-danger hover:text-red-800">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" className="form-check-input" />
                        </td>
                        <td>Job-002</td>
                        <td>
                          Junior PHP Developer
                          <br />
                          <small>20 Applicants</small>
                        </td>
                        <td>Software</td>
                        <td>Los Angeles, USA</td>
                        <td>$20,000 - $25,000 / month</td>
                        <td>24 Oct 2024</td>
                        <td>
                          <button
                            className=" action-btn  hover:text-blue-800"
                            style={{ color: "blue" }}
                          >
                            <FaPenToSquare />
                          </button>
                          <button className=" action-btn text-danger hover:text-red-800">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="modal fade show"
            id="postJobModal"
            tabIndex="-1"
            aria-labelledby="postJobModalLabel"
            aria-hidden="true"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-lg">
              <div className= {`${darkMode ? "dark-mode" : null } modal-content `}>
                <div className= {`${darkMode ? "dark-mode" : null } modal-header `}>
                  <h5 className="modal-title" id="postJobModalLabel">
                    Post Job
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setIsModalOpen(false)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form className="mt-4">
                    {/* Profile Image Upload */}
                    <div className="d-flex align-items-center">
                      <div className="text-center">
                        <div
                          className="rounded-circle  border border-2 border-dashed border-secondary d-flex align-items-center justify-content-center"
                          style={{ width: "96px", height: "96px" }}
                        >
                          <i className="fas fa-user  fs-4"></i>
                        </div>
                        <div className="mt-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-link"
                          >
                            Upload
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-link "
                          >
                            Cancel
                          </button>
                        </div>
                        <p className=" small mt-1">
                          Image should be below 4 mb
                        </p>
                      </div>
                    </div>

                    {/* Job Details Form */}
                    <div className="mt-4">
                      <div className="mb-3">
                        <label className={`${darkMode ? "text-white" : null } form-label `}>
                          Job Title <span className="text-danger">*</span>
                        </label>
                        <input type="text" className={`${darkMode ? "card-dark" : null } form-control `} required />
                      </div>

                      <div className="mb-3">
                        <label className={`${darkMode ? "text-white" : null } form-label `}>
                          Job Description <span className="text-danger">*</span>
                        </label>
                        <textarea
                          rows="4"
                          className={`${darkMode ? "card-dark" : null } form-control `}
                          required
                        ></textarea>
                      </div>

                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className={`${darkMode ? "text-white" : null } form-label `}>
                            Job Category <span className="text-danger">*</span>
                          </label>
                          <select className={`${darkMode ? "card-dark" : null } form-select `} required>
                            <option value="">Select</option>
                            <option>Technology</option>
                            <option>Marketing</option>
                            <option>Sales</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className={`${darkMode ? "text-white" : null } form-label `}>
                            Job Type <span className="text-danger">*</span>
                          </label>
                          <select className={`${darkMode ? "card-dark" : null } form-select `} required>
                            <option value="">Select</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Contract</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className={`${darkMode ? "text-white" : null } form-label `}>
                            Job Level <span className="text-danger">*</span>
                          </label>
                          <select className={`${darkMode ? "card-dark" : null } form-select `} required>
                            <option value="">Select</option>
                            <option>Entry Level</option>
                            <option>Mid Level</option>
                            <option>Senior Level</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className={`${darkMode ? "text-white" : null } form-label `}>
                            Experience <span className="text-danger">*</span>
                          </label>
                          <select className={`${darkMode ? "card-dark" : null } form-select `} required>
                            <option value="">Select</option>
                            <option>0-2 years</option>
                            <option>2-5 years</option>
                            <option>5+ years</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className={`${darkMode ? "text-white" : null } form-label `}>
                            Qualification <span className="text-danger">*</span>
                          </label>
                          <select className={`${darkMode ? "card-dark" : null } form-select `} required>
                            <option value="">Select</option>
                            <option>Bachelor's Degree</option>
                            <option>Master's Degree</option>
                            <option>PhD</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className={`${darkMode ? "text-white" : null } form-label `}>
                            Gender <span className="text-danger">*</span>
                          </label>
                          <select className={`${darkMode ? "card-dark" : null } form-select `} required>
                            <option value="">Select</option>
                            <option>Any</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className={`${darkMode ? "text-white" : null } form-label `}>
                            Min. Salary <span className="text-danger">*</span>
                          </label>
                          <select className={`${darkMode ? "card-dark" : null } form-select `} required>
                            <option value="">Select</option>
                            <option>$30,000</option>
                            <option>$40,000</option>
                            <option>$50,000</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className={`${darkMode ? "text-white" : null } form-label `}>
                            Max. Salary <span className="text-danger">*</span>
                          </label>
                          <select className={`${darkMode ? "card-dark" : null } form-select `} required>
                            <option value="">Select</option>
                            <option>$60,000</option>
                            <option>$80,000</option>
                            <option>$100,000</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className={`${darkMode ? "text-white" : null } form-label `}>
                          Job Expired Date{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input type="date" className={`${darkMode ? "card-dark" : null } form-control `} required />
                      </div>

                      <div className="mb-3">
                        <label className={`${darkMode ? "text-white" : null } form-label `}>Required Skills</label>
                        <input
                          type="text"
                          className={`${darkMode ? "card-dark" : null } form-control `}
                          placeholder="e.g. JavaScript, React, Node.js"
                        />
                      </div>
                    </div>

                    {/* Form Buttons */}
                    <div className="d-flex justify-content-end gap-3 pt-4 border-top">
                      <button
                        type="button"
                        className="btn btn-outline-secondary rounded-button"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn  text-white rounded-button"
                      >
                        Save & Next
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Backdrop */}
        {isModalOpen && (
          <div
            className="modal-backdrop fade show"
            onClick={() => setIsModalOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
};

export default Job;
