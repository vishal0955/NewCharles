import React, { useEffect } from "react";
import * as echarts from "echarts";

const SalesOverview = () => {
  useEffect(() => {
    const profitChartDom = document.getElementById("profitChart");
    const profitChart = echarts.init(profitChartDom);
    const profitOption = {
      animation: false,
      grid: { left: "3%", right: "4%", bottom: "3%", top: "3%", containLabel: true },
      xAxis: { type: "category", data: ["Dec - Nov 2024", "Dec - Nov 2023"], axisLine: { show: false }, axisTick: { show: false }, axisLabel: { show: true } },
      yAxis: { type: "value", show: false },
      series: [{ data: [41.7, 52.6], type: "bar", barWidth: "40%", itemStyle: { color: "#BAE6FD" } }]
    };
    profitChart.setOption(profitOption);

    const incomeChartDom = document.getElementById("incomeChart");
    const incomeChart = echarts.init(incomeChartDom);
    const incomeOption = {
      animation: false,
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: { type: "category", data: ["Dec", "Feb", "Apr", "Jun", "Aug", "Oct"], axisLine: { show: false }, axisTick: { show: false } },
      yAxis: { type: "value", max: 60000, interval: 30000, axisLine: { show: false }, axisTick: { show: false } },
      series: [{ data: [15000, 35000, 38000, 30000, 32000, 20000], type: "line", smooth: true, symbol: "none", areaStyle: { color: "#FCE7F3" }, lineStyle: { color: "#EC4899" } }]
    };
    incomeChart.setOption(incomeOption);

    window.addEventListener("resize", () => {
      profitChart.resize();
      incomeChart.resize();
    });

    return () => {
      profitChart.dispose();
      incomeChart.dispose();
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen max-w-8xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-start space-x-4">
        <h1 className="text-2xl font-semibold text-gray-900">Sales overview</h1>
        <div className="flex items-center space-x-4 ml-4">
          <button className="!rounded-button bg-custom/10 text-custom px-4 py-2 flex items-center font-medium">
            <i className="fas fa-plus mr-2 text-sm"></i> New <i className="fas fa-chevron-down ml-2 text-sm"></i>
          </button>
          <button className="!rounded-button bg-custom/10 text-custom px-4 py-2 font-medium">Send Statements</button>
          <button className="!rounded-button bg-custom/10 text-custom px-4 py-2 font-medium">Import</button>
          <div className="relative">
            <input type="text" placeholder="Search" className="!rounded-button pl-10 pr-4 py-2 border border-gray-300 focus:border-custom focus:ring-1 focus:ring-custom" />
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-gray-600 mb-2">Profit or loss</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-semibold">41,725</span>
            <span className="text-red-500 text-sm">
              <i className="fas fa-arrow-down text-xs"></i> 20.7% from Dec 2022 - Nov 2023
            </span>
          </div>
          <div id="profitChart" className="h-32 mt-4"></div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-gray-600 mb-2">Overall cash balance</h3>
          <div className="text-3xl font-semibold mb-4">34,559</div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Wise clearing to GBP</span>
              <span className="font-medium">15,712</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tide Current Account</span>
              <span className="font-medium">10,414</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tide Instant Saver</span>
              <span className="font-medium">7,434</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-gray-600 mb-2">Average time to get paid</h3>
          <div className="text-3xl font-semibold">31 days</div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-baseline space-x-2 mb-6">
          <h3 className="text-2xl font-semibold">Income</h3>
          <span className="text-green-500">
            <i className="fas fa-arrow-up text-xs"></i> 89.9% from Dec 2022 - Nov 2023
          </span>
        </div>
        <div className="text-3xl font-semibold mb-4">355,938</div>
        <div id="incomeChart" className="h-64"></div>
      </div>
    </div>
  );
};

export default SalesOverview;
