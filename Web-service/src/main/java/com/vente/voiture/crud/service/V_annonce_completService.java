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

    // Read
    public List<V_annonce_complet> getAllV_annonce_complet() {
        return (List<V_annonce_complet>) v_annonce_completRepository.findAll();
    }

    // GetById
    public Optional<V_annonce_complet> getV_annonce_completById(Long id) {
        return v_annonce_completRepository.findById(id);
    }
    // Add your service methods here

}
