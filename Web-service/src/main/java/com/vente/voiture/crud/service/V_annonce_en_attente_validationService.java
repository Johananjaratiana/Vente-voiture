package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_annonce_en_attente_validation;
import com.vente.voiture.crud.repository.V_annonce_en_attente_validationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_annonce_en_attente_validationService {
    @Autowired
    private V_annonce_en_attente_validationRepository v_annonce_en_attente_validationRepository;

    // Create
    public V_annonce_en_attente_validation save(V_annonce_en_attente_validation v_annonce_en_attente_validation) {
        return v_annonce_en_attente_validationRepository.save(v_annonce_en_attente_validation);
    }

    // Read
    public List<V_annonce_en_attente_validation> getAllV_annonce_en_attente_validation() {
        return (List<V_annonce_en_attente_validation>) v_annonce_en_attente_validationRepository.findAll();
    }

    // GetById
    public Optional<V_annonce_en_attente_validation> getV_annonce_en_attente_validationById(Long id) {
        return v_annonce_en_attente_validationRepository.findById(id);
    }

    // Update
    public V_annonce_en_attente_validation updateV_annonce_en_attente_validation(Long id, V_annonce_en_attente_validation updatedV_annonce_en_attente_validation) {
        if (v_annonce_en_attente_validationRepository.existsById(id)) {
            updatedV_annonce_en_attente_validation.setId(id);
            return v_annonce_en_attente_validationRepository.save(updatedV_annonce_en_attente_validation);
        }
        return null; // not found
    }

    // Delete
    public void deleteV_annonce_en_attente_validation(Long id) {
        v_annonce_en_attente_validationRepository.deleteById(id);
    }
    // Add your service methods here

}
