package com.vente.voiture.mongo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vente.voiture.ws.structure.Response;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @GetMapping("/not_seen_message")
    public Response GetNotSeenMessage() {
        Response response = new Response();
        try{
            response.setDataOnSuccess(Message.GetNotSeenMessage(Integer.valueOf(1)));
        }catch(Exception ex){
            response.setError(ex.getMessage());
        }
        return response;
    }

    @GetMapping("/{id_other_user}")
    public Response GetMessageByTokenAndUser(@PathVariable Integer id_other_user) {
        Response response = new Response();
        try{
            response.setDataOnSuccess(Message.GetMessageByTokenAndUser());
        }catch(Exception ex){
            response.setError(ex.getMessage());
        }
        return response;
    }
}
