package com.example.emsbackend.service;

import com.example.emsbackend.dto.EmployeeDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EmployeeService
    {
    // Create employee method
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    // Get employee by id method
    EmployeeDto getEmployeeById(Long id);
    // Get all employees method
    List<EmployeeDto> getAllEmployees();
    // Update employee method
    EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto);
    // Delete employee method
    void deleteEmployee(Long id);
    }
