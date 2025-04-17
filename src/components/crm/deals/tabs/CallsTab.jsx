import React, { useState } from 'react';
import FormModal from '../common/FormModal';
import { useSelector } from "react-redux";

const CallsTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calls, setCalls] = useState([
    {
      id: 1,
      contactName: 'John Smith',
      duration: '15 minutes',
      notes: 'Discussed project timeline',
      scheduledFor: '2025-03-22T14:00:00',
      status: 'scheduled'
    }
  ]);
  const [newCall, setNewCall] = useState({
    contactName: '',
    duration: '',
    notes: '',
    scheduledFor: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const call = {
      id: Date.now(),
      ...newCall,
      status: 'scheduled'
    };
    setCalls([call, ...calls]);
    setNewCall({ contactName: '', duration: '', notes: '', scheduledFor: '' });
    setIsModalOpen(false);
  };

  const darkMode = useSelector((state) => (state.theme.isDarkMode))

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Schedule Call
        </button>
      </div>

      <div className="space-y-4">
        {calls.map(call => (
          <div key={call.id} className={`${darkMode ? "card-dark" : null } bg-white p-4 rounded-lg shadow`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{call.contactName}</h3>
                <p className="text-sm text-gray-600">Duration: {call.duration}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                call.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {call.status}
              </span>
            </div>
            <p className="mt-2 text-sm">{call.notes}</p>
            <div className="mt-2 text-xs text-gray-500">
              Scheduled for: {new Date(call.scheduledFor).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Schedule Call"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Name</label>
            <input
              type="text"
              value={newCall.contactName}
              onChange={(e) => setNewCall({ ...newCall, contactName: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <select
              value={newCall.duration}
              onChange={(e) => setNewCall({ ...newCall, duration: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            >
              <option value="">Select duration</option>
              <option value="15 minutes">15 minutes</option>
              <option value="30 minutes">30 minutes</option>
              <option value="45 minutes">45 minutes</option>
              <option value="1 hour">1 hour</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Scheduled For</label>
            <input
              type="datetime-local"
              value={newCall.scheduledFor}
              onChange={(e) => setNewCall({ ...newCall, scheduledFor: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea
              value={newCall.notes}
              onChange={(e) => setNewCall({ ...newCall, notes: e.target.value })}
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

export default CallsTab;
