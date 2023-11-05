import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/departments";

// Get Department by id
export const getDepartment = (departmentId) =>
  axios.get(REST_API_BASE_URL + "/" + departmentId);

// Get all departments
export const getAllDepartments = () => axios.get(REST_API_BASE_URL);

// Create department
export const createDepartment = (department) =>
  axios.post(REST_API_BASE_URL, department);
//Update department
export const updateDepartment = (departmentId, department) =>
  axios.put(REST_API_BASE_URL + "/" + departmentId, department);
// Delete department
export const deleteDepartment = (departmentId) =>
  axios.delete(REST_API_BASE_URL + "/" + departmentId);
