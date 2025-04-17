import React from "react";

const Compensation = () => {
  return (
    <div className="bg-white min-h-screen">
    

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full"
                src="https://creatie.ai/ai/api/search-image?query=professional headshot of a person smiling warmly against a neutral background&width=100&height=100&orientation=squarish"
                alt="Wade Wilson"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Wade Wilson</h1>
                <div className="flex items-center mt-1">
                  <span className="px-2 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
                    Active
                  </span>
                  <span className="ml-2 text-gray-400">
                    Designer (Product) • Product • People Product • HR • UK – Remote
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="!rounded-button bg-gray-100 text-gray-700 px-4 py-2 flex items-center hover:bg-gray-200">
                <i className="fas fa-comment-alt mr-2"></i> Add feedback
              </button>
              <button className="!rounded-button bg-gray-100 text-gray-700 px-3 py-2 hover:bg-gray-200">
                <i className="fas fa-ellipsis-h"></i>
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
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`text-gray-${index === 0 ? "900 font-medium" : "500 hover:text-gray-900"}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div> */}

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-gray-900">Q3</div>
                <div className="text-green-500 font-medium">Exceeding</div>
              </div>
              <div className="text-gray-400">Overall grade</div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="space-y-4">
                {[
                  { quarter: "Q4", period: "Q4 '24", level: "Mid III", status: "Pending" },
                  { quarter: "Q3", period: "Q3 '24", level: "Mid II", status: "Exceeding" },
                  { quarter: "Q2", period: "Q2 '24", level: "Mid II", status: "Performing" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.quarter}</div>
                      <div className="text-xs text-gray-400">{item.period}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-400">{item.level}</div>
                    <div className={`text-sm text-${item.status === "Exceeding" ? "green-500" : "gray-500"}`}>
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-9">
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
              <div className="grid grid-cols-4 gap-8">
                {[
                  { label: "Gross Pay", value: "£5,250/month", color: "green" },
                  { label: "Net Pay", value: "£3,850/month", color: "blue" },
                  { label: "Deductions", value: "£1,400/month", color: "red" },
                  { label: "YTD Total", value: "£47,250", color: "purple" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-${item.color}-500 flex items-center justify-center text-white`}
                    >
                      <span>£</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-gray-900 font-medium">{item.label}</div>
                      <div className="text-gray-400 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Compensation Details</h2>
              <p className="text-gray-400 mb-6">Current Pay Period</p>
              <div className="bg-gray-100 rounded-lg p-4 space-y-4">
                {[
                  { label: "Base Salary", value: "£4,500", icon: "fa-money-bill", color: "green" },
                  { label: "Bonus", value: "£750", icon: "fa-gift", color: "blue" },
                  { label: "Tax", value: "-£950", icon: "fa-minus-circle", color: "red" },
                  { label: "Pension", value: "-£450", icon: "fa-piggy-bank", color: "purple" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className={`fas ${item.icon} text-${item.color}-500 mr-2`}></i>
                      <span className="text-gray-900 font-medium">{item.label}</span>
                    </div>
                    <span className="text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compensation;
