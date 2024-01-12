package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_stat_annonce_vendu_par_marque;
import java.util.*;
import com.vente.voiture.crud.service.V_stat_annonce_vendu_par_marqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v_stat_annonce_vendu_par_marques")
public class V_stat_annonce_vendu_par_marqueController {
    @Autowired
    private V_stat_annonce_vendu_par_marqueService v_stat_annonce_vendu_par_marqueService;

    @PostMapping
    public V_stat_annonce_vendu_par_marque createV_stat_annonce_vendu_par_marque(@RequestBody V_stat_annonce_vendu_par_marque V_stat_annonce_vendu_par_marque) {
        return v_stat_annonce_vendu_par_marqueService.save(V_stat_annonce_vendu_par_marque);
    }

    @GetMapping
    public List<V_stat_annonce_vendu_par_marque> getAllV_stat_annonce_vendu_par_marque() {
        return v_stat_annonce_vendu_par_marqueService.getAllV_stat_annonce_vendu_par_marque();
    }

    @GetMapping("/{id}")
    public Optional<V_stat_annonce_vendu_par_marque> getV_stat_annonce_vendu_par_marqueById(@PathVariable Long id) {
        return v_stat_annonce_vendu_par_marqueService.getV_stat_annonce_vendu_par_marqueById(id);
    }

    @PutMapping("/{id}")
    public V_stat_annonce_vendu_par_marque updateV_stat_annonce_vendu_par_marque(@PathVariable Long id, @RequestBody V_stat_annonce_vendu_par_marque V_stat_annonce_vendu_par_marqueDetails) {
        return v_stat_annonce_vendu_par_marqueService.updateV_stat_annonce_vendu_par_marque(id, V_stat_annonce_vendu_par_marqueDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteV_stat_annonce_vendu_par_marque(@PathVariable Long id) {
        v_stat_annonce_vendu_par_marqueService.deleteV_stat_annonce_vendu_par_marque(id);
    }
}
