import React, { useState, useEffect } from 'react';
import { Bell, Search, Filter, Edit, Eye, Download, Archive, Share, Trash, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { DropdownButton } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function SharedNotesPage() {

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  // Sample data for demonstration
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showAddEditForm, setShowAddEditForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    content: '',
    tags: [],
    collaborators: [],
    status: 'active'
  });
  
  const notesPerPage = 5;
  
  // Generate sample data
  useEffect(() => {
    const sampleNotes = [
      {
        id: 1,
        title: 'Project Timeline',
        content: 'Details about project milestones and deadlines.',
        sharedWith: ['jane.doe@example.com', 'john.smith@example.com'],
        dateCreated: '2025-04-10',
        status: 'active',
        tags: ['project', 'planning']
      },
      {
        id: 2,
        title: 'Meeting Notes - April 15',
        content: 'Discussion points from the team meeting.',
        sharedWith: ['team@example.com'],
        dateCreated: '2025-04-15',
        status: 'active',
        tags: ['meeting', 'team']
      },
      {
        id: 3,
        title: 'Product Roadmap Q2',
        content: 'Planned features and enhancements for Q2.',
        sharedWith: ['product@example.com', 'engineering@example.com'],
        dateCreated: '2025-03-28',
        status: 'active',
        tags: ['roadmap', 'planning']
      },
      {
        id: 4,
        title: 'Marketing Campaign Ideas',
        content: 'Brainstorming results for upcoming campaigns.',
        sharedWith: ['marketing@example.com'],
        dateCreated: '2025-04-05',
        status: 'archived',
        tags: ['marketing', 'ideas']
      },
      {
        id: 5,
        title: 'Budget Overview',
        content: 'Financial planning and budget allocation.',
        sharedWith: ['finance@example.com', 'management@example.com'],
        dateCreated: '2025-04-01',
        status: 'active',
        tags: ['finance', 'budget']
      },
      {
        id: 6,
        title: 'Client Feedback Summary',
        content: 'Compilation of recent client feedback and action items.',
        sharedWith: ['customer-success@example.com', 'product@example.com'],
        dateCreated: '2025-04-12',
        status: 'active',
        tags: ['feedback', 'clients']
      }
    ];
    
    setNotes(sampleNotes);
    setFilteredNotes(sampleNotes);
  }, []);
  
  // Filter notes based on search term and status
  useEffect(() => {
    let filtered = notes;
    
    if (searchTerm) {
      filtered = filtered.filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.sharedWith.some(email => email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(note => note.status === statusFilter);
    }
    
    setFilteredNotes(filtered);
    setCurrentPage(1);
  }, [searchTerm, statusFilter, notes]);
  
  // Pagination logic
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);
  const totalPages = Math.ceil(filteredNotes.length / notesPerPage);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Note actions
  const viewNote = (note) => {
    setSelectedNote(note);
    setShowAddEditForm(false);
  };
  
  const addNewNote = () => {
    setFormData({
      id: null,
      title: '',
      content: '',
      tags: [],
      collaborators: [],
      status: 'active'
    });
    setSelectedNote(null);
    setShowAddEditForm(true);
  };
  
  const editNote = (note) => {
    setFormData({
      id: note.id,
      title: note.title,
      content: note.content,
      tags: note.tags,
      collaborators: note.sharedWith,
      status: note.status
    });
    setSelectedNote(null);
    setShowAddEditForm(true);
  };
  
  const archiveNote = (noteId) => {
    const updatedNotes = notes.map(note => 
      note.id === noteId ? {...note, status: 'archived'} : note
    );
    setNotes(updatedNotes);
  };
  
  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    if (selectedNote && selectedNote.id === noteId) {
      setSelectedNote(null);
    }
  };
  
  const exportToPdf = () => {
    alert('Exporting to PDF...');
    // Implementation would go here
  };
  
  const exportToExcel = () => {
    alert('Exporting to Excel...');
    // Implementation would go here
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const newNote = {
      id: formData.id || Date.now(),
      title: formData.title,
      content: formData.content,
      sharedWith: formData.collaborators,
      tags: formData.tags,
      dateCreated: formData.id ? notes.find(n => n.id === formData.id).dateCreated : new Date().toISOString().split('T')[0],
      status: formData.status
    };
    
    if (formData.id) {
      // Edit existing note
      setNotes(notes.map(note => note.id === formData.id ? newNote : note));
    } else {
      // Add new note
      setNotes([...notes, newNote]);
    }
    
    setShowAddEditForm(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };
  
  const handleTagsChange = (e) => {
    setFormData({...formData, tags: e.target.value.split(',').map(tag => tag.trim())});
  };
  
  const handleCollaboratorsChange = (e) => {
    setFormData({...formData, collaborators: e.target.value.split(',').map(email => email.trim())});
  };
  
  return (
    <div className="container mt-4 100vh">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="mb-0">Shared Notes</h1>
            <div className="d-flex">
            
           
              <button className="btn inv-new-button" onClick={addNewNote}>
                <Plus size={18} className="me-1" /> New Note
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {!selectedNote && !showAddEditForm && (
        <>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className={`${darkMode ? "dark-mode" : "" } input-group-text bg-light `}>
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  className={`${darkMode ? "dark-mode" : null } form-control `}
                  placeholder="Search by title, collaborator or tag..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className={`${darkMode ? "dark-mode" : "" } input-group `}>
           
                  <select
                  className={`${darkMode ? "dark-mode" : "" } form-select `}
                >
                  <option value="all">Tag</option>
                  <option value="active">Active</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
       
            </div>
            <div className="col-md-3">
              <div className="input-group">
           
                <select
                  className={`${darkMode ? "dark-mode" : "" } form-select `}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
       
            </div>
          </div>
         
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm 100vh">
                <div className= {`${darkMode ? "table-dark" : null } table-responsive  `}>
                  <table className=  {`${darkMode ? "table-dark" : null } table table-hover mb-0`}>
                    <thead className="">
                      <tr>
                        <th>Title</th>
                        <th>Shared With</th>
                        <th>Date Created</th>
                        <th>Tags</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentNotes.length > 0 ? (
                        currentNotes.map(note => (
                          <tr key={note.id}>
                            <td>{note.title}</td>
                            <td>
                              {note.sharedWith.length > 2 
                                ? `${note.sharedWith.slice(0, 2).join(', ')} +${note.sharedWith.length - 2}`
                                : note.sharedWith.join(', ')}
                            </td>
                            <td>{note.dateCreated}</td>
                            <td>
                              {note.tags.map(tag => (
                                <span key={tag} className="badge bg-light text-dark me-1">{tag}</span>
                              ))}
                            </td>
                            <td>
                              <span className={`badge ${note.status === 'active' ? 'bg-success' : 'bg-secondary'}`}>
                                {note.status}
                              </span>
                            </td>
                            <td>
                              <div className="btn-group">
                                <button className="btn btn-sm btn-outline-primary" onClick={() => viewNote(note)}>
                                  <Eye size={16} />
                                </button>
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => editNote(note)}>
                                  <Edit size={16} />
                                </button>
                                <button className="btn btn-sm btn-outline-warning" onClick={() => archiveNote(note.id)}>
                                  <Archive size={16} />
                                </button>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => deleteNote(note.id)}>
                                  <Trash size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center py-4">
                            No notes found. Create a new note to get started.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                
                {filteredNotes.length > notesPerPage && (
                  <div className= {`${darkMode ? "dark-mode" : null } card-footer  d-flex justify-content-between align-items-center`}>
                    <p className="mb-0  small">
                      Showing {indexOfFirstNote + 1} to {Math.min(indexOfLastNote, filteredNotes.length)} of {filteredNotes.length} entries
                    </p>
                    <nav>
                      <ul className="pagination pagination-sm mb-0">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                          <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                            <ChevronLeft size={16} />
                          </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => paginate(number)}>
                              {number}
                            </button>
                          </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                          <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                            <ChevronRight size={16} />
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      
      {selectedNote && !showAddEditForm && (
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">{selectedNote.title}</h5>
                <div>
                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => editNote(selectedNote)}>
                    <Edit size={16} className="me-1" /> Edit
                  </button>
                  <button className="btn btn-sm btn-outline-primary" onClick={() => setSelectedNote(null)}>
                    <ChevronLeft size={16} className="me-1" /> Back to List
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <h6 className="text-muted mb-2">Content</h6>
                  <p>{selectedNote.content}</p>
                </div>
                
                <div className="row mb-4">
                  <div className="col-md-6">
                    <h6 className="text-muted mb-2">Tags</h6>
                    <div>
                      {selectedNote.tags.map(tag => (
                        <span key={tag} className="badge bg-light text-dark me-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-muted mb-2">Created On</h6>
                    <p className="mb-0">{selectedNote.dateCreated}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <h6 className="text-muted mb-2">Collaborators</h6>
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {selectedNote.sharedWith.map((email, index) => (
                            <div key={index} className="mb-2 d-flex align-items-center">
                              <div className="avatar bg-primary text-white rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                                {email.charAt(0).toUpperCase()}
                              </div>
                              <span>{email}</span>
                            </div>
                          ))}
                        </div>
                        <button className="btn btn-sm btn-outline-primary">
                          <Share size={16} className="me-1" /> Manage Access
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <span className={`badge ${selectedNote.status === 'active' ? 'bg-success' : 'bg-secondary'}`}>
                    {selectedNote.status}
                  </span>
                  <div>
                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => archiveNote(selectedNote.id)}>
                      <Archive size={16} className="me-1" /> Archive
                    </button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => deleteNote(selectedNote.id)}>
                      <Trash size={16} className="me-1" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {showAddEditForm && (
        <div className="row">
          <div className="col-12">
            <div className={`${darkMode ? "card-dark" : null } card shadow-sm`}>
              <div className={`${darkMode ? "card-dark" : null } card-header bg-white`}>
                <h5 className="mb-0">{formData.id ? 'Edit Note' : 'Create New Note'}</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className={`${darkMode ? "text-white" : null } form-label `}>Title</label>
                    <input
                      type="text"
                      className={`${darkMode ? "dark-mode" : null } form-control `}
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="content" className={`${darkMode ? "text-white" : null } form-label `}>Content</label>
                    <textarea
                      className={`${darkMode ? "dark-mode" : null } form-control `}
                      id="content"
                      name="content"
                      rows="6"
                      value={formData.content}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="tags" className={`${darkMode ? "text-white" : null } form-label `}>Tags </label>
                     
                     <select
                        className={`${darkMode ? "dark-mode" : null } form-select `}
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                      >
                        <option value="active">Projects</option>
                        <option value="archived">Internal</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="status" className={`${darkMode ? "text-white" : null } form-label `}>Status</label>
                      <select
                        className={`${darkMode ? "dark-mode" : null } form-select `}
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                      >
                        <option value="active">Active</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="collaborators" className={`${darkMode ? "text-white" : null } form-label `}>Collaborators </label>
                    <select
                        className={`${darkMode ? "dark-mode" : null } form-select `}
                        id="collaborators"
                        name="collaborators"
                        value={formData.collaborators}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Collaborators</option>
                        <option value="Johndoe@example.com">John Doe</option>
                        <option value="janedoe@example.com">Jane Doe</option>
                        <option value="mikedoe@example.com">Mike Doe</option>
                      </select>
                   
                  
                  </div>
                  
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-2"
                      onClick={() => {
                        setShowAddEditForm(false);
                        if (formData.id) {
                          setSelectedNote(notes.find(note => note.id === formData.id));
                        }
                      }}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      {formData.id ? 'Update Note' : 'Create Note'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


