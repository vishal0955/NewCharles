
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import React from "react";
import { useSelector } from "react-redux";

const ReportsDetails = () => {

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Navbar */}


      {/* Main Content */}
      <main className={`${darkMode ? "dark-mode" : null } flex-1 py-6`}>
        <div className=" max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold ">ReportsDetails </h1>
            <button className="bg-custom px-4 py-2 text-white font-medium hover:bg-custom/90 rounded-md">
              
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 ">
            {/* Project Details */}
            <div className= {`${darkMode ? "card-dark" : null } col-span-2 bg-gray-50 rounded-lg shadow p-6 `}>
              <div>
                <h2 className="text-lg font-medium  mb-4">Project : E-Commerce Platform</h2>
                <div className="mb-4">
                  <h2 className="text-lg font-medium mb-3">Milestones Progress</h2>
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-custom h-2.5 rounded-full" style={{ width: '66%' }}></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">2/3 Complete</span>
                  </div>
                  <div className="space-y-3">
                    {/* Initial Planning Milestone */}
                    <div className="border-b pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-sm font-medium">Initial Planning</span>
                        </div>
                        <span className="text-sm text-green-500">Completed</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Completed project scope definition, resource allocation, and timeline planning.</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Jan 15 - Jan 30, 2024</span>
                        <span>100% Complete</span>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium mb-1">Key Tasks:</h4>
                        <ul className="text-xs text-gray-600 list-disc list-inside">
                          <li>Requirements gathering</li>
                          <li>Stakeholder meetings</li>
                          <li>Project timeline creation</li>
                        </ul>
                      </div>
                    </div>

                    {/* Design Implementation Milestone */}
                    <div className="border-b pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-sm font-medium">Design Implementation</span>
                        </div>
                        <span className="text-sm text-green-500">Completed</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Implemented UI/UX designs and core functionality components.</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Feb 1 - Feb 28, 2024</span>
                        <span>100% Complete</span>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium mb-1">Key Tasks:</h4>
                        <ul className="text-xs text-gray-600 list-disc list-inside">
                          <li>UI component development</li>
                          <li>Backend integration</li>
                          <li>Responsive design implementation</li>
                        </ul>
                      </div>
                    </div>

                    {/* Testing & Deployment Milestone */}
                    <div className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                          <span className="text-sm font-medium">Testing & Deployment</span>
                        </div>
                        <span className="text-sm text-yellow-500">In Progress</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Conducting thorough testing and preparing for deployment.</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Mar 1 - Mar 30, 2024</span>
                        <span>45% Complete</span>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium mb-1">Key Tasks:</h4>
                        <ul className="text-xs text-gray-600 list-disc list-inside">
                          <li>Unit testing</li>
                          <li>Integration testing</li>
                          <li>Performance optimization</li>
                          <li>Deployment preparation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default ReportsDetails;

