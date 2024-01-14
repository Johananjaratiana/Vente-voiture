package com.vente.voiture.ws.security.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.vente.voiture.ws.services.DatabaseConnection;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity(name="users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="mdp")
    private String Mdp;

    @Column(name="addresse")
    private String Addresse;

    @Column(name="telephone")
    private String Telephone;

    @Column(name="idprofile")
    private Integer Idprofile;

    @Column(name="nom")
    private String Nom;

    @Column(name="prenom")
    private String Prenom;

    @Column(name="email")
    private String Email;

    @Column(name="dtn")
    private java.sql.Date Dtn;

    public static Users VerifyExistingUsers(String email, String mdp) {
        Users users = null;
        try {
            try (Connection connection = DatabaseConnection.GetConnection()) {
                String sql = "SELECT * FROM users WHERE email = ? AND mdp = ?";
                PreparedStatement preparedStatement = connection.prepareStatement(sql);

                preparedStatement.setString(1, email);
                preparedStatement.setString(2, mdp);

                ResultSet resultSet = preparedStatement.executeQuery();

                if (resultSet.next()) {
                    users = new Users();
                    users.setId(resultSet.getLong("id"));
                    users.setIdprofile(resultSet.getInt("idprofile"));
                    users.setNom(resultSet.getString("nom"));                    
                    users.setMdp(resultSet.getString("mdp"));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return users;
    }
}
