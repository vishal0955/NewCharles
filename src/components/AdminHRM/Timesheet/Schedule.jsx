import React from 'react'

const Schedule = () => {
  return (
    <>
    <div className="container mt-4">
    <h3 style={{ color: "rgb(32, 44, 75)", fontWeight: 700 }}>
      Schedule Timing
    </h3>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Administration</a>
        </li>
        <li className="breadcrumb-item active">Schedule Timing</li>
      </ol>
    </nav>
    <div className="card p-3 mt-3" style={{height:"65px"}}>
      <div className="d-flex justify-content-between">
        <h5>Schedule Timing List</h5>
        <div>
          <button className="btn btn-light">Export</button>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className=''>
          <label>Row Per Page </label>
          <select className="form-select">
            <option>10</option>
            <option>20</option>
          </select>
        </div>
        <div className='d-flex gap-2'>
          <input type="date" className="form-control" style={{height:"50px"}}/>
          <select className="form-select  " style={{height:"50px"}}>
            <option>Sort By: Last 7 Days</option>
            <option>Sort By: Last 30 Days</option>
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            style={{height:"50px"}}
          />
        </div>
      </div>
      <table className="table table-bordered mt-3 align-middle justify-content-center">
        <thead className="table-light">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Job Title</th>
            <th>User Available Timings</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Anthony Lewis</td>
            <td>Accountant</td>
            <td>
              11-03-2020 - 11:00 AM-12:00 PM
              <br />
              12-03-2020 - 10:00 AM-11:00 AM
              <br />
              01-01-1970 - 10:00 AM-11:00 AM
            </td>
            <td>
              <button
                className="schedule-btn"
                data-bs-toggle="modal"
                data-bs-target="#schedule_timing"
                style={{
                  backgroundColor: "rgb(32, 44, 75)",
                  color: "white",
                  border: "none",
                  padding: "5px 15px",
                  borderRadius: 5,
                  cursor: "pointer"
                }}
              >
                Schedule Timing
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Brian Villalobos</td>
            <td>Accountant</td>
            <td>
              11-03-2020 - 11:00 AM-12:00 PM
              <br />
              12-03-2020 - 10:00 AM-11:00 AM
              <br />
              01-01-1970 - 10:00 AM-11:00 AM
            </td>
            <td>
              <button
                className="schedule-btn"
                data-bs-toggle="modal"
                data-bs-target="#schedule_timing"
                style={{
                  backgroundColor: "rgb(32, 44, 75)",
                  color: "white",
                  border: "none",
                  padding: "5px 15px",
                  borderRadius: 5,
                  cursor: "pointer"
                }}
              >
                Schedule Timing
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Harvey Smith</td>
            <td>Accountant</td>
            <td>
              11-03-2020 - 11:00 AM-12:00 PM
              <br />
              12-03-2020 - 10:00 AM-11:00 AM
              <br />
              01-01-1970 - 10:00 AM-11:00 AM
            </td>
            <td>
              <button
                className="schedule-btn"
                data-bs-toggle="modal"
                data-bs-target="#schedule_timing"
                style={{
                  backgroundColor: "rgb(32, 44, 75)",
                  color: "white",
                  border: "none",
                  padding: "5px 15px",
                  borderRadius: 5,
                  cursor: "pointer"
                }}
              >
                Schedule Timing
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-between mt-2">
        <p>Showing 1 - 3 of 3 entries</p>
        <nav>
          <ul className="pagination">
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div id="schedule_timing" className="modal fade" tabIndex={-1} role="dialog">
    <div
      className="modal-dialog modal-dialog-centered modal-lg"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Schedule</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Department <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option value="">Select</option>
                    <option value="">Development</option>
                    <option value={1}>Finance</option>
                    <option value={2}>Finance and Management</option>
                    <option value={3}>Hr &amp; Finance</option>
                    <option value={4}>ITech</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <label className="col-form-label">
                  Employee Name <span className="text-danger">*</span>
                </label>
                <div className="input-block mb-3">
                  <select className="select">
                    <option value="">Select </option>
                    <option value={1}>Richard Miles </option>
                    <option value={2}>John Smith</option>
                    <option value={3}>Mike Litorus </option>
                    <option value={4}>Wilmer Deluna</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Date</label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Shifts <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option value="">Select </option>
                    <option value={1}>10'o clock Shift</option>
                    <option value={2}>10:30 shift</option>
                    <option value={3}>Daily Shift </option>
                    <option value={4}>New Shift</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Min Start Time <span className="text-danger">*</span>
                  </label>
                  <div className="input-group time">
                    <input className="form-control timepicker" type="time" />
                    <span className="input-group-text">
                      <i className="fa-regular fa-clock" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Start Time <span className="text-danger">*</span>
                  </label>
                  <div className="input-group time">
                    <input className="form-control timepicker" />
                    <span className="input-group-text">
                      <i className="fa-regular fa-clock" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Max Start Time <span className="text-danger">*</span>
                  </label>
                  <div className="input-group time">
                    <input className="form-control timepicker" />
                    <span className="input-group-text">
                      <i className="fa-regular fa-clock" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Min End Time <span className="text-danger">*</span>
                  </label>
                  <div className="input-group time">
                    <input className="form-control timepicker" />
                    <span className="input-group-text">
                      <i className="fa-regular fa-clock" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    End Time <span className="text-danger">*</span>
                  </label>
                  <div className="input-group time">
                    <input className="form-control timepicker" />
                    <span className="input-group-text">
                      <i className="fa-regular fa-clock" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Max End Time <span className="text-danger">*</span>
                  </label>
                  <div className="input-group time">
                    <input className="form-control timepicker" />
                    <span className="input-group-text">
                      <i className="fa-regular fa-clock" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Break Time <span className="text-danger">*</span>
                  </label>
                  <input className="form-control timepicker" type="text" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="input-block mb-3">
                  <label className="col-form-label">Accept Extra Hours </label>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitch1"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitch1"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="input-block mb-3">
                  <label className="col-form-label">Publish </label>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitch2"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitch2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Schedule