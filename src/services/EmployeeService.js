/**
 * Service for managing employee data
 */

let employees = [
  { id: 1, name: 'Somya Jain', role: 'Software Engineer', department: 'Engineering' },
  { id: 2, name: 'Khushi Rathore', role: 'Product Manager', department: 'Product' },
  { id: 3, name: 'Pinki Sharma', role: 'Designer', department: 'Design' },
  { id: 4, name: 'Parul Raj', role: 'HR Manager', department: 'Human Resources' },
  { id: 5, name: 'Kanchan Chauhan', role: 'Data Analyst', department: 'Analytics' },
];

/**
 * Get all employees
 * @returns {Array} Array of employee objects
 */
export const getAllEmployees = () => {
  return employees;
};

/**
 * Search employees by name or department
 * @param {string} query - Search query
 * @returns {Array} Filtered array of employees
 */
export const searchEmployees = (query) => {
  const lowerQuery = query.toLowerCase();
  return employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(lowerQuery) ||
      emp.department.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Add a new employee
 * @param {Object} employee - Employee data
 * @returns {Object} Added employee with ID
 */
export const addEmployee = (employee) => {
  const newEmployee = {
    id: employees.length + 1,
    ...employee,
  };
  employees.push(newEmployee);
  return newEmployee;
};

/**
 * Update an existing employee
 * @param {number} id - Employee ID
 * @param {Object} updatedData - Updated employee data
 * @returns {Object|null} Updated employee or null if not found
 */
export const updateEmployee = (id, updatedData) => {
  const index = employees.findIndex((emp) => emp.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updatedData };
    return employees[index];
  }
  return null;
};

/**
 * Get employee by ID
 * @param {number} id - Employee ID
 * @returns {Object|null} Employee object or null if not found
 */
export const getEmployeeById = (id) => {
  return employees.find((emp) => emp.id === id) || null;
};