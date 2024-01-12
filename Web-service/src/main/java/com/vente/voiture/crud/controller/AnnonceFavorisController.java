package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.AnnonceFavoris;
import java.util.*;
import com.vente.voiture.crud.service.AnnonceFavorisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/annonce_favoriss")
public class AnnonceFavorisController {
    @Autowired
    private AnnonceFavorisService annonce_favorisService;

    @PostMapping
    public AnnonceFavoris createAnnonceFavoris(@RequestBody AnnonceFavoris AnnonceFavoris) {
        return annonce_favorisService.save(AnnonceFavoris);
    }

    @GetMapping
    public List<AnnonceFavoris> getAllAnnonceFavoris() {
        return annonce_favorisService.getAllAnnonceFavoris();
    }

    @GetMapping("/{id}")
    public Optional<AnnonceFavoris> getAnnonceFavorisById(@PathVariable Long id) {
        return annonce_favorisService.getAnnonceFavorisById(id);
    }

    @PutMapping("/{id}")
    public AnnonceFavoris updateAnnonceFavoris(@PathVariable Long id, @RequestBody AnnonceFavoris AnnonceFavorisDetails) {
        return annonce_favorisService.updateAnnonceFavoris(id, AnnonceFavorisDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteAnnonceFavoris(@PathVariable Long id) {
        annonce_favorisService.deleteAnnonceFavoris(id);
    }
}
