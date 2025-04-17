import React, { useEffect } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import * as echarts from "echarts";
import { Link } from "react-router-dom";

const WorkDetails = () => {
  useEffect(() => {
    // Initialize Department Chart
    const departmentChart = echarts.init(
      document.getElementById("departmentChart")
    );
    const departmentOption = {
      animation: false,
      tooltip: { trigger: "item" },
      legend: { bottom: "0", left: "center" },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          center: ["50%", "40%"],
          avoidLabelOverlap: false,
          itemStyle: { borderRadius: 10, borderColor: "#fff", borderWidth: 2 },
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 72, name: "IT" },
            { value: 48, name: "HR" },
            { value: 36, name: "Finance" },
            { value: 52, name: "Marketing" },
            { value: 40, name: "Operations" },
          ],
        },
      ],
    };
    departmentChart.setOption(departmentOption);

    // Initialize Attendance Chart
    const attendanceChart = echarts.init(
      document.getElementById("attendanceChart")
    );
    const attendanceOption = {
      animation: false,
      tooltip: { trigger: "axis" },
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yAxis: { type: "value" },
      series: [
        {
          name: "Attendance Rate",
          type: "line",
          smooth: true,
          data: [88, 92, 85, 89, 90, 87],
          areaStyle: {},
        },
      ],
    };
    attendanceChart.setOption(attendanceOption);

    // Resize charts on window resize
    window.addEventListener("resize", () => {
      departmentChart.resize();
      attendanceChart.resize();
    });

    return () => {
      window.removeEventListener("resize", () => {
        departmentChart.resize();
        attendanceChart.resize();
      });
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6 animate-fadeIn">
      <div className="w-full max-w-7xl">
        {/* Employee Profile Card */}
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
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <Link
                to={""}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Personal Details
              </Link>
              <a
                href="#"
               className="px-6 py-4 border-b-2 border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Work Details
              </a>
              <Link
                to={'/document'}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Documents
              </Link>
              <Link
                to={'/attendance'}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Attendance & Leave
              </Link>
            </nav>
          </div>

          {/* Work Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <DetailItem label="Department" value="Information Technology" />
                <DetailItem label="Position" value="Senior Developer" />
                <DetailItem label="Employee Type" value="Full-time" />
                <DetailItem label="Work Location" value="New York Office" />
              </div>
              <div className="space-y-6">
                <DetailItem
                  label="Reporting To"
                  value="Sarah Johnson (Technical Director)"
                />
                <DetailItem
                  label="Work Schedule"
                  value="Monday - Friday (9:00 AM - 5:00 PM EST)"
                />
                <DetailItem label="Team" value="Frontend Development" />
                <DetailItem
                  label="Skills"
                  value="JavaScript, React, Node.js, TypeScript, HTML5, CSS3"
                />
              </div>
            </div>

            {/* Charts */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Department Overview
                </h3>
                <div id="departmentChart" className="w-full h-64"></div>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Attendance Overview
                </h3>
                <div id="attendanceChart" className="w-full h-64"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Component for displaying labels and values
const DetailItem = ({ label, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <p className="text-gray-900 font-medium">{value}</p>
  </div>
);

export default WorkDetails;
