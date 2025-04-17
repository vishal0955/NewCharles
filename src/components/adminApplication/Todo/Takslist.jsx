import React from 'react';
import { Star, MoreVertical, Calendar, Check } from 'lucide-react';

// Task Row Component
const TaskRow = ({ task }) => {
  const getStatusBadge = () => {
    switch (task.status) {
      case 'Onhold':
        return <span className="bg-pink-100 text-pink-600 text-xs px-2 py-0.5 rounded-full">Onhold</span>;
      case 'Inprogress':
        return <span className="bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">Inprogress</span>;
      case 'Pending':
        return <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">Pending</span>;
      default:
        return null;
    }
  };

  const getLabelBadge = () => {
    switch (task.label) {
      case 'Projects':
        return <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">Projects</span>;
      case 'Internal':
        return <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">Internal</span>;
      case 'Reminder':
        return <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">Reminder</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center border-b border-gray-200 py-3 px-4 hover:bg-gray-50">
      {/* Left side with checkbox and star */}
      <div className="flex items-center mr-3">
        {task.completed ? (
          <div className="flex items-center justify-center w-6 h-6 bg-orange-500 rounded text-white">
            <Check size={14} />
          </div>
        ) : (
          <div className="w-6 h-6 border border-gray-300 rounded"></div>
        )}
      </div>
      
      <div className="mr-2">
        {task.starred ? (
          <Star size={20} className="text-yellow-400 fill-yellow-400" />
        ) : (
          <Star size={20} className="text-gray-300" />
        )}
      </div>
      
      {/* Task title */}
      <div className="flex-1">
        <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </p>
      </div>
      
      {/* Date and calendar icon */}
      {task.dueDate && (
        <div className="flex items-center text-gray-500 mr-4">
          <Calendar size={14} className="mr-1" />
          <span className="text-xs">{task.dueDate}</span>
        </div>
      )}
      
      {/* Labels */}
      <div className="flex space-x-2 items-center mr-4">
        {getLabelBadge()}
        {getStatusBadge()}
      </div>
      
      {/* Avatars */}
      <div className="flex -space-x-2 mr-4">
        {task.assignees.map((assignee, index) => (
          <div 
            key={index} 
            className="w-6 h-6 rounded-full border border-white"
            style={{
              backgroundColor: assignee.color,
              zIndex: task.assignees.length - index
            }}
          >
            {assignee.initial && (
              <div className="flex items-center justify-center h-full text-white text-xs font-medium">
                {assignee.initial}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* More options */}
      <div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
};

// Main Task List Component
const TaskManagementTable = () => {
  const tasks = [
    {
      id: 1,
      title: "Finalize project proposal",
      starred: true,
      completed: false,
      dueDate: "15 Jan 2025",
      label: "Projects",
      status: "Onhold",
      assignees: [
        { color: "#4f46e5", initial: "A" },
        { color: "#f97316", initial: "B" }
      ]
    },
    {
      id: 2,
      title: "Submit to supervisor by EOD",
      starred: false,
      completed: false,
      dueDate: "25 May 2024",
      label: "Internal",
      status: "Inprogress",
      assignees: [
        { color: "#f97316", initial: "B" },
        { color: "#ec4899", initial: "C" }
      ]
    },
    {
      id: 3,
      title: "Prepare presentation slides",
      starred: false,
      completed: true,
      dueDate: "15 Jan 2025",
      label: "Reminder",
      status: "Pending",
      assignees: [
        { color: "#4f46e5", initial: "A" },
        { color: "#0ea5e9", initial: "D" }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-w-4xl mx-auto">
      {tasks.map(task => (
        <TaskRow key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskManagementTable;