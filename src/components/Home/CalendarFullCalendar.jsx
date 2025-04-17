// import React, { useState, useRef, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { Menu, X, Plus, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import GoogleCalendarEventForm from './AddEvents';

// const CalendarApp = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [showEventModal, setShowEventModal] = useState(false);
//   const [currentView, setCurrentView] = useState('timeGridWeek');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
//   const [newEvent, setNewEvent] = useState({
//     title: '',
//     start: null,
//     end: null,
//     color: '#3788d8'
//   });

//   // Date picker state for mini calendar
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [selectedDates, setSelectedDates] = useState([new Date()]);
//   const calendarRef = useRef(null);


//   const darkMode = useSelector((state) => state.theme.isDarkMode);

//   // Sample events
//   const [events, setEvents] = useState([
//     {
//       id: '1',
//       title: 'Breakfast & Walk',
//       start: '2025-03-31T08:00:00',
//       end: '2025-03-31T08:30:00',
//       color: '#FFEB3B',
//       recurrence: { daysOfWeek: [1, 2, 3, 4, 5, 6, 7] }
//     },
//     {
//       id: '2',
//       title: 'Deep Work Focus Time',
//       start: '2025-03-31T13:00:00',
//       end: '2025-03-31T15:00:00',
//       color: '#F44336',
//       recurrence: { daysOfWeek: [1, 2, 3, 4, 5] }
//     },
//     {
//       id: '3',
//       title: 'GYM',
//       start: '2025-03-31T18:00:00',
//       end: '2025-03-31T19:00:00',
//       color: '#FFEB3B',
//       recurrence: { daysOfWeek: [1, 2, 3, 4, 5] }
//     },
//     {
//       id: '4',
//       title: 'Marketing Weekly Team Meeting',
//       start: '2025-03-31T12:00:00',
//       end: '2025-03-31T13:00:00',
//       color: '#4CAF50'
//     },
//     {
//       id: '5',
//       title: 'Prospecting new business',
//       start: '2025-03-31T10:00:00',
//       end: '2025-03-31T11:00:00',
//       color: '#FF9800'
//     }
//   ]);

//   // Listen for window resize events for responsive handling
//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobileView(mobile);
//       if (mobile) {
//         setSidebarOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Date click handler for creating events
//   const handleDateClick = (info) => {
//     setNewEvent({ ...newEvent, start: info.dateStr, end: info.dateStr });
//     setShowEventModal(true);
//   };

//   // Calendar navigation functions
//   const handleViewChange = (viewName) => {
//     const calendarApi = calendarRef.current.getApi();
//     calendarApi.changeView(viewName);
//     setCurrentView(viewName);
//   };

//   const goToToday = () => {
//     const calendarApi = calendarRef.current.getApi();
//     calendarApi.today();
//     setSelectedDate(new Date());
//   };

//   const goToPrev = () => {
//     const calendarApi = calendarRef.current.getApi();
//     calendarApi.prev();
//     setSelectedDate(calendarApi.getDate());
//   };

//   const goToNext = () => {
//     const calendarApi = calendarRef.current.getApi();
//     calendarApi.next();
//     setSelectedDate(calendarApi.getDate());
//   };

//   // Add new event function
//   // const handleAddEvent = (e) => {
//   //   e.preventDefault();
//   //   if (newEvent.title && newEvent.start) {
//   //     const newEventObj = {
//   //       id: Date.now().toString(),
//   //       title: newEvent.title,
//   //       start: newEvent.start,
//   //       end:
//   //         newEvent.end ||
//   //         new Date(new Date(newEvent.start).getTime() + 60 * 60 * 1000).toISOString(),
//   //       color: newEvent.color
//   //     };
//   //     setEvents([...events, newEventObj]);
//   //     setShowEventModal(false);
//   //     setNewEvent({ title: '', start: null, end: null, color: '#3788d8' });
//   //   }
//   // };

//   // Replace the existing handleAddEvent function with this:
// const handleAddEvent = (e) => {
//   e.preventDefault();
  
//   // Get the form data from the GoogleCalendarEventForm component
//   // The form submits the event object directly through handleSubmit
//   const formElement = e.target;
//   const formData = new FormData(formElement);
  
//   // Extract the title
//   const title = formData.get('title');
  
