package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_annonce_complet_ordered_by_type_annonce;
import com.vente.voiture.crud.repository.V_annonce_complet_ordered_by_type_annonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_annonce_complet_ordered_by_type_annonceService {
    @Autowired
    private V_annonce_complet_ordered_by_type_annonceRepository v_annonce_complet_ordered_by_type_annonceRepository;

    // Read
    public List<V_annonce_complet_ordered_by_type_annonce> getAllV_annonce_complet_ordered_by_type_annonce() {
        return (List<V_annonce_complet_ordered_by_type_annonce>) v_annonce_complet_ordered_by_type_annonceRepository.findAll();
    }

    // GetById
    public Optional<V_annonce_complet_ordered_by_type_annonce> getV_annonce_complet_ordered_by_type_annonceById(Long id) {
        return v_annonce_complet_ordered_by_type_annonceRepository.findById(id);
    }
    // Add your service methods here

}
