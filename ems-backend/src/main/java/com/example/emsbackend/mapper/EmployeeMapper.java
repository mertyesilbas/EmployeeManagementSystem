package com.example.emsbackend.mapper;

import com.example.emsbackend.dto.EmployeeDto;
import com.example.emsbackend.entity.Employee;

public class EmployeeMapper
    {
    public static EmployeeDto mapToEmployeeDto(Employee employee)
        {
        EmployeeDto employeeDto = new EmployeeDto();
        employeeDto.setId(employee.getId());
        employeeDto.setFirstName(employee.getFirstName());
        employeeDto.setLastName(employee.getLastName());
        employeeDto.setEmail(employee.getEmail());
        return employeeDto;

        }

    public static Employee mapToEmployee(EmployeeDto employeeDto)
        {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
        }
    }


