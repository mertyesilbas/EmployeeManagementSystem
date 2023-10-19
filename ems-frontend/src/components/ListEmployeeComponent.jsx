import React, {useEffect, useState} from 'react';
import {deleteEmployee, listEmployees} from "../Services/EmployeeService";
import {useNavigate} from "react-router-dom";


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();
    useEffect(() => {
        getAllemployees()}, []
    )

    function getAllemployees() {
        listEmployees().then((repsonse) => {
            setEmployees(repsonse.data);
        }).catch(error => {
            console.log(error);
        })
    }

    function addNewEmployee() {
        navigator('/add-employee');
    }

    function updateEmployee(id) {
        navigator(`/update-employee/${id}`)
    }


    function removeEmployee(id) {
        deleteEmployee(id).then((response) => {
            getAllemployees()
        }).catch(error => {
                console.error(error);
            }
        )
    }

    return (<div className = 'container'>
        <h1 className = 'text-center'>List of Employees</h1>
        <button type = 'button'
                className = 'btn btn-primary mb-2'
                onClick = {addNewEmployee}>Add Employee
        </button>
        <table className = 'table table-striped table-bordered'>
            <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                employees.map(employees =>
                    <tr key = {employees.id}>
                        <td>{employees.id}</td>
                        <td>{employees.firstName}</td>
                        <td>{employees.lastName}</td>
                        <td>{employees.email}</td>
                        <td>
                            <button className = 'btn btn-warning mx-3'
                                    onClick = {() => updateEmployee(employees.id)}>Update
                            </button>
                            <button className = 'btn btn-danger'
                                    onClick = {() => removeEmployee(employees.id)}>Delete
                            </button>
                        </td>
                    </tr>)
            }
            </tbody>
        </table>
    </div>)
}
export default ListEmployeeComponent;