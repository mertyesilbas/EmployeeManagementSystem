import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createDepartment,
  getDepartment,
  updateDepartment,
} from "../../Services/DepartmentService.js";

const departmentComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getDepartment(id)
        .then((response) => {
          setName(response.data.name);
          setDescription(response.data.description);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  function saveOrUpdateDepartment(e) {
    e.preventDefault();

    if (validateForm()) {
      const department = { name, description };

      if (id) {
        updateDepartment(id, department)
          .then((response) => {
            console.log(response.data);
            navigator("/departments");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createDepartment(department)
          .then((response) => {
            console.log(response.data);
            navigator("/departments");
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

    if (name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "Name is required!";
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "Description required!";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center font-bold">Update Department</h2>;
    } else {
      return <h2 className="text-center font-bold">Add Department</h2>;
    }
  }

  return (
    <div className="card mt-10 block h-5/6 w-5/6 px-10">
      {pageTitle()}
      <div className="mt-10 flex w-full justify-center">
        <form className='flex flex-col items-center'>
          <table>
            <tbody>
              <tr>
                <td className="tdcustom">Name: </td>
                <td className="tdcustom">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    className={`border px-1 py-0.5 ${
                      errors.name ? "border-red-400" : "border-green-400"
                    }`}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className="tdcustom">Description: </td>
                <td className="tdcustom">
                  <input
                    type="text"
                    name='description'
                    value={description}
                    className={`border px-1 py-0.5 ${
                      errors.description ? "border-red-400" : "border-green-400"
                    }`}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className='btnapply' onClick={saveOrUpdateDepartment}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default departmentComponent;
