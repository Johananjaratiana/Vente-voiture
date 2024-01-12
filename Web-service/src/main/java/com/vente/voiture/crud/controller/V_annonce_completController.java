package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_annonce_complet;
import java.util.*;
import com.vente.voiture.crud.service.V_annonce_completService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v_annonce_complets")
public class V_annonce_completController {
    @Autowired
    private V_annonce_completService v_annonce_completService;

    @PostMapping
    public V_annonce_complet createV_annonce_complet(@RequestBody V_annonce_complet V_annonce_complet) {
        return v_annonce_completService.save(V_annonce_complet);
    }

    @GetMapping
    public List<V_annonce_complet> getAllV_annonce_complet() {
        return v_annonce_completService.getAllV_annonce_complet();
    }

    @GetMapping("/{id}")
    public Optional<V_annonce_complet> getV_annonce_completById(@PathVariable Long id) {
        return v_annonce_completService.getV_annonce_completById(id);
    }

    @PutMapping("/{id}")
    public V_annonce_complet updateV_annonce_complet(@PathVariable Long id, @RequestBody V_annonce_complet V_annonce_completDetails) {
        return v_annonce_completService.updateV_annonce_complet(id, V_annonce_completDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteV_annonce_complet(@PathVariable Long id) {
        v_annonce_completService.deleteV_annonce_complet(id);
    }
}
