import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getThemeStyles } from './Kanbanboard';

const AddTaskForm = ({ onAdd, onCancel, initialData = {} }) => {
  const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
  const [taskData, setTaskData] = useState({
    title: '',
    project: 'Default Project',
    priority: 'Medium',
    progress: 0,
    ...initialData
  });
  
  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskData.title.trim()) return;
    onAdd(taskData);
  };
  
  return (
    <div className={`${themeStyles.cardBg} p-3 mb-2 rounded shadow`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className={`w-full p-2 mb-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
          placeholder="Enter task title..."
          value={taskData.title}
          onChange={handleChange}
          autoFocus
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className={`px-2 py-1 text-xs ${themeStyles.secondaryText}`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;