package com.example.emsbackend.controller;

import com.example.emsbackend.dto.DepartmentDto;
import com.example.emsbackend.dto.EmployeeDto;
import com.example.emsbackend.entity.Department;
import com.example.emsbackend.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController
    {
    private DepartmentService departmentService;

    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartments()
        {
        List<DepartmentDto> departmentDtoList = departmentService.getAllDepartments();
        return new ResponseEntity<>(
                departmentDtoList,
                HttpStatus.OK
        );
        }

    @GetMapping("id")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long id)
        {
        DepartmentDto departmentDto = departmentService.getDepartmentById(id);
        return new ResponseEntity<>(
                departmentDto,
                HttpStatus.OK
        );
        }

    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto)
        {
        DepartmentDto departmentDtoNew = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(
                departmentDtoNew,
                HttpStatus.CREATED
        );
        }

    @PutMapping("id")
    public ResponseEntity<DepartmentDto> updateDepartment(
            @RequestBody DepartmentDto departmentDto,
            @PathVariable("id") Long id
                                                         )
        {
        DepartmentDto departmentDtoUpdated = departmentService.updateDepartment(id, departmentDto);
        return new ResponseEntity<>(
                departmentDto,
                HttpStatus.OK
        );
        }
    @DeleteMapping("id")
    public ResponseEntity<String> deleteDepartment(@PathVariable("id") Long id){
        departmentService.deleteDepartment(id);
        return new ResponseEntity<>(
                "Depart with id :: " + id + "successfully deleted.",
                HttpStatus.NO_CONTENT
        );
    }
    }

