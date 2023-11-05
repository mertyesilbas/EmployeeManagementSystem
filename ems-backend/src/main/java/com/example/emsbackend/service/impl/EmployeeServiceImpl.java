package com.example.emsbackend.service.impl;

import com.example.emsbackend.dto.EmployeeDto;
import com.example.emsbackend.entity.Department;
import com.example.emsbackend.entity.Employee;
import com.example.emsbackend.exception.ResourceNotFoundException;
import com.example.emsbackend.mapper.EmployeeMapper;
import com.example.emsbackend.repository.DepartmentRepository;
import com.example.emsbackend.repository.EmployeeRepository;
import com.example.emsbackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService
    {
    private EmployeeRepository employeeRepository;
    private DepartmentRepository departmentRepository;

    /*--------------------CREATE EMPLOYEE START---------------------*/
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto)
        {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Department department = departmentRepository.findById(employeeDto.getDepartmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Department doesn't exist with id :: " + employeeDto.getDepartmentId()));
        employee.setDepartment(department);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
        }
    /*--------------------CREATE EMPLOYEE END---------------------*/

    /*--------------------GET EMPLOYEE BY ID START---------------------*/
    @Override
    public EmployeeDto getEmployeeById(Long id)
        {
        Employee employee = employeeRepository.findById(id)
                                              .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));
        return EmployeeMapper.mapToEmployeeDto(employee);
        }
    /*--------------------GET EMPLOYEE BY ID END---------------------*/

    /*--------------------GET ALL EMPLOYEES START---------------------*/
    @Override
    public List<EmployeeDto> getAllEmployees()
        {
        List<Employee> employees = employeeRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
        return employees.stream().map(EmployeeMapper::mapToEmployeeDto)
                        .collect(Collectors.toList());
        }
    /*--------------------GET ALL EMPLOYEES END---------------------*/

    /*--------------------UPDATE EMPLOYEE START---------------------*/
    @Override
    public EmployeeDto updateEmployee(
            Long id,
            EmployeeDto employeeDto
                                     )
        {
        Employee employee = employeeRepository.findById(id)
                                              .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        Department department = departmentRepository.findById(employeeDto.getDepartmentId())
                                                    .orElseThrow(() -> new ResourceNotFoundException("Department doesn't exist with id :: " + employeeDto.getDepartmentId()));
        employee.setDepartment(department);
        return EmployeeMapper.mapToEmployeeDto(employeeRepository.save(employee));
        }
    /*--------------------UPDATE EMPLOYEE END---------------------*/

    /*--------------------DELETE EMPLOYEE START---------------------*/
    @Override
    public void deleteEmployee(Long id)
        {
        Employee employee = employeeRepository.findById(id)
                                              .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));
        employeeRepository.delete(employee);
        }
    /*--------------------DELETE EMPLOYEE END---------------------*/

    }
