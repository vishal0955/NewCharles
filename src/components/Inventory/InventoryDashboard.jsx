import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { useSelector } from "react-redux";

const InventoryDashboard = () => {
  useEffect(() => {
    document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, []);

  const pieChartOptions = {
    tooltip: { trigger: "item" },
    series: [
      {
        type: "pie",
        radius: "60%",
        data: [
          { value: 45, name: "In Stock" },
          { value: 55, name: "Reserved" },
        ],
      },
    ],
  };

  const barChartOptions = {
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May"] },
    yAxis: { type: "value" },
    series: [{ data: [120, 200, 150, 80, 70], type: "bar", color: "#4A90E2" }],
  };

  const horizontalBarChartOptions = {
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    xAxis: { type: "value" },
    yAxis: { type: "category", data: ["Electronics", "Clothing", "Books", "Sports", "Home"] },
    series: [{ type: "bar", data: [70, 55, 40, 35, 25], color: "#4A90E2" }],
  };

  const funnelChartOptions = {
    tooltip: { trigger: "item", formatter: "{b} : {c}%" },
    series: [
      {
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        min: 0,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        data: [
          { value: 80, name: "Landing" },
          { value: 60, name: "Storage" },
          { value: 40, name: "Processing" },
          { value: 20, name: "Shipping" },
        ],
      },
    ],
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className=" w-full min-h-screen">
      <nav className={`${darkMode ? "card-dark" : "bg-white" }bg-white shadow p-4 flex justify-between`}>
      
        <div className="text-gray-500">
          <i className="far fa-calendar-alt mr-2"></i>Today: <span id="currentDate"></span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className={`${darkMode ? "card-dark" : "bg-white" }bg-white rounded-lg shadow p-6 border border-gray-200`}>
            <h2 className="text-lg font-semibold mb-4">Pickups</h2>
            <p className="text-xl font-medium text-center">You have no pickups for today</p>
          </div>
          <div className={`${darkMode ? "card-dark" : "bg-white" }bg-white rounded-lg shadow p-6 border border-gray-200`}>
            <h2 className="text-lg font-semibold mb-4">Returns</h2>
            <p className="text-xl font-medium text-center">You have no returns for today</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${darkMode ? "card-dark" : "bg-white" }bg-white rounded-lg shadow p-6 border border-gray-200`}>
            <h3 className="text-lg font-semibold mb-4">Inventory Distribution</h3>
            <ReactECharts option={pieChartOptions} style={{ height: 300 }} />
          </div>
          <div className={`${darkMode ? "card-dark" : "bg-white" }bg-white rounded-lg shadow p-6 border border-gray-200`}>
            <h3 className="text-lg font-semibold mb-4">Inventory Levels by Category</h3>
            <ReactECharts option={barChartOptions} style={{ height: 300 }} />
          </div>
          <div className={`${darkMode ? "card-dark" : "bg-white" }bg-white rounded-lg shadow p-6 border border-gray-200`}>
            <h3 className="text-lg font-semibold mb-4">Comparative Metrics</h3>
            <ReactECharts option={horizontalBarChartOptions} style={{ height: 300 }} />
          </div>
          <div className={`${darkMode ? "card-dark" : "bg-white" }bg-white rounded-lg shadow p-6 border border-gray-200`}>
            <h3 className="text-lg font-semibold mb-4">Inventory Process Flow</h3>
            <ReactECharts option={funnelChartOptions} style={{ height: 300 }} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default InventoryDashboard;
