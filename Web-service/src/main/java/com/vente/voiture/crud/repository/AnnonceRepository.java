package com.vente.voiture.crud.repository;

import com.vente.voiture.crud.model.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnonceRepository extends JpaRepository<Annonce, Long> {
}
