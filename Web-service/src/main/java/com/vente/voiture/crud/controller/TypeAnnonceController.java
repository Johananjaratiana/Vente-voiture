package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.TypeAnnonce;
import java.util.*;
import com.vente.voiture.crud.service.TypeAnnonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/type_annonces")
public class TypeAnnonceController {
    @Autowired
    private TypeAnnonceService type_annonceService;

    @PostMapping
    public TypeAnnonce createTypeAnnonce(@RequestBody TypeAnnonce TypeAnnonce) {
        return type_annonceService.save(TypeAnnonce);
    }

    @GetMapping
    public List<TypeAnnonce> getAllTypeAnnonce() {
        return type_annonceService.getAllTypeAnnonce();
    }

    @GetMapping("/{id}")
    public Optional<TypeAnnonce> getTypeAnnonceById(@PathVariable Long id) {
        return type_annonceService.getTypeAnnonceById(id);
    }

    @PutMapping("/{id}")
    public TypeAnnonce updateTypeAnnonce(@PathVariable Long id, @RequestBody TypeAnnonce TypeAnnonceDetails) {
        return type_annonceService.updateTypeAnnonce(id, TypeAnnonceDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTypeAnnonce(@PathVariable Long id) {
        type_annonceService.deleteTypeAnnonce(id);
    }
}
