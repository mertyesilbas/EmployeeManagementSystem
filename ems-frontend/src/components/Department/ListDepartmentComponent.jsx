import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteDepartment,
  getAllDepartments,
} from "../../Services/DepartmentService.js";

const listDepartmentComponent = () => {
  const [departments, setDepartments] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    getAllDepartments()
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function addDepartment() {
    navigator("/add-department");
  }
  function updateDepartment(id) {
    navigator(`/update-department/${id}`);
  }

  function deleteDep(id) {
    deleteDepartment(id)
      .then(() => {
        getAll();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="card mt-10 block h-5/6 w-5/6 px-10">
      {/*Caption and add department button*/}
      <div className="flex items-center justify-between py-8">
        <div className="flex flex-col">
          <h1 className="pb-2 text-lg font-bold text-bright_bold">
            List of Departments
          </h1>
          <p className="pb-2 text-sm">
            A list of all the departments and their information.
          </p>
        </div>
        <button
          type="button"
          className="button h-12 w-12 rounded-full bg-green-400 text-lg"
          onClick={addDepartment}
        >
          +
        </button>
      </div>

      {/*Table of employees list*/}
      <table className="w-full text-left">
        <thead className="border-b">
          <tr>
            <th className="px-5 text-center">Id</th>
            <th className="border-l text-center">Name</th>
            <th className="border-l text-center">Description</th>
            <th className="w-72 border-l text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((departments) => (
            <tr
              className="border-b border-b-bright_black_50 text-sm"
              key={departments.id}
            >
              <td className="py-4 text-center font-bold text-bright_bold">
                {departments.id}
              </td>
              <td className="border-l px-5 py-4">{departments.name}</td>
              <td className="border-l px-5 py-4">{departments.description}</td>
              <td className="border-l text-center">
                <button
                  className="button bg-yellow-500"
                  onClick={() => updateDepartment(departments.id)}
                >
                  Update
                </button>
                <button
                  className="button ml-4 bg-bright_red"
                  onClick={() => deleteDep(departments.id)}
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
export default listDepartmentComponent;
