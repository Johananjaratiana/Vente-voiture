package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_user_annonce;
import java.util.*;
import com.vente.voiture.crud.service.V_user_annonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v_user_annonces")
public class V_user_annonceController {
    @Autowired
    private V_user_annonceService v_user_annonceService;

    @GetMapping
    public List<V_user_annonce> getAllV_user_annonce() {
        return v_user_annonceService.getAllV_user_annonce();
    }

    @GetMapping("/{id}")
    public Optional<V_user_annonce> getV_user_annonceById(@PathVariable Long id) {
        return v_user_annonceService.getV_user_annonceById(id);
    }
}
