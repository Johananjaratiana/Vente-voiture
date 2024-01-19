package com.vente.voiture.function.annonce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vente.voiture.crud.service.MarqueService;
import com.vente.voiture.crud.service.ModeleService;
import com.vente.voiture.crud.service.TailleService;
import com.vente.voiture.crud.service.TransmissionService;
import com.vente.voiture.crud.service.TypeAnnonceService;
import com.vente.voiture.crud.service.TypeMoteurService;
import com.vente.voiture.crud.service.UsageService;
import com.vente.voiture.ws.structure.Response;
import com.vente.voiture.crud.service.CouleurService;
import com.vente.voiture.crud.service.EnergieService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/annnonces_utils")
public class DataCreationController {

    @Autowired
    private MarqueService marqueService;

    @Autowired
    private ModeleService modeleService;

    @Autowired
    private CouleurService couleurService;

    @Autowired
    private TailleService tailleService;

    @Autowired
    private UsageService usageService;

    @Autowired
    private EnergieService energieService;

    @Autowired
    private TransmissionService transmissionService;

    @Autowired
    private TypeAnnonceService typeAnnonceService;

    @Autowired
    private TypeMoteurService typeMoteurService;


    @GetMapping
    public Response GetDataCreationOfAnnonce() {
        Response response = new Response();
        try{
            DataCreator dataCreator = new DataCreator();
            dataCreator.setMarque(marqueService.getAllMarque());
            dataCreator.setModele(modeleService.getAllModele());
            dataCreator.setCouleur(couleurService.getAllCouleur());
            dataCreator.setTaille(tailleService.getAllTaille());
            dataCreator.setUsage(usageService.getAllUsage());
            dataCreator.setEnergie(energieService.getAllEnergie());
            dataCreator.setTransmission(transmissionService.getAllTransmission());
            dataCreator.setTypeAnnonce(typeAnnonceService.getAllTypeAnnonce());
            dataCreator.setTypeMoteur(typeMoteurService.getAllTypeMoteur());

            response.setDataOnSuccess(dataCreator);
        }catch(Exception ex){
            response.setError(ex.getMessage());
        }
        return response;
    }

}
