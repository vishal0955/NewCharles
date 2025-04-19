import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const candidates = [
  { id: 'Cand-001', name: 'Harold Gaynor', email: 'harold@example.com', role: 'Accountant', phone: '(146) 8964 278', date: '12 Sep 2024', status: 'Sent' },
  { id: 'Cand-002', name: 'Sandra Ornellas', email: 'sandra@example.com', role: 'App Developer', phone: '(148) 9648 218', date: '24 Oct 2024', status: 'Scheduled' },
  { id: 'Cand-003', name: 'John Harris', email: 'john@example.com', role: 'Technician', phone: '(196) 2348 947', date: '18 Feb 2024', status: 'Interviewed' },
  { id: 'Cand-004', name: 'Carole Langan', email: 'carole@example.com', role: 'Web Developer', phone: '(138) 6487 295', date: '17 Oct 2024', status: 'Offered' },
  { id: 'Cand-005', name: 'Charles Marks', email: 'charles@example.com', role: 'Sales Executive Officer', phone: '(154) 6485 218', date: '20 Jul 2024', status: 'Hired' },
  { id: 'Cand-006', name: 'Kerry Drake', email: 'kerry@example.com', role: 'Designer', phone: '(185) 5947 097', date: '20 Jul 2024', status: 'Rejected' },
  { id: 'Cand-007', name: 'David Carmona', email: 'david@example.com', role: 'Account Manager', phone: '(106) 3485 978', date: '29 Aug 2024', status: 'Hired' },
  { id: 'Cand-008', name: 'Margaret Soto', email: 'margaret@example.com', role: 'SEO Analyst', phone: '(174) 3795 107', date: '22 Feb 2024', status: 'Scheduled' },
  { id: 'Cand-009', name: 'Jeffrey Thaler', email: 'jeffrey@example.com', role: 'Admin', phone: '(128) 0975 348', date: '03 Nov 2024', status: 'App Received' },
];

const statusClass = {
  'Sent': 'badge bg-secondary',
  'Scheduled': 'badge bg-danger',
  'Interviewed': 'badge bg-info',
  'Offered': 'badge bg-warning text-dark',
  'Hired': 'badge bg-success',
  'Rejected': 'badge bg-danger',
  'App Received': 'badge bg-primary'
};

const CandidateList = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div>
      <div className="container mt-4 " >

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="font-bold">Candidates</h3>
       
          <div className="dropdown">
                  <button
                    className={`${darkMode ? "card-dark" : null } btn btn-outline-secondary dropdown-toggle `}
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
        </div>

        

        <div className="d-flex justify-content-between align-items-center my-3 flex-wrap">
          <div className="mb-2">
           <input type="text" className={`${darkMode ? "card-dark" : null }  form-control d-inline-block w-auto me-2`} placeholder="Search by name " />
         
          </div>
          <div className="mb-2">
           
            <select className={`${darkMode ? "card-dark" : null } form-select d-inline-block w-auto me-2 `}>
              <option>Role</option>
              <option>Accountant</option>
              <option>App Developer</option>
              <option>Technician</option>
              <option>Web Developer</option>
            </select>
            <select className={`${darkMode ? "card-dark" : null } form-select d-inline-block w-auto me-2 `}>
              <option>Select Status</option>
          
              <option>Scheduled</option>
              <option>Interviewed</option>
              <option>Offered</option>
              <option>Hired</option>
            </select>
            <select className= {`${darkMode ? "card-dark" : null } form-select d-inline-block w-auto `}>
              <option>Sort By: Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 60 Days</option>
            </select>
          </div>
        </div>

        <div className="table-responsive">
          <table className={`${darkMode ? "table-dark" : null } table table-bordered table-hover align-middle text-center w-100`}>
            <thead className="">
              <tr>
                <th scope="col"><input type="checkbox" /></th>
                <th scope="col ">Cand ID</th>
                <th scope="col">Candidate</th>
                <th scope="col">Applied Role</th>
                <th scope="col">Phone</th>
                <th scope="col">Applied Date</th>
                <th scope="col">Resume</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c, idx) => (
                <tr key={idx}>
                  <td><input type="checkbox" /></td>
                  <td>{c.id}</td>
                  <td onClick={() => navigate("/recruitment/individualcandidatepage")}> 
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-secondary me-2" style={{ width: 32, height: 32 }}></div>
                      <div>
                        <div className="fw-bold">{c.name}</div>
                        <div className="text-muted small">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{c.role}</td>
                  <td>{c.phone}</td>
                  <td>{c.date}</td>
                  <td>
                    <i className="bi bi-file-earmark"></i>
                    <i className="bi bi-download ms-2"></i>
                  </td>
                  <td><span className={statusClass[c.status]}>{c.status}</span></td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-sm btn-outline-primary me-2">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CandidateList;