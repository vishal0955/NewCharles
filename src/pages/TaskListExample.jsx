import React from 'react';
import ResponsiveTable from '../common/TaskTable';


const TaskListExample = () => {
  // Sample data
  const tasks = [
    { id: 1, title: 'Finalize project proposal', dueDate: '15 Jan 2025', status: 'Onhold', priority: 'High' },
    { id: 2, title: 'Submit to supervisor by EOD', dueDate: '25 May 2024', status: 'InProgress', priority: 'Medium' },
    { id: 3, title: 'Prepare presentation slides', dueDate: '15 Jan 2025', status: 'Pending', priority: 'Low' },
    // Add more tasks as needed
  ];

  // Column definitions
  const columns = [
    { key: 'title', label: 'Task' },
    { key: 'dueDate', label: 'Due Date' },
    { key: 'status', label: 'Status', 
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === 'Onhold' ? 'bg-pink-100 text-pink-800' :
          value === 'InProgress' ? 'bg-purple-100 text-purple-800' : 
          'bg-blue-100 text-blue-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'priority', label: 'Priority' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Task List</h1>
      <ResponsiveTable
        data={tasks} 
        columns={columns} 
        pagination={true}
        itemsPerPage={10}
        striped={true}
        hoverable={true}
      />
    </div>
  );
};

export default TaskListExample;