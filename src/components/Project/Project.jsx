import { Kanban } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectCard from "./Cards/proj_card";
import { useSelector } from "react-redux";
import ResourceTimelineCalendar from "../ResourceTimlineCalendar";
import KanbanBoard from "../Kanban/Kanban";
import { Pagination } from "react-bootstrap";
import TeamAvailabilityCalendar from "./SchedulingTimeLine";

const initialTasks = [
  {
    id: 1,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 2,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 3,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 4,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 5,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 6,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 7,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 8,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 9,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 10,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 11,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 12,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 13,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 14,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
  {
    id: 15,
    name: "Chatbots",
    members: "Sarah Chen",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
    startDate: "29-12-2024",
    deadline: "29-04-2025",
    client: "Kailee Kuvalis",
    progress: 86,
    status: "In Progress",
  },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tasks, setTasks] = useState(initialTasks);
  const [showModal, setShowModal] = useState(false);
  const [showClientModal, setShowClientModal] = useState(false);
  const [clients, setClients] = useState(["Kailee Kuvalis"]);
  const [clientForm, setClientForm] = useState({
    name: "",
    email: "",
    company: "",
    login: "No",
  });


   
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
  
    const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
    const indexOfLastItem = currentPage * itemsPerPage;
    const paginatedDesignations = tasks.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(tasks.length / itemsPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  const [editId, setEditId] = useState(null);
  const [newProject, setNewProject] = useState({
    name: "",
    deadline: "",
    startDate: "",
    department: "",
    client: "",
    category: "",
    members: "",
  });
  // const [showModal, setShowModal] = useState(false);
  // const handleOpenModal = () => setShowModal(true);
  // const handleCloseModal = () => setShowModal(false);

  const handleOpenModal = (task = null) => {
    if (task) {
      setEditId(task.id);
      setNewProject({
        name: task.name,
        deadline: task.deadline,
        startDate: task.startDate,
        department: "",
        client: task.client,
        category: "",
        members: task.members,
      });
    } else {
      setEditId(null);
      setNewProject({
        name: "",
        deadline: "",
        startDate: "",
        department: "",
        client: "",
        category: "",
        members: "",
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditId(null);
  };

  const handleAddOrEditProject = (e) => {
    e.preventDefault();
    if (editId) {
      setTasks(
        tasks.map((task) =>
          task.id === editId
            ? {
                ...task,
                name: newProject.name,
                deadline: newProject.deadline,
                startDate: newProject.startDate,
                client: newProject.client,
                members: newProject.members,
              }
            : task
        )
      );
    } else {
      const newTask = {
        id: tasks.length + 1,
        name: newProject.name,
        members: newProject.members,
        avatar:
          "https://ui-avatars.com/api/?name=" +
          newProject.members.replace(/ /g, "+"),
        startDate: newProject.startDate,
        deadline: newProject.deadline,
        client: newProject.client,
        progress: 0,
        status: "Pending",
      };
      setTasks([...tasks, newTask]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleClientSave = (e) => {
    e.preventDefault();
    if (clientForm.name && !clients.includes(clientForm.name)) {
      setClients([...clients, clientForm.name]);
    }
    setClientForm({ name: "", email: "", company: "", login: "No" });
    setShowClientModal(false);
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <h4 className="mb-0 text-2xl font-bold text-start text-md-start w-100 w-md-auto">
          All Projects
        </h4>

        <div className="add-toggle d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 w-100 w-md-auto">
        

          <div className= {` ${darkMode ? "dark-mode" : null } view-toggle d-flex flex-wrap gap-1`}>
            {/* <Link to="/ProjectTimelineCalendar"> */}
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-1"
              onClick={() => setActiveTab(0)}
            >
              <i className="bi bi-grid" /> TimeLine
            </button>
            {/* </Link> */}
            {/* <Link to="/projectlist"> */}
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-1"
              onClick={() => setActiveTab(1)}
            >
              <i className="bi bi-list" /> List View
            </button>
            {/* </Link> */}
            {/* <Link to="/kanban"> */}
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-1"
              onClick={() => setActiveTab(2)}
            >
              <Kanban /> Board View
            </button>
            {/* </Link> */}
          </div>

          <button
            className="btn btn-primary add-project-btn"
            style={{ height: "fit-content" }}
            onClick={handleOpenModal}
          >
            <i className="bi bi-plus" /> Add New Project
          </button>
        </div>
      </div>

      {activeTab === 0 && <TeamAvailabilityCalendar />}
      {activeTab === 2 && <KanbanBoard />}

      {activeTab === 1 && (
        <>
          <div className={` ${darkMode ? "dark-mode" : null } table-responsive `}>
            <table className= {` ${darkMode ? "table-dark" : null } table align-middle text-nowrap`}>
              <thead className={` ${darkMode ? "table-mode" : null } text-nowrap`}>
                <tr>
                  <th style={{ width: "40px" }}>
                    <input type="checkbox" className="form-check-input" />
                  </th>
                  <th>Client</th>
                  <th>Members</th>
                  <th>Start Date</th>
                  <th>Deadline</th>
                  <th>Project Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {paginatedDesignations.map((task) => (
               
                  <tr key={task.id}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>
                    <td>{task.client}</td>
                    <td>
                      <img
                        src={task.avatar}
                        className="avatar me-1"
                        alt="avatar"
                      />
                      +3
                    </td>
                    <td>{task.startDate}</td>
                    <td>{task.deadline}</td>
                    <td>{task.name}</td>
                    <td>
                      <div className="progress" style={{ height: "10px" }}>
                        <div
                          className="progress-bar bg-success"
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                      <span className="badge bg-info mt-1">{task.status}</span>
                    </td>
                    <td>
                      <button
                        onClick={() => handleOpenModal(task)}
                        className="text-blue-500"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="text-red-500"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, tasks.length)} of {tasks.length} entries
          </div>
          <Pagination>
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </Pagination>
        </div>
        </>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-200">
          <div className={`${darkMode ? "card-dark" : null } bg-white  rounded-lg p-6 overflow-y-auto max-h-[90vh] `}>
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-xl font-semibold">Add Project</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-black text-2xl"
              >
                &times;
              </button>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    className={`${darkMode ? "card-dark" : null } w-full border px-3 py-2 rounded `}
                    placeholder="Write a project name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Deadline *
                  </label>
                  <input
                    type="date"
                    className={`${darkMode ? "card-dark" : null } w-full border px-3 py-2 rounded `}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className= {`${darkMode ? "card-dark" : null } w-full border px-3 py-2 rounded `}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Department
                  </label>
                  <select className={`${darkMode ? "card-dark" : null } w-full border px-3 py-2 rounded `}>
                    <option>Nothing selected</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Client
                    <button
                      type="button"
                      onClick={() => setShowClientModal(true)}
                      className="ml-2 text-white font-bold border border-blue-600 bg-blue-600 ms-2 px-1 rounded"
                    >
                      +
                    </button>
                  </label>
                  <select className={`${darkMode ? "card-dark" : null } w-full border px-3 py-2 rounded `}>
                    <option value="johnsmith">John Smith </option>
                    <option value="johndoe">John Doe </option>
                    <option value="dwayne">Dwayne Johnson </option>
                    <option vslue="alexsmith">Alex Smith </option>


                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Project Category
                  </label>
                  <select className={`${darkMode ? "card-dark" : null } w-full border px-3 py-2 rounded `}>
                    <option value="">Select</option>
                    <option value="devolpment">Devolpment</option>
                    <option value="Marketing">Marketing</option>



                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Add Project Members *
                  </label>
                  <select className={`${darkMode ? "card-dark" : null } w-full border px-3 py-2 rounded `}>
                    <option value="">Select a member</option>
                    <option value="johndoe">John Doe </option>
                    <option value="dwayne">Dwayne Johnson </option>
                    <option vslue="alexsmith">Alex Smith </option>


                  </select>
                </div>
              </div>


              <div className="flex justify-end gap-3 pt-4 border-t mt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

   
         
            {/* <form onSubmit={handleAddOrEditProject} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    className={`${darkMode ? "card-dark" : null} w-full border px-3 py-2 rounded`}
                    value={newProject.name}
                    onChange={(e) =>
                      setNewProject({ ...newProject, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Deadline *
                  </label>
                  <input
                    type="date"
                    className={`${darkMode ? "card-dark" : null} w-full border px-3 py-2 rounded`}
                    value={newProject.deadline}
                    onChange={(e) =>
                      setNewProject({ ...newProject, deadline: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className={`${darkMode ? "card-dark" : null} w-full border px-3 py-2 rounded`}
                    value={newProject.startDate}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        startDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    className={`${darkMode ? "card-dark" : null} w-full border px-3 py-2 rounded`}
                    value={newProject.department}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        department: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Client{" "}
                    <button
                      type="button"
                      onClick={() => setShowClientModal(true)}
                      className="ml-2 text-blue-600 font-bold"
                    >
                      +
                    </button>
                  </label>
                  <select
                    className={`${darkMode ? "card-dark" : null} w-full border px-3 py-2 rounded`}
                    value={newProject.client}
                    onChange={(e) =>
                      setNewProject({ ...newProject, client: e.target.value })
                    }
                  >
                    <option value="">Select Client</option>
                    {clients.map((client, idx) => (
                      <option key={idx} value={client}>
                        {client}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Project Category
                  </label>
                  <input
                    type="text"
                    className={`${darkMode ? "card-dark" : null} w-full border px-3 py-2 rounded`}
                    value={newProject.category}
                    onChange={(e) =>
                      setNewProject({ ...newProject, category: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Add Project Members *
                  </label>
                  <input
                    type="text"
                    className={`${darkMode ? "card-dark" : null} w-full border px-3 py-2 rounded`}
                    value={newProject.members}
                    onChange={(e) =>
                      setNewProject({ ...newProject, members: e.target.value })
                    }
                  />
                </div> 

             <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">
                    Public Gantt Chart
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gantt"
                        defaultChecked
                        className="form-radio"
                      />
                      <span className="ml-2">Enable</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="gantt" className="form-radio" />
                      <span className="ml-2">Disable</span>
                    </label>
                  </div>
                </div>
             </div>
              <div className="flex justify-end gap-3 pt-4 border-t my-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>  */}
        
            
{/* 
{showModal && (
     <div className="modal fade show d-block bg-opacity-50 bg-gray-50" role="dialog">
            <div className="modal-dialog modal-lg " role="document">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-xl font-semibold">
                {editId ? "Edit" : "Add"} Project
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-black text-2xl"
              >
                &times;
              </button>
            </div>
            <ProjectCard />
          </div>
        </div>
      )} */}
      {showClientModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg p-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-xl font-semibold">Client</h3>
              <button
                onClick={() => setShowClientModal(false)}
                className="text-gray-500 hover:text-black text-2xl"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleClientSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Client Name *
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded"
                  value={clientForm.name}
                  onChange={(e) =>
                    setClientForm({ ...clientForm, name: e.target.value })
                  }
                  placeholder="e.g. John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border px-3 py-2 rounded"
                  value={clientForm.email}
                  onChange={(e) =>
                    setClientForm({ ...clientForm, email: e.target.value })
                  }
                  placeholder="e.g. johndoe@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded"
                  value={clientForm.company}
                  onChange={(e) =>
                    setClientForm({ ...clientForm, company: e.target.value })
                  }
                  placeholder="e.g. Acme Corporation"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Login Allowed?
                </label>
                <div className="flex items-center gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="login"
                      value="Yes"
                      checked={clientForm.login === "Yes"}
                      onChange={(e) =>
                        setClientForm({ ...clientForm, login: e.target.value })
                      }
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="login"
                      value="No"
                      checked={clientForm.login === "No"}
                      onChange={(e) =>
                        setClientForm({ ...clientForm, login: e.target.value })
                      }
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t mt-4">
                <button
                  type="button"
                  onClick={() => setShowClientModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
