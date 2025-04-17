import React,{ useState} from 'react'
import "./LeaveSetting.css"
import { Link , useNavigate} from 'react-router-dom';
import CustomPolicyModal from './CustomPolicyform';
import AddLeaveForm from './AddLeaveForm';
const LeaveSetting = () => {
 const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open"); // Remove modal-open class
  };

  return (
    <>
            <div className="container py-4">
  {/* Breadcrumb */}
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Employee</li>
      <li className="breadcrumb-item active">Leave Settings</li>
    </ol>

  </nav>
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="mb-0">Leave Policy Management</h2>
  </div>
  <div className="leave-content bg-white shadow-sm p-4 rounded-3">
    {/* Search and Controls */}
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="bi bi-search" />
          </span>
       
          <input
            type="text"
            className="form-control"
            placeholder="Search holidays..."
          />
        </div>
      </div>
      <div className="col-md-8 d-flex justify-content-end gap-2">
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Show 10 entries
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                10 entries
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                20 entries
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                50 entries
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-light">
          <i className="bi bi-sort-down" /> Sort
        </button>
        <button className="btn btn-light">
          <i className="bi bi-download" /> Export
        </button>
        <button className="btn btn-primary" onClick={handleOpenModal}>
          <i className="bi bi-plus" /> Add Custom Policy
        </button>
        <button className="btn btn-light">
          <i className="bi bi-gear" />
        </button>
      </div>
    </div>
    {/* Leave Policy Cards */}
    <div className="row">
      {/* Annual Leave */}
      <div className="col-md-4">
        <div className="policy-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Annual Leave</h5>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked=""
              />
            </div>
          </div>
          <p className="text-muted mb-3">Standard annual leave policy</p>
          <a href="#" className="custom-policy-link">
            Custom Policy <i className="bi bi-arrow-right" />
          </a>
          <div className="action-icons mt-3">
            <i className="bi bi-pencil-square" />
            <i className="bi bi-trash" />
            <i className="bi bi-gear" />
          </div>
        </div>
      </div>
      {/* Sick Leave */}
      <div className="col-md-4">
        <div className="policy-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Sick Leave</h5>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" />
            </div>
          </div>
          <p className="text-muted mb-3">Medical and health related leave</p>
          <a href="#" className="custom-policy-link">
            Custom Policy <i className="bi bi-arrow-right" />
          </a>
          <div className="action-icons mt-3">
            <i className="bi bi-pencil-square" />
            <i className="bi bi-trash" />
            <i className="bi bi-gear" />
          </div>
        </div>
      </div>
      {/* Parental Leave */}
      <div className="col-md-4">
        <div className="policy-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Parental Leave</h5>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked=""
              />
            </div>
          </div>
          <p className="text-muted mb-3">Maternity and paternity leave</p>
          <a href="#" className="custom-policy-link">
            Custom Policy <i className="bi bi-arrow-right" />
          </a>
          <div className="action-icons mt-3">
            <i className="bi bi-pencil-square" />
            <i className="bi bi-trash" />
            <i className="bi bi-gear" />
          </div>
        </div>
      </div>
    </div>
    {/* Pagination */}
    <div className="d-flex justify-content-between align-items-center mt-4">
      <p className="text-muted mb-0">Showing 1 to 10 of 20 results</p>
      <nav aria-label="Page navigation">
        <ul className="pagination mb-0">
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="bi bi-chevron-left" />
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="bi bi-chevron-right" />
            </a>
          </li>
        </ul>
      </nav>
    </div>   
  </div>
</div>
      {/* Modal for Add LeaveForm */}
      {isModalOpen && (
              <>
                <div className="modal fade show d-block" role="dialog">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">New Custom Policy</h5>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={handleCloseModal}
                        />
                      </div>
                      <div className="modal-body">
                        <AddLeaveForm />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal backdrop */}
                <div
                  className="modal-backdrop fade show"
                  onClick={handleCloseModal}
                ></div>
              </>
            )}
    </>
  )
}

export default LeaveSetting;