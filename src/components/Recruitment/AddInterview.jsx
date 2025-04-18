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

const AddInterview = ({ onClose, onSave }) => {
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
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white d-flex justify-content-between align-items-center py-3">
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
                  <Form.Label>Interview ID</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <CheckSquare size={16} />
                    </InputGroup.Text>
                    <FormControl
                      name="interviewId"
                      value={formData.interviewId}
                      onChange={handleInputChange}
                      placeholder="Auto-generated if left blank"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Select 
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="form-select-sm"
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
              <Col lg={6} className="mb-3 mb-lg-0">
                <Form.Group>
                  <Form.Label>Candidate Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <User size={16} />
                    </InputGroup.Text>
                    <FormControl
                      name="candidate"
                      value={formData.candidate}
                      onChange={handleInputChange}
                      placeholder="Enter candidate name"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Job Position</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <Briefcase size={16} />
                    </InputGroup.Text>
                    <FormControl
                      name="job"
                      value={formData.job}
                      onChange={handleInputChange}
                      placeholder="Enter job position"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            
            <Row className="mb-4">
              <Col lg={6} className="mb-3 mb-lg-0">
                <Form.Group>
                  <Form.Label>Interviewer</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <Users size={16} />
                    </InputGroup.Text>
                    <FormControl
                      name="interviewer"
                      value={formData.interviewer}
                      onChange={handleInputChange}
                      placeholder="Enter interviewer name"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Interview Type</Form.Label>
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
            
            <Row className="mb-4">
              <Col lg={6} className="mb-3 mb-lg-0">
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <Calendar size={16} />
                    </InputGroup.Text>
                    <FormControl
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Time</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light">
                      <Clock size={16} />
                    </InputGroup.Text>
                    <FormControl
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-4">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
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

// Example of the parent component that would use this component
// This shows how you would integrate the AddInterview component
// const InterviewManagementSystem = () => {
//   const [showAddInterview, setShowAddInterview] = useState(false);
//   const [interviews, setInterviews] = useState([
//     {
//       interviewId: 'INT-001',
//       candidate: 'Harold Gaynor',
//       job: 'Accountant',
//       interviewer: 'Jane Doe',
//       type: 'phone',
//       date: '2024-09-12',
//       time: '10:00',
//       status: 'scheduled',
//       feedback: 'Creative writing skills.',
//       result: 'On Hold'
//     },
//     {
//       interviewId: 'INT-002',
//       candidate: 'Sandra Ornellas',
//       job: 'App Developer',
//       interviewer: 'John Smith',
//       type: 'video',
//       date: '2024-10-24',
//       time: '14:30',
//       status: 'completed',
//       feedback: 'Strong communication skills.',
//       result: 'Pass'
//     }
//   ]);

  // const handleSaveInterview = (newInterview) => {
  //   setInterviews([...interviews, newInterview]);
  //   setShowAddInterview(false);
  //   // In a real application, you would likely save this to a database
  // };

//   return (
//     <Container fluid className="p-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2>Interview List</h2>
//         <div>
//           <Button variant="outline-secondary" className="me-2">
//             Export <span className="ms-1">▼</span>
//           </Button>
//           <Button 
//             variant="primary" 
//           
//           >
//             Add Interview
//           </Button>
//         </div>
//       </div>
      
//       {/* Interview List Table would go here */}
      
//       {/* Modal for adding new interview */}
//       {showAddInterview && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <AddInterview 
//               onClose={() => setShowAddInterview(false)} 
//               onSave={handleSaveInterview} 
//             />
//           </div>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default InterviewManagementSystem;