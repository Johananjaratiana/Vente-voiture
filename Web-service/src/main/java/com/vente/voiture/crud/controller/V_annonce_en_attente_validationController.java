package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_annonce_en_attente_validation;
import java.util.*;
import com.vente.voiture.crud.service.V_annonce_en_attente_validationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v_annonce_en_attente_validations")
public class V_annonce_en_attente_validationController {
    @Autowired
    private V_annonce_en_attente_validationService v_annonce_en_attente_validationService;

    @PostMapping
    public V_annonce_en_attente_validation createV_annonce_en_attente_validation(@RequestBody V_annonce_en_attente_validation V_annonce_en_attente_validation) {
        return v_annonce_en_attente_validationService.save(V_annonce_en_attente_validation);
    }

    @GetMapping
    public List<V_annonce_en_attente_validation> getAllV_annonce_en_attente_validation() {
        return v_annonce_en_attente_validationService.getAllV_annonce_en_attente_validation();
    }

    @GetMapping("/{id}")
    public Optional<V_annonce_en_attente_validation> getV_annonce_en_attente_validationById(@PathVariable Long id) {
        return v_annonce_en_attente_validationService.getV_annonce_en_attente_validationById(id);
    }

    @PutMapping("/{id}")
    public V_annonce_en_attente_validation updateV_annonce_en_attente_validation(@PathVariable Long id, @RequestBody V_annonce_en_attente_validation V_annonce_en_attente_validationDetails) {
        return v_annonce_en_attente_validationService.updateV_annonce_en_attente_validation(id, V_annonce_en_attente_validationDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteV_annonce_en_attente_validation(@PathVariable Long id) {
        v_annonce_en_attente_validationService.deleteV_annonce_en_attente_validation(id);
    }
}
