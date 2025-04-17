

import React, { useState, useRef } from 'react';
import { X, Paperclip } from 'lucide-react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

const AddNotePopup = ({ isOpen, onClose, onSave }) => {

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const [noteData, setNoteData] = useState({
    title: '',
    content: '',
    priority: 'High',
    category: 'Work',
  });
  const [attachments, setAttachments] = useState([]);
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleCommand = (command) => {
    document.execCommand(command, false, null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newAttachments = files.map(file => ({
        name: file.name,
        type: file.type,
        size: file.size,
        file: file
      }));
      setAttachments(prev => [...prev, ...newAttachments]);
    }
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentHTML = editorRef.current ? editorRef.current.innerHTML : '';
    onSave({ ...noteData, content: contentHTML, attachments });
    setNoteData({
      title: '',
      content: '',
      priority: 'High',
      category: 'Work'
    });
    setAttachments([]);
    onClose();
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Modal 
      show={isOpen} 
      onHide={onClose}
      centered
      size="md"
      
   
    >
      <Modal.Header closeButton  className={`${darkMode ? "dark-mode" : null } m-0`}>
        <Modal.Title>Add New Note</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit} className={`${darkMode ? "dark-mode" : null }`}>
        <Modal.Body className={`${darkMode ? "dark-mode" : null }`}>
          <Form.Group className="mb-3">
            <Form.Label className={`${darkMode ? "dark-mode" : null }`}>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={noteData.title}
              onChange={handleChange}
              placeholder="Enter note title"
              className={`${darkMode ? "dark-mode" : null }`}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <div className=" border rounded p-3">
              <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
                <Form.Select 
                  className= {`${darkMode ? "dark-mode" : null } w-auto`}
                  style={{ fontSize: '15px' }}
                >
                  <option>Normal text</option>
                </Form.Select>
                
                <div className="btn-group">
                  <Button 
                    variant="outline-secondary"
                    onClick={() => handleCommand('bold')}
                    className="btn-sm"
                  >
                    <b>B</b>
                  </Button>
                  <Button 
                    variant="outline-secondary"
                    onClick={() => handleCommand('italic')}
                    className="btn-sm"
                  >
                    <i>I</i>
                  </Button>
                  <Button 
                    variant="outline-secondary"
                    onClick={() => handleCommand('underline')}
                    className="btn-sm"
                  >
                    <u>U</u>
                  </Button>
                  <Button 
                    variant="outline-secondary"
                    onClick={() => handleCommand('strikeThrough')}
                    className="btn-sm"
                  >
                    <s>S</s>
                  </Button>
                </div>
                
                <Button 
                  variant="outline-secondary"
                  onClick={() => handleCommand('insertHTML')}
                  className="btn-sm"
                >
                  <i className="fa-solid fa-code">Code</i>
                </Button>
                <Button 
                  variant="outline-secondary"
                  onClick={() => handleCommand('removeFormat')}
                  className="btn-sm"
                >
                  <i className="fa-solid fa-minus">Clear</i>
                </Button>
              </div>

              <div
                ref={editorRef}
                contentEditable
                className={`${darkMode ? "dark-mode" : null } form-control `}
                style={{
                  minHeight: '200px',
                  borderRadius: '5px',
                  border: '1px solid #ccc'
                }}
              >
                Start typing here...
              </div>
            </div>
          </Form.Group>

          {/* Attachments Section */}
          <Form.Group className="mb-3">
            <Form.Label>Attachments</Form.Label>
            <div>
              <Button
                variant="outline-secondary"
                onClick={triggerFileInput}
                className="d-flex align-items-center"
                size="sm"
              >
                <Paperclip size={16} className="me-2" />
                Add Attachment
              </Button>
              <Form.Control
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="d-none"
                multiple
              />
            </div>
            
            {/* Display attached files */}
            {attachments.length > 0 && (
              <div className="mt-2">
                <ul className="list-group">
                  {attachments.map((file, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center py-2">
                      <span className="text-truncate" style={{ maxWidth: '80%' }}>
                        {file.name} ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                      <Button
                        variant="link"
                        size="sm"
                        className="text-danger p-0"
                        onClick={() => removeAttachment(index)}
                      >
                        <X size={16} />
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Form.Group>

          <Row className={`${darkMode ? "dark-mode" : null } mb-3`}>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  name="priority"
                  value={noteData.priority}
                  onChange={handleChange}
                  className={`${darkMode ? "dark-mode" : null }`}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={noteData.category}
                  onChange={handleChange}
                  className={`${darkMode ? "dark-mode" : null }`}
                >
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                  <option value="Study">Study</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="dark" type="submit">
            Create Note
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddNotePopup;