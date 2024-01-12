package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_stat_current_month;
import com.vente.voiture.crud.repository.V_stat_current_monthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_stat_current_monthService {
    @Autowired
    private V_stat_current_monthRepository v_stat_current_monthRepository;

    // Create
    public V_stat_current_month save(V_stat_current_month v_stat_current_month) {
        return v_stat_current_monthRepository.save(v_stat_current_month);
    }

    // Read
    public List<V_stat_current_month> getAllV_stat_current_month() {
        return (List<V_stat_current_month>) v_stat_current_monthRepository.findAll();
    }

    // GetById
    public Optional<V_stat_current_month> getV_stat_current_monthById(Long id) {
        return v_stat_current_monthRepository.findById(id);
    }

    // Update
    public V_stat_current_month updateV_stat_current_month(Long id, V_stat_current_month updatedV_stat_current_month) {
        if (v_stat_current_monthRepository.existsById(id)) {
            updatedV_stat_current_month.setId(id);
            return v_stat_current_monthRepository.save(updatedV_stat_current_month);
        }
        return null; // not found
    }

    // Delete
    public void deleteV_stat_current_month(Long id) {
        v_stat_current_monthRepository.deleteById(id);
    }
    // Add your service methods here

}
