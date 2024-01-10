package com.vente.voiture.ws.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.vente.voiture.ws.security.token.Token;
import com.vente.voiture.ws.security.user.ProfilUtilisateur;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;


@Component
public class JwtTokenUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration;

    public String generateToken(int userId) throws Exception {
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + expiration);

        String token = Jwts.builder()
                .setSubject(Integer.toString(userId))
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();

        try{
            Token.saveToken(userId, token, expirationDate);
            return token;
        }catch(Exception ex){
            throw new Exception(ex.getMessage());
        }
    }

    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public String validateToken(String token) throws Exception {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            // Vérifier si le token est présent dans la base de données et n'a pas expiré
            if(Token.isTokenValid(token))return ProfilUtilisateur.GetProfilUtilisateurByUserId(Integer.parseInt(getUsernameFromToken(token))).getNom();
            return null;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
}

