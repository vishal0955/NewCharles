import { useState } from "react";
import "./task.css";
import AddTask from "./AddTask"; // Import the AddTask component
import TaskBoard from "./TaskBoard";
import TaskList from "./TaskList";
import TaskGrid from "./TaskGrid";
import { List, Grid } from "lucide-react";

const Task = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [view, setView] = useState("list");

  const toggleView = (selectedView) => {
    setView(selectedView);
  };
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container mt-4">
        
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          
          <h4 className="mb-0"></h4>
          <div className="add-toggle d-flex">
            {/* View Toggle */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="view-toggle">
                {/* Grid/List View Buttons */}
                <div className="mr-2 flex border border-gray-300 rounded">
                  {/* <button
                    className={`p-2 ${view === 'list' ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
                    onClick={() => toggleView("list")}
                  >
                    <List size={18} />
                  </button> */}
                  {/* <button
                    className={`p-2 ${view === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
                    onClick={() => toggleView("grid")}
                  >
                    <Grid size={18} />
                  </button> */}
                </div>
                {/* Task Board Button */}
                {/* <button
                  className={`p-2 ${view === "taskbord" ? "bg-black text-white" : "bg-white text-gray-700"}`}
                  onClick={() => toggleView("taskbord")}
                >
                  Task Board
                </button> */}
              </div>
            </div>
            {/* New Task Button */}
            <button
              className="btn new-task-btn me-3"
              style={{ height: "fit-content", marginLeft: "15px" }}
              onClick={handleOpenModal}
            >
              <i className="bi bi-plus" /> New Task
            </button>
          </div>
        </div>
        

        {/* Grid View */}
        <div className={`grid-view ${view === "grid" ? "active" : "d-none"}`}>
          <TaskGrid />
        </div>

        {/* List View */}
        <div className={`list-view ${view === "list" ? "active" : "d-none"}`}>
          <TaskList />
        </div>

        {/* Task Board */}
        <div className={`list-view ${view === "taskbord" ? "active" : "d-none"}`}>
          <TaskBoard />
        </div>
      </div>

      {/* Modal for AddTask */}
      {isModalOpen && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Task</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <AddTask />
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default Task;
