import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const darkMode = useSelector((state) => state.theme.isDarkMode);
    console.log(darkMode)

    const toggleSidebar = () => {
      setIsSidebarCollapsed((prev) => !prev);
    };

    return (
        // <div className="flex" >
        //     <Sidebar  toggleSidebar={toggleSidebar}  collapsed={isSidebarCollapsed}/>
        //     <div className="flex-1">
        //         <Navbar toggleSidebar={toggleSidebar} className="" />
                
        //         <Outlet />
               
        //     </div>
        // </div>
        <>
        <div className={` ${darkMode ? "dark-mode" : null } main-content-nav`}>
        <Navbar toggleSidebar={toggleSidebar} className="" />
            <div className="flex">
            <Sidebar  toggleSidebar={toggleSidebar}  collapsed={isSidebarCollapsed}/>
                <div className={`flex-1 ${darkMode ? "dark-mode" : null } `} style={{overflow:"hidden",paddingTop:"65px"}}>
                    <div className={`${darkMode ? "dark-mode" : null }  container`}>
                <Outlet className={`${darkMode ? "dark-mode" : null} `} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Layout;
