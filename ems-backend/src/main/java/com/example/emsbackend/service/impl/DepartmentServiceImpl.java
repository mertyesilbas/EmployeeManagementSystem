package com.example.emsbackend.service.impl;

import com.example.emsbackend.dto.DepartmentDto;
import com.example.emsbackend.entity.Department;
import com.example.emsbackend.exception.ResourceNotFoundException;
import com.example.emsbackend.mapper.DepartmentMapper;
import com.example.emsbackend.repository.DepartmentRepository;
import com.example.emsbackend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService
    {
    private DepartmentRepository departmentRepository;

    /*--------------------CREATE DEPARTMENT START---------------------*/
    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto)
        {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
        }
    /*--------------------CREATE DEPARTMENT END---------------------*/

    /*--------------------GET DEPARTMENT BY ID START---------------------*/
    @Override
    public DepartmentDto getDepartmentById(Long id)
        {
        Department department = departmentRepository.findById(id)
                                                    .orElseThrow(() -> new ResourceNotFoundException("Department not found for this id :: " + id));
        return DepartmentMapper.mapToDepartmentDto(department);
        }
    /*--------------------GET DEPARTMENT BY ID END---------------------*/

    /*--------------------GET ALL DEPARTMENTS START---------------------*/
    @Override
    public List<DepartmentDto> getAllDepartments()
        {
        List<Department> departments = departmentRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
        return departments.stream().map(DepartmentMapper::mapToDepartmentDto).collect(Collectors.toList());
        }
    /*--------------------GET ALL DEPARTMENTS END---------------------*/

    /*--------------------UPDATE DEPARTMENT START---------------------*/
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
        return DepartmentMapper.mapToDepartmentDto(departmentRepository.save(department));
        }
    /*--------------------UPDATE DEPARTMENT END---------------------*/

    /*--------------------DELETE DEPARTMENT START---------------------*/
    @Override
    public void deleteDepartment(Long id)
        {
        Department department = departmentRepository.findById(id)
                                                    .orElseThrow(() -> new ResourceNotFoundException("Department not found for this id :: " + id));
        departmentRepository.delete(department);
        }
    /*--------------------DELETE DEPARTMENT END---------------------*/

    }

