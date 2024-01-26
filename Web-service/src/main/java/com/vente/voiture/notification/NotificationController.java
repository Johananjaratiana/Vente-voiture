package com.vente.voiture.notification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vente.voiture.ws.security.token.JwtTokenUtil;
import com.vente.voiture.ws.structure.Response;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/notification")
public class NotificationController {
    
    @Autowired
    FirebaseMessagingService firebaseMessagingService;

    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @PostMapping("/simple_message")
    public String SendNotificationByToken(@RequestBody NotificationMessage notificationMessage){
        return firebaseMessagingService.SendNotificationByToken(notificationMessage);
    }

    @PostMapping("/current_user")
    public Response createAnnonce(@RequestBody NotificationMessage notificationMessage, @RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {
        Response response = new Response();
        try{
            jwtTokenUtil.validateToken(authorizationHeader);
            String status = firebaseMessagingService.SendNotificationByToken(notificationMessage);
            response.setDataOnSuccess(status);
        }catch(Exception ex){
            response.setError(ex.getMessage());
        }
        return response;
    }

}
