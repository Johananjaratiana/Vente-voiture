package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_stat_annonce_vendu_par_marque;
import com.vente.voiture.crud.repository.V_stat_annonce_vendu_par_marqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_stat_annonce_vendu_par_marqueService {
    @Autowired
    private V_stat_annonce_vendu_par_marqueRepository v_stat_annonce_vendu_par_marqueRepository;

    // Create
    public V_stat_annonce_vendu_par_marque save(V_stat_annonce_vendu_par_marque v_stat_annonce_vendu_par_marque) {
        return v_stat_annonce_vendu_par_marqueRepository.save(v_stat_annonce_vendu_par_marque);
    }

    // Read
    public List<V_stat_annonce_vendu_par_marque> getAllV_stat_annonce_vendu_par_marque() {
        return (List<V_stat_annonce_vendu_par_marque>) v_stat_annonce_vendu_par_marqueRepository.findAll();
    }

    // GetById
    public Optional<V_stat_annonce_vendu_par_marque> getV_stat_annonce_vendu_par_marqueById(Long id) {
        return v_stat_annonce_vendu_par_marqueRepository.findById(id);
    }

    // Update
    public V_stat_annonce_vendu_par_marque updateV_stat_annonce_vendu_par_marque(Long id, V_stat_annonce_vendu_par_marque updatedV_stat_annonce_vendu_par_marque) {
        if (v_stat_annonce_vendu_par_marqueRepository.existsById(id)) {
            updatedV_stat_annonce_vendu_par_marque.setId(id);
            return v_stat_annonce_vendu_par_marqueRepository.save(updatedV_stat_annonce_vendu_par_marque);
        }
        return null; // not found
    }

    // Delete
    public void deleteV_stat_annonce_vendu_par_marque(Long id) {
        v_stat_annonce_vendu_par_marqueRepository.deleteById(id);
    }
    // Add your service methods here

}
