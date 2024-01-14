package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.Usage;
import java.util.*;
import com.vente.voiture.crud.service.UsageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usages")
public class UsageController {
    @Autowired
    private UsageService usageService;

    @PostMapping
    public Usage createUsage(@RequestBody Usage Usage) {
        return usageService.save(Usage);
    }

    @GetMapping
    public List<Usage> getAllUsage() {
        return usageService.getAllUsage();
    }

    @GetMapping("/{id}")
    public Optional<Usage> getUsageById(@PathVariable Long id) {
        return usageService.getUsageById(id);
    }

    @PutMapping("/{id}")
    public Usage updateUsage(@PathVariable Long id, @RequestBody Usage UsageDetails) {
        return usageService.updateUsage(id, UsageDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteUsage(@PathVariable Long id) {
        usageService.deleteUsage(id);
    }
}
