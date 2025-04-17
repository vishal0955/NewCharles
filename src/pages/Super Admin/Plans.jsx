import React, { useState, useEffect } from "react";
import { Chips } from "primereact/chips";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "./Plans.css";
import { useSelector } from "react-redux";

function Plans({ show, plan }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [value, setValue] = useState([]);
  const [customizePlanModalShow, setCustomizePlanModalShow] = useState(false);
  const [addPlanModalShow, setAddPlanModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);

  const [customizeModalShow, setCustomizeModalShow] = useState(false);
  const [customizePlanData, setCustomizePlanData] = useState(null);

  const [newEmployee, setNewEmployee] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "Engineering",
    business: "",
    startDate: "",
    companyname: "",
  });

  const [plans, setPlans] = useState([
    {
      planName: "Free Plan",
      price: "$0",
      trialDays: 0,
      features: ["3 Month", "1 Establishment", "14 trial ", "49$ Price"],
      badgeColor: "success",
    },
    {
      planName: "Platinum",
      price: "$500",
      trialDays: 5,
      features: ["3 Month", "1 Establishment", "14 trial ", "49$ Price"],
      badgeColor: "primary",
    },
    {
      planName: "Gold",
      price: "$400",
      trialDays: 7,
      features: ["3 Month", "1 Establishment", "14 trial ", "49$ Price"],
      badgeColor: "warning",
    },
  ]);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [editedPlan, setEditedPlan] = useState({
    planName: "",
    price: "",
    trialDays: 0,
    features: [],
  });

  // 🔁 update when plan prop changes
  useEffect(() => {
    if (plan) {
      setEditedPlan({ ...plan, features: plan.features || [] });
    }
  }, [plan]);

  const planFeatures = [
    {
      name: "HRM",
      description:
        "Complete Human Resource Management system with employee profiles, attendance, and payroll",
    },
    {
      name: "CRM",
      description:
        "Customer Relationship Management with lead tracking and sales pipeline",
    },
    {
      name: "Recruitment",
      description:
        "End-to-end recruitment solution with job posting and candidate tracking",
    },
    {
      name: "Project Management",
      description:
        "Comprehensive project planning and tracking with team collaboration",
    },
    {
      name: "Accounting",
      description: "Financial management with invoicing and expense tracking",
    },
    {
      name: "Inventory Management",
      description: "Stock management with real-time tracking and alerts",
    },
    {
      name: "Finance",
      description:
        "Finance is the study and management of money, investments, and other financial instruments.",
    },
    {
      name: "Support desk",
      description:
        "Support desk assists users with technical issues and service requests.",
    },
  ];

  const handleDelete = (indexToDelete) => {
    const updatedPlans = plans.filter((_, idx) => idx !== indexToDelete);
    setPlans(updatedPlans);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPlan((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedPlans = [...plans];
    const index = plans.findIndex((p) => p.planName === editedPlan.planName);
    if (index !== -1) {
      updatedPlans[index] = editedPlan;
      setPlans(updatedPlans);
    }
    setEditModalShow(false);
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...editedPlan.features];
    updatedFeatures[index] = value;
    setEditedPlan({ ...editedPlan, features: updatedFeatures });
  };

  const addFeatureField = () => {
    setEditedPlan({
      ...editedPlan,
      features: [...(editedPlan.features || []), ""],
    });
  };

  // ✅ Define handleEditClick
  const handleEditClick = (index) => {
    const selected = plans[index];
    setEditedPlan({ ...selected });
    setEditModalShow(true);
  };

  const handleShow = () => setCustomizePlanModalShow(true);
  const handleAddPlanClose = () => setAddPlanModalShow(false);
  const handleAddPlanShow = () => setAddPlanModalShow(true);

  const handleCustomizeClick = () => {
    setCustomizeModalShow(true);
    setCurrentStep(1);
  };

  const handleClose = () => {
    setCustomizeModalShow(false);
    setCurrentStep(1); // reset back to step 1
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Info:", newEmployee);
    handleClose();
  };

  // Declare this in your component
  const handleModalClose = () => {
    setCustomizePlanModalShow(false);
    setCurrentStep(1); // Optional: reset to first step if using multi-step
  };

  const [checkedFeatures, setCheckedFeatures] = useState({});

  // Handle checkbox change
  const handleCheckboxChange = (index) => {
    setCheckedFeatures((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle checkbox state
    }));
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <Container style={{ marginTop: "60px" }}>
      <div className="d-flex gap-3">
        <button
          className="btn btn-warning mb-2"
          onClick={() => setCustomizePlanModalShow(true)}
        >
          Add Plan
        </button>
        <Button
          variant="primary"
          onClick={() => handleCustomizeClick(plan)}
          style={{ height: "40px" }}
        >
          Customize Plan
        </Button>
      </div>

      {/* Step 1 Modal */}
      <Modal 
        show={customizePlanModalShow && currentStep === 1}
        onHide={() => setCustomizePlanModalShow(false)}
        className={`${darkMode ? "custom-modal-dark" : ""}`}
      > 
        <Modal.Header  className={`${darkMode ? "" : ""}`} BadgecloseButton>
          <Modal.Title>Add Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className={`${darkMode ? "text-white" : null }`} >Plan Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newEmployee.fullName}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        fullName: e.target.value,
                      })
                    }
                    required
                    className={`${darkMode ? "card-dark" : null }`}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                   <Form.Label className={`${darkMode ? "text-white" : null }`} >Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={newEmployee.email}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, email: e.target.value })
                    }
                    required
                    className={`${darkMode ? "card-dark" : null }`}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                   <Form.Label className={`${darkMode ? "text-white" : null }`} >Trial Day</Form.Label>
                  <Form.Control
                    type="number"
                    value={newEmployee.phone}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, phone: e.target.value })
                    }
                    required
                    className={`${darkMode ? "card-dark" : null }`}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
               <Form.Label className={`${darkMode ? "text-white" : null }`} >Feature</Form.Label>
              <Form.Select
                value={newEmployee.department}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, department: e.target.value })
                }
                required
                className={`${darkMode ? "card-dark" : null }`}
              >
                <option value="">Select</option>
                <option value="1-10">3 Month</option>
                <option value="10-50">6 Month</option>
                <option value="50-150">9 Month</option>
                <option value="100+">12 Month</option>
              </Form.Select>
            </Form.Group>

            <div className= {`${darkMode ? "card-dark" : null } card p-fluid p-2 mb-3 `}>
              <Chips value={value} onChange={(e) => setValue(e.value)}   />
            </div>

            <div className="d-flex justify-content-end">
              <Button variant="outline-secondary" onClick={handleModalClose}>
                Cancel
              </Button>
              <Button className="ms-3" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={customizeModalShow && currentStep === 1}
        onHide={handleClose}
        className={`${darkMode ? "custom-modal-dark" : null} custom-modal`}

      >
        <Modal.Header closeButton>
          <Modal.Title>Customize Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <Form onSubmit={handleSubmit} className="custom-form">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4">
                   <Form.Label className={`${darkMode ? "text-white" : null }`} >Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newEmployee.fullName}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        fullName: e.target.value,
                      })
                      
                    }
                    placeholder="Enter your full name"
                    required
                    className={`${darkMode ? "card-dark" : null }`}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4">
                   <Form.Label className={`${darkMode ? "text-white" : null }`}  >Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={newEmployee.email}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, email: e.target.value })
                    }
                    placeholder="Enter your email"
                    required
                    className={`${darkMode ? "card-dark" : null }`}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-4">
                   <Form.Label className={`${darkMode ? "text-white" : null }`} >Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    value={newEmployee.phone}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, phone: e.target.value })
                    }
                    placeholder="Enter your phone number"
                    required
                    className={`${darkMode ? "card-dark" : null }`}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4">
                   <Form.Label className={`${darkMode ? "text-white" : null }`} >Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newEmployee.companyname}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        companyname: e.target.value,
                      })
                    }
                    placeholder="Enter your company name"
                    required
                    className={`${darkMode ? "card-dark" : null }`}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Form.Group className="mb-4">
                   <Form.Label className={`${darkMode ? "text-white" : null }`} >Company Size</Form.Label>
                  <Form.Select
                    value={newEmployee.department}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        department: e.target.value,
                      })
                    }
                    required
                    className={`${darkMode ? "card-dark" : null }`}
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="10-50">10-50 employees</option>
                    <option value="50-150">50-150 employees</option>
                    <option value="100+">100+ employees</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-end mt-4">
              <Button
                variant="outline-secondary"
                className="me-3"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Next
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      {/* Step 2 Modal */}

      <Modal
        show={customizeModalShow && currentStep === 2}
        onHide={handleClose}
        // className="custom-modal feature-modal "
        className={`${darkMode ? "custom-modal-dark" : ""} modal-lg feature-modal`}

      >
        <Modal.Header closeButton>
          <Modal.Title>Customize Your Plan Features</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <Form onSubmit={handleFinalSubmit} className="feature-form">
            <Form.Group className="mb-4">
               <Form.Label className={`${darkMode ? "text-white" : null }`} >Select the features you need</Form.Label>
              <Row className="g-4">
                {planFeatures.map((feature, index) => (
                  <Col md={6} key={index}>
                    <Card
                      className="h-100 feature-card p-3 "
                      onClick={() => handleCheckboxChange(index)}
                      style={{ backgroundColor: "DeepSkyBlue" }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <input
                            type="checkbox"
                            className="me-2"
                            checked={checkedFeatures[index] || false}
                            onChange={() => handleCheckboxChange(index)} // To update state directly on checkbox click
                          />
                          {/* Displaying name side-by-side for words */}
                          {feature.name.split(" ").map((word, i) => (
                            <span
                              key={i}
                              className="me-2 fw-bold"
                              style={{ color: "white" }}
                            >
                              {word}
                            </span>
                          ))}
                        </div>
                        <Card.Text
                          className=" mt-2 "
                          style={{
                            color: "white",
                            fontSize: "18px",
                            fontFamily: "Roboto",
                          }}
                        >
                          {feature.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <div className="d-flex justify-content-end mt-4 gap-3">
              <Button variant="secondary" onClick={() => setCurrentStep(1)}>
                Back
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Plans Display */}
      <Row>
        {plans.map((plan, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card
              className={`h-100 plan-card ${
                selectedPlan === index ? "selected-plan" : ""
              } ${darkMode ? "card-dark" : "bg-white"} border border-light`}
              onClick={() => setSelectedPlan(index)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <div className="badge">{plan.planName}</div>
                <h2>
                  {plan.price} <span>/Per Year</span>
                </h2>
                <p>Free Trial Days: {plan.trialDays}</p>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✅ {feature}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-end gap-2">
                  <Button
                    variant="primary"
                    onClick={() => handleEditClick(index)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(index);
                    }}
                  >
                    <MdDeleteOutline />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Edit Modal */}
      <Modal show={editModalShow} onHide={() => setEditModalShow(false)}          className={`${darkMode ? "custom-modal-dark" : ""}`}
      >
        <Modal.Header className={`${darkMode ? "text-white" : null }`}  closeButton>
          <Modal.Title className={`${darkMode ? "text-white" : null }`}  >Edit Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
               <Form.Label className={`${darkMode ? "text-white" : null }`} >Plan Name</Form.Label>
              <Form.Control
                type="text"
                name="planName"
                value={editedPlan.planName}
                onChange={handleChange}
                className={`${darkMode ? "card-dark" : null }`}
              />
            </Form.Group>

            <Form.Group className="mb-3">
               <Form.Label className={`${darkMode ? "text-white" : null }`} >Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={editedPlan.price}
                onChange={handleChange}
                className={`${darkMode ? "card-dark" : null }`}
              />
            </Form.Group>

            <Form.Group className="mb-3">
               <Form.Label className={`${darkMode ? "text-white" : null }`} >Trial Days</Form.Label>
              <Form.Control
                type="number"
                name="trialDays"
                value={editedPlan.trialDays}
                onChange={handleChange}
                className={`${darkMode ? "card-dark" : null }`}
              />
            </Form.Group>

             <Form.Label className={`${darkMode ? "text-white" : null }`} >Features</Form.Label>
            {(editedPlan.features || []).map((f, i) => (
              <Form.Group key={i} className="mb-2">
                <Form.Control
                  type="text"
                  value={f}
                  onChange={(e) => handleFeatureChange(i, e.target.value)}
                  className={`${darkMode ? "card-dark" : null }`}
                />
              </Form.Group>
            ))}

            <Button variant="secondary" onClick={addFeatureField}>
              + Add Feature
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditModalShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Plans;
