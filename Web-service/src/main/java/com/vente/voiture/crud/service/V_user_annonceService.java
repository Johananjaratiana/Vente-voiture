package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_user_annonce;
import com.vente.voiture.crud.repository.V_user_annonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class V_user_annonceService {
    @Autowired
    private V_user_annonceRepository v_user_annonceRepository;

    // Read
    public List<V_user_annonce> getAllV_user_annonce() {
        return (List<V_user_annonce>) v_user_annonceRepository.findAll();
    }

    // GetById
    public Optional<V_user_annonce> getV_user_annonceById(Long id) {
        return v_user_annonceRepository.findById(id);
    }
    // Add your service methods here

}
