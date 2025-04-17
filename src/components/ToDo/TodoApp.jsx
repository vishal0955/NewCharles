import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faSearch, 
  faCog, 
  faPlus, 
  faCalendar, 
  faChevronDown, 
  faChevronRight, 
  faEllipsisV 
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Constants
const PROJECTS = [
  { id: null, name: 'None' },
  { id: 1, name: 'Project Alpha' },
  { id: 2, name: 'Project Beta' },
  { id: 3, name: 'Project Gamma' },
];

const EMPLOYEES = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Mike Johnson' },
  { id: 4, name: 'Sarah Williams' }
];

const PRIORITY_OPTIONS = ['High', 'Medium', 'Low'];
const TAG_OPTIONS = ['Projects', 'Urgent', 'Internal', 'In progress', 'Reminder', 'Completed'];

// TaskFormPopup Component
const TaskFormPopup = ({ isOpen, onClose, onSubmit, editTask }) => {

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const [formData, setFormData] = useState({
    text: '',
    description: '',
    priority: 'high',
    dueDate: '',
    tags: [],
    assignees: [],
    project: null
  });

  const [newTag, setNewTag] = useState('');
  const [newAssignee, setNewAssignee] = useState('');
  const [tagOptions, setTagOptions] = useState(TAG_OPTIONS);
  const [employeeOptions, setEmployeeOptions] = useState(EMPLOYEES);
  const [showTagInput, setShowTagInput] = useState(false);
  const [showAssigneeInput, setShowAssigneeInput] = useState(false);

  useEffect(() => {
    if (editTask) {
      setFormData({
        text: editTask.text || '',
        description: editTask.description || '',
        priority: editTask.priority || 'high',
        dueDate: editTask.dueDate || '',
        tags: Array.isArray(editTask.tags) ? editTask.tags : [],
        assignees: Array.isArray(editTask.assignees) ? editTask.assignees : [],
        project: editTask.project || null
      });
    } else {
      setFormData({
        text: '',
        description: '',
        priority: 'high',
        dueDate: '',
        tags: [],
        assignees: [],
        project: null
      });
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, employeeOptions);
  };

  const addNewTag = () => {
    if (newTag.trim() && !tagOptions.includes(newTag)) {
      setTagOptions([...tagOptions, newTag]);
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag]
      });
      setNewTag('');
      setShowTagInput(false);
    }
  };

  const addNewAssignee = () => {
    if (newAssignee.trim()) {
      const newId = Math.max(...employeeOptions.map(e => e.id), 0) + 1;
      const newEmployee = {
        id: newId,
        name: newAssignee.trim()
      };
      setEmployeeOptions([...employeeOptions, newEmployee]);
      setFormData({
        ...formData,
        assignees: [...formData.assignees, newId]
      });
      setNewAssignee('');
      setShowAssigneeInput(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className={`${darkMode ? "card-dark" : null } modal-content `}>
          <div className="modal-header">
            <h5 className="modal-title text-indigo-600">
              {editTask ? 'Edit Task' : 'Add New Task'}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="">Title</label>
                <input
                  type="text"
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className={`${darkMode ? "dark-mode" : null } form-control `}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label className="">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className={`${darkMode ? "dark-mode" : null } form-control `}
                  rows="3"
                />
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="">Priority</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className={`${darkMode ? "dark-mode" : null } form-control `}
                  >
                    {PRIORITY_OPTIONS.map((priority) => (
                      <option key={priority} value={priority.toLowerCase()}>
                        {priority}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="">Due Date</label>
                  <input
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    className={`${darkMode ? "dark-mode" : null } form-control `}
                  />
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="">Project</label>
                  <select
                    value={formData.project || ''}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value ? Number(e.target.value) : null })}
                    className={`${darkMode ? "dark-mode" : null } form-control `}
                  >
                    {PROJECTS.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="">Tags</label>
                  <div className="input-group mb-2">
                    <select
                      multiple
                      value={formData.tags}
                      onChange={(e) => {
                        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                        setFormData({ ...formData, tags: selectedOptions });
                      }}
                      className={`${darkMode ? "dark-mode" : null } form-control `}
                    >
                      {tagOptions.map((tag) => (
                        <option key={tag} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                    <button 
                      className="btn btn-outline-secondary" 
                      type="button"
                      onClick={() => setShowTagInput(!showTagInput)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  {showTagInput && (
                    <div className="input-group mb-2">
                      <input
                        type="text"
                        className={`${darkMode ? "dark-mode" : null } form-control `}
                        placeholder="New tag name"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                      />
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={addNewTag}
                      >
                        Add
                      </button>
                    </div>
                  )}
                  <small className="form-text text-muted">
                    Hold Ctrl/Cmd to select multiple tags
                  </small>
                </div>
              </div>
              
              <div className="mb-3">
                <label className="">Assignees</label>
                <div className="input-group mb-2">
                  <select
                    multiple
                    value={formData.assignees}
                    onChange={(e) => {
                      const selectedOptions = Array.from(e.target.selectedOptions, (option) => Number(option.value));
                      setFormData({ ...formData, assignees: selectedOptions });
                    }}
                    className={`${darkMode ? "dark-mode" : null } form-control `}
                  >
                    {employeeOptions.map((employee) => (
                      <option key={employee.id} value={employee.id}>
                        {employee.name}
                      </option>
                    ))}
                  </select>
                  <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={() => setShowAssigneeInput(!showAssigneeInput)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                {showAssigneeInput && (
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="New assignee name"
                      value={newAssignee}
                      onChange={(e) => setNewAssignee(e.target.value)}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={addNewAssignee}
                    >
                      Add
                    </button>
                  </div>
                )}
                <small className="form-text text-muted">
                  Hold Ctrl/Cmd to select multiple assignees
                </small>
              </div>
            </div>
            
            <div className="modal-footer">
              <button type="button" onClick={onClose} className="btn btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {editTask ? 'Update Task' : 'Add Task'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// TaskDropdown Component
const TaskDropdown = ({ taskId, onEdit, onDelete, onView }) => {
  return (
    <div className="dropdown-menu show" style={{ position: 'absolute', right: 0 }}>
      <button onClick={onView} className="dropdown-item" type="button">
        View Details
      </button>
      <button onClick={onEdit} className="dropdown-item" type="button">
        Edit
      </button>
      <button onClick={onDelete} className="dropdown-item text-danger" type="button">
        Delete
      </button>
    </div>
  );
};

// Main TodoApp Component
const TodoApp = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Finalize project proposal',
      description: 'Complete the final draft of the project proposal document',
      priority: 'high',
      completed: false,
      dueDate: '2025-01-15',
      tags: ['Projects', 'Urgent'],
      assignees: [1, 2],
      project: 1
    },
    {
      id: 2,
      text: 'Submit to supervisor by EOD',
      description: 'Email the completed documents to supervisor',
      priority: 'high',
      completed: false,
      dueDate: '2024-05-23',
      tags: ['Internal', 'In progress'],
      assignees: [1],
      project: 2
    },
    {
      id: 3,
      text: 'Check and respond to emails',
      description: 'Go through unread emails and respond to important ones',
      priority: 'medium',
      completed: true,
      dueDate: '2025-03-18',
      tags: ['Reminder', 'Completed'],
      assignees: [1, 2],
      project: 3
    },
  ]);

  const [activeFilter, setActiveFilter] = useState('all');
  const [dueDateFilter, setDueDateFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [sortBy, setSortBy] = useState('createdDate');
  const [newTask, setNewTask] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [allEmployees, setAllEmployees] = useState(EMPLOYEES);

  const filteredTasks = tasks
    .filter((task) => {
      if (activeFilter !== 'all' && task.priority !== activeFilter) return false;
      if (dueDateFilter && task.dueDate !== dueDateFilter) return false;
      if (tagFilter && !task.tags.includes(tagFilter)) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'createdDate') return a.id - b.id;
      if (sortBy === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
      return 0;
    });

  const handleClose = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleCheckboxChange = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getTagColor = (tag) => {
    switch(tag) {
      case 'Projects': return 'badge bg-success text-light';
      case 'Urgent': return 'badge bg-danger text-light';
      case 'Internal': return 'badge bg-warning text-dark';
      case 'In progress': return 'badge bg-primary text-light';
      case 'Reminder': return 'badge bg-info text-dark';
      case 'Completed': return 'badge bg-success text-light';
      default: return 'badge bg-secondary text-light';
    }
  };

  const highPriorityTasks = filteredTasks.filter(task => task.priority === 'high');
  const mediumPriorityTasks = filteredTasks.filter(task => task.priority === 'medium');
  const lowPriorityTasks = filteredTasks.filter(task => task.priority === 'low');

  const handleAddTask = (newTaskData, updatedEmployees) => {
    if (updatedEmployees) {
      setAllEmployees(updatedEmployees);
    }
    
    if (editingTask) {
      setTasks(tasks.map(task => 
        task.id === editingTask.id ? { ...task, ...newTaskData } : task
      ));
    } else {
      const newTaskObj = {
        id: Math.max(...tasks.map(t => t.id), 0) + 1,
        ...newTaskData,
        completed: false,
        tags: Array.isArray(newTaskData.tags) ? newTaskData.tags : [],
        assignees: Array.isArray(newTaskData.assignees) ? newTaskData.assignees : []
      };
      setTasks(prevTasks => [...prevTasks, newTaskObj]);
    }
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
    setActiveDropdown(null);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setActiveDropdown(null);
  };

  const handleViewDetails = (task) => {
    alert(`Task Details:\n\nTitle: ${task.text}\nDescription: ${task.description}\nPriority: ${task.priority}\nDue Date: ${task.dueDate}\nTags: ${task.tags.join(', ')}`);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  const getAssigneeName = (id) => {
    const employee = allEmployees.find(emp => emp.id === id);
    return employee ? employee.name : 'Unknown';
  };

  const getProjectName = (id) => {
    const project = PROJECTS.find(proj => proj.id === id);
    return project ? project.name : 'None';
  }; 
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const navigate = useNavigate();

  const handleRowClick = (taskId) => {
    navigate(`/task/${taskId}`);
    // navigate("/tododetails")
  };

  return (
    <div className={` ${darkMode ? "" : null } min-h-screen `}>
      <div className=" mx-auto px-3 px-md-4 px-lg-5 py-4">
        {/* Header */}
        <header className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">
          <div className="mb-3 mb-md-0">
            <h1 className="h3 mb-0">Todo</h1>
          </div>
          <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center w-30  w-md-auto">
            <div className="input-group me-sm-2 mb-2 mb-sm-0 flex-grow-1">
              <span className={` ${darkMode ? "dark-mode" : null }  input-group-text `}>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input 
                type="text" 
                className={` ${darkMode ? "dark-mode" : null } form-control color-gray-300 `} 
                placeholder="Search Todo List" 
              />
            </div>
            <button className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faCog} />
            </button>
          </div>
        </header>

        {/* Stats */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">
          <div className="mb-2 mb-md-0">
            <h2 className="h5 mb-0">Total Todo <small className="text-muted">{tasks.length}</small></h2>
          </div>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2 gap-md-3">
            <span>Total Tasks: <strong>{tasks.length}</strong></span>
            <span>Pending: <strong>{tasks.filter(t => !t.completed).length}</strong></span>
            <span>Completed: <strong>{tasks.filter(t => t.completed).length}</strong></span>
          </div>
        </div>

        {/* New Task Input */}
        <div className="mb-4">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <FontAwesomeIcon icon={faPlus} className="text-muted" />
            </span>
            <input 
              type="text" 
              className= {` ${darkMode ? "dark-mode" : null } form-control `}
              aria-label="New task"
              placeholder="New task" 
              value={newTask}
              onClick={() => setIsModalOpen(true)}
              onChange={(e) => setNewTask(e.target.value)}
              readOnly
            />
          </div>
        </div>

        {/* Filters */}
        <div className="row mb-4  ">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className="btn-group " role="group">
              <button 
                className={`btn btn-sm ${activeFilter === 'all' ? 'btn-dark' : 'btn-light'}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`btn btn-sm ${activeFilter === 'high' ? 'btn-dark' : 'btn-light'}`}
                onClick={() => setActiveFilter('high')}
              >
                High
              </button>
              <button 
                className={`btn btn-sm ${activeFilter === 'medium' ? 'btn-dark' : 'btn-light'}`}
                onClick={() => setActiveFilter('medium')}
              >
                Medium
              </button>
              <button 
                className={`btn btn-sm ${activeFilter === 'low' ? 'btn-dark' : 'btn-light'}`}
                onClick={() => setActiveFilter('low')}
              >
                Low
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row g-2">
              <div className="col-4 col-sm-4">
                <label className= {` ${darkMode ? "dark-mode" : null }  form-label small`}>Due Date</label>
                <select
                  value={dueDateFilter}
                  onChange={(e) => setDueDateFilter(e.target.value)}
                  className={` ${darkMode ? "dark-mode" : null } form-select form-select-sm`}
                >
                  <option value="">All</option>
                  {Array.from(new Set(tasks.map((task) => task.dueDate))).map((date) => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-4 col-sm-4">
                <label className={` ${darkMode ? "dark-mode" : null } form-label small`}>All Tags</label>
                <select
                  value={tagFilter}
                  onChange={(e) => setTagFilter(e.target.value)}
                  className={` ${darkMode ? "dark-mode" : null } form-select form-select-sm`}
                >
                  <option value="">All</option>
                  {TAG_OPTIONS.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-4 col-sm-4">
                <label className={` ${darkMode ? "dark-mode" : null } form-label small`}>Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={` ${darkMode ? "dark-mode" : null } form-select form-select-sm`}>
                  <option value="createdDate">Created Date</option>
                  <option value="dueDate">Due Date</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Task Sections */}
        {(activeFilter === 'all' || activeFilter === 'high') && highPriorityTasks.length > 0 && (
          <div className={`${darkMode ? "dark-mode" : null } `}>
            <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-2">
              <div className="d-flex align-items-center mb-2 mb-sm-0">
                <FontAwesomeIcon icon={faChevronDown} className="me-2 text-muted" />
                <h3 className="h6 mb-0 me-2">High</h3>
                <span className="text-muted small">{highPriorityTasks.length}</span>
              </div>
              <div className="ms-sm-auto d-flex">
                <button 
                  className="btn btn-link btn-sm text-decoration-none px-1 px-sm-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add New
                </button>
                <button className="btn btn-link btn-sm text-decoration-none text-muted px-1 px-sm-2">
                  See All
                </button>
              </div>
            </div>
            
            <div className="table-responsive " >
              <table className= {` ${darkMode ? "table-dark" : null }  table table-striped`}>
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Project</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Assignees</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {highPriorityTasks.map(task => (
                    <tr key={task.id} onClick={() => handleRowClick(task.id)} style={{ cursor: 'pointer' }}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="form-check me-3">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              checked={task.completed}
                              onChange={() => handleCheckboxChange(task.id)}
                            />
                          </div>
                          <p className={`mb-0 ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                            {task.text}
                          </p>
                        </div>
                      </td>
                      <td>{getProjectName(task.project)}</td>
                      <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No date'}</td>
                      <td>
                        <div className="d-flex flex-wrap">
                          {task.tags.map(tag => (
                            <span key={tag} className={`${getTagColor(tag)} small px-2 py-1 rounded me-1 mb-1`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          {task.assignees.slice(0, 2).map(assigneeId => {
                            const name = getAssigneeName(assigneeId);
                            return (
                              <div 
                                key={assigneeId}
                                className="rounded-circle border border-white bg-secondary text-white d-flex align-items-center justify-content-center me-n1"
                                style={{ width: '32px', height: '32px', fontSize: '0.75rem' }}
                                title={name}
                              >
                                {name.charAt(0).toUpperCase()}
                              </div>
                            );
                          })}
                          {task.assignees.length > 2 && (
                            <div 
                              className="rounded-circle border border-white bg-secondary text-white d-flex align-items-center justify-content-center"
                              style={{ width: '32px', height: '32px', fontSize: '0.75rem' }}
                              title={`${task.assignees.length - 2} more`}
                            >
                              +{task.assignees.length - 2}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="dropdown-container position-relative">
                        <button 
                          className="btn btn-sm btn-light"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(activeDropdown === task.id ? null : task.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                        {activeDropdown === task.id && (
                          <TaskDropdown
                            taskId={task.id}
                            onEdit={() => handleEdit(task)}
                            onDelete={() => handleDelete(task.id)}
                            onView={() => handleViewDetails(task)}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(activeFilter === 'all' || activeFilter === 'medium') && mediumPriorityTasks.length > 0 && (
          <div className="mb-5">
            <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-2">
              <div className="d-flex align-items-center mb-2 mb-sm-0">
                <FontAwesomeIcon icon={faChevronRight} className="me-2 text-muted" />
                <h3 className="h6 mb-0 me-2">Medium</h3>
                <span className="text-muted small">{mediumPriorityTasks.length}</span>
              </div>
              {/* <div className="ms-sm-auto d-flex">
                <button 
                  className="btn btn-link btn-sm text-decoration-none px-1 px-sm-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add New
                </button>
              </div> */}
            </div>
            
            <div className="table-responsive" >
              <table className= {` ${darkMode ? "table-dark" : null }  table table-striped`}>
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Project</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Assignees</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mediumPriorityTasks.map(task => (
                    <tr key={task.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="form-check me-3">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              checked={task.completed}
                              onChange={() => handleCheckboxChange(task.id)}
                            />
                          </div>
                          <p className={`mb-0 ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                            {task.text}
                          </p>
                        </div>
                      </td>
                      <td>{getProjectName(task.project)}</td>
                      <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No date'}</td>
                      <td>
                        <div className="d-flex flex-wrap">
                          {task.tags.map(tag => (
                            <span key={tag} className={`${getTagColor(tag)} small px-2 py-1 rounded me-1 mb-1`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          {task.assignees.slice(0, 2).map(assigneeId => {
                            const name = getAssigneeName(assigneeId);
                            return (
                              <div 
                                key={assigneeId}
                                className="rounded-circle border border-white bg-secondary text-white d-flex align-items-center justify-content-center me-n1"
                                style={{ width: '32px', height: '32px', fontSize: '0.75rem' }}
                                title={name}
                              >
                                {name.charAt(0).toUpperCase()}
                              </div>
                            );
                          })}
                          {task.assignees.length > 2 && (
                            <div 
                              className="rounded-circle border border-white bg-secondary text-white d-flex align-items-center justify-content-center"
                              style={{ width: '32px', height: '32px', fontSize: '0.75rem' }}
                              title={`${task.assignees.length - 2} more`}
                            >
                              +{task.assignees.length - 2}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="dropdown-container position-relative">
                        <button 
                          className="btn btn-sm btn-light"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(activeDropdown === task.id ? null : task.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                        {activeDropdown === task.id && (
                          <TaskDropdown
                            taskId={task.id}
                            onEdit={() => handleEdit(task)}
                            onDelete={() => handleDelete(task.id)}
                            onView={() => handleViewDetails(task)}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(activeFilter === 'all' || activeFilter === 'low') && lowPriorityTasks.length > 0 && (
          <div className="mb-5">
            <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-2">
              <div className="d-flex align-items-center mb-2 mb-sm-0">
                <FontAwesomeIcon icon={faChevronRight} className="me-2 text-muted" />
                <h3 className="h6 mb-0 me-2">Low</h3>
                <span className="text-muted small">{lowPriorityTasks.length}</span>
              </div>
              <div className="ms-sm-auto d-flex">
                <button 
                  className="btn btn-link btn-sm text-decoration-none px-1 px-sm-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add New
                </button>
              </div>
            </div>
            
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Project</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Assignees</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {lowPriorityTasks.map(task => (
                    <tr key={task.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="form-check me-3">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              checked={task.completed}
                              onChange={() => handleCheckboxChange(task.id)}
                            />
                          </div>
                          <p className={`mb-0 ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                            {task.text}
                          </p>
                        </div>
                      </td>
                      <td>{getProjectName(task.project)}</td>
                      <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No date'}</td>
                      <td>
                        <div className="d-flex flex-wrap">
                          {task.tags.map(tag => (
                            <span key={tag} className={`${getTagColor(tag)} small px-2 py-1 rounded me-1 mb-1`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          {task.assignees.slice(0, 2).map(assigneeId => {
                            const name = getAssigneeName(assigneeId);
                            return (
                              <div 
                                key={assigneeId}
                                className="rounded-circle border border-white bg-secondary text-white d-flex align-items-center justify-content-center me-n1"
                                style={{ width: '32px', height: '32px', fontSize: '0.75rem' }}
                                title={name}
                              >
                                {name.charAt(0).toUpperCase()}
                              </div>
                            );
                          })}
                          {task.assignees.length > 2 && (
                            <div 
                              className="rounded-circle border border-white bg-secondary text-white d-flex align-items-center justify-content-center"
                              style={{ width: '32px', height: '32px', fontSize: '0.75rem' }}
                              title={`${task.assignees.length - 2} more`}
                            >
                              +{task.assignees.length - 2}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="dropdown-container position-relative">
                        <button 
                          className="btn btn-sm btn-light"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(activeDropdown === task.id ? null : task.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                        {activeDropdown === task.id && (
                          <TaskDropdown
                            taskId={task.id}
                            onEdit={() => handleEdit(task)}
                            onDelete={() => handleDelete(task.id)}
                            onView={() => handleViewDetails(task)}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <TaskFormPopup 
          isOpen={isModalOpen} 
          onClose={handleClose}
          onSubmit={handleAddTask}
          editTask={editingTask}
        />
      )}
    </div>
  );
};

export default TodoApp;