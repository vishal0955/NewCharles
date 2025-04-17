import React, { useState } from "react";
import { FaPlus, FaTrash, FaEdit, FaEye } from "react-icons/fa";
import Modal from "./modal";
import { Link } from "react-router-dom";
import AddIndicatorModal from "./AddIndicatorModal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GaugeChart from "react-gauge-chart";

const datas = [
  {
    id: 1,
    name: "sanjana patel",
    department: "Designing",
    approvedBy: "Doglas Martini",
    createdDate: "14 Jan 2024",
    status: "Active",
    score: 45,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "sanjana patel",
    department: "Developer",
    approvedBy: "Doglas Martini",
    createdDate: "21 Jan 2024",
    status: "Active",
    score: 15,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "sanjana patel",
    department: "Developer",
    approvedBy: "Doglas Martini",
    createdDate: "18 Feb 2024",
    status: "Active",
    score: 85,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "sanjana patel",
    department: "Developer",
    approvedBy: "Doglas Martini",
    createdDate: "24 Feb 2024",
    status: "Active",
    score: 55,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 5,
    name: "sanjana patel",
    department: "DevOps",
    approvedBy: "Doglas Martini",
    createdDate: "11 Mar 2024",
    status: "Active",
    score: 25,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const PerformanceIndicator = () => {
  const [data, setData] = useState(datas);
  // const [isModalOpen, setModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    designation: "",
    name: "",
    department: "",
    approvedBy: "",
    createdDate: "",
    status: "",
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = (item = null) => {
    if (item) {
      setEditMode(true);
      setFormData(item);
    } else {
      setEditMode(false);
      setFormData({
        id: "",
        name: "",
        department: "",
        approvedBy: "",
        createdDate: "",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        status: "Active",
      });
    }
    setModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Add or Update Data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setData(data.map((item) => (item.id === formData.id ? formData : item)));
    } else {
      setData([...data, { ...formData, id: data.length + 1 }]);
    }
    closeModal();
  };

  // Delete Data
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const renderSelect = (label) => (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <select className="w-full border p-2 rounded">
        <option>Select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Performance Indicator
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Performance /{" "}
            <span className="text-black">Performance Indicator</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-0">
          <button
            // onClick={() => openModal()}
            onClick={() => setModalOpen(true)}
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-black"
          >
            <FaPlus className="mr-2" />
            Add Indicator
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Performance Indicator List</h3>
          <div className="flex items-center space-x-2">
            <select className="border rounded p-2">
              <option>Sort By: Last 7 Days</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="border rounded p-2"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg text-nowrap">
            <thead className="bg-gray-200">
              <tr>
                {/* <th className="p-3 text-left">#</th> */}
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Approved By</th>
                <th className="p-2 text-left">Created Date</th>
                {/* <th className="p-3 text-left">Status</th> */}
                <th className="p-3 text-left">Score</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className="border-t">
                  {/* <td className="p-3">
                    <input type="checkbox" />
                  </td> */}
                  <td className="p-3 font-semibold">{item.name}</td>
                  <td className="p-3">{item.department}</td>
                  <td className="p-3 flex items-center gap-2">
                    {/* <img
                      src={item.image}
                      alt="profile"
                      className="w-8 h-8 rounded-full"
                    /> */}
                    <span className="font-semibold">{item.approvedBy}</span>
                  </td>
                  <td className="p-3">{item.createdDate}</td>
                  {/* <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700 border border-green-500"
                          : "bg-red-100 text-red-700 border border-red-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td> */}
                  {/* <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                        item.score < 50
                          ? "bg-red-100 text-red-700 border-red-500"
                          : item.score < 75
                          ? "bg-yellow-100 text-yellow-700 border-yellow-500"
                          : "bg-green-100 text-green-700 border-green-500"
                      }`}
                    >
                      {item.score}/100
                    </span>
                  </td> */}

                  <td className="p-3 w-24">
                    <div className="w-14 h-14">
                      {/* <CircularProgressbar
                        value={item.score}
                        text={`${item.score}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor:
                            item.score < 50
                              ? "#f87171" // red
                              : item.score < 75
                              ? "#facc15" // yellow
                              : "#4ade80", // green
                          textColor: "#111827",
                          trailColor: "#e5e7eb",
                        })}
                      /> */}

                      <GaugeChart
                        id="gauge-chart"
                        nrOfLevels={4}
                        colors={["#f87171", "#facc15", "#4ade80"]}
                        arcWidth={0.3}
                        percent={item.score / 100}
                      />
                      {/* <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          item.score < 50
                            ? "bg-red-100 text-red-700 border-red-500"
                            : item.score < 75
                            ? "bg-yellow-100 text-yellow-700 border-yellow-500"
                            : "bg-green-100 text-green-700 border-green-500"
                        }`}
                      >
                        {item.score}/100
                      </span> */}
                    </div>
                  </td>

                  <td className="p-3 flex gap-2 items-center">
                    <Link
                      to={"/performaceoverview"}
                      className="text-green-500"
                      title="View"
                    >
                      <FaEye />
                    </Link>
                    <button
                      onClick={() => openModal(item)}
                      className="text-blue-500"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddIndicatorModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default PerformanceIndicator;
