package com.ecobin.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.ecobin.backend.model.dal.entities.Utilisateur;
import com.ecobin.backend.model.dal.repositories.UtilisateurRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*")
public class UtilisateurController {

    @Autowired
    UtilisateurRepository utilisateurRepository;

    @PostMapping("/addUtilisateur")
    public Utilisateur addUtilisateur(@RequestBody Utilisateur utilisateur) {
        // TODO: process POST request

        return utilisateurRepository.save(utilisateur);
    }
}