//   if (title) {
//     // Create start date/time
//     const startDate = formData.get('startDate');
//     const startTime = formData.get('startTime') || '00:00';
//     const start = formData.get('allDay') === 'on' 
//       ? `${startDate}` 
//       : `${startDate}T${startTime}:00`;
    
//     // Create end date/time
//     const endDate = formData.get('endDate');
//     const endTime = formData.get('endTime') || '00:00';
//     const end = formData.get('allDay') === 'on'
//       ? `${endDate}` 
//       : `${endDate}T${endTime}:00`;
    
//     // Get color (default to blue if not provided)
//     let color = '#3788d8'; // Default color
//     const selectedColor = formData.get('color');
    
//     // Map the color names to hex codes
//     const colorMap = {
//       'Default colour': '#3788d8',
//       'Lavender': '#9C27B0',
//       'Sage': '#009688',
//       'Grape': '#3F51B5',
//       'Flamingo': '#F44336'
//     };
    
//     if (selectedColor && colorMap[selectedColor]) {
//       color = colorMap[selectedColor];
//     }
    
//     // Create recurrence settings if needed
//     let recurrence = null;
//     const recurrenceOption = formData.get('recurrence');
    
//     if (recurrenceOption && recurrenceOption !== 'Does not repeat') {
//       // Set up recurrence based on the option
//       if (recurrenceOption === 'Daily') {
//         recurrence = { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] };
//       } else if (recurrenceOption === 'Weekly on Saturday') {
//         recurrence = { daysOfWeek: [6] };
//       } else if (recurrenceOption === 'Monthly on first Saturday') {
//         // Simple approximation - would need more complex logic for real implementation
//         recurrence = { daysOfWeek: [6], interval: 1 };
//       }
//     }
    
//     // Create the new event object
//     const newEventObj = {
//       id: Date.now().toString(),
//       title,
//       start,
//       end,
//       color,
//       description: formData.get('description') || '',
//       location: formData.get('location') || '',
//       allDay: formData.get('allDay') === 'on',
//       // Add recurrence if specified
//       ...(recurrence && { recurrence })
//     };
    
//     // Add the new event to the events array
//     setEvents([...events, newEventObj]);
    
//     // Close the modal and reset the form
//     setShowEventModal(false);
//     setNewEvent({ title: '', start: null, end: null, color: '#3788d8' });
//   }
// };

//   // Get upcoming events for sidebar display
//   const getUpcomingEvents = () => {
//     const now = new Date();
//     return events
//       .filter((event) => new Date(event.start) >= now)
//       .sort((a, b) => new Date(a.start) - new Date(b.start))
//       .slice(0, 5);
//   };

//   // Color options for event selection
//   const colorOptions = ['#3788d8', '#4CAF50', '#F44336', '#FFEB3B', '#9C27B0'];

//   // Mini calendar helper functions
//   const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//   const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

//   const handlePrevMonth = () => {
//     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
//   };

//   const handleDateSelect = (date) => {
//     const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
//     setSelectedDates([newDate]);
//     const calendarApi = calendarRef.current.getApi();
//     calendarApi.gotoDate(newDate);
//     setSelectedDate(newDate);
//   };

//   const isDateSelected = (date) =>
//     selectedDates.some(
//       (selectedDate) =>
//         selectedDate.getDate() === date &&
//         selectedDate.getMonth() === currentMonth.getMonth() &&
//         selectedDate.getFullYear() === currentMonth.getFullYear()
//     );

//   const hasEventOnDate = (date) => {
//     const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
//     const dateStr = checkDate.toISOString().split('T')[0];
//     return events.some(
//       (event) => new Date(event.start).toISOString().split('T')[0] === dateStr
//     );
//   };

//   // Render the mini calendar for date selection
//   const renderMiniCalendar = () => {
//     const year = currentMonth.getFullYear();
//     const month = currentMonth.getMonth();
//     const daysInMonth = getDaysInMonth(year, month);
//     const firstDay = getFirstDayOfMonth(year, month) || 7; // Adjust Sunday
//     const dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

//     const weeks = [];
//     let days = [];

