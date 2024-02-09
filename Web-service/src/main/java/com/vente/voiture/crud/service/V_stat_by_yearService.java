package com.vente.voiture.crud.service;

import com.vente.voiture.crud.model.V_stat_by_year;
import com.vente.voiture.crud.repository.V_stat_by_yearRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class V_stat_by_yearService {
    @Autowired
    private V_stat_by_yearRepository v_stat_by_yearRepository;

    // Read
    public List<V_stat_by_year> getAllV_stat_by_year() {
        return v_stat_by_yearRepository.findAll();
    }

    // Read
    public Page<V_stat_by_year> getAllV_stat_by_year(Pageable pageable) {
        return v_stat_by_yearRepository.findAll(pageable);
    }

    // GetById
    public Optional<V_stat_by_year> getV_stat_by_yearById(Long id) {
        return v_stat_by_yearRepository.findById(id);
    }

    // Add your service methods here

}
