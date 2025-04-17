import React from "react";
import { useSelector } from "react-redux";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Summary = () => {
   const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className=" font-sans min-h-screen">
      {/* Main Content */}
      <main className="container p-0">
        <header className={`${darkMode ? "dark-mode" : null }bg-white border-b border-gray-200 px-8 py-4`}>
          <div className= {`${darkMode ? "dark-mode" : null }flex items-center justify-between`}>
            <h1 className="text-lg sm:text-xl font-semibold">Summary</h1>
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-question-circle text-lg"></i>
            </button>
          </div>
        </header>

        <div className="p-1 sm:p-6 lg:p-8">
          {/* Stats Boxes - Stack on mobile, 2 columns on sm, 3 on md, 5 on lg+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6 sm:mb-8">
            {["ALL OPEN TICKETS", "TICKETS CLOSED", "TIME TO FIRST REPLY", "TIME TO CLOSE", "CES"].map((item, index) => (
              <div key={index} className={`${darkMode ? "card-dark" : "bg-white" }bg-white p-4 rounded-lg border border-gray-200`}>
                <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{item}</div>
                <div className="text-xl sm:text-2xl font-semibold">0</div>
              </div>
            ))}
          </div>

          {/* Team Availability & SLA Progress - Stack on mobile, side by side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className={`${darkMode ? "card-dark" : "bg-white" }bg-white p-4 sm:p-6 rounded-lg border border-gray-200`}>
              <h2 className="text-base sm:text-lg font-semibold">Team Availability</h2>
              <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                {[
                  { name: "John Doe", tickets: 27 },
                  { name: "Seif Ashraf", tickets: 5 },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full mr-2 sm:mr-3"></div>
                      <div>
                        <div className="text-sm sm:text-base font-medium">{user.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500">Assigned: {user.tickets} tickets</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1 sm:mr-2"></span>
                      <span className="text-xs sm:text-sm text-gray-600">Available</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${darkMode ? "card-dark" : "bg-white" }bg-white p-4 sm:p-6 rounded-lg border border-gray-200`}>
              <h2 className="text-base sm:text-lg font-semibold">SLA Progress</h2>
              <div className="mt-3 sm:mt-4">
                <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Current SLA status</div>
                <div className="text-2xl sm:text-3xl font-semibold">0% <span className="text-xs sm:text-sm text-gray-500">on target</span></div>
              </div>
            </div>
          </div>

          {/* Today's Tickets by Channel - Full width on all screens */}
          <div className={`${darkMode ? "card-dark" : "bg-white" }bg-white p-4 sm:p-6 rounded-lg border border-gray-200 mt-6 sm:mt-8`}>
            <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Today's tickets by channel</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="text-xs sm:text-sm text-gray-600">
                    <th className="text-left font-medium pb-2 sm:pb-3">Channel</th>
                    <th className="text-right font-medium pb-2 sm:pb-3">Today's tickets</th>
                    <th className="text-right font-medium pb-2 sm:pb-3">All open tickets</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm">
                  {[
                    { icon: "comments", label: "Live chat" },
                    { icon: "envelope", label: "Email" },
                    { icon: "file-alt", label: "Forms" },
                    { icon: "phone", label: "Calling" },
                  ].map((channel, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="py-2 sm:py-3 flex items-center">
                        <i className={`fas fa-${channel.icon} text-gray-400 mr-2`}></i>
                        {channel.label}
                      </td>
                      <td className="text-right">0</td>
                      <td className="text-right">0</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Summary;