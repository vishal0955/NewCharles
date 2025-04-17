import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

const AddPricingPlan = ({ onAdd }) => {
  const [planName, setPlanName] = useState('');
  const [price, setPrice] = useState('');
  const [trialDays, setTrialDays] = useState('');
  const [features, setFeatures] = useState(['']);

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };

  const addFeatureField = () => {
    setFeatures([...features, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!planName || !price) return alert("Please fill all required fields.");

    const newPlan = {
      planName,
      price: `$${price}`,
      trialDays,
      features: features.filter(f => f.trim() !== ''),
    };

    onAdd(newPlan);
    setPlanName('');
    setPrice('');
    setTrialDays('');
    setFeatures(['']);
  };

  return (
    <Card className="p-4 mb-4">
      <h4>Add New Plan</h4>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control 
                type="text" 
                value={planName} 
                onChange={(e) => setPlanName(e.target.value)} 
                placeholder="Free Plan" 
                required
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Price (in $)</Form.Label>
              <Form.Control 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                placeholder="0" 
                required
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Free Trial Days</Form.Label>
              <Form.Control 
                type="number" 
                value={trialDays} 
                onChange={(e) => setTrialDays(e.target.value)} 
                placeholder="0" 
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Label>Features</Form.Label>
        {features.map((feature, idx) => (
          <Form.Group className="mb-2" key={idx}>
            <Form.Control 
              type="text" 
              value={feature} 
              onChange={(e) => handleFeatureChange(idx, e.target.value)} 
              placeholder={`Feature ${idx + 1}`} 
            />
          </Form.Group>
        ))}
        <Button variant="secondary" onClick={addFeatureField} className="mb-3">+ Add Feature</Button>

        <div>
          <Button variant="primary" type="submit">Add Plan</Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddPricingPlan;
