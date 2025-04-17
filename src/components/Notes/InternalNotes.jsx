


import React, { useState, useRef, useEffect } from 'react';

const InternalNotes = () => {
  const initialNotes = [
    {
      id: 1,
      title: 'Note 1',
      content: 'This is the content of note 1.',
      category: 'Personal',
      priority: 'High',

    }
  ]
  const [notes, setNotes] = useState(initialNotes);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [showOptions, setShowOptions] = useState(true);
  const [showNotesList, setShowNotesList] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

 
  
  const handleSaveNote = () => {
    if (title.trim() === '' && content.trim() === '') {
      return; // Don't save empty notes
    }
    
    if (editingId !== null) {
      // Update existing note
      const updatedNotes = notes.map(note => 
        note.id === editingId ? {
          ...note,
          title,
          content,
          category: category || 'Uncategorized',
          priority: priority || 'Normal',
          updatedAt: new Date().toLocaleString(),
          image: selectedImage || note.image
        } : note
      );
      setNotes(updatedNotes);
    } else {
      // Create new note
      const newNote = {
        id: Date.now(),
        title,
        content,
        category: category || 'Uncategorized',
        priority: priority || 'Normal',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
        image: selectedImage
      };
      setNotes([newNote, ...notes]);
    }
    
    resetForm();
    setShowNotesList(true);
  };
  
  const resetForm = () => {
    setTitle('');
    setContent('');
    setCategory('');
    setPriority('');
    setShowOptions(false);
    setEditingId(null);
    setSelectedImage(null);
  };
  
  const toggleOptions = () => {
    console.log("showoptions", showOptions);
    setShowOptions(!showOptions);
  };
  
  const handleEditNote = (note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setPriority(note.priority);
    setSelectedImage(note.image);
    setShowNotesList(false);
  };
  
  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };
  
  const handleNewNote = () => {

    resetForm();
    toggleOptions();
    setShowNotesList(false);
  };
  
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  
  const onFileSelected = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = '';
  };

  // UI for creating/editing a note
  const renderNoteForm = () => {
    return (
      <>
        <div className="flex-grow p-4 flex flex-col">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="bg-transparent border-none outline-none text-xl mb-2"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Note"
            className="bg-transparent border-none outline-none flex-grow resize-none"
          />
          {selectedImage && (
            <div className="relative mt-2 mb-4">
              <img 
                src={selectedImage} 
                alt="Note attachment" 
                className="max-h-48 rounded" 
              />
              <button 
                onClick={() => setSelectedImage(null)} 
                className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
        </div>
        
        {/* Options Panel */}
        {showOptions && (
          <div className="relative bottom-16 left-4 bg-gray-100  text-black rounded-lg p-4 w-48 z-300">
            <div className="mb-2">
              <select
                
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                className="w-full  text-red px-2 py-1 rounded text-sm"
              >
                   <option value="internal">Internal</option>
              <option value="internal">Internal</option>
            
              </select>
            </div>
            <div className="mb-4">
              <select
                
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                placeholder="Priority"
                className="w-full  px-2 py-1 rounded text-sm"
              >
                <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              </select>

            </div>
            <button 
              onClick={handleFileUpload} 
              className="flex items-center  text-sm mb-2 w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              Add image
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={onFileSelected} 
              className="hidden" 
              accept="image/*"
            />
            {/* <button 
              className="flex items-center text-gray-300 text-sm mb-2 w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
              Drawing
            </button> */}
            {/* <button 
              className="flex items-center text-gray-300 text-sm mb-2 w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
              Recording
            </button> */}
            <button 
              className="flex items-center  text-sm mb-2 w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              Tick boxes
            </button>
          </div>
        )}
        
        {/* Bottom Bar for Editor */}
        <div className="p-4  flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={toggleOptions}
              className="rounded-full w-10 h-10  flex items-center justify-center text-gray-100 bg-primary mr-4"
            >
              {showOptions ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              }
            </button>
            <span className="text-xs text-gray-500">Edited {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
          <div className="flex">
            <button 
              onClick={() => setShowNotesList(true)}
              className="mr-4 text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
            <button 
              onClick={handleSaveNote} 
              className="bg-white p-2 rounded"
            >
              <span className="text-black bg-primary p-2 rounded-lg font-medium">SAVE </span>
            </button>
          </div>
        </div>
      </>
    );
  };



  // UI for notes list
  const renderNotesList = () => {
    return (
      <>
        <div className="flex-grow p-4 min-h-screen overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">My Notes</h1>
            <button
              onClick={handleNewNote}
              className="bg-primary text-white px-4 py-2 rounded"
            >Add Note</button>
          </div>
          
          {notes.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              No notes yet. Create your first note!
            </div>
          ) : (
            <div className="space-y-4">
              {notes.map(note => (
                <div key={note.id} className=" rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">{note.title || 'Untitled'}</h3>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEditNote(note)}
                        className="text-gray-400 hover:text-gray-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                      <button 
                        onClick={() => handleDeleteNote(note.id)}
                        className="text-gray-400 hover:text-gray-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-3 whitespace-pre-line line-clamp-3">{note.content}</p>
                  
                  {note.image && (
                    <div className="mb-3">
                      <img 
                        src={note.image} 
                        alt="Note attachment" 
                        className="max-h-32 rounded" 
                      />
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-2">
                    {note.priority && note.priority !== 'Normal' && (
                      <span className=" px-2 py-1 rounded text-xs">
                        {note.priority}
                      </span>
                    )}
                    {note.category && note.category !== 'Uncategorized' && (
                      <span className=" px-2 py-1 rounded text-xs">
                        {note.category}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    {note.updatedAt !== note.createdAt ? 
                      `Updated: ${note.updatedAt}` : 
                      `Created: ${note.createdAt}`}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col h-screen  text-gray-600">
      {/* Header */}
      <div className="flex items-center p-4 ">
        <button 
          className="text-gray-400 mr-4"
          onClick={() => showNotesList ? handleNewNote() : setShowNotesList(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div className="flex-grow">
          {showNotesList ? 'All Notes' : (editingId !== null ? 'Edit Note' : 'New Note')}
        </div>
        <button className="text-gray-100 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
         eight="20" viewBox="0 0 24 24" fill="none" stro </svg>
        </button>
        {/* <button className="text-gray-400 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" hke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button> */}
        {/* <button className="text-gray-400 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button> */}
      </div>
      
      {/* Main Content Area */}
      {showNotesList ? renderNotesList() : renderNoteForm()}
      
      {/* Fixed Bottom Bar */}
      {showNotesList && (
        <div className="p-4 flex justify-start">
          <button 
            onClick={handleNewNote}
            className="bg-primary rounded-full me-2 px-4 py-2 rounded-full "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span className="text-black font-medium"></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default InternalNotes;