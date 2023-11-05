import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../../Services/EmployeeService.js";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllDepartments,
  getDepartment,
} from "../../Services/DepartmentService.js";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [departments, setDepartments] = useState([]);

  // Use Params Hook
  const { id } = useParams();
  // Errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    getAllDepartments()
      .then((response) => {
        setDepartments(response.data);
        console.log(departments);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setDepartmentId(response.data.department.id);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email, departmentId };

      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // console.log(employee)
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required!";
      valid = false;
    }
    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name required!";
      valid = false;
    }
    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required!";
      valid = false;
    }
    if (departmentId.trim()) {
      errorsCopy.department = "";
    } else {
      errorsCopy.department = "Please select a department!";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="mt-5 text-center">Update Employee</h2>;
    } else {
      return <h2 className="mt-1 text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="card mt-10 block h-5/6 w-5/6 px-10">
      {pageTitle()}
      <div className="mt-10 flex w-full justify-center">
        <form className="flex flex-col items-center">
          <table>
            <tbody>
              <tr>
                <td className="tdcustom">First Name: </td>
                <td className="tdcustom">
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    className={`border px-1 py-0.5 ${
                      errors.firstName ? "border-red-400" : "border-green-400"
                    }`}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className="tdcustom">Last Name: </td>
                <td className="tdcustom">
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    className={`border px-1 py-0.5 ${
                      errors.lastName ? "border-red-400" : "border-green-400"
                    }`}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className="tdcustom">Email: </td>
                <td className="tdcustom">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    className={`border px-1 py-0.5 ${
                      errors.lastName ? "border-red-400" : "border-green-400"
                    }`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className="tdcustom">Select Department: </td>
                <td className="tdcustom">
                  <div
                    className={`selectdrp h-8 w-60 ${
                      errors.department ? "border border-red-400" : ""
                    }`}
                  >
                    <select
                      onChange={(e) => setDepartmentId(e.target.value)}
                      name="departments"
                      className="w-52 text-sm"
                    >
                      <option value="">Select Department: </option>
                      {departments.map((department) => (
                        <option
                          defaultChecked={departmentId === department.id ? "true":"false"}
                          key={department.id}
                          value={"" + department.id + ""}
                        >
                          {department.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btnapply" onClick={saveOrUpdateEmployee}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeComponent;