//     // Render header row for day names
//     const dayNamesRow = (
//       <div key="daynames" className="grid grid-cols-7 mb-1">
//         {dayNames.map((name, index) => (
//           <div key={index} className="text-center text-xs text-gray-500 py-1">
//             {name}
//           </div>
//         ))}
//       </div>
//     );
//     weeks.push(dayNamesRow);

//     // Fill empty cells before the first day
//     for (let i = 1; i < firstDay; i++) {
//       days.push(<div key={`empty-${i}`} className="py-1" />);
//     }

//     // Render each day cell
//     for (let day = 1; day <= daysInMonth; day++) {
//       const selected = isDateSelected(day);
//       const eventPresent = hasEventOnDate(day);
//       days.push(
//         <div
//           key={day}
//           className={`relative text-center py-1 text-xs cursor-pointer ${
//             selected
//               ? 'bg-blue-600 text-white rounded-full'
//               : eventPresent
//               ? 'text-gray-800 font-bold hover:bg-blue-700'
//               : 'hover:bg-blue-700'
//           }`}
//           onClick={() => handleDateSelect(day)}
//         >
//           {day}
//           {eventPresent && !selected && (
//             <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full -translate-x-1/2" />
//           )}
//         </div>
//       );

//       // Break into weeks
//       if ((firstDay - 1 + day) % 7 === 0 || day === daysInMonth) {
//         if (day === daysInMonth && (firstDay - 1 + day) % 7 !== 0) {
//           const remainingCells = 7 - ((firstDay - 1 + day) % 7);
//           for (let i = 0; i < remainingCells; i++) {
//             days.push(<div key={`end-empty-${i}`} className="py-1" />);
//           }
//         }
//         weeks.push(
//           <div key={`week-${day}`} className="grid grid-cols-7">
//             {days}
//           </div>
//         );
//         days = [];
//       }
//     }

//     return (
//       <div className={` ${darkMode ? "dark-mode" : null } mb-4 p-4 border-t border-gray-700`}>
//         <div className="flex items-center justify-between mb-3">
//           <h3 className="text-sm font-semibold">
//             {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
//           </h3>
//           <div className="flex space-x-1">
//             <button onClick={handlePrevMonth} className="p-1 rounded-full hover:bg-blue-700">
//               <ChevronLeft size={14} />
//             </button>
//             <button onClick={handleNextMonth} className="p-1 rounded-full hover:bg-blue-700">
//               <ChevronRight size={14} />
//             </button>
//           </div>
//         </div>
//         <div className="text-sm">{weeks}</div>
//       </div>
//     );
//   };

//   return (
//     <div className= {` ${darkMode ? "dark-mode" : null } flex flex-col md:flex-row h-screen bg-gray-100 `}>
//       {/* Mobile Menu Toggle */}
//       <button
//         className={`md:hidden fixed top-4 left-4 z-20 p-2 rounded-md ${
//           sidebarOpen ? 'bg-blue-700 text-white' : 'bg-gray-200'
//         }`}
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className= {` ${darkMode ? "dark-mode" : null }  fixed inset-y-0 left-0 w-64 z-10 transform transition-transform duration-300 ease-in-out mt-5
//           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0`}
//       >
//         <div className="p-4 border-b border-gray-700 flex justify-between items-center">
//           <h2 className="font-bold text-xl flex items-center">
//             <CalendarIcon className="mr-2" size={20} />
//             Calendar
//           </h2>
//           <button className="md:hidden text-gray-400 hover:text-gray-700" onClick={() => setSidebarOpen(false)}>
//             <X size={20} />
//           </button>
//         </div>

//         {/* Mini Calendar DatePicker */}
//         {renderMiniCalendar()}

