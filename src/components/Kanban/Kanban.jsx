import React, { useState, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Plus, Search, Filter, SortAsc, Users, XCircle, Settings, ChevronDown, MoreVertical, FileText, Zap, Pause, Check, CreditCard, Calendar, Moon, Sun } from 'lucide-react';
import { use } from 'react';
import { useSelector } from 'react-redux';


const ItemTypes = {
  COLUMN: 'column',
  TASK: 'task'
};


const Task = ({ task, index, columnId, moveTask }) => {
  const ref = useRef(null);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);


  const themeStyles = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
    text: isDarkMode ? 'text-white' : 'text-gray-800',
    navBorder: isDarkMode ? 'border-gray-700' : 'border-gray-300',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    buttonBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
    buttonHover: isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300',
    inputBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
    secondaryText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
  };

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task.id, index, columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumnId = item.columnId;
      const targetColumnId = columnId;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex && sourceColumnId === targetColumnId) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveTask(item.id, dragIndex, hoverIndex, sourceColumnId, targetColumnId);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
      item.columnId = targetColumnId;
    },
  });

  // Initialize drag and drop refs
  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`${themeStyles.cardBg} p-3 mb-2 rounded shadow ${
        isDragging ? 'opacity-50' : ''
      }`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="text-sm">{task.title}</div>
      <div className={`mt-2 text-xs ${themeStyles.secondaryText}`}>
        <span>In </span>
        <span className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-1 rounded`}>
          {task.project}
        </span>
      </div>
      <div className="mt-2 flex items-center">
        {task.assignee && (
          <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs mr-2">
            {task.assignee}
          </div>
        )}
        <div className="flex items-center">
          <Calendar className={`w-4 h-4 mr-1 ${themeStyles.secondaryText}`} />
        </div>
        {task.priority === 'High' && (
          <div className="ml-2 flex items-center">
            <span className="text-yellow-500 mr-1">⚑</span>
            <span className="text-yellow-500 text-xs">{task.priority}</span>
          </div>
        )}
      </div>
      {task.progress > 0 && (
        <div className="mt-2">
          <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-1`}>
            <div
              className="bg-green-500 h-1 rounded-full"
              style={{ width: `${task.progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-right mt-1 text-green-500">{task.progress}%</div>
        </div>
      )}
    </div>
  );
};

// Column component with drop functionality
const Column = ({ column, columnIndex, moveColumn, moveTask, startAddTask, isAddingTask, newTaskText, setNewTaskText, cancelAddTask, handleAddTask, isDarkMode }) => {
  const ref = useRef(null);

  const themeStyles = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
    text: isDarkMode ? 'text-white' : 'text-gray-800',
    navBorder: isDarkMode ? 'border-gray-700' : 'border-gray-300',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    buttonBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
    buttonHover: isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300',
    inputBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
    secondaryText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
  };

  // Column drag functionality
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.COLUMN,
    item: { id: column.id, index: columnIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Column drop functionality
  const [, drop] = useDrop({
    accept: ItemTypes.COLUMN,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = columnIndex;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get horizontal middle
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the left
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;

      // Only perform the move when the mouse has crossed half of the items width
      // Dragging rightward
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }
      // Dragging leftward
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      // Time to actually perform the action
      moveColumn(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      item.index = hoverIndex;
    },
  });

  // Task drop functionality
  const [{ isOver }, taskDrop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => {
      // If task is dropped onto a column but not a specific task, append it to the end
      if (item.columnId !== column.id) {
        moveTask(item.id, item.index, column.tasks.length, item.columnId, column.id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  });

  // Apply both drag and drop refs to column
  drag(drop(ref));

  const getColumnIcon = (columnId) => {
    switch (columnId) {
      case 'planning': return <FileText className="w-4 h-4" />;
      case 'in-progress': return <Zap className="w-4 h-4" />;
      case 'on-hold': return <Pause className="w-4 h-4" />;
      case 'completed': return <Check className="w-4 h-4" />;
      case 'billing': return <CreditCard className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div
      ref={ref}
      className="w-64 flex-shrink-0"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {/* Column Header */}
      <div
        className="flex items-center mb-2"
      >
        <div className={`w-6 h-6 mr-2 rounded-full ${column.color} flex items-center justify-center text-white`}>
          {getColumnIcon(column.id)}
        </div>
        <span className="font-bold">{column.title}</span>
        <span className={`ml-2 ${themeStyles.secondaryText}`}>{column.tasks.length}</span>
        <div className="flex-1"></div>
        <button className={`p-1 ${themeStyles.secondaryText} hover:${themeStyles.text}`}>
          <MoreVertical className="w-5 h-5" />
        </button>
        <button 
          className={`p-1 ${themeStyles.secondaryText} hover:${themeStyles.text}`}
          onClick={() => startAddTask(column.id)}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Column Content */}
      <div
        ref={taskDrop}
        className={`min-h-[200px] ${isOver ? 'bg-blue-50' : ''} rounded p-1`}
      >
        {column.tasks.map((task, index) => (
          <Task
            key={task.id}
            task={task}
            index={index}
            columnId={column.id}
            moveTask={moveTask}
          />
        ))}

        {/* Task Adding UI */}
        {isAddingTask[column.id] ? (
          <div className={`${themeStyles.cardBg} p-3 mb-2 rounded shadow`}>
            <input
              type="text"
              className={`w-full p-2 mb-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
              placeholder="Enter task title..."
              value={newTaskText[column.id] || ''}
              onChange={(e) => setNewTaskText({...newTaskText, [column.id]: e.target.value})}
              autoFocus
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => cancelAddTask(column.id)}
                className={`px-2 py-1 text-xs ${themeStyles.secondaryText}`}
              >
                Cancel
              </button>
              <button
                onClick={() => handleAddTask(column.id)}
                className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
              >
                Add
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => startAddTask(column.id)}
            className={`w-full py-2 ${themeStyles.secondaryText} hover:${themeStyles.text} text-sm flex items-center justify-center`}
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Task
          </button>
        )}
      </div>
    </div>
  );
};

