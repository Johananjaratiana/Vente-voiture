package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.Energie;
import java.util.*;
import com.vente.voiture.crud.service.EnergieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/energies")
public class EnergieController {
    @Autowired
    private EnergieService energieService;

    @PostMapping
    public Energie createEnergie(@RequestBody Energie Energie) {
        return energieService.save(Energie);
    }

    @GetMapping
    public List<Energie> getAllEnergie() {
        return energieService.getAllEnergie();
    }

    @GetMapping("/{id}")
    public Optional<Energie> getEnergieById(@PathVariable Long id) {
        return energieService.getEnergieById(id);
    }

    @PutMapping("/{id}")
    public Energie updateEnergie(@PathVariable Long id, @RequestBody Energie EnergieDetails) {
        return energieService.updateEnergie(id, EnergieDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteEnergie(@PathVariable Long id) {
        energieService.deleteEnergie(id);
    }
}
