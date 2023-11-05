package com.example.emsbackend.controller;

import com.example.emsbackend.dto.EmployeeDto;
import com.example.emsbackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor 
@RestController
@RequestMapping("/api/employees")
public class EmployeeController
    {
    private EmployeeService employeeService;

    /*--------------------CREATE EMPLOYEE START---------------------*/ //CREATE EMPLOYEE

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto)
        {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(
                savedEmployee,
                HttpStatus.CREATED
        );
        }

    /*--------------------CREATE EMPLOYEE END---------------------*/

    /*--------------------GET EMPLOYEE BY ID START---------------------*/ // GET EMPLOYEE BY ID

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long id)
        {
        EmployeeDto employeeDto = employeeService.getEmployeeById(id);
        return new ResponseEntity<>(
                employeeDto,
                HttpStatus.OK
        );
        }

    /*--------------------GET EMPLOYEE BY ID END---------------------*/

    /*--------------------GET ALL EMPLOYEES START---------------------*/ // GET ALL EMPLOYEES

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees()
        {
        List<EmployeeDto> employeeDtos = employeeService.getAllEmployees();
        return new ResponseEntity<>(
                employeeDtos,
                HttpStatus.OK
        );
        }

    /*--------------------GET ALL EMPLOYEES END---------------------*/

    /*--------------------UPDATE EMPLOYEE START---------------------*/ // UPDATE EMPLOYEE

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(
            @PathVariable("id") Long id,
            @RequestBody EmployeeDto employeeDto
                                                      )
        {
        EmployeeDto updatedEmployee = employeeService.updateEmployee(id, employeeDto);
        return new ResponseEntity<>(
                updatedEmployee,
                HttpStatus.OK
        );
        }

    /*--------------------UPDATE EMPLOYEE END---------------------*/

    /*--------------------DELETE EMPLOYEE START---------------------*/ // DELETE EMPLOYEE
    @DeleteMapping("/{id}")
    
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id)
        {
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(
                "Employee deleted successfully",
                HttpStatus.NO_CONTENT
        );
        }

    /*--------------------UPDATE EMPLOYEE END---------------------*/
    }