//         {/* Upcoming Events */}
//         <div className="p-4 border-t border-gray-700">
//           <h3 className="font-bold mb-3 flex items-center">
//             Upcoming Events
//             <span className="ml-2 text-xs bg-blue-500 text-white rounded-full px-2 py-0.5">
//               {getUpcomingEvents().length}
//             </span>
//           </h3>
//           <div className="space-y-3 overflow-y-auto max-h-60">
//             {getUpcomingEvents().map((event) => (
//               <div key={event.id} className="p-2 rounded">
//                 <div
//                   className="w-2 h-2 rounded-full inline-block mr-2"
//                   style={{ backgroundColor: event.color }}
//                 />
//                 <div className="text-sm font-medium">{event.title}</div>
//                 <div className="text-xs text-gray-400">
//                   {new Date(event.start).toLocaleDateString('en-US', {
//                     month: 'short',
//                     day: 'numeric'
//                   })}{' '}
//                   •{' '}
//                   {new Date(event.start).toLocaleTimeString('en-US', {
//                     hour: '2-digit',
//                     minute: '2-digit',
//                     hour12: true
//                   })}
//                 </div>
//               </div>
//             ))}
//             {getUpcomingEvents().length === 0 && (
//               <div className="text-sm text-gray-500 italic">No upcoming events</div>
//             )}
//           </div>
//         </div>

//         {/* Add Event Button */}
//         {/* <div className="p-4">
//           <button
//             onClick={() => {
//               setNewEvent({ ...newEvent, start: new Date().toISOString() });
//               setShowEventModal(true);
//             }}
//             className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center"
//           >
//             <Plus size={18} className="mr-1" />
//             Add Event
//           </button>
//         </div> */}
//       </div>

//       {/* Main Calendar Content */}
//       <div className= {` flex-1 p-4 overflow-hidden mt-16 md:mt-0`}>
//         <div className={`flex-1 ${darkMode ? "dark-mode" : null } rounded-lg shadow p-4 h-full flex flex-col`}>
//           {/* Calendar Header */}
//           <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//             <div className="flex items-center mb-2 md:mb-0">
//               <h2 className="text-xl font-bold">
//                 {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
//               </h2>
//               <div className="ml-4 flex space-x-2">
//                 <button onClick={goToPrev} className="p-1 rounded-full hover:bg-gray-100">
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button onClick={goToNext} className="p-1 rounded-full hover:bg-gray-100">
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <button
//                 className={`px-2 py-1 rounded ${
//                   currentView === 'timeGridDay'
//                     ? 'bg-blue-600 text-white'
//                     : 'hover:bg-blue-700'
//                 }`}
//                 onClick={() => handleViewChange('timeGridDay')}
//               >
//                 Day
//               </button>
//               <button
//                 className={`px-2 py-1 rounded ${
//                   currentView === 'timeGridWeek'
//                     ? 'bg-blue-600 text-white'
//                     : 'hover:bg-blue-700'
//                 }`}
//                 onClick={() => handleViewChange('timeGridWeek')}
//               >
//                 Week
//               </button>
//               <button
//                 className={`px-2 py-1 rounded ${
//                   currentView === 'dayGridMonth'
//                     ? 'bg-blue-600 text-white'
//                     : 'hover:bg-blue-700'
//                 }`}
//                 onClick={() => handleViewChange('dayGridMonth')}
//               >
//                 Month
//               </button>
//               <button onClick={goToToday} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
//                 Today
//               </button>
//               <button
//                 onClick={() => {
//                   setNewEvent({ ...newEvent, start: new Date().toISOString() });
//                   setShowEventModal(true);
//                 }}
//                 className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
//               >
//                 <Plus size={20} />
//               </button>
//             </div>
//           </div>

