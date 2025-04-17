
// // File: app/store.js


// // File: components/KanbanBoard/Column.jsx
// import React, { useState } from 'react';
// import { Draggable, Droppable } from 'react-beautiful-dnd';
// import { useDispatch, useSelector } from 'react-redux';
// import { Plus, MoreVertical } from 'lucide-react';
// import { addTask } from '../../features/kanban/kanbanSlice';
// import Task from './Task';
// import AddTaskForm from './AddTaskForm';

// const Column = ({ column, index, columnId, TaskComponent = Task }) => {
//   const tasks = useSelector(state => state.kanban.tasks);
//   const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
//   const dispatch = useDispatch();
  
//   const [isAddingTask, setIsAddingTask] = useState(false);
  
//   const handleAddTask = (taskData) => {
//     dispatch(addTask({
//       columnId,
//       ...taskData
//     }));
//     setIsAddingTask(false);
//   };
  
//   return (
//     <Draggable draggableId={columnId} index={index}>
//       {(provided) => (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           className="w-64 flex-shrink-0"
//         >
//           <div 
//             className="flex items-center mb-2" 
//             {...provided.dragHandleProps}
//           >
//             <div className={`w-6 h-6 mr-2 rounded-full ${column.color} flex items-center justify-center text-white`}>
//               {column.icon && <column.icon className="w-4 h-4" />}
//             </div>
//             <span className="font-bold">{column.title}</span>
//             <span className={`ml-2 ${themeStyles.secondaryText}`}>{column.taskIds.length}</span>
//             <div className="flex-1"></div>
//             <button className={`p-1 ${themeStyles.secondaryText} hover:${themeStyles.text}`}>
//               <MoreVertical className="w-5 h-5" />
//             </button>
//             <button 
//               className={`p-1 ${themeStyles.secondaryText} hover:${themeStyles.text}`}
//               onClick={() => setIsAddingTask(true)}
//             >
//               <Plus className="w-5 h-5" />
//             </button>
//           </div>

//           <Droppable droppableId={columnId} type="task">
//             {(provided) => (
//               <div
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//                 className="min-h-[200px]"
//               >
//                 {column.taskIds.map((taskId, taskIndex) => (
//                   <TaskComponent 
//                     key={taskId} 
//                     task={tasks[taskId]} 
//                     index={taskIndex} 
//                     columnId={columnId}
//                   />
//                 ))}
//                 {provided.placeholder}
                
//                 {isAddingTask ? (
//                   <AddTaskForm 
//                     onAdd={handleAddTask}
//                     onCancel={() => setIsAddingTask(false)}
//                   />
//                 ) : (
//                   <button
//                     onClick={() => setIsAddingTask(true)}
//                     className={`w-full py-2 ${themeStyles.secondaryText} hover:${themeStyles.text} text-sm flex items-center justify-center`}
//                   >
//                     <Plus className="w-4 h-4 mr-1" />
//                     Add Task
//                   </button>
//                 )}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       )}
//     </Draggable>
//   );
// };

// export default Column;

// // File: components/KanbanBoard/Task.jsx
// import React from 'react';
// import { Draggable } from 'react-beautiful-dnd';
// import { useSelector } from 'react-redux';
// import { Calendar } from 'lucide-react';

// const Task = ({ task, index, columnId }) => {
//   const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
//   const isDarkMode = useSelector(state => state.kanban.isDarkMode);
  
