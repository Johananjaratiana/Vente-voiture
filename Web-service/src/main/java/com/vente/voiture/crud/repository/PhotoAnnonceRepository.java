package com.vente.voiture.crud.repository;

import com.vente.voiture.crud.model.PhotoAnnonce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PhotoAnnonceRepository extends JpaRepository<PhotoAnnonce, Long> {
    @Query("SELECT pa FROM photo_annonce pa WHERE pa.IdAnnonce = ?1")
    List<PhotoAnnonce> findByIdAnnonce(Integer IdAnnonce);
}
