import React, { useState, useRef } from 'react';
import { Search, Bell, User, Settings, Activity, CreditCard, HelpCircle, LogOut, Menu, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toggleTheme } from '../redux/slices/ThemeSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = ({ toggleSidebar, collapsed }) => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    console.log("logout clicked");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    navigate('/');
  };
 



  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    // Close notification dropdown if open
    if (isNotificationDropdownOpen) {
      setIsNotificationDropdownOpen(false);
    }
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    // Close profile dropdown if open
    if (isProfileDropdownOpen) {
      setIsProfileDropdownOpen(false);
    }
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);
   const toggleDarkMode = () => {
    dispatch(toggleTheme());
    console.log("Dark mode toggled");
   };

  return (
    <div className={ `${darkMode ? 
        'dark-mode': "bg-white"  } fixed top-0 left-0 right-0 z-30  border-b border-gray-200`}>
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Left section - Logo and toggle button */}
        <div className="flex items-center">
          <div className="flex items-center justify-between">
            {collapsed ? (
              <span className="text-indigo-600 font-bold text-2xl">H</span>
            ) : (
              <span className="text-indigo-600 font-bold text-2xl">HRMS</span>
              // <img src="../../assets/logo-BPAV.png" alt="Logo" className="h-8 w-8" />
              // <img  src="https://i.ibb.co/Qjm3yG7L/img.png" alt="logo-BPAV"  className="h-8  w-37.5" ></img>
            )}
            <button
              onClick={toggleSidebar}
              className={` ml-4 p-1.5 rounded-lg  active:bg-gray-200 transition-colors `}
            >
              <Menu size={20} className={`${darkMode ? "text-white" : "text-gray-600" }`
              } />
            </button>
          </div>
        </div>

        {/* Right section - Icons and profile */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Middle section - Search (hidden on mobile) */}
          <div className="hidden md:flex flex-1 mx-4 max-w-md .nav-search-btn">
            <div className="relative w-full">
              <div className={`${darkMode ? "card-dark" : null } flex items-center bg-gray-100 rounded-md px-3 py-2 w-full`}>
                <Search size={16} className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search in HRMS"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm w-full"
                />
              </div>
            </div>
          </div>
          {/* Mobile search button (hidden on desktop) */}
          <button className="md:hidden hover:text-gray-700">
            {/* <Search size={20} /> */}
          </button>

          {/* Notification icon with dropdown */}
          <div className="relative" ref={dropdownRef}>
          <button className="px-2 py-1 ml-2" onClick={toggleDarkMode}>
                       {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                     </button>
            <button 
              onClick={toggleNotificationDropdown}
              className="text-gray-500 hover:text-gray-700 relative"
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Notification dropdown menu */}
            {isNotificationDropdownOpen && (
              <div className={`${darkMode ? "dark-mode" : null } absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}>
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-base font-medium">Notifications</h3>
                </div>
                
                <div className="py-1 max-h-96 overflow-y-auto">
                  {/* Notification items */}
                  <a href="#" className="flex items-start px-4 py-3 text-smborder-b border-gray-100">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <User size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="fw-medium">New employee joined</p>
                      <p className="text-xs">John Doe has joined your team</p>
                      <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-start px-4 py-3 text-smborder-b border-gray-100">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Activity size={16} className="text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Leave request approved</p>
                      <p className="text-xs">Your leave request has been approved</p>
                      <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-start px-4 py-3 text-sm">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <CreditCard size={16} className="text-purple-500" />
                    </div>
                    <div>
                      <p className="font-medium">Payslip generated</p>
                      <p className="text-xs">Your payslip for March is ready</p>
                      <p className="text-xs text-gray-400 mt-1">3 days ago</p>
                    </div>
                  </a>
                </div>
                
                <div className="py-2 border-t border-gray-200 text-center">
                  <a href="#" className="text-sm text-blue-500 hover:text-blue-700 font-medium">
                    View all notifications
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-200 focus:outline-none"
            >
              <img
                src="https://i.ibb.co/dJ68VsWW/image.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </button>

            {/* Profile dropdown menu */}
            {isProfileDropdownOpen && (
              <div className={`${darkMode ? "dark-mode" : null } absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}>
                {/* Profile Info */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gray-300">
                      <img
                        src="https://i.ibb.co/dJ68VsWW/image.png"
                        alt="Kevin Larry"
                        className="h-full w-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-medium">Kevin Larry</h3>
                      <p className="text-sm">warren@example.com</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-1">
                  <a href="#profile" className="flex items-center px-4 py-2 text-smhover:bg-gray-100">
                    <User size={18} className="mr-3" />
                    <span>My Profile</span>
                  </a>
                  <a href="#settings" className="flex items-center px-4 py-2 text-smhover:bg-gray-100">
                    <Settings size={18} className="mr-3" />
                    <span>Settings</span>
                  </a>
                  <a href="#status" className="flex items-center px-4 py-2 text-smhover:bg-gray-100">
                    <Activity size={18} className="mr-3" />
                    <span>Status</span>
                  </a>
                  <a href="#account" className="flex items-center px-4 py-2 text-smhover:bg-gray-100">
                    <CreditCard size={18} className="mr-3" />
                    <span>My Account</span>
                  </a>
                  <a href="#knowledge" className="flex items-center px-4 py-2 text-smhover:bg-gray-100">
                    <HelpCircle size={18} className="mr-3" />
                    <span>Knowledge Base</span>
                  </a>
                </div>

                {/* Logout */}
                <div className="py-1 border-t border-gray-200" onClick={handleLogout}>
                  <a href="#logout" className="flex items-center px-4 py-2 text-smhover:bg-gray-100">
                    <LogOut size={18} className="mr-3" />
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;