//   return (
//     <Draggable draggableId={task.id} index={index}>
//       {(provided) => (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           className={`${themeStyles.cardBg} p-3 mb-2 rounded shadow`}
//         >
//           <div className="text-sm">{task.title}</div>
//           {task.project && (
//             <div className={`mt-2 text-xs ${themeStyles.secondaryText}`}>
//               <span>In </span>
//               <span className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-1 rounded`}>
//                 {task.project}
//               </span>
//             </div>
//           )}
//           <div className="mt-2 flex items-center">
//             {task.assignee && (
//               <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs mr-2">
//                 {typeof task.assignee === 'string' ? task.assignee.charAt(0) : task.assignee}
//               </div>
//             )}
//             {task.dueDate && (
//               <div className="flex items-center">
//                 <Calendar className={`w-4 h-4 mr-1 ${themeStyles.secondaryText}`} />
//                 <span className="text-xs">{task.dueDate}</span>
//               </div>
//             )}
//             {task.priority === 'High' && (
//               <div className="ml-2 flex items-center">
//                 <span className="text-yellow-500 mr-1">⚑</span>
//                 <span className="text-yellow-500 text-xs">{task.priority}</span>
//               </div>
//             )}
//           </div>
//           {task.progress > 0 && (
//             <div className="mt-2">
//               <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-1`}>
//                 <div
//                   className="bg-green-500 h-1 rounded-full"
//                   style={{ width: `${task.progress}%` }}
//                 ></div>
//               </div>
//               <div className="text-xs text-right mt-1 text-green-500">{task.progress}%</div>
//             </div>
//           )}
//           {/* Render additional task metadata based on domain */}
//           {task.customFields && Object.entries(task.customFields).map(([key, value]) => (
//             <div key={key} className={`mt-1 text-xs ${themeStyles.secondaryText}`}>
//               <span className="font-medium">{key}: </span>
//               <span>{value}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </Draggable>
//   );
// };

// export default Task;

// // File: components/KanbanBoard/AddTaskForm.jsx
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// const AddTaskForm = ({ onAdd, onCancel, initialData = {} }) => {
//   const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
//   const [taskData, setTaskData] = useState({
//     title: '',
//     project: 'Default Project',
//     priority: 'Medium',
//     progress: 0,
//     ...initialData
//   });
  
//   const handleChange = (e) => {
//     setTaskData({
//       ...taskData,
//       [e.target.name]: e.target.value
//     });
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!taskData.title.trim()) return;
//     onAdd(taskData);
//   };
  
//   return (
//     <div className={`${themeStyles.cardBg} p-3 mb-2 rounded shadow`}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           className={`w-full p-2 mb-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
//           placeholder="Enter task title..."
//           value={taskData.title}
//           onChange={handleChange}
//           autoFocus
//         />
//         <div className="flex justify-end space-x-2">
//           <button
//             type="button"
//             onClick={onCancel}
//             className={`px-2 py-1 text-xs ${themeStyles.secondaryText}`}
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddTaskForm;

// // File: components/KanbanBoard/AddColumnForm.jsx
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// const AddColumnForm = ({ onAdd, onCancel }) => {
//   const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
//   const [title, setTitle] = useState('');
//   const [color, setColor] = useState('bg-indigo-500');
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim()) return;
    
//     onAdd({ title, color });
//   };
  
//   return (
//     <div className="w-64 flex-shrink-0">
//       <div className={`${themeStyles.cardBg} p-3 rounded shadow`}>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className={`w-full p-2 mb-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
//             placeholder="Enter column title..."
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             autoFocus
//           />
//           <div className="mb-3">
//             <label className="block text-sm mb-1">Color</label>
//             <select
//               value={color}
//               onChange={(e) => setColor(e.target.value)}
//               className={`w-full p-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
//             >
//               <option value="bg-indigo-500">Indigo</option>
//               <option value="bg-blue-500">Blue</option>
//               <option value="bg-green-500">Green</option>
//               <option value="bg-yellow-500">Yellow</option>
//               <option value="bg-red-500">Red</option>
//               <option value="bg-purple-500">Purple</option>
//             </select>
//           </div>
//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onCancel}
//               className={`px-2 py-1 text-xs ${themeStyles.secondaryText}`}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
//             >
//               Add
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddColumnForm;

// // File: components/KanbanBoard/KanbanBoard.jsx
// import React, { useState } from 'react';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import { useDispatch, useSelector } from 'react-redux';
// import { Plus, Search, Filter, SortAsc, Users, XCircle, Moon, Sun } from 'lucide-react';
// import { moveTask, moveColumn, addColumn, toggleTheme } from '../../features/kanban/kanbanSlice';
// import Column from './Column';
// import AddColumnForm from './AddColumnForm';

// // Utility function to get theme styles
// export const getThemeStyles = (isDarkMode) => ({
//   background: isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
//   text: isDarkMode ? 'text-white' : 'text-gray-800',
//   navBorder: isDarkMode ? 'border-gray-700' : 'border-gray-300',
//   cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
//   buttonBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
//   buttonHover: isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300',
//   inputBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
//   inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
//   secondaryText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
// });

// const KanbanBoard = ({ 
//   ColumnComponent = Column,
//   customFilterBar,
//   customHeader,
//   boardTitle = "Kanban Board"
// }) => {
//   const dispatch = useDispatch();
//   const { columns, columnOrder, isDarkMode } = useSelector(state => state.kanban);
//   const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
  
//   const [isAddingColumn, setIsAddingColumn] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
  
//   // Handle drag end events
//   const onDragEnd = (result) => {
//     const { source, destination, type } = result;
    
//     // If dropped outside a droppable area
//     if (!destination) return;
    
//     // Handle column reordering
//     if (type === 'column') {
//       if (source.index !== destination.index) {
//         dispatch(moveColumn({
//           sourceIndex: source.index,
//           destinationIndex: destination.index
//         }));
//       }
//       return;
//     }
    
//     // Handle task movement
//     if (source.droppableId === destination.droppableId && source.index === destination.index) {
//       return;
//     }
    
//     dispatch(moveTask({
//       sourceId: source.droppableId,
//       destinationId: destination.droppableId,
//       sourceIndex: source.index,
//       destinationIndex: destination.index
//     }));
//   };
  
//   const handleAddColumn = (columnData) => {
//     dispatch(addColumn(columnData));
//     setIsAddingColumn(false);
//   };
  
//   return (
//     <div className={`flex flex-col h-screen ${themeStyles.background} ${themeStyles.text}`}>
//       {/* Custom Header or Default */}
//       {customHeader || (
//         <div className={`flex items-center justify-between p-3 border-b ${themeStyles.navBorder}`}>
//           <h1 className="text-xl font-bold">{boardTitle}</h1>
//           <button 
//             onClick={() => dispatch(toggleTheme())} 
//             className={`p-2 rounded-full ${themeStyles.buttonBg}`}
//           >
//             {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//           </button>
//         </div>
//       )}

//       {/* Custom Filter Bar or Default */}
//       {customFilterBar || (
//         <div className={`flex items-center p-3 border-b ${themeStyles.navBorder}`}>
//           <div className="flex items-center space-x-2">
//             <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
//               <Filter className="w-4 h-4 mr-1" />
//               <span>Filter</span>
//             </button>
//             <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
//               <SortAsc className="w-4 h-4 mr-1" />
//               <span>Sort</span>
//             </button>
//             <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
//               <Users className="w-4 h-4 mr-1" />
//               <span>Assignee</span>
//             </button>
//           </div>
//           <div className="flex-1 ml-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className={`px-3 py-1 ${themeStyles.inputBg} ${themeStyles.inputBorder} border rounded w-64`}
//               value={searchQuery}
//               onChange={e => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>
//       )}

//       {/* Kanban Board */}
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="all-columns" direction="horizontal" type="column">
//           {(provided) => (
//             <div 
//               className="flex p-4 space-x-4 overflow-x-auto flex-1"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {columnOrder.map((columnId, index) => (
//                 <ColumnComponent
//                   key={columnId}
//                   columnId={columnId}
//                   column={columns[columnId]}
//                   index={index}
//                 />
//               ))}
//               {provided.placeholder}

//               {/* Add New Column */}
//               {isAddingColumn ? (
//                 <AddColumnForm
//                   onAdd={handleAddColumn}
//                   onCancel={() => setIsAddingColumn(false)}
//                 />
//               ) : (
//                 <button
//                   onClick={() => setIsAddingColumn(true)}
//                   className={`w-64 h-10 flex-shrink-0 flex items-center justify-center rounded ${themeStyles.cardBg} ${themeStyles.secondaryText} hover:${themeStyles.text}`}
//                 >
//                   <Plus className="w-5 h-5 mr-1" />
//                   Add Column
//                 </button>
//               )}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default KanbanBoard;

// // File: App.js
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setBoard } from './features/kanban/kanbanSlice';
// import KanbanBoard from './components/KanbanBoard/KanbanBoard';
// import { FileText, Zap, Pause, Check, CreditCard } from 'lucide-react';

