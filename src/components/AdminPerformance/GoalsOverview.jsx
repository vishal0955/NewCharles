import React from "react";
import {
  FaCommentAlt,
  FaEllipsisH,
  FaChartLine,
  FaTasks,
  FaTrophy,
  FaStar,
  FaPlus,
  FaChartBar,
  FaList,
  FaFolder,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const GoalsOverview = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              className="h-16 w-16 rounded-full"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Wade Wilson"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">Wade Wilson</h1>
              <div className="flex items-center mt-1">
                <span className="px-2 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
                  Active
                </span>
                <span className="ml-2 text-gray-400">
                  Designer (Product) • Product • People Product • HR • UK –
                  Remote
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 flex items-center rounded hover:bg-gray-200">
              <FaCommentAlt className="mr-2" /> Add feedback
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-800 text-white px-3 py-2  rounded hover:bg-black"
            >
              Back
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-8 border-t border-gray-200 pt-4">
          {[
            "Profile",
            "Performance",
            "Goals • 78%",
            "Roadmap",
            "Compensation",
            "Talent • 4 • 52%",
            "Documents",
            "Time off • 1",
          ].map((item, idx) => {
            const isGoals = item.includes("Goals");
            const isActive = item.includes("Goals");

            return (
              <Link
                key={idx}
                to={isGoals ? "/goalsoverview" : "#"}
                className={`text-sm ${
                  isActive
                    ? "text-gray-900 font-medium"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3 space-y-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold text-gray-900">Q4 2023</div>
              <div className="text-green-500 font-medium">Exceeding</div>
            </div>
            <div className="text-gray-400">Overall grade</div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
            {[
              {
                q: "Q4",
                mid: "Mid III",
                status: "Pending",
                color: "text-gray-500",
              },
              {
                q: "Q3",
                mid: "Mid II",
                status: "Exceeding",
                color: "text-green-500",
              },
              {
                q: "Q2",
                mid: "Mid II",
                status: "Performing",
                color: "text-blue-500",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
              >
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {item.q}
                  </div>
                  <div className="text-xs text-gray-400">{item.q} '24</div>
                </div>
                <div className="text-sm font-medium text-gray-400">
                  {item.mid}
                </div>
                <div className={`text-sm ${item.color}`}>{item.status}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-9 space-y-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaChartLine />,
                  title: "Performance Score",
                  value: "85/100",
                  color: "bg-green-500",
                },
                {
                  icon: <FaTasks />,
                  title: "Tenure",
                  value: "2.5 years",
                  color: "bg-blue-500",
                },
                {
                  icon: <FaTrophy />,
                  title: "Reviews Completed",
                  value: "10 total",
                  color: "bg-purple-500",
                },
                {
                  icon: <FaStar />,
                  title: "Rating",
                  value: "Exceeding",
                  color: "bg-yellow-500",
                },
              ].map((card, idx) => (
                <div key={idx} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${card.color} flex items-center justify-center text-white`}
                  >
                    {card.icon}
                  </div>
                  <div className="ml-4">
                    <div className="text-gray-900 font-medium">
                      {card.title}
                    </div>
                    <div className="text-gray-400 text-sm">{card.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Goals Overview
                </h2>
                <div className="text-gray-400">
                  Current Quarter Goals Progress
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="bg-black text-white px-4 py-2 rounded flex items-center">
                  <FaPlus className="mr-2" /> Add New Goal
                </button>
                <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded">
                  <FaEllipsisH />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">
                    Overall Goal Progress
                  </h3>
                  <span className="text-green-500">78%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 rounded-full h-2"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">
                    Goals This Quarter
                  </h3>
                  <span className="text-gray-600">18 total</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="font-medium text-green-500">12</div>
                    <div className="text-sm text-gray-500">Completed</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-500">4</div>
                    <div className="text-sm text-gray-500">In Progress</div>
                  </div>
                  <div>
                    <div className="font-medium text-red-500">2</div>
                    <div className="text-sm text-gray-500">At Risk</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaChartBar className="text-gray-400 mr-2" />
                  <h3 className="text-lg font-medium text-gray-900">
                    Goal Categories
                  </h3>
                </div>
                <button className="text-gray-500 hover:text-gray-900">
                  Detail view
                </button>
              </div>
            </div>

            <div className="flex space-x-4 mb-6">
              {["All Goals", "In Progress", "Completed", "Archived"].map(
                (label, idx) => (
                  <button
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded flex items-center"
                  >
                    {label === "All Goals" && <FaList className="mr-2" />}
                    {label}
                  </button>
                )
              )}
            </div>

            <div className="bg-gray-100 rounded-lg p-4 space-y-4">
              {[
                {
                  label: "Professional Development",
                  value: "4 goals • 75%",
                  iconColor: "text-blue-500",
                },
                {
                  label: "Project Milestones",
                  value: "6 goals • 85%",
                  iconColor: "text-green-500",
                },
                {
                  label: "Learning & Growth",
                  value: "3 goals • 60%",
                  iconColor: "text-yellow-500",
                },
                {
                  label: "Team Leadership",
                  value: "5 goals • 90%",
                  iconColor: "text-purple-500",
                },
              ].map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaFolder className={`${cat.iconColor} mr-2`} />
                    <span className="text-gray-900 font-medium">
                      {cat.label}
                    </span>
                  </div>
                  <span className="text-gray-900">{cat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsOverview;
