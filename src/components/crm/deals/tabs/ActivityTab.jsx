import React from 'react';

const ActivityTab = ({ activities }) => {
  return (
    <div className="p-4">
      {activities.map(activity => (
        <div key={activity.id} className="flex gap-4 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-sm">{activity.content}</div>
            <div className="text-xs text-gray-500">{activity.date}</div>
          </div>
          <button className="ml-auto text-sm text-gray-600 hover:text-gray-800">View details</button>
        </div>
      ))}
    </div>
  );
};

export default ActivityTab;
