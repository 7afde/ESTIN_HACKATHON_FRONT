
package com.ecobin.backend.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecobin.backend.model.dal.repositories.SubtrashRepository;

@Service
public class SubtrashService {
    @Autowired
    private SubtrashRepository subtrashRepository;
    // Add your service methods here
}
