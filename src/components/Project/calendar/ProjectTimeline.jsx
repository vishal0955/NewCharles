


// import { useState, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
// import interactionPlugin from '@fullcalendar/interaction';
// import { useSelector } from 'react-redux';

// const ProjectTimelineCalendar = () => {
//   const [allEvents, setAllEvents] = useState([
//     { id: '1', resourceId: 'r1', title: 'SALES - DO SALE', start: '2024-03-29T10:00:00', end: '2024-03-30T12:00:00', backgroundColor: '#e6e6fa', project: 'Sales', description: 'Complete sales paperwork and close the deal', assignedTo: 'John Doe' },
//     { id: '2', resourceId: 'r2', title: 'CLIENT - TRAINING', start: '2024-03-29T14:00:00', end: '2024-03-31T16:00:00', backgroundColor: '#e6e6fa', project: 'Training', description: 'Train new client on platform features', assignedTo: 'Jane Smith' },
//     { id: '3', resourceId: 'r1', title: 'SALES - DO SALE', start: '2024-04-05T09:00:00', end: '2024-04-06T17:00:00', backgroundColor: '#e6e6fa', project: 'Sales', description: 'Present proposal to potential client', assignedTo: 'Bob Johnson' },
//     { id: '4', resourceId: 'r3', title: 'FF 2024', start: '2024-04-10T13:00:00', end: '2024-04-12T15:00:00', backgroundColor: '#e6e6fa', project: 'Finance', description: 'Financial forecasting for 2024', assignedTo: 'John Doe' },
//   ]);
  
//   // Displayed events (filtered)
//   const [events, setEvents] = useState([...allEvents]);
  
//   // Search state
//   const [searchTerm, setSearchTerm] = useState('');

//   // State for showing weekends
//   const [showWeekends, setShowWeekends] = useState(true);

//   // const resourceAreaColumns= [
//   //   {
//   //     field: 'title',
//   //     headerContent: 'Room'
//   //   },
//   //   {
//   //     field: 'occupancy',
//   //     headerContent: 'Occupancy'
//   //   }
//   // ];

//    const resourceColumns=  [
//     {
//       labelText: 'Projects',
//       field: 'fname'
//     },
//     {
//       labelText:'Allocated',
//       field: 'lname'
//     }
//   ]

//   // Resources with unscheduled and overdue tasks sections
//   const resources = [
//     { id: 'r1', title: 'Project X', 
//     //   children: [
//     //     { id: 'r1-unscheduled', title: 'Unscheduled tasks' },
//     //     { id: 'r1-overdue', title: 'Overdue tasks' }
//     //   ]
//     },
//     { id: 'r2', title: 'Project Y', 
//     //   children: [
//     //     { id: 'r2-unscheduled', title: 'Unscheduled tasks' },
//     //     { id: 'r2-overdue', title: 'Overdue tasks' }
//     //   ]
//     },
//     { id: 'r3', title: 'Project Z', 
//     //   children: [
//     //     { id: 'r3-unscheduled', title: 'Unscheduled tasks' },
//     //     { id: 'r3-overdue', title: 'Overdue tasks' }
//     //   ]
//     },
//     { id: 'r4', title: 'Project A', 
//     //   children: [
//     //     { id: 'r4-unscheduled', title: 'Unscheduled tasks' },
//     //     { id: 'r4-overdue', title: 'Overdue tasks' }
//     //   ]
//     },
//   ];

//   // Projects for select dropdown
//   const projects = [
//     { id: 'X', name: 'Project X' },
//     { id: 'Y', name: 'Project Y' },
//     { id: 'Z', name: 'Project Z' },
//     { id: 'A', name: 'Project A' },
//     { id: 'B', name: 'Project B' },
//   ];


//   const employees = [
//       { id: 'e1', name: 'John Doe' },
//       { id: 'e2', name: 'Jane Smith' },
//       { id: 'e3', name: 'Bob Johnson' },
//   ]

//   // Modal state
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     id: '',
//     title: '',
//     resourceId: '',
//     start: '',
//     end: '',
//     project: '',
//     description: '',
//     assignedTo: '',
//     isEdit: false
//   });

//   // Filter events based on search term
//   useEffect(() => {
//     if (!searchTerm.trim()) {
//       setEvents([...allEvents]);
//       return;
//     }
    
