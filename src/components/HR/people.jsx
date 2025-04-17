import React from "react";
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import { useSelector } from "react-redux";

const People = () => {
    const [events, setEvents] = useState([
      { id: '1', resourceId: 'r1', title: 'SALES - DO SALE', start: '2024-03-29T10:00:00', end: '2024-03-30T12:00:00', backgroundColor: '#e6e6fa', project: 'Sales', attendanceStatus: 'Present' },
      { id: '2', resourceId: 'r2', title: 'CLIENT - TRAINING', start: '2024-03-29T14:00:00', end: '2024-03-31T16:00:00', backgroundColor: '#e6e6fa', project: 'Training', attendanceStatus: 'Present' },
      { id: '3', resourceId: 'r1', title: 'SALES - DO SALE', start: '2024-04-05T09:00:00', end: '2024-04-06T17:00:00', backgroundColor: '#e6e6fa', project: 'Sales', attendanceStatus: 'Present' },
      { id: '4', resourceId: 'r3', title: 'FF 2024', start: '2024-04-10T13:00:00', end: '2024-04-12T15:00:00', backgroundColor: '#e6e6fa', project: 'Finance', attendanceStatus: 'Present' },
    ]);
  
    // State for showing weekends
    const [showWeekends, setShowWeekends] = useState(true);
    
    // State for selected date
    const [selectedDate, setSelectedDate] = useState(null);
  
    // Resources with unscheduled and overdue tasks sections
    const resources = [
      { id: 'r1', title: 'John Doe' },
      { id: 'r2', title: 'chris Martin' },
      { id: 'r3', title: 'Bob Marley' },
      { id: 'r4', title: 'Ezzat Kiwan' },
    ];
  
    // Projects for select dropdown
    const projects = [
      { id: 'xyz', name: 'XYZ' },
      { id: 'training', name: 'Training' },
      { id: 'finance', name: 'Finance' },
      { id: 'development', name: 'Development' },
      { id: 'marketing', name: 'Marketing' },
    ];
    
    // Simplified attendance status options
    const attendanceStatuses = ['Present', 'Absent'];
  
    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
      id: '',
      title: '',
      resourceId: '',
      start: '',
      end: '',
      project: '',
      attendanceStatus: 'Present',
      isEdit: false
    });

    // Function to get today's date in YYYY-MM-DD format for min attribute
    const getTodayDate = () => {
      const today = new Date();
      return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    };
  
    // Modified to format date with time or just time based on the parameter
    const formatDateTime = (date, timeOnly = false) => {
      if (!date) return '';
      const d = new Date(date);
      
      if (timeOnly) {
        return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      }
      
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    };
  
    const handleEventAdd = (selectInfo) => {
      // Set selected date
      setSelectedDate(selectInfo.start);
      
      // Format end time (only time part)
      const endTime = formatDateTime(selectInfo.end, true);
      
      setFormData({
        id: '',
        title: '',
        resourceId: selectInfo.resource.id, // This will be set and remain constant
        start: selectInfo.startStr,
        end: endTime,
        project: '',
        attendanceStatus: 'Present',
        isEdit: false
      });
      setShowModal(true);
    };
    
    // Handle date click
    const handleDateClick = (info) => {
      // Check if selected date is in the past
      const selectedDate = new Date(info.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        alert("Cannot select past dates!");
        return;
      }
      
      setSelectedDate(info.date);
      
      // Open modal with the selected date
      const endDate = new Date(info.date);
      endDate.setHours(endDate.getHours() + 2); // Default 2 hour duration
      
      setFormData({
        id: '',
        title: '',
        resourceId: '',
        start: formatDateTime(info.date),
        end: formatDateTime(endDate, true), // Only time for end
        project: '',
        attendanceStatus: 'Present',
        isEdit: false
      });
      setShowModal(true);
    };
  
    const handleEventChange = (changeInfo) => {
      // Check if the new start date is in the past
      const newStartDate = new Date(changeInfo.event.start);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (newStartDate < today) {
        alert("Cannot move events to past dates!");
        changeInfo.revert();
        return;
      }
      
      setEvents(events.map(event =>
        event.id === changeInfo.event.id
          ? {
              ...event,
              resourceId: changeInfo.event.getResources()[0].id,
              start: changeInfo.event.startStr,
              end: changeInfo.event.endStr
            }
          : event
      ));
    };
  
    const handleEventClick = (clickInfo) => {
      const event = clickInfo.event;
      setSelectedDate(event.start);
      
      // For editing existing events, get just the time part for end time
      const endTime = formatDateTime(event.end, true);
      
      setFormData({
        id: event.id,
        title: event.title,
        resourceId: event.getResources()[0].id, // Will remain constant during edit
        start: formatDateTime(event.start),
        end: endTime,
        project: event.extendedProps.project || '',
        attendanceStatus: event.extendedProps.attendanceStatus || 'Present',
        isEdit: true
      });
      setShowModal(true);
    };
  
    const handleAddTaskClick = () => {
      const now = selectedDate || new Date();
      
      // Check if now is in the past
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const dateToUse = now < today ? today : now;
      
      setSelectedDate(dateToUse);
      
      // For end time, get only the time part
      const endTime = formatDateTime(new Date(dateToUse.getTime() + 2 * 60 * 60 * 1000), true);
      
      setFormData({
        id: '',
        title: '',
        resourceId: '',
        start: formatDateTime(dateToUse),
        end: endTime,
        project: '',
        attendanceStatus: 'Present',
        isEdit: false
      });
      setShowModal(true);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      
      // Set background color based on attendance status
      const backgroundColor = formData.attendanceStatus === 'Present' ? '#e6e6fa' : '#ffcccc';
      
      // Convert end time to full datetime by combining start date with end time
      const startDate = new Date(formData.start);
      const [hours, minutes] = formData.end.split(':');
      const endDate = new Date(startDate);
      endDate.setHours(parseInt(hours, 10), parseInt(minutes, 10));
      
      const newEvent = {
        id: formData.isEdit ? formData.id : String(Date.now()),
        resourceId: formData.resourceId,
        title: formData.title,
        start: formData.start,
        end: formatDateTime(endDate),
        backgroundColor: backgroundColor,
        project: formData.project,
        attendanceStatus: formData.attendanceStatus
      };
  
      if (formData.isEdit) {
        setEvents(events.map(event => event.id === formData.id ? newEvent : event));
      } else {
        setEvents([...events, newEvent]);
      }
  
      setShowModal(false);
    };
  
    const handleDeleteEvent = () => {
      if (window.confirm('Are you sure you want to delete this task?')) {
        setEvents(events.filter(event => event.id !== formData.id));
        setShowModal(false);
      }
    };
  
    const toggleWeekends = () => {
      setShowWeekends(!showWeekends);
    };


    const darkMode = useSelector((state) => state.theme.isDarkMode);
  
  return (
    <>
     
      <div className="  min-h-screen">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navbar */}
          {/* <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-semibold">People</h1>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="fas fa-users"></i>
                  <span>Employees</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="far fa-clock"></i>
                  <span>Time management</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="far fa-file-alt"></i>
                  <span>Documents</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="fas fa-money-bill"></i>
                  <span>Payroll</span>
                </a>
              </div>
            </div>
          </nav> */}

          {/* Requests Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Showing 3 requests</h2>
              <a href="#" className=" ">
                View all
              </a>
            </div>
            <div className={`${darkMode ? "card-dark" : null } mt-4 rounded-lg p-4`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a person"
                    alt="Harry"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">8 - 12 Aug 2024 · Annual Leave</h3>
                    <p className="text-sm ">
                      Harry Peter · <span className="text-yellow-500">Pending</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className=" px-4 py-2 flex items-center space-x-2">
                    <i className="fas fa-check"></i>
                    <span>Approve</span>
                  </button>
                  <button className=" px-4 py-2 flex items-center space-x-2">
                    <i className="fas fa-times"></i>
                    <span>Reject</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="h-screen p-4 ">
                <div className=" rounded-lg shadow-lg p-6 h-full">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <input type="text" placeholder="Search" className={`${darkMode ? "card-dark" : null } px-3 py-1 border rounded-md`} />
                      <button 
                        className={`px-3 py-1 border rounded-md ${showWeekends ? '' : 'bg-blue-100'}`}
                        onClick={toggleWeekends}
                      >
                        {showWeekends ? 'Hide Weekends' : 'Show Weekends'}
                      </button>
                      {selectedDate && (
                        <div className="px-3 py-1 bg-blue-100 border rounded-md">
                          Selected: {new Date(selectedDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                    {/* <button 
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      onClick={handleAddTaskClick}
                    >
                      Add Task
                    </button> */}
                  </div>
                  
                  <FullCalendar
                    plugins={[resourceTimelinePlugin, interactionPlugin]}
                    initialView="resourceTimelineMonth"
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
                    }}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    resources={resources}
                    events={events}
                    select={handleEventAdd}
                    eventClick={handleEventClick}
                    eventChange={handleEventChange}
                    dateClick={handleDateClick}
                    height="100%"
                    resourceAreaWidth={200}
                    slotDuration={{ days: 1 }}
                    views={{
                      resourceTimelineDay: {
                        slotDuration: '00:30:00',
                        slotLabelFormat: {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true
                        }
                      }
                    }}
                    weekends={showWeekends}
                    eventContent={(eventInfo) => {
                      return (
                        <div className={`p-1 text-xs ${eventInfo.event.extendedProps.attendanceStatus === 'Absent' ? 'bg-red-100 border-red-200' : 'bg-green-100 border-purple-200'} border rounded`}>
                          <div className="font-semibold">{eventInfo.event.title}</div>
                          <div className="text-gray-600">
                            {eventInfo.event.extendedProps.project}
                            {eventInfo.event.extendedProps.attendanceStatus === 'Absent' && 
                              <span className="ml-1 text-red-600">• Absent</span>
                            }
                          </div>
                        </div>
                      )
                    }}
                    resourceLabelContent={(info) => {
                      // Check if this is a main resource or a child
                      const isChild = info.resource.parent;
                      
                      if (isChild) {
                        return (
                          <div className="text-xs  pl-4">
                            {info.resource.title}
                          </div>
                        )
                      }
                      
                      return (
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8  rounded-full flex items-center justify-center">
                            {info.resource.title.substring(0, 1)}
                          </div>
                          <div>{info.resource.title}</div>
                        </div>
                      )
                    }}
                    resourceAreaHeaderContent="Assignees"
                    resourceGroupLabelClassNames="font-bold"
                    resourceLaneClassNames="border-b hover:bg-gray-50"
                    slotLaneClassNames="border-r"
                    nowIndicator={true}
                    weekNumbers={false}
                    weekText="W"
                    businessHours={false}
                    snapDuration={{ days: 1 }}
                    expandRows={true}
                    navLinks={true}
                  />
                </div>
          
                {/* Task Modal */}
                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                      <h2 className="text-xl font-bold mb-4">
                        {formData.isEdit ? 'Edit Attendance' : 'Attendance'}
                      </h2>
                      <form onSubmit={handleFormSubmit}>
                        
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">Assigned To</label>
                          <select 
                            className="w-full px-3 py-2 border rounded-md"
                            value={formData.resourceId}
                            onChange={(e) => setFormData({...formData, resourceId: e.target.value})}
                            required
                            disabled={formData.isEdit} // Disable selection on edit
                          >
                            <option value="">Select Assignee</option>
                            {resources.map(resource => (
                              <option key={resource.id} value={resource.id}>
                                {resource.title}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">Attendance Status</label>
                          <select 
                            className="w-full px-3 py-2 border rounded-md"
                            value={formData.attendanceStatus}
                            onChange={(e) => setFormData({...formData, attendanceStatus: e.target.value})}
                            required
                          >
                            {attendanceStatuses.map(status => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Start Date & Time</label>
                            <input 
                              type="datetime-local" 
                              className="w-full px-3 py-2 border rounded-md"
                              value={formData.start}
                              onChange={(e) => setFormData({...formData, start: e.target.value})}
                              min={getTodayDate() + "T00:00"} // Prevents selecting past dates
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">End Time</label>
                            <input 
                              type="time" 
                              className="w-full px-3 py-2 border rounded-md"
                              value={formData.end}
                              onChange={(e) => setFormData({...formData, end: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-between">
                          <div>
                            {formData.isEdit && (
                              <button 
                                type="button"
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mr-2"
                                onClick={handleDeleteEvent}
                              >
                                Delete
                              </button>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <button 
                              type="button"
                              className="px-4 py-2 border rounded-md hover:bg-gray-100"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                            <button 
                              type="submit"
                              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                              {formData.isEdit ? 'Update' : 'Create'}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
        </div>
      </div>
    </>
  );
};

export default People;


// import React from "react";
// import { useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
// import interactionPlugin from '@fullcalendar/interaction';

// const People = () => {
//   const [events, setEvents] = useState([
//     // Present events (green checkmarks)
//     { id: '1', resourceId: 'jerrod', start: '2024-08-01', end: '2024-08-02', backgroundColor: '#22c55e', display: 'background' },
//     { id: '2', resourceId: 'jerrod', start: '2024-08-02', end: '2024-08-03', backgroundColor: '#22c55e', display: 'background' },
//     { id: '3', resourceId: 'serenity', start: '2024-08-05', end: '2024-08-06', backgroundColor: '#22c55e', display: 'background' },
//     { id: '4', resourceId: 'jerrod', start: '2024-08-23', end: '2024-08-26', backgroundColor: '#22c55e', display: 'background' },
    
//     // Absent/Leave events (orange circles)
//     { id: '5', resourceId: 'serenity', start: '2024-08-08', end: '2024-08-13', backgroundColor: 'transparent', display: 'background', extendedProps: { status: 'leave' } },
//     { id: '6', resourceId: 'richard', start: '2024-08-11', end: '2024-08-13', backgroundColor: 'transparent', display: 'background', extendedProps: { status: 'leave' } },
//     { id: '7', resourceId: 'richard', start: '2024-08-15', end: '2024-08-17', backgroundColor: 'transparent', display: 'background', extendedProps: { status: 'leave' } },
//   ]);

//   // State for pending leave requests
//   const [leaveRequests, setLeaveRequests] = useState([
//     {
//       id: '1',
//       employee: 'Harry Peter',
//       startDate: '2024-08-08',
//       endDate: '2024-08-12',
//       type: 'Annual Leave',
//       status: 'Pending'
//     }
//   ]);

//   // State for showing weekends
//   const [showWeekends, setShowWeekends] = useState(true);
  
//   // State for selected date
//   const [selectedDate, setSelectedDate] = useState(null);

//   // Active view (Month is default from image)
//   const [activeView, setActiveView] = useState('month');

//   // Current month and year for header
//   const [currentMonth, setCurrentMonth] = useState('August 2024');

//   // Resources (employees)
//   const resources = [
//     { id: 'jane', title: 'Jane Doe', extendedProps: { avatar: '/api/placeholder/40/40', isCurrentUser: true } },
//     { id: 'alfredo', title: 'Alfredo Vetrovs', extendedProps: { avatar: '/api/placeholder/40/40' } },
//     { id: 'serenity', title: 'Serenity Bellamy', extendedProps: { avatar: '/api/placeholder/40/40', isOnline: true } },
//     { id: 'jerrod', title: 'Jerrod Halbert', extendedProps: { avatar: '/api/placeholder/40/40' } },
//     { id: 'richard', title: 'Richard Simmons', extendedProps: { avatar: '/api/placeholder/40/40' } },
//     { id: 'dianne', title: 'Dianne Russell', extendedProps: { avatar: '/api/placeholder/40/40' } },
//   ];

//   // Handle approve request
//   const handleApproveRequest = (requestId) => {
//     setLeaveRequests(leaveRequests.map(request => 
//       request.id === requestId ? {...request, status: 'Approved'} : request
//     ));
    
//     // Add to events
//     const request = leaveRequests.find(req => req.id === requestId);
//     if (request) {
//       const newEvent = {
//         id: `leave-${Date.now()}`,
//         resourceId: 'harry', // You would need to map employee names to resource IDs in a real app
//         start: request.startDate,
//         end: request.endDate,
//         backgroundColor: 'transparent',
//         display: 'background',
//         extendedProps: { status: 'leave' }
//       };
//       setEvents([...events, newEvent]);
//     }
//   };

//   // Handle reject request
//   const handleRejectRequest = (requestId) => {
//     setLeaveRequests(leaveRequests.map(request => 
//       request.id === requestId ? {...request, status: 'Rejected'} : request
//     ));
//   };

//   // Handle view change
//   const handleViewChange = (view) => {
//     setActiveView(view);
//   };

//   // Handle request time off click
//   const handleRequestTimeOff = () => {
//     // Open a modal for requesting time off
//     alert("This would open a modal for requesting time off");
//   };

//   // Handle settings click
//   const handleSettingsClick = () => {
//     alert("This would open settings");
//   };

//   // Function to generate dates for the month view
//   const generateMonthDates = () => {
//     const dates = [];
//     const daysInMonth = 31; // For August 2024
    
//     for (let i = 1; i <= daysInMonth; i++) {
//       dates.push(i);
//     }
    
//     return dates;
//   };

//   // Month dates
//   const monthDates = generateMonthDates();

//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       {/* Header */}
//       <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
//         <h1 className="text-2xl font-bold">People</h1>
//         <div className="flex items-center space-x-4">
//           <button className="text-gray-400">
//             <span className="sr-only">Search</span>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </button>
//           <button className="text-gray-400">
//             <span className="sr-only">Notifications</span>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//             </svg>
//           </button>
//           <button className="text-gray-400">
//             <span className="sr-only">Apps</span>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//           <div className="flex items-center bg-gray-800 rounded-md px-3 py-1">
//             <span className="mr-2">Your Company Name</span>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>
//           <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
//             <span className="sr-only">User profile</span>
//             <img src="/api/placeholder/32/32" alt="Profile" className="rounded-full" />
//           </div>
//         </div>
//       </header>
      
//       {/* Navigation */}
//       <nav className="bg-gray-900 px-6 py-4 flex items-center space-x-6">
//         <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//           <span>Employees</span>
//         </a>
//         <a href="#" className="flex items-center space-x-2 text-white border-b-2 border-white">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           <span>Time management</span>
//         </a>
//         <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//           </svg>
//           <span>Documents</span>
//         </a>
//         <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//           </svg>
//           <span>Payroll</span>
//         </a>
//       </nav>

//       <div className="max-w-8xl mx-auto px-6 py-6">
//         {/* Requests Section */}
//         <div className="mb-6">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-medium">Showing 1 request</h2>
//             <a href="#" className="text-blue-400 hover:text-blue-300">
//               View all
//             </a>
//           </div>
          
//           {leaveRequests.map(request => (
//             <div key={request.id} className="bg-gray-800 rounded-lg p-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
//                     <img src="/api/placeholder/40/40" alt={request.employee} className="rounded-full" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">{request.startDate.split('-')[2]} - {request.endDate.split('-')[2]} Aug 2024 · {request.type}</h3>
//                     <p className="text-sm text-gray-400">
//                       {request.employee} · <span className="text-yellow-500">{request.status}</span>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <button 
//                     className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center space-x-2"
//                     onClick={() => handleApproveRequest(request.id)}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     <span>Approve</span>
//                   </button>
//                   <button 
//                     className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center space-x-2"
//                     onClick={() => handleRejectRequest(request.id)}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                     <span>Reject</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Calendar Controls */}
//         <div className="bg-gray-800 rounded-lg p-6">
//           {/* Filter and Views */}
//           <div className="flex justify-between items-center mb-6">
//             <div className="flex space-x-2">
//               <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-md flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
//                 </svg>
//                 Filters
//               </button>
//               <button 
//                 className={`px-4 py-2 rounded-md ${activeView === 'week' ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-300'}`}
//                 onClick={() => handleViewChange('week')}
//               >
//                 Week
//               </button>
//               <button 
//                 className={`px-4 py-2 rounded-md ${activeView === 'month' ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-300'}`}
//                 onClick={() => handleViewChange('month')}
//               >
//                 Month
//               </button>
//               <button 
//                 className={`px-4 py-2 rounded-md ${activeView === 'year' ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-300'}`}
//                 onClick={() => handleViewChange('year')}
//               >
//                 Year
//               </button>
//             </div>
//             <div className="flex space-x-2">
//               <button 
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
//                 onClick={handleRequestTimeOff}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
//                 Request time off
//               </button>
//               <button 
//                 className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-md flex items-center"
//                 onClick={handleSettingsClick}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Month navigation */}
//           <div className="flex justify-between items-center mb-8">
//             <button className="text-gray-400 hover:text-white">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <h2 className="text-xl font-semibold">{currentMonth}</h2>
//             <button className="text-gray-400 hover:text-white">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>

//           {/* Month View Calendar */}
//           <div className="w-full overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="text-gray-400">
//                   <th className="px-4 py-2 text-left">Employee</th>
//                   {monthDates.map(day => (
//                     <th key={day} className={`px-2 py-2 text-center ${day === 5 ? 'bg-blue-900/30 rounded-t-md' : ''}`}>
//                       {day}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {resources.map(resource => (
//                   <tr key={resource.id} className="border-t border-gray-700">
//                     <td className="px-4 py-3">
//                       <div className="flex items-center space-x-3">
//                         <div className="relative">
//                           <img 
//                             src={resource.extendedProps.avatar} 
//                             alt={resource.title} 
//                             className="w-8 h-8 rounded-full bg-gray-600" 
//                           />
//                           {resource.extendedProps.isOnline && (
//                             <span className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-gray-800 rounded-full w-3 h-3"></span>
//                           )}
//                         </div>
//                         <span className={resource.extendedProps.isCurrentUser ? 'flex items-center' : ''}>
//                           {resource.title}
//                           {resource.extendedProps.isCurrentUser && (
//                             <span className="ml-2 text-xs text-gray-400">(you)</span>
//                           )}
//                         </span>
//                       </div>
//                     </td>
//                     {monthDates.map(day => {
//                       // Format day for comparison
//                       const dayStr = day.toString().padStart(2, '0');
//                       const dateStr = `2024-08-${dayStr}`;
                      
//                       // Check if there's an event for this resource on this day
//                       const dayEvent = events.find(event => 
//                         event.resourceId === resource.id && 
//                         new Date(event.start).toISOString().split('T')[0] <= dateStr &&
//                         new Date(event.end).toISOString().split('T')[0] > dateStr
//                       );
                      
//                       // Check for leave events (orange)
//                       const isLeaveDay = dayEvent?.extendedProps?.status === 'leave';

//                       // Present days (green checkmark)
//                       const isPresentDay = dayEvent && !isLeaveDay;
                      
//                       return (
//                         <td 
//                           key={`${resource.id}-${day}`} 
//                           className={`px-2 py-3 text-center ${day === 5 ? 'bg-blue-900/30' : ''}`}
//                         >
//                           {isPresentDay && (
//                             <div className="flex justify-center">
//                               <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
//                                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                               </div>
//                             </div>
//                           )}
//                           {isLeaveDay && (
//                             <div className="flex justify-center">
//                               <div className="w-6 h-6 border-2 border-yellow-500 rounded-full flex items-center justify-center">
//                                 <span className="sr-only">On leave</span>
//                               </div>
//                             </div>
//                           )}
//                           {!isPresentDay && !isLeaveDay && (
//                             <div className="flex justify-center">
//                               <div className="w-6 h-6 flex items-center justify-center text-gray-600">
//                                 ×
//                               </div>
//                             </div>
//                           )}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default People;