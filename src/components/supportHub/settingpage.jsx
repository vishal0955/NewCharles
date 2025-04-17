import React from "react";
import { FaUsers, FaClock, FaGraduationCap, FaComments, FaRobot, FaRandom, 
  FaPhone, FaBook, FaUserCircle, FaColumns, FaReply, FaFileAlt, 
  FaTicketAlt, FaChartBar 
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Users and teams",
    items: [
      { icon: FaUsers, title: "Users", desc: "Manage users and access", badge: "ENT" },
      { icon: FaClock, title: "User availability", desc: "Set users offline or away" },
      { icon: FaGraduationCap, title: "Skills", desc: "Manage skills used for routing", badge: "ENT" },
    ],
  },
  {
    title: "Ticket sources and routing",
    items: [
      { icon: FaComments, title: "Channels", desc: "Generate tickets in help desk" },
      { icon: FaRobot, title: "Chatflows", desc: "Automate chat behaviors" },
      { icon: FaRandom, title: "Skill-based routing", desc: "Assign tickets based on user skills", badge: "ENT" },
      { icon: FaPhone, title: "IVR", desc: "Manage phone trees", badge: "ENT" },
    ],
  },
  {
    title: "Self-service and AI",
    items: [
      { icon: FaBook, title: "Knowledge base", desc: "Answers to common questions", path: "/support/knowledgebase" },
      { icon: FaRobot, title: "Customer agent", desc: "Automate customer responses", badge: "BETA", badgeColor: "bg-indigo-100 text-indigo-800" },
      { icon: FaUserCircle, title: "Customer portal", desc: "Keep customers updated on inquiries" },
    ],
  },
  {
    title: "Help desk customization",
    items: [
      { icon: FaColumns, title: "Sidebar customization", desc: "Prioritize ticket information" },
      { icon: FaReply, title: "Reply recommendations", desc: "AI powered suggestions" },
      { icon: FaFileAlt, title: "Templates", desc: "Reusable templated responses" },
      { icon: FaBook, title: "Playbooks", desc: "Written guidelines for service processes" },
      { icon: FaTicketAlt, title: "Ticket defaults", desc: "Property defaults for new tickets" },
    ],
  },
  {
    title: "Help desk automation",
    items: [
      { icon: FaClock, title: "SLAs", desc: "Set service expectations" },
      { icon: FaChartBar, title: "Feedback surveys", desc: "Collect customer feedback" },
    ],
  },
];

const HelpDeskSettings = () => {
  // Getting dark mode from redux store
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="min-h-screen font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Help Desk Settings</h1>
        
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className={`${darkMode ? "text-white" : "text-gray-900"} text-sm font-medium mb-4`}>
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.items.map((item, idx) => (
                  <Link 
                    to={item.path || "#"} 
                    key={idx} 
                    className={`${darkMode ? "card-dark" : "bg-white" } block p-4 bg-white rounded-lg border border-gray-200 hover:border-custom transition-colors`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 text-custom opacity-80 text-xl">
                        {React.createElement(item.icon)}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                      </div>
                      {item.badge && (
                        <div className="ml-auto">
                          <span 
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.badgeColor || "bg-gray-100 text-gray-800"}`}
                          >
                            {item.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpDeskSettings;
