package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.Annonce;
import com.vente.voiture.crud.repository.AnnonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class AnnonceService {
    @Autowired
    private AnnonceRepository annonceRepository;

    // Create
    public Annonce save(Annonce annonce) {
        return annonceRepository.save(annonce);
    }

    // Read
    public List<Annonce> getAllAnnonce() {
        return (List<Annonce>) annonceRepository.findAll();
    }

    // GetById
    public Optional<Annonce> getAnnonceById(Long id) {
        return annonceRepository.findById(id);
    }

    // Update
    public Annonce updateAnnonce(Long id, Annonce updatedAnnonce) {
        if (annonceRepository.existsById(id)) {
            updatedAnnonce.setId(id);
            return annonceRepository.save(updatedAnnonce);
        }
        return null; // not found
    }

    // Delete
    public void deleteAnnonce(Long id) {
        annonceRepository.deleteById(id);
    }
    // Add your service methods here

}