//     const lowerCaseSearch = searchTerm.toLowerCase();
//     const filtered = allEvents.filter(event => {
//       return (
//         // Search by title
//         event.title.toLowerCase().includes(lowerCaseSearch) ||
//         // Search by project
//         (event.project && event.project.toLowerCase().includes(lowerCaseSearch)) ||
//         // Search by resource (project name)
//         resources.find(r => r.id === event.resourceId)?.title.toLowerCase().includes(lowerCaseSearch) ||
//         // Search by assigned person
//         (event.assignedTo && event.assignedTo.toLowerCase().includes(lowerCaseSearch)) ||
//         // Search by description
//         (event.description && event.description.toLowerCase().includes(lowerCaseSearch))
//       );
//     });
    
//     setEvents(filtered);
//   }, [searchTerm, allEvents]);

//   const formatDateTime = (date) => {
//     if (!date) return '';
//     const d = new Date(date);
//     return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
//   };

//   const handleEventAdd = (selectInfo) => {
//     setFormData({
//       id: '',
//       title: '',
//       resourceId: selectInfo.resource.id,
//       start: selectInfo.startStr,
//       end: selectInfo.endStr,
//       project: "",
//       description: "",
//       assignedTo: "",
//       isEdit: false
//     });
//     setShowModal(true);
//   };

//   const handleEventChange = (changeInfo) => {
//     const updatedEvents = allEvents.map(event =>
//       event.id === changeInfo.event.id
//         ? {
//             ...event,
//             resourceId: changeInfo.event.getResources()[0].id,
//             start: changeInfo.event.startStr,
//             end: changeInfo.event.endStr
//           }
//         : event
//     );
    
//     setAllEvents(updatedEvents);
//   };

//   const handleEventClick = (clickInfo) => {
//     const event = clickInfo.event;
//     setFormData({
//       id: event.id,
//       title: event.title,
//       resourceId: event.getResources()[0].id,
//       start: formatDateTime(event.start),
//       end: formatDateTime(event.end),
//       project: event.extendedProps.project || '',
//       description: event.extendedProps.description || '',
//       assignedTo: event.extendedProps.assignedTo || '',
//       isEdit: true
//     });
//     setShowModal(true);
//   };

//   const handleAddTaskClick = () => {
//     const now = new Date();
//     setFormData({
//       id: '',
//       title: '',
//       resourceId: '',
//       start: formatDateTime(now),
//       end: formatDateTime(new Date(now.getTime() + 2 * 60 * 60 * 1000)),
//       project: '',
//       description: '',
//       assignedTo: '',
//       isEdit: false
//     });
//     setShowModal(true);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
    
//     const newEvent = {
//       id: formData.isEdit ? formData.id : String(Date.now()),
//       resourceId: formData.resourceId,
//       title: formData.title,
//       start: formData.start,
//       end: formData.end,
//       backgroundColor: '#e6e6fa',
//       project: formData.project,
//       description: formData.description,
//       assignedTo: formData.assignedTo
//     };

//     if (formData.isEdit) {
//       const updated = allEvents.map(event => event.id === formData.id ? newEvent : event);
//       setAllEvents(updated);
//     } else {
//       setAllEvents([...allEvents, newEvent]);
//     }

//     setShowModal(false);
//   };

//   const handleDeleteEvent = () => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       setAllEvents(allEvents.filter(event => event.id !== formData.id));
//       setShowModal(false);
//     }
//   };

//   const toggleWeekends = () => {
//     setShowWeekends(!showWeekends);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const clearSearch = () => {
//     setSearchTerm('');
//   };

//   const darkMode = useSelector((state) => state.theme.isDarkMode);

//   return (
//     <div className={`${darkMode ? "dark-mode" : null } h-screen p-4 `}>
//       <div className={` ${darkMode ? "dark-mode" : null }  rounded-lg shadow-lg p-6 h-full`}>
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center space-x-2 w-1/2">
//             <div className="flex items-center w-full">
//               <input 
//                 type="text" 
//                 placeholder="Search by title, project, person..." 
//                 className="w-full px-3 py-1 border rounded-md pr-8" 
//                 value={searchTerm}
//                 onChange={handleSearch}
//               />
//               {searchTerm && (<>
//                 <button  className='px-1 py-1 border rounded-md bg-gray-100'
//                 //   className="relative right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                   onClick={clearSearch}
//                 >
//                   ✕
//                 </button>
//                   <span className=" text-sm text-gray-500">
//                   Found: {events.length} of {allEvents.length}
//                 </span>
//                 </>
//               )}
             
