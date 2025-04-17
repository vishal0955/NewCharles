import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getThemeStyles } from './Kanbanboard';

const AddColumnForm = ({ onAdd, onCancel }) => {
  const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('bg-indigo-500');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onAdd({ title, color });
  };
  
  return (
    <div className="w-64 flex-shrink-0">
      <div className={`${themeStyles.cardBg} p-3 rounded shadow`}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={`w-full p-2 mb-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
            placeholder="Enter column title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <div className="mb-3">
            <label className="block text-sm mb-1">Color</label>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className={`w-full p-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
            >
              <option value="bg-indigo-500">Indigo</option>
              <option value="bg-blue-500">Blue</option>
              <option value="bg-green-500">Green</option>
              <option value="bg-yellow-500">Yellow</option>
              <option value="bg-red-500">Red</option>
              <option value="bg-purple-500">Purple</option>
            </select>
          </div>
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
    </div>
  );
};

export default AddColumnForm;