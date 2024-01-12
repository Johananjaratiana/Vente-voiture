package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.ProfilUtilisateurPkey;
import java.util.*;
import com.vente.voiture.crud.service.ProfilUtilisateurPkeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profil_utilisateur_pkeys")
public class ProfilUtilisateurPkeyController {
    @Autowired
    private ProfilUtilisateurPkeyService profil_utilisateur_pkeyService;

    @PostMapping
    public ProfilUtilisateurPkey createProfilUtilisateurPkey(@RequestBody ProfilUtilisateurPkey ProfilUtilisateurPkey) {
        return profil_utilisateur_pkeyService.save(ProfilUtilisateurPkey);
    }

    @GetMapping
    public List<ProfilUtilisateurPkey> getAllProfilUtilisateurPkey() {
        return profil_utilisateur_pkeyService.getAllProfilUtilisateurPkey();
    }

    @GetMapping("/{id}")
    public Optional<ProfilUtilisateurPkey> getProfilUtilisateurPkeyById(@PathVariable Long id) {
        return profil_utilisateur_pkeyService.getProfilUtilisateurPkeyById(id);
    }

    @PutMapping("/{id}")
    public ProfilUtilisateurPkey updateProfilUtilisateurPkey(@PathVariable Long id, @RequestBody ProfilUtilisateurPkey ProfilUtilisateurPkeyDetails) {
        return profil_utilisateur_pkeyService.updateProfilUtilisateurPkey(id, ProfilUtilisateurPkeyDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteProfilUtilisateurPkey(@PathVariable Long id) {
        profil_utilisateur_pkeyService.deleteProfilUtilisateurPkey(id);
    }
}