const KanbanBoard = () => {
  // Theme state
  // const [isDarkMode, setIsDarkMode] = useState(false);
   const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  // Add task states
  const [newTaskText, setNewTaskText] = useState({});
  const [isAddingTask, setIsAddingTask] = useState({});

  // Add column state
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [newColumnColor, setNewColumnColor] = useState('bg-gray-500');

  // Initial board data - use a simplified structure first
  const [columnOrder, setColumnOrder] = useState([
    'planning', 'in-progress', 'on-hold', 'completed', 'billing'
  ]);
  
  const [columns, setColumns] = useState({
    'planning': {
      id: 'planning',
      title: 'PLANNING',
      color: 'bg-indigo-500',
      tasks: []
    },
    'in-progress': {
      id: 'in-progress',
      title: 'IN-PROGRESS',
      color: 'bg-yellow-500',
      tasks: []
    },
    'on-hold': {
      id: 'on-hold',
      title: 'ON-HOLD',
      color: 'bg-red-500',
      tasks: []
    },
    'completed': {
      id: 'completed',
      title: 'COMPLETED',
      color: 'bg-blue-500',
      tasks: []
    },
    'billing': {
      id: 'billing',
      title: 'BILLING',
      color: 'bg-green-500',
      tasks: [
        {
          id: '315317',
          title: '315317 - XYz tech ...',
          project: 'All Projects',
          priority: 'High',
          progress: 100,
          assignee: 'B'
        }
      ]
    }
  });

  // Start adding a task
  const startAddTask = (columnId) => {
    setIsAddingTask({...isAddingTask, [columnId]: true});
    setNewTaskText({...newTaskText, [columnId]: ''});
  };

  // Cancel adding a task
  const cancelAddTask = (columnId) => {
    setIsAddingTask({...isAddingTask, [columnId]: false});
  };

  // Handle adding a new task
  const handleAddTask = (columnId) => {
    if (!newTaskText[columnId] || newTaskText[columnId].trim() === '') {
      cancelAddTask(columnId);
      return;
    }

    const newTaskId = `task-${Date.now()}`;
    const newTask = {
      id: newTaskId,
      title: newTaskText[columnId],
      project: 'All Projects',
      priority: 'Medium',
      progress: 0,
      assignee: ''
    };

    setColumns({
      ...columns,
      [columnId]: {
        ...columns[columnId],
        tasks: [...columns[columnId].tasks, newTask]
      }
    });

    cancelAddTask(columnId);
  };

  // Start adding a column
  const startAddColumn = () => {
    setIsAddingColumn(true);
    setNewColumnTitle('');
  };

  // Cancel adding a column
  const cancelAddColumn = () => {
    setIsAddingColumn(false);
  };

  // Handle adding a new column
  const handleAddColumn = () => {
    if (!newColumnTitle || newColumnTitle.trim() === '') {
      cancelAddColumn();
      return;
    }

    const newColumnId = `column-${Date.now()}`;
    
    // Update columns state
    setColumns({
      ...columns,
      [newColumnId]: {
        id: newColumnId,
        title: newColumnTitle.toUpperCase(),
        color: newColumnColor,
        tasks: []
      }
    });
    
    // Update column order
    setColumnOrder([...columnOrder, newColumnId]);

    cancelAddColumn();
  };

  // Move column method
  const moveColumn = (dragIndex, hoverIndex) => {
    const newColumnOrder = Array.from(columnOrder);
    const [removed] = newColumnOrder.splice(dragIndex, 1);
    newColumnOrder.splice(hoverIndex, 0, removed);
    setColumnOrder(newColumnOrder);
  };

  // Move task method
  const moveTask = (taskId, fromIndex, toIndex, sourceColId, destColId) => {
    // Moving in the same column
    if (sourceColId === destColId) {
      const column = columns[sourceColId];
      const newTasks = Array.from(column.tasks);
      const [movedTask] = newTasks.splice(fromIndex, 1);
      newTasks.splice(toIndex, 0, movedTask);
      
      const newColumns = {
        ...columns,
        [sourceColId]: {
          ...column,
          tasks: newTasks
        }
      };
      
      setColumns(newColumns);
      return;
    }
    
    // Moving to a different column
    const sourceCol = columns[sourceColId];
    const destCol = columns[destColId];
    const sourceTasks = Array.from(sourceCol.tasks);
    const destTasks = Array.from(destCol.tasks);
    const [movedTask] = sourceTasks.splice(fromIndex, 1);
    destTasks.splice(toIndex, 0, movedTask);
    
    const newColumns = {
      ...columns,
      [sourceColId]: {
        ...sourceCol,
        tasks: sourceTasks
      },
      [destColId]: {
        ...destCol,
        tasks: destTasks
      }
    };
    
    setColumns(newColumns);
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Theme-dependent styles
  const themeStyles = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
    text: isDarkMode ? 'text-white' : 'text-gray-800',
    navBorder: isDarkMode ? 'border-gray-700' : 'border-gray-300',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    buttonBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
    buttonHover: isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300',
    inputBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
    secondaryText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`flex flex-col h-screen ${themeStyles.background} ${themeStyles.text}`}>
        {/* Filter Bar */}
        <div className={`flex items-center p-3 border-b ${themeStyles.navBorder}`}>
          <div className="flex items-center space-x-2">
            <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
              <span>Group: Status</span>
            </button>
            {/* <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
              <span>Subtasks: Collapse all</span>
            </button> */}
            <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
              <Filter className="w-4 h-4 mr-1" />
              <span>Filter</span>
            </button>
            <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
              <SortAsc className="w-4 h-4 mr-1" />
              <span>Sort</span>
            </button>
            <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
              <Users className="w-4 h-4 mr-1" />
              <span>Me mode</span>
            </button>
            <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
              <span>Assignee</span>
            </button>
            <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
              <XCircle className="w-4 h-4 mr-1" />
              <span>Closed</span>
            </button>
          </div>
          <div className="flex-1 ml-4">
            <input
              type="text"
              placeholder="Search..."
              className={`px-3 py-1 ${themeStyles.inputBg} ${themeStyles.inputBorder} border rounded w-64`}
            />
          </div>
          <button className="px-2 py-1">
            <MoreVertical className="w-5 h-5" />
          </button>
          {/* <button className="px-2 py-1 ml-2" onClick={toggleTheme}>
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button> */}
        </div>

        {/* Kanban Board */}
        <div className="flex p-4 space-x-4 overflow-x-auto flex-1">
          {columnOrder.map((columnId, index) => {
            const column = columns[columnId];
            if (!column) return null;
            
            return (
              <Column
                key={column.id}
                column={column}
                columnIndex={index}
                moveColumn={moveColumn}
                moveTask={moveTask}
                startAddTask={startAddTask}
                isAddingTask={isAddingTask}
                newTaskText={newTaskText}
                setNewTaskText={setNewTaskText}
                cancelAddTask={cancelAddTask}
                handleAddTask={handleAddTask}
                isDarkMode={isDarkMode}
              />
            );
          })}

          {/* Add New Column UI */}
          {isAddingColumn ? (
            <div className="w-64 flex-shrink-0">
              <div className={`${themeStyles.cardBg} p-3 rounded shadow`}>
                <input
                  type="text"
                  className={`w-full p-2 mb-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
                  placeholder="Enter column title..."
                  value={newColumnTitle}
                  onChange={(e) => setNewColumnTitle(e.target.value)}
                  autoFocus
                />
                <div className="mb-3">
                  <label className="block text-sm mb-1">Color</label>
                  <select
                    value={newColumnColor}
                    onChange={(e) => setNewColumnColor(e.target.value)}
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
                    onClick={cancelAddColumn}
                    className={`px-2 py-1 text-xs ${themeStyles.secondaryText}`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddColumn}
                    className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={startAddColumn}
              className={`w-64 h-10 flex-shrink-0 flex items-center justify-center rounded ${themeStyles.cardBg} ${themeStyles.secondaryText} hover:${themeStyles.text}`}
            >
              <Plus className="w-5 h-5 mr-1" />
              Add group
            </button>
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;