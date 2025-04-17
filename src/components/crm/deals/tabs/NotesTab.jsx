import React, { useState } from 'react';
import FormModal from '../common/FormModal';
import { useSelector } from "react-redux";

const NotesTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'Initial client meeting notes',
      createdAt: '2025-03-22T10:00:00',
      createdBy: 'John Doe'
    }
  ]);
  const [newNote, setNewNote] = useState({ content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: Date.now(),
      content: newNote.content,
      createdAt: new Date().toISOString(),
      createdBy: 'Current User'
    };
    setNotes([note, ...notes]);
    setNewNote({ content: '' });
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
          Add Note
        </button>
      </div>

      <div className="space-y-4">
        {notes.map(note => (
          <div key={note.id} className={`${darkMode ? "card-dark" : null } bg-white p-4 rounded-lg shadow`}>
            <p className="text-sm">{note.content}</p>
            <div className="mt-2 text-xs text-gray-500">
              Created by {note.createdBy} on {new Date(note.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Note"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Note Content</label>
            <textarea
              value={newNote.content}
              onChange={(e) => setNewNote({ content: e.target.value })}
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
              Save Note
            </button>
          </div>
        </form>
      </FormModal>
    </div>
  );
};

export default NotesTab;
