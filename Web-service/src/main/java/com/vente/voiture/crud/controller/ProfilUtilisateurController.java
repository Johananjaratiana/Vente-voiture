package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.ProfilUtilisateur;
import java.util.*;
import com.vente.voiture.crud.service.ProfilUtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profil_utilisateurs")
public class ProfilUtilisateurController {
    @Autowired
    private ProfilUtilisateurService profil_utilisateurService;

    @PostMapping
    public ProfilUtilisateur createProfilUtilisateur(@RequestBody ProfilUtilisateur ProfilUtilisateur) {
        return profil_utilisateurService.save(ProfilUtilisateur);
    }

    @GetMapping
    public List<ProfilUtilisateur> getAllProfilUtilisateur() {
        return profil_utilisateurService.getAllProfilUtilisateur();
    }

    @GetMapping("/{id}")
    public Optional<ProfilUtilisateur> getProfilUtilisateurById(@PathVariable Long id) {
        return profil_utilisateurService.getProfilUtilisateurById(id);
    }

    @PutMapping("/{id}")
    public ProfilUtilisateur updateProfilUtilisateur(@PathVariable Long id, @RequestBody ProfilUtilisateur ProfilUtilisateurDetails) {
        return profil_utilisateurService.updateProfilUtilisateur(id, ProfilUtilisateurDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteProfilUtilisateur(@PathVariable Long id) {
        profil_utilisateurService.deleteProfilUtilisateur(id);
    }
}
