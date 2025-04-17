import React, { useState, useEffect } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight, FaChevronRight } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const InventorySidebar = ({ toggleSidebar, collapsed }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Overlay for mobile */}
      <div
        className={`inset-0  backdrop-blur-sm transition-opacity duration-300 ${
          !collapsed && isMobile
            ? "opacity-100 z-20"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside 
        className={`absolute min-h-screen  shadow-lg flex flex-col transition-all duration-300 ease-in-out ${
          collapsed ? "w-20" : "w-48"
        } `}
      >
       
        <div className="p-6">
        <button
            onClick={toggleSidebar}
            className="p-1.5 ronded-lg font-[64px] text-white bg-blue-500 hover:bg-blue-500 active:bg-blue-700 transition-colors"
          >
            {collapsed ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
          </button>
          {/* New Order Button */}
          <button className="flex flex items-center justify-center  gap-3 px-3 py-2 mt-8">
            <i className="fas fa-plus" />
            {!collapsed && <span>New Order</span>}
          </button>

          {/* Navigation */}
          <nav className="space-y-1">
            {[
              { path: "/inventory/dashboard", icon: "fa-gauge-high", text: "Dashboard" },
              { path: "/inventory/calendar", icon: "fa-calendar", text: "Calendar" },
              { path: "/inventory/orderlist", icon: "fa-clipboard-list", text: "Orders" },
              { path: "/inventory/customerslist", icon: "fa-user", text: "Customers" },
              { path: "/inventory/inventory", icon: "fa-box", text: "Inventory" },
              { path: "#", icon: "fa-file", text: "Documents" }
            ].map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
                onMouseEnter={() => setHoveredItem(item.text)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <i className={`fas ${item.icon} w-5`} />
                {!collapsed && <span>{item.text}</span>}
                
                {/* Tooltip for collapsed state */}
                {collapsed && hoveredItem === item.text && (
                  <div className="absolute left-full top-0 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
                    {item.text}
                  </div>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto border-t border-gray-200">
          <nav className="space-y-1 p-6">
            {[
              { icon: "fa-barcode", text: "Scan a barcode" },
              { icon: "fa-circle-question", text: "Help center" },
              { icon: "fa-gear", text: "Settings" }
            ].map((item) => (
              <a
                key={item.text}
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
                onMouseEnter={() => setHoveredItem(item.text)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <i className={`fas ${item.icon} w-5`} />
                {!collapsed && <span>{item.text}</span>}
                
                {/* Tooltip for collapsed state */}
                {collapsed && hoveredItem === item.text && (
                  <div className="absolute left-full top-0 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
                    {item.text}
                  </div>
                )}
              </a>
            ))}
          </nav>

          {/* User Profile Section */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">BTS</span>
              </div>
              {!collapsed && (
                <div>
                  <p className="text-sm font-medium text-gray-900">BTS Big</p>
                  <p className="text-xs text-gray-500">Enterprise Plan</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        collapsed ? "ml-20" : "ml-48"
      }`}>
       
      </div>
    </div>
  );
};

export default InventorySidebar;


