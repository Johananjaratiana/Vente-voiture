package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.Transmission;
import java.util.*;
import com.vente.voiture.crud.service.TransmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transmissions")
public class TransmissionController {
    @Autowired
    private TransmissionService transmissionService;

    @PostMapping
    public Transmission createTransmission(@RequestBody Transmission Transmission) {
        return transmissionService.save(Transmission);
    }

    @GetMapping
    public List<Transmission> getAllTransmission() {
        return transmissionService.getAllTransmission();
    }

    @GetMapping("/{id}")
    public Optional<Transmission> getTransmissionById(@PathVariable Long id) {
        return transmissionService.getTransmissionById(id);
    }

    @PutMapping("/{id}")
    public Transmission updateTransmission(@PathVariable Long id, @RequestBody Transmission TransmissionDetails) {
        return transmissionService.updateTransmission(id, TransmissionDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTransmission(@PathVariable Long id) {
        transmissionService.deleteTransmission(id);
    }
}
