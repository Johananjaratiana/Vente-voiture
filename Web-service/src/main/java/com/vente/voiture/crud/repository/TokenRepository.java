package com.vente.voiture.crud.repository;

import com.vente.voiture.crud.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token, Long> {
}
