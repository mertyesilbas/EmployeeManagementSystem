package com.example.emsbackend.controller;

import com.example.emsbackend.dto.DepartmentDto;
import com.example.emsbackend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/departments")
public class DepartmentController
    {
    private DepartmentService departmentService;


    /*--------------------GET ALL DEPARTMENTS START---------------------*/ //GET ALL DEPARTMENTS
    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartments()
        {
        List<DepartmentDto> departmentDtoList = departmentService.getAllDepartments();
        return new ResponseEntity<>(
                departmentDtoList,
                HttpStatus.OK
        );
        }
    /*--------------------GET ALL END---------------------*/


    /*--------------------GET DEPARTMENT BY ID START---------------------*/ // GET DEPARTMENT BY ID
    @GetMapping("/{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long id)
        {
        DepartmentDto departmentDto = departmentService.getDepartmentById(id);
        return new ResponseEntity<>(
                departmentDto,
                HttpStatus.OK
        );
        }
    /*--------------------GET BY ID END---------------------*/

    /*--------------------CREATE DEPARTMENT START---------------------*/ // CREATE DEPARTMENT
    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto)
        {
        DepartmentDto departmentDtoNew = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(
                departmentDtoNew,
                HttpStatus.CREATED
        );
        }
    /*--------------------CREATE DEPARTMENT END---------------------*/

    /*--------------------UPDATE DEPARTMENT START---------------------*/ // UPDATE DEPARTMENT
    @PutMapping("/{id}")
    public ResponseEntity<DepartmentDto> updateDepartment(
            @RequestBody DepartmentDto departmentDto,
            @PathVariable("id") Long id
                                                         )
        {
        DepartmentDto departmentDtoUpdated = departmentService.updateDepartment(id, departmentDto);
        return new ResponseEntity<>(
                departmentDtoUpdated,
                HttpStatus.OK
        );
        }
    /*--------------------UPDATE DEPARTMENT END---------------------*/

    /*--------------------DELETE DEPARTMENT START---------------------*/ // DELETE DEPARTMENT
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable("id") Long id){
        departmentService.deleteDepartment(id);
        return new ResponseEntity<>(
                "Depart with id :: " + id + "successfully deleted.",
                HttpStatus.NO_CONTENT
        );
    }
    /*--------------------DELETE DEPARTMENT END---------------------*/
    }

