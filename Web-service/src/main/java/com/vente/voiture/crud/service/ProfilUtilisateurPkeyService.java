package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.ProfilUtilisateurPkey;
import com.vente.voiture.crud.repository.ProfilUtilisateurPkeyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class ProfilUtilisateurPkeyService {
    @Autowired
    private ProfilUtilisateurPkeyRepository profil_utilisateur_pkeyRepository;

    // Create
    public ProfilUtilisateurPkey save(ProfilUtilisateurPkey profil_utilisateur_pkey) {
        return profil_utilisateur_pkeyRepository.save(profil_utilisateur_pkey);
    }

    // Read
    public List<ProfilUtilisateurPkey> getAllProfilUtilisateurPkey() {
        return (List<ProfilUtilisateurPkey>) profil_utilisateur_pkeyRepository.findAll();
    }

    // GetById
    public Optional<ProfilUtilisateurPkey> getProfilUtilisateurPkeyById(Long id) {
        return profil_utilisateur_pkeyRepository.findById(id);
    }

    // Update
    public ProfilUtilisateurPkey updateProfilUtilisateurPkey(Long id, ProfilUtilisateurPkey updatedProfilUtilisateurPkey) {
        if (profil_utilisateur_pkeyRepository.existsById(id)) {
            updatedProfilUtilisateurPkey.setId(id);
            return profil_utilisateur_pkeyRepository.save(updatedProfilUtilisateurPkey);
        }
        return null; // not found
    }

    // Delete
    public void deleteProfilUtilisateurPkey(Long id) {
        profil_utilisateur_pkeyRepository.deleteById(id);
    }
    // Add your service methods here

}
