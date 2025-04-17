import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar, collapsed }) => {
  const [collapsedSections, setCollapsedSections] = useState({});

  // Toggle the dropdown for each section
  const handleToggle = (sectionTitle) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [sectionTitle]: !prevState[sectionTitle],
    }));
  };
  return (
    <div className=" flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`min-h-screen shadow-gray-200 shadow-lg flex flex-col transition-all duration-300 ease-in-out ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="p-2">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={toggleSidebar}
              className="p-1.5 ronded-lg font-[64px] text-white bg-blue-500 hover:bg-blue-500 active:bg-blue-700 transition-colors"
            >
              {collapsed ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
            </button>
            {!collapsed && (
              <h2 className="text-lg font-semibold text-gray-800">Help Desk</h2>
            )}
          </div>

          {/* Search Box */}
          {!collapsed && (
            <div className="relative mb-6">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-search text-gray-400"></i>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom text-sm"
              />
            </div>
          )}

          {/* Sidebar Menu */}
          <nav className="space-y-1">
            {[
              {
                icon: "fas fa-chart-bar",
                label: "Summary",
                path: "/support/summary",
              },
              {
                icon: "fas fa-chart-line",
                label: "Analyze",
                path: "/support/analytics",
              },
              {
                icon: "far fa-circle",
                label: "Unassigned",
                count: 0,
                path: "/support/tickets",
              },
              {
                icon: "fas fa-user",
                label: "Assigned To Me",
                count: 37,
                path: "/support/tickets",
              },
              {
                icon: "fas fa-users",
                label: "My Team's Unassigned",
                count: 0,
                path: "/support/tickets",
              },
              {
                icon: "fas fa-folder-open",
                label: "My Team's Open",
                count: 42,
                path: "/support/tickets",
              },
              {
                icon: "fas fa-folder",
                label: "All Open",
                count: 77,
                path: "/support/tickets",
              },
              {
                icon: "fas fa-star",
                label: "Following",
                count: 0,
                path: "/support/tickets",
              },
              {
                icon: "fas fa-check",
                label: "All Closed",
                path: "/support/tickets",
              },
              {
                icon: "fas fa-paper-plane",
                label: "Sent",
                count: 2,
                path: "/support/tickets",
              },
              {
                icon: "fas fa-ban",
                label: "Spam",
                count: 966,
                path: "/support/tickets",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="menu-item flex items-center justify-between py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Link to={item.path} className="flex items-center w-full">
                  <div className="flex items-center">
                    <i className={`${item.icon} w-5`}></i>
                    {!collapsed && (
                      <span className="ml-3 text-sm">{item.label}</span>
                    )}
                  </div>
                  {!collapsed && item.count !== undefined && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full ml-auto">
                      {item.count}
                    </span>
                  )}
                </Link>
              </div>
            ))}

            {/* Additional Sections */}
            {[
              {
                title: "Sales",
                items: [
                  {
                    label: "Sales - Unassigned",
                    count: 0,
                    path: "/support/tickets",
                    icon:"fa-brands fa-salesforce",
                  },
                  {
                    label: "Sales - All Open",
                    count: 42,
                    path: "/support/tickets",
                    icon:"fa-solid fa-universal-access",
                  },
                  {
                    label: "Sales - All Closed",
                    count: 316,
                    path: "/support/tickets",
                    icon:"fa-solid fa-sleigh",
                  },
                ],
              },
              {
                title: "Accounts",
                items: [
                  {
                    label: "Account - Unassigned",
                    count: 0,
                    path: "/support/tickets",
                    icon:"fa-solid fa-scale-unbalanced-flip",
                  },
                  {
                    label: "Accounts - All Open",
                    count: 33,
                    path: "/support/tickets",
                    icon:"fa-solid fa-satellite-dish",
                  },
                  {
                    label: "Accounts - All Closed",
                    count: 0,
                    path: "/support/tickets",
                    icon:"fa-solid fa-satellite",
                  },
                ],
              },
              {
                title: "Support",
                items: [
                  {
                    label: "Support - All Open",
                    count: 0,
                    path: "/support/tickets",
                    icon:"fa-solid fa-weight-scale"
                  },
                  {
                    label: "Support - Unassigned",
                    count: 0,
                    path: "/support/tickets",
                    icon:"fa-solid fa-money-bill"
                  },
                  {
                    label: "Support - All Closed",
                    count: 86,
                    path: "/support/tickets",
                    icon:"fa-solid fa-life-ring"
                  },
                ],
              },
              {
                title: "Technical",
                items: [
                  {
                    label: "Technical - Unassigned",
                    count: 5,
                    path: "/support/tickets",
                    icon:"fa-solid fa-radiation"
                  },
                  {
                    label: "Technical - All Open",
                    count: 0,
                    path: "/support/tickets",
                    icon:"fa-solid fa-universal-access"
                  },
                  {
                    label: "Technical - All Closed",
                    count: 6,
                    path: "/support/tickets",
                    icon:"fa-solid fa-people-roof"
                    
                  },
                ],
              },
              {
                title: "Marketing",
                items: [
                  {
                    label: "Marketing - All Open",
                    count: 1,
                    path: "/support/tickets",
                    icon:"fa-solid fa-maximize"
                  },
                  {
                    label: "Marketing - All Closed",
                    count: 1,
                    path: "/support/tickets",
                    icon:"fa-solid fa-shield-cat"
                  },
                ],
              },
            ].map((section, index) => (
              <div key={index} className="pt-4">
                {/* Title - Click to Toggle Dropdown */}
                <h3
                  className="px-3 text-sm font-medium text-gray-500 cursor-pointer flex items-center justify-between"
                  onClick={() => handleToggle(section.title)}
                >
                  {section.title}
                  {/* Dropdown Icon - Conditional Rendering */}
                  {collapsedSections[section.title] ? (
                    <HiChevronUp size={20} color="#00796B" />
                  ) : (
                    <HiChevronDown size={20} color="#00796B" />
                  )}
                </h3>

                {/* Dropdown Content - Toggle visibility based on state */}
                {collapsedSections[section.title] && (
                  <div className="pl-6">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="menu-item flex items-center justify-between py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <Link
                          to={item.path}
                          className="flex items-center w-full"
                        >
                          <div className="flex items-center">
                          <i className={`${item.icon} w-5`}></i>
                            <span className="ml-3 text-sm">{item.label}</span>
                          </div>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full ml-auto">
                            {item.count}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      {/* <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">
            Dashboard
          </h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">
              Select a category from the sidebar to view tickets
            </p>
          </div>
        </div>
      </main> */}
    </div>
  );
};

export default Sidebar;

// #fullsii.jsx linked file
