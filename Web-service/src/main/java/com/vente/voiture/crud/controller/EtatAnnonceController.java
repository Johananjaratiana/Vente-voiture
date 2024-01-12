package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.EtatAnnonce;
import java.util.*;
import com.vente.voiture.crud.service.EtatAnnonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/etat_annonces")
public class EtatAnnonceController {
    @Autowired
    private EtatAnnonceService etat_annonceService;

    @PostMapping
    public EtatAnnonce createEtatAnnonce(@RequestBody EtatAnnonce EtatAnnonce) {
        return etat_annonceService.save(EtatAnnonce);
    }

    @GetMapping
    public List<EtatAnnonce> getAllEtatAnnonce() {
        return etat_annonceService.getAllEtatAnnonce();
    }

    @GetMapping("/{id}")
    public Optional<EtatAnnonce> getEtatAnnonceById(@PathVariable Long id) {
        return etat_annonceService.getEtatAnnonceById(id);
    }

    @PutMapping("/{id}")
    public EtatAnnonce updateEtatAnnonce(@PathVariable Long id, @RequestBody EtatAnnonce EtatAnnonceDetails) {
        return etat_annonceService.updateEtatAnnonce(id, EtatAnnonceDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteEtatAnnonce(@PathVariable Long id) {
        etat_annonceService.deleteEtatAnnonce(id);
    }
}
