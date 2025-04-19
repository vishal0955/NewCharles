import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaPenToSquare, FaTrash, FaEye } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

const TaskList = () => {

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const navigate = useNavigate();
  const location = useLocation();

  // Priority based on route
  const path = location.pathname.toLowerCase();
  let priorityFromRoute = 'All';
  if (path.includes('highpriority')) priorityFromRoute = 'High';
  else if (path.includes('mediumpriority')) priorityFromRoute = 'Medium';
  else if (path.includes('lowpriority')) priorityFromRoute = 'Low';

  const handleRowClick = (taskId) => {
    navigate(`/task/${taskId}`);
  };

  const tasks = [
    { id: 1, task: 'Design System Update', project: 'Brand Refresh Project', status: 'In Progress', priority: 'High', assignedTo: 'Sarah Chen', avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen', dueDate: '2025-04-25' },
    { id: 2, task: 'Backend API Refactor', project: 'HRM Module', status: 'Completed', priority: 'Medium', assignedTo: 'John Doe', avatar: 'https://ui-avatars.com/api/?name=John+Doe', dueDate: '2025-04-20' },
    { id: 3, task: 'UI Bug Fixes', project: 'Task Management', status: 'Pending', priority: 'Low', assignedTo: 'Emily Stone', avatar: 'https://ui-avatars.com/api/?name=Emily+Stone', dueDate: '2025-04-22' },
    { id: 4, task: 'Quote PDF Export Feature', project: 'Invoice System', status: 'In Progress', priority: 'High', assignedTo: 'Mike Ross', avatar: 'https://ui-avatars.com/api/?name=Mike+Ross', dueDate: '2025-04-26' },
    { id: 5, task: 'Role Permission Page UI', project: 'SaaS Admin Panel', status: 'Pending', priority: 'Medium', assignedTo: 'Rachel Green', avatar: 'https://ui-avatars.com/api/?name=Rachel+Green', dueDate: '2025-04-28' },
  ];

  const filteredTasks = priorityFromRoute === 'All'
    ? tasks
    : tasks.filter(task => task.priority === priorityFromRoute);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Completed': return 'status-badge status-completed';
      case 'In Progress': return 'status-badge status-in-progress';
      case 'Pending': return 'status-badge status-pending';
      default: return '';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'High': return <i className="bi bi-arrow-up priority-high" />;
      case 'Medium': return <i className="bi bi-arrow-right priority-medium" />;
      case 'Low': return <i className="bi bi-arrow-down priority-low" />;
      default: return null;
    }
  };

  return (
    <>
      {/* <h2 className="mb-4">
      
 {priorityFromRoute === 'All' ? 'All Tasks' : `${priorityFromRoute} Priority Tasks`}
      </h2> */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className={`${darkMode ? "dark-mode" : "" } search-container `}>
          <input
            type="text"
            className = {`${darkMode ? "dark-mode" : "" } search-box `}
            placeholder="Search tasks..."
          />
        </div>
        <div className="d-flex gap-2">
          <select className={`${darkMode ? "dark-mode" : "" } form-select filter-select `}>
            <option>All Status</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
          <select className={`${darkMode ? "dark-mode" : "" } form-select filter-select `}>
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>

      <div className="table-responsive">
        <table className={`${darkMode ? "table-dark border border-1" : "bg-gray-50" } table align-middle`}>
          <thead>
            <tr>
              <th><input type="checkbox" className="form-check-input" /></th>
              <th>Task</th>
              <th>Project</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map(task => (
              <tr key={task.id}>
                <td><input type="checkbox" className="form-check-input" /></td>
                <td onClick={() => handleRowClick(task.id)}>{task.task}</td>
                <td onClick={() => handleRowClick(task.id)}>{task.project}</td>
                <td><span className={getStatusBadgeClass(task.status)}>{task.status}</span></td>
                <td>{getPriorityIcon(task.priority)} {task.priority}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={task.avatar} className="avatar" alt={task.assignedTo} />
                    <span className="ms-2">{task.assignedTo}</span>
                  </div>
                </td>
                <td>{task.dueDate}</td>
                <td>
                  <button className="action-btn text-info" onClick={() => handleRowClick(task.id)}>
                    <FaEye />
                  </button>
                  <button className="action-btn text-primary"><FaPenToSquare /></button>
                  <button className="action-btn text-danger"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
