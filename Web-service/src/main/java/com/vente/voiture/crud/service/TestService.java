package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.Test;
import com.vente.voiture.crud.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    @Autowired
    private TestRepository testRepository;

    // Create
    public Test save(Test test) {
        return testRepository.save(test);
    }

    // Read
    public List<Test> getAllTest() {
        return (List<Test>) testRepository.findAll();
    }

    // GetById
    public Optional<Test> getTestById(Long id) {
        return testRepository.findById(id);
    }

    // Update
    public Test updateTest(Long id, Test updatedTest) {
        if (testRepository.existsById(id)) {
            updatedTest.setId(id);
            return testRepository.save(updatedTest);
        }
        return null; // not found
    }

    // Delete
    public void deleteTest(Long id) {
        testRepository.deleteById(id);
    }
    // Add your service methods here

}
