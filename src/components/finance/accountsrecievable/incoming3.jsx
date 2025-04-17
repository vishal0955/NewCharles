import { useEffect } from "react";
import * as echarts from "echarts";

const SalesOverview = () => {
  useEffect(() => {
    const chartDom = document.getElementById("cashFlowChart");
    if (chartDom) {
      const chart = echarts.init(chartDom);
      const option = {
        animation: false,
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          top: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["Today", "1 Jan", "6 Jan", "11 Jan", "16 Jan", "21 Jan", "26 Jan"],
          axisLine: { lineStyle: { color: "#eaeaea" } },
          axisTick: { show: false },
        },
        yAxis: {
          type: "value",
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { lineStyle: { color: "#eaeaea" } },
        },
        series: [
          {
            data: [12000, 10000, 5000, 6000, 5000, 15000, 14000],
            type: "line",
            smooth: true,
            symbol: "none",
            lineStyle: { color: "#00C4B4", width: 3 },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(0, 196, 180, 0.2)" },
                  { offset: 1, color: "rgba(0, 196, 180, 0)" },
                ],
              },
            },
          },
        ],
      };
      chart.setOption(option);
      window.addEventListener("resize", () => chart.resize());
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-sm p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold mr-6">Sales Overview</h1>
            <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium">
              <i className="fas fa-plus mr-2"></i>New
            </button>
            <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700">
              <i className="fas fa-file-invoice mr-2"></i>Send Statements
            </button>
            <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700">
              <i className="fas fa-file-import mr-2"></i>Import
            </button>
          </div>
          <div className="relative">
            <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm" />
            <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
          </div>
        </div>

        {/* Short-term cash flow projection */}
        <div className="mb-6">
          <div className="text-sm text-custom font-medium mb-2">Analytics Plus</div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Short-term cash flow projection</h1>
            <button className="text-blue-500 text-sm font-medium">
              <i className="fas fa-play-circle mr-1"></i>Watch video tutorial
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <select className="border border-gray-300 rounded-md text-sm py-2 px-3 pr-8">
              <option>13 bank accounts</option>
            </select>
            <select className="border border-gray-300 rounded-md text-sm py-2 px-3 pr-8">
              <option>Next 30 days</option>
            </select>
          </div>
          <button className="text-custom text-sm font-medium">
            <i className="fas fa-edit mr-1"></i>Edit projection
          </button>
        </div>

        {/* Financial Summary */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-sm text-gray-500 mb-1">Total money in</div>
            <div className="text-3xl font-semibold">£24,072</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Total money out</div>
            <div className="text-3xl font-semibold text-red-500">-£22,042</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Projected end balance</div>
            <div className="text-3xl font-semibold text-custom">£13,295</div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-64 mb-8" id="cashFlowChart"></div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-pink-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Total Invoice</div>
            <div className="text-xl font-semibold mb-1">$3,237.94</div>
            <div className="text-sm text-green-500">
              <i className="fas fa-arrow-up mr-1"></i>+20.46% from last month
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Distribution</div>
            <div className="text-xl font-semibold mb-1">$3,237.94</div>
            <div className="text-sm text-red-500">
              <i className="fas fa-arrow-down mr-1"></i>-4.46% from last month
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Paid</div>
            <div className="text-xl font-semibold mb-1">$3,237.94</div>
            <div className="text-sm text-green-500">
              <i className="fas fa-arrow-up mr-1"></i>+12% from last month
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Total Opening</div>
            <div className="text-xl font-semibold mb-1">$3,237.94</div>
            <div className="text-sm text-red-500">
              <i className="fas fa-arrow-down mr-1"></i>-15.45% from last month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
