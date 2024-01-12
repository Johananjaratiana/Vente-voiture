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
@Entity(name="v_latest_annonce_vendu")
public class V_latest_annonce_vendu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="nom_users")
    private String NomUsers;

    @Column(name="id_modele")
    private Integer IdModele;

    @Column(name="id_marque")
    private Integer IdMarque;

    @Column(name="id_type_moteur")
    private Integer IdTypeMoteur;

    @Column(name="date_annonce")
    private java.sql.Date DateAnnonce;

    @Column(name="email_users")
    private String EmailUsers;

    @Column(name="couleur")
    private String Couleur;

    @Column(name="description")
    private String Description;

    @Column(name="prenom_users")
    private String PrenomUsers;

    @Column(name="commission_obtenue")
    private Double CommissionObtenue;

    @Column(name="consommation")
    private Double Consommation;

    @Column(name="nb_place")
    private Integer NbPlace;

    @Column(name="nom_marque")
    private String NomMarque;

    @Column(name="nom_transmission")
    private String NomTransmission;

    @Column(name="nom_energie")
    private String NomEnergie;

    @Column(name="id_users")
    private Integer IdUsers;

    @Column(name="nom_type_annonce")
    private String NomTypeAnnonce;

    @Column(name="nom_type_moteur")
    private String NomTypeMoteur;

    @Column(name="version")
    private String Version;

    @Column(name="prix_vente")
    private Double PrixVente;

    @Column(name="id_energie")
    private Integer IdEnergie;

    @Column(name="id_transmission")
    private Integer IdTransmission;

    @Column(name="puissance")
    private Integer Puissance;

    @Column(name="nb_vitesse")
    private Integer NbVitesse;

    @Column(name="nom_modele")
    private String NomModele;

    @Column(name="commission_type_annonce")
    private Double CommissionTypeAnnonce;

    @Column(name="id_type_annonce")
    private Integer IdTypeAnnonce;

    @Column(name="telephone_users")
    private String TelephoneUsers;

    @Column(name="status")
    private Integer Status;


    // Constructors, getters, setters

}
