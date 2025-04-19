import React, { useState } from "react";

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import {
  FaUsers,
  FaCalendarCheck,
  FaCalendarTimes,
  FaClock,
  FaFileExport,
  FaInfoCircle,
  FaPlus,
} from "react-icons/fa";
import { FaEye, FaPenToSquare, FaTrash } from "react-icons/fa6";
import AddLeaveForm from "./AddLeaveForm";
import { useSelector } from "react-redux";

const LeavePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [modalMode, setModalMode] = useState('add'); // 'add', 'edit', or 'view'

  const handleEdit = (entry) => {
    const formattedData = {
      leaveType: entry.leaveType,
      employee: entry.employee.name,
      fromDate: entry.from,
      toDate: entry.to,
      noOfDays: entry.days,
      reason: entry.reason || '',
      approvedStatus: entry.status,
      paidStatus: entry.paidStatus
    };
    setSelectedLeave(formattedData);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleView = (entry) => {
    const formattedData = {
      leaveType: entry.leaveType,
      employee: entry.employee.name,
      fromDate: entry.from,
      toDate: entry.to,
      noOfDays: entry.days,
      reason: entry.reason || '',
      approvedStatus: entry.status,
      paidStatus: entry.paidStatus
    };
    setSelectedLeave(formattedData);
    setModalMode('view');
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedLeave(null);
    setModalMode('add');
    setIsModalOpen(true);
  };

  const handleClose = (updatedData) => {
    if (updatedData) {
      
      if (modalMode === 'edit') {
        
        console.log('Updated leave:', updatedData);
      } else if (modalMode === 'add') {
   
        
        console.log('New leave:', updatedData);
      }
    }
    setIsModalOpen(false);
    setSelectedLeave(null);
    setModalMode('add');
  };

   const darkMode =useSelector((state)=>state.theme.isDarkMode)

  const [entries] = useState([
    {
      id: 1,
      employee: {
        name: "Anthony Lewis",
        department: "Finance",
        avatar: "https://ui-avatars.com/api/?name=Anthony+Lewis&background=0D8ABC&color=fff",
      },
      leaveType: "Medical Leave",
      from: "2024-01-14", // Updated date format to match input type="date"
      to: "2024-01-15",
      days: 2,
      reason: "Medical appointment",
      status: "Pending",
      paidStatus: "Paid"
    },
    {
      id: 2,
      employee: {
        name: "Sarah Wilson",
        department: "HR",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=0D8ABC&color=fff",
      },
      leaveType: "Vacation",
      from: "20 Jan 2024",
      to: "25 Jan 2024",
      days: 5,
      reason: "trip ",
      status: "Approved",
      paidStatus: "Unpaid"
    },
    // ...existing entries
  ]);

  return (
    <div className={`${darkMode ? "dark-mode" : "bg-gray-50" }  min-h-screen p-6 `}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-500 text-sm">
          <span>Employee</span>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Leaves</span>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-400 hover:bg-gray-50">
            <FaFileExport className="mr-2" />
            Export
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className=" flex inv-new-button align-items-center"
          >
            <FaPlus className="mr-2" />
            Add Leave
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="  grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 ">
        <StatCard
          icon={<FaUsers className="text-green-600" size={24} />}
          title="Total Present"
          value="180/200"
          bgColor="bg-green-50"
          darkMode={darkMode}
        />
        <StatCard
          icon={<FaCalendarCheck className="text-blue-600" size={24} />}
          title="Planned Leaves"
          value="10"
          bgColor="bg-blue-50"
          darkMode={darkMode}
        />
        <StatCard
          icon={<FaCalendarTimes className="text-yellow-600" size={24} />}
          title="Unplanned Leaves"
          value="10"
          bgColor="bg-yellow-50"
          darkMode={darkMode}
        />
        <StatCard
          icon={<FaClock className="text-purple-600" size={24} />}
          title="Pending Requests"
          value="15"
          bgColor="bg-purple-50"
          darkMode={darkMode}
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {/* <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
          <option>10 Entries</option>
          <option>25 Entries</option>
          <option>50 Entries</option>
        </select> */}
        <input
          type="text"
          placeholder="Search..."
          className={`${darkMode ? "dark-mode" : "" } px-3 py-2 border border-gray-300 rounded-md text-sm `}
        />
        <input
          type="date"
          className={`${darkMode ? "dark-mode" : "" } px-3 py-2 border border-gray-300 rounded-md text-sm `}
        />
        <select className= {`${darkMode ? "dark-mode" : "" } px-3 py-2 border border-gray-300 rounded-md text-sm `}>
          <option>All Leave Types</option>
          <option>Medical Leave</option>
          <option>Vacation</option>
          <option>Personal Leave</option>
        </select>
        <select className= {`${darkMode ? "dark-mode" : "bg-gray-50" } px-3 py-2 border border-gray-300 rounded-md text-sm `}>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>

      {/* Table */}
      <div className={`${darkMode ? "dark-mode border" : "" } bg-white rounded-lg shadow `}>
        <table className="w-full">
          <thead className={`${darkMode ? "table-dark " : "bg-gray-50" }  border-b`}>
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Leave Type</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">From</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">To</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Days</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Leave Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Paid Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {entries.map((entry) => (
              <tr key={entry.id} className="">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={entry.employee.avatar}
                      alt=""
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{entry.employee.name}</div>
                      <div className="text-sm text-gray-500">{entry.employee.department}</div>
                    </div>
                  </div>
                </td>
                {/* <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {entry.leaveType}
                  </span>
                </td> */}

<td className="px-6 py-4">
      <div className="flex items-center">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {entry.leaveType}
        </span>
        {entry.reason && (
          <>
            <button
              data-tooltip-id={`reason-tooltip-${entry.id}`}
              data-tooltip-content={entry.reason}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              <FaInfoCircle size={14} />
            </button>
            <Tooltip id={`reason-tooltip-${entry.id}`} />
          </>
        )}
      </div>
    </td>


                <td className="px-6 py-4 text-sm text-gray-500">{entry.from}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{entry.to}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{entry.days} Days</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${entry.status === 'Approved' ? 'bg-green-100 text-green-800' : ''}
                    ${entry.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${entry.status === 'Rejected' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {entry.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${entry.paidStatus === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                  `}>
                    {entry.paidStatus}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-3">
                    <button 
                      className="text-blue-600 hover:text-blue-900" 
                      onClick={() => handleEdit(entry)}
                    >
                      <FaPenToSquare />
                    </button>
                    {/* <button 
                      className="text-yellow-600 hover:text-yellow-900" 
                      onClick={() => handleView(entry)}
                    >
                      <FaEye />
                    </button> */}
                    <button className="text-red-600 hover:text-red-900">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
            <div className="flex justify-end p-4 border-b">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                ×
              </button>
            </div>
            <div className="p-6">
            <AddLeaveForm
          onClose={handleClose}
          initialData={selectedLeave}
          mode={modalMode}
        />
             
            </div>
          </div>
        </div>
      )} */}

{isModalOpen && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
          <div className={`${darkMode ? "dark-mode" : "border-none" } modal-content`}>
          <div className={`${darkMode ? "dark-mode" : null } modal-header`}>
                <h5 className="modal-title">Add Leave</h5>
                <button type="button" className="close" onClick={handleClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className={`${darkMode ? "dark-mode" : null } modal-body`}>
              <AddLeaveForm
          onClose={handleClose}
          initialData={selectedLeave}
          mode={modalMode}
        />
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, title, value, bgColor, darkMode }) => (

  <div className={`${darkMode ? "card-dark" : "" }  bg-white rounded-lg shadow p-6 `}>
    <div className="flex items-center">
      <div className={`${bgColor} p-3 rounded-full mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

export default LeavePage;
