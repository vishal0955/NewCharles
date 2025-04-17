import { useState } from "react";
import InventorySidebar from "./InventorySidebar";
import { Outlet } from "react-router-dom";

const InvetoryLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarCollapsed((prev) => !prev);
    };

    return (
        <div className="flex" >
            <InventorySidebar className="fixed ml-64" toggleSidebar={toggleSidebar}  collapsed={isSidebarCollapsed}/>
            <div className="flex-1">
                {/* <Navbar toggleSidebar={toggleSidebar} /> */}
                
                <Outlet />
               
            </div>
        </div>
    );
};

export default InvetoryLayout;