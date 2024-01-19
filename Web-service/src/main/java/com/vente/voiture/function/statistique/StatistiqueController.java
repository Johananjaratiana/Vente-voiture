package com.vente.voiture.function.statistique;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vente.voiture.ws.structure.Response;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/statistiques")
public class StatistiqueController {

    @GetMapping("/{year}")
    public Response getAnnonceById(@PathVariable Integer year) {
        Response response = new Response();
        try{
            response.setDataOnSuccess(StatByYear.GetStatByYear(year));
        }catch(Exception ex){
            response.setError(ex.getMessage());
        }
        return response;
    }
    
}
