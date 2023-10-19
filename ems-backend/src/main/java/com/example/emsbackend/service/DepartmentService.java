package com.example.emsbackend.service;

import com.example.emsbackend.dto.DepartmentDto;
import com.example.emsbackend.entity.Department;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

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
