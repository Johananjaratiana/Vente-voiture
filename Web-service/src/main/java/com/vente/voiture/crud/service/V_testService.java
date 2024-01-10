package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_test;
import com.vente.voiture.crud.repository.V_testRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_testService {
    @Autowired
    private V_testRepository v_testRepository;

    // Create
    public V_test save(V_test v_test) {
        return v_testRepository.save(v_test);
    }

    // Read
    public List<V_test> getAllV_test() {
        return (List<V_test>) v_testRepository.findAll();
    }

    // GetById
    public Optional<V_test> getV_testById(Long id) {
        return v_testRepository.findById(id);
    }

    // Update
    public V_test updateV_test(Long id, V_test updatedV_test) {
        if (v_testRepository.existsById(id)) {
            updatedV_test.setId(id);
            return v_testRepository.save(updatedV_test);
        }
        return null; // not found
    }

    // Delete
    public void deleteV_test(Long id) {
        v_testRepository.deleteById(id);
    }
    // Add your service methods here

}
