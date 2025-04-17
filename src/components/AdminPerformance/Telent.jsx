import React from "react";
import {
  FaCheckCircle,
  FaClock,
  FaCommentAlt,
  FaEllipsisH,
} from "react-icons/fa";

const Telent = () => {
  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              className="h-16 w-16 rounded-full"
              src="https://creatie.ai/ai/api/search-image?query=professional%20headshot%20of%20a%20person%20smiling%20warmly%20against%20a%20neutral%20background&width=100&height=100&orientation=squarish"
              alt="Wade Wilson"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">Wade Wilson</h1>
              <div className="flex items-center mt-1">
                <span className="px-2 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
                  Active
                </span>
                <span className="ml-2 text-gray-400">
                  Senior AV Systems Engineer • Technical • AV Integration • UK –
                  Remote
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 flex items-center rounded hover:bg-gray-200">
              <FaCommentAlt className="mr-2" /> Add feedback
            </button>
            <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded hover:bg-gray-200">
              <FaEllipsisH />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-8 border-t border-gray-200 pt-4">
          {[
            "Profile",
            "Skills",
            "Performance • 78%",
            "Roadmap",
            "Compensation",
            "Talent • 13 • 87%",
            "Documents",
            "Time off • 1",
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className={`text-sm ${
                item.includes("Skills") || item.includes("Talent")
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3 space-y-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold text-gray-900">Q4 2023</div>
              <div className="text-green-500 font-medium">Exceeding</div>
            </div>
            <div className="text-gray-400">Overall grade</div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
            {[
              {
                q: "Q4",
                mid: "Mid III",
                status: "Pending",
                color: "text-gray-500",
              },
              {
                q: "Q3",
                mid: "Mid II",
                status: "Exceeding",
                color: "text-green-500",
              },
              {
                q: "Q2",
                mid: "Mid II",
                status: "Performing",
                color: "text-blue-500",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
              >
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {item.q}
                  </div>
                  <div className="text-xs text-gray-400">{item.q} '24</div>
                </div>
                <div className="text-sm font-medium text-gray-400">
                  {item.mid}
                </div>
                <div className={`text-sm ${item.color}`}>{item.status}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-9 space-y-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Training Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Training One",
                  date: "Completed on Jan 15, 2024",
                  icon: <FaCheckCircle className="text-green-500" />,
                },
                {
                  name: "Training Two",
                  date: "Completed on Feb 1, 2024",
                  icon: <FaCheckCircle className="text-green-500" />,
                },
                {
                  name: "Training Three",
                  date: "In Progress - Due Mar 15, 2024",
                  icon: <FaClock className="text-yellow-500" />,
                },
              ].map((training, idx) => (
                <div
                  key={idx}
                  className="p-4 border rounded-lg bg-white flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{training.name}</span>
                    <span>{training.icon}</span>
                  </div>
                  <div className="text-sm text-gray-500">{training.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "AV Programming",
              "DSP Programming",
              "Control Systems",
              "Technical Skills",
            ].map((category, idx) => (
              <div key={idx} className="flex flex-col p-4 border rounded-lg">
                <div className="font-medium mb-2">{category}</div>
                {/* Example skills */}
                {[
                  { skill: "Crestron", progress: 100 },
                  { skill: "Extron", progress: 100 },
                  { skill: "QSC", progress: 75 },
                ].map((s, index) => (
                  <div key={index} className="space-y-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{s.skill}</span>
                      <span className="text-sm font-medium">
                        {s.progress / 25}/4
                      </span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 rounded-full h-2"
                        style={{ width: `${s.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telent;
