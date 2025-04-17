// import React, { useState } from "react";
// import {
//   FaPlus,
//   FaRegBell,
//   FaPowerOff,
//   FaSearch,
//   FaRegUser,
//   FaTimes,
//   FaFileExport,
// } from "react-icons/fa";

// const employeesData = [
//   {
//     id: 1,
//     name: "Tyreek Auer",
//     role: "Senior",
//     shifts: {},
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Cordia Rau",
//     role: "Trainee",
//     shifts: {},
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Giles Conn",
//     role: "Senior",
//     shifts: {},
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
//   {
//     id: 4,
//     name: "Jermain Beatty",
//     role: "Senior",
//     shifts: {},
//     image: "https://randomuser.me/api/portraits/men/4.jpg",
//   },
// ];

// // Shift options with colors
// const shifts = [
//   {
//     label: "Day Off",
//     value: "Day Off",
//     color: "bg-gray-300 text-gray-600",
//     time: "Day Off",
//   },
//   {
//     label: "General Shift",
//     value: "General Shift",
//     color: "bg-blue-300 text-blue-800",
//     time: "09:00 - 18:00",
//   },
//   {
//     label: "Night Shift",
//     value: "Night Shift",
//     color: "bg-gray-700 text-white",
//     time: "22:00 - 06:00",
//   },
//   {
//     label: "Day Shift",
//     value: "Day Shift",
//     color: "bg-red-600 text-white",
//     time: "08:00 - 17:00",
//   },
// ];

// const ShiftRoster = () => {
//   const [employees, setEmployees] = useState(employeesData);
//   const [startDate, setStartDate] = useState(new Date(2024, 2, 17));
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedShift, setSelectedShift] = useState("");

//   // Change Week Function
//   const changeWeek = (direction) => {
//     const newDate = new Date(startDate);
//     newDate.setDate(startDate.getDate() + (direction === "next" ? 7 : -7));
//     setStartDate(newDate);
//   };

//   // Format Date for Display (DD-MM-YYYY)
//   const formatDisplayDate = (date) => {
//     return `${date.getDate().toString().padStart(2, "0")}-${(
//       date.getMonth() + 1
//     )
//       .toString()
//       .padStart(2, "0")}-${date.getFullYear()}`;
//   };

//   // Format Date for Storage (YYYY-MM-DD)
//   const formatStorageDate = (date) => {
//     return `${date.getFullYear()}-${(date.getMonth() + 1)
//       .toString()
//       .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
//   };

//   // Open Modal
//   const openModal = (employee, date) => {
//     setSelectedEmployee(employee);
//     setSelectedDate(formatStorageDate(date)); // Store in YYYY-MM-DD format
//     setSelectedShift(employee.shifts[formatStorageDate(date)]?.shift || ""); // Keep previous shift
//     setIsModalOpen(true);
//   };

//   const getDateRange = () => {
//     const endDate = new Date(startDate);
//     endDate.setDate(startDate.getDate() + 6);
//     return `${startDate.getDate()} ${startDate.toLocaleString("default", {
//       month: "short",
//     })} - ${endDate.getDate()} ${endDate.toLocaleString("default", {
//       month: "short",
//     })}`;
//   };

//   // Save Shift
//   const saveShift = () => {
//     if (!selectedEmployee || !selectedDate) {
//       alert("Please select a shift before saving!");
//       return;
//     }

//     const shiftDetails = shifts.find((s) => s.value === selectedShift) || {
//       shift: "Day Off",
//       time: "Day Off",
//       color: "bg-gray-300 text-gray-600",
//     };

//     setEmployees((prevEmployees) =>
//       prevEmployees.map((emp) =>
//         emp.id === selectedEmployee.id
//           ? {
//               ...emp,
//               shifts: {
//                 ...emp.shifts,
//                 [selectedDate]: {
//                   shift: shiftDetails.label,
//                   time: shiftDetails.time,
//                   color: shiftDetails.color,
//                 },
//               },
//             }
//           : emp
//       )
//     );

//     setIsModalOpen(false);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-md">
//         <h1 className="text-xl font-semibold">Shift Roster</h1>
//         <div className="flex gap-4">
//           <FaSearch className="text-gray-600 cursor-pointer" />
//           <FaRegBell className="text-gray-600 cursor-pointer" />
//           <FaRegUser className="text-gray-600 cursor-pointer" />
//           <FaPowerOff className="text-gray-600 cursor-pointer" />
//         </div>
//       </div>

