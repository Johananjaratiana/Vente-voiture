package com.vente.voiture.crud.repository;

import com.vente.voiture.crud.model.Modele;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModeleRepository extends JpaRepository<Modele, Long> {
}