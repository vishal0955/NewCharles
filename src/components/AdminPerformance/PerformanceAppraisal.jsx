import { Search } from "lucide-react";
import {
  FaPlus,
 
  FaTrash,
 
} from "react-icons/fa";
import {
  FaPenToSquare,

} from "react-icons/fa6";

import { useState } from "react";
import AddAppraisalModal from "./AddAppraisalModal";

const initialEmployees = [
  {
    name: "Anthony Lewis",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    designation: "Web Designer",
    department: "Designing",
    appraisalDate: "14 Jan 2024",
    status: "Active",
  },
  {
    name: "Brian Villalobos",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    designation: "Web Developer",
    department: "Developer",
    appraisalDate: "21 Jan 2024",
    status: "Active",
  },
  {
    name: "Harvey Smith",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    designation: "iOS Developer",
    department: "Developer",
    appraisalDate: "18 Feb 2024",
    status: "Active",
  },
  {
    name: "Stephan Peralt",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    designation: "Android Developer",
    department: "Developer",
    appraisalDate: "24 Feb 2024",
    status: "Active",
  },
  {
    name: "Doglas Martini",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    designation: "DevOps Engineer",
    department: "DevOps",
    appraisalDate: "11 Mar 2024",
    status: "Active",
  },
];

export default function PerformanceAppraisal() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleAddOrEdit = (data) => {
    if (editingEmployee) {
      setEmployees((prev) =>
        prev.map((emp) => (emp.name === editingEmployee.name ? data : emp))
      );
    } else {
      setEmployees((prev) => [...prev, data]);
    }
    setEditingEmployee(null);
    setModalOpen(false);
  };

  const handleDelete = (name) => {
    setEmployees((prev) => prev.filter((emp) => emp.name !== name));
  };
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Performance Appraisal
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Performance /{" "}
            <span className="text-black">Performance Appraisal</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-0">
          <button
            onClick={() => {
              setEditingEmployee(null);
              setModalOpen(true);
              //   setEditingEmployee(null);
            }}
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-black"
          >
            <FaPlus className="mr-2" />
            Add Appraisal
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Performance Appraisal List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border px-3 py-1 rounded-md"
            />
            <Search className="absolute right-2 top-2 h-4 w-4 text-gray-500" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg text-nowrap">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Name</th>
                <th className="p-3">Designation</th>
                <th className="p-2">Department</th>
                <th className="p-2">Appraisal Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={emp.image}
                      alt={emp.name}
                      className="w-8 h-8 rounded-full"
                    />
                    {emp.name}
                  </td>
                  <td className="p-3">{emp.designation}</td>
                  <td className="p-2">{emp.department}</td>
                  <td className="p-2">{emp.appraisalDate}</td>
                  <td className="p-2">
                    <span className="bg-green-200 text-green-700 px-2 py-1 rounded text-sm">
                      {emp.status}
                    </span>
                  </td>
                  {/* <td className="p-2 flex gap-2">
                    <Pencil
                      className="text-blue-500 cursor-pointer"
                      size={18}
                      onClick={() => {
                        setEditingEmployee(emp);
                        setModalOpen(true);
                      }}
                    />
                    <Trash2
                      className="text-red-500 cursor-pointer"
                      size={18}
                      onClick={() => handleDelete(emp.name)}
                    />
                    <Trash2 className="text-red-500 cursor-pointer" size={18} />
                  </td> */}
                  <td className="">
                                <button
                                
                                  className=" action-btn  hover:text-blue-800" style={{color:"blue"}}
                                >
                                  <FaPenToSquare />
                                </button>
                                <button
                                  className=" action-btn text-danger hover:text-red-800"
                                
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
      {/* Modal */}
      <AddAppraisalModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddOrEdit}
        editingEmployee={editingEmployee}
      />
    </div>
  );
}
