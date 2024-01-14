package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_latest_annonce_vendu;
import com.vente.voiture.crud.repository.V_latest_annonce_venduRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_latest_annonce_venduService {
    @Autowired
    private V_latest_annonce_venduRepository v_latest_annonce_venduRepository;

    // Read
    public List<V_latest_annonce_vendu> getAllV_latest_annonce_vendu() {
        return (List<V_latest_annonce_vendu>) v_latest_annonce_venduRepository.findAll();
    }

    // GetById
    public Optional<V_latest_annonce_vendu> getV_latest_annonce_venduById(Long id) {
        return v_latest_annonce_venduRepository.findById(id);
    }
    // Add your service methods here

}
