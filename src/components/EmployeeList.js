import React from 'react';
import EmployeeCard from './EmployeeCard';

/**
 * EmployeeList component to display list of employees
 * @param {Array} employees - Array of employee objects
 * @param {Function} onEdit - Callback function when edit is clicked
 */
const EmployeeList = ({ employees, onEdit }) => {
  if (employees.length === 0) {
    return <p className="no-results">No employees found</p>;
  }

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default EmployeeList;