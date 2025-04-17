// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

// const FunctionalCalendar = () => {
//   // Get current date and first day of current month
//   const today = new Date();
//   const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  
//   // State management
//   const [currentDate, setCurrentDate] = useState(firstDayOfMonth);
//   const [viewMode, setViewMode] = useState('month'); // 'month', 'week', or 'day'
//   const [showEventModal, setShowEventModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [newEvent, setNewEvent] = useState({
//     title: '',
//     date: null,
//     startTime: '09:00',
//     endTime: '10:00',
//     color: 'bg-blue-400'
//   });

//   // Mock events data
//   const [events, setEvents] = useState([
//     {
//       id: 1,
//       title: 'Team Meeting',
//       date: new Date(today.getFullYear(), today.getMonth(), 15),
//       startTime: '10:00',
//       endTime: '11:30',
//       color: 'bg-blue-400'
//     },
//     {
//       id: 2,
//       title: 'Client Presentation',
//       date: new Date(today.getFullYear(), today.getMonth(), 18),
//       startTime: '14:00',
//       endTime: '15:30',
//       color: 'bg-green-400'
//     },
//     {
//       id: 3,
//       title: 'Lunch with Alex',
//       date: new Date(today.getFullYear(), today.getMonth(), 20),
//       startTime: '12:00',
//       endTime: '13:00',
//       color: 'bg-yellow-400'
//     },
//     {
//       id: 4,
//       title: 'Dentist Appointment',
//       date: new Date(today.getFullYear(), today.getMonth(), 22),
//       startTime: '09:30',
//       endTime: '10:30',
//       color: 'bg-red-400'
//     },
//     {
//       id: 5,
//       title: 'Weekly Review',
//       date: new Date(today.getFullYear(), today.getMonth(), 8),
//       startTime: '11:00',
//       endTime: '12:00',
//       color: 'bg-purple-400'
//     },
//     {
//       id: 6,
//       title: 'Project Deadline',
//       date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
//       startTime: '18:00',
//       endTime: '19:00',
//       color: 'bg-red-400'
//     },
//     {
//       id: 7,
//       title: 'Morning Standup',
//       date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
//       startTime: '09:00',
//       endTime: '09:30',
//       color: 'bg-green-400'
//     },
//     {
//       id: 8,
//       title: 'Code Review',
//       date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
//       startTime: '14:00',
//       endTime: '15:00',
//       color: 'bg-blue-400'
//     },
//     {
//       id: 9,
//       title: 'Team Lunch',
//       date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
//       startTime: '12:00',
//       endTime: '13:00',
//       color: 'bg-yellow-400'
//     },
//     {
//       id: 10,
//       title: 'Planning Meeting',
//       date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
//       startTime: '10:00',
//       endTime: '11:00',
//       color: 'bg-purple-400'
//     }
//   ]);

//   // Calendar navigation functions
//   const goToPreviousMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
//   };

//   const goToNextMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
//   };

//   const goToToday = () => {
//     setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
//     if (viewMode === 'day') {
//       setSelectedDate(today);
//     }
//   };

//   // Helper functions for calendar generation
//   const getDaysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (year, month) => {
//     const firstDay = new Date(year, month, 1).getDay();
//     return firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday as first day of week
//   };

//   // Generate calendar days
//   const generateCalendarDays = () => {
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();
//     const daysInMonth = getDaysInMonth(year, month);
//     const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
//     const days = [];
    
//     // Add empty cells for days before the first day of month
//     for (let i = 0; i < firstDayOfMonth; i++) {
//       days.push(null);
//     }
    
//     // Add days of the month
//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push(new Date(year, month, day));
//     }
    
//     return days;
//   };

//   // Generate week days for week view
//   const generateWeekDays = () => {
//     const viewDate = selectedDate || today;
//     const startOfWeek = new Date(viewDate);
//     const day = startOfWeek.getDay();
//     // Adjust to start from Monday
//     const diff = day === 0 ? -6 : 1 - day; 
//     startOfWeek.setDate(startOfWeek.getDate() + diff);
    
