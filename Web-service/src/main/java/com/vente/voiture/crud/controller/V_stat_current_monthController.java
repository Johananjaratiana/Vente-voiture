package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_stat_current_month;
import java.util.*;
import com.vente.voiture.crud.service.V_stat_current_monthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v_stat_current_months")
public class V_stat_current_monthController {
    @Autowired
    private V_stat_current_monthService v_stat_current_monthService;

    @PostMapping
    public V_stat_current_month createV_stat_current_month(@RequestBody V_stat_current_month V_stat_current_month) {
        return v_stat_current_monthService.save(V_stat_current_month);
    }

    @GetMapping
    public List<V_stat_current_month> getAllV_stat_current_month() {
        return v_stat_current_monthService.getAllV_stat_current_month();
    }

    @GetMapping("/{id}")
    public Optional<V_stat_current_month> getV_stat_current_monthById(@PathVariable Long id) {
        return v_stat_current_monthService.getV_stat_current_monthById(id);
    }

    @PutMapping("/{id}")
    public V_stat_current_month updateV_stat_current_month(@PathVariable Long id, @RequestBody V_stat_current_month V_stat_current_monthDetails) {
        return v_stat_current_monthService.updateV_stat_current_month(id, V_stat_current_monthDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteV_stat_current_month(@PathVariable Long id) {
        v_stat_current_monthService.deleteV_stat_current_month(id);
    }
}
