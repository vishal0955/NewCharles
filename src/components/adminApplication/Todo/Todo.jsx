import { Link } from "react-router-dom";
import React from "react";

const TodoList = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8">
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-600">
              <a href="#" className="hover:text-gray-900">
                <i className="fas fa-home"></i>
              </a>
              <span>/</span>
              <a href="#" className="hover:text-gray-900">
                Application
              </a>
              <span>/</span>
              <span className="text-gray-900 font-medium">Todo</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Todo List"
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom"
                />
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <i className="fas fa-cog text-gray-600"></i>
              </button>
            </div>
          </div>
        </nav>

        <main className="py-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">Total Todo</h1>
                <span className="bg-custom text-white text-sm px-3 py-1 rounded-full font-semibold">
                  41
                </span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div>
                  Total Task: <span className="font-medium">55</span>
                </div>
                <div>
                  Pending:{" "}
                  <span className="font-medium text-yellow-600">15</span>
                </div>
                <div>
                  Completed:{" "}
                  <span className="font-medium text-green-600">40</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-dashed border-custom rounded-lg p-6 mb-8 hover:bg-gray-50 transition-colors duration-200">
              <button className="flex items-center text-custom hover:text-custom-dark text-lg font-medium w-full justify-center">
                <i className="fas fa-plus mr-2"></i>
                <span>New task</span>
              </button>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Priority</span>
                <div className="flex space-x-2">
                  <button className="px-6 py-2.5 text-sm font-semibold bg-custom text-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    All
                  </button>
                  <Link to={"/admin/high"}>
                    <button className="px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                      High
                    </button>
                  </Link>
                  <Link to={"/Medium"}>
                    <button className="px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                      Medium
                    </button>
                  </Link>
                  <Link to={"/Low"}>
                    <button className="px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                      Low
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="date"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom"
                />
                <select className="pl-4 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom">
                  <option>All Tags</option>
                </select>
                <select className="pl-4 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom">
                  <option>Sort By: Created Date</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {["High", "Medium", "Low"].map((priority, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-chevron-down text-gray-400"></i>
                      <div
                        className={`w-4 h-4 rounded-full ${
                          priority === "High"
                            ? "bg-red-500"
                            : priority === "Medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      ></div>
                      <span className="font-medium">{priority}</span>
                      <span className="text-sm text-gray-500">
                        {priority === "High"
                          ? "15"
                          : priority === "Medium"
                          ? "5"
                          : "24"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-custom hover:text-custom-dark text-sm">
                        <i className="fas fa-plus mr-2"></i>
                        Add New
                      </button>

                      <button className="flex items-center text-gray-600 hover:text-gray-900 text-sm">
                        See All
                        <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button className="px-8 py-3 bg-custom text-white rounded-lg flex items-center space-x-2 hover:bg-custom-dark shadow-sm hover:shadow-md transition-shadow duration-200 font-semibold">
                <i className="fas fa-spinner mr-2"></i>
                Load More
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TodoList;

// import React from "react";
// import { useState } from "react";
// import {
//   FaHome,
//   FaSearch,
//   FaCog,
//   FaPlus,
//   FaChevronDown,
//   FaSpinner,
//   FaArrowRight,
//   FaCalendar,
// } from "react-icons/fa";

// const TodoApp = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, priority: "High", count: 15, color: "bg-red-500" },
//     { id: 2, priority: "Medium", count: 5, color: "bg-yellow-500" },
//     { id: 3, priority: "Low", count: 24, color: "bg-green-500" },
//   ]);

//   return (
//     <div className="bg-gray-50 min-h-screen p-6">
//       <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         <div className="flex items-center space-x-2 text-gray-600">
//           <FaHome className="hover:text-gray-900" />
//           <span>/</span>
//           <span className="hover:text-gray-900">Application</span>
//           <span>/</span>
//           <span className="text-gray-900 font-medium">Todo</span>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search Todo List"
//               className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//           <FaCog className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 cursor-pointer" />
//         </div>
//       </nav>

//       <main className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-xl font-semibold">
//             Total Todo:{" "}
//             <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full">
//               41
//             </span>
//           </h1>
//           <div className="flex space-x-6 text-gray-600">
//             <span>
//               Total Task: <strong>55</strong>
//             </span>
//             <span>
//               Pending: <strong>15</strong>
//             </span>
//             <span>
//               Completed: <strong>40</strong>
//             </span>
//           </div>
//         </div>

//         <div className="border border-dashed border-blue-500 p-4 mb-6 text-blue-500 cursor-pointer flex items-center space-x-2">
//           <FaPlus />
//           <span>New task</span>
//         </div>

//         <div className="space-y-4">
//           {tasks.map((task) => (
//             <div
//               key={task.id}
//               className="border border-gray-200 p-4 rounded-lg flex justify-between items-center"
//             >
//               <div className="flex items-center space-x-3">
//                 <FaChevronDown className="text-gray-400" />
//                 <div className={`w-4 h-4 rounded-full ${task.color}`}></div>
//                 <span className="font-medium">{task.priority}</span>
//                 <span className="text-sm text-gray-500">{task.count}</span>
//               </div>
//               <div className="flex space-x-4 text-blue-500">
//                 <button className="flex items-center space-x-2 hover:text-blue-700">
//                   <FaPlus />
//                   <span>Add New</span>
//                 </button>
//                 <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
//                   <span>See All</span>
//                   <FaArrowRight />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-6">
//           <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
//             <FaSpinner className="animate-spin" />
//             <span>Load More</span>
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TodoApp;
