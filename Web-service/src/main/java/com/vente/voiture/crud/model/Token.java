package com.vente.voiture.crud.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Id;

@Getter
@Setter
@Entity(name="token")
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="idusers")
    private Integer Idusers;

    @Column(name="isvalidate")
    private Object Isvalidate;

    @Column(name="dtexp")
    private java.sql.Date Dtexp;

    @Column(name="token")
    private String Token;


    // Constructors, getters, setters

}
