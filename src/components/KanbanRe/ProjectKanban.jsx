import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBoard } from '../../redux/slices/KanbanSlice';
import { FileText, Zap, Pause, Check, CreditCard } from 'lucide-react';
import KanbanBoard from './Kanbanboard';

// Create a mapping of column IDs to icons
export const columnIcons = {
  'planning': FileText,
  'in-progress': Zap,
  'on-hold': Pause,
  'completed': Check,
  'billing': CreditCard
};

const ProjectKanban = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const initialData = {
      tasks: {
        'task-1': {
          id: 'task-1',
          title: '315317 - XYZ tech implementation',
          project: 'All Projects',
          priority: 'High',
          progress: 100,
          assignee: 'B'
        },
        'task-2': {
          id: 'task-2',
          title: 'Prepare quarterly report',
          project: 'Management',
          priority: 'Medium',
          progress: 75,
          assignee: 'A'
        },
        'task-3': {
          id: 'task-3',
          title: 'Set up new development environment',
          project: 'Technical',
          priority: 'Low',
          progress: 30,
          assignee: 'C'
        }
      },
      columns: {
        'planning': {
          id: 'planning',
          title: 'PLANNING',
          color: 'bg-indigo-500',
          taskIds: ['task-3']
        },
        'in-progress': {
          id: 'in-progress',
          title: 'IN-PROGRESS',
          color: 'bg-yellow-500',
          taskIds: ['task-2']
        },
        'on-hold': {
          id: 'on-hold',
          title: 'ON-HOLD',
          color: 'bg-red-500',
          taskIds: []
        },
        'completed': {
          id: 'completed',
          title: 'COMPLETED',
          color: 'bg-blue-500',
          taskIds: []
        },
        'billing': {
          id: 'billing',
          title: 'BILLING',
          color: 'bg-green-500',
          taskIds: ['task-1']
        }
      },
      columnOrder: ['planning', 'in-progress', 'on-hold', 'completed', 'billing']
    };
    
    dispatch(setBoard(initialData));
  }, [dispatch]);
  
  return <KanbanBoard boardTitle="Project Management" />;
};

export default ProjectKanban;