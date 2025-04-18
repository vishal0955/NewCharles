import React, { useState, useEffect } from 'react';
import { 
  Container, Row, Col, Card, Button, Modal, Form, Badge, 
  Dropdown, DropdownButton, Toast, ToastContainer, InputGroup
} from 'react-bootstrap';
import { 
  Link, BookOpen, Star, Folder, ExternalLink, Plus, Edit2, Trash2, 
  Search, Tag, Grid, List, FileDown, Copy, Eye, X, Check, Share2
} from 'lucide-react';

const QuickLinks = () => {
  // State management
  const [links, setLinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [currentLink, setCurrentLink] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'grid' or 'list'
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    category: '',
    favorite: false,
    color: '#3498db'
  });

  // Mock data for demonstration
  useEffect(() => {
    const mockCategories = ['Work', 'Personal', 'Development', 'Resources', 'Tools'];
    setCategories(mockCategories);

    const mockLinks = [
      {
        id: 1,
        title: 'Company Dashboard',
        url: 'https://dashboard.example.com',
        description: 'Main analytics dashboard for company metrics',
        category: 'Work',
        favorite: true,
        color: '#3498db',
        createdAt: '2025-03-12T14:32:00'
      },
      {
        id: 2,
        title: 'Project Management',
        url: 'https://projects.example.com',
        description: 'Track project progress and tasks',
        category: 'Work',
        favorite: false,
        color: '#e74c3c',
        createdAt: '2025-03-15T09:45:00'
      },
      {
        id: 3,
        title: 'Documentation',
        url: 'https://docs.example.com',
        description: 'API documentation and developer guides',
        category: 'Development',
        favorite: true,
        color: '#2ecc71',
        createdAt: '2025-03-18T16:20:00'
      },
      {
        id: 4,
        title: 'Design Assets',
        url: 'https://design.example.com',
        description: 'UI/UX assets and design system',
        category: 'Resources',
        favorite: false,
        color: '#9b59b6',
        createdAt: '2025-03-20T11:30:00'
      },
      {
        id: 5,
        title: 'Team Calendar',
        url: 'https://calendar.example.com',
        description: 'Shared team calendar for meetings and events',
        category: 'Tools',
        favorite: true,
        color: '#f39c12',
        createdAt: '2025-03-22T15:15:00'
      }
    ];
    setLinks(mockLinks);
  }, []);

  // Filter links based on category and search query
  const filteredLinks = links.filter(link => {
    const matchesCategory = filterCategory === 'all' || link.category === filterCategory;
    const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        link.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        link.url.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort links (favorites first, then alphabetically)
  const sortedLinks = [...filteredLinks].sort((a, b) => {
    if (a.favorite && !b.favorite) return -1;
    if (!a.favorite && b.favorite) return 1;
    return a.title.localeCompare(b.title);
  });

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleAddLink = () => {
    const newLink = {
      id: links.length + 1,
      ...formData,
      createdAt: new Date().toISOString()
    };
    setLinks([...links, newLink]);
    setShowAddModal(false);
    setFormData({
      title: '',
      url: '',
      description: '',
      category: '',
      favorite: false,
      color: '#3498db'
    });
    
    showToastNotification('Quick link added successfully!');
  };

  const handleEditLink = () => {
    const updatedLinks = links.map(link => 
      link.id === currentLink.id ? { ...link, ...formData } : link
    );
    setLinks(updatedLinks);
    setShowEditModal(false);
    
    showToastNotification('Quick link updated successfully!');
  };

  const handleDeleteLink = (id) => {
    if (window.confirm('Are you sure you want to delete this quick link?')) {
      setLinks(links.filter(link => link.id !== id));
      showToastNotification('Quick link deleted successfully!');
    }
  };

  const showToastNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
  };

  const openViewModal = (link) => {
    setCurrentLink(link);
    setShowViewModal(true);
  };

  const openEditModal = (link) => {
    setCurrentLink(link);
    setFormData({
      title: link.title,
      url: link.url,
      description: link.description,
      category: link.category,
      favorite: link.favorite,
      color: link.color
    });
    setShowEditModal(true);
  };

  const toggleFavorite = (id) => {
    const updatedLinks = links.map(link => {
      if (link.id === id) {
        return { ...link, favorite: !link.favorite };
      }
      return link;
    });
    setLinks(updatedLinks);
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    showToastNotification('Link copied to clipboard!');
  };

  const exportLinks = (format) => {
    // Export logic would go here
    showToastNotification(`Exporting links to ${format}...`);
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Container fluid className="p-4">
      {/* Real-time notification toast */}
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          onClose={() => setShowNotification(false)} 
          show={showNotification} 
          delay={3000} 
          autohide
          bg="success"
          className="text-white"
        >
          <Toast.Header closeButton className="bg-success text-white">
            <Check size={18} className="me-2" />
            <strong className="me-auto">Notification</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>
            {notificationMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">
            {/* <Link size={24} className="me-2 text-primary" /> */}
            Quick Links
          </h2>
         
        </div>
        <div className="d-flex gap-2">
          <DropdownButton 
            variant="outline-secondary" 
            title="Export" 
            id="export-dropdown"
          >
            <Dropdown.Item onClick={() => exportLinks('pdf')}>
              <FileDown size={16} className="me-2" /> Export to PDF
            </Dropdown.Item>
            <Dropdown.Item onClick={() => exportLinks('excel')}>
              <FileDown size={16} className="me-2" /> Export to Excel
            </Dropdown.Item>
          </DropdownButton>
          <Button variant="primary" onClick={() => setShowAddModal(true)}>
            + Add Link
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body>
          <Row className="g-3">
            <Col lg={4} md={6}>
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <Search size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search quick links..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col lg={4} md={6}>
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <Tag size={18} />
                </InputGroup.Text>
                <Form.Select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Form.Select>
              </InputGroup>
            </Col>
            {/* <Col lg={4} className="d-flex justify-content-lg-end">
              <div className="btn-group">
                <Button 
                  variant={viewMode === 'grid' ? 'primary' : 'outline-primary'}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={18} />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'primary' : 'outline-primary'}
                  onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </Button>
              </div>
            </Col> */}
          </Row>
        </Card.Body>
      </Card>

      {/* Quick Links Display */}
      {viewMode === 'grid' ? (
        <Row className="g-4">
          {sortedLinks.length > 0 ? (
            sortedLinks.map(link => (
              <Col key={link.id} xl={3} lg={4} md={6}>
                <Card className="h-100 border-0 shadow-sm hover-card">
                  <div 
                    className="card-color-strip" 
                    style={{ 
                      height: '8px', 
                      backgroundColor: link.color,
                      borderTopLeftRadius: '0.375rem',
                      borderTopRightRadius: '0.375rem'
                    }}
                  ></div>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 className="card-title mb-0 text-truncate" style={{ maxWidth: '80%' }}>
                        {link.title}
                      </h5>
                      <Button 
                        variant="link" 
                        className="p-0 text-warning"
                        onClick={() => toggleFavorite(link.id)}
                      >
                        <Star size={20} fill={link.favorite ? 'currentColor' : 'none'} />
                      </Button>
                    </div>
                    
                    <div className="mb-3 small text-truncate">
                      <ExternalLink size={14} className="me-1 text-muted" />
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary text-decoration-none text-truncate"
                      >
                        {link.url}
                      </a>
                    </div>
                    
                    <p className="card-text text-muted small mb-3">
                      {link.description}
                    </p>
                    
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Badge 
                        bg="light" 
                        text="dark" 
                        className="d-flex align-items-center gap-1"
                      >
                        <Folder size={14} />
                        {link.category}
                      </Badge>
                      <small className="text-muted">
                        {formatDate(link.createdAt)}
                      </small>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <div className="d-flex justify-content-between">
                      <Button 
                        variant="outline-secondary" 
                        size="sm"
                        onClick={() => copyToClipboard(link.url)}
                      >
                        <Copy size={14} className="me-1" /> Copy
                      </Button>
                      <div className="d-flex gap-2">
                        <Button 
                          variant="outline-info" 
                          size="sm"
                          onClick={() => openViewModal(link)}
                        >
                          <Eye size={14} />
                        </Button>
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          onClick={() => openEditModal(link)}
                        >
                          <Edit2 size={14} />
                        </Button>
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => handleDeleteLink(link.id)}
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <div className="text-center py-5">
                <div className="mb-3 text-muted">
                  <Link size={48} />
                </div>
                <h5>No quick links found</h5>
                <p className="text-muted">
                  {searchQuery || filterCategory !== 'all' ? 
                    'Try adjusting your search or filters' : 
                    'Click "Add Link" to create your first quick link'}
                </p>
                {(searchQuery || filterCategory !== 'all') && (
                  <Button 
                    variant="outline-primary" 
                    onClick={() => {
                      setSearchQuery('');
                      setFilterCategory('all');
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </Col>
          )}
        </Row>
      ) : (
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">
            {sortedLinks.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th>Title</th>
                      <th>URL</th>
                      <th>Category</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedLinks.map(link => (
                      <tr key={link.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div
                              className="me-2"
                              style={{ 
                                width: '10px', 
                                height: '10px', 
                                borderRadius: '50%',
                                backgroundColor: link.color
                              }}
                            ></div>
                            <div className="d-flex align-items-center">
                              {link.title}
                              {link.favorite && (
                                <Star size={16} className="ms-2 text-warning" fill="currentColor" />
                              )}
                            </div>
                          </div>
                        </td>
                        <td>
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-truncate d-inline-block"
                            style={{ maxWidth: '250px' }}
                          >
                            {link.url}
                          </a>
                        </td>
                        <td>
                          <Badge bg="light" text="dark">
                            {link.category}
                          </Badge>
                        </td>
                        <td>{formatDate(link.createdAt)}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button 
                              variant="outline-secondary" 
                              size="sm"
                              onClick={() => copyToClipboard(link.url)}
                            >
                              <Copy size={14} />
                            </Button>
                            <Button 
                              variant="outline-info" 
                              size="sm"
                              onClick={() => openViewModal(link)}
                            >
                              <Eye size={14} />
                            </Button>
                            <Button 
                              variant="outline-primary" 
                              size="sm"
                              onClick={() => openEditModal(link)}
                            >
                              <Edit2 size={14} />
                            </Button>
                            <Button 
                              variant="outline-danger" 
                              size="sm"
                              onClick={() => handleDeleteLink(link.id)}
                            >
                              <Trash2 size={14} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-5">
                <div className="mb-3 text-muted">
                  <Link size={48} />
                </div>
                <h5>No quick links found</h5>
                <p className="text-muted">
                  {searchQuery || filterCategory !== 'all' ? 
                    'Try adjusting your search or filters' : 
                    'Click "Add Link" to create your first quick link'}
                </p>
                {(searchQuery || filterCategory !== 'all') && (
                  <Button 
                    variant="outline-primary" 
                    onClick={() => {
                      setSearchQuery('');
                      setFilterCategory('all');
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
      )}

      {/* Add Link Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center">
              <Plus size={20} className="me-2 text-primary" />
              Add Quick Link
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
                placeholder="Enter link title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>URL</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <ExternalLink size={16} />
                </InputGroup.Text>
                <Form.Control
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter brief description"
              />
            </Form.Group>

            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              
            </Row>

            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddLink}>
         Add
          </Button>
        </Modal.Footer>
      </Modal>

      {/* View Link Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
        {currentLink && (
          <>
            <Modal.Header closeButton style={{ borderBottom: `4px solid ${currentLink.color}` }}>
              <Modal.Title>
                <div className="d-flex align-items-center">
                  <Link size={20} className="me-2" style={{ color: currentLink.color }} />
                  {currentLink.title}
                  {currentLink.favorite && (
                    <Star size={16} className="ms-2 text-warning" fill="currentColor" />
                  )}
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex align-items-center mb-4">
                <ExternalLink size={18} className="me-2 text-muted" />
                <a 
                  href={currentLink.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-break"
                >
                  {currentLink.url}
                </a>
                <Button 
                  variant="link" 
                  className="ms-auto p-0" 
                  onClick={() => copyToClipboard(currentLink.url)}
                >
                  <Copy size={16} />
                </Button>
              </div>
              
              <h6 className="text-muted mb-2">Description</h6>
              <p>{currentLink.description || "No description provided."}</p>
              
              <hr className="my-4" />
              
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6 className="text-muted mb-2">Category</h6>
                  <Badge bg="light" text="dark" className="d-flex align-items-center gap-1">
                    <Folder size={14} />
                    {currentLink.category}
                  </Badge>
                </div>
                <div className="text-end">
                  <h6 className="text-muted mb-2">Created On</h6>
                  <span>{formatDate(currentLink.createdAt)}</span>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowViewModal(false)}>
                Close
              </Button>
              <Button 
                variant="outline-warning" 
                onClick={() => {
                  toggleFavorite(currentLink.id);
                  setShowViewModal(false);
                }}
              >
                <Star size={16} className="me-1" fill={currentLink.favorite ? 'none' : 'currentColor'} />
                {currentLink.favorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </Button>
              <Button 
                variant="primary" 
                onClick={() => {
                  setShowViewModal(false);
                  openEditModal(currentLink);
                }}
              >
                <Edit2 size={16} className="me-1" />
                Edit
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Edit Link Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center">
              <Edit2 size={20} className="me-2 text-primary" />
              Edit Quick Link
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
                placeholder="Enter link title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>URL</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <ExternalLink size={16} />
                </InputGroup.Text>
                <Form.Control
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter brief description"
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Color Label</Form.Label>
                  <Form.Control
                    type="color"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    title="Choose a color for the link"
                    className="w-100"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Mark as favorite"
                name="favorite"
                checked={formData.favorite}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => {
            if (currentLink) {
              setShowEditModal(false);
              handleDeleteLink(currentLink.id);
            }
          }}>
            <Trash2 size={16} className="me-1" /> Delete
          </Button>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditLink}>
            <Check size={16} className="me-1" /> Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default QuickLinks;