package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_annonce_complet;
import java.util.*;
import com.vente.voiture.crud.service.V_annonce_completService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v_annonce_complets")
public class V_annonce_completController {
    @Autowired
    private V_annonce_completService v_annonce_completService;

    @GetMapping
    public List<V_annonce_complet> getAllV_annonce_complet() {
        return v_annonce_completService.getAllV_annonce_complet();
    }

    @GetMapping("/{id}")
    public Optional<V_annonce_complet> getV_annonce_completById(@PathVariable Long id) {
        return v_annonce_completService.getV_annonce_completById(id);
    }
}
