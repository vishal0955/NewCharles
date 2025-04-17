import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, Search, Filter, SortAsc, Users, XCircle, Moon, Sun } from 'lucide-react';
import { moveTask, reorderColumns, updateColumn } from '../../redux/slices/KanbanSlice';
import Column from './Column';

// Utility function to get theme styles
export const getThemeStyles = (isDarkMode) => ({
  background: isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
  text: isDarkMode ? 'text-white' : 'text-gray-800',
  navBorder: isDarkMode ? 'border-gray-700' : 'border-gray-300',
  cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
  buttonBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
  buttonHover: isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300',
  inputBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
  inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
  secondaryText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
});

const KanbanBoard = () => {
  const { columns, columnOrder } = useSelector(state => state.kanban);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (type === 'column') {
      if (source.index === destination.index) return;

      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      dispatch(reorderColumns(newColumnOrder));
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      dispatch(updateColumn({
        columnId: source.droppableId,
        taskIds: newTaskIds
      }));
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    dispatch(moveTask({
      sourceId: source.droppableId,
      destinationId: destination.droppableId,
      startTaskIds,
      finishTaskIds
    }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-4 p-4 overflow-x-auto"
          >
            {columnOrder.map((columnId, index) => (
              <Column
                key={columnId}
                column={columns[columnId]}
                columnId={columnId}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;