package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.TypeMoteur;
import java.util.*;
import com.vente.voiture.crud.service.TypeMoteurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/type_moteurs")
public class TypeMoteurController {
    @Autowired
    private TypeMoteurService type_moteurService;

    @PostMapping
    public TypeMoteur createTypeMoteur(@RequestBody TypeMoteur TypeMoteur) {
        return type_moteurService.save(TypeMoteur);
    }

    @GetMapping
    public List<TypeMoteur> getAllTypeMoteur() {
        return type_moteurService.getAllTypeMoteur();
    }

    @GetMapping("/{id}")
    public Optional<TypeMoteur> getTypeMoteurById(@PathVariable Long id) {
        return type_moteurService.getTypeMoteurById(id);
    }

    @PutMapping("/{id}")
    public TypeMoteur updateTypeMoteur(@PathVariable Long id, @RequestBody TypeMoteur TypeMoteurDetails) {
        return type_moteurService.updateTypeMoteur(id, TypeMoteurDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTypeMoteur(@PathVariable Long id) {
        type_moteurService.deleteTypeMoteur(id);
    }
}
