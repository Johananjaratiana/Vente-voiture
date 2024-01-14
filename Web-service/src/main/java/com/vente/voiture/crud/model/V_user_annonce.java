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
@Entity(name="v_user_annonce")
public class V_user_annonce {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="nom_marque")
    private String NomMarque;

    @Column(name="nom_users")
    private String NomUsers;

    @Column(name="nom_transmission")
    private String NomTransmission;

    @Column(name="nom_energie")
    private String NomEnergie;

    @Column(name="email_users")
    private String EmailUsers;

    @Column(name="nom_modele")
    private String NomModele;

    @Column(name="nom_type_annonce")
    private String NomTypeAnnonce;

    @Column(name="commission_type_annonce")
    private Double CommissionTypeAnnonce;

    @Column(name="nom_type_moteur")
    private String NomTypeMoteur;

    @Column(name="telephone_users")
    private String TelephoneUsers;

    @Column(name="prenom_users")
    private String PrenomUsers;


    // Constructors, getters, setters

}
