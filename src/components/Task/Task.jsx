import { useState } from "react";
import "./task.css";
import AddTask from "./AddTask"; // Import the AddTask component
import TaskBoard from "./TaskBoard";
import TaskList from "./TaskList";
import TaskGrid from "./TaskGrid";
import { List, Grid } from "lucide-react";
import { useSelector } from "react-redux";

const Task = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [view, setView] = useState("list");
 
  const darkMode = useSelector((state) => state.theme.isDarkMode);
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
      <div className="container mt-4" style={{height:"100vh"}}>
        
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          
          <h2 className="mb-0 font-bold size-{21px}"> Task</h2>
          <div className="add-toggle d-flex">
            {/* View Toggle */}
          
            {/* New Task Button */}
            <button
              className="btn inv-new-button me-3"
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
            <div className={`${darkMode ? "dark-mode" : "" } modal-content `} >
              <div className={`${darkMode ? "dark-mode" : "" }  modal-header`}>
                <h5 className="modal-title">Add Task</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className={`${darkMode ? "dark-mode" : "" }  modal-body `}>
                <AddTask handleCloseModal={handleCloseModal} />
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
