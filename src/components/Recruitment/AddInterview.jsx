import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import { 
  Calendar, 
  Clock, 
  User, 
  Briefcase, 
  Video, 
  Phone, 
  Users, 
  Save, 
  X,
  CheckSquare
} from 'lucide-react';

const AddInterview = ({ onClose, onSave, darkMode }) => {
  // Sample data for dropdowns
  const candidates = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
    { id: 4, name: "Sarah Williams" },
    { id: 5, name: "David Brown" }
  ];

  const positions = [
    { id: 1, title: "Frontend Developer" },
    { id: 2, title: "Backend Developer" },
    { id: 3, title: "UX Designer" },
    { id: 4, title: "Product Manager" },
    { id: 5, title: "DevOps Engineer" }
  ];

  const interviewers = [
    { id: 1, name: "Robert Chen (HR)" },
    { id: 2, name: "Emma Watson (Tech Lead)" },
    { id: 3, name: "Alex Morgan (CTO)" },
    { id: 4, name: "Lisa Park (Senior Developer)" },
    { id: 5, name: "James Wilson (Department Head)" }
  ];

  // Form state
  const [formData, setFormData] = useState({
    interviewId: '',
    candidate: '',
    job: '',
    interviewer: '',
    type: 'video',
    date: '',
    time: '',
    status: 'scheduled',
    notes: ''
  });

  // Auto-generate next interview ID (INT-XXX)
  const generateInterviewId = () => {
    // In a real application, this would likely come from the backend
    // or be calculated based on existing interviews
    const randomNum = Math.floor(Math.random() * 900) + 100;
    return `INT-${randomNum}`;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate ID if not provided
    const completeData = {
      ...formData,
      interviewId: formData.interviewId || generateInterviewId()
    };
    onSave(completeData);
  };

  return (
    <Container fluid className="p-0">
      <Card className={`${darkMode ? "card-dark" : null } border-0 shadow-sm `}>
        <Card.Header className=" d-flex justify-content-between align-items-center py-3">
          <h5 className="mb-0">Add New Interview</h5>
          <Button variant="link" className="text-dark p-0" onClick={onClose}>
            <X size={20} />
          </Button>
        </Card.Header>
        <Card.Body className="px-4 py-4">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4">
            <Col lg={6} className="mb-3 mb-lg-0">
                <Form.Group>
                  <Form.Label className={`${darkMode ? "text-white" : null } `} >Candidate Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <User size={16} />
                    </InputGroup.Text>
                    <Form.Select
                      name="candidate"
                      value={formData.candidate}
                      onChange={handleInputChange}
                      className={`${darkMode ? "card-dark" : null }`}
                      required
                    >
                      <option value="">Select Candidate</option>
                      {candidates.map(candidate => (
                        <option key={candidate.id} value={candidate.name}>
                          {candidate.name}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label className={`${darkMode ? "text-white" : null } `} >Status</Form.Label>
                  <Form.Select 
                    name="status"
                    value={formData.status}
                    className={`${darkMode ? "card-dark" : null } form-select-sm`}
                    onChange={handleInputChange}
                  >
                    <option value="scheduled">Scheduled</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="pending">Pending</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Row className="mb-4">
              
              <Col lg={6}>
                <Form.Group>
                  <Form.Label className={`${darkMode ? "text-white" : null } `} >Job Position</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <Briefcase size={16} />
                    </InputGroup.Text>
                    <Form.Select
                      name="job"
                      value={formData.job}
                      onChange={handleInputChange}
                      className={`${darkMode ? "card-dark" : null }`}
                      required
                    >
                      <option value="">Select Position</option>
                      {positions.map(position => (
                        <option key={position.id} value={position.title}>
                          {position.title}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-3 mb-lg-0">
                <Form.Group>
                  <Form.Label className={`${darkMode ? "text-white" : null } `} >Interviewer</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <Users size={16} />
                    </InputGroup.Text>
                    <Form.Select
                      name="interviewer"
                      value={formData.interviewer}
                      onChange={handleInputChange}
                      className={`${darkMode ? "card-dark" : null }`}
                      required
                    >
                      <option value="">Select Interviewer</option>
                      {interviewers.map(interviewer => (
                        <option key={interviewer.id} value={interviewer.name}>
                          {interviewer.name}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            
          
            
            <Row className="mb-4">
              <Col lg={6} className="mb-3 mb-lg-0">
                <Form.Group>
                  <Form.Label className={`${darkMode ? "text-white" : null } `} >Date</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <Calendar size={16} />
                    </InputGroup.Text>
                    <FormControl
                      type="date"
                      name="date"
                      className={`${darkMode ? "card-dark" : null }`}
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label className={`${darkMode ? "text-white" : null } `} >Time</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <Clock size={16} />
                    </InputGroup.Text>
                    <FormControl
                      type="time"
                      name="time"
                      value={formData.time}
                      className={`${darkMode ? "card-dark" : null }`}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-4">
              
              <Col lg={6}>
                <Form.Group>
                  <Form.Label className={`${darkMode ? "text-white" : null } `} >Interview Type</Form.Label>
                  <div className="d-flex gap-3">
                    <Form.Check
                      type="radio"
                      id="video"
                      label={
                        <div className="d-flex align-items-center">
                          <Video size={16} className="me-1" /> Video
                        </div>
                      }
                      name="type"
                      value="video"
                      checked={formData.type === 'video'}
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      type="radio"
                      id="phone"
                      label={
                        <div className="d-flex align-items-center">
                          <Phone size={16} className="me-1" /> Phone
                        </div>
                      }
                      name="type"
                      value="phone"
                      checked={formData.type === 'phone'}
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      type="radio"
                      id="in-person"
                      label="In-person"
                      name="type"
                      value="in-person"
                      checked={formData.type === 'in-person'}
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-4">
              <Form.Label className={`${darkMode ? "text-white" : null } `} >Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className={`${darkMode ? "card-dark" : null }`}
                placeholder="Enter any notes about the interview"
              />
            </Form.Group>
            
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button variant="outline-secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button className='btn btn-primary' type="submit">
                <Save size={16} className="me-1" /> Save Interview
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddInterview;