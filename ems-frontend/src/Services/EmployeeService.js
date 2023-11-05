import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// Get employee by id GET
export const getEmployee = (employeeId) =>
  axios.get(REST_API_BASE_URL + "/" + employeeId);
// Get all employees GET
export const listEmployees = () => axios.get(REST_API_BASE_URL);
// Create employee POST
export const createEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);
// Update employee PUT
export const updateEmployee = (employeeId, employee) =>
  axios.put(REST_API_BASE_URL + "/" + employeeId, employee);
// Delete employee DELETE
export const deleteEmployee = (employeeId) =>
  axios.delete(REST_API_BASE_URL + "/" + employeeId);
