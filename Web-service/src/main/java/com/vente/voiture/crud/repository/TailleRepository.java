package com.vente.voiture.crud.repository;

import com.vente.voiture.crud.model.Taille;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TailleRepository extends JpaRepository<Taille, Long> {
}
