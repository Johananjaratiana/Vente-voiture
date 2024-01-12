package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.PhotoAnnonce;
import java.util.*;
import com.vente.voiture.crud.service.PhotoAnnonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/photo_annonces")
public class PhotoAnnonceController {
    @Autowired
    private PhotoAnnonceService photo_annonceService;

    @PostMapping
    public PhotoAnnonce createPhotoAnnonce(@RequestBody PhotoAnnonce PhotoAnnonce) {
        return photo_annonceService.save(PhotoAnnonce);
    }

    @GetMapping
    public List<PhotoAnnonce> getAllPhotoAnnonce() {
        return photo_annonceService.getAllPhotoAnnonce();
    }

    @GetMapping("/{id}")
    public Optional<PhotoAnnonce> getPhotoAnnonceById(@PathVariable Long id) {
        return photo_annonceService.getPhotoAnnonceById(id);
    }

    @PutMapping("/{id}")
    public PhotoAnnonce updatePhotoAnnonce(@PathVariable Long id, @RequestBody PhotoAnnonce PhotoAnnonceDetails) {
        return photo_annonceService.updatePhotoAnnonce(id, PhotoAnnonceDetails);
    }

    @DeleteMapping("/{id}")
    public void deletePhotoAnnonce(@PathVariable Long id) {
        photo_annonceService.deletePhotoAnnonce(id);
    }
}
