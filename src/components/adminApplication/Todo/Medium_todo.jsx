import React from "react";
import {
  FaSearch,
  FaCog,
  FaPlus,
  FaCalendar,
  FaChevronDown,
  FaStar,
  FaSpinner,
  FaEllipsisV,
} from "react-icons/fa";

const TodoApp = () => {
  const tasks = [
    {
      id: 1,
      title: "Review team performance metrics",
      date: "20 Feb 2024",
      priority: "Medium",
      tags: ["Team", "Onhold"],
      users: ["/avatar1.png", "/avatar2.png"],
      starred: true,
    },
    {
      id: 2,
      title: "Prepare monthly status report",
      date: "28 Feb 2024",
      priority: "Medium",
      tags: ["Reports", "Inprogress"],
      users: ["/avatar3.png"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen w-full max-w-screen-xl mx-auto flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-900">Todo</span>
              </div>
              <div className="ml-6 flex space-x-4">
                <a
                  href="#"
                  className="text-gray-500 px-3 py-2 text-sm font-medium"
                >
                  Application
                </a>
                <span className="text-gray-300">/</span>
                <a
                  href="#"
                  className="text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Todo
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500"
                  placeholder="Search Todo List"
                />
              </div>
              <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
                <FaCog className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-md shadow">
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  Total Todo
                </h2>
                <span className="ml-2 px-2 py-1 text-sm bg-gray-900 text-white rounded-md">
                  51
                </span>
              </div>
              <div className="flex space-x-6">
                <div className="text-sm text-gray-600">
                  Total Task: <span className="font-semibold">55</span>
                </div>
                <div className="text-sm text-gray-600">
                  Pending: <span className="font-semibold">15</span>
                </div>
                <div className="text-sm text-gray-600">
                  Completed: <span className="font-semibold">40</span>
                </div>
              </div>
            </div>

            {/* New Task Button */}
            <div className="border border-gray-300 rounded-md p-4 mb-6">
              <button className="flex items-center text-gray-700">
                <FaPlus className="mr-2" />
                <span>New task</span>
              </button>
            </div>

            {/* Filter Options */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md">
                  All
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">
                  High
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">
                  Medium
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">
                  Low
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md">
                  <FaCalendar className="mr-2" />
                  Due Date
                </button>
                <button className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md">
                  All Tags
                  <FaChevronDown className="ml-2" />
                </button>
              </div>
            </div>

            {/* Task List */}
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-md"
                >
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-gray-600 border-gray-300 rounded-md"
                    />
                    {task.starred && <FaStar className="text-yellow-400" />}
                    <span className="font-medium">{task.title}</span>
                    <span className="text-sm text-gray-500">{task.date}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    {task.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md"
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
                          className="h-8 w-8 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <button className="text-gray-400 hover:text-gray-500">
                      <FaEllipsisV />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 flex items-center">
                <FaSpinner className="mr-2 animate-spin" />
                Load More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TodoApp;
