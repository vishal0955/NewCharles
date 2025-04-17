// import React, { useState, useEffect } from 'react';
// import { Calendar, ChevronLeft, ChevronRight, Search, Filter, Download, Share } from 'lucide-react';

// const TeamAvailabilityCalendar = () => {
//   // Sample team members data
//   const [teamMembers, setTeamMembers] = useState([
//     { 
//       id: 1, 
//       name: 'Alex/Designer', 
//       role: 'UX/UI Designer',
//       avatar: '/api/placeholder/40/40',
//       allocated: '40h/week'
//     },
//     { 
//       id: 2, 
//       name: 'Samantha Price', 
//       role: 'Product Manager',
//       avatar: '/api/placeholder/40/40',
//       allocated: '35h/week'
//     },
//     { 
//       id: 3, 
//       name: 'Jessica coach', 
//       role: 'UX Coach',
//       avatar: '/api/placeholder/40/40',
//       allocated: '20h/week'
//     }
//   ]);

//   // Sample allocations data
//   const [allocations, setAllocations] = useState([
//     { 
//       memberId: 2, 
//       startDate: new Date(2025, 2, 28), 
//       endDate: new Date(2025, 3, 1), 
//       percentage: 80, 
//       label: '80% (32h)',
//       color: '#3366CC'
//     },
//     { 
//       memberId: 2, 
//       startDate: new Date(2025, 3, 8), 
//       endDate: new Date(2025, 3, 10), 
//       percentage: 40, 
//       label: '40% (16h)',
//       color: '#77DD77'
//     }
//   ]);

//   // State for date range display
//   const [displayDates, setDisplayDates] = useState([]);
//   const [startDate, setStartDate] = useState(new Date(2025, 2, 25)); // Start with March 25, 2025
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterActive, setFilterActive] = useState(false);

//   // Generate date range for display
//   useEffect(() => {
//     const dates = [];
//     const currentDate = new Date(startDate);
    
//     for (let i = 0; i < 16; i++) {
//       dates.push(new Date(currentDate));
//       currentDate.setDate(currentDate.getDate() + 1);
//     }
    
//     setDisplayDates(dates);
//   }, [startDate]);

//   // Navigate date range
//   const navigateDates = (direction) => {
//     const newDate = new Date(startDate);
//     if (direction === 'prev') {
//       newDate.setDate(newDate.getDate() - 7);
//     } else {
//       newDate.setDate(newDate.getDate() + 7);
//     }
//     setStartDate(newDate);
//   };

//   // Format date for display
//   const formatDate = (date) => {
//     return date.getDate();
//   };

//   // Format month for display
//   const formatMonth = (date) => {
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     return months[date.getMonth()];
//   };

//   // Format day for display
//   const formatDay = (date) => {
//     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return days[date.getDay()];
//   };

//   // Check if allocation falls on a specific date
//   const getAllocationForDate = (memberId, date) => {
//     const dateTime = date.getTime();
//     return allocations.find(a => 
//       a.memberId === memberId && 
//       dateTime >= a.startDate.getTime() && 
//       dateTime <= a.endDate.getTime()
//     );
//   };

//   // Set today as current date
//   const goToToday = () => {
//     setStartDate(new Date());
//   };

//   // Add a new allocation 
//   const addAllocation = (memberId, startDate, days, percentage, color) => {
//     const start = new Date(startDate);
//     const end = new Date(startDate);
//     end.setDate(end.getDate() + days - 1);
    
//     const hoursPerWeek = teamMembers.find(m => m.id === memberId)?.allocated.split('/')[0] || '40h';
//     const hours = Math.round((parseInt(hoursPerWeek) * percentage) / 100);
    
//     const newAllocation = {
//       memberId,
//       startDate: start,
//       endDate: end,
//       percentage,
//       label: `${percentage}% (${hours}h)`,
//       color: color || '#3366CC'
//     };
    
//     setAllocations([...allocations, newAllocation]);
//   };

//   // For demonstration purposes - let users add allocations by clicking on cells
//   const handleCellClick = (memberId, date) => {
//     const existingAllocation = getAllocationForDate(memberId, date);
    
//     if (!existingAllocation) {
//       const randomPercentage = Math.floor(Math.random() * 4 + 1) * 20; // 20%, 40%, 60%, 80%
//       const colors = ['#3366CC', '#77DD77', '#FFB347', '#FF6961'];
//       const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
//       addAllocation(memberId, date, 3, randomPercentage, randomColor);
//     }
//   };

