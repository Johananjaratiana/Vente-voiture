package com.vente.voiture.crud.repository;

import com.vente.voiture.crud.model.V_annonce_complet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface V_annonce_completRepository extends JpaRepository<V_annonce_complet, Long> {
}
