import React, { useEffect } from "react";
import * as echarts from "echarts";
import { useSelector } from "react-redux";

const HRAnalyticsDashboard = () => {
  useEffect(() => {
    const initCharts = () => {
      const departmentChart = echarts.init(document.getElementById("departmentChart"));
      departmentChart.setOption({
        animation: false,
        tooltip: { trigger: "item" },
        legend: { orient: "horizontal", bottom: 0 },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: { show: false },
            emphasis: {
              label: { show: true, fontSize: "16", fontWeight: "bold" },
            },
            labelLine: { show: false },
            data: [
              { value: 35, name: "Engineering", itemStyle: { color: "#4F46E5" } },
              { value: 20, name: "Sales", itemStyle: { color: "#10B981" } },
              { value: 15, name: "Marketing", itemStyle: { color: "#F59E0B" } },
              { value: 15, name: "Operations", itemStyle: { color: "#EF4444" } },
              { value: 15, name: "HR", itemStyle: { color: "#60A5FA" } },
            ],
          },
        ],
      });

      const turnoverChart = echarts.init(document.getElementById("turnoverChart"));
      turnoverChart.setOption({
        animation: false,
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], boundaryGap: false },
        yAxis: { type: "value", min: 0, max: 6 },
        series: [
          {
            data: [4.1, 3.8, 4.2, 4.5, 4.3, 4.0, 3.9, 4.1, 4.2, 4.1, 4.3, 4.2],
            type: "line",
            smooth: true,
            lineStyle: { color: "#4F46E5", width: 3 },
            symbol: "circle",
            symbolSize: 8,
            itemStyle: { color: "#4F46E5" },
          },
        ],
      });

      const workingHoursChart = echarts.init(document.getElementById("workingHoursChart"));
      workingHoursChart.setOption({
        animation: false,
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
        yAxis: { type: "value", max: 10 },
        series: [{ data: [7.5, 8.0, 7.8, 7.6, 7.2], type: "bar", barWidth: "40%", itemStyle: { color: "#4F46E5" } }],
      });

      const satisfactionChart = echarts.init(document.getElementById("satisfactionChart"));
      satisfactionChart.setOption({
        animation: false,
        series: [
          {
            type: "gauge",
            progress: { show: true, width: 18 },
            axisLine: { lineStyle: { width: 18 } },
            axisTick: { show: false },
            splitLine: { length: 15, lineStyle: { width: 2, color: "#999" } },
            pointer: { icon: "path://M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", length: "60%", width: 6, offsetCenter: [0, "5%"] },
            axisLabel: {
              color: "#464646",
              fontSize: 14,
              distance: -60,
              formatter: (value) => (value === 0 ? "0" : value === 100 ? "100" : ""),
            },
            detail: { fontSize: 30, offsetCenter: [0, "30%"], valueAnimation: true, formatter: (value) => `${value}%`, color: "inherit" },
            data: [{ value: 78, name: "Satisfaction", title: { offsetCenter: [0, "-30%"] } }],
          },
        ],
      });

      window.addEventListener("resize", () => {
        departmentChart.resize();
        turnoverChart.resize();
        workingHoursChart.resize();
        satisfactionChart.resize();
      });
    };

    initCharts();

    return () => window.removeEventListener("resize", () => {});
  }, []);


  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="font-sans">
    

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold ">HR Analytics Overview</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className={`${darkMode ? "card-dark" : null } !rounded-button p-6 shadow-sm`}>
            <h3 className="text-lg font-medium mb-6">Department Distribution</h3>
            <div id="departmentChart" className="h-80"></div>
          </div>

          <div className={`${darkMode ? "card-dark" : null } !rounded-button p-6 shadow-sm`}>
            <h3 className="text-lg font-medium  mb-6">Employee Turnover Trend</h3>
            <div id="turnoverChart" className="h-80"></div>
          </div>

          <div className={`${darkMode ? "card-dark" : null } !rounded-button p-6 shadow-sm`}>
            <h3 className="text-lg font-medium  mb-6">Working Hours Analysis</h3>
            <div id="workingHoursChart" className="h-80"></div>
          </div>

          <div className={`${darkMode ? "card-dark" : null } !rounded-button p-6 shadow-sm`}>
            <h3 className="text-lg font-medium  mb-6">Employee Satisfaction</h3>
            <div id="satisfactionChart" className="h-80"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HRAnalyticsDashboard;
