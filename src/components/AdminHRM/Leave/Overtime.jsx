// // import React, { useState, useEffect } from 'react';

// // const Overtime = () => {
// //   const [overtimeData, setOvertimeData] = useState([]);
// //   const [filters, setFilters] = useState({
// //     dateRange: '',
// //     employee: '',
// //     project: '',
// //     status: '',
// //     sortBy: 'Last 7 Days',
// //     search: '',
// //   });

// //   useEffect(() => {
// //     // Fetch data from API or mock data
// //     const fetchData = async () => {
// //       // Replace with actual API call
// //       const mockData = [
// //         {
// //           id: 1,
// //           employee: 'Anthony Lewis',
// //           date: '14 Jan 2024',
// //           hours: 32,
// //           project: 'Office Management',
// //           approvedBy: 'Michael Walker',
// //           status: 'Approved',
// //         },
// //         {
// //           id: 2,
// //           employee: 'John Doe',
// //           date: '15 Jan 2024',
// //           hours: 10,
// //           project: 'IT Infrastructure',
// //           approvedBy: 'Sarah Lee',
// //           status: 'Pending',
// //         },
// //       ];
// //       setOvertimeData(mockData);
// //     };
// //     fetchData();
// //   }, []);

// //   const handleEdit = (id) => {
// //     console.log('Edit:', id);
// //   };

// //   const handleDelete = (id) => {
// //     setOvertimeData(overtimeData.filter(item => item.id !== id));
// //   };

// //   return (
// //     <div className="bg-white text-gray-800 p-4">
// //       <header className="flex justify-between items-center py-4 border-b">
// //         <p className="text-2xl font-bold">Employee / Overtime</p>
// //         <div>
// //           <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Export</button>
// //           <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ml-2">Add Overtime</button>
// //         </div>
// //       </header>

//   <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
//     <div className="p-4 rounded-lg shadow-md">
//       <h2 className="font-semibold">Overtime Employees</h2>
//       <p className="text-3xl">{overtimeData.length}</p>
//     </div>
//     <div className="p-4 rounded-lg shadow-md">
//       <h2 className="font-semibold">Overtime Hours</h2>
//       <p className="text-3xl">{overtimeData.reduce((sum, item) => sum + item.hours, 0)}</p>
//     </div>
//     <div className="p-4 rounded-lg shadow-md">
//       <h2 className="font-semibold">Pending Requests</h2>
//       <p className="text-3xl">{overtimeData.filter(item => item.status === 'Pending').length}</p>
//     </div>
//     <div className="p-4 rounded-lg shadow-md">
//       <h2 className="font-semibold">Rejected</h2>
//       <p className="text-3xl">{overtimeData.filter(item => item.status === 'Rejected').length}</p>
//     </div>
//   </div>

// //       <div className="my-4">
// //         <input type="text" placeholder="Date Range" className="text-gray-800 p-2 rounded-md mr-2" />
// //         <select className="text-gray-800 p-2 rounded-md mr-2">
// //           <option>Employee</option>
// //           {overtimeData.map((item, index) => (
// //             <option key={index} value={item.employee}>{item.employee}</option>
// //           ))}
// //         </select>
// //         <select className="text-gray-800 p-2 rounded-md mr-2">
// //           <option>Project</option>
// //           {overtimeData.map((item, index) => (
// //             <option key={index} value={item.project}>{item.project}</option>
// //           ))}
// //         </select>
// //         <select className="text-gray-800 p-2 rounded-md mr-2">
// //           <option>Select Status</option>
// //           <option value="Approved">Approved</option>
// //           <option value="Pending">Pending</option>
// //           <option value="Rejected">Rejected</option>
// //         </select>
// //         <input type="text" placeholder="Search" className="text-gray-800 p-2 rounded-md" />
// //       </div>

// //       <table className="w-full my-4">
// //         <thead>
// //           <tr>
// //             <th className="p-2">Employee</th>
// //             <th className="p-2">Date</th>
// //             <th className="p-2">Overtime Hours</th>
// //             <th className="p-2">Project</th>
// //             <th className="p-2">Approved By</th>
// //             <th className="p-2">Status</th>
// //             <th className="p-2">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {overtimeData.map((item, index) => (
// //             <tr key={index} className="border-b">
// //               <td className="p-2">{item.employee}</td>
// //               <td className="p-2">{item.date}</td>
// //               <td className="p-2">{item.hours}</td>
// //               <td className="p-2">{item.project}</td>
// //               <td className="p-2">{item.approvedBy}</td>
// //               <td className="p-2">
// //                 <span className="px-2 rounded text-black">{item.status}</span>
// //               </td>
// //               <td className="p-2">
// //                 <button onClick={() => handleEdit(item.id)} className="text-blue-500 mr-2">Edit</button>
// //                 <button onClick={() => handleDelete(item.id)} className="text-red-500">Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       <div className="flex justify-between mt-4">
// //         <span>Showing 1 - {overtimeData.length} of {overtimeData.length} entries</span>
// //         <div>
// //           <button className="text-gray-800 px-4 py-2 rounded">Previous</button>
// //           <button className="text-gray-800 px-4 py-2 rounded ml-2">Next</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Overtime;

