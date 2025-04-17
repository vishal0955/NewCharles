

import React, { useState } from 'react';

import { BsX, BsClock, BsCalendarEvent, BsGeoAlt, BsRepeat, BsPeople, 
         BsLink45Deg, BsCamera, BsThreeDotsVertical, BsBell, BsGoogle, 
         BsFolder, BsEyeSlash, BsCalendarCheck, BsChevronDown, BsPlus } from 'react-icons/bs';

const GoogleCalendarEventForm = ({handleSubmit, handleclose}) => {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    eventType: 'Event',
    calendar: 'My calendars',
    allDay: false,
    startDate: '2025-04-05',
    startTime: '16:00',
    endDate: '2025-04-05',
    endTime: '16:45',
    timeZone: 'British Summer Time',
    recurrence: 'Does not repeat',
    guests: [],
    location: '',
    meetVideo: false,
    notifications: ['10 minutes before'],
    color: 'Default colour',
    description: '',
    visibility: 'Default visibility',
    busy: true
  });

  // Available calendars
  const calendars = [
    { name: 'My calendars', email: 'test.gmail@gmail.com', color: 'primary' },
    { name: 'Work', email: 'work@company.com', color: 'success' },
    { name: 'Personal', email: 'personal@gmail.com', color: 'danger' }
  ];

  // Available colors
  const colors = [
    { name: 'Default colour', color: 'success' },
    { name: 'Lavender', color: 'purple' },
    { name: 'Sage', color: 'teal' },
    { name: 'Grape', color: 'indigo' },
    { name: 'Flamingo', color: 'danger' }
  ];

  // Recurrence options
  const recurrenceOptions = [
    'Does not repeat',
    'Daily',
    'Weekly on Saturday',
    'Monthly on first Saturday',
    'Annually on Apr 5',
    'Custom...'
  ];

  // Visibility options
  const visibilityOptions = [
    'Default visibility',
    'Public',
    'Private'
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle guest add
  const handleAddGuest = (email) => {
    if (email && !formData.guests.includes(email)) {
      setFormData({
        ...formData,
        guests: [...formData.guests, email]
      });
    }
  };

  // Handle guest remove
  const handleRemoveGuest = (email) => {
    setFormData({
      ...formData,
      guests: formData.guests.filter(guest => guest !== email)
    });
  };

  // Handle notification add
  const handleAddNotification = () => {
    setFormData({
      ...formData,
      notifications: [...formData.notifications, '30 minutes before']
    });
  };

  // Handle notification remove
  const handleRemoveNotification = (index) => {
    const newNotifications = [...formData.notifications];
    newNotifications.splice(index, 1);
    setFormData({
      ...formData,
      notifications: newNotifications
    });
  };

  // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log('Event data:', formData);
//     // // Here you would typically send the data to an API
//     // alert('Event saved!');
//     onSubmit={handleAddEvent}>
//   };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <div className="card shadow mx-auto" style={{ maxWidth: '400px', borderRadius: '12px' }}>
          <div className="card-header bg-white d-flex justify-content-between align-items-center border-bottom py-2">
            <div className="ms-1">
              <button type="button" className="btn btn-link text-secondary p-0 border-0" onClick={handleclose}>
                <BsX size={24} />
              </button>
            </div>
           
          </div>
          
          <div className="card-body p-3">
            {/* Title Input */}
            <input 
              type="text" 
              className="form-control border-0 fw-bold mb-3 p-0" 
              placeholder="Add title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            
            {/* Event Type Tabs */}
            <div className="d-flex gap-2 mb-3">
              {['Event', 'Task', 'Working location'].map((tab) => (
                <button 
                  key={tab}
                  type="button"
                  className={`btn btn-sm ${formData.eventType === tab ? 'btn-secondary' : 'btn-light'} rounded-pill px-3`}
                  onClick={() => setFormData({...formData, eventType: tab})}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Calendar Selection */}
            <div className="dropdown mb-3">
              <div className="d-flex align-items-center ps-1" data-bs-toggle="dropdown">
                <div className="me-2">
                  <div className={`rounded-circle bg-${calendars.find(cal => cal.name === formData.calendar)?.color || 'primary'}`} style={{ width: '12px', height: '12px' }}></div>
                </div>
                <small className="text-muted">{calendars.find(cal => cal.name === formData.calendar)?.email || ''}</small>
                <div className="ms-auto">
                  <BsChevronDown size={12} className="text-secondary" />
                </div>
              </div>
              <ul className="dropdown-menu">
                {calendars.map((calendar) => (
                  <li key={calendar.name}>
                    <button 
                      type="button"
                      className="dropdown-item d-flex align-items-center" 
                      onClick={() => setFormData({...formData, calendar: calendar.name})}
                    >
                      <div className={`rounded-circle bg-${calendar.color} me-2`} style={{ width: '12px', height: '12px' }}></div>
                      <span>{calendar.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* My calendars dropdown */}
            <div className="d-flex align-items-center mb-3 ps-1 py-1 bg-light rounded-3">
              <div className="ms-1 me-3">
                <BsCalendarCheck className="text-secondary" />
              </div>
              <small>{formData.calendar}</small>
              <div className="ms-auto">
                <BsThreeDotsVertical className="text-secondary" />
              </div>
            </div>
            
            {/* All day toggle */}
            <div className="d-flex align-items-center mb-3">
              <div className="ms-1 me-3">
                <BsClock className="text-secondary" />
              </div>
              <div className="flex-grow-1">
                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="allDaySwitch" 
                    name="allDay"
                    checked={formData.allDay}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="allDaySwitch">All day</label>
                </div>
              </div>
            </div>
            
            {/* Date and time selections */}
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2 ps-5">
                <input 
                  type="date" 
                  className="form-control form-control-sm" 
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
                {!formData.allDay && (
                  <input 
                    type="time" 
                    className="form-control form-control-sm ms-2" 
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="d-flex align-items-center mb-2 ps-5">
                <input 
                  type="date" 
                  className="form-control form-control-sm" 
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
                {!formData.allDay && (
                  <input 
                    type="time" 
                    className="form-control form-control-sm ms-2" 
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            </div>
            
            {/* Time zone */}
            <div className="d-flex align-items-center mb-3">
              <div className="ms-1 me-3">
                <BsGeoAlt className="text-secondary" />
              </div>
              <select 
                className="form-select form-select-sm border-0 p-0" 
                name="timeZone"
                value={formData.timeZone}
                onChange={handleInputChange}
              >
                <option>British Summer Time</option>
                <option>Eastern Standard Time</option>
                <option>Pacific Standard Time</option>
                <option>Central European Time</option>
              </select>
            </div>
            
            {/* Recurrence */}
            <div className="dropdown mb-3">
              <div className="d-flex align-items-center" data-bs-toggle="dropdown">
                <div className="ms-1 me-3">
                  <BsRepeat className="text-secondary" />
                </div>
                <small>{formData.recurrence}</small>
                <div className="ms-auto">
                  <BsChevronDown size={12} className="text-secondary" />
                </div>
              </div>
              <ul className="dropdown-menu">
                {recurrenceOptions.map((option) => (
                  <li key={option}>
                    <button 
                      type="button"
                      className="dropdown-item" 
                      onClick={() => setFormData({...formData, recurrence: option})}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Add people */}
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <div className="ms-1 me-3">
                  <BsPeople className="text-secondary" />
                </div>
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control form-control-sm" 
                    placeholder="Add people"
                    id="guestEmail"
                  />
                  <button 
                    type="button"
                    className="btn btn-sm btn-outline-secondary" 
                    onClick={() => handleAddGuest(document.getElementById('guestEmail').value)}
                  >
                    <BsPlus />
                  </button>
                </div>
              </div>
              
              {/* Display added guests */}
              {formData.guests.length > 0 && (
                <div className="ps-5 mb-2">
                  {formData.guests.map((guest, idx) => (
                    <div key={idx} className="badge bg-light text-dark me-1 mb-1">
                      {guest}
                      <button 
                        type="button"
                        className="btn-close btn-close-sm ms-1" 
                        onClick={() => handleRemoveGuest(guest)}
                      ></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* View schedules */}
            <div className="d-flex justify-content-center mb-3">
              <button 
                type="button"
                className="btn btn-sm btn-outline-secondary rounded-pill px-3"
              >
                View schedules
              </button>
            </div>
            
            {/* Add Google Meet */}
            <div className="d-flex align-items-center mb-3">
              <div className="ms-1 me-3">
                <BsCamera className="text-secondary" />
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="meetVideoCheck" 
                  name="meetVideo"
                  checked={formData.meetVideo}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="meetVideoCheck">
                  <small>Add Google Meet video conferencing</small>
                </label>
              </div>
            </div>
            
            {/* Add location */}
            <div className="d-flex align-items-center mb-3">
              <div className="ms-1 me-3">
                <BsLink45Deg className="text-secondary" />
              </div>
              <input 
                type="text" 
                className="form-control form-control-sm border-0" 
                placeholder="Add location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            
            {/* Notifications */}
            {formData.notifications.map((notification, idx) => (
              <div key={idx} className="d-flex align-items-center mb-2">
                <div className="ms-1 me-3">
                  {idx === 0 && <BsBell className="text-secondary" />}
                </div>
                <div className="d-flex align-items-center">
                  <select 
                    className="form-select form-select-sm border-0"
                    value={notification}
                    onChange={(e) => {
                      const newNotifications = [...formData.notifications];
                      newNotifications[idx] = e.target.value;
                      setFormData({...formData, notifications: newNotifications});
                    }}
                  >
                    <option>5 minutes before</option>
                    <option>10 minutes before</option>
                    <option>15 minutes before</option>
                    <option>30 minutes before</option>
                    <option>1 hour before</option>
                  </select>
                  {idx > 0 && (
                    <button 
                      type="button"
                      className="btn btn-sm text-danger"
                      onClick={() => handleRemoveNotification(idx)}
                    >
                      <BsX />
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            {/* Add notification */}
            <div className="d-flex align-items-center mb-3 ps-5">
              <button 
                type="button"
                className="btn btn-sm text-primary p-0"
                onClick={handleAddNotification}
              >
                <BsPlus className="me-1" />
                <small>Add notification</small>
              </button>
            </div>
            
            {/* Color selection */}
            <div className="dropdown mb-3">
              <div className="d-flex align-items-center" data-bs-toggle="dropdown">
                <div className="ms-1 me-3">
                  <div 
                    className={`rounded-circle bg-${colors.find(c => c.name === formData.color)?.color || 'success'}`} 
                    style={{ width: '12px', height: '12px' }}
                  ></div>
                </div>
                <small>{formData.color}</small>
                <div className="ms-auto">
                  <BsChevronDown size={12} className="text-secondary" />
                </div>
              </div>
              <ul className="dropdown-menu">
                {colors.map((color) => (
                  <li key={color.name}>
                    <button 
                      type="button"
                      className="dropdown-item d-flex align-items-center" 
                      onClick={() => setFormData({...formData, color: color.name})}
                    >
                      <div 
                        className={`rounded-circle bg-${color.color} me-2`} 
                        style={{ width: '12px', height: '12px' }}
                      ></div>
                      <span>{color.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Add description */}
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <div className="ms-1 me-3">
                  <BsThreeDotsVertical className="text-secondary" />
                </div>
                <small className="text-muted">Add description</small>
              </div>
              <div className="ps-5">
                <textarea 
                  className="form-control" 
                  rows="3"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Add description"
                ></textarea>
              </div>
            </div>
            
            {/* Add Google Drive attachment */}
            <div className="d-flex align-items-center mb-3">
              <div className="ms-1 me-3">
                <BsFolder className="text-secondary" />
              </div>
              <button type="button" className="btn btn-sm text-primary p-0">
                <small>Add Google Drive attachment</small>
              </button>
            </div>
            
            {/* Visibility settings */}
            <div className="dropdown mb-3">
              <div className="d-flex align-items-center" data-bs-toggle="dropdown">
                <div className="ms-1 me-3">
                  <BsEyeSlash className="text-secondary" />
                </div>
                <small>{formData.visibility}</small>
                <div className="ms-auto">
                  <BsChevronDown size={12} className="text-secondary" />
                </div>
              </div>
              <ul className="dropdown-menu">
                {visibilityOptions.map((option) => (
                  <li key={option}>
                    <button 
                      type="button"
                      className="dropdown-item" 
                      onClick={() => setFormData({...formData, visibility: option})}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Busy/Available status */}
            <div className="d-flex align-items-center">
              <div className="ms-1 me-3">
                <BsCalendarEvent className="text-secondary" />
              </div>
              <div className="form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="busySwitch" 
                  name="busy"
                  checked={formData.busy}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="busySwitch">
                  <small>{formData.busy ? 'Busy' : 'Available'}</small>
                </label>
              </div>
            </div>
            <div className='d-flex justify-content-end'>
                <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal" onClick={handleclose}>Close </button>
            <button type="submit" className="btn btn-sm btn-primary  px-3 rounded-pill">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GoogleCalendarEventForm;