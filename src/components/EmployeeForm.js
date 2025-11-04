import React, { useState, useEffect } from 'react';

/**
 * EmployeeForm component for adding/editing employees
 * @param {Object|null} employee - Employee to edit (null for new employee)
 * @param {Function} onSubmit - Callback function when form is submitted
 * @param {Function} onCancel - Callback function when form is cancelled
 */
const EmployeeForm = ({ employee, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    department: '',
  });

  // Populate form if editing existing employee
  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name,
        role: employee.role,
        department: employee.department,
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (!formData.name || !formData.role || !formData.department) {
      alert('Please fill all fields');
      return;
    }
    onSubmit(formData);
    // Reset form
    setFormData({ name: '', role: '', department: '' });
  };

  return (
    <div className="employee-form-overlay">
      <div className="employee-form">
        <h2>{employee ? 'Edit Employee' : 'Add New Employee'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {employee ? 'Update' : 'Add'} Employee
            </button>
            <button type="button" onClick={onCancel} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;