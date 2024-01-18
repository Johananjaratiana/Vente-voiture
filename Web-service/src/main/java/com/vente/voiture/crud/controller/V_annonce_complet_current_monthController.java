package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_annonce_complet_current_month;
import java.util.*;
import com.vente.voiture.crud.service.V_annonce_complet_current_monthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v_annonce_complet_current_months")
public class V_annonce_complet_current_monthController {
    @Autowired
    private V_annonce_complet_current_monthService v_annonce_complet_current_monthService;

    @GetMapping
    public List<V_annonce_complet_current_month> getAllV_annonce_complet_current_month() {
        return v_annonce_complet_current_monthService.getAllV_annonce_complet_current_month();
    }

    @GetMapping("/{id}")
    public Optional<V_annonce_complet_current_month> getV_annonce_complet_current_monthById(@PathVariable Long id) {
        return v_annonce_complet_current_monthService.getV_annonce_complet_current_monthById(id);
    }
}
