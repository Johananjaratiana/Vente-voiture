package com.vente.voiture.crud.controller;

import com.vente.voiture.crud.model.Test;
import java.util.*;
import com.vente.voiture.crud.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tests")
public class TestController {
    @Autowired
    private TestService testService;

    @PostMapping
    public Test createTest(@RequestBody Test Test) {
        return testService.save(Test);
    }

    @GetMapping
    public List<Test> getAllTest() {
        return testService.getAllTest();
    }

    @GetMapping("/{id}")
    public Optional<Test> getTestById(@PathVariable Long id) {
        return testService.getTestById(id);
    }

    @PutMapping("/{id}")
    public Test updateTest(@PathVariable Long id, @RequestBody Test TestDetails) {
        return testService.updateTest(id, TestDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTest(@PathVariable Long id) {
        testService.deleteTest(id);
    }
}
