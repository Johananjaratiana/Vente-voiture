package com.vente.voiture.function.annonce.filtre;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.vente.voiture.crud.model.V_annonce_complet;
import com.vente.voiture.ws.security.user.Users;
import java.util.List;
import java.util.ArrayList;

public class FilterSelection {
    Integer[] marque;
    Integer[] modele;
    Double prix_min;
    Double prix_max;
    Integer[] energie;
    Integer[] transmission;
    Integer[] taille;
    Integer[] type_moteur;
    Integer[] couleur;
    Integer[] usage;

    public String BuildWhereStatement(){
        return "";
    }
    
    public List<V_annonce_complet> GetAnnonceComplet(Long id, Connection connection){
        List<V_annonce_complet> result = new ArrayList<V_annonce_complet>(); 
        V_annonce_complet temp;
        try {
            String sql = "SELECT * FROM v_annonce_complet WHERE id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);

            preparedStatement.setLong(1, id);

            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                temp = new V_annonce_complet();
                // temp.setId(resultSet.getLong("id"));
                result.add(temp);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
