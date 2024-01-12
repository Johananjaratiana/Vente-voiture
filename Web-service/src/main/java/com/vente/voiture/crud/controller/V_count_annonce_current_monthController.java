package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_count_annonce_current_month;
import java.util.*;
import com.vente.voiture.crud.service.V_count_annonce_current_monthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v_count_annonce_current_months")
public class V_count_annonce_current_monthController {
    @Autowired
    private V_count_annonce_current_monthService v_count_annonce_current_monthService;

    @PostMapping
    public V_count_annonce_current_month createV_count_annonce_current_month(@RequestBody V_count_annonce_current_month V_count_annonce_current_month) {
        return v_count_annonce_current_monthService.save(V_count_annonce_current_month);
    }

    @GetMapping
    public List<V_count_annonce_current_month> getAllV_count_annonce_current_month() {
        return v_count_annonce_current_monthService.getAllV_count_annonce_current_month();
    }

    @GetMapping("/{id}")
    public Optional<V_count_annonce_current_month> getV_count_annonce_current_monthById(@PathVariable Long id) {
        return v_count_annonce_current_monthService.getV_count_annonce_current_monthById(id);
    }

    @PutMapping("/{id}")
    public V_count_annonce_current_month updateV_count_annonce_current_month(@PathVariable Long id, @RequestBody V_count_annonce_current_month V_count_annonce_current_monthDetails) {
        return v_count_annonce_current_monthService.updateV_count_annonce_current_month(id, V_count_annonce_current_monthDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteV_count_annonce_current_month(@PathVariable Long id) {
        v_count_annonce_current_monthService.deleteV_count_annonce_current_month(id);
    }
}