//     const days = [];
//     for (let i = 0; i < 7; i++) {
//       const date = new Date(startOfWeek);
//       date.setDate(startOfWeek.getDate() + i);
//       days.push(date);
//     }
    
//     return days;
//   };

//   // Generate hours for day/week view
//   const generateHours = () => {
//     const hours = [];
//     for (let i = 0; i < 24; i++) {
//       hours.push(`${i < 10 ? '0' + i : i}:00`);
//     }
//     return hours;
//   };

//   // Event handling functions
//   const handleDateClick = (date) => {
//     if (viewMode === 'month') {
//       setSelectedDate(date);
//       setNewEvent({
//         ...newEvent,
//         date: date
//       });
//       setShowEventModal(true);
//     } else if (viewMode === 'week') {
//       setSelectedDate(date);
//       setViewMode('day');
//     }
//   };

//   const handleAddEvent = (e) => {
//     e.preventDefault();
//     if (newEvent.title && newEvent.date) {
//       const newEventObj = {
//         id: Date.now(),
//         ...newEvent
//       };
//       setEvents([...events, newEventObj]);
//       setShowEventModal(false);
//       setNewEvent({
//         title: '',
//         date: null,
//         startTime: '09:00',
//         endTime: '10:00',
//         color: 'bg-blue-400'
//       });
//     }
//   };

//   // Get events for a specific date
//   const getEventsForDate = (date) => {
//     if (!date) return [];
    
//     return events.filter(event => {
//       const eventDate = new Date(event.date);
//       return (
//         eventDate.getDate() === date.getDate() &&
//         eventDate.getMonth() === date.getMonth() &&
//         eventDate.getFullYear() === date.getFullYear()
//       );
//     }).sort((a, b) => a.startTime.localeCompare(b.startTime));
//   };

//   // Check if a date is today
//   const isToday = (date) => {
//     return (
//       date.getDate() === today.getDate() &&
//       date.getMonth() === today.getMonth() &&
//       date.getFullYear() === today.getFullYear()
//     );
//   };

//   // Format date as string
//   const formatDate = (date) => {
//     if (!date) return '';
    
//     const options = { year: 'numeric', month: 'long' };
//     return date.toLocaleDateString('en-US', options);
//   };

//   // Day name abbreviations
//   const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//   // Event color options
//   const colorOptions = [
//     'bg-blue-400',
//     'bg-green-400',
//     'bg-red-400',
//     'bg-yellow-400',
//     'bg-purple-400'
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow p-4 max-w-4xl mx-auto">
//       {/* Calendar Header */}
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center">
//           <h2 className="text-xl font-bold">
//             {viewMode === 'day' && selectedDate 
//               ? selectedDate.toLocaleDateString('en-US', { 
//                   weekday: 'long', 
//                   year: 'numeric', 
//                   month: 'long', 
//                   day: 'numeric' 
//                 })
//               : formatDate(currentDate)}
//           </h2>
//           <div className="ml-4 flex space-x-2">
//             <button 
//               onClick={goToPreviousMonth} 
//               className="p-1 rounded-full hover:bg-gray-100"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button 
//               onClick={goToNextMonth} 
//               className="p-1 rounded-full hover:bg-gray-100"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
        
//         <div className="flex space-x-2">
//           <button 
//             onClick={goToToday}
//             className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//           >
//             Today
//           </button>
//           <select
//             value={viewMode}
//             onChange={(e) => setViewMode(e.target.value)}
//             className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//           >
//             <option value="month">Month</option>
//             <option value="week">Week</option>
//             <option value="day">Day</option>
//           </select>
//           <button 
//             onClick={() => {
//               setSelectedDate(today);
//               setNewEvent({
//                 ...newEvent,
//                 date: today
//               });
//               setShowEventModal(true);
//             }}
//             className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
//           >
//             <Plus size={20} />
//           </button>
//         </div>
//       </div>
      
//       {/* Month View */}
//       {viewMode === 'month' && (
//         <div>
//           {/* Day names header */}
//           <div className="grid grid-cols-7 mb-2">
//             {dayNames.map((day, index) => (
//               <div key={index} className="text-center text-gray-500 text-sm py-2">
//                 {day}
//               </div>
//             ))}
//           </div>
          
