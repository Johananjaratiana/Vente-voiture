package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.V_test;
import java.util.*;
import com.vente.voiture.crud.service.V_testService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v_tests")
public class V_testController {
    @Autowired
    private V_testService v_testService;

    @PostMapping
    public V_test createV_test(@RequestBody V_test V_test) {
        return v_testService.save(V_test);
    }

    @GetMapping
    public List<V_test> getAllV_test() {
        return v_testService.getAllV_test();
    }

    @GetMapping("/{id}")
    public Optional<V_test> getV_testById(@PathVariable Long id) {
        return v_testService.getV_testById(id);
    }

    @PutMapping("/{id}")
    public V_test updateV_test(@PathVariable Long id, @RequestBody V_test V_testDetails) {
        return v_testService.updateV_test(id, V_testDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteV_test(@PathVariable Long id) {
        v_testService.deleteV_test(id);
    }
}
