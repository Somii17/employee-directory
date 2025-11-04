import React from 'react';

/**
 * EmployeeCard component to display individual employee details
 * @param {Object} employee - Employee data
 * @param {Function} onEdit - Callback function when edit button is clicked
 */
const EmployeeCard = ({ employee, onEdit }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p className="role">{employee.role}</p>
      <p className="department">{employee.department}</p>
      <button onClick={() => onEdit(employee)} className="edit-btn">
        Edit
      </button>
    </div>
  );
};

export default EmployeeCard;