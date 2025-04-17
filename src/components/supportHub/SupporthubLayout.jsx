
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./fullsidebar";

const SupporthubLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarCollapsed((prev) => !prev);
    };

    return (
        <div className="flex" >
            <Sidebar  toggleSidebar={toggleSidebar}  collapsed={isSidebarCollapsed}/>
            <div className="flex-1">
                {/* <Navbar toggleSidebar={toggleSidebar} /> */}
                
                <Outlet />
               
            </div>
        </div>
    );
};

export default SupporthubLayout;
