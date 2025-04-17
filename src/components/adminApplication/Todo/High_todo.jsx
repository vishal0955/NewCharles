import React from "react";
import {
  FaHome,
  FaSearch,
  FaUser,
  FaPlus,
  FaStar,
  FaEllipsisV,
  FaSpinner,
  FaCog,
} from "react-icons/fa";

const TodoApp = () => {
  const tasks = [
    {
      id: 1,
      title: "Finalize project proposal",
      date: "15 Jan 2025",
      priority: "High",
      tags: ["Projects", "Onhold"],
      users: ["/avatar1.png", "/avatar2.png"],
      starred: true,
    },
    {
      id: 2,
      title: "Submit to supervisor by EOD",
      date: "25 May 2024",
      priority: "High",
      tags: ["Internal", "Inprogress"],
      users: ["/avatar3.png"],
    },
    {
      id: 3,
      title: "Prepare presentation slides",
      date: "15 Jan 2025",
      priority: "High",
      tags: ["Reminder", "Pending"],
      users: ["/avatar4.png", "/avatar5.png"],
      completed: true,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen min-w-[98vw] mx-auto flex flex-col overflow-x-hidden">
  
      <div className="w-full px-8 py-4">
        <nav className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg w-full">
          <div className="flex items-center space-x-4">
            <FaHome className="text-xl" />
            <h1 className="text-xl font-semibold">Todo</h1>
            <div className="text-gray-500 flex items-center space-x-2">
              <span>/</span>
              <span>Application</span>
              <span>/</span>
              <span>Todo</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full max-w-2xl">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search Todo List"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <FaUser className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 cursor-pointer" />
          </div>
        </nav>

        <div className="w-full mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">
              Total Todo{" "}
              <span className="bg-gray-900 text-white px-2 py-0.5 rounded-full text-sm">
                51
              </span>
            </h2>
            <div className="flex space-x-6 text-gray-600">
              <span>Total Task: 55</span>
              <span>Pending: 15</span>
              <span>Completed: 40</span>
            </div>
          </div>

          <div className="border border-gray-300 border-dashed rounded-lg p-4 mb-6 w-full">
            <button className="flex items-center text-gray-600 hover:bg-gray-100 w-full px-4 py-2 rounded-lg">
              <FaPlus className="mr-2" />
              <span>New task</span>
            </button>
          </div>

          <div className="space-y-4 w-full">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg border hover:shadow-sm w-full"
              >
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    className="rounded border-gray-300 cursor-pointer"
                  />
                  {task.starred && <FaStar className="text-yellow-400" />}
                  <span
                    className={
                      task.completed
                        ? "font-medium line-through text-gray-500"
                        : "font-medium"
                    }
                  >
                    {task.title}
                  </span>
                  <span className="text-gray-500">{task.date}</span>
                </div>
                <div className="flex items-center space-x-4">
                  {task.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  <div className="flex -space-x-2">
                    {task.users.map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar}
                        alt="User"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <FaEllipsisV className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex justify-center mt-8">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 flex items-center">
            <FaSpinner className="mr-2 animate-spin" />
            Load More
          </button>
        </div> */}
      </div>

      <button className="fixed bottom-8 right-8 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800">
        <FaCog />
      </button>
    </div>
  );
};

export default TodoApp;





