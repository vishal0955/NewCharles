import React, { useEffect } from "react";
import * as echarts from "echarts";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  useEffect(() => {
    // Employee Distribution Chart
    const employeeDistribution = echarts.init(
      document.getElementById("employeeDistribution")
    );
    employeeDistribution.setOption({
      animation: false,
      tooltip: { trigger: "item" },
      legend: { orient: "vertical", right: 10, top: "center" },
      series: [
        {
          name: "Department",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: { borderRadius: 10, borderColor: "#fff", borderWidth: 2 },
          label: { show: false, position: "center" },
          emphasis: {
            label: { show: true, fontSize: "20", fontWeight: "bold" },
          },
          labelLine: { show: false },
          data: [
            { value: 735, name: "Engineering" },
            { value: 580, name: "Sales" },
            { value: 484, name: "Marketing" },
            { value: 300, name: "Operations" },
            { value: 235, name: "HR" },
          ],
        },
      ],
    });

    // Hiring Trends Chart
    const hiringTrends = echarts.init(document.getElementById("hiringTrends"));
    hiringTrends.setOption({
      animation: false,
      tooltip: { trigger: "axis" },
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: { type: "value" },
      series: [
        {
          name: "New Hires",
          type: "line",
          smooth: true,
          data: [25, 32, 28, 35, 42, 38, 40, 45, 48, 43, 39, 41],
          areaStyle: { opacity: 0.1 },
          itemStyle: { color: "#4F46E5" },
          lineStyle: { width: 3 },
        },
      ],
    });

    // Recruitment Pipeline Chart
    const recruitmentPipeline = echarts.init(
      document.getElementById("recruitmentPipeline")
    );
    recruitmentPipeline.setOption({
      animation: false,
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: {
        type: "category",
        data: [
          "Applied",
          "Screening",
          "Interview",
          "Technical",
          "Offer",
          "Accepted",
        ],
      },
      yAxis: { type: "value" },
      series: [
        {
          name: "Candidates",
          type: "bar",
          data: [120, 80, 45, 28, 15, 12],
          itemStyle: { color: "#8B5CF6" },
        },
      ],
    });

    // Resize Charts on Window Resize
    window.addEventListener("resize", () => {
      employeeDistribution.resize();
      hiringTrends.resize();
      recruitmentPipeline.resize();
    });
  }, []);
   const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`${darkMode ? "dark-mode" : "bg-gray-50" } flex-1 max-w-full  overflow-y-auto p-6`}>
      <div className="max-w-full ">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              title: "Total Employees",
              value: "2,420",
              icon: "fas fa-users",
              bg: "bg-indigo-100",
              textColor: "text-indigo-600",
              path: "/hr/company",
            },
            {
              title: "Active Projects",
              value: "45",
              icon: "fas fa-project-diagram",
              bg: "bg-green-100",
              textColor: "text-green-600",
              path: "/project",
            },
            {
              title: "Monthly Payroll",
              value: "$840.2K",
              icon: "fas fa-dollar-sign",
              bg: "bg-yellow-100",
              textColor: "text-yellow-600",
              path: "/finance/salarydisbursement",

            },
            {
              title: "Attendance Rate",
              value: "96.8%",
              icon: "fas fa-clock",
              bg: "bg-red-100",
              textColor: "text-red-600",
              path: "/hr/company",
            },
            {
              title: "Open Positions",
              value: "24",
              icon: "fas fa-file-invoice",
              bg: "bg-purple-100",
              textColor: "text-purple-600",
              path: "/hr/company",
            },
          ].map((item, index) => (
            <div key={index} className={`${darkMode ? "card-dark text-[#E0E0E0]" : "bg-white" } rounded-lg shadow p-6`}>
              <div className="flex items-center">
                <div className={`flex-shrink-0 ${item.bg} rounded-lg p-3`}>
                  <i className={`${item.icon} ${item.textColor} text-xl`}></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium ">
                    {item.title}
                  </h3>
                  <p className="text-2xl font-semibold ">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
          <div className=" rounded-lg shadow p-6">
            <h3 className="text-lg font-medium  mb-4">
              Employee Distribution
            </h3>
            <div id="employeeDistribution" className="h-80"></div>
          </div>
          <div className=" rounded-lg shadow p-6">
            <h3 className="text-lg font-medium  mb-4">
              Monthly Hiring Trends
            </h3>
            <div id="hiringTrends" className="h-80"></div>
          </div>
          <div className=" rounded-lg shadow p-6">
            <h3 className="text-lg font-medium  mb-4">
              Recruitment Pipeline
            </h3>
            <div id="recruitmentPipeline" className="h-80"></div>
          </div>
        </div>

        {/* Recent Activities Table */}
        <div className="mt-6 rounded-lg shadow border">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium ">
              Recent Activities
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr>
                  {["Activity", "Person", "Department", "Date", "Status"].map(
                    (header, index) => (
                      <th
                        key={index}
                        className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    New employee onboarding
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Sarah Johnson
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Engineering
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Jan 15, 2024
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600">
                    Completed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
