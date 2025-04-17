import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProjectManagementDashboard = () => {
  return (
    <div className="bg-gray-50 font-['Inter'] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="!rounded-button bg-black text-white px-4 py-2 text-sm font-medium"
              >
                <i className="fas fa-plus mr-2"></i>New Project
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-black text-white p-6 rounded-lg mb-8 text-center">
            <h1 className="text-3xl font-bold">NEW PROJECT</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/** Client Name */}
            <InfoCard title="Client Name" icon="fas fa-building" content="Tech Solutions Inc." />

            {/** Project Goal */}
            <InfoCard
              title="Project Goal"
              icon="fas fa-bullseye"
              content="Develop a modern e-commerce platform with advanced analytics"
            />

            {/** Scope of Work */}
            <InfoCard title="Scope of Work" icon="fas fa-tasks">
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Frontend development using React.js</li>
                <li>Backend API development with Node.js</li>
                <li>Database design and implementation</li>
                <li>Integration with payment gateways</li>
              </ul>
            </InfoCard>

            {/** Client Requirements */}
            <InfoCard title="Client Requirements" icon="fas fa-clipboard-list">
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Mobile-first responsive design</li>
                <li>SEO optimization</li>
                <li>Performance optimization</li>
                <li>Security compliance</li>
              </ul>
            </InfoCard>

            {/** Assigned Team Members */}
            <InfoCard title="Assigned Team Members" icon="fas fa-users">
              <div className="flex flex-wrap gap-2">
                {["John Doe", "Alice Smith", "Robert Johnson"].map((member, index) => (
                  <TeamBadge key={index} name={member} />
                ))}
              </div>
            </InfoCard>

            {/** Important Notes */}
            <InfoCard title="Important Notes" icon="fas fa-exclamation-circle" titleColor="text-red-600">
              <div className="space-y-4">
                {[
                  {
                    title: "Project Documentation Access",
                    content:
                      "All project documentation is available in the shared Google Drive folder. Please ensure you have the necessary permissions.",
                  },
                  {
                    title: "Reporting & QA Process",
                    content:
                      "Daily updates are required in the project Slack channel. QA testing should follow the established checklist.",
                  },
                  {
                    title: "Time Tracking",
                    content: "Use the provided time tracking tool to log all project-related activities.",
                  },
                ].map((note, index) => (
                  <div key={index} className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-800 mb-2">{note.title}</h3>
                    <p className="text-red-700">{note.content}</p>
                  </div>
                ))}
              </div>
            </InfoCard>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black mt-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center text-white">
            <i className="fas fa-exclamation-triangle mr-2"></i>
            <p>Please keep information within ClickUp, up to date at all times.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Reusable Component for Info Sections
const InfoCard = ({ title, icon, content, children, titleColor = "text-black" }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow relative">
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <i className="fas fa-edit"></i>
      </button>
      <h2 className={`text-lg font-semibold mb-4 ${titleColor}`}>
        <i className={`${icon} mr-2`}></i>
        {title}
      </h2>
      {content ? <p className="text-gray-600">{content}</p> : children}
    </div>
  );
};

// Reusable Component for Team Members
const TeamBadge = ({ name }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
      <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm mr-2">
        {initials}
      </span>
      <span className="text-gray-600">{name}</span>
    </div>
  );
};