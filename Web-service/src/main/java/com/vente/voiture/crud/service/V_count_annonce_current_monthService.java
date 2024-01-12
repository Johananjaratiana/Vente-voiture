package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_count_annonce_current_month;
import com.vente.voiture.crud.repository.V_count_annonce_current_monthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_count_annonce_current_monthService {
    @Autowired
    private V_count_annonce_current_monthRepository v_count_annonce_current_monthRepository;

    // Create
    public V_count_annonce_current_month save(V_count_annonce_current_month v_count_annonce_current_month) {
        return v_count_annonce_current_monthRepository.save(v_count_annonce_current_month);
    }

    // Read
    public List<V_count_annonce_current_month> getAllV_count_annonce_current_month() {
        return (List<V_count_annonce_current_month>) v_count_annonce_current_monthRepository.findAll();
    }

    // GetById
    public Optional<V_count_annonce_current_month> getV_count_annonce_current_monthById(Long id) {
        return v_count_annonce_current_monthRepository.findById(id);
    }

    // Update
    public V_count_annonce_current_month updateV_count_annonce_current_month(Long id, V_count_annonce_current_month updatedV_count_annonce_current_month) {
        if (v_count_annonce_current_monthRepository.existsById(id)) {
            updatedV_count_annonce_current_month.setId(id);
            return v_count_annonce_current_monthRepository.save(updatedV_count_annonce_current_month);
        }
        return null; // not found
    }

    // Delete
    public void deleteV_count_annonce_current_month(Long id) {
        v_count_annonce_current_monthRepository.deleteById(id);
    }
    // Add your service methods here

}
