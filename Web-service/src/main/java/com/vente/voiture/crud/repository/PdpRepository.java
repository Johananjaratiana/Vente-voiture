package com.vente.voiture.crud.repository;

import com.vente.voiture.crud.model.Pdp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PdpRepository extends JpaRepository<Pdp, Long> {
}
