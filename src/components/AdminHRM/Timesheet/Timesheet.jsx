import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronLeft, FaChevronRight, FaFileExport, FaPlus, FaSort } from 'react-icons/fa';
import AddNewProject from '../../Project/AddNewProject';
import AddLeaveForm from '../Leave/AddLeaveForm';
import AddTodayWork from '../Leave/AddTodayWork';

const EmployeeTimeTracker = () => {

      const [isModalOpen, setIsModalOpen] = useState(false);
      const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
      };

      const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove("modal-open"); // Remove modal-open class
      };
    
      const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Sarah Wilson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      role: 'UI Designer',
      date: '2024-02-20',
      project: 'Website Redesign',
      assignedHours: 8.0,
      workedHours: 7.5
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=2',
      role: 'Frontend Developer',
      date: '2024-02-20',
      project: 'Mobile App',
      assignedHours: 8.0,
      workedHours: 8.0
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=3',
      role: 'Project Manager',
      date: '2024-02-20',
      project: 'CRM Integration',
      assignedHours: 8.0,
      workedHours: 8.5
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState('All Projects');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const totalResults = 20;
  const itemsPerPage = 10;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectProject = (project) => {
    setSelectedProject(project);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-full p-4 bg-gray-50 min-h-screen">
      <h3 className='mb-2'>TimeSheet</h3>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 md:p-6">
          {/* Search and Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            <div className="md:col-span-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-4 w-4 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search employees..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="relative">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={toggleDropdown}
                >
                  <span>{selectedProject}</span>
                  <FaChevronDown className="ml-2 h-3 w-3 text-gray-400" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
                    <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {['All Projects', 'Website Redesign', 'Mobile App', 'CRM Integration'].map((project) => (
                        <li
                          key={project}
                          className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
                          onClick={() => selectProject(project)}
                        >
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="md:col-span-1">
              <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaSort className="h-3 w-3 mr-2" />
                Sort
              </button>
            </div>
            <div className="md:col-span-4 flex gap-2 md:justify-end">
              <button className="flex items-center justify-center px-4 py-1/2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaFileExport className="h-3 w-3 mr-2" />
                Export
              </button>
              <button className="flex inv-new-button items-center justify-center px-4 py-1/2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleOpenModal}>
                <FaPlus className="h-3 w-3 mr-2 " />
                Add Today's Work
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assigned Hours
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Worked Hours
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employees.map(employee => (
                  <tr key={employee.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={employee.avatar} alt={employee.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.project}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.assignedHours.toFixed(1)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.workedHours.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 px-4">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm text-gray-500">
                Showing 1 to {Math.min(itemsPerPage, totalResults)} of {totalResults} results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span className="sr-only">Previous</span>
                  <FaChevronLeft className="h-3 w-3" aria-hidden="true" />
                </button>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                    currentPage === 1 ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  1
                </button>
                <button
                  onClick={() => setCurrentPage(2)}
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                    currentPage === 2 ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  2
                </button>
                <button
                  onClick={() => setCurrentPage(3)}
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                    currentPage === 3 ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  3
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(Math.ceil(totalResults / itemsPerPage), prev + 1))}
                  disabled={currentPage === Math.ceil(totalResults / itemsPerPage)}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === Math.ceil(totalResults / itemsPerPage) ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span className="sr-only">Next</span>
                  <FaChevronRight className="h-3 w-3" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            
             
                <div className="modal-body">
                  <AddTodayWork  onClose={handleCloseModal} />
                </div>
              
          </div>
          </>
      )}


    </div>
  );
};

export default EmployeeTimeTracker;