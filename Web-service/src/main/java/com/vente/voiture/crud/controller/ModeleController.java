package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.Modele;
import java.util.*;
import com.vente.voiture.crud.service.ModeleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/modeles")
public class ModeleController {
    @Autowired
    private ModeleService modeleService;

    @PostMapping
    public Modele createModele(@RequestBody Modele Modele) {
        return modeleService.save(Modele);
    }

    @GetMapping
    public List<Modele> getAllModele() {
        return modeleService.getAllModele();
    }

    @GetMapping("/{id}")
    public Optional<Modele> getModeleById(@PathVariable Long id) {
        return modeleService.getModeleById(id);
    }

    @PutMapping("/{id}")
    public Modele updateModele(@PathVariable Long id, @RequestBody Modele ModeleDetails) {
        return modeleService.updateModele(id, ModeleDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteModele(@PathVariable Long id) {
        modeleService.deleteModele(id);
    }
}
