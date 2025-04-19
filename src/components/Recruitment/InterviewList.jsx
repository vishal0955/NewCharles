

import React, { useState } from 'react';
import AddInterview from './AddInterview';
import { useSelector } from 'react-redux';


const interviews = [
  {
    id: 'INT-001',
    candidate: 'Harold Gaynor',
    job: 'Accountant',
    interviewer: 'Jane Doe',
    type: 'Phone',
    date: '2024-09-12 10:00 AM',
    status: 'Scheduled',
    feedback: 'Creative writing skills.',
    result: 'On Hold'
  },
  {
    id: 'INT-002',
    candidate: 'Sandra Ornellas',
    job: 'App Developer',
    interviewer: 'John Smith',
    type: 'Video',
    date: '2024-10-24 02:30 PM',
    status: 'Completed',
    feedback: 'Strong communication skills.',
    result: 'Pass'
  },
  {
    id: 'INT-003',
    candidate: 'John Harris',
    job: 'Technician',
    interviewer: 'Mark Lee',
    type: 'In-person',
    date: '2024-02-18 09:00 AM',
    status: 'Cancelled',
    feedback: 'Needs improvement in technical skills.',
    result: 'Fail'
  },
  {
    id: 'INT-004',
    candidate: 'Carole Langan',
    job: 'Web Developer',
    interviewer: 'Alice Brown',
    type: 'Video',
    date: '2024-11-05 01:00 PM',
    status: 'Completed',
    feedback: 'Excellent coding skills.',
    result: 'Pass'
  },
  {
    id: 'INT-005',
    candidate: 'Charles Marks',
    job: 'Sales Executive',
    interviewer: 'David Green',
    type: 'Phone',
    date: '2024-07-20 03:00 PM',
    status: 'Scheduled',
    feedback: 'Creative writing skills.',
    result: 'On Hold'
  },
  {
    id: 'INT-006',
    candidate: 'Kerry Drake',
    job: 'Designer',
    interviewer: 'Emma White',
    type: 'In-person',
    date: '2024-08-15 11:00 AM',
    status: 'Cancelled',
    feedback: 'Portfolio review incomplete.',
    result: 'Fail'
  },
  {
    id: 'INT-007',
    candidate: 'David Carmona',
    job: 'Account Manager',
    interviewer: 'Michael Scott',
    type: 'Video',
    date: '2024-09-29 02:00 PM',
    status: 'Completed',
    feedback: 'Strong leadership skills.',
    result: 'Pass'
  },
  {
    id: 'INT-008',
    candidate: 'Margaret Soto',
    job: 'SEO Analyst',
    interviewer: 'Sophia Johnson',
    type: 'Phone',
    date: '2024-02-22 10:30 AM',
    status: 'Scheduled',
    feedback: 'Creative writing skills.',
    result: 'On Hold'
  },
  {
    id: 'INT-009',
    candidate: 'Jeffrey Thaler',
    job: 'Admin',
    interviewer: 'Chris Evans',
    type: 'In-person',
    date: '2024-11-03 09:00 AM',
    status: 'Completed',
    feedback: 'Good organizational skills.',
    result: 'Pass'
  },
  {
    id: 'INT-010',
    candidate: 'Alice Cooper',
    job: 'HR Manager',
    interviewer: 'Olivia Brown',
    type: 'Video',
    date: '2024-06-18 01:30 PM',
    status: 'Cancelled',
    feedback: 'Interview rescheduled.',
    result: 'Fail'
  },
  {
    id: 'INT-011',
    candidate: 'Brian Adams',
    job: 'Marketing Specialist',
    interviewer: 'Liam Wilson',
    type: 'Phone',
    date: '2024-05-12 11:00 AM',
    status: 'Scheduled',
    feedback: 'Creative writing skills.',
    result: 'On Hold'
  },
  {
    id: 'INT-012',
    candidate: 'Sophia Turner',
    job: 'Data Analyst',
    interviewer: 'Noah Davis',
    type: 'In-person',
    date: '2024-03-25 02:00 PM',
    status: 'Completed',
    feedback: 'Strong analytical skills.',
    result: 'Pass'
  },
  {
    id: 'INT-013',
    candidate: 'James Bond',
    job: 'Security Officer',
    interviewer: 'Ethan Hunt',
    type: 'In-person',
    date: '2024-04-10 10:00 AM',
    status: 'Cancelled',
    feedback: 'Candidate unavailable.',
    result: 'Fail'
  },
  {
    id: 'INT-014',
    candidate: 'Emily Clark',
    job: 'Content Writer',
    interviewer: 'Sophia Lee',
    type: 'Video',
    date: '2024-07-08 03:00 PM',
    status: 'Completed',
    feedback: 'Creative writing skills.',
    result: 'Pass'
  },
  {
    id: 'INT-015',
    candidate: 'William King',
    job: 'Project Manager',
    interviewer: 'Charlotte Moore',
    type: 'Phone',
    date: '2024-10-01 12:00 PM',
    status: 'Scheduled',
    feedback: 'Creative writing skills.',
    result: 'On Hold'
  }
];

