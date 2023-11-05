import React, { useEffect, useState } from "react";
import {
  deleteEmployee,
  listEmployees,
} from "../../Services/EmployeeService.js";
import { useNavigate } from "react-router-dom";
import {
  getAllDepartments,
} from "../../Services/DepartmentService.js";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    getAllemployees();
  }, []);
  function getAllemployees() {
    listEmployees()
      .then((repsonse) => {
        setEmployees(repsonse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/update-employee/${id}`);
  }

  function removeEmployee(id) {
    deleteEmployee(id)
      .then(() => {
        getAllemployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="card mt-10 block h-5/6 w-5/6 px-10">
      {/*Caption and add employee button*/}
      <div className="flex items-center justify-between py-8">
        <div className="flex flex-col">
          <h1 className="pb-2 text-lg font-bold text-bright_bold">
            List of Employees
          </h1>
          <p className="pb-2 text-sm">
            A list of all the employees and their information.
          </p>
        </div>
        <button
          type="button"
          className="button h-12 w-12 rounded-full bg-green-400 text-lg"
          onClick={addNewEmployee}
        >
          +
        </button>
      </div>

      {/*Table of employees list*/}
      <table className="w-full text-left">
        <thead className="border-b">
          <tr>
            <th className="px-5 text-center">Id</th>
            <th className="border-l text-center">First Name</th>
            <th className="border-l text-center">Last Name</th>
            <th className="border-l text-center">Email</th>
            <th className="border-l text-center">Department</th>
            <th className="pr-20 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employees) => (
            <tr
              className="border-b border-b-bright_black_50 text-sm"
              key={employees.id}
            >
              <td className="py-4 font-bold text-bright_bold">
                {employees.id}
              </td>
              <td className="border-l px-5 py-4">{employees.firstName}</td>
              <td className="border-l px-5 py-4">{employees.lastName}</td>
              <td className="border-l px-5 py-4">{employees.email}</td>
              <td className="border-l px-5 py-4">{employees.departmentId}</td>
              <td className="text-right">
                <button
                  className="button bg-yellow-500"
                  onClick={() => updateEmployee(employees.id)}
                >
                  Update
                </button>
                <button
                  className="button ml-4 bg-bright_red"
                  onClick={() => removeEmployee(employees.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListEmployeeComponent;
