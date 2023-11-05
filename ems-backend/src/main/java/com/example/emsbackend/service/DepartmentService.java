package com.example.emsbackend.service;

import com.example.emsbackend.dto.DepartmentDto;

import java.util.List;


public interface DepartmentService
    {
    DepartmentDto createDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentById(Long id);

    List<DepartmentDto> getAllDepartments();

    DepartmentDto updateDepartment(
            Long id,
            DepartmentDto departmentDto
                                  );

    void deleteDepartment(Long id);
    }