const statusBadge = {
  'Scheduled': 'badge bg-info',
  'Completed': 'badge bg-success',
  'Cancelled': 'badge bg-danger'
};

const InterviewList = () => {
  const [showAddInterview, setShowAddInterview] = useState(false);

  const handleShowAddInterview = () => {
    console.log("Adding new interview...");
    setShowAddInterview(true);
  };
  const handleSaveInterview = () => {
    
    setShowAddInterview(false);
    // In a real application, you would likely save this to a database
  };
  const darkMode =useSelector((state) => state.theme.isDarkMode);
  return (
    <div className="container-fluid my-4">
         <div className="d-flex justify-content-between align-items-center mb-3">
         <h2 className="fw-bold">Interview List</h2>
        <div className="d-flex gap-2">
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
                <button className="btn inv-new-button"   onClick={handleShowAddInterview}>Add Interview</button>
                </div>
        </div>

        <div className="d-flex justify-content-between align-items-center my-3 flex-wrap">
          <div className="mb-2">
           <input type="text" className={`${darkMode ? "card-dark" : null } form-control d-inline-block w-auto me-2`} placeholder="Search by name" />
         
          </div>
          <div className="mb-2">
           
            <select className={`${darkMode ? "card-dark" : null } form-select d-inline-block w-auto me-2`}>
              <option>Role</option>
              <option>Accountant</option>
              <option>App Developer</option>
              <option>Technician</option>
              <option>Web Developer</option>
            </select>
            <select className={`${darkMode ? "card-dark" : null } form-select d-inline-block w-auto me-2`}>
              <option>Select Status</option>
          
              <option>Scheduled</option>
              <option>Cancelled</option>
              <option>Completed</option>
            
            </select>
            <select className={`${darkMode ? "card-dark" : null } form-select d-inline-block w-auto `}>
              <option>Sort By: Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 60 Days</option>
            </select>
          </div>
        </div>
    

      <div className="table-responsive">
        <table className={`${darkMode ? "table-dark border" : null }  table table-hover align-middle text-start w-100 `}>
          <thead className="">
            <tr>
              <th scope="col" className="text-nowrap">
              <input type="checkbox" className="form-check-input " />

              </th>
              <th scope="col" className="text-nowrap">Interview ID</th>
              <th scope="col" className="text-nowrap">Candidate</th>
              <th scope="col" className="text-nowrap">Job</th>
              <th scope="col" className="text-nowrap">Interviewer</th>
              <th scope="col" className="text-nowrap">Type</th>
              <th scope="col" className="text-nowrap">Date & Time</th>
              <th scope="col" className="text-nowrap">Status</th>
              <th scope="col" className="text-nowrap">Feedback</th>
              <th scope="col" className="text-nowrap">Result</th>
              <th scope="col" className="text-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((i, idx) => (
              <tr key={idx} className={idx % 2 !== 0 ? 'bg-light' : ''}>
                <td><input className="form-check-input " type="checkbox" /></td>
                <td>{i.id}</td>
                <td>{i.candidate}</td>
                <td>{i.job}</td>
                <td>{i.interviewer}</td>
                <td>{i.type}</td>
                <td>{i.date}</td>
                <td><span className={statusBadge[i.status]}>{i.status}</span></td>
                <td>{i.feedback || '-'}</td>
                <td className='text-nowrap'>{i.result}</td>
                <td>
  <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
    <i className="bi bi-pencil-square text-primary" role="button"></i>
    <i className="bi bi-trash text-danger" role="button"></i>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAddInterview && (
    <div className="modal fade show d-block" role="dialog">
    <div className="modal-dialog modal-lg" role="document">
      <div className={`${darkMode ? "dark-mode" : "border-none" } modal-content`}>
        <div className={`${darkMode ? "dark-mode" : null } modal-header`}>
       
            <AddInterview 
            darkMode={darkMode}
              onClose={() => setShowAddInterview(false)} 
              onSave={handleSaveInterview} 
            />
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewList;