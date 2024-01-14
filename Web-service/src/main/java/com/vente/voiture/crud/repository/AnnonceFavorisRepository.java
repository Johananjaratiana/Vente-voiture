package com.vente.voiture.crud.repository;

import com.vente.voiture.crud.model.AnnonceFavoris;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnonceFavorisRepository extends JpaRepository<AnnonceFavoris, Long> {
}
