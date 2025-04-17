// File: features/kanban/kanbanSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Task 1', description: '', priority: 'medium' },
    'task-2': { id: 'task-2', title: 'Task 2', description: '', priority: 'high' }
  },
  columns: {
    'planning': {
      id: 'planning',
      title: 'PLANNING',
      taskIds: ['task-1']
    },
    'in-progress': {
      id: 'in-progress',
      title: 'IN PROGRESS',
      taskIds: ['task-2']
    }
  },
  columnOrder: ['planning', 'in-progress'],
  isDarkMode: false
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    reorderColumns: (state, action) => {
      state.columnOrder = action.payload;
    },
    updateColumn: (state, action) => {
      const { columnId, taskIds } = action.payload;
      state.columns[columnId].taskIds = taskIds;
    },
    moveTask: (state, action) => {
      const { sourceId, destinationId, startTaskIds, finishTaskIds } = action.payload;
      state.columns[sourceId].taskIds = startTaskIds;
      state.columns[destinationId].taskIds = finishTaskIds;
    },
    addTask: (state, action) => {
      const { id, columnId, ...taskData } = action.payload;
      state.tasks[id] = { id, ...taskData };
      state.columns[columnId].taskIds.push(id);
    },
    setBoard: (state, action) => {
      return { ...state, ...action.payload };
    },
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    }
  }
});

export const {
  reorderColumns,
  updateColumn,
  moveTask,
  addTask,
  setBoard,
  toggleTheme
} = kanbanSlice.actions;

export default kanbanSlice.reducer;
