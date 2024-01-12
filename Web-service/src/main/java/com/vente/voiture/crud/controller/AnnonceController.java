package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.Annonce;
import java.util.*;
import com.vente.voiture.crud.service.AnnonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/annonces")
public class AnnonceController {
    @Autowired
    private AnnonceService annonceService;

    @PostMapping
    public Annonce createAnnonce(@RequestBody Annonce Annonce) {
        return annonceService.save(Annonce);
    }

    @GetMapping
    public List<Annonce> getAllAnnonce() {
        return annonceService.getAllAnnonce();
    }

    @GetMapping("/{id}")
    public Optional<Annonce> getAnnonceById(@PathVariable Long id) {
        return annonceService.getAnnonceById(id);
    }

    @PutMapping("/{id}")
    public Annonce updateAnnonce(@PathVariable Long id, @RequestBody Annonce AnnonceDetails) {
        return annonceService.updateAnnonce(id, AnnonceDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteAnnonce(@PathVariable Long id) {
        annonceService.deleteAnnonce(id);
    }
}
