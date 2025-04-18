


import React from 'react';
import { Form, Button } from 'react-bootstrap';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const jobs = [
  {
    id: 'OFR-001',
    title: 'John Doe',
    job: 'Software Engineer',
    offerDate: '12 Sep 2024',
    status: 'Pending',
  },
  {
    id: 'OFR-002',
    title: 'Jane Smith',
    job: 'UI/UX Designer',
    offerDate: '14 Sep 2024',
    status: 'Accepted',
  },
  {
    id: 'OFR-003',
    title: 'Mike Johnson',
    job: 'Backend Developer',
    offerDate: '16 Sep 2024',
    status: 'Rejected',
  },
  {
    id: 'OFR-004',
    title: 'Emily Davis',
    job: 'Frontend Developer',
    offerDate: '18 Sep 2024',
    status: 'Pending',
  },
  {
    id: 'OFR-005',
    title: 'Robert Wilson',
    job: 'QA Analyst',
    offerDate: '20 Sep 2024',
    status: 'Accepted',
  },
  {
    id: 'OFR-006',
    title: 'Laura Lee',
    job: 'Project Manager',
    offerDate: '22 Sep 2024',
    status: 'Pending',
  },
  {
    id: 'OFR-007',
    title: 'Chris Brown',
    job: 'DevOps Engineer',
    offerDate: '24 Sep 2024',
    status: 'Rejected',
  },
  {
    id: 'OFR-008',
    title: 'Sophia White',
    job: 'Graphic Designer',
    offerDate: '26 Sep 2024',
    status: 'Accepted',
  },
  {
    id: 'OFR-009',
    title: 'Daniel Miller',
    job: 'Cloud Architect',
    offerDate: '28 Sep 2024',
    status: 'Pending',
  },
  {
    id: 'OFR-010',
    title: 'Olivia Clark',
    job: 'HR Manager',
    offerDate: '30 Sep 2024',
    status: 'Accepted',
  },
  {
    id: 'OFR-011',
    title: 'Ethan Moore',
    job: 'Android Developer',
    offerDate: '02 Oct 2024',
    status: 'Pending',
  },
  {
    id: 'OFR-012',
    title: 'Ava Scott',
    job: 'Product Owner',
    offerDate: '04 Oct 2024',
    status: 'Rejected',
  },
  {
    id: 'OFR-013',
    title: 'Lucas Turner',
    job: 'System Analyst',
    offerDate: '06 Oct 2024',
    status: 'Accepted',
  },
  {
    id: 'OFR-014',
    title: 'Mia Perez',
    job: 'Marketing Specialist',
    offerDate: '08 Oct 2024',
    status: 'Pending',
  },
  {
    id: 'OFR-015',
    title: 'William Young',
    job: 'Technical Support',
    offerDate: '10 Oct 2024',
    status: 'Accepted',
  },
];

const OfferLetter = () => {
  return (
    <div className="container my-4">
      {/* Header and Filters */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-0">Offer Letter</h3>
        <div className="d-flex flex-wrap gap-2">
          {/* Status Dropdown */}
          
        <div className="d-flex gap-2">
        <div className="dropdown">
    <div className="d-flex gap-3">
    </div>
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Export
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton ">
              <li><a className="dropdown-item" href="#">Export as PDF</a></li>
              <li><a className="dropdown-item" href="#">Export as Excel</a></li>
            </ul>
            </div>
            <Link to="/recruitment/createoffer">
          <button className="btn inv-new-button" >Create Offer</button>
          </Link>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center my-3 flex-wrap">
          <div className="mb-2">
           <input type="text" className="form-control d-inline-block w-auto me-2" placeholder="Search by name" />
         
          </div>
          <div className="mb-2">
           
            <select className="form-select d-inline-block w-auto me-2">
              <option>Role</option>
              <option>Accountant</option>
              <option>App Developer</option>
              <option>Technician</option>
              <option>Web Developer</option>
            </select>
            <select className="form-select d-inline-block w-auto me-2">
              <option>Select Status</option>
          
              <option>Accepted</option>
              <option>Pending</option>
              <option>Hired</option>
             
            </select>
            <select className="form-select d-inline-block w-auto">
              <option>Sort By: Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 60 Days</option>
            </select>
          </div>
        </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover align-middle border-0">
          <thead className="table-light border-0">
            <tr>
              <th className="border-0"><Form.Check type="checkbox" /></th>
              <th className="border-0">Offer ID</th>
              <th className="border-0">Candidate</th>
              <th className="border-0">Job</th>
              <th className="border-0">Offer Date</th>
              <th className="border-0">Status</th>
              <th className="border-0">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={idx}>
                <td className="border-0"><Form.Check type="checkbox" /></td>
                <td className="border-0">{job.id}</td>
                <td className="border-0">{job.title}</td>
                <td className="border-0">{job.job}</td>
                <td className="border-0">{job.offerDate}</td>
                <td className="border-0">{job.status}</td>
                <td className="border-0">
                  <Button variant="link" className="p-0 me-2 text-primary">
                    <BsPencilSquare />
                  </Button>
                  <Button variant="link" className="p-0 text-danger">
                    <BsTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OfferLetter;