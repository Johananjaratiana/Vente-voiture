package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_stat_current_year;
import java.util.*;
import com.vente.voiture.crud.service.V_stat_current_yearService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v_stat_current_years")
public class V_stat_current_yearController {
    @Autowired
    private V_stat_current_yearService v_stat_current_yearService;

    @PostMapping
    public V_stat_current_year createV_stat_current_year(@RequestBody V_stat_current_year V_stat_current_year) {
        return v_stat_current_yearService.save(V_stat_current_year);
    }

    @GetMapping
    public List<V_stat_current_year> getAllV_stat_current_year() {
        return v_stat_current_yearService.getAllV_stat_current_year();
    }

    @GetMapping("/{id}")
    public Optional<V_stat_current_year> getV_stat_current_yearById(@PathVariable Long id) {
        return v_stat_current_yearService.getV_stat_current_yearById(id);
    }

    @PutMapping("/{id}")
    public V_stat_current_year updateV_stat_current_year(@PathVariable Long id, @RequestBody V_stat_current_year V_stat_current_yearDetails) {
        return v_stat_current_yearService.updateV_stat_current_year(id, V_stat_current_yearDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteV_stat_current_year(@PathVariable Long id) {
        v_stat_current_yearService.deleteV_stat_current_year(id);
    }
}
