import React, { useState, useEffect } from 'react';
import "./task.css";

const TaskBoard = () => {
    const [tasks, setTasks] = useState({
        todo: [
            { id: "task1", title: "Brand Guide Creation", description: "Create comprehensive brand guidelines document", priority: "High", dueDate: "Oct 20", progress: 25, avatars: ["https://i.ibb.co/PGg1c87h/Ellipse-5-6.png"] }
        ],
        inProgress: [
            { id: "task2", title: "Mobile App UI Design", description: "Design user interface for mobile application", status: "In Review", dueDate: "Nov 15", progress: 65, avatars: ["https://i.ibb.co/PGg1c87h/Ellipse-5-6.png", "https://i.ibb.co/Jj86BTPS/Ellipse-5-7.png"] }
        ],
        completed: [
            { id: "task3", title: "Website Homepage", description: "Redesign and deploy new homepage", status: "Completed", dueDate: "Sep 30", progress: 100, avatars: ["https://i.ibb.co/F4bnLs5h/user-11.jpg"] }
        ]
    });
    
    const allowDrop = (ev) => {
        ev.preventDefault();
        ev.currentTarget.classList.add('dragover');
    };

    const drag = (ev, taskId, column) => {
        ev.dataTransfer.setData("taskId", taskId);
        ev.dataTransfer.setData("column", column);
    };

    const drop = (ev, newColumn) => {
        ev.preventDefault();
        const taskId = ev.dataTransfer.getData("taskId");
        const oldColumn = ev.dataTransfer.getData("column");

        if (oldColumn !== newColumn) {
            setTasks(prevTasks => {
                const updatedOldColumn = prevTasks[oldColumn].filter(task => task.id !== taskId);
                const draggedTask = prevTasks[oldColumn].find(task => task.id === taskId);
                const updatedNewColumn = [...prevTasks[newColumn], draggedTask];
                return { ...prevTasks, [oldColumn]: updatedOldColumn, [newColumn]: updatedNewColumn };
            });
        }
    };

    return (
        <div className="container-fluid board-container">
          
            {/* Header */}
            {/* <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-2">Task Board</h4>
            </div> */}
            {/* Search and Filters */}
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="search-container">
              <input
                type="text"
                className="search-box"
                placeholder="Search tasks..."
              />
            </div>
            <div className="d-flex gap-2">
              <select className="form-select filter-select">
                <option>All Status</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
              <select className="form-select filter-select">
                <option>All Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
            {/* <div className="completion-info d-flex justify-content-end">
                <span className="completion-text">45%</span>
                <span className="completion-percent">Complete</span>
            </div> */}
            {/* Board Columns */}
            <div className="board-columns grid-view">
                {Object.keys(tasks).map(column => (
                    <div
                        key={column}
                        className="board-column"
                        onDrop={(ev) => drop(ev, column)}
                        onDragOver={allowDrop}
                    >
                        <div className="column-header">
                            <div className="column-title">
                                {column === "todo" && <i className="bi bi-circle" />} 
                                {column === "inProgress" && <i className="bi bi-arrow-repeat text-primary" />} 
                                {column === "completed" && <i className="bi bi-check-circle-fill text-success" />} 
                                {column.replace(/([A-Z])/g, ' $1').trim()}
                                <span className="task-count">{tasks[column].length}</span>
                            </div>
                        </div>
                        {tasks[column].map(task => (
                            <div
                                key={task.id}
                                id={task.id}
                                className="task-card"
                                draggable="true"
                                onDragStart={(ev) => drag(ev, task.id, column)}
                            >
                                <div className="task-content">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        {task.priority && <span className="priority-badge priority-high"><i className="bi bi-arrow-up-circle-fill" /> {task.priority} Priority</span>}
                                        {task.status && <span className={`status-badge status-${task.status.toLowerCase()}`}>{task.status}</span>}
                                    </div>
                                    <h6 className="task-title">{task.title}</h6>
                                    <p className="task-description">{task.description}</p>
                                </div>
                                <div className="progress-wrapper">
                                    <span className="progress-label">{task.progress}%</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: `${task.progress}%` }} aria-valuenow={task.progress} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="task-meta">
                                    <span><i className="bi bi-calendar me-1" /> {task.dueDate}</span>
                                    <div className="d-flex">
                                        {task.avatars.map((avatar, index) => (
                                            <img key={index} src={avatar} className="avatar" alt="avatar" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskBoard;