//   <div className="mt-4 flex flex-wrap justify-between bg-white p-4 shadow-md rounded-md">
//     <div className="flex flex-wrap gap-4">
//       <select className="border p-2 rounded-md">
//         <option>Employee</option>
//       </select>
//       <select className="border p-2 rounded-md">
//         <option>Department</option>
//       </select>
//       <select className="border p-2 rounded-md">
//         <option>Weekly View</option>
//       </select>
//     </div>
//     <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
//       <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
//         <FaPlus /> Assign Bulk Shifts
//       </button>
//       <button className="border px-4 py-2 rounded-md flex items-center gap-2">
//         <FaFileExport /> Export
//       </button>
//     </div>
//   </div>

//       {/* Shift Table */}
//       <div className="mt-4 bg-white p-4 shadow-md rounded-md">
//         {/* Week Navigation */}
//         <div className="flex justify-between pb-4 border-b">
//           <button
//             className="text-gray-600 font-semibold"
//             onClick={() => changeWeek("prev")}
//           >
//             &#8592;
//           </button>
//           <span className="font-semibold">{getDateRange()}</span>
//           <button
//             className="text-gray-600 font-semibold"
//             onClick={() => changeWeek("next")}
//           >
//             &#8594;
//           </button>
//         </div>

//         <div className="mt-4 overflow-x-auto md:overflow-x-hidden">
//           <div className="grid grid-cols-8 text-center font-semibold border-b pb-2 min-w-max md:min-w-full">
//             <span>Employee</span>
//             {[...Array(7)].map((_, i) => {
//               const currentDate = new Date(startDate);
//               currentDate.setDate(startDate.getDate() + i);
//               return (
//                 <span key={i} className="text-gray-600">
//                   {formatDisplayDate(currentDate)}
//                 </span>
//               );
//             })}
//           </div>

//           {employees.map((emp, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-8 text-center items-center py-2 border-b min-w-max md:min-w-full"
//             >
//               <div className="flex items-center gap-2 px-2">
//                 <img
//                   src={emp.image}
//                   alt="profile"
//                   className="w-10 h-10 rounded-full border"
//                 />
//                 <div>
//                   <p className="font-semibold">{emp.name}</p>
//                   <p className="text-gray-500 text-sm">{emp.role}</p>
//                 </div>
//               </div>
//               {[...Array(7)].map((_, i) => {
//                 const currentDate = new Date(startDate);
//                 currentDate.setDate(startDate.getDate() + i);
//                 const formattedDate = formatStorageDate(currentDate);
//                 const shiftData = emp.shifts[formattedDate];

//                 return (
//                   <div
//                     key={i}
//                     className="flex justify-center items-center h-14"
//                   >
//                     {shiftData ? (
//                       <div
//                         className={`${shiftData.color} px-3 py-1 rounded-md text-sm text-center w-[90%]`}
//                       >
//                         {shiftData.shift}
//                         <br />
//                         <span className="text-xs">{shiftData.time}</span>
//                       </div>
//                     ) : (
//                       <FaPlus
//                         className="text-gray-400 cursor-pointer text-lg"
//                         onClick={() => openModal(emp, currentDate)}
//                       />
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
//             <button
//               className="absolute top-4 right-4 text-gray-600"
//               onClick={() => setIsModalOpen(false)}
//             >
//               <FaTimes size={20} />
//             </button>
//             <h2 className="text-lg font-semibold">Update Shift</h2>
//             <p className="text-sm text-gray-500">
//               Date: {formatDisplayDate(new Date(selectedDate))}
//             </p>

//             <div className="flex items-center mt-4">
//               <img
//                 src={selectedEmployee.image}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full border"
//               />
//               <div className="ml-3">
//                 <p className="font-semibold">{selectedEmployee.name}</p>
//                 <p className="text-gray-500 text-sm">{selectedEmployee.role}</p>
//               </div>
//             </div>

//             <label className="block mt-4">Select Shift</label>
//             <select
//               className="w-full border p-2 rounded-md"
//               value={selectedShift}
//               onChange={(e) => setSelectedShift(e.target.value)}
//             >
//               {shifts.map((shift, index) => (
//                 <option key={index} value={shift.value}>
//                   {shift.label} {shift.time}
//                 </option>
//               ))}
//             </select>

//             <label className="block mt-4 text-sm font-medium">Remark</label>
//             <textarea
//               className="w-full border p-2 rounded-md"
//               rows="2"
//             ></textarea>

//             <label className="block mt-4 text-sm font-medium">Add File</label>
//             <input type="file" className="w-full border p-2 rounded-md" />

//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md w-full"
//               onClick={saveShift}
//             >
//               Save Shift
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShiftRoster;

