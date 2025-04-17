// dependies to install npm install echarts react-icons
import React, { useEffect } from "react";
import * as echarts from "echarts";
import { FaPlus, FaSearch } from "react-icons/fa";

const SalesOverview = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("barChart"));
    const option = {
      animation: false,
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: {
        type: "category",
        data: ["Oct", "Sep", "Oct", "Nov", "Dec", "Future"],
        axisLine: { lineStyle: { color: "#E5E7EB" } },
      },
      yAxis: {
        type: "value",
        axisLine: { show: false },
        splitLine: { lineStyle: { color: "#E5E7EB" } },
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110],
          type: "bar",
          itemStyle: { color: "#00B5D8" },
          barWidth: "40%",
        },
      ],
    };
    chart.setOption(option);
    window.addEventListener("resize", () => chart.resize());

    return () => {
      window.removeEventListener("resize", () => chart.resize());
    };
  }, []);

  return (
    <div className="container">
      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center mb-6">
            {/* Title + Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full lg:w-auto">
              <h1 className="text-2xl font-semibold">
                Sales Overview
              </h1>

              <div className="flex flex-wrap gap-2">
                <button className="rounded bg-custom text-white px-4 py-2 text-sm font-medium flex items-center">
                  <FaPlus className="mr-2" /> New
                </button>

                <button className="rounded border border-gray-300 px-4 py-2 text-sm font-medium  hover:bg-gray-50">
                  Send Statements
                </button>

                <button className="rounded bg-white border border-gray-300 px-4 py-2 text-sm font-medium">
                  Import
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="rounded pl-10 pr-4 py-2 border border-gray-300 w-full sm:w-64"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                label: "Total Invoice",
                amount: "$3,237.94",
                change: "+32.40%",
                color: "bg-custom",
              },
              {
                label: "Outstanding",
                amount: "$3,237.94",
                change: "-4.40%",
                color: "bg-red-500",
              },
              {
                label: "Draft",
                amount: "$3,237.94",
                change: "-12%",
                color: "bg-yellow-500",
              },
              {
                label: "Total Overdue",
                amount: "$3,237.94",
                change: "-15.40%",
                color: "bg-red-500",
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-medium text-gray-500">
                  {card.label}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-semibold">{card.amount}</span>
                  <span
                    className={`ml-2 text-sm font-medium ${
                      card.color === "bg-custom"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {card.change}
                  </span>
                </div>
                <div className={`mt-2 h-1 ${card.color} rounded-full`}></div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200 overflow-x-auto">
            <nav className="-mb-px flex space-x-6 min-w-max">
              {["Invoices", "Paid", "Repeating", "See all"].map((tab, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`py-4 px-1 text-sm font-medium ${
                    idx === 0
                      ? "text-custom border-b-2 border-custom"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </a>
              ))}
            </nav>
          </div>

          {/* Graph and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Money Coming In
              </h3>
              <div
                id="barChart"
                style={{ width: "100%", height: "300px" }}
              ></div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Customers Owing the Most
                </h3>
                <div className="flex gap-2">
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    List
                  </button>
                  <button className="text-sm text-custom">Pie</button>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Client X",
                  "Client Y",
                  "Client Z",
                  "Client A",
                  "Client B",
                ].map((client, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{client}</span>
                    <span className="text-sm font-medium">£123</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quotes Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Quotes</h3>
              <a href="#" className="text-sm text-custom font-medium">
                See all
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Draft", "Sent", "Accepted", "Expired"].map((status, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    {status}
                  </h3>
                  <span className="text-2xl font-semibold">£1,234</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;

// connected file SalesOverview.jsx
