import { useEffect } from "react";
import * as echarts from "echarts";

const AnalyticsView = () => {
    useEffect(() => {
        const months = ["Dec 2023", "Feb 2024", "Apr 2024", "Jun 2024", "Aug 2024", "Oct 2024", "Dec 2024"];

        const initChart = (id, data, color) => {
            const chart = echarts.init(document.getElementById(id));
            chart.setOption({
                animation: false,
                tooltip: { trigger: "axis" },
                xAxis: { 
                    type: "category", 
                    data: months,
                    axisLabel: {
                        rotate: 30, // Rotate labels for better fit on mobile
                        interval: 0 // Show all labels
                    }
                },
                yAxis: { type: "value" },
                series: [{ data, type: "bar", itemStyle: { color } }],
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "15%", // Extra space for rotated labels
                    containLabel: true
                }
            });
            return chart;
        };

        const ticketsChart = initChart("ticketsChart", [180, 183, 177, 168, 149, 155, 114], "#FF9F87");
        const replyChart = initChart("replyChart", [0, 0, 9, 5.1, 2.5, 2.2, 0], "#FF9F87");
        const slaChart = initChart("slaChart", [0, 1, 20, 13, 8, 5, 5], "#2196f3");
        const messagesChart = initChart("messagesChart", [391, 386, 332, 123], "#FF9F87");

        const handleResize = () => {
            ticketsChart.resize();
            replyChart.resize();
            slaChart.resize();
            messagesChart.resize();
        };

        // Add resize observer for better performance
        const resizeObserver = new ResizeObserver(handleResize);
        const chartContainers = document.querySelectorAll(".chart-container");
        chartContainers.forEach(container => {
            resizeObserver.observe(container);
        });

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className="min-h-screen">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white border-b border-gray-200">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-4 space-y-4 md:space-y-0">
                        <div className="flex flex-wrap gap-2">
                            {["Team", "Support Rep", "Channel", "Pipeline", "Category"].map((item) => (
                                <button 
                                    key={item} 
                                    className="px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded"
                                >
                                    {item} <i className="fas fa-chevron-down ml-1"></i>
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded">
                                <i className="fas fa-filter mr-1"></i> Dashboard filters
                            </button>
                            <button className="px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded">
                                More <i className="fas fa-chevron-down ml-1"></i>
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-3 overflow-auto">
                    <div className="mb-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Analyze</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {/* Charts */}
                        <ChartCard title="Tickets created over time" chartId="ticketsChart" />
                        <ChartCard title="First reply average over time" chartId="replyChart" />
                        <ChartCard title="First response SLA completion status" chartId="slaChart" />
                        <ChartCard title="Messages received over time" chartId="messagesChart" />
                    </div>
                </main>
            </div>
        </div>
    );
};

// Chart Card Component
const ChartCard = ({ title, chartId }) => {
    return (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm chart-container">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-medium">{title}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                    <i className="fas fa-ellipsis-v"></i>
                </button>
            </div>
            <div id={chartId} className="h-48 sm:h-64"></div>
        </div>
    );
};

export default AnalyticsView;