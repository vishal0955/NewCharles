// import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaEdit, FaTrash, FaPlus, FaCog, FaHome, FaUser } from 'react-icons/fa';

// const HolidaysManagement = () => {
//   const [holidays, setHolidays] = useState([
//     { id: 1, title: 'New Year', date: '01 Jan 2024', description: 'First day of the new year', status: 'Active' },
//     { id: 2, title: 'Martin Luther King Jr. Day', date: '15 Jan 2024', description: 'Celebrating the civil rights leader', status: 'Active' },
//     { id: 3, title: 'President\'s Day', date: '19 Feb 2024', description: 'Honoring past US Presidents', status: 'Active' },
//     { id: 4, title: 'Good Friday', date: '29 Mar 2024', description: 'Holiday before Easter', status: 'Active' },
//     { id: 5, title: 'Easter Monday', date: '01 Apr 2024', description: 'Holiday after Easter', status: 'Active' },
//     { id: 6, title: 'Memorial Day', date: '27 Apr 2024', description: 'Honors military personnel', status: 'Active' },
//     { id: 7, title: 'Independence Day', date: '04 Jul 2024', description: 'Celebrates Independence', status: 'Active' },
//     { id: 8, title: 'Labor Day', date: '02 Sep 2024', description: 'Honors working people', status: 'Inactive' }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const filteredHolidays = holidays.filter(holiday => 
//     holiday.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     holiday.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container-fluid p-0">
//       <div className="bg-light border-bottom mb-4">
//         <div className="container py-3">
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb m-0">
//               <li className="breadcrumb-item"><a href="#" className="text-decoration-none">Home</a></li>
//               <li className="breadcrumb-item"><a href="#" className="text-decoration-none">Employee</a></li>
//               <li className="breadcrumb-item active" aria-current="page">Holidays</li>
//             </ol>
//           </nav>
//         </div>
//       </div>
      
//       <div>
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="mb-0">Holidays</h2>
//           <button className="btn btn-primary d-flex align-items-center">
//             <FaPlus className="me-2" /> Add Holiday
//           </button>
//         </div>
        
//         <div className="card mb-4">
//           <div className="card-header bg-white">
//             <h5 className="mb-0">Holidays List</h5>
//           </div>
//           <div className="card-body">
//             <div className="row mb-3">
//               <div className="col-md-6 d-flex align-items-center">
//                 <span className="me-2">Row Per Page:</span>
//                 <select 
//                   className="form-select form-select-sm w-auto" 
//                   value={rowsPerPage}
//                   onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
//                 >
//                   <option value="5">5</option>
//                   <option value="10">10</option>
//                   <option value="25">25</option>
//                   <option value="50">50</option>
//                 </select>
//                 <span className="ms-3">Entries</span>
//               </div>
//               <div className="col-md-6 mt-3 mt-md-0">
//                 <div className="input-group">
//                   <input 
//                     type="text" 
//                     className="form-control" 
//                     placeholder="Search..." 
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                   <button className="btn btn-outline-secondary" type="button">
//                     <FaCog />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             <div className="table-responsive">
//               <table className="table table-hover">
//                 <thead className="table-light">
//                   <tr>
//                     <th style={{ width: '40px' }}>
//                       <input type="checkbox" className="form-check-input" />
//                     </th>
//                     <th>Title <span className="text-muted ms-1">↕</span></th>
//                     <th>Date <span className="text-muted ms-1">↕</span></th>
//                     <th>Description <span className="text-muted ms-1">↕</span></th>
//                     <th>Status <span className="text-muted ms-1">↕</span></th>
//                     <th style={{ width: '100px' }}></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredHolidays.map(holiday => (
//                     <tr key={holiday.id}>
//                       <td>
//                         <input type="checkbox" className="form-check-input" />
//                       </td>
//                       <td className="fw-bold text-primary">{holiday.title}</td>
//                       <td>{holiday.date}</td>
//                       <td>{holiday.description}</td>
//                       <td>
//                         <span className={`badge ${holiday.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
//                           • {holiday.status}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="d-flex gap-2">
//                           <button className="btn btn-sm btn-outline-secondary">
//                             <FaEdit />
//                           </button>
//                           <button className="btn btn-sm btn-outline-secondary">
//                             <FaTrash />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//             {filteredHolidays.length === 0 && (
//               <div className="text-center py-4">
//                 <p className="text-muted">No holidays found matching your search.</p>
//               </div>
//             )}
            
//             <div className="d-flex justify-content-between align-items-center">
//               <p className="mb-0">Showing 1 to {Math.min(filteredHolidays.length, rowsPerPage)} of {filteredHolidays.length} entries</p>
//               <nav>
//                 <ul className="pagination mb-0">
//                   <li className="page-item disabled">
//                     <a className="page-link" href="#" tabIndex="-1">Previous</a>
//                   </li>
//                   <li className="page-item active">
//                     <a className="page-link" href="#">1</a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">Next</a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//         <div className="text-muted small mb-4">
//           <a href="/template/holidays.html" className="text-decoration-none">/template/holidays.html</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HolidaysManagement;

import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSearch, faPlus, faChevronLeft, faChevronRight, faHome, faCalendarAlt, faSort } from '@fortawesome/free-solid-svg-icons';
import AddHolidayModal from './addHoliday';

