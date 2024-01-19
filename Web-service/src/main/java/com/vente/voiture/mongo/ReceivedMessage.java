package com.vente.voiture.mongo;

public class ReceivedMessage {
    Integer id_other_user;
    String message;
    
    public Integer getId_other_user() {
        return id_other_user;
    }
    public void setId_other_user(Integer id_other_user) {
        this.id_other_user = id_other_user;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    
    
}
