


import React, { useState, useEffect } from 'react';
import { 
  Container, Row, Col, Card, Button, Table, Modal, Form, Badge,
  Dropdown, DropdownButton, Toast, ToastContainer, Alert
} from 'react-bootstrap';
import { 
  Bell, Calendar, Pencil, Eye, FileDown, Plus, MoreVertical, 
  CheckCircle, XCircle, AlertTriangle, Clock, Archive, Filter
} from 'lucide-react';
import { useSelector } from 'react-redux';

const Reminders = () => {
  // State management
  const [reminders, setReminders] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [currentReminder, setCurrentReminder] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    status: 'pending',
    relatedModule: ''
  });

  // Mock data for demonstration
  useEffect(() => {
    const mockReminders = [
      {
        id: 1,
        title: 'Follow up with Client X',
        description: 'Review project progress and discuss next steps',
        dueDate: '2025-04-20T14:00',
        createdDate: '2025-04-15T09:30',
        priority: 'high',
        status: 'pending',
        relatedModule: 'CRM'
      },
      {
        id: 2,
        title: 'Complete monthly report',
        description: 'Prepare financial summary for April',
        dueDate: '2025-04-25T17:00',
        createdDate: '2025-04-10T11:15',
        priority: 'medium',
        status: 'completed',
        relatedModule: 'Finance'
      },
      {
        id: 3,
        title: 'Schedule team meeting',
        description: 'Discuss project milestones and roadblocks',
        dueDate: '2025-04-19T10:00',
        createdDate: '2025-04-16T13:45',
        priority: 'low',
        status: 'pending',
        relatedModule: 'Team Management'
      }
    ];
    setReminders(mockReminders);
    
    // Check for "due soon" reminders for notification demo
    const checkDueSoon = () => {
      const now = new Date();
      const dueSoonReminders = mockReminders.filter(r => {
        const dueDate = new Date(r.dueDate);
        const diffHours = (dueDate - now) / (1000 * 60 * 60);
        return diffHours > 0 && diffHours < 24 && r.status === 'pending';
      });
      
      if (dueSoonReminders.length > 0) {
        setTimeout(() => {
          setShowNotification(true);
        }, 3000);
      }
    };
    
    checkDueSoon();
  }, []);

  // Filter reminders based on status and search query
  const filteredReminders = reminders.filter(reminder => {
    const matchesStatus = filterStatus === 'all' || reminder.status === filterStatus;
    const matchesSearch = reminder.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        reminder.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddReminder = () => {
    const newReminder = {
      id: reminders.length + 1,
      ...formData,
      createdDate: new Date().toISOString()
    };
    setReminders([...reminders, newReminder]);
    setShowAddModal(false);
    setFormData({
      title: '',
      description: '',
      dueDate: '',
      priority: 'medium',
      status: 'pending',
      relatedModule: ''
    });
    
    // Show toast notification
    setTimeout(() => {
      setShowNotification(true);
    }, 500);
  };

  const handleEditReminder = () => {
    const updatedReminders = reminders.map(reminder => 
      reminder.id === currentReminder.id ? { ...reminder, ...formData } : reminder
    );
    setReminders(updatedReminders);
    setShowEditModal(false);
  };

  const openViewModal = (reminder) => {
    setCurrentReminder(reminder);
    setShowViewModal(true);
  };

  const openEditModal = (reminder) => {
    setCurrentReminder(reminder);
    setFormData({
      title: reminder.title,
      description: reminder.description,
      dueDate: reminder.dueDate,
      priority: reminder.priority,
      status: reminder.status,
      relatedModule: reminder.relatedModule
    });
    setShowEditModal(true);
  };

  const handleStatusToggle = (reminderId) => {
    const updatedReminders = reminders.map(reminder => {
      if (reminder.id === reminderId) {
        const newStatus = reminder.status === 'pending' ? 'completed' : 'pending';
        return { ...reminder, status: newStatus };
      }
      return reminder;
    });
    setReminders(updatedReminders);
  };

  const exportReminders = (format) => {
    // Export logic would go here
    alert(`Exporting reminders to ${format}...`);
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get priority badge
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return <Badge bg="danger">High</Badge>;
      case 'medium':
        return <Badge bg="warning" text="dark">Medium</Badge>;
      case 'low':
        return <Badge bg="info">Low</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  // Is the reminder due soon (within 24 hours)?
  const isDueSoon = (dueDate) => {
    const now = new Date();
    const due = new Date(dueDate);
    const diffHours = (due - now) / (1000 * 60 * 60);
    return diffHours > 0 && diffHours < 24;
  };

  // Is the reminder overdue?
  const isOverdue = (dueDate) => {
    const now = new Date();
    const due = new Date(dueDate);
    return due < now;
  };
  const darkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <Container fluid className="p-4" style={{height:"100vh"}}>
      {/* Real-time notification toast */}
      {/* <ToastContainer position="top-end" className="p-3">
        <Toast 
          onClose={() => setShowNotification(false)} 
          show={showNotification} 
          delay={5000} 
          autohide
          bg="info"
          className="text-white"
        >
          <Toast.Header closeButton>
            <Bell size={18} className="me-2" />
            <strong className="me-auto">Reminder Notification</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>
            You have reminders due soon. Please check your list!
          </Toast.Body>
        </Toast>
      </ToastContainer> */}

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">
            <Bell size={24} className="me-2 text-primary" />
            Reminders
          </h2>
          <p className="text-muted">Manage your tasks and never miss an important deadline</p>
        </div>
        <div className="d-flex gap-2">
          <DropdownButton 
            variant="outline-secondary" 
            title="Export" 
            id="export-dropdown"
          >
            <Dropdown.Item onClick={() => exportReminders('pdf')}>
              <FileDown size={16} className="me-2" /> Export to PDF
            </Dropdown.Item>
            <Dropdown.Item onClick={() => exportReminders('excel')}>
              <FileDown size={16} className="me-2" /> Export to Excel
            </Dropdown.Item>
          </DropdownButton>
          <Button className='btn inv-new-button' onClick={() => setShowAddModal(true)}>
            <Plus size={16} className="me-1" /> Add Reminder
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className={`${darkMode ? "card-dark border border-white" : "" } mb-4  shadow-sm `}>
        <Card.Body>
          <Row>
            <Col md={6} lg={4} className="mb-3 mb-md-0">
              <div className="input-group">
                <span className="input-group-text ">
                  <Filter size={16} />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Search reminders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="d-flex gap-2">
                <Button 
                  variant={filterStatus === 'all' ? 'primary' : 'outline-primary'}
                  onClick={() => setFilterStatus('all')}
                  className="flex-grow-1"
                >
                  All
                </Button>
                <Button 
                  variant={filterStatus === 'pending' ? 'warning' : 'outline-warning'}
                  onClick={() => setFilterStatus('pending')}
                  className="flex-grow-1"
                >
                 Pending
                </Button>
                <Button 
                  variant={filterStatus === 'completed' ? 'success' : 'outline-success'}
                  onClick={() => setFilterStatus('completed')}
                  className="flex-grow-1"
                >
                  Completed
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Reminders Table */}

      <Card className="border shadow-sm">
        <Card.Body className="p-0">
          <Table responsive hover className={`${darkMode ? "table-dark" : null } mb-0`}>
            <thead className="">
              <tr>
                <th>Title</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Related Module</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReminders.length > 0 ? (
                filteredReminders.map(reminder => (
                  <tr key={reminder.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div
                          className={`status-indicator me-2 ${
                            reminder.status === 'completed' 
                            ? 'bg-success' 
                            : isOverdue(reminder.dueDate) 
                              ? 'bg-danger' 
                              : isDueSoon(reminder.dueDate) 
                                ? 'bg-warning' 
                                : 'bg-primary'
                          }`}
                          style={{ 
                            width: '10px', 
                            height: '10px', 
                            borderRadius: '50%' 
                          }}
                        ></div>
                        <div>
                          <div className="fw-bold">{reminder.title}</div>
                          <div className="text-muted small text-truncate" style={{ maxWidth: '300px' }}>
                            {reminder.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={`d-flex align-items-center ${
                        isOverdue(reminder.dueDate) && reminder.status !== 'completed' 
                          ? 'text-danger' 
                          : ''
                      }`}>
                        <Calendar size={16} className="me-1" />
                        {formatDate(reminder.dueDate)}
                        {isDueSoon(reminder.dueDate) && reminder.status !== 'completed' && (
                          <Badge bg="warning" text="dark" className="ms-2">Due Soon</Badge>
                        )}
                        {isOverdue(reminder.dueDate) && reminder.status !== 'completed' && (
                          <Badge bg="danger" className="ms-2">Overdue</Badge>
                        )}
                      </div>
                    </td>
                    <td>{getPriorityBadge(reminder.priority)}</td>
                    <td>
                      <Form.Check
                        type="switch"
                        id={`status-switch-${reminder.id}`}
                        checked={reminder.status === 'completed'}
                        onChange={() => handleStatusToggle(reminder.id)}
                        label={
                          reminder.status === 'completed' 
                            ? <span className="text-success">Completed</span> 
                            : <span className="text-warning">Pending</span>
                        }
                      />
                    </td>
                    <td>
                      <Badge bg="secondary" className="bg-opacity-25 text-secondary">
                        {reminder.relatedModule}
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button 
                          variant="outline-info" 
                          size="sm" 
                          onClick={() => openViewModal(reminder)}
                        >
                          <Eye size={16} />
                        </Button>
                        <Button 
                          variant="outline-primary" 
                          size="sm" 
                          onClick={() => openEditModal(reminder)}
                        >
                          <Pencil size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    <div className="py-5">
                      <div className="mb-3 text-muted">
                        <Bell size={48} />
                      </div>
                      <h5>No reminders found</h5>
                      <p className="text-muted">
                        {searchQuery ? 'Try adjusting your search or filters' : 'Click "Add Reminder" to create your first reminder'}
                      </p>
                      {searchQuery && (
                        <Button variant="outline-primary" onClick={() => setSearchQuery('')}>
                          Clear Search
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Add Reminder Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center">
              <Plus size={20} className="me-2 text-primary" />
              Add New Reminder
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter reminder title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter detailed description"
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Due Date & Time</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <Calendar size={16} />
                    </span>
                    <Form.Control
                      type="datetime-local"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Related Module</Form.Label>
              <Form.Select
                name="relatedModule"
                value={formData.relatedModule}
                onChange={handleInputChange}
              >
                <option value="">Select Module</option>
                <option value="CRM">CRM</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="Team Management">Team Management</option>
                <option value="Project">Project</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="btn inv-new-button" onClick={handleAddReminder}>
            <Plus size={16} className="me-1" /> Save Reminder
          </Button>
        </Modal.Footer>
      </Modal>

      {/* View Reminder Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
        {currentReminder && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="d-flex align-items-center">
                  {currentReminder.status === 'completed' ? (
                    <CheckCircle size={20} className="text-success me-2" />
                  ) : (
                    <Bell size={20} className="text-primary me-2" />
                  )}
                  {currentReminder.title}
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card className="border-0 mb-3">
                <Card.Body>
                  <h6 className="text-muted mb-3">Description</h6>
                  <p>{currentReminder.description}</p>
                  
                  <hr className="my-4" />
                  
                  <Row>
                    <Col md={6}>
                      <h6 className="text-muted mb-2">Due Date</h6>
                      <p className="d-flex align-items-center">
                        <Calendar size={16} className="me-2" />
                        {formatDate(currentReminder.dueDate)}
                      </p>
                    </Col>
                    <Col md={6}>
                      <h6 className="text-muted mb-2">Created Date</h6>
                      <p className="d-flex align-items-center">
                        <Calendar size={16} className="me-2" />
                        {formatDate(currentReminder.createdDate)}
                      </p>
                    </Col>
                  </Row>
                  
                  <Row className="mt-3">
                    <Col md={6}>
                      <h6 className="text-muted mb-2">Priority</h6>
                      <p>{getPriorityBadge(currentReminder.priority)}</p>
                    </Col>
                    <Col md={6}>
                      <h6 className="text-muted mb-2">Status</h6>
                      <p className="d-flex align-items-center">
                        {currentReminder.status === 'completed' ? (
                          <>
                            <CheckCircle size={16} className="text-success me-2" />
                            <Badge bg="success">Completed</Badge>
                          </>
                        ) : (
                          <>
                            <Clock size={16} className="text-warning me-2" />
                            <Badge bg="warning" text="dark">Pending</Badge>
                          </>
                        )}
                      </p>
                    </Col>
                  </Row>
                  
                  <h6 className="text-muted mb-2 mt-3">Related Module</h6>
                  <p>
                    <Badge bg="secondary" className="bg-opacity-25 text-secondary">
                      {currentReminder.relatedModule}
                    </Badge>
                  </p>
                </Card.Body>
              </Card>
              
              {currentReminder.status !== 'completed' && (
                <Alert 
                  variant={
                    isOverdue(currentReminder.dueDate) 
                      ? 'danger' 
                      : isDueSoon(currentReminder.dueDate) 
                        ? 'warning' 
                        : 'info'
                  }
                  className="mb-0 d-flex align-items-center"
                >
                  {isOverdue(currentReminder.dueDate) ? (
                    <>
                      <XCircle size={18} className="me-2" />
                      This reminder is overdue. Would you like to mark it as completed or reschedule?
                    </>
                  ) : isDueSoon(currentReminder.dueDate) ? (
                    <>
                      <AlertTriangle size={18} className="me-2" />
                      This reminder is due soon. Be prepared to take action.
                    </>
                  ) : (
                    <>
                      <Bell size={18} className="me-2" />
                      This reminder is scheduled for a future date.
                    </>
                  )}
                </Alert>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowViewModal(false)}>
                Close
              </Button>
              {currentReminder.status !== 'completed' && (
                <Button 
                  variant="success" 
                  onClick={() => {
                    handleStatusToggle(currentReminder.id);
                    setShowViewModal(false);
                  }}
                >
                  <CheckCircle size={16} className="me-2" />
                  Mark as Completed
                </Button>
              )}
              <Button 
                variant="primary" 
                onClick={() => {
                  setShowViewModal(false);
                  openEditModal(currentReminder);
                }}
              >
                <Pencil size={16} className="me-2" />
                Edit
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Edit Reminder Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center">
              <Pencil size={20} className="me-2 text-primary" />
              Edit Reminder
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter reminder title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter detailed description"
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Due Date & Time</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <Calendar size={16} />
                    </span>
                    <Form.Control
                      type="datetime-local"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <div className="d-flex align-items-center gap-2">
                    <Form.Select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </Form.Select>
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Related Module</Form.Label>
                  <Form.Select
                    name="relatedModule"
                    value={formData.relatedModule}
                    onChange={handleInputChange}
                  >
                    <option value="">None</option>
                    <option value="CRM">CRM</option>
                    <option value="Finance">Finance</option>
                    <option value="HR">HR</option>
                    <option value="Team Management">Team Management</option>
                    <option value="Project">Project</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditReminder}>
            <CheckCircle size={16} className="me-2" />
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Reminders;