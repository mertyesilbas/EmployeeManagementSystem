import React, {useEffect, useState} from "react";
import {createEmployee, getEmployee, updateEmployee} from "../Services/EmployeeService.js";
import {useNavigate, useParams} from "react-router-dom";

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    // Use Params Hook
    const {id} = useParams()
    // Errors
    const [errors, setErrors] = useState({
        firstName: '', lastName: '', email: ''
    })

    const navigator = useNavigate()

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            }).catch(error => {
                console.error(error)
            })
        }
    }, [])

    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        if (validateForm()) {
            const employee = {firstName, lastName, email}

            if (id) {
                updateEmployee(id,employee).then((response) => {
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error => {
                    console.error(error)
                })
            } else {
                // console.log(employee)
                createEmployee(employee).then((response) => {
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error => {
                    console.error(error)
                })
            }

        }
    }

    function validateForm() {
        let valid = true

        const errorsCopy = {...errors}

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required!'
            valid = false
        }
        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name required!'
            valid = false
        }
        if (email.trim()) {
            errorsCopy.email = ''
        } else {
            errorsCopy.email = 'Email is required!'
            valid = false
        }

        setErrors(errorsCopy)
        return valid

    }

    function pageTitle() {
        if (id) {
            return <h2 className = 'text-center mt-5'>Update Employee</h2>
        } else {
            return <h2 className = 'text-center mt-1'>Add Employee</h2>
        }
    }

    return (<div className = 'container'>
        <div className = 'row'>
            <div className = 'card'>
                {
                    pageTitle()
                }
                <div className = 'card-body mb-5'>
                    <form>
                        {/*First Name Input*/}
                        <div className = 'form-group mb-2'>
                            <label className = 'form-label'>First Name: </label>
                            <input type = 'text'
                                   name = 'firstName'
                                   value = {firstName}
                                   className = {`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                   onChange = {(e) => setFirstName(e.target.value)}/>
                            {errors.firstName && <div className = 'invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        {/*Last Name Input*/}
                        <div className = 'form-group mb-2'>
                            <label className = 'form-label'>Last Name: </label>
                            <input type = 'text'
                                   name = 'lastName'
                                   value = {lastName}
                                   className = {`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                   onChange = {(e) => setLastName(e.target.value)}/>
                            {errors.lastName && <div className = 'invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        {/*Email Input*/}
                        <div className = 'form-group mb-2'>
                            <label className = 'form-label'> Email: </label>
                            <input type = 'text'
                                   name = 'email'
                                   value = {email}
                                   className = {`form-control ${errors.email ? 'is-invalid' : ''}`}
                                   onChange = {(e) => setEmail(e.target.value)}/>
                            {errors.email && <div className = 'invalid-feedback'>{errors.email}</div>}
                        </div>
                        <button className = 'btn btn-success mt-3 w-100'
                                onClick = {saveOrUpdateEmployee}>Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}

export default EmployeeComponent;