
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { Calendar } from 'lucide-react';
import { getThemeStyles } from './Kanbanboard';

const Task = ({ task, index, columnId }) => {
  const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
  const isDarkMode = useSelector(state => state.kanban.isDarkMode);
  
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          // ref={provided.innerRef}
          // {...provided.draggableProps}
          // {...provided.dragHandleProps}
          // className={`${themeStyles.cardBg} p-3 mb-2 rounded shadow`}

          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-3 mb-2 bg-white rounded shadow ${
            snapshot.isDragging ? 'opacity-75' : ''
          }`}
        >
          <div className="text-sm">{task.title}</div>
          {task.project && (
            <div className={`mt-2 text-xs ${themeStyles.secondaryText}`}>
              <span>In </span>
              <span className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-1 rounded`}>
                {task.project}
              </span>
            </div>
          )}
          <div className="mt-2 flex items-center">
            {task.assignee && (
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs mr-2">
                {typeof task.assignee === 'string' ? task.assignee.charAt(0) : task.assignee}
              </div>
            )}
            {task.dueDate && (
              <div className="flex items-center">
                <Calendar className={`w-4 h-4 mr-1 ${themeStyles.secondaryText}`} />
                <span className="text-xs">{task.dueDate}</span>
              </div>
            )}
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
          {/* Render additional task metadata based on domain */}
          {task.customFields && Object.entries(task.customFields).map(([key, value]) => (
            <div key={key} className={`mt-1 text-xs ${themeStyles.secondaryText}`}>
              <span className="font-medium">{key}: </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}
    </Draggable>
  );
};

export default Task;