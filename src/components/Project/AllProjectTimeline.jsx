import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Search, Filter, Share, Download, Clock } from 'lucide-react';

const AllProjectTimeline = () => {
  // Sample data for projects and allocations
  const [projects, setProjects] = useState([
    { id: 1, name: 'Basic - Sprint ZY06', team: 'Marketing Research', allocated: '5k', status: 'active' },
    { id: 2, name: 'Turkey - BCPI v2 - October', team: 'Marketing', allocated: '34h', status: 'active' },
    { id: 3, name: 'Turkey - BCPI v1 - October', team: 'Marketing', allocated: '0h', status: 'active' },
    { id: 4, name: 'Turkey - ACPL v3 project', team: 'Marketing', allocated: '43h', status: 'active' },
    { id: 5, name: 'test test', allocated: '2h', status: 'active' },
    { id: 6, name: 'KSA - Brand/Creative Cut', team: 'UX Research', allocated: '0h', status: 'active' },
    { id: 7, name: 'Turkey - ACP4 - additional', team: 'Marketing', allocated: '18h', status: 'active' },
    { id: 8, name: 'Turkey - BCPI - Fresh Summit', team: 'Marketing', allocated: '12h', status: 'active' },
    { id: 9, name: 'KSA - RCCAI/LLT GUIDE', team: 'UX Research', allocated: '0h', status: 'active' },
    { id: 10, name: 'KSA - Britvic Annago OLA', team: 'UX Research', allocated: '0h', status: 'active' },
    { id: 11, name: 'Test', allocated: '0h', status: 'active' }
  ]);

  // Sample allocations data
  const [allocations, setAllocations] = useState([
    { projectId: 1, startDate: new Date(2025, 3, 9), endDate: new Date(2025, 3, 12), hours: '58.5h' },
    { projectId: 2, startDate: new Date(2025, 3, 10), endDate: new Date(2025, 3, 12), hours: '34.0h' },
    { projectId: 3, startDate: new Date(2025, 3, 10), endDate: new Date(2025, 3, 12), hours: '27.5h' },
    { projectId: 4, startDate: new Date(2025, 3, 10), endDate: new Date(2025, 3, 12), hours: '42.9h' },
    { projectId: 5, startDate: new Date(2025, 3, 10), endDate: new Date(2025, 3, 12), hours: '36.4h' },
    { projectId: 6, startDate: new Date(2025, 3, 10), endDate: new Date(2025, 3, 12), hours: '36.9h' },
    { projectId: 7, startDate: new Date(2025, 3, 23), endDate: new Date(2025, 3, 27), hours: '44.7h' },
    { projectId: 8, startDate: new Date(2025, 3, 23), endDate: new Date(2025, 3, 27), hours: '41.5h' },
    { projectId: 9, startDate: new Date(2025, 3, 29), endDate: new Date(2025, 4, 2), hours: '39.3h' },
    { projectId: 10, startDate: new Date(2025, 4, 5), endDate: new Date(2025, 4, 7), hours: '29.3h' },
    { projectId: 11, startDate: new Date(2025, 4, 10), endDate: new Date(2025, 4, 12), hours: '40.0h' }
  ]);

  // State for date range display
  const [displayDates, setDisplayDates] = useState([]);
  const [startDate, setStartDate] = useState(new Date(2025, 3, 7)); // Start from April 7, 2025

  // Generate date range for display
  useEffect(() => {
    const dates = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < 14; i++) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    setDisplayDates(dates);
  }, [startDate]);

  // Navigate date range
  const navigateDates = (direction) => {
    const newDate = new Date(startDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setStartDate(newDate);
  };

  // Format date for display
  const formatDate = (date) => {
    return `${date.getDate()}`;
  };

  // Format month for display
  const formatMonth = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()];
  };

  // Check if allocation falls on a specific date
  const getAllocationForDate = (projectId, date) => {
    const dateObj = new Date(date);
    return allocations.find(a => 
      a.projectId === projectId && 
      dateObj >= a.startDate && 
      dateObj <= a.endDate
    );
  };

  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-2 bg-white border-b">
        <div className="flex items-center">
          <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
            <Calendar size={20} />
          </button>
          <div className="flex items-center ml-4">
            <button 
              className="p-1 text-gray-500 hover:bg-gray-100 rounded"
              onClick={() => navigateDates('prev')}
            >
              <ChevronLeft size={20} />
            </button>
            <span className="mx-2 text-sm">Today</span>
            <button 
              className="p-1 text-gray-500 hover:bg-gray-100 rounded"
              onClick={() => navigateDates('next')}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative mx-2">
            <input 
              type="text" 
              placeholder="Search projects"
              className="pl-8 pr-2 py-1 text-sm border rounded w-40"
            />
            <Search size={16} className="absolute left-2 top-2 text-gray-400" />
          </div>
          <button className="flex items-center p-1 mx-1 text-sm border rounded text-gray-600 hover:bg-gray-100">
            <Filter size={16} className="mr-1" />
            Filter
          </button>
          <button className="p-1 mx-1 text-gray-500 hover:bg-gray-100 rounded">
            <Share size={16} />
          </button>
          <button className="p-1 mx-1 text-gray-500 hover:bg-gray-100 rounded">
            <Download size={16} />
          </button>
          <button className="p-1 mx-1 text-gray-500 hover:bg-gray-100 rounded">
            <Clock size={16} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow overflow-auto">
        {/* Projects column */}
        <div className="min-w-64 bg-white border-r">
          <div className="sticky top-0 p-3 font-medium text-gray-700 bg-gray-100 border-b">
            Projects
          </div>
          <div className="sticky top-9 p-3 font-medium text-gray-700 bg-gray-50 border-b">
            Allocated
          </div>
          {projects.map(project => (
            <div key={project.id} className="flex items-center p-3 border-b hover:bg-gray-50">
              <input type="checkbox" className="mr-3" />
              <div className="flex-grow">
                <div className="font-medium text-sm">{project.name}</div>
                {project.team && (
                  <div className="text-xs text-gray-500">{project.team}</div>
                )}
              </div>
              <div className="text-sm font-medium">
                {project.allocated}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex-grow overflow-x-auto">
          {/* Month headers */}
          <div className="flex sticky top-0 bg-gray-100 border-b z-10">
            {displayDates.length > 0 && (
              <>
                <div className="flex-1 text-center p-3">
                  <div className="text-sm font-medium">
                    {formatMonth(displayDates[0])} '{displayDates[0].getFullYear().toString().substr(-2)}
                  </div>
                </div>
                {displayDates.length > 7 && (
                  <div className="flex-1 text-center p-3">
                    <div className="text-sm font-medium">
                      {formatMonth(displayDates[7])} '{displayDates[7].getFullYear().toString().substr(-2)}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Date headers */}
          <div className="flex sticky top-9 bg-gray-50 border-b">
            {displayDates.map((date, index) => (
              <div key={index} className="min-w-14 text-center p-3">
                <div className="text-xs font-medium">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]}
                </div>
                <div className="text-sm">{formatDate(date)}</div>
              </div>
            ))}
          </div>

          {/* Project timeline rows */}
          {projects.map(project => (
            <div key={project.id} className="flex border-b hover:bg-gray-50">
              {displayDates.map((date, dateIndex) => {
                const allocation = getAllocationForDate(project.id, date);
                return (
                  <div 
                    key={dateIndex} 
                    className="min-w-14 h-16 border-r flex items-center justify-center relative"
                  >

              
                    {allocation && (
                      <div 
                        className="absolute inset-y-2 inset-x-1 bg-blue-500 rounded text-white text-xs flex items-center justify-center"
                        style={{
                          opacity: 0.9,
                          // If first day of allocation
                          left: date.getTime() === allocation.startDate.getTime() ? '4px' : '0',
                          // If last day of allocation
                          right: date.getTime() === allocation.endDate.getTime() ? '4px' : '0',
                        }}
                      >
                        {dateIndex === Math.floor((allocation.startDate.getTime() + allocation.endDate.getTime()) / 2) / (24 * 60 * 60 * 1000) && (
                          allocation.hours
                        )}
                              {project.name} {project.team}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectTimeline;