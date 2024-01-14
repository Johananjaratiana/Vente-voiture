package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_annonce_complet_ordered_by_type_annonce;
import java.util.*;
import com.vente.voiture.crud.service.V_annonce_complet_ordered_by_type_annonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v_annonce_complet_ordered_by_type_annonces")
public class V_annonce_complet_ordered_by_type_annonceController {
    @Autowired
    private V_annonce_complet_ordered_by_type_annonceService v_annonce_complet_ordered_by_type_annonceService;

    @GetMapping
    public List<V_annonce_complet_ordered_by_type_annonce> getAllV_annonce_complet_ordered_by_type_annonce() {
        return v_annonce_complet_ordered_by_type_annonceService.getAllV_annonce_complet_ordered_by_type_annonce();
    }

    @GetMapping("/{id}")
    public Optional<V_annonce_complet_ordered_by_type_annonce> getV_annonce_complet_ordered_by_type_annonceById(@PathVariable Long id) {
        return v_annonce_complet_ordered_by_type_annonceService.getV_annonce_complet_ordered_by_type_annonceById(id);
    }
}
