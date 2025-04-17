import React from "react";
import {
  FaCommentAlt,
  FaEllipsisH,
  FaDownload,
  FaChartBar,
  FaClock,
  FaMoneyBill,
  FaGift,
  FaMinusCircle,
  FaPiggyBank,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Compensation = () => {
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
            const isCompensation = item === "Compensation";
            const isActive = item.includes("Compensation");

            let route = "#";
            if (isGoals) route = "/goalsoverview";
            else if (isCompensation) route = "/compensation";

            return (
              <Link
                key={idx}
                to={route}
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
              <div className="text-2xl font-bold text-gray-900">Q3</div>
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
                  label: "Gross Pay",
                  value: "£5,250/month",
                  color: "bg-green-500",
                },
                {
                  label: "Net Pay",
                  value: "£3,850/month",
                  color: "bg-blue-500",
                },
                {
                  label: "Deductions",
                  value: "£1,400/month",
                  color: "bg-red-500",
                },
                {
                  label: "YTD Total",
                  value: "£47,250",
                  color: "bg-purple-500",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white`}
                  >
                    £
                  </div>
                  <div className="ml-4">
                    <div className="text-gray-900 font-medium">
                      {item.label}
                    </div>
                    <div className="text-gray-400 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Compensation Details
                </h2>
                <div className="text-gray-400">Current Pay Period</div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="bg-black text-white px-4 py-2 rounded flex items-center">
                  <FaDownload className="mr-2" /> Download Statement
                </button>
                <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded">
                  <FaEllipsisH />
                </button>
              </div>
            </div>

            <div className="relative mb-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-between text-sm text-gray-600">
                {[
                  "Goal setting\nClosed 1 Apr",
                  "Nomination for promotion\nClosed 17 Jun",
                  "Performance review\nClosed 17 Jun",
                  "Calibration\nClosed 25 Jul",
                  "Published results\nClosed 2 Aug",
                ].map((text, idx) => (
                  <span
                    key={idx}
                    className="px-3 bg-white text-center whitespace-pre-line"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaChartBar className="text-gray-400 mr-2" />
                  <h3 className="text-lg font-medium text-gray-900">
                    Performance summary
                  </h3>
                </div>
                <button className="text-gray-500 hover:text-gray-900">
                  Detail view
                </button>
              </div>
            </div>

            <div className="flex space-x-4 mb-6">
              {["Monthly", "Quarterly", "Annual", "Custom"].map(
                (label, idx) => (
                  <button
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded flex items-center"
                  >
                    {label === "Monthly" && <FaClock className="mr-2" />}{" "}
                    {label}
                  </button>
                )
              )}
            </div>

            <div className="bg-gray-100 rounded-lg p-4 space-y-4">
              {[
                {
                  label: "Base Salary",
                  value: "£4,500",
                  icon: <FaMoneyBill className="text-green-500 mr-2" />,
                },
                {
                  label: "Bonus",
                  value: "£750",
                  icon: <FaGift className="text-blue-500 mr-2" />,
                },
                {
                  label: "Tax",
                  value: "-£950",
                  icon: <FaMinusCircle className="text-red-500 mr-2" />,
                },
                {
                  label: "Pension",
                  value: "-£450",
                  icon: <FaPiggyBank className="text-purple-500 mr-2" />,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item.icon}
                    <span className="text-gray-900 font-medium">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compensation;