//   return (
//     <div className="flex flex-col w-full h-full bg-gray-50">
//       {/* Header */}
//       <div className="flex items-center justify-between p-2 bg-white border-b">
//         <div className="flex items-center space-x-2">
//           <div className="relative">
//             <input 
//               type="text" 
//               placeholder="All users..."
//               className="pl-8 pr-2 py-1 text-sm border rounded w-32"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search size={14} className="absolute left-2 top-2 text-gray-400" />
//           </div>
          
//           <button 
//             className={`flex items-center p-1 text-sm border rounded ${filterActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
//             onClick={() => setFilterActive(!filterActive)}
//           >
//             <Filter size={14} className="mr-1" />
//             Filter
//           </button>
          
//           <button className="flex items-center p-1 text-sm border rounded text-gray-600 hover:bg-gray-100">
//             Find availability
//           </button>
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
//             <Search size={16} />
//           </button>
          
//           <button
//             className="flex items-center py-1 px-2 text-sm border rounded hover:bg-gray-100"
//             onClick={goToToday}
//           >
//             Today
//           </button>
          
//           <button 
//             className="p-1 text-gray-500 hover:bg-gray-100 rounded"
//             onClick={() => navigateDates('prev')}
//           >
//             <ChevronLeft size={16} />
//           </button>
          
//           <button 
//             className="p-1 text-gray-500 hover:bg-gray-100 rounded"
//             onClick={() => navigateDates('next')}
//           >
//             <ChevronRight size={16} />
//           </button>
          
//           <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
//             <Calendar size={16} />
//           </button>
          
//           <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
//             <Share size={16} />
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-grow overflow-auto">
//         {/* Team members column */}
//         <div className="min-w-64 bg-white border-r">
//           <div className="sticky top-0 p-3 font-medium text-gray-700 bg-gray-100 border-b">
//             Team members
//           </div>
//           <div className="sticky top-10 p-3 font-medium text-gray-700 bg-gray-50 border-b">
//             Allocated
//           </div>
          
//           {teamMembers.map(member => (
//             <div key={member.id} className="flex items-center p-3 border-b hover:bg-gray-50">
//               <input type="checkbox" className="mr-3" />
//               <img 
//                 src={member.avatar} 
//                 alt={member.name} 
//                 className="w-8 h-8 rounded-full mr-3" 
//               />
//               <div className="flex-grow">
//                 <div className="font-medium text-sm">{member.name}</div>
//                 <div className="text-xs text-gray-500">{member.role}</div>
//               </div>
//               <div className="text-sm font-medium">
//                 {member.allocated}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Timeline */}
//         <div className="flex-grow overflow-x-auto">
//           {/* Month headers */}
//           <div className="flex sticky top-0 bg-gray-100 border-b z-10">
//             {displayDates.length > 0 && (
//               <>
//                 <div className="flex px-2">
//                   {displayDates.slice(0, 8).map((date, i) => (
//                     <div key={`month-1-${i}`} className="w-12 text-center">
//                       {i === 0 || date.getDate() === 1 ? (
//                         <div className="text-xs font-medium py-1">
//                           {formatMonth(date)} '{date.getFullYear().toString().substr(-2)}
//                         </div>
//                       ) : null}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex px-2">
//                   {displayDates.slice(8).map((date, i) => (
//                     <div key={`month-2-${i}`} className="w-12 text-center">
//                       {i === 0 || date.getDate() === 1 ? (
//                         <div className="text-xs font-medium py-1">
//                           {formatMonth(date)} '{date.getFullYear().toString().substr(-2)}
//                         </div>
//                       ) : null}
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Date headers */}
//           <div className="flex sticky top-10 bg-gray-50 border-b">
//             {displayDates.map((date, index) => (
//               <div key={`date-${index}`} className="w-12 text-center">
//                 <div className="text-xs text-gray-500">
//                   {formatDay(date)}
//                 </div>
//                 <div className="text-xs font-medium pb-1">
//                   {formatDate(date)}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Team member rows */}
//           {teamMembers.map(member => (
//             <div key={`row-${member.id}`} className="flex border-b hover:bg-gray-50">
//               {displayDates.map((date, dateIndex) => {
//                 const allocation = getAllocationForDate(member.id, date);
//                 const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                
//                 return (
//                   <div 
//                     key={`cell-${member.id}-${dateIndex}`} 
//                     className={`w-12 h-20 ${isWeekend ? 'bg-gray-50' : ''}`}
//                     onClick={() => handleCellClick(member.id, date)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {allocation && (
//                       <div 
//                         className="h-full flex items-center justify-center text-xs text-white font-medium"
//                         style={{ 
//                           backgroundColor: allocation.color,
//                           borderRadius: '2px',
//                           opacity: 0.9,
//                           margin: '2px'
//                         }}
//                       >
//                         {date.getTime() === allocation.startDate.getTime() && allocation.label}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamAvailabilityCalendar;


