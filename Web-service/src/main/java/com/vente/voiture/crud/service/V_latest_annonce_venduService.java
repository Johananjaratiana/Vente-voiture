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

    // Create
    public V_latest_annonce_vendu save(V_latest_annonce_vendu v_latest_annonce_vendu) {
        return v_latest_annonce_venduRepository.save(v_latest_annonce_vendu);
    }

    // Read
    public List<V_latest_annonce_vendu> getAllV_latest_annonce_vendu() {
        return (List<V_latest_annonce_vendu>) v_latest_annonce_venduRepository.findAll();
    }

    // GetById
    public Optional<V_latest_annonce_vendu> getV_latest_annonce_venduById(Long id) {
        return v_latest_annonce_venduRepository.findById(id);
    }

    // Update
    public V_latest_annonce_vendu updateV_latest_annonce_vendu(Long id, V_latest_annonce_vendu updatedV_latest_annonce_vendu) {
        if (v_latest_annonce_venduRepository.existsById(id)) {
            updatedV_latest_annonce_vendu.setId(id);
            return v_latest_annonce_venduRepository.save(updatedV_latest_annonce_vendu);
        }
        return null; // not found
    }

    // Delete
    public void deleteV_latest_annonce_vendu(Long id) {
        v_latest_annonce_venduRepository.deleteById(id);
    }
    // Add your service methods here

}
