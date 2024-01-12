package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_annonce_complet;
import com.vente.voiture.crud.repository.V_annonce_completRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_annonce_completService {
    @Autowired
    private V_annonce_completRepository v_annonce_completRepository;

    // Create
    public V_annonce_complet save(V_annonce_complet v_annonce_complet) {
        return v_annonce_completRepository.save(v_annonce_complet);
    }

    // Read
    public List<V_annonce_complet> getAllV_annonce_complet() {
        return (List<V_annonce_complet>) v_annonce_completRepository.findAll();
    }

    // GetById
    public Optional<V_annonce_complet> getV_annonce_completById(Long id) {
        return v_annonce_completRepository.findById(id);
    }

    // Update
    public V_annonce_complet updateV_annonce_complet(Long id, V_annonce_complet updatedV_annonce_complet) {
        if (v_annonce_completRepository.existsById(id)) {
            updatedV_annonce_complet.setId(id);
            return v_annonce_completRepository.save(updatedV_annonce_complet);
        }
        return null; // not found
    }

    // Delete
    public void deleteV_annonce_complet(Long id) {
        v_annonce_completRepository.deleteById(id);
    }
    // Add your service methods here

}