const Holidays = () => {

  const [showModal, setShowModal] = useState(false);

  const [holidays, setHolidays] = useState([
    { id: 1, title: 'New Year', date: '01 Jan 2024', description: 'First day of the new year', status: 'Active' },
    { id: 2, title: 'Martin Luther King Jr. Day', date: '15 Jan 2024', description: 'Celebrating the civil rights leader', status: 'Active' },
    { id: 3, title: 'President\'s Day', date: '19 Feb 2024', description: 'Honoring past US Presidents', status: 'Active' },
    { id: 4, title: 'Good Friday', date: '29 Mar 2024', description: 'Holiday before Easter', status: 'Active' },
    { id: 5, title: 'Easter Monday', date: '01 Apr 2024', description: 'Holiday after Easter', status: 'Active' },
    { id: 6, title: 'Memorial Day', date: '27 Apr 2024', description: 'Honors military personnel', status: 'Active' },
    { id: 7, title: 'Independence Day', date: '04 Jul 2024', description: 'Celebrates Independence', status: 'Active' },
    { id: 8, title: 'Labour Day', date: '02 Sep 2024', description: 'Honors working people', status: 'Inactive' },
    { id: 9, title: 'Veterans Day', date: '11 Nov 2024', description: 'Honors military veterans', status: 'Active' },
    { id: 10, title: 'Christmas Day', date: '25 Dec 2024', description: 'Celebration of Christmas', status: 'Active' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  // Filter holidays based on search term
  const filteredHolidays = holidays.filter(holiday =>
    holiday.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    holiday.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    holiday.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort holidays
  const sortedHolidays = [...filteredHolidays].sort((a, b) => {
    if (!sortField) return 0;
    
    const compareA = a[sortField].toLowerCase();
    const compareB = b[sortField].toLowerCase();
    
    if (compareA < compareB) return sortDirection === 'asc' ? -1 : 1;
    if (compareA > compareB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedHolidays.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedHolidays = sortedHolidays.slice(startIndex, startIndex + rowsPerPage);

  // Handle sort
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

 
  return (
    <div className="container-fluid p-3">
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="fw-bold text-primary">Holidays</h2>
          
          </div>
          <nav aria-label="breadcrumb" className="mt-2">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none">
                  <FontAwesomeIcon icon={faHome} className="me-1" />
                  Employee
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
                Holidays
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="card  border-0 mb-2">
        
        <div className="card-body">
          <div className="row mb-4 align-items-center d-flex justify-content-between">
           <div></div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Search holidays..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <button className="btn btn-outline-primary " type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>

                <button className="btn btn-primary ms-4 shadow-sm " onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add Holiday
            </button>


                
          
             
            </div>
            


           
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "40px" }} className="text-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="selectAll"
                      />
                    </div>
                  </th>
                  <th className="cursor-pointer" onClick={() => handleSort('title')}>
                    Title
                    {sortField === 'title' && (
                      <FontAwesomeIcon 
                        icon={faSort} 
                        className="ms-2 opacity-50" 
                        style={{ transform: sortDirection === 'asc' ? 'rotate(0deg)' : 'rotate(180deg)' }}
                      />
                    )}
                  </th>
                  <th className="cursor-pointer" onClick={() => handleSort('date')}>
                    Date
                    {sortField === 'date' && (
                      <FontAwesomeIcon 
                        icon={faSort} 
                        className="ms-2 opacity-50" 
                        style={{ transform: sortDirection === 'asc' ? 'rotate(0deg)' : 'rotate(180deg)' }}
                      />
                    )}
                  </th>
                  <th className="cursor-pointer" onClick={() => handleSort('description')}>
                    Description
                    {sortField === 'description' && (
                      <FontAwesomeIcon 
                        icon={faSort} 
                        className="ms-2 opacity-50" 
                        style={{ transform: sortDirection === 'asc' ? 'rotate(0deg)' : 'rotate(180deg)' }}
                      />
                    )}
                  </th>
                  <th className="cursor-pointer" onClick={() => handleSort('status')}>
                    Status
                    {sortField === 'status' && (
                      <FontAwesomeIcon 
                        icon={faSort} 
                        className="ms-2 opacity-50" 
                        style={{ transform: sortDirection === 'asc' ? 'rotate(0deg)' : 'rotate(180deg)' }}
                      />
                    )}
                  </th>
                  <th style={{ width: "100px" }} className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedHolidays.map((holiday) => (
                  <tr key={holiday.id}>
                    <td className="text-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`holiday-${holiday.id}`}
                        />
                      </div>
                    </td>
                    <td className="fw-medium">{holiday.title}</td>
                    <td>{holiday.date}</td>
                    <td>{holiday.description}</td>
                    <td>
                      <span className={`badge  ${holiday.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                        {holiday.status}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-sm btn-outline-primary  me-2" title="Edit">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button   className="btn btn-sm btn-outline-danger " title="Delete">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {paginatedHolidays.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-muted">
                      No holidays found that match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
            <div className="text-muted mb-3 mb-md-0">
              Showing {filteredHolidays.length > 0 ? startIndex + 1 : 0} - {Math.min(startIndex + rowsPerPage, filteredHolidays.length)} of {filteredHolidays.length} entries
            </div>
            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link rounded-start" 
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                </li>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  // Show pages around current page
                  let pageToShow;
                  if (totalPages <= 5) {
                    pageToShow = i + 1;
                  } else if (currentPage <= 3) {
                    pageToShow = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageToShow = totalPages - 4 + i;
                  } else {
                    pageToShow = currentPage - 2 + i;
                  }
                  
                  return (
                    <li key={i} className={`page-item ${currentPage === pageToShow ? 'active' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={() => setCurrentPage(pageToShow)}
                      >
                        {pageToShow}
                      </button>
                    </li>
                  );
                })}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link rounded-end" 
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {showModal && <AddHolidayModal show={showModal} handleClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Holidays;