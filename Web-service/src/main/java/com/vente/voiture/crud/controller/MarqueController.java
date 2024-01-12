package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.Marque;
import java.util.*;
import com.vente.voiture.crud.service.MarqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/marques")
public class MarqueController {
    @Autowired
    private MarqueService marqueService;

    @PostMapping
    public Marque createMarque(@RequestBody Marque Marque) {
        return marqueService.save(Marque);
    }

    @GetMapping
    public List<Marque> getAllMarque() {
        return marqueService.getAllMarque();
    }

    @GetMapping("/{id}")
    public Optional<Marque> getMarqueById(@PathVariable Long id) {
        return marqueService.getMarqueById(id);
    }

    @PutMapping("/{id}")
    public Marque updateMarque(@PathVariable Long id, @RequestBody Marque MarqueDetails) {
        return marqueService.updateMarque(id, MarqueDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteMarque(@PathVariable Long id) {
        marqueService.deleteMarque(id);
    }
}
