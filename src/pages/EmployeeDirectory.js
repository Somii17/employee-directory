import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import DepartmentFilter from '../components/DepartmentFilter';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import {
  getAllEmployees,
  searchEmployees,
  addEmployee,
  updateEmployee,
} from '../services/EmployeeService';

/**
 * Get unique departments
 */
const getDepartments = (employees) => {
  const depts = employees.map(emp => emp.department);
  return [...new Set(depts)].sort();
};

/**
 * Main EmployeeDirectory component
 */
const EmployeeDirectory = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const allEmployees = getAllEmployees();
    setEmployees(allEmployees);
    setFilteredEmployees(allEmployees);
    setDepartments(getDepartments(allEmployees));
  }, []);

  // Filter employees based on search and department
  useEffect(() => {
    let results = employees;

    // Filter by search term
    if (searchTerm) {
      results = searchEmployees(searchTerm);
    }

    // Filter by department
    if (selectedDepartment) {
      results = results.filter(emp => emp.department === selectedDepartment);
    }

    setFilteredEmployees(results);
  }, [searchTerm, selectedDepartment, employees]);

  const handleAddEmployee = () => {
    setSelectedEmployee(null);
    setShowForm(true);
  };

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    if (selectedEmployee) {
      updateEmployee(selectedEmployee.id, formData);
    } else {
      addEmployee(formData);
    }
    const updatedEmployees = getAllEmployees();
    setEmployees(updatedEmployees);
    setDepartments(getDepartments(updatedEmployees));
    setShowForm(false);
    setSelectedEmployee(null);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="employee-directory">
      {/* Header Section with Dark Purple Background */}
      <div className="directory-header">
        <div className="header-top">
          <div className="header-left">
            <h1>Employee Directory</h1>
            <p className="employee-count">
              {filteredEmployees.length} {filteredEmployees.length === 1 ? 'employee' : 'employees'}
            </p>
          </div>
          <button onClick={handleAddEmployee} className="add-btn">
            + Add Employee
          </button>
        </div>

        <div className="filters-section">
          <SearchBar onSearch={setSearchTerm} />
          <DepartmentFilter
            departments={departments}
            selectedDepartment={selectedDepartment}
            onDepartmentChange={setSelectedDepartment}
          />
        </div>
      </div>

      {/* Content Area with Light Background */}
      <div className="content-area">
        <EmployeeList employees={filteredEmployees} onEdit={handleEditEmployee} />
      </div>

      {showForm && (
        <EmployeeForm
          employee={selectedEmployee}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}
    </div>
  );
};

export default EmployeeDirectory;