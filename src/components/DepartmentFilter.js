import React from 'react';

/**
 * DepartmentFilter component for filtering by department
 */
const DepartmentFilter = ({ departments, selectedDepartment, onDepartmentChange }) => {
  return (
    <div className="department-filter">
      <select 
        value={selectedDepartment} 
        onChange={(e) => onDepartmentChange(e.target.value)}
      >
        <option value="">All Departments</option>
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartmentFilter;