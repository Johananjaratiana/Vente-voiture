package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_latest_annonce_vendu;
import java.util.*;
import com.vente.voiture.crud.service.V_latest_annonce_venduService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v_latest_annonce_vendus")
public class V_latest_annonce_venduController {
    @Autowired
    private V_latest_annonce_venduService v_latest_annonce_venduService;

    @PostMapping
    public V_latest_annonce_vendu createV_latest_annonce_vendu(@RequestBody V_latest_annonce_vendu V_latest_annonce_vendu) {
        return v_latest_annonce_venduService.save(V_latest_annonce_vendu);
    }

    @GetMapping
    public List<V_latest_annonce_vendu> getAllV_latest_annonce_vendu() {
        return v_latest_annonce_venduService.getAllV_latest_annonce_vendu();
    }

    @GetMapping("/{id}")
    public Optional<V_latest_annonce_vendu> getV_latest_annonce_venduById(@PathVariable Long id) {
        return v_latest_annonce_venduService.getV_latest_annonce_venduById(id);
    }

    @PutMapping("/{id}")
    public V_latest_annonce_vendu updateV_latest_annonce_vendu(@PathVariable Long id, @RequestBody V_latest_annonce_vendu V_latest_annonce_venduDetails) {
        return v_latest_annonce_venduService.updateV_latest_annonce_vendu(id, V_latest_annonce_venduDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteV_latest_annonce_vendu(@PathVariable Long id) {
        v_latest_annonce_venduService.deleteV_latest_annonce_vendu(id);
    }
}
