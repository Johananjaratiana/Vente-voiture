package com.vente.voiture.ws.security.user;

import com.vente.voiture.ws.security.user.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Long> {
}