//             </div>
           
//           </div>
//           <div className="flex items-center">
//           <button 
//               className={`px-1 py-1 border rounded-md me-2 ${showWeekends ? 'bg-gray-100' : 'bg-blue-100'}`}
//               onClick={toggleWeekends}
//             >
//               {showWeekends ? 'Hide Weekends' : 'Show Weekends'}
//             </button>
         
//             <button 
//               className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//               onClick={handleAddTaskClick}
//             >
//               Add Task
//             </button>
//           </div>
//         </div>
        
//         <FullCalendar
//           plugins={[resourceTimelinePlugin, interactionPlugin]}
//           initialView="resourceTimelineDay"  // Changed to day view as initial view
//           headerToolbar={{
//             left: 'prev,next today',
//             center: 'title',
//             right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
//           }}
          
//           editable={true}
//           selectable={true}
//           selectMirror={true}
//           dayMaxEvents={true}
//           resources={resources}
//           events={events}
//           select={handleEventAdd}
//           eventClick={handleEventClick}
//           eventChange={handleEventChange}
//           height="100%"
//           resourceAreaWidth={200}
//           slotDuration={{ days: 1 }}
//           initialDate={new Date()}  // Added to ensure the calendar shows the current date
//           views={{
//             resourceTimelineDay: {
//               slotDuration: '00:30:00',
//               slotLabelFormat: {
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 hour12: true
//               }
//             }
//           }}
//           weekends={showWeekends}
//           eventContent={(eventInfo) => {
//             return (
//               <div className="p-1 text-xs bg-purple-100 border border-purple-200 rounded">
//                 <div className="font-semibold">{eventInfo.event.title}</div>
//                 <div className="flex justify-between">
//                   {eventInfo.event.extendedProps.project && (
//                     <div className="text-gray-600">{eventInfo.event.extendedProps.project}</div>
//                   )}
//                   {eventInfo.event.extendedProps.assignedTo && (
//                     <div className="text-gray-600 text-xs">{eventInfo.event.extendedProps.assignedTo}</div>
//                   )}
//                 </div>
//                 {eventInfo.event.extendedProps.description && (
//                   <div className="text-gray-500 mt-1 text-xs italic">{eventInfo.event.extendedProps.description}</div>
//                 )}
//               </div>
//             )
//           }}
//           resourceLabelContent={(info) => {
//             // Check if this is a main resource or a child
//             const isChild = info.resource.parent;
            
//             if (isChild) {
//               return (
//                 <div className="text-xs text-gray-500 pl-4">
//                   {info.resource.title}
//                 </div>
//               )
//             }
            
//             return (
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                   {info.resource.title.substring(0, 1)}
//                 </div>
//                 <div>{info.resource.title}</div>
//               </div>
//             )
//           }}
//           resourceAreaHeaderContent="Assignees"
//           resourceGroupLabelClassNames="font-bold"
//           resourceLaneClassNames="border-b hover:bg-gray-50"
//           slotLaneClassNames="border-r"
//           nowIndicator={true}
//           weekNumbers={false}
//           weekText="W"
//           businessHours={false}
//           snapDuration={{ days: 1 }}
//           expandRows={true}
//           navLinks={true}
//         />
//       </div>