import React, { useState } from "react";
import {
  FaPlus,
  FaTimes,
  FaRegBell,
  FaPowerOff,
  FaSearch,
  FaRegUser,
  FaFileExport,
} from "react-icons/fa";

const employeesData = [
  {
    id: 1,
    name: "Tyreek Auer",
    role: "Senior",
    shifts: {},
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Cordia Rau",
    role: "Trainee",
    shifts: {},
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Giles Conn",
    role: "Senior",
    shifts: {},
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Jermain Beatty",
    role: "Senior",
    shifts: {},
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

// Default Shift options
const shifts = [
  {
    label: "Day Off",
    value: "Day Off",
    color: "bg-gray-300 text-gray-600",
    time: "Day Off",
  },
  {
    label: "General Shift",
    value: "General Shift",
    color: "bg-blue-300 text-blue-800",
    time: "09:00 - 18:00",
  },
  {
    label: "Night Shift",
    value: "Night Shift",
    color: "bg-gray-700 text-white",
    time: "22:00 - 06:00",
  },
  {
    label: "Day Shift",
    value: "Day Shift",
    color: "bg-red-600 text-white",
    time: "08:00 - 17:00",
  },
];

const ShiftRoster = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [startDate, setStartDate] = useState(new Date(2024, 2, 17));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedShift, setSelectedShift] = useState("");

  // New Shift Modal State
  const [isNewShiftModalOpen, setIsNewShiftModalOpen] = useState(false);
  const [newShiftName, setNewShiftName] = useState("");
  const [newShiftStart, setNewShiftStart] = useState("");
  const [newShiftEnd, setNewShiftEnd] = useState("");

  // Change Week Function
  const changeWeek = (direction) => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + (direction === "next" ? 7 : -7));
    setStartDate(newDate);
  };

  const formatDisplayDate = (date) => {
    return `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  };

  // Open Modal
  const openModal = (employee, date) => {
    setSelectedEmployee(employee);
    setSelectedDate(date);
    setSelectedShift(employee.shifts[date]?.shift || "");
    setIsModalOpen(true);
  };

  // Save Shift
  const saveShift = () => {
    if (!selectedEmployee || !selectedDate) {
      alert("Please select a shift before saving!");
      return;
    }

    const shiftDetails = shifts.find((s) => s.value === selectedShift) || {
      shift: "Day Off",
      time: "Day Off",
      color: "bg-gray-300 text-gray-600",
    };

    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === selectedEmployee.id
          ? {
              ...emp,
              shifts: {
                ...emp.shifts,
                [selectedDate]: {
                  shift: shiftDetails.label,
                  time: shiftDetails.time,
                  color: shiftDetails.color,
                },
              },
            }
          : emp
      )
    );

    setIsModalOpen(false);
  };

  // Save New Shift
  const saveNewShift = () => {
    if (!newShiftName || !newShiftStart || !newShiftEnd) {
      alert("Please fill all fields!");
      return;
    }

    const newShift = {
      label: newShiftName,
      value: newShiftName,
      color: "bg-green-400 text-white",
      time: `${newShiftStart} - ${newShiftEnd}`,
    };

    shifts.push(newShift);
    setIsNewShiftModalOpen(false);
    setNewShiftName("");
    setNewShiftStart("");
    setNewShiftEnd("");
  };

  const getDateRange = () => {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    return `${startDate.getDate()} ${startDate.toLocaleString("default", {
      month: "short",
    })} - ${endDate.getDate()} ${endDate.toLocaleString("default", {
      month: "short",
    })}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-md">
        <h1 className="text-xl font-semibold">Shift Roster</h1>
        {/* <div className="flex gap-4">
          <FaSearch className="text-gray-600 cursor-pointer" />
          <FaRegBell className="text-gray-600 cursor-pointer" />
          <FaRegUser className="text-gray-600 cursor-pointer" />
          <FaPowerOff className="text-gray-600 cursor-pointer" />
        </div> */}
        <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <FaPlus /> Assign Bulk Shifts
          </button>
          <button className="border px-4 py-2 rounded-md flex items-center gap-2">
            <FaFileExport /> Export
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-between bg-white p-4 shadow-md rounded-md">
        <div className="flex flex-wrap gap-4">
          <select className="border p-2 rounded-md">
            <option>Employee</option>
          </select>
          <select className="border p-2 rounded-md">
            <option>Department</option>
          </select>
          <select className="border px-4 py-2 rounded-md">
            <option>Weekly View</option>
          </select>
        </div>
        <div className="inv-search-wrapper">
          <i className="bi bi-search inv-search-icon" />
          <input
            type="text"
            className="inv-search-input"
            placeholder="Search Employees..."
            aria-label="Search Employees..."
          />
        </div>
      </div>

      {/* Shift Table */}
      <div className="mt-4 bg-white p-4 shadow-md rounded-md">
        {/* Week Navigation */}
        <div className="flex justify-between pb-4 border-b">
          <button
            className="text-gray-600 font-semibold"
            onClick={() => changeWeek("prev")}
          >
            &#8592;
          </button>
          <span className="font-semibold">{getDateRange()}</span>
          <button
            className="text-gray-600 font-semibold"
            onClick={() => changeWeek("next")}
          >
            &#8594;
          </button>
        </div>

        <div className="mt-4 overflow-x-auto md:overflow-x-hidden">
          <div className="grid grid-cols-8 text-center font-semibold border-b pb-2 min-w-max md:min-w-full">
            <span>Employee</span>
            {[...Array(7)].map((_, i) => (
              <span key={i} className="text-gray-600">
                {17 + i} Mar
              </span>
            ))}
          </div>

          {employees.map((emp, index) => (
            <div
              key={index}
              className="grid grid-cols-8 text-center items-center py-2 border-b min-w-max md:min-w-full"
            >
              <div className="flex items-center gap-2 px-2">
                <img
                  src={emp.image}
                  alt="profile"
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <p className="font-semibold">{emp.name}</p>
                  <p className="text-gray-500 text-sm">{emp.role}</p>
                </div>
              </div>
              {[...Array(7)].map((_, i) => {
                const formattedDate = `2024-03-${(17 + i)
                  .toString()
                  .padStart(2, "0")}`;
                const shiftData = emp.shifts[formattedDate];

                return (
                  <div
                    key={i}
                    className="flex justify-center items-center h-14"
                  >
                    {shiftData ? (
                      <div
                        className={`${shiftData.color} px-3 py-1 rounded-md text-sm text-center w-[90%]`}
                      >
                        {shiftData.shift}
                        <br />
                        <span className="text-xs">{shiftData.time}</span>
                      </div>
                    ) : (
                      <FaPlus
                        className="text-gray-400 cursor-pointer text-lg"
                        onClick={() => openModal(emp, formattedDate)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-lg font-semibold">Update Shift</h2>
            <p className="text-sm text-gray-500">
              Date: {formatDisplayDate(new Date(selectedDate))}
            </p>

            <div className="flex items-center mt-4">
              <img
                src={selectedEmployee.image}
                alt="profile"
                className="w-10 h-10 rounded-full border"
              />
              <div className="ml-3">
                <p className="font-semibold">{selectedEmployee.name}</p>
                <p className="text-gray-500 text-sm">{selectedEmployee.role}</p>
              </div>
            </div>

            <label className="block mt-4 flex justify-between items-center">
              Select Shift
              <FaPlus
                className="text-blue-600 cursor-pointer"
                onClick={() => setIsNewShiftModalOpen(true)}
              />
            </label>
            <select
              className="w-full border p-2 rounded-md"
              value={selectedShift}
              onChange={(e) => setSelectedShift(e.target.value)}
            >
              {shifts.map((shift, index) => (
                <option key={index} value={shift.value}>
                  {shift.label} {shift.time}
                </option>
              ))}
            </select>

            <label className="block mt-4 text-sm font-medium">Remark</label>
            <textarea
              className="w-full border p-2 rounded-md"
              rows="2"
            ></textarea>

            <label className="block mt-4 text-sm font-medium">Add File</label>
            <input type="file" className="w-full border p-2 rounded-md" />

            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md w-full"
              onClick={saveShift}
            >
              Save Shift
            </button>
          </div>
        </div>
      )}

      {/* New Shift Modal */}
      {isNewShiftModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsNewShiftModalOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-lg font-semibold">Add New Shift</h2>

            <label className="block mt-4">Shift Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              placeholder="Enter shift name"
              value={newShiftName}
              onChange={(e) => setNewShiftName(e.target.value)}
            />

            <label className="block mt-4">Start Time</label>
            <input
              type="time"
              className="w-full border p-2 rounded-md"
              value={newShiftStart}
              onChange={(e) => setNewShiftStart(e.target.value)}
            />

            <label className="block mt-4">End Time</label>
            <input
              type="time"
              className="w-full border p-2 rounded-md"
              value={newShiftEnd}
              onChange={(e) => setNewShiftEnd(e.target.value)}
            />

            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md w-full"
              onClick={saveNewShift}
            >
              Add Shift
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShiftRoster;
