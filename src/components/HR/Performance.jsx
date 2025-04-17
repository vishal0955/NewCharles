import React, {useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Goals from "./goals";
import MyDocuments from "./documents";
import { useNavigate } from "react-router-dom";
import Compensation from "./compensation";
import Talent from "./talent";
import Roadmap from "./Roadmap";
import TeamTimeOffCalendar from "./timeoff";
import { useSelector } from "react-redux";


const PerformanceOverview = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(1);

  const Tabs = ["Profile", "Performance", "Goals", "Roadmap", "Compensation", `Talent` , "Documents", "Time off • 1"]
   

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="container">
  <div className=" min-h-screen">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className=" rounded-lg p-6 mb-8 border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="flex items-center">
            <img
              className="h-16 w-16 rounded-full"
              src="https://creatie.ai/ai/api/search-image?query=professional headshot"
              alt="Wade Wilson"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold ">Wade Wilson</h1>
              <div className="flex flex-col sm:flex-row sm:items-center mt-1 gap-1">
                <span className="px-2 py-1 text-xs font-medium bg-green-500 text-white rounded-full w-fit">
                  Active
                </span>
                <span className="sm:ml-2 ">
                  Designer (Product) • Product • People Product • HR • UK – Remote
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            <button className="rounded px-4 py-2 flex items-center ">
              <i className="fas fa-comment-alt mr-2"></i>
              Add feedback
            </button>
            <button className="rounded  px-3 py-2">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 border-t border-gray-200 pt-4">
          {Tabs.map((item, index) => (
            <a
              key={index}
              className={`cursor-pointer text-sm ${
                activeTab === index
                  ? "border-b-2 bg-blue-400 px-3 py-1 rounded-full text-white"
                  : "border-b-2 border-transparent "
              }`}
              onClick={() => setActiveTab(index)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div>
        {activeTab === 0 && navigate("/hr/myprofile")}

        {activeTab === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <div className=" rounded-lg p-6 mb-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold ">Q4 2023</div>
                  <div className="text-green-500 font-medium">Exceeding</div>
                </div>
                <div className="">Overall grade</div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-9">
              <div className=" rounded-lg p-6 mb-8 border border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[ 
                    { icon: "fa-chart-line", title: "Performance Score", value: "85/100", bg: "bg-green-500" },
                    { icon: "fa-tasks", title: "Tenure", value: "2.5 years", bg: "bg-blue-500" },
                    { icon: "fa-trophy", title: "Reviews Completed", value: "10 total", bg: "bg-purple-500" },
                    { icon: "fa-star", title: "Rating", value: "Exceeding", bg: "bg-yellow-500" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center `}>
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div className="ml-4">
                        <div className=" font-medium">{item.title}</div>
                        <div className=" text-sm">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Analytics */}
              <div className=" rounded-lg p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                  <div>
                    <h2 className="text-xl font-bold ">Performance Analytics</h2>
                    <div className="">Current Quarter</div>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    <button className="rounded bg-blue-600 text-white px-4 py-2">
                      <i className="fas fa-download mr-2"></i>Export Report
                    </button>
                    <button className="rounded  px-3 py-2">
                      <i className="fas fa-ellipsis-h"></i>
                    </button>
                  </div>
                </div>

                {/* KPIs */}
                <div className=" rounded-lg p-4">
                  {[ 
                    { icon: "fa-bullseye", title: "Leadership Skills", value: "90%", color: "text-green-500" },
                    { icon: "fa-users", title: "Project Delivery", value: "85%", color: "text-blue-500" },
                    { icon: "fa-lightbulb", title: "Technical Skills", value: "88%", color: "text-yellow-500" },
                    { icon: "fa-chart-pie", title: "Communication", value: "87%", color: "text-purple-500" },
                  ].map((kpi, index) => (
                    <div key={index} className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <i className={`fas ${kpi.icon} ${kpi.color} mr-2`}></i>
                        <span className=" font-medium">{kpi.title}</span>
                      </div>
                      <span className="">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && <Goals />}
        {activeTab === 3 && <Roadmap />}
        {activeTab === 4 && <Compensation />}
        {activeTab === 5 && <Talent />}
        {activeTab === 6 && <MyDocuments />}
        {activeTab === 7 && <TeamTimeOffCalendar />}
      </div>
    </div>
  </div>
</div>
  );
};

export default PerformanceOverview;
