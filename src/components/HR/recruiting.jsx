import React from "react";

const RecruitmentPipeline = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 py-4 px-4 border-b border-gray-200">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto gap-3 sm:gap-8">
            <img
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
              className="h-8 w-auto"
            />
            <nav className="flex flex-wrap gap-4 sm:gap-8 text-sm sm:text-base">
              <a href="#" className="text-custom font-medium">
                Staff Scheduling
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Board
              </a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto gap-3 sm:gap-4">
            <div className="relative w-full sm:w-auto">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-transparent"
              />
            </div>
            <button className="rounded bg-dark text-white px-4 py-2 font-medium hover:bg-opacity-90 w-full sm:w-auto">
              Add Task
            </button>
          </div>
        </header>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-4">
  {/* Left Button Group */}
  <div className="flex flex-wrap gap-2">
    <button className="rounded flex items-center px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-sm">
      <i className="fas fa-layer-group mr-2"></i>
      Group: Status
    </button>
    <button className="rounded flex items-center px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-sm">
      <i className="fas fa-tasks mr-2"></i>
      Subtasks
    </button>
  </div>

  {/* Right Button Group */}
  <div className="flex flex-wrap gap-2">
    <button className="rounded flex items-center px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-sm">
      <i className="fas fa-filter mr-2"></i>
      Filter
    </button>
    <button className="rounded flex items-center px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-sm">
      <i className="fas fa-sort mr-2"></i>
      Sort
    </button>
  </div>
</div>


        {/* Pipeline Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Incoming",
              color: "bg-purple-500",
              count: 3,
              jobTitle: "Senior Frontend Developer",
              company: "Tech Solutions Inc.",
              status: "New",
              statusColor: "bg-blue-100 text-blue-800",
              id: "#315421",
              time: "2d ago",
            },
            {
              title: "Interview Booked",
              color: "bg-yellow-500",
              count: 2,
              jobTitle: "UX Designer",
              company: "Design Studio Co.",
              status: "Scheduled",
              statusColor: "bg-yellow-100 text-yellow-800",
              id: "#315422",
              time: "Tomorrow, 2 PM",
            },
            {
              title: "Interviewed",
              color: "bg-blue-500",
              count: 4,
              jobTitle: "Product Manager",
              company: "Tech Innovators Ltd.",
              status: "Completed",
              statusColor: "bg-green-100 text-green-800",
              id: "#315423",
              time: "Yesterday",
            },
            {
              title: "Shortlisted",
              color: "bg-green-500",
              count: 2,
              jobTitle: "Backend Developer",
              company: "Cloud Systems Inc.",
              status: "Selected",
              statusColor: "bg-green-100 text-green-800",
              id: "#315424",
              time: "3d ago",
            },
            {
              title: "Offer Sent",
              color: "bg-orange-500",
              count: 1,
              jobTitle: "DevOps Engineer",
              company: "Infrastructure Plus",
              status: "Pending",
              statusColor: "bg-orange-100 text-orange-800",
              id: "#315425",
              time: "1d ago",
            },
            {
              title: "Hired",
              color: "bg-green-500",
              count: 3,
              jobTitle: "Data Scientist",
              company: "Analytics Corp",
              status: "Confirmed",
              statusColor: "bg-green-100 text-green-800",
              id: "#315426",
              time: "Starts Nov 1",
            },
            {
              title: "Unsuccessful",
              color: "bg-red-500",
              count: 2,
              jobTitle: "Marketing Manager",
              company: "Brand Solutions",
              status: "Rejected",
              statusColor: "bg-red-100 text-red-800",
              id: "#315427",
              time: "5d ago",
            },
          ].map((stage, index) => (
            <div key={index} className="w-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full ${stage.color} mr-2`}
                  ></span>
                  <h3 className="font-medium">{stage.title}</h3>
                  <span className="ml-2 text-gray-500">{stage.count}</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-500">{stage.id}</span>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${stage.statusColor}`}
                  >
                    {stage.status}
                  </span>
                </div>
                <h4 className="font-medium mb-1">{stage.jobTitle}</h4>
                <p className="text-gray-500 text-sm mb-3">{stage.company}</p>
                <div className="flex justify-between items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <span className="text-gray-500 text-sm">{stage.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentPipeline;
