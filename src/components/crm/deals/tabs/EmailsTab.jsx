import React, { useState } from 'react';
import FormModal from '../common/FormModal';
import { useSelector } from "react-redux";

const EmailsTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emails, setEmails] = useState([
    {
      id: 1,
      subject: 'Proposal Discussion',
      to: 'client@example.com',
      content: 'Thank you for your time today...',
      sentAt: '2025-03-22T09:00:00',
      status: 'sent'
    }
  ]);
  const [newEmail, setNewEmail] = useState({
    subject: '',
    to: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = {
      id: Date.now(),
      ...newEmail,
      sentAt: new Date().toISOString(),
      status: 'draft'
    };
    setEmails([email, ...emails]);
    setNewEmail({ subject: '', to: '', content: '' });
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
          Compose Email
        </button>
      </div>

      <div className="space-y-4">
        {emails.map(email => (
          <div key={email.id} className={`${darkMode ? "card-dark" : null } bg-white p-4 rounded-lg shadow`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{email.subject}</h3>
                <p className="text-sm text-gray-600">To: {email.to}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                email.status === 'sent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {email.status}
              </span>
            </div>
            <p className="mt-2 text-sm">{email.content}</p>
            <div className="mt-2 text-xs text-gray-500">
              {new Date(email.sentAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Compose Email"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">To</label>
            <input
              type="email"
              value={newEmail.to}
              onChange={(e) => setNewEmail({ ...newEmail, to: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              value={newEmail.subject}
              onChange={(e) => setNewEmail({ ...newEmail, subject: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              value={newEmail.content}
              onChange={(e) => setNewEmail({ ...newEmail, content: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
              required
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
              Save Draft
            </button>
          </div>
        </form>
      </FormModal>
    </div>
  );
};

export default EmailsTab;
