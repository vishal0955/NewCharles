import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AttendanceAdmin = () => {
  // Sample data for the dashboard
  const attendanceSummary = [
    { title: "Present", count: 250, change: "+1.2%", changeType: "increase" },
    { title: "Late Login", count: 45, change: "-3.1%", changeType: "decrease" },
    { title: "Uninformed", count: 15, change: "-1.2%", changeType: "decrease" },
    { title: "Permission", count: 3, change: "+1.1%", changeType: "increase" },
    { title: "Absent", count: 12, change: "-1.9%", changeType: "decrease" }
  ];

  const employeeData = [
    {
      id: 1,
      name: "Anthony Lewis",
      department: "UI/UX Team",
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "06:45 PM",
      break: "30 Min",
      late: "32 Min",
      productionHours: "8.58 Hrs",
    }
  ];

  const [dateRange] = useState("03/11/2025 - 03/17/2025");
  const [department] = useState("Department");
  const [status] = useState("Select Status");
  const [sortBy] = useState("Last 7 Days");
  const [rowsPerPage] = useState(10);
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`${darkMode ? "dark-mode" : null }  min-h-screen p-4`}>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-gray-500">Employee</span>
          <span className="text-gray-500">/</span>
          <span className="font-medium">Attendance Admin</span>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className=" border rounded-md px-4 py-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export
          </button>
          {/* <button className="bg-black text-white rounded-md px-4 py-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Report
          </button> */}
        </div>
      </div>

      {/* Attendance Details Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Attendance Details Today</h2>
        <p className="text-gray-500 text-sm mb-4">Data from the 800+ total no of employees</p>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {attendanceSummary.map((item, index) => (
            <div key={index} className=" p-4 rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">{item.title}</span>
                <span className={`text-sm ${item.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                  {item.change}
                </span>
              </div>
              <div className="text-3xl font-semibold">
                {item.title === "Permission" ? `0${item.count}` : item.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className=" p-4 rounded-lg shadow-sm border mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          <div className="relative">
            <select className={`${darkMode ? "dark-mode" : "" } w-full p-2 border rounded-md appearance-none  pr-8 `}>
              <option>{dateRange}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          
          <div className="relative">
            <select className={`${darkMode ? "dark-mode" : "" }  w-full p-2 border rounded-md appearance-none pr-8 `}>
              <option>{department}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          
          <div className="relative">
            <select className={`${darkMode ? "dark-mode" : "" }  w-full p-2 border rounded-md appearance-none bg-white pr-8`}>
              <option>{status}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          
          <div className="relative">
            <select className={`${darkMode ? "dark-mode" : "" }  w-full p-2 border rounded-md appearance-none bg-white pr-8`}>
              <option>Sort By: {sortBy}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          
          <div>
            <input
              type="text"
              placeholder="Search..."
              className= {`${darkMode ? "dark-mode" : "" }  w-full p-2 border rounded-md `}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className=" rounded-lg shadow-sm border overflow-x-auto">
        <table className={`${darkMode ? "table-dark" : "" }  min-w-full `}>
          <thead>
            <tr className=" border-b">
              <th className="w-10 py-3 px-4 text-left">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
              </th>
              <th className="py-3 px-4 text-left">Employee</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Check In</th>
              <th className="py-3 px-4 text-left">Check Out</th>
              <th className="py-3 px-4 text-left">Break</th>
              <th className="py-3 px-4 text-left">Late</th>
              <th className="py-3 px-4 text-left">Production Hours</th>
              <th className="py-3 px-4 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => (
              <tr key={employee.id} className="">
                <td className="py-4 px-4">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.department}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-sm">
                    {employee.status}
                  </span>
                </td>
                <td className="py-4 px-4">{employee.checkIn}</td>
                <td className="py-4 px-4">{employee.checkOut}</td>
                <td className="py-4 px-4">{employee.break}</td>
                <td className="py-4 px-4">{employee.late}</td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-sm">
                    {employee.productionHours}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="mr-2 text-sm ">Rows per page:</span>
            <div className="relative">
              <select className="appearance-none border rounded-md py-1 pl-3 pr-8 text-sm">
                <option>{rowsPerPage}</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="px-4 py-2 border rounded-md mr-2 text-sm">Previous</button>
            <button className="px-4 py-2 border rounded-md text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceAdmin;