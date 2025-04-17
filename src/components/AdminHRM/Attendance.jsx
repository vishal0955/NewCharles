import React from "react";
import { FaCheck, FaTimes, FaClock, FaPlane } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HRMDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-7xl">
        {/* Employee Profile Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="w-32 h-32 rounded-lg object-cover mr-8 shadow-lg ring-4 ring-gray-100"
              alt="Employee"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">
                    John Doe
                  </h1>
                  <p className="text-gray-600 text-lg mb-2">Senior Developer</p>
                  <div className="flex items-center mt-2">
                    <span className="px-4 py-1.5 text-sm font-medium text-green-800 bg-green-100 rounded-full shadow-sm">
                      Active
                    </span>
                    <span className="ml-4 text-sm text-gray-500">#EMP001</span>
                  </div>
                </div>
                <button className="px-4 py-2.5 text-white bg-gray-800 border border-black rounded-lg hover:bg-black transition-colors duration-200 font-medium">
                  <FaPenToSquare className="mr-2 inline" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <Link
                to={""}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Personal Details
              </Link>
              <Link
                to={"/workdetails"}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Work Details
              </Link>
              <Link
                to={"/document"}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Documents
              </Link>
              <Link
                to={"/attendance"}
                className="px-6 py-4 border-b-2 border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Attendance & Leave
              </Link>
            </nav>
          </div>

          {/* Attendance Cards */}
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AttendanceCard
              title="Present Days"
              count="21"
              icon={<FaCheck />}
              color="green"
            />
            <AttendanceCard
              title="Absent Days"
              count="2"
              icon={<FaTimes />}
              color="red"
            />
            <AttendanceCard
              title="Late Coming"
              count="3"
              icon={<FaClock />}
              color="yellow"
            />
            <AttendanceCard
              title="Leaves Left"
              count="12"
              icon={<FaPlane />}
              color="purple"
            />
          </div>

          {/* Leave History & Attendance Overview */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <LeaveHistory />
            <AttendanceOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔹 **Tab Navigation Component**
const TabLink = ({ title, isActive }) => (
  <a
    href="#"
    className={`px-6 py-4 text-gray-500 hover:text-gray-700 ${
      isActive ? "border-b-2 border-blue-500 text-blue-600 font-medium" : ""
    }`}
  >
    {title}
  </a>
);

// 🔹 **Attendance Cards Component**
const AttendanceCard = ({ title, count, icon, color }) => {
  const colors = {
    green: "bg-green-50 border-green-200 text-green-600",
    red: "bg-red-50 border-red-200 text-red-600",
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-600",
    purple: "bg-purple-50 border-purple-200 text-purple-600",
  };

  return (
    <div
      className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition duration-300 ${colors[color]}`}
    >
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 ${colors[color]} rounded-full flex items-center justify-center mr-4  border`}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-3xl font-semibold mt-1">{count}</p>
        </div>
      </div>
    </div>
  );
};

// 🔹 **Leave History Component**
const LeaveHistory = () => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <h3 className="text-lg font-medium mb-4">Leave History</h3>
    {["Annual Leave", "Sick Leave", "Personal Leave"].map((leave, index) => (
      <div
        key={index}
        className={`flex items-center justify-between p-4 rounded-xl ${
          index === 2
            ? "bg-red-100 text-red-800"
            : "bg-green-100 text-green-800"
        } hover:bg-opacity-75 transition duration-300 mb-2`}
      >
        <p className="font-medium">{leave}</p>
        <span className="text-sm">{index === 2 ? "Rejected" : "Approved"}</span>
      </div>
    ))}
  </div>
);

// 🔹 **Attendance Overview Component**
const AttendanceOverview = () => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <h3 className="text-lg font-medium mb-4">Attendance Overview</h3>
    <div className="grid grid-cols-7 gap-2">
      {[...Array(7)].map((_, index) => (
        <div key={index} className="text-center p-2">
          <p className="text-sm text-gray-500 mb-1">Day {index + 1}</p>
          <div
            className={`w-10 h-10 rounded-full ${
              index % 2 === 0 ? "bg-green-100" : "bg-red-100"
            } flex items-center justify-center mx-auto`}
          >
            <span
              className={index % 2 === 0 ? "text-green-600" : "text-red-600"}
            >
              {index + 1}
            </span>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4 space-x-4">
      <LegendItem color="bg-green-100" text="Present" />
      <LegendItem color="bg-red-100" text="Absent" />
      <LegendItem color="bg-yellow-100" text="Late" />
    </div>
  </div>
);

// 🔹 **Legend Item Component**
const LegendItem = ({ color, text }) => (
  <div className="flex items-center">
    <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
    <span className="text-sm text-gray-600">{text}</span>
  </div>
);

export default HRMDashboard;
