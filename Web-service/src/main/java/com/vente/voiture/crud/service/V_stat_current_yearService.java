package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_stat_current_year;
import com.vente.voiture.crud.repository.V_stat_current_yearRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_stat_current_yearService {
    @Autowired
    private V_stat_current_yearRepository v_stat_current_yearRepository;

    // Create
    public V_stat_current_year save(V_stat_current_year v_stat_current_year) {
        return v_stat_current_yearRepository.save(v_stat_current_year);
    }

    // Read
    public List<V_stat_current_year> getAllV_stat_current_year() {
        return (List<V_stat_current_year>) v_stat_current_yearRepository.findAll();
    }

    // GetById
    public Optional<V_stat_current_year> getV_stat_current_yearById(Long id) {
        return v_stat_current_yearRepository.findById(id);
    }

    // Update
    public V_stat_current_year updateV_stat_current_year(Long id, V_stat_current_year updatedV_stat_current_year) {
        if (v_stat_current_yearRepository.existsById(id)) {
            updatedV_stat_current_year.setId(id);
            return v_stat_current_yearRepository.save(updatedV_stat_current_year);
        }
        return null; // not found
    }

    // Delete
    public void deleteV_stat_current_year(Long id) {
        v_stat_current_yearRepository.deleteById(id);
    }
    // Add your service methods here

}