// const App = () => {
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     // Initialize the board with sample data
//     // This would typically come from an API
//     const initialData = {
//       tasks: {
//         'task-1': {
//           id: 'task-1',
//           title: '315317 - XYZ tech implementation',
//           project: 'All Projects',
//           priority: 'High',
//           progress: 100,
//           assignee: 'B'
//         },
//         'task-2': {
//           id: 'task-2',
//           title: 'Prepare quarterly report',
//           project: 'Management',
//           priority: 'Medium',
//           progress: 75,
//           assignee: 'A'
//         },
//         'task-3': {
//           id: 'task-3',
//           title: 'Set up new development environment',
//           project: 'Technical',
//           priority: 'Low',
//           progress: 30,
//           assignee: 'C'
//         }
//       },
//       columns: {
//         'planning': {
//           id: 'planning',
//           title: 'PLANNING',
//           color: 'bg-indigo-500',
//           icon: FileText,
//           taskIds: ['task-3']
//         },
//         'in-progress': {
//           id: 'in-progress',
//           title: 'IN-PROGRESS',
//           color: 'bg-yellow-500',
//           icon: Zap,
//           taskIds: ['task-2']
//         },
//         'on-hold': {
//           id: 'on-hold',
//           title: 'ON-HOLD',
//           color: 'bg-red-500',
//           icon: Pause,
//           taskIds: []
//         },
//         'completed': {
//           id: 'completed',
//           title: 'COMPLETED',
//           color: 'bg-blue-500',
//           icon: Check,
//           taskIds: []
//         },
//         'billing': {
//           id: 'billing',
//           title: 'BILLING',
//           color: 'bg-green-500',
//           icon: CreditCard,
//           taskIds: ['task-1']
//         }
//       },
//       columnOrder: ['planning', 'in-progress', 'on-hold', 'completed', 'billing']
//     };
    
//     dispatch(setBoard(initialData));
//   }, [dispatch]);
  
//   return <KanbanBoard boardTitle="Project Management" />;
// };

// export default App;

// // File: domainSpecific/RecruitmentKanban/RecruitmentTask.jsx
// import React from 'react';
// import { Draggable } from 'react-beautiful-dnd';
// import { useSelector } from 'react-redux';
// import { User, Calendar, Mail, Phone, MapPin } from 'lucide-react';
// import { getThemeStyles } from '../../components/KanbanBoard/KanbanBoard';

// const RecruitmentTask = ({ task, index, columnId }) => {
//   const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
//   const isDarkMode = useSelector(state => state.kanban.isDarkMode);
  
//   return (
//     <Draggable draggableId={task.id} index={index}>
//       {(provided) => (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           className={`${themeStyles.cardBg} p-3 mb-2 rounded shadow`}
//         >
//           <div className="text-sm font-medium">{task.title}</div>
//           <div className={`text-xs ${themeStyles.secondaryText}`}>{task.position}</div>
          
//           <div className="mt-2 flex items-center">
//             <User className={`w-4 h-4 mr-1 ${themeStyles.secondaryText}`} />
//             <span className="text-xs">{task.name}</span>
//           </div>
          
//           {task.email && (
//             <div className="mt-1 flex items-center">
//               <Mail className={`w-4 h-4 mr-1 ${themeStyles.secondaryText}`} />
//               <span className="text-xs">{task.email}</span>
//             </div>
//           )}
          
//           {task.phone && (
//             <div className="mt-1 flex items-center">
//               <Phone className={`w-4 h-4 mr-1 ${themeStyles.secondaryText}`} />
//               <span className="text-xs">{task.phone}</span>
//             </div>
//           )}
          
//           {task.location && (
//             <div className="mt-1 flex items-center">
//               <MapPin className={`w-4 h-4 mr-1 ${themeStyles.secondaryText}`} />
//               <span className="text-xs">{task.location}</span>
//             </div>
//           )}
          
//           {task.interviewDate && (
//             <div className="mt-1 flex items-center">
//               <Calendar className={`w-4 h-4 mr-1 ${themeStyles.secondaryText}`} />
//               <span className="text-xs">{task.interviewDate}</span>
//             </div>
//           )}
          
//           {task.skills && task.skills.length > 0 && (
//             <div className="mt-2 flex flex-wrap gap-1">
//               {task.skills.map((skill, i) => (
//                 <span 
//                   key={i} 
//                   className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           )}
          
//           {task.rating && (
//             <div className="mt-2 flex items-center">
//               <div className="flex">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span key={star} className={star <= task.rating ? "text-yellow-500" : themeStyles.secondaryText}>★</span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </Draggable>
//   );
// };

// export default RecruitmentTask;

// // File: domainSpecific/RecruitmentKanban/RecruitmentBoard.jsx