// import React, { useState, useEffect } from 'react';

// const Overtime = () => {
//   const [overtimeData, setOvertimeData] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalData, setModalData] = useState(null);

//   useEffect(() => {
//     // Fetch data from API or mock data
//     const fetchData = async () => {
//       const mockData = [
//         {
//           id: 1,
//           employee: 'Anthony Lewis',
//           date: '14 Jan 2024',
//           hours: 32,
//           project: 'Office Management',
//           approvedBy: 'Michael Walker',
//           status: 'Approved',
//         },
//         {
//           id: 2,
//           employee: 'John Doe',
//           date: '15 Jan 2024',
//           hours: 10,
//           project: 'IT Infrastructure',
//           approvedBy: 'Sarah Lee',
//           status: 'Pending',
//         },
//       ];
//       setOvertimeData(mockData);
//     };
//     fetchData();
//   }, []);

//   const employee = [
//     {
//       id: "EMP001",
//       name: "John Doe",
//       designation: "Senior Developer",
//       department: "IT Department",
//       email: "john.doe@example.com",
//       phone: "+1 234 567 890",
//       status: "Active",
//       image: "https://randomuser.me/api/portraits/men/1.jpg",
//       dateOfJoin: "2023-01-01",
//     },
//     {
//       id: "EMP002",
//       name: "Jane Smith",
//       designation: "HR Manager",
//       department: "HR Department",
//       email: "jane.smith@example.com",
//       phone: "+1 234 567 891",
//       status: "Active",
//       image: "https://randomuser.me/api/portraits/women/1.jpg",
//       dateOfJoin: "2023-02-01",
//     },
//   ];

//   const handleEdit = (id) => {
//     const item = overtimeData.find((data) => data.id === id);
//     setModalData(item);
//     setIsModalOpen(true);
//   };

//   const handleAddOvertime = () => {
//     setModalData(null);
//     setIsModalOpen(true);
//   };

//   const handleDelete = (id) => {
//     setOvertimeData(overtimeData.filter(item => item.id !== id));
//   };

//   return (
//     <div className="bg-white text-gray-800 p-4">
//       <header className="flex justify-between items-center py-4 border-b">
//         <p className="text-2xl font-bold">Employee / Overtime</p>
//         <div>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Export</button>
//           <button onClick={handleAddOvertime} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ml-2">Add Overtime</button>
//         </div>
//       </header>

//       <table className="w-full my-4">
//         <thead>
//           <tr>
//             <th className="p-2">Employee</th>
//             <th className="p-2">Date</th>
//             <th className="p-2">Overtime Hours</th>
//             <th className="p-2">Project</th>
//             <th className="p-2">Approved By</th>
//             <th className="p-2">Status</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {overtimeData.map((item, index) => (
//             <tr key={index} className="border-b">
//               <td className="p-2">{item.employee}</td>
//               <td className="p-2">{item.date}</td>
//               <td className="p-2">{item.hours}</td>
//               <td className="p-2">{item.project}</td>
//               <td className="p-2">{item.approvedBy}</td>
//               <td className="p-2">
//                 <span className="px-2 rounded text-black">{item.status}</span>
//               </td>
//               <td className="p-2">
//                 <button onClick={() => handleEdit(item.id)} className="text-blue-500 mr-2">Edit</button>
//                 <button onClick={() => handleDelete(item.id)} className="text-red-500">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-1/3">
//             <h2 className="text-xl font-bold mb-4">{modalData ? 'Edit Overtime' : 'Add Overtime'}</h2>
//             <input type="text" placeholder="Employee" className="w-full p-2 mb-2 border rounded" defaultValue={modalData?.employee} />
//             <input type="date" className="w-full p-2 mb-2 border rounded" defaultValue={modalData?.date} />
//             <input type="number" placeholder="Hours" className="w-full p-2 mb-2 border rounded" defaultValue={modalData?.hours} />
//             <input type="text" placeholder="Project" className="w-full p-2 mb-2 border rounded" defaultValue={modalData?.project} />
//             <input type="text" placeholder="Approved By" className="w-full p-2 mb-2 border rounded" defaultValue={modalData?.approvedBy} />
//             <select className="w-full p-2 mb-2 border rounded" defaultValue={modalData?.status}>
//               <option value="Approved">Approved</option>
//               <option value="Pending">Pending</option>
//               <option value="Rejected">Rejected</option>
//             </select>
//             <div className="flex justify-end">
//               <button onClick={() => setIsModalOpen(false)} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2">Cancel</button>
//               <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Overtime;

