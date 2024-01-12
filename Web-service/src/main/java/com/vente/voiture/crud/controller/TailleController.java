package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.Taille;
import java.util.*;
import com.vente.voiture.crud.service.TailleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tailles")
public class TailleController {
    @Autowired
    private TailleService tailleService;

    @PostMapping
    public Taille createTaille(@RequestBody Taille Taille) {
        return tailleService.save(Taille);
    }

    @GetMapping
    public List<Taille> getAllTaille() {
        return tailleService.getAllTaille();
    }

    @GetMapping("/{id}")
    public Optional<Taille> getTailleById(@PathVariable Long id) {
        return tailleService.getTailleById(id);
    }

    @PutMapping("/{id}")
    public Taille updateTaille(@PathVariable Long id, @RequestBody Taille TailleDetails) {
        return tailleService.updateTaille(id, TailleDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTaille(@PathVariable Long id) {
        tailleService.deleteTaille(id);
    }
}
