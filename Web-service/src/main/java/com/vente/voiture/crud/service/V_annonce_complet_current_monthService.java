package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_annonce_complet_current_month;
import com.vente.voiture.crud.repository.V_annonce_complet_current_monthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_annonce_complet_current_monthService {
    @Autowired
    private V_annonce_complet_current_monthRepository v_annonce_complet_current_monthRepository;

    // Read
    public List<V_annonce_complet_current_month> getAllV_annonce_complet_current_month() {
        return (List<V_annonce_complet_current_month>) v_annonce_complet_current_monthRepository.findAll();
    }

    // GetById
    public Optional<V_annonce_complet_current_month> getV_annonce_complet_current_monthById(Long id) {
        return v_annonce_complet_current_monthRepository.findById(id);
    }
    // Add your service methods here

}