import React, { useState, useEffect } from "react";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";

const Overtime = () => {
  const [overtimeData, setOvertimeData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    employee: "",
    date: "",
    hours: "",
    project: "",
    approvedBy: "",
    status: "Pending",
  });
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [approvers, setApprovers] = useState([]);

  useEffect(() => {
    // Fetch overtime data from API or mock data
    const fetchData = async () => {
      const mockData = [
        {
          id: 1,
          employee: "Anthony Lewis",
          date: "2024-01-14",
          hours: 32,
          project: "Office Management",
          approvedBy: "Michael Walker",
          status: "Approved",
        },
        {
          id: 2,
          employee: "John Doe",
          date: "2024-01-15",
          hours: 10,
          project: "IT Infrastructure",
          approvedBy: "Sarah Lee",
          status: "Pending",
        },
      ];
      setOvertimeData(mockData);
    };

    const fetchDropdownData = async () => {
      // Mock API calls for dropdown data
      setEmployees([
        "Anthony Lewis",
        "John Doe",
        "Sarah Lee",
        "Michael Walker",
      ]);
      setProjects(["Office Management", "IT Infrastructure", "HR System"]);
      setApprovers(["Michael Walker", "Sarah Lee", "David Johnson"]);
    };

    fetchData();
    fetchDropdownData();
  }, []);

  const handleEdit = (id) => {
    const item = overtimeData.find((data) => data.id === id);
    setModalData(item);
    setIsModalOpen(true);
  };

  const handleAddOvertime = () => {
    setModalData({
      employee: "",
      date: "",
      hours: "",
      project: "",
      approvedBy: "",
      status: "Pending",
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setOvertimeData(overtimeData.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white text-gray-800 p-4">
      <header className="flex justify-between items-center py-4 border-b">
        <p className="text-2xl font-bold">Employee / Overtime</p>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Export
          </button>
          <button
            onClick={handleAddOvertime}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ml-2"
          >
            Add Overtime
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Overtime Employees</h2>
          <p className="text-3xl">{overtimeData.length}</p>
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Overtime Hours</h2>
          <p className="text-3xl">
            {overtimeData.reduce((sum, item) => sum + item.hours, 0)}
          </p>
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Pending Requests</h2>
          <p className="text-3xl">
            {overtimeData.filter((item) => item.status === "Pending").length}
          </p>
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Rejected</h2>
          <p className="text-3xl">
            {overtimeData.filter((item) => item.status === "Rejected").length}
          </p>
        </div>
      </div>

      <table className="w-full my-4">
        <thead>
          <tr>
            <th className="p-2">Employee</th>
            <th className="p-2">Date</th>
            <th className="p-2">Overtime Hours</th>
            <th className="p-2">Project</th>
            <th className="p-2">Approved By</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {overtimeData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.employee}</td>
              <td className="p-2">{item.date}</td>
              <td className="p-2">{item.hours}</td>
              <td className="p-2">{item.project}</td>
              <td className="p-2">{item.approvedBy}</td>
              <td className="p-2">
                <span className="px-2 rounded text-black">{item.status}</span>
              </td>
              {/* <td className="p-2">
                <button onClick={() => handleEdit(item.id)} className="text-blue-500 mr-2">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="text-red-500">Delete</button>
              </td> */}
              <td>
                <button
                  onClick={() => handleEdit(item.id)}
                  className=" action-btn  hover:text-blue-800"
                  style={{ color: "blue" }}
                >
                  <FaPenToSquare />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className=" action-btn text-danger hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {modalData.id ? "Edit Overtime" : "Add Overtime"}
            </h2>
            <select
              name="employee"
              value={modalData.employee}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp} value={emp}>
                  {emp}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={modalData.date}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              name="hours"
              value={modalData.hours}
              onChange={handleChange}
              placeholder="Hours"
              className="w-full p-2 mb-2 border rounded"
            />
            <select
              name="project"
              value={modalData.project}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            >
              <option value="">Select Project</option>
              {projects.map((proj) => (
                <option key={proj} value={proj}>
                  {proj}
                </option>
              ))}
            </select>
            <select
              name="approvedBy"
              value={modalData.approvedBy}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            >
              <option value="">Select Approver</option>
              {approvers.map((appr) => (
                <option key={appr} value={appr}>
                  {appr}
                </option>
              ))}
            </select>
            <select
              name="status"
              value={modalData.status}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            >
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overtime;