import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

const TeamAvailabilityCalendar = () => {
  // Initial resources with employee data
  const [resources, setResources] = useState([
  
    { 
      id: 'john', 
      title: 'John Doe',
      extendedProps: {
        role: 'CEO',
        avatar: 'J'
      }
    },
    { 
      id: 'success-coach', 
      title: 'Success Coach',
      extendedProps: {
        role: '20 CAD',
        avatar: 'SC'
      }
    },
  ]);

  // Initial allocation events with project information
  const [events, setEvents] = useState([
    {
      id: '1',
      resourceId: 'john',
      title: '100% (8h/d)',
      start: '2025-03-25',
      end: '2025-03-29',
      color: '#3366CC',
      textColor: 'white',
      allDay: true,
      extendedProps: {
        project: 'Project A',
        allocation: '100%',
        hours: '8h/d'
      }
    },
    {
      id: '2',
      resourceId: 'john',
      title: '0% (0h/d)',
      start: '2025-03-29',
      end: '2025-04-05',
      color: '#99ff99',
      textColor: 'black',
      allDay: true,
      extendedProps: {
        project: 'Unallocated',
        allocation: '0%',
        hours: '0h/d'
      }
    },
    {
      id: '3',
      resourceId: 'john',
      title: '0% (0h/d)',
      start: '2025-04-05',
      end: '2025-04-12',
      color: '#99ff99',
      textColor: 'black',
      allDay: true,
      extendedProps: {
        project: 'Unallocated',
        allocation: '0%',
        hours: '0h/d'
      }
    }
  ]);

  const [view, setView] = useState('resourceTimelineWeek');
  const [projects, setProjects] = useState(['Project A', 'Project B', 'Project C', 'Unallocated']);

  // Handle date selection to add new allocation
  const handleSelect = (info) => {
    if (info.resource) {
      const projectName = prompt("Enter project name:", "Project A");
      const allocation = prompt("Enter allocation percentage (e.g., 100%):", "100%");
      const hours = prompt("Enter hours per day (e.g., 8h/d):", "8h/d");
      
      if (projectName && allocation) {
        // Determine color based on allocation
        const isFullyAllocated = allocation.includes('100%');
        const newEvent = {
          id: `event-${Date.now()}`,
          resourceId: info.resource.id,
          title: `${allocation} (${hours})`,
          start: info.startStr,
          end: info.endStr,
          color: isFullyAllocated ? '#3366CC' : '#99ff99',
          textColor: isFullyAllocated ? 'white' : 'black',
          allDay: true,
          extendedProps: {
            project: projectName,
            allocation: allocation,
            hours: hours
          }
        };
        
        // Add project to projects list if it's new
        if (!projects.includes(projectName)) {
          setProjects([...projects, projectName]);
        }
        
        setEvents([...events, newEvent]);
      }
    }
  };

  // Handle event click to show details
  const handleEventClick = (info) => {
    const event = info.event;
    const projectName = event.extendedProps.project || 'Unallocated';
    const allocation = event.extendedProps.allocation || '';
    const hours = event.extendedProps.hours || '';
    
    alert(`Project: ${projectName}\nAllocation: ${allocation}\nHours: ${hours}`);
  };

  // Handle event drag and drop
  const handleEventDrop = (info) => {
    const updatedEvents = events.map(event => {
      if (event.id === info.event.id) {
        return {
          ...event,
          resourceId: info.event.getResources()[0].id,
          start: info.event.startStr,
          end: info.event.endStr
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  // Handle event resize
  const handleEventResize = (info) => {
    const updatedEvents = events.map(event => {
      if (event.id === info.event.id) {
        return {
          ...event,
          start: info.event.startStr,
          end: info.event.endStr
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  // Add new resource/employee
  const handleAddResource = () => {
    const name = prompt("Enter employee name:");
    const role = prompt("Enter job title/role:");
    
    if (name) {
      // Create initials for avatar
      const initials = name.split(' ')
        .map(part => part[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();
        
      const newResource = {
        id: `resource-${Date.now()}`,
        title: name,
        extendedProps: {
          role: role || '',
          avatar: initials
        }
      };
      setResources([...resources, newResource]);
    }
  };

  // Toggle between views
  const switchView = (newView) => {
    setView(newView);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header with navigation and controls */}
      {/* <div className="bg-white shadow p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button className="px-2 py-1 border rounded text-gray-600">People</button>
              <button className="px-2 py-1 border rounded text-gray-600">Projects</button>
              <button className="px-2 py-1 border rounded text-gray-600">Capacity Planning</button>
              <button className="px-2 py-1 border rounded text-gray-600">Apps</button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">All users - active</span>
            <button className="px-3 py-1 border rounded bg-gray-100">Filter</button>
            <div className="border rounded px-2 py-1 flex items-center">
              <span className="text-gray-500">Find availability</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select className="border rounded px-2 py-1" value={view} onChange={(e) => switchView(e.target.value)}>
              <option value="resourceTimelineDay">Day</option>
              <option value="resourceTimelineWeek">Week</option>
              <option value="resourceTimelineMonth">Month</option>
            </select>
            <button className="p-1 border rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <span className="text-blue-500 font-medium">Today</span>
            <button className="p-1 border rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div> */}
      
      <div className="flex-grow overflow-hidden">
        {/* <div className="flex justify-between p-2 bg-gray-50 border-b">
          <button 
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleAddResource}
          >
            Add Resource
          </button>
          <div className="text-sm text-gray-500">
            Tip: Click and drag on calendar to create allocations
          </div>
        </div> */}
        
        <FullCalendar
          plugins={[resourceTimelinePlugin, dayGridPlugin, interactionPlugin, listPlugin]}
          initialView={view}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
          }}
        
          resources={resources}
          events={events}
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          navLinks={true}
          views={{
            resourceTimelineDay: {
              slotDuration: '00:30:00',
              slotLabelFormat: {
                hour: 'numeric',
                minute: '2-digit',
                // omitZeroMinute: true,
                hour12: false
              }
            },
            resourceTimelineWeek: {
              slotLabelFormat: [
                { weekday: 'short', day: '2-digit' },
                // { hour: 'numeric', minute: '2-digit',  }
              ]
            }
          }}
          resourceLabelDidMount={(info) => {
            // Create custom resource labels with avatars and roles
            const el = info.el;
            const resource = info.resource;
            
            // Clear existing content
            el.innerHTML = '';
            
            // Create container
            const container = document.createElement('div');
            container.className = 'flex items-center py-1';
            
            // Create avatar circle
            const avatar = document.createElement('div');
            avatar.className = 'w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-medium mr-2';
            avatar.innerText = resource.extendedProps.avatar || '';
            
            // Create text container
            const textContainer = document.createElement('div');
            textContainer.className = 'flex flex-col';
            
            // Add name
            const name = document.createElement('div');
            name.className = 'font-medium';
            name.innerText = resource.title;
            
            // Add role if exists
            if (resource.extendedProps.role) {
              const role = document.createElement('div');
              role.className = 'text-xs text-gray-500';
              role.innerText = resource.extendedProps.role;
              textContainer.appendChild(name);
              textContainer.appendChild(role);
            } else {
              textContainer.appendChild(name);
            }
            
            container.appendChild(avatar);
            container.appendChild(textContainer);
            el.appendChild(container);
          }}
          eventContent={(arg) => {
            // Custom render for events to show project name
            const projectName = arg.event.extendedProps.project || '';
            const allocation = arg.event.extendedProps.allocation || '';
            
            return {
              html: `<div class="fc-event-main-frame">
                      <div class="fc-event-title-container">
                        <div class="fc-event-title">${projectName}</div>
                        <div class="fc-event-title">${allocation}</div>
                      </div>
                    </div>`
            };
          }}
          select={handleSelect}
          eventClick={handleEventClick}
          eventDrop={handleEventDrop}
          eventResize={handleEventResize}
          slotLabelFormat={{
            weekday: 'short',
            day: 'numeric'
          }}
          height="100%"
          resourceAreaWidth="20%"
          resourceAreaHeaderContent="Team members"
          slotDuration="24:00:00"
          
          snapDuration="24:00:00"
        />
      </div>
    </div>
  );
};

export default TeamAvailabilityCalendar;