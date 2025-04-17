import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import React from "react";
import { useSelector } from "react-redux";

const ProjectDetails = () => {

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Navbar */}


      {/* Main Content */}
      <main className={`${darkMode ? "dark-mode" : null } flex-1 py-6`}>
        <div className=" max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold ">Chatbot </h1>
            <button className="bg-custom px-4 py-2 text-white font-medium hover:bg-custom/90 rounded-md">
              
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Project Details */}
            <div className= {`${darkMode ? "card-dark" : null } col-span-2 bg-gray-50 rounded-lg shadow p-6`}>
              <h2 className="text-lg font-medium  mb-4">Project Details</h2>
              <p className="text-gray-600 mb-4">
                Complete redesign of the chatbot platform including user interface improvements, checkout process optimization, and mobile responsiveness implementation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Start Date</h3>
                  <p className="">Jan 15, 2024</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
                  <p className="">Mar 30, 2024</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    In Progress
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Priority</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    High
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Members</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium  text-green-800">
                                       <AvatarGroup>
                                         <Avatar
                                           image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                                           size="large"
                                           shape="circle"
                                         />
                                         <Avatar
                                           image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png"
                                           size="large"
                                           shape="circle"
                                         />
                                         <Avatar
                                           image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png"
                                           size="large"
                                           shape="circle"
                                         />
                                         <Avatar
                                           label="+2"
                                           shape="circle"
                                           size="large"
                                           className={` ${darkMode ? "table-dark" : null} `}
                                         />
                                       </AvatarGroup>
                 
                  </span>
                </div>
              </div>
            </div>

            {/* Custom Fields */}
            <div className={`${darkMode ? "card-dark" : "bg-gray-50" } rounded-lg shadow p-6 `}> 
              <h2 className="text-lg font-medium  mb-4">Custom Fields</h2>
              {[
                { label: "Contact Name", value: "John Anderson" },
                { label: "Contact Email", value: "john.anderson@example.com" },
                { label: "Contact Phone", value: "+1 (555) 123-4567" },
                { label: "Organization", value: "Tech Solutions Inc." }
              ].map((field, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                  <input type="text" className={`${darkMode ? "card-dark" : "text-dark" } mt-1 block w-full rounded-md  border-gray-300 shadow-sm   sm:text-sm`} value={field.value} readOnly />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