//           {/* Calendar grid */}
//           <div className="grid grid-cols-7 gap-1">
//             {generateCalendarDays().map((date, index) => (
//               <div
//                 key={index}
//                 className={`min-h-24 p-1 border rounded ${
//                   date && isToday(date) ? 'bg-blue-50 border-blue-300' : 'border-gray-200'
//                 } ${!date ? 'bg-gray-50' : 'cursor-pointer hover:bg-gray-50'}`}
//                 onClick={() => date && handleDateClick(date)}
//               >
//                 {date && (
//                   <>
//                     <div className="flex justify-between">
//                       <span className={`text-sm rounded-full w-6 h-6 flex items-center justify-center ${
//                         isToday(date) ? 'bg-blue-500 text-white' : ''
//                       }`}>
//                         {date.getDate()}
//                       </span>
//                     </div>
//                     <div className="mt-1 space-y-1">
//                       {getEventsForDate(date).slice(0, 3).map((event, idx) => (
//                         <div 
//                           key={idx} 
//                           className={`text-xs p-1 rounded truncate ${event.color} text-white`}
//                         >
//                           {event.title}
//                         </div>
//                       ))}
//                       {getEventsForDate(date).length > 3 && (
//                         <div className="text-xs text-gray-500">
//                           +{getEventsForDate(date).length - 3} more
//                         </div>
//                       )}
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
      
//       {/* Week View */}
//       {viewMode === 'week' && (
//         <div>
//           {/* Day headers */}
//           <div className="grid grid-cols-8 border-b">
//             <div className="p-2 border-r"></div>
//             {generateWeekDays().map((date, index) => (
//               <div 
//                 key={index} 
//                 className={`p-2 text-center ${isToday(date) ? 'bg-blue-50' : ''} cursor-pointer`}
//                 onClick={() => handleDateClick(date)}
//               >
//                 <div className="text-sm text-gray-500">{dayNames[index]}</div>
//                 <div className={`text-lg font-medium ${
//                   isToday(date) ? 'bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto' : ''
//                 }`}>
//                   {date.getDate()}
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Time slots */}
//           <div className="overflow-y-auto" style={{ height: '500px' }}>
//             {generateHours().slice(7, 20).map((hour, hourIndex) => (
//               <div key={hourIndex} className="grid grid-cols-8 border-b h-16">
//                 <div className="p-1 text-xs text-gray-500 border-r">
//                   {hour}
//                 </div>
//                 {generateWeekDays().map((date, dateIndex) => {
//                   const dayEvents = getEventsForDate(date).filter(event => 
//                     event.startTime.substring(0, 2) === hour.substring(0, 2)
//                   );
                  
//                   return (
//                     <div 
//                       key={dateIndex} 
//                       className="p-1 border-r relative"
//                       onClick={() => {
//                         setSelectedDate(date);
//                         setNewEvent({
//                           ...newEvent,
//                           date: date,
//                           startTime: hour
//                         });
//                         setShowEventModal(true);
//                       }}
//                     >
//                       {dayEvents.map((event, eventIndex) => (
//                         <div 
//                           key={eventIndex}
//                           className={`${event.color} p-1 text-xs text-white rounded mb-1 truncate`}
//                         >
//                           {event.title}
//                         </div>
//                       ))}
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
      
//       {/* Day View */}
//       {viewMode === 'day' && (
//         <div className="overflow-y-auto" style={{ height: '500px' }}>
//           <div className="overflow-y-auto">
//             {generateHours().slice(7, 20).map((hour, index) => {
//               const viewDate = selectedDate || today;
//               const hourEvents = getEventsForDate(viewDate).filter(event => 
//                 event.startTime.substring(0, 2) === hour.substring(0, 2)
//               );
              