//           {/* FullCalendar Component */}
//           <div className="flex-1 overflow-y-auto">
//             <FullCalendar
//               ref={calendarRef}
//               plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//               initialView={currentView}
//               headerToolbar={false}
//               events={events}
//               dateClick={handleDateClick}
//               eventClick={(info) => {
//                 console.log('Event clicked:', info.event);
//                 // Future: add event editing functionality here
//               }}
//               height="100%"
//               slotMinTime="06:00:00"
//               slotMaxTime="22:00:00"
//               allDaySlot={false}
//               firstDay={1} // Week starts on Monday
//               slotDuration="00:30:00"
//               businessHours={{
//                 daysOfWeek: [1, 2, 3, 4, 5],
//                 startTime: '08:00',
//                 endTime: '18:00'
//               }}
//               eventTimeFormat={{
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 meridiem: false
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Event Modal */}
//       {showEventModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
//           {/* <div className={`${darkMode ? "dark-mode" : "bg-white" } w-full p-2 border rounded  p-4 rounded-lg shadow-lg w-full max-w-md mx-auto`}>
//             <h3 className="text-lg font-bold mb-4">Add Event</h3>
//             <form onSubmit={handleAddEvent}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Title</label>
//                 <input
//                   type="text"
//                   className={` ${darkMode ? "dark-mode" : null } w-full p-2 border rounded `}
//                   value={newEvent.title}
//                   onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//                   required
//                   placeholder="Enter event title"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Start</label>
//                   <input
//                     type="datetime-local"
//                     className= {` ${darkMode ? "dark-mode" : null } w-full p-2 border rounded `}
//                     value={newEvent.start ? new Date(newEvent.start).toISOString().slice(0, 16) : ''}
//                     onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">End</label>
//                   <input
//                     type="datetime-local"
//                     className= {` ${darkMode ? "dark-mode" : null } w-full p-2 border rounded `}
//                     value={newEvent.end ? new Date(newEvent.end).toISOString().slice(0, 16) : ''}
//                     onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Color</label>
//                 <div className="flex space-x-2">
//                   {colorOptions.map((color, index) => (
//                     <div
//                       key={index}
//                       className={`w-8 h-8 rounded-full cursor-pointer ${
//                         newEvent.color === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
//                       }`}
//                       style={{ backgroundColor: color }}
//                       onClick={() => setNewEvent({ ...newEvent, color })}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 text-white"
//                   onClick={() => setShowEventModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                   Save Event
//                 </button>
//               </div>
//             </form>
//           </div> */}
//           <GoogleCalendarEventForm handleSubmit= {handleAddEvent} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarApp;


import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Menu, X, Plus, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import GoogleCalendarEventForm from './AddEvents';

const CalendarApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showEventModal, setShowEventModal] = useState(false);
  const [currentView, setCurrentView] = useState('timeGridWeek');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: null,
    end: null,
    color: '#3788d8'
  });

  // Date picker state for mini calendar
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([new Date()]);
  const calendarRef = useRef(null);

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  // Get current date values
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonthNum = now.getMonth();
  const currentDay = now.getDate();
  
  // Generate dates relative to today for sample events
  const today = new Date(currentYear, currentMonthNum, currentDay);
  const tomorrow = new Date(currentYear, currentMonthNum, currentDay + 1);
  const dayAfterTomorrow = new Date(currentYear, currentMonthNum, currentDay + 2);
  
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Breakfast & Walk',
      start: new Date(new Date(today).setHours(8, 0, 0)).toISOString(),
      end: new Date(new Date(today).setHours(8, 30, 0)).toISOString(),
      color: '#FFEB3B',
      recurrence: { daysOfWeek: [1, 2, 3, 4, 5, 6, 7] }
    },
    {
      id: '2',
      title: 'Deep Work Focus Time',
      start: new Date(new Date(today).setHours(13, 0, 0)).toISOString(),
      end: new Date(new Date(today).setHours(15, 0, 0)).toISOString(),
      color: '#F44336',
      recurrence: { daysOfWeek: [1, 2, 3, 4, 5] }
    },
    {
      id: '3',
      title: 'GYM',
      start: new Date(new Date(today).setHours(18, 0, 0)).toISOString(),
      end: new Date(new Date(today).setHours(19, 0, 0)).toISOString(),
      color: '#FFEB3B',
      recurrence: { daysOfWeek: [1, 2, 3, 4, 5] }
    },
    {
      id: '4',
      title: 'Marketing Weekly Team Meeting',
      start: new Date(new Date(tomorrow).setHours(12, 0, 0)).toISOString(),
      end: new Date(new Date(tomorrow).setHours(13, 0, 0)).toISOString(),
      color: '#4CAF50'
    },
    {
      id: '5',
      title: 'Prospecting new business',
      start: new Date(new Date(dayAfterTomorrow).setHours(10, 0, 0)).toISOString(),
      end: new Date(new Date(dayAfterTomorrow).setHours(11, 0, 0)).toISOString(),
      color: '#FF9800'
    }
  ]);

  // Listen for window resize events for responsive handling
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      if (mobile) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleclose = () => {
    setShowEventModal(false);
  };

  // Date click handler for creating events
  const handleDateClick = (info) => {
    // Format the date to be compatible with the form
    const clickedDate = new Date(info.dateStr);
    const formattedDate = clickedDate.toISOString().split('T')[0];
    const formattedTime = clickedDate.toTimeString().substring(0, 5);
    
    setNewEvent({
      ...newEvent,
      start: formattedDate,
      startTime: formattedTime,
      end: formattedDate,
      endTime: new Date(clickedDate.getTime() + 45 * 60000).toTimeString().substring(0, 5)
    });
    setShowEventModal(true);
  };

  // Calendar navigation functions
  const handleViewChange = (viewName) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(viewName);
    setCurrentView(viewName);
  };

  const goToToday = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
    setSelectedDate(new Date());
  };

  const goToPrev = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    setSelectedDate(calendarApi.getDate());
  };

  const goToNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    setSelectedDate(calendarApi.getDate());
  };

  // Add new event function
  const handleAddEvent = (e) => {
    e.preventDefault();
    
    // Get the form data from the GoogleCalendarEventForm component
    const formElement = e.target;
    const formData = new FormData(formElement);
    
    // Extract the title
    const title = formData.get('title');
    
    if (title) {
      // Create start date/time
      const startDate = formData.get('startDate');
      const startTime = formData.get('startTime') || '00:00';
      const start = formData.get('allDay') === 'on' 
        ? `${startDate}` 
        : `${startDate}T${startTime}:00`;
      
      // Create end date/time
      const endDate = formData.get('endDate');
      const endTime = formData.get('endTime') || '00:00';
      const end = formData.get('allDay') === 'on'
        ? `${endDate}` 
        : `${endDate}T${endTime}:00`;
      
      // Get color (default to blue if not provided)
      let color = '#3788d8'; // Default color
      const selectedColor = formData.get('color');
      
      // Map the color names to hex codes
      const colorMap = {
        'Default colour': '#3788d8',
        'Lavender': '#9C27B0',
        'Sage': '#009688',
        'Grape': '#3F51B5',
        'Flamingo': '#F44336'
      };
      
      if (selectedColor && colorMap[selectedColor]) {
        color = colorMap[selectedColor];
      }
      
      // Create recurrence settings if needed
      let recurrence = null;
      const recurrenceOption = formData.get('recurrence');
      
      if (recurrenceOption && recurrenceOption !== 'Does not repeat') {
        // Set up recurrence based on the option
        if (recurrenceOption === 'Daily') {
          recurrence = { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] };
        } else if (recurrenceOption === 'Weekly on Saturday') {
          recurrence = { daysOfWeek: [6] };
        } else if (recurrenceOption === 'Monthly on first Saturday') {
          // Simple approximation - would need more complex logic for real implementation
          recurrence = { daysOfWeek: [6], interval: 1 };
        }
      }
      
      // Create the new event object
      const newEventObj = {
        id: Date.now().toString(),
        title,
        start,
        end,
        color,
        description: formData.get('description') || '',
        location: formData.get('location') || '',
        allDay: formData.get('allDay') === 'on',
        // Add recurrence if specified
        ...(recurrence && { recurrence })
      };
      
      // Add the new event to the events array
      setEvents([...events, newEventObj]);
      
      // Close the modal and reset the form
      setShowEventModal(false);
      setNewEvent({ title: '', start: null, end: null, color: '#3788d8' });
    }
  };

  // Get upcoming events for sidebar display
  const getUpcomingEvents = () => {
    const now = new Date();
    return events
      .filter((event) => new Date(event.start) >= now)
      .sort((a, b) => new Date(a.start) - new Date(b.start))
      .slice(0, 5);
  };

  // Color options for event selection
  const colorOptions = ['#3788d8', '#4CAF50', '#F44336', '#FFEB3B', '#9C27B0'];

  // Mini calendar helper functions
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateSelect = (date) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
    setSelectedDates([newDate]);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(newDate);
    setSelectedDate(newDate);
  };

  const isDateSelected = (date) =>
    selectedDates.some(
      (selectedDate) =>
        selectedDate.getDate() === date &&
        selectedDate.getMonth() === currentMonth.getMonth() &&
        selectedDate.getFullYear() === currentMonth.getFullYear()
    );

  const hasEventOnDate = (date) => {
    const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
    const dateStr = checkDate.toISOString().split('T')[0];
    return events.some(
      (event) => new Date(event.start).toISOString().split('T')[0] === dateStr
    );
  };

  // Render the mini calendar for date selection
  const renderMiniCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month) || 7; // Adjust Sunday
    const dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    const weeks = [];
    let days = [];

    // Render header row for day names
    const dayNamesRow = (
      <div key="daynames" className="grid grid-cols-7 mb-1">
        {dayNames.map((name, index) => (
          <div key={index} className="text-center text-xs text-gray-500 py-1">
            {name}
          </div>
        ))}
      </div>
    );
    weeks.push(dayNamesRow);

    // Fill empty cells before the first day
    for (let i = 1; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="py-1" />);
    }

    // Render each day cell
    for (let day = 1; day <= daysInMonth; day++) {
      const selected = isDateSelected(day);
      const eventPresent = hasEventOnDate(day);
      days.push(
        <div
          key={day}
          className={`relative text-center py-1 text-xs cursor-pointer ${
            selected
              ? 'bg-blue-600 text-white rounded-full'
              : eventPresent
              ? 'text-gray-800 font-bold hover:bg-blue-700'
              : 'hover:bg-blue-700'
          }`}
          onClick={() => handleDateSelect(day)}
        >
          {day}
          {eventPresent && !selected && (
            <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full -translate-x-1/2" />
          )}
        </div>
      );

      // Break into weeks
      if ((firstDay - 1 + day) % 7 === 0 || day === daysInMonth) {
        if (day === daysInMonth && (firstDay - 1 + day) % 7 !== 0) {
          const remainingCells = 7 - ((firstDay - 1 + day) % 7);
          for (let i = 0; i < remainingCells; i++) {
            days.push(<div key={`end-empty-${i}`} className="py-1" />);
          }
        }
        weeks.push(
          <div key={`week-${day}`} className="grid grid-cols-7">
            {days}
          </div>
        );
        days = [];
      }
    }

    return (
      <div className={` ${darkMode ? "dark-mode" : null } mb-4 p-4 border-t border-gray-700`}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold">
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <div className="flex space-x-1">
            <button onClick={handlePrevMonth} className="p-1 rounded-full hover:bg-blue-700">
              <ChevronLeft size={14} />
            </button>
            <button onClick={handleNextMonth} className="p-1 rounded-full hover:bg-blue-700">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
        <div className="text-sm">{weeks}</div>
      </div>
    );
  };

  // Event rendering for custom event display
  const renderEventContent = (eventInfo) => {
    return (
      <div className="p-1 overflow-hidden">
        <div className="text-xs font-medium truncate">{eventInfo.event.title}</div>
        {!eventInfo.event.allDay && (
          <div className="text-xs opacity-70">
            {new Date(eventInfo.event.start).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            })}
          </div>
        )}
        {eventInfo.event.extendedProps.location && (
          <div className="text-xs opacity-70 truncate">📍 {eventInfo.event.extendedProps.location}</div>
        )}
      </div>
    );
  };

  return (
    <div className= {` ${darkMode ? "dark-mode" : null } flex flex-col md:flex-row h-screen bg-gray-100 `}>
      {/* Mobile Menu Toggle */}
      <button
        className={`md:hidden fixed top-4 left-4 z-20 p-2 rounded-md ${
          sidebarOpen ? 'bg-blue-700 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className= {` ${darkMode ? "dark-mode" : null }  fixed inset-y-0 left-0 w-64 z-10 transform transition-transform duration-300 ease-in-out mt-5
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0`}
      >
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="font-bold text-xl flex items-center">
            <CalendarIcon className="mr-2" size={20} />
            Calendar
          </h2>
          <button className="md:hidden text-gray-400 hover:text-gray-700" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Mini Calendar DatePicker */}
        {renderMiniCalendar()}

        {/* Upcoming Events */}
        <div className="p-4 border-t border-gray-700">
          <h3 className="font-bold mb-3 flex items-center">
            Upcoming Events
            <span className="ml-2 text-xs bg-blue-500 text-white rounded-full px-2 py-0.5">
              {getUpcomingEvents().length}
            </span>
          </h3>
          <div className="space-y-3 overflow-y-auto max-h-60">
            {getUpcomingEvents().map((event) => (
              <div key={event.id} className="p-2 rounded">
                <div
                  className="w-2 h-2 rounded-full inline-block mr-2"
                  style={{ backgroundColor: event.color }}
                />
                <div className="text-sm font-medium">{event.title}</div>
                <div className="text-xs text-gray-400">
                  {new Date(event.start).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}{' '}
                  •{' '}
                  {new Date(event.start).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}
                </div>
                {event.location && (
                  <div className="text-xs text-gray-400">📍 {event.location}</div>
                )}
              </div>
            ))}
            {getUpcomingEvents().length === 0 && (
              <div className="text-sm text-gray-500 italic">No upcoming events</div>
            )}
          </div>
        </div>

        {/* Add Event Button */}
        <div className="p-4">
          {/* <button
            onClick={() => {
              const now = new Date();
              const startDate = now.toISOString().split('T')[0];
              const startTime = now.toTimeString().substring(0, 5);
              
              setNewEvent({
                title: '',
                start: startDate,
                startTime: startTime,
                end: startDate,
                endTime: new Date(now.getTime() + 45 * 60000).toTimeString().substring(0, 5),
                color: '#3788d8'
              });
              setShowEventModal(true);
            }}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center"
          >
            <Plus size={18} className="mr-1" />
            Add Event
          </button> */}
        </div>
      </div>

      {/* Main Calendar Content */}
      <div className= {` flex-1 p-4 overflow-hidden mt-16 md:mt-0`}>
        <div className={`flex-1 ${darkMode ? "dark-mode" : null } rounded-lg shadow p-4 h-full flex flex-col`}>
          {/* Calendar Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex items-center mb-2 md:mb-0">
              <h2 className="text-xl font-bold">
                {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <div className="ml-4 flex space-x-2">
                <button onClick={goToPrev} className="p-1 rounded-full hover:bg-gray-100">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={goToNext} className="p-1 rounded-full hover:bg-gray-100">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className={`px-2 py-1 rounded ${
                  currentView === 'timeGridDay'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700'
                }`}
                onClick={() => handleViewChange('timeGridDay')}
              >
                Day
              </button>
              <button
                className={`px-2 py-1 rounded ${
                  currentView === 'timeGridWeek'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700'
                }`}
                onClick={() => handleViewChange('timeGridWeek')}
              >
                Week
              </button>
              <button
                className={`px-2 py-1 rounded ${
                  currentView === 'dayGridMonth'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700'
                }`}
                onClick={() => handleViewChange('dayGridMonth')}
              >
                Month
              </button>
              <button onClick={goToToday} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                Today
              </button>
              <button
                onClick={() => {
                  const now = new Date();
                  const startDate = now.toISOString().split('T')[0];
                  const startTime = now.toTimeString().substring(0, 5);
                  
                  setNewEvent({
                    title: '',
                    start: startDate,
                    startTime: startTime,
                    end: startDate,
                    endTime: new Date(now.getTime() + 45 * 60000).toTimeString().substring(0, 5),
                    color: '#3788d8'
                  });
                  setShowEventModal(true);
                }}
                className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* FullCalendar Component */}
          <div className="flex-1 overflow-y-auto">
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView={currentView}
              headerToolbar={false}
              events={events}
              dateClick={handleDateClick}
              eventContent={renderEventContent}
              eventClick={(info) => {
                console.log('Event clicked:', info.event);
                // Future: add event editing functionality here
              }}
              height="100%"
              slotMinTime="06:00:00"
              slotMaxTime="22:00:00"
              allDaySlot={true}
              firstDay={1} // Week starts on Monday
              slotDuration="00:30:00"
              businessHours={{
                daysOfWeek: [1, 2, 3, 4, 5],
                startTime: '08:00',
                endTime: '18:00'
              }}
              eventTimeFormat={{
                hour: '2-digit',
                minute: '2-digit',
                meridiem: false
              }}
              nowIndicator={true}
              dayMaxEvents={true}
              eventDisplay="block"
              expandRows={true}
            />
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {showEventModal && (
        // <div className="relative inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">
        //   <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="modal fade show d-block" role="dialog">
          
            <GoogleCalendarEventForm handleSubmit={handleAddEvent} handleclose={handleclose} />
          </div>
        
      )}
    </div>
  );
};

export default CalendarApp;
