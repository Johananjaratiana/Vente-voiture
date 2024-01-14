package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.Pdp;
import java.util.*;
import com.vente.voiture.crud.service.PdpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pdps")
public class PdpController {
    @Autowired
    private PdpService pdpService;

    @PostMapping
    public Pdp createPdp(@RequestBody Pdp Pdp) {
        return pdpService.save(Pdp);
    }

    @GetMapping
    public List<Pdp> getAllPdp() {
        return pdpService.getAllPdp();
    }

    @GetMapping("/{id}")
    public Optional<Pdp> getPdpById(@PathVariable Long id) {
        return pdpService.getPdpById(id);
    }

    @PutMapping("/{id}")
    public Pdp updatePdp(@PathVariable Long id, @RequestBody Pdp PdpDetails) {
        return pdpService.updatePdp(id, PdpDetails);
    }

    @DeleteMapping("/{id}")
    public void deletePdp(@PathVariable Long id) {
        pdpService.deletePdp(id);
    }
}