//               return (
//                 <div 
//                   key={index} 
//                   className="flex border-b py-2"
//                   onClick={() => {
//                     setNewEvent({
//                       ...newEvent,
//                       date: viewDate,
//                       startTime: hour
//                     });
//                     setShowEventModal(true);
//                   }}
//                 >
//                   <div className="w-16 text-xs text-gray-500 px-2">
//                     {hour}
//                   </div>
//                   <div className="flex-1 min-h-12">
//                     {hourEvents.map((event, eventIndex) => (
//                       <div 
//                         key={eventIndex}
//                         className={`${event.color} p-2 text-white rounded mb-1`}
//                       >
//                         <div className="font-medium">{event.title}</div>
//                         <div className="text-xs">
//                           {event.startTime} - {event.endTime}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
      
//       {/* Event Modal */}
//       {showEventModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
//             <h3 className="text-lg font-bold mb-4">Add Event</h3>
//             <form onSubmit={handleAddEvent}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Title</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border rounded"
//                   value={newEvent.title}
//                   onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
//                   required
//                   placeholder="Enter event title"
//                 />
//               </div>
              
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Start Time</label>
//                   <input
//                     type="time"
//                     className="w-full p-2 border rounded"
//                     value={newEvent.startTime}
//                     onChange={(e) => setNewEvent({...newEvent, startTime: e.target.value})}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">End Time</label>
//                   <input
//                     type="time"
//                     className="w-full p-2 border rounded"
//                     value={newEvent.endTime}
//                     onChange={(e) => setNewEvent({...newEvent, endTime: e.target.value})}
//                   />
//                 </div>
//               </div>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Color</label>
//                 <div className="flex space-x-2">
//                   {colorOptions.map((color, index) => (
//                     <div
//                       key={index}
//                       className={`w-8 h-8 rounded-full ${color} cursor-pointer ${
//                         newEvent.color === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
//                       }`}
//                       onClick={() => setNewEvent({...newEvent, color})}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//                   onClick={() => setShowEventModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 >
//                   Save Event
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FunctionalCalendar;


import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, Menu, X, Calendar as CalendarIcon } from 'lucide-react';

