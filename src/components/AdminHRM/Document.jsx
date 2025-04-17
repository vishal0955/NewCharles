import React from "react";
import { FaPenToSquare, FaDownload, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Document = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-7xl">
        {/* Employee Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="w-32 h-32 rounded-lg object-cover mr-8 shadow-lg ring-4 ring-gray-100"
              alt="Employee"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">
                    John Doe
                  </h1>
                  <p className="text-gray-600 text-lg mb-2">Senior Developer</p>
                  <div className="flex items-center mt-2">
                    <span className="px-4 py-1.5 text-sm font-medium text-green-800 bg-green-100 rounded-full shadow-sm">
                      Active
                    </span>
                    <span className="ml-4 text-sm text-gray-500">#EMP001</span>
                  </div>
                </div>
                <button className="px-4 py-2.5 text-white bg-gray-800 border border-black rounded-lg hover:bg-black transition-colors duration-200 font-medium">
                  <FaPenToSquare className="mr-2 inline" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <Link
                to={""}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Personal Details
              </Link>
              <Link
                to={"/workdetails"}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Work Details
              </Link>
              <Link
                to={"/document"}
                className="px-6 py-4 border-b-2 border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Documents
              </Link>
              <Link
                to={"/attendance"}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Attendance & Leave
              </Link>
            </nav>
          </div>

          {/* Documents Section */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <DocumentCard title="Passport" fileType="PDF" size="2.5 MB" />
              <DocumentCard title="ID Card" fileType="JPG" size="1.2 MB" />
              <DocumentCard title="Resume" fileType="PDF" size="890 KB" />
              <DocumentCard title="Certificates" fileType="PDF" size="3.1 MB" />
              <DocumentCard title="Contract" fileType="PDF" size="1.8 MB" />

              {/* Upload New Document */}
              <div className="bg-gradient-to-r  p-6 rounded-xl border border-black flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all transform hover:scale-[1.02]">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-800 hover:bg-black bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaPlus className="text-white text-xl" />
                  </div>
                  <p className="text-sm font-medium text-black">
                    Upload New Document
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tab Navigation Component
const TabLink = ({ title, isActive }) => (
  <a
    href="#"
    className={`px-6 py-4 text-gray-500 hover:text-gray-700 ${
      isActive ? "border-b-2 border-blue-500 text-blue-600 font-medium" : ""
    }`}
  >
    {title}
  </a>
);

// Document Card Component
const DocumentCard = ({ title, fileType, size }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-500">
          {fileType} • {size}
        </p>
      </div>
      <button className="text-blue-600 hover:text-blue-700">
        <FaDownload />
      </button>
    </div>
    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
      <img
        src="https://dummyimage.com/300x200/000/fff&text=ID+Card"
        alt={`${title} preview`}
        className="object-cover rounded-lg w-[600px]"
      />
    </div>
  </div>
);

export default Document;
