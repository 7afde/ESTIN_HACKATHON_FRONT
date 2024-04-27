
package com.ecobin.backend.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecobin.backend.model.dal.repositories.UtilisateurRepository;

@Service
public class UtilisateurService {
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    // Add your service methods here
    public String addPoints(Object result) {
        return "";
    }
}
