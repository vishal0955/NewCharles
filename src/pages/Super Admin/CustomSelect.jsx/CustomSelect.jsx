import React, { useState } from 'react';

const CustomPlanForm = ({onclose}) => {
  const [formData, setFormData] = useState({
    modules: {
      hrm: false,
      crm: false,
      projectManagement: false,
      recruitment: false,
      accounting: false,
      inventoryManagement: false,
    },
    numberOfUsers: '',
    storageCapacity: '10 GB',
    billingCycle: 'monthly',
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      modules: {
        ...prevData.modules,
        [name]: checked,
      },
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  const resetForm = () => {
    setFormData({
      modules: {
        hrm: false,
        crm: false,
        projectManagement: false,
        recruitment: false,
        accounting: false,
        inventoryManagement: false,
      },
      numberOfUsers: '',
      storageCapacity: '10 GB',
      billingCycle: 'monthly',
    });
  };

  return (
    <div style={styles.container}>
      <h2>Create Custom Plan</h2>
      <p>Select modules and customize your plan according to your needs</p>
      <form onSubmit={handleSubmit}>
        <h4>Select Modules</h4>
        <div style={styles.modulesContainer}>
          {Object.keys(formData.modules).map((module) => (
            <div key={module} style={styles.module}>
              <label>
                <input
                  type="checkbox"
                  name={module}
                  checked={formData.modules[module]}
                  onChange={handleCheckboxChange}
                />
                {module.charAt(0).toUpperCase() + module.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              <p style={styles.moduleDescription}>
                {module === 'hrm' && 'Employee management, attendance, payroll'}
                {module === 'crm' && 'Lead management, sales pipeline, analytics'}
                {module === 'projectManagement' && 'Task tracking, team collaboration, timelines'}
                {module === 'recruitment' && 'Job posting, applicant tracking, interviews'}
                {module === 'accounting' && 'Financial management, invoicing, expense tracking'}
                {module === 'inventoryManagement' && 'Stock tracking, order management, suppliers'}
              </p>
            </div>
          ))}
        </div>

        <h4>Plan Configuration</h4>
        <div style={styles.inputGroup}>
          <label>
            Number of Users
            <input
              type="text"
              name="numberOfUsers"
              value={formData.numberOfUsers}
              onChange={handleInputChange}
              placeholder="Enter number of users"
              style={styles.input}
            />
          </label>
        </div>

        <div style={styles.inputGroup}>
          <label>
            Storage Capacity (GB)
            <select
              name="storageCapacity"
              value={formData.storageCapacity}
              onChange={handleInputChange}
              style={styles.input}
            >
              <option>10 GB</option>
              <option>50 GB</option>
              <option>100 GB</option>
            </select>
          </label>
        </div>

        <div style={styles.inputGroup}>
          <label>Billing Cycle</label>
          <div>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="billingCycle"
                value="monthly"
                checked={formData.billingCycle === 'monthly'}
                onChange={handleInputChange}
              />
              Monthly
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="billingCycle"
                value="yearly"
                checked={formData.billingCycle === 'yearly'}
                onChange={handleInputChange}
              />
              Yearly (Save 20%)
            </label>
          </div>
        </div>

        <div style={styles.buttonContainer}>
          <button type="button" onClick={onclose} style={styles.button}>
            Cancel
          </button>
          <button type="submit" style={styles.button}>
            Save Plan
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  modulesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  module: {
    flex: '1 0 45%',
    margin: '10px 0',
  },
  moduleDescription: {
    fontSize: '12px',
    color: '#666',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
  },
  radioLabel: {
    marginRight: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px 20px',
  },
};

export default CustomPlanForm;