//       {/* Task Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md">
//             <h2 className="text-xl font-bold mb-4">
//               {formData.isEdit ? 'Edit Task' : 'Create New Task'}
//             </h2>
//             <form onSubmit={handleFormSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Title</label>
//                 <input 
//                   type="text" 
//                   className="w-full px-3 py-2 border rounded-md"
//                   value={formData.title}
//                   onChange={(e) => setFormData({...formData, title: e.target.value})}
//                   required
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Description</label>
//                 <textarea 
//                   className="w-full px-3 py-2 border rounded-md"
//                   value={formData.description}
//                   onChange={(e) => setFormData({...formData, description: e.target.value})}
//                   rows="3"
//                   placeholder="Enter task description..."
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Project</label>
//                 <select 
//                   className="w-full px-3 py-2 border rounded-md"
//                   value={formData.resourceId}
//                   onChange={(e) => setFormData({...formData, resourceId: e.target.value})}
//                   required
//                 >
//                   <option value="">Select Project</option>
//                   {resources.map(resource => (
//                     <option key={resource.id} value={resource.id}>
//                       {resource.title}
//                     </option>
//                   ))}
//                 </select>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Project Type</label>
//                   <select 
//                     className="w-full px-3 py-2 border rounded-md"
//                     value={formData.project}
//                     onChange={(e) => setFormData({...formData, project: e.target.value})}
//                     required
//                   >
//                     <option value="">Select Type</option>
//                     <option value="Sales">Sales</option>
//                     <option value="Training">Training</option>
//                     <option value="Finance">Finance</option>
//                     <option value="Development">Development</option>
//                     <option value="Marketing">Marketing</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Assigned To</label>
//                   <select 
//                     className="w-full px-3 py-2 border rounded-md"
//                     value={formData.assignedTo}
//                     onChange={(e) => setFormData({...formData, assignedTo: e.target.value})}
//                     required
//                   >
//                     <option value="">Select Employee</option>
//                     {employees.map(employee => (
//                       <option key={employee.id} value={employee.name}>
//                         {employee.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Start Date & Time</label>
//                   <input 
//                     type="datetime-local" 
//                     className="w-full px-3 py-2 border rounded-md"
//                     value={formData.start}
//                     onChange={(e) => setFormData({...formData, start: e.target.value})}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">End Date & Time</label>
//                   <input 
//                     type="datetime-local" 
//                     className="w-full px-3 py-2 border rounded-md"
//                     value={formData.end}
//                     onChange={(e) => setFormData({...formData, end: e.target.value})}
//                     required
//                   />
//                 </div>
//               </div>
              
//               <div className="flex justify-between">
//                 <div>
//                   {formData.isEdit && (
//                     <button 
//                       type="button"
//                       className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mr-2"
//                       onClick={handleDeleteEvent}
//                     >
//                       Delete
//                     </button>
//                   )}
//                 </div>
//                 <div className="flex space-x-2">
//                   <button 
//                     type="button"
//                     className="px-4 py-2 border rounded-md hover:bg-gray-100"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button 
//                     type="submit"
//                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                   >
//                     {formData.isEdit ? 'Update' : 'Create'}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectTimelineCalendar;


import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import { useSelector } from 'react-redux';

