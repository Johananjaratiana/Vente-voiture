package com.vente.voiture.function.annonce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vente.voiture.crud.model.PhotoAnnonce;
import com.vente.voiture.crud.service.PhotoAnnonceService;
import com.vente.voiture.function.image.ImageService;
import com.vente.voiture.ws.security.token.JwtTokenUtil;
import com.vente.voiture.ws.structure.Response;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/photo_annonce")
public class Photo_AnnonceController {

    @Autowired
    private PhotoAnnonceService photo_annonceService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private ImageService imageService;

    @PostMapping
    public Response createPhotoAnnonce(@RequestBody PhotoAnnonce photoAnnonce, @RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {
        Response response = new Response();
        try{
            jwtTokenUtil.validateToken(authorizationHeader);
            photoAnnonce.setImage(imageService.upload(photoAnnonce.getImage()));
            response.setDataOnSuccess(photo_annonceService.save(photoAnnonce));
        }catch(Exception ex){
            response.setError(ex.getMessage());
        }
        return response;
    }
    
}