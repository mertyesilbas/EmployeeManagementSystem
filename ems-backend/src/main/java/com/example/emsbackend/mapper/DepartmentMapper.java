package com.example.emsbackend.mapper;

import com.example.emsbackend.dto.DepartmentDto;
import com.example.emsbackend.entity.Department;

public class DepartmentMapper
    {
    // ENTITY TO DTO
    public static DepartmentDto mapToDepartmentDto(Department department)
        {
        return new DepartmentDto(
                department.getId(),
                department.getName(),
                department.getDescription()
        );
        }

    // DTO TO ENTITY
    public static Department mapToDepartment(DepartmentDto departmentDto)
        {
        return new Department(
                departmentDto.getId(),
                departmentDto.getName(),
                departmentDto.getDescription()
        );
        }
    }
