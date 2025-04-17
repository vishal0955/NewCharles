import React, { useState } from 'react';
import FormModal from '../common/FormModal';

const MeetingsTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: 'Project Kickoff',
      attendees: ['John Smith', 'Sarah Johnson'],
      location: 'Conference Room A',
      scheduledFor: '2025-03-24T10:00:00',
      duration: '1 hour',
      agenda: 'Discuss project goals and timeline'
    }
  ]);
  const [newMeeting, setNewMeeting] = useState({
    title: '',
    attendees: '',
    location: '',
    scheduledFor: '',
    duration: '',
    agenda: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const meeting = {
      id: Date.now(),
      ...newMeeting,
      attendees: newMeeting.attendees.split(',').map(a => a.trim())
    };
    setMeetings([meeting, ...meetings]);
    setNewMeeting({
      title: '',
      attendees: '',
      location: '',
      scheduledFor: '',
      duration: '',
      agenda: ''
    });
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Schedule Meeting
        </button>
      </div>

      <div className="space-y-4">
        {meetings.map(meeting => (
          <div key={meeting.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{meeting.title}</h3>
                <p className="text-sm text-gray-600">Location: {meeting.location}</p>
                <p className="text-sm text-gray-600">Duration: {meeting.duration}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
                Scheduled
              </span>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">Attendees:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {meeting.attendees.map((attendee, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                  >
                    {attendee}
                  </span>
                ))}
              </div>
            </div>
            {meeting.agenda && (
              <div className="mt-2">
                <p className="text-sm font-medium">Agenda:</p>
                <p className="text-sm text-gray-600">{meeting.agenda}</p>
              </div>
            )}
            <div className="mt-2 text-xs text-gray-500">
              Scheduled for: {new Date(meeting.scheduledFor).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Schedule Meeting"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={newMeeting.title}
              onChange={(e) => setNewMeeting({ ...newMeeting, title: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Attendees</label>
            <input
              type="text"
              value={newMeeting.attendees}
              onChange={(e) => setNewMeeting({ ...newMeeting, attendees: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter names separated by commas"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={newMeeting.location}
              onChange={(e) => setNewMeeting({ ...newMeeting, location: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date & Time</label>
            <input
              type="datetime-local"
              value={newMeeting.scheduledFor}
              onChange={(e) => setNewMeeting({ ...newMeeting, scheduledFor: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <select
              value={newMeeting.duration}
              onChange={(e) => setNewMeeting({ ...newMeeting, duration: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            >
              <option value="">Select duration</option>
              <option value="30 minutes">30 minutes</option>
              <option value="1 hour">1 hour</option>
              <option value="1.5 hours">1.5 hours</option>
              <option value="2 hours">2 hours</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Agenda</label>
            <textarea
              value={newMeeting.agenda}
              onChange={(e) => setNewMeeting({ ...newMeeting, agenda: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={3}
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Schedule
            </button>
          </div>
        </form>
      </FormModal>
    </div>
  );
};

export default MeetingsTab;
