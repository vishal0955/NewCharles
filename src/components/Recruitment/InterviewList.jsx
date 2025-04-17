// import React from 'react';

// const interviews = [
//   {
//     id: 'INT-001',
//     candidate: 'Harold Gaynor',
//     job: 'Accountant',
//     interviewer: 'Jane Doe',
//     type: 'Phone',
//     date: '2024-09-12 10:00 AM',
//     status: 'Scheduled',
//     feedback: 'Strong communication skills.',
//     result: 'On Hold'
//   },
//   {
//     id: 'INT-002',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-003',
//     candidate: 'John Harris',
//     job: 'Technician',
//     interviewer: 'Mark Lee',
//     type: 'In-person',
//     date: '2024-02-18 09:00 AM',
//     status: 'Cancelled',
//     feedback: 'Strong communication skills.',
//     result: 'Fail'
//   },
//   {
//     id: 'INT-004',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-005',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-006',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-007',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-008',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-009',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-010',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-011',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-012',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-013',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-014',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
//   {
//     id: 'INT-015',
//     candidate: 'Sandra Ornellas',
//     job: 'App Developer',
//     interviewer: 'John Smith',
//     type: 'Video',
//     date: '2024-10-24 02:30 PM',
//     status: 'Completed',
//     feedback: 'Strong communication skills.',
//     result: 'Pass'
//   },
  
// ];

// const statusBadge = {
//   'Scheduled': 'badge bg-info',
//   'Completed': 'badge bg-success',
//   'Cancelled': 'badge bg-danger'
// };

// const InterviewList = () => {
//   return (
//     <div>
//       <div className="container mt-4" style={{ maxWidth: '1200px', width: '100%' }}>
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h4 className="text-center">Interview List</h4>
//           <div>
//             <button className="btn btn-primary me-2">Add Interview</button>
//             <button className="btn btn-outline-secondary me-2">Export</button>
//             <button className="btn btn-outline-info">Notifications</button>
//           </div>
//         </div>

//         <div className="table-responsive">
//           <table className="table table-bordered table-hover align-middle text-center w-100">
//             <thead className="table-light">
//               <tr>
//                 <th>Interview ID</th>
//                 <th>Candidate</th>
//                 <th>Job</th>
//                 <th>Interviewer</th>
//                 <th>Type</th>
//                 <th>Date & Time</th>
//                 <th>Status</th>
//                 <th>Feedback</th>
//                 <th>Result</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {interviews.map((i, idx) => (
//                 <tr key={idx}>
//                   <td>{i.id}</td>
//                   <td>{i.candidate}</td>
//                   <td>{i.job}</td>
//                   <td>{i.interviewer}</td>
//                   <td>{i.type}</td>
//                   <td>{i.date}</td>
//                   <td><span className={statusBadge[i.status]}>{i.status}</span></td>
//                   <td>{i.feedback || '-'}</td>
//                   <td>{i.result}</td>
//                   <td>
//                     <div className="d-flex justify-content-center">
//                       <button className="btn btn-sm btn-outline-primary me-2">
//                         <i className="bi bi-pencil"></i>
//                       </button>
//                       <button className="btn btn-sm btn-outline-danger">
//                         <i className="bi bi-trash"></i>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterviewList;

import React from 'react';

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
  return (
    <div className="container-fluid my-4">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <h2 className="fw-bold">Interview List</h2>

        <div className="d-flex flex-wrap gap-2">
          {/* Status Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-white border border-dark  px-4 py-2"
              type="button"
              data-bs-toggle="dropdown"
            >
              Interview Status <i className="bi bi-chevron-down ms-2"></i>
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item">Completed</button></li>
              <li><button className="dropdown-item">Pending</button></li>
              <li><button className="dropdown-item">No Interview yet</button></li>
            </ul>
          </div>

          {/* Role Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-white border border-dark px-4 py-2"
              type="button"
              data-bs-toggle="dropdown"
            >
              Role <i className="bi bi-chevron-down ms-2"></i>
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item">Student</button></li>
              <li><button className="dropdown-item">Employe</button></li>
              <li><button className="dropdown-item">Other</button></li>
            </ul>
          </div>

          {/* Add Interview Button */}
          <button className="btn border-dark">Add Interview</button>

          {/* Export Dropdown */}
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle border border-dark" data-bs-toggle="dropdown">
              Export
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Export as PDF</a></li>
              <li><a className="dropdown-item" href="#">Export as Excel</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle text-start w-100">
          <thead className="table-light">
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
    </div>
  );
};

export default InterviewList;