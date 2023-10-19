package com.example.emsbackend.service.impl;

import com.example.emsbackend.dto.DepartmentDto;
import com.example.emsbackend.entity.Department;
import com.example.emsbackend.exception.ResourceNotFoundException;
import com.example.emsbackend.mapper.DepartmentMapper;
import com.example.emsbackend.repository.DepartmentRepository;
import com.example.emsbackend.service.DepartmentService;

import java.util.List;
import java.util.stream.Collectors;

public class DepartmentServiceImpl implements DepartmentService
    {
    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto)
        {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
        }

    @Override
    public DepartmentDto getDepartmentById(Long id)
        {
        Department department = departmentRepository.findById(id)
                                                    .orElseThrow(() -> new ResourceNotFoundException("Department not found for this id :: " + id));
        return DepartmentMapper.mapToDepartmentDto(department);
        }

    @Override
    public List<DepartmentDto> getAllDepartments()
        {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map(DepartmentMapper::mapToDepartmentDto).collect(Collectors.toList());
        }

    @Override
    public DepartmentDto updateDepartment(
            Long id,
            DepartmentDto departmentDto
                                         )
        {
        Department department = departmentRepository.findById(id)
                                                    .orElseThrow(() -> new ResourceNotFoundException("Department not found for this id :: " + id));
        department.setName(departmentDto.getName());
        department.setDescription(departmentDto.getDescription());
        return DepartmentMapper.mapToDepartmentDto(department);
        }

    @Override
    public void deleteDepartment(Long id)
        {
        Department department = departmentRepository.findById(id)
                                                    .orElseThrow(() -> new ResourceNotFoundException("Department not found for this id :: " + id));
        departmentRepository.delete(department);
        }
    }