const ProjectTimelineCalendar = () => {
  const [allEvents, setAllEvents] = useState([
    { id: '1', resourceId: 'r1', title: 'xYZ - SHURE P300', start: '2024-04-18T10:00:00', end: '2024-04-18T12:00:00', backgroundColor: '#4e86f0', project: 'AlphA Networks', description: 'Complete setup for ALPHA', assignedTo: 'John Doe' },
    { id: '2', resourceId: 'r2', title: 'TECH-X - RCM L2', start: '2024-04-19T14:00:00', end: '2024-04-22T16:00:00', backgroundColor: '#4e86f0', project: 'Tech-DOM', description: 'Professional services', assignedTo: 'Jane Smith' },
    { id: '3', resourceId: 'r3', title: 'TECH-Y - RCM L3', start: '2024-04-19T09:00:00', end: '2024-04-19T17:00:00', backgroundColor: '#4e86f0', project: 'Tech-y', description: 'Professional services', assignedTo: 'Bob Johnson' },
    { id: '4', resourceId: 'r4', title: 'TECHR - RCM L1', start: '2024-04-19T13:00:00', end: '2024-04-21T15:00:00', backgroundColor: '#4e86f0', project: 'Tech-R', description: 'Professional services', assignedTo: 'Alice Brown' },
    { id: '5', resourceId: 'r5', title: 'TEST TEST', start: '2024-04-19T11:00:00', end: '2024-04-19T13:00:00', backgroundColor: '#4e86f0', project: 'TEST ', description: 'Testing project', assignedTo: 'John Doe' },
    { id: '6', resourceId: 'r6', title: 'SCC - ROYAL Dom', start: '2024-04-20T09:00:00', end: '2024-04-20T17:00:00', backgroundColor: '#4e86f0', project: 'SCC', description: 'Classic Courts Of Justice', assignedTo: 'Jane Smith' },
    { id: '7', resourceId: 'r7', title: 'Knock - RCM ADDITIONAL', start: '2024-04-21T10:00:00', end: '2024-04-21T12:00:00', backgroundColor: '#4e86f0', project: 'knock', description: 'Additional services', assignedTo: 'Bob Johnson' },
    { id: '8', resourceId: 'r8', title: 'Kingston - RCM TOWN', start: '2024-04-22T14:00:00', end: '2024-04-22T16:00:00', backgroundColor: '#4e86f0', project: 'Kingston', description: 'Town hall setup', assignedTo: 'Alice Brown' },
    { id: '9', resourceId: 'r9', title: 'SCC - 1', start: '2024-04-20T13:00:00', end: '2024-04-20T15:00:00', backgroundColor: '#4e86f0', project: 'SCC', description: 'UCI Guide implementation', assignedTo: 'John Doe' },
    { id: '10', resourceId: 'r10', title: 'SPC - BA AIRWAYS', start: '2024-04-23T10:00:00', end: '2024-04-23T12:00:00', backgroundColor: '#4e86f0', project: 'SPC Group', description: 'BA tech services', assignedTo: 'Jane Smith' },
  ]);
  
  // Displayed events (filtered)
  const [events, setEvents] = useState([...allEvents]);
  
  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // State for showing weekends
  const [showWeekends, setShowWeekends] = useState(true);

  // Resources with allocated time and percentage info
  const resources = [
    { id: 'r1', title: 'xYZ - SHURE P300', allocated: '0h 0%' },
    { id: 'r2', title: 'TECH-X - RCM L2, Professional Services', allocated: '96h 0%' },
    { id: 'r3', title: 'TECH-Y - RCM L3, Professional Services', allocated: '0h 0%' },
    { id: 'r4', title: 'TECH-Z - RCM, L1 professional services', allocated: '64h 0%' },
    { id: 'r5', title: 'Test test', allocated: '0h 0%' },
    { id: 'r6', title: 'SCC - Claasic courts ', allocated: '0h 0%' },
    { id: 'r7', title: 'TECH-X - RCM - additional', allocated: '0h 0%' },
    { id: 'r8', title: 'TECH-Y - RCM - Town hall', allocated: '0h 0%' },
    { id: 'r9', title: 'SCC - CCJ UCI GUIDE', allocated: '0h 0%' },
    { id: 'r10', title: 'SPC - BA GLA', allocated: '0h 0%' },
  ];

  // Projects for select dropdown
  const projects = [
    { id: 'Lambda', name: 'Lambda Networks' },
    { id: 'Techary', name: 'Techary' },
    { id: 'XYz', name: 'XYz' },
    { id: 'SCC', name: 'SCC' },
    { id: 'SPC', name: 'SSC Group' },
  ];

  const employees = [
    { id: 'e1', name: 'John Doe' },
    { id: 'e2', name: 'Jane Smith' },
    { id: 'e3', name: 'Bob Johnson' },
    { id: 'e4', name: 'Alice Brown' },
  ];

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    resourceId: '',
    start: '',
    end: '',
    project: '',
    description: '',
    assignedTo: '',
    isEdit: false
  });

  // Filter events based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setEvents([...allEvents]);
      return;
    }
    
    const lowerCaseSearch = searchTerm.toLowerCase();
    const filtered = allEvents.filter(event => {
      return (
        event.title.toLowerCase().includes(lowerCaseSearch) ||
        (event.project && event.project.toLowerCase().includes(lowerCaseSearch)) ||
        resources.find(r => r.id === event.resourceId)?.title.toLowerCase().includes(lowerCaseSearch) ||
        (event.assignedTo && event.assignedTo.toLowerCase().includes(lowerCaseSearch)) ||
        (event.description && event.description.toLowerCase().includes(lowerCaseSearch))
      );
    });
    
    setEvents(filtered);
  }, [searchTerm, allEvents]);

  const formatDateTime = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  };

  const handleEventAdd = (selectInfo) => {
    setFormData({
      id: '',
      title: '',
      resourceId: selectInfo.resource.id,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      project: "",
      description: "",
      assignedTo: "",
      isEdit: false
    });
    setShowModal(true);
  };

  const handleEventChange = (changeInfo) => {
    const updatedEvents = allEvents.map(event =>
      event.id === changeInfo.event.id
        ? {
            ...event,
            resourceId: changeInfo.event.getResources()[0].id,
            start: changeInfo.event.startStr,
            end: changeInfo.event.endStr
          }
        : event
    );
    
    setAllEvents(updatedEvents);
  };

  const handleEventClick = (clickInfo) => {
    const event = clickInfo.event;
    setFormData({
      id: event.id,
      title: event.title,
      resourceId: event.getResources()[0].id,
      start: formatDateTime(event.start),
      end: formatDateTime(event.end),
      project: event.extendedProps.project || '',
      description: event.extendedProps.description || '',
      assignedTo: event.extendedProps.assignedTo || '',
      isEdit: true
    });
    setShowModal(true);
  };

  const handleAddTaskClick = () => {
    const now = new Date();
    setFormData({
      id: '',
      title: '',
      resourceId: '',
      start: formatDateTime(now),
      end: formatDateTime(new Date(now.getTime() + 2 * 60 * 60 * 1000)),
      project: '',
      description: '',
      assignedTo: '',
      isEdit: false
    });
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const newEvent = {
      id: formData.isEdit ? formData.id : String(Date.now()),
      resourceId: formData.resourceId,
      title: formData.title,
      start: formData.start,
      end: formData.end,
      backgroundColor: '#4e86f0',
      project: formData.project,
      description: formData.description,
      assignedTo: formData.assignedTo
    };

    if (formData.isEdit) {
      const updated = allEvents.map(event => event.id === formData.id ? newEvent : event);
      setAllEvents(updated);
    } else {
      setAllEvents([...allEvents, newEvent]);
    }

    setShowModal(false);
  };

  const handleDeleteEvent = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setAllEvents(allEvents.filter(event => event.id !== formData.id));
      setShowModal(false);
    }
  };

  const toggleWeekends = () => {
    setShowWeekends(!showWeekends);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`${darkMode ? "dark-mode" : ""} h-screen p-2 md:p-4`}>
      <div className={`${darkMode ? "dark-mode" : ""} rounded-lg shadow-lg p-3 md:p-6 h-full`}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center space-x-2 w-full md:w-1/2 mb-2 md:mb-0">
            <div className="flex items-center w-full">
              <input 
                type="text" 
                placeholder="Search by title, project, person..." 
                className={`${darkMode ? "card-dark" : null} w-full px-3 py-1 border rounded-md pr-8`} 
                value={searchTerm}
                onChange={handleSearch}
              />
              {searchTerm && (
                <>
                  <button  
                    className="px-1 py-1 border rounded-md bg-gray-100 ml-1"
                    onClick={clearSearch}
                  >
                    ✕
                  </button>
                  <span className="text-sm text-gray-500 ml-1">
                    Found: {events.length} of {allEvents.length}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center w-full md:w-auto justify-end">
            <button 
              className={`px-1 py-1 border rounded-md me-2 ${showWeekends ? null : null }`}
              onClick={toggleWeekends}
            >
              {showWeekends ? 'Hide Weekends' : 'Show Weekends'}
            </button>
            <button 
              className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleAddTaskClick}
            >
              Add Task
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <FullCalendar
            plugins={[resourceTimelinePlugin, interactionPlugin]}
            initialView="resourceTimelineWeek"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
            }}
            customButtons={{
              today: {
                text: 'today',
                click: function() {
                  const calendarApi = this.calendar;
                  calendarApi.today();
                }
              }
            }}
            buttonText={{
              today: 'today',
              day: 'day',
              week: 'week',
              month: 'month'
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            resources={resources.map(resource => ({
              id: resource.id,
              title: resource.title,
              allocated: resource.allocated
            }))}
            resourceAreaColumns={[
              {
                field: 'title',
                headerContent: 'Projects'
              },
              {
                field: 'allocated',
                headerContent: 'Allocated'
              }
            ]}
            events={events}
            select={handleEventAdd}
            eventClick={handleEventClick}
            eventChange={handleEventChange}
            height="calc(100vh - 160px)"
            resourceAreaWidth="40%"
            slotDuration={{ days: 1 }}
            initialDate="2024-04-19"
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
            weekends={showWeekends}
            eventContent={(eventInfo) => {
              const eventDate = new Date(eventInfo.event.start);
              const day = eventDate.getDate();
              const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(eventDate);
              
              return (
                <div className="p-1 text-xs bg-blue-500 text-white border rounded">
                  <div className="font-semibold">Project dates: {day} {month}</div>
                </div>
              );
            }}
            resourceLabelDidMount={({ el, resource }) => {
              el.querySelector('.fc-datagrid-cell-main').style.display = 'flex';
              el.querySelector('.fc-datagrid-cell-main').style.justifyContent = 'space-between';
              el.querySelector('.fc-datagrid-cell-main').style.width = '100%';
              
              // Extract the resource's title and allocated values
              const title = resource.title;
              // const allocated = resource.extendedProps.allocated;
              
              // Create and append the title element
              const titleEl = document.createElement('div');
              titleEl.textContent = title;
              titleEl.style.overflow = 'hidden';
              titleEl.style.textOverflow = 'ellipsis';
              titleEl.style.whiteSpace = 'nowrap';
              titleEl.style.maxWidth = '70%';
              
              // Create and append the allocated element
              const allocatedEl = document.createElement('div');
              // allocatedEl.textContent = allocated;
              // allocatedEl.style.textAlign = 'right';
              
              // Replace the content
              const mainEl = el.querySelector('.fc-datagrid-cell-main');
              mainEl.innerHTML = '';
              mainEl.appendChild(titleEl);
              // mainEl.appendChild(allocatedEl);
            }}
            dayHeaderDidMount={({ el }) => {
              // Remove the 00:00 time display
              const timeElements = el.querySelectorAll('.fc-col-header-cell-cushion div:nth-child(2)');
              timeElements.forEach(timeEl => {
                if (timeEl) {
                  timeEl.remove();
                }
              });
            }}
            dayHeaderContent={(args) => {
              const date = args.date;
              const day = date.getDate();
              const weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(date);
              return (
                `<div class="fc-col-header-cell-cushion">
                  <div>${day} ${weekday}</div>
                </div>`
              );
            }}
            nowIndicator={true}
            weekNumbers={false}
            expandRows={true}
            navLinks={true}
            resourceAreaHeaderContent={
              <div class="flex justify-between w-full px-2">
                <div>Projects</div>
           
              </div>
            }
            resourcesInitiallyExpanded={true}
          />
        </div>
      </div>

      {/* Task Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? "card-dark" : null} bg-white rounded-lg p-4 md:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto`}>
            <h2 className="text-xl font-bold mb-4">
              {formData.isEdit ? 'Edit Task' : 'Create New Task'}
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input 
                  type="text" 
                  className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea 
                  className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows="3"
                  placeholder="Enter task description..."
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Project</label>
                <select 
                  className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                  value={formData.resourceId}
                  onChange={(e) => setFormData({...formData, resourceId: e.target.value})}
                  required
                >
                  <option value="">Select Project</option>
                  {resources.map(resource => (
                    <option key={resource.id} value={resource.id}>
                      {resource.title}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <select 
                    className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    required
                  >
                    <option value="">Select Company</option>
                    {projects.map(project => (
                      <option key={project.id} value={project.name}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Assigned To</label>
                  <select 
                    className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`} 
                    value={formData.assignedTo}
                    onChange={(e) => setFormData({...formData, assignedTo: e.target.value})}
                    required
                  >
                    <option value="">Select Employee</option>
                    {employees.map(employee => (
                      <option key={employee.id} value={employee.name}>
                        {employee.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Start Date & Time</label>
                  <input 
                    type="datetime-local" 
                    className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                    value={formData.start}
                    onChange={(e) => setFormData({...formData, start: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">End Date & Time</label>
                  <input 
                    type="datetime-local" 
                    className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                    value={formData.end}
                    onChange={(e) => setFormData({...formData, end: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-2 md:mb-0">
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
                    className="px-4 py-2 border rounded-md"
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
  );
};

export default ProjectTimelineCalendar;


