package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.Token;
import com.vente.voiture.crud.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class TokenService {
    @Autowired
    private TokenRepository tokenRepository;

    // Create
    public Token save(Token token) {
        return tokenRepository.save(token);
    }

    // Read
    public List<Token> getAllToken() {
        return (List<Token>) tokenRepository.findAll();
    }

    // GetById
    public Optional<Token> getTokenById(Long id) {
        return tokenRepository.findById(id);
    }

    // Update
    public Token updateToken(Long id, Token updatedToken) {
        if (tokenRepository.existsById(id)) {
            updatedToken.setId(id);
            return tokenRepository.save(updatedToken);
        }
        return null; // not found
    }

    // Delete
    public void deleteToken(Long id) {
        tokenRepository.deleteById(id);
    }
    // Add your service methods here

}
