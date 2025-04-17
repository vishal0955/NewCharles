// File: components/KanbanBoard/Column.jsx
import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import Task from './Task';

const Column = ({ column, index, columnId }) => {
  const tasks = useSelector(state => state.kanban.tasks);
  const [isAddingTask, setIsAddingTask] = useState(false);

  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="w-72 flex-shrink-0 bg-gray-100 rounded-lg p-2"
        >
          <div {...provided.dragHandleProps} className="mb-2">
            <h2 className="font-bold">{column.title}</h2>
          </div>

          <Droppable droppableId={columnId} type="task">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="min-h-[100px]"
              >
                {column.taskIds?.map((taskId, index) => (
                  <Task
                    key={taskId}
                    task={tasks[taskId]}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
