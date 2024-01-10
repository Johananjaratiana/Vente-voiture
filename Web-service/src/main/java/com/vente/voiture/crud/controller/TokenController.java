package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.Token;
import java.util.*;
import com.vente.voiture.crud.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tokens")
public class TokenController {
    @Autowired
    private TokenService tokenService;

    @PostMapping
    public Token createToken(@RequestBody Token Token) {
        return tokenService.save(Token);
    }

    @GetMapping
    public List<Token> getAllToken() {
        return tokenService.getAllToken();
    }

    @GetMapping("/{id}")
    public Optional<Token> getTokenById(@PathVariable Long id) {
        return tokenService.getTokenById(id);
    }

    @PutMapping("/{id}")
    public Token updateToken(@PathVariable Long id, @RequestBody Token TokenDetails) {
        return tokenService.updateToken(id, TokenDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteToken(@PathVariable Long id) {
        tokenService.deleteToken(id);
    }
}