const FunctionalCalendar = () => {
  // Get current date and first day of current month
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  
  // State management
  const [currentDate, setCurrentDate] = useState(firstDayOfMonth);
  const [viewMode, setViewMode] = useState('month');
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: null,
    startTime: '09:00',
    endTime: '10:00',
    color: 'bg-blue-400'
  });

  // Mock events data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Team Meeting',
      date: new Date(today.getFullYear(), today.getMonth(), 15),
      startTime: '10:00',
      endTime: '11:30',
      color: 'bg-blue-400'
    },
    {
      id: 2,
      title: 'Client Presentation',
      date: new Date(today.getFullYear(), today.getMonth(), 18),
      startTime: '14:00',
      endTime: '15:30',
      color: 'bg-green-400'
    },
    {
      id: 3,
      title: 'Lunch with Alex',
      date: new Date(today.getFullYear(), today.getMonth(), 20),
      startTime: '12:00',
      endTime: '13:00',
      color: 'bg-yellow-400'
    },
    {
      id: 4,
      title: 'Dentist Appointment',
      date: new Date(today.getFullYear(), today.getMonth(), 22),
      startTime: '09:30',
      endTime: '10:30',
      color: 'bg-red-400'
    },
    {
      id: 5,
      title: 'Weekly Review',
      date: new Date(today.getFullYear(), today.getMonth(), 8),
      startTime: '11:00',
      endTime: '12:00',
      color: 'bg-purple-400'
    },
    {
      id: 6,
      title: 'Project Deadline',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      startTime: '18:00',
      endTime: '19:00',
      color: 'bg-red-400'
    },
    {
      id: 7,
      title: 'Morning Standup',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      startTime: '09:00',
      endTime: '09:30',
      color: 'bg-green-400'
    },
    {
      id: 8,
      title: 'Code Review',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      startTime: '14:00',
      endTime: '15:00',
      color: 'bg-blue-400'
    },
    {
      id: 9,
      title: 'Team Lunch',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
      startTime: '12:00',
      endTime: '13:00',
      color: 'bg-yellow-400'
    },
    {
      id: 10,
      title: 'Planning Meeting',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
      startTime: '10:00',
      endTime: '11:00',
      color: 'bg-purple-400'
    }
  ]);

  // Check window size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      if (mobile && sidebarOpen) {
        setSidebarOpen(false);
      } else if (!mobile && !sidebarOpen) {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarOpen]);

  // Calendar navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    if (viewMode === 'day') {
      setSelectedDate(today);
    }
  };

  // Helper functions for calendar generation
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday as first day of week
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  // Generate week days for week view
  const generateWeekDays = () => {
    const viewDate = selectedDate || today;
    const startOfWeek = new Date(viewDate);
    const day = startOfWeek.getDay();
    // Adjust to start from Monday
    const diff = day === 0 ? -6 : 1 - day; 
    startOfWeek.setDate(startOfWeek.getDate() + diff);
    
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      days.push(date);
    }
    
    return days;
  };

  // Generate hours for day/week view
  const generateHours = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(`${i < 10 ? '0' + i : i}:00`);
    }
    return hours;
  };

  // Event handling functions
  const handleDateClick = (date) => {
    if (viewMode === 'month') {
      setSelectedDate(date);
      setNewEvent({
        ...newEvent,
        date: date
      });
      setShowEventModal(true);
    } else if (viewMode === 'week') {
      setSelectedDate(date);
      setViewMode('day');
    }
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date) {
      const newEventObj = {
        id: Date.now(),
        ...newEvent
      };
      setEvents([...events, newEventObj]);
      setShowEventModal(false);
      setNewEvent({
        title: '',
        date: null,
        startTime: '09:00',
        endTime: '10:00',
        color: 'bg-blue-400'
      });
    }
  };

  // Get upcoming events (next 5 events)
  const getUpcomingEvents = () => {
    const now = new Date();
    return events
      .filter(event => {
        const eventDateTime = new Date(event.date);
        eventDateTime.setHours(parseInt(event.startTime.split(':')[0]), parseInt(event.startTime.split(':')[1]));
        return eventDateTime >= now;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        dateA.setHours(parseInt(a.startTime.split(':')[0]), parseInt(a.startTime.split(':')[1]));
        dateB.setHours(parseInt(b.startTime.split(':')[0]), parseInt(b.startTime.split(':')[1]));
        return dateA - dateB;
      })
      .slice(0, 5);
  };

  // Get events for a specific date
  const getEventsForDate = (date) => {
    if (!date) return [];
    
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    }).sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

  // Check if a date is today
  const isToday = (date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Format date as string
  const formatDate = (date) => {
    if (!date) return '';
    
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  // Day name abbreviations
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Month names for mini calendar
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Event color options
  const colorOptions = [
    'bg-blue-400',
    'bg-green-400',
    'bg-red-400',
    'bg-yellow-400',
    'bg-purple-400'
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        className={`md:hidden fixed top-4 left-4 z-20 p-2 rounded-md ${sidebarOpen ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`bg-gray-800 text-white ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out fixed md:static z-10 h-full w-64 overflow-y-auto`}
      >
        <div className="p-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl flex items-center">
              <CalendarIcon className="mr-2" size={20} />
              Calendar
            </h2>
            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        {/* Mini Month Calendar */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <div className="flex space-x-1">
              <button 
                onClick={goToPreviousMonth}
                className="p-1 hover:bg-gray-700 rounded"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={goToNextMonth}
                className="p-1 hover:bg-gray-700 rounded"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          {/* Mini Calendar Days */}
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {dayNames.map((day, index) => (
              <div key={index} className="text-gray-500">
                {day.charAt(0)}
              </div>
            ))}
            
            {generateCalendarDays().map((date, index) => (
              <div
                key={index}
                className={`rounded-full w-6 h-6 flex items-center justify-center mx-auto cursor-pointer ${
                  date && isToday(date) 
                    ? 'bg-blue-500' 
                    : date && selectedDate && date.getDate() === selectedDate.getDate() && 
                      date.getMonth() === selectedDate.getMonth() &&
                      date.getFullYear() === selectedDate.getFullYear()
                    ? 'bg-blue-700'
                    : date 
                    ? 'hover:bg-gray-700' 
                    : 'text-gray-700'
                }`}
                onClick={() => date && handleDateClick(date)}
              >
                {date && date.getDate()}
              </div>
            ))}
          </div>
        </div>
        
        {/* View Selectors */}
        <div className="p-4 flex justify-between">
          <button 
            className={`px-2 py-1 rounded ${viewMode === 'day' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            onClick={() => {
              setViewMode('day');
              setSelectedDate(selectedDate || today);
            }}
          >
            Day
          </button>
          <button 
            className={`px-2 py-1 rounded ${viewMode === 'week' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            onClick={() => setViewMode('week')}
          >
            Week
          </button>
          <button 
            className={`px-2 py-1 rounded ${viewMode === 'month' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            onClick={() => setViewMode('month')}
          >
            Month
          </button>
        </div>
        
        {/* Upcoming Events */}
        <div className="p-4 border-t border-gray-700">
          <h3 className="font-bold mb-3 flex items-center">
            Upcoming Events
            <span className="ml-2 text-xs bg-blue-500 text-white rounded-full px-2 py-0.5">
              {getUpcomingEvents().length}
            </span>
          </h3>
          
          <div className="space-y-3">
            {getUpcomingEvents().map(event => {
              const eventDate = new Date(event.date);
              return (
                <div key={event.id} className="bg-gray-700 p-2 rounded">
                  <div className={`w-2 h-2 rounded-full ${event.color} float-left mt-1.5 mr-2`}></div>
                  <div className="text-sm font-medium">{event.title}</div>
                  <div className="text-xs text-gray-400">
                    {eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {event.startTime}
                  </div>
                </div>
              );
            })}
            
            {getUpcomingEvents().length === 0 && (
              <div className="text-sm text-gray-500 italic">No upcoming events</div>
            )}
          </div>
        </div>
        
        {/* Add Event Button */}
        <div className="p-4">
          <button 
            onClick={() => {
              setSelectedDate(today);
              setNewEvent({
                ...newEvent,
                date: today
              });
              setShowEventModal(true);
            }}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center"
          >
            <Plus size={18} className="mr-1" />
            Add Event
          </button>
        </div>
      </div>
      
      {/* Main Calendar Content */}
      <div className={`flex-1 p-4 overflow-y-auto ${sidebarOpen ? 'md:ml-0' : ''}`}>
        <div className="bg-white rounded-lg shadow p-4 h-full">
          {/* Calendar Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">
                {viewMode === 'day' && selectedDate 
                  ? selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })
                  : formatDate(currentDate)}
              </h2>
              <div className="ml-4 flex space-x-2">
                <button 
                  onClick={goToPreviousMonth} 
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={goToNextMonth} 
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={goToToday}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                Today
              </button>
              <button 
                onClick={() => {
                  setSelectedDate(today);
                  setNewEvent({
                    ...newEvent,
                    date: today
                  });
                  setShowEventModal(true);
                }}
                className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 ml-2"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
          
          {/* Month View */}
          {viewMode === 'month' && (
            <div>
              {/* Day names header */}
              <div className="grid grid-cols-7 mb-2">
                {dayNames.map((day, index) => (
                  <div key={index} className="text-center text-gray-500 text-sm py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays().map((date, index) => (
                  <div
                    key={index}
                    className={`min-h-24 p-1 border rounded ${
                      date && isToday(date) ? 'bg-blue-50 border-blue-300' : 'border-gray-200'
                    } ${!date ? 'bg-gray-50' : 'cursor-pointer hover:bg-gray-50'}`}
                    onClick={() => date && handleDateClick(date)}
                  >
                    {date && (
                      <>
                        <div className="flex justify-between">
                          <span className={`text-sm rounded-full w-6 h-6 flex items-center justify-center ${
                            isToday(date) ? 'bg-blue-500 text-white' : ''
                          }`}>
                            {date.getDate()}
                          </span>
                        </div>
                        <div className="mt-1 space-y-1">
                          {getEventsForDate(date).slice(0, 3).map((event, idx) => (
                            <div 
                              key={idx} 
                              className={`text-xs p-1 rounded truncate ${event.color} text-white`}
                            >
                              {event.title}
                            </div>
                          ))}
                          {getEventsForDate(date).length > 3 && (
                            <div className="text-xs text-gray-500">
                              +{getEventsForDate(date).length - 3} more
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Week View */}
          {viewMode === 'week' && (
            <div>
              {/* Day headers */}
              <div className="grid grid-cols-8 border-b">
                <div className="p-2 border-r"></div>
                {generateWeekDays().map((date, index) => (
                  <div 
                    key={index} 
                    className={`p-2 text-center ${isToday(date) ? 'bg-blue-50' : ''} cursor-pointer`}
                    onClick={() => handleDateClick(date)}
                  >
                    <div className="text-sm text-gray-500">{dayNames[index]}</div>
                    <div className={`text-lg font-medium ${
                      isToday(date) ? 'bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto' : ''
                    }`}>
                      {date.getDate()}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Time slots */}
              <div className="overflow-y-auto" style={{ height: '500px' }}>
                {generateHours().slice(7, 20).map((hour, hourIndex) => (
                  <div key={hourIndex} className="grid grid-cols-8 border-b h-16">
                    <div className="p-1 text-xs text-gray-500 border-r">
                      {hour}
                    </div>
                    {generateWeekDays().map((date, dateIndex) => {
                      const dayEvents = getEventsForDate(date).filter(event => 
                        event.startTime.substring(0, 2) === hour.substring(0, 2)
                      );
                      
                      return (
                        <div 
                          key={dateIndex} 
                          className="p-1 border-r relative"
                          onClick={() => {
                            setSelectedDate(date);
                            setNewEvent({
                              ...newEvent,
                              date: date,
                              startTime: hour
                            });
                            setShowEventModal(true);
                          }}
                        >
                          {dayEvents.map((event, eventIndex) => (
                            <div 
                              key={eventIndex}
                              className={`${event.color} p-1 text-xs text-white rounded mb-1 truncate`}
                            >
                              {event.title}
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Day View */}
          {viewMode === 'day' && (
            <div className="overflow-y-auto" style={{ height: '500px' }}>
              <div className="overflow-y-auto">
                {generateHours().slice(7, 20).map((hour, index) => {
                  const viewDate = selectedDate || today;
                  const hourEvents = getEventsForDate(viewDate).filter(event => 
                    event.startTime.substring(0, 2) === hour.substring(0, 2)
                  );
                  
                  return (
                    <div 
                      key={index} 
                      className="flex border-b py-2"
                      onClick={() => {
                        setNewEvent({
                          ...newEvent,
                          date: viewDate,
                          startTime: hour
                        });
                        setShowEventModal(true);
                      }}
                    >
                      <div className="w-16 text-xs text-gray-500 px-2">
                        {hour}
                      </div>
                      <div className="flex-1 min-h-12">
                        {hourEvents.map((event, eventIndex) => (
                          <div 
                            key={eventIndex}
                            className={`${event.color} p-2 text-white rounded mb-1`}
                          >
                            <div className="font-medium">{event.title}</div>
                            <div className="text-xs">
                              {event.startTime} - {event.endTime}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Add Event</h3>
            <form onSubmit={handleAddEvent}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  required
                  placeholder="Enter event title"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Start Time</label>
                  <input
                    type="time"
                    className="w-full p-2 border rounded"
                    value={newEvent.startTime}
                    onChange={(e) => setNewEvent({...newEvent, startTime: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">End Time</label>
                  <input
                    type="time"
                    className="w-full p-2 border rounded"
                    value={newEvent.endTime}
                    onChange={(e) => setNewEvent({...newEvent, endTime: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Color</label>
                <div className="flex space-x-2">
                  {colorOptions.map((color, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full ${color} cursor-pointer ${
                        newEvent.color === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setNewEvent({...newEvent, color})}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => setShowEventModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionalCalendar;