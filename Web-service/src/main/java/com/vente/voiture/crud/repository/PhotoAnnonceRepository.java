package com.vente.voiture.crud.repository;

import com.vente.voiture.crud.model.PhotoAnnonce;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotoAnnonceRepository extends JpaRepository<PhotoAnnonce, Long> {
}
