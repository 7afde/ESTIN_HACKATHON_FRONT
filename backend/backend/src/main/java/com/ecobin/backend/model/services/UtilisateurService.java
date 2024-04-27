
package com.ecobin.backend.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecobin.backend.model.dal.entities.Utilisateur;
import com.ecobin.backend.model.dal.repositories.UtilisateurRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class UtilisateurService {
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    // Add your service methods here
    public Object addPoints(Object result) {
        try {
            if (result instanceof String) {
                String jsonString = (String) result;
                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode jsonNode = objectMapper.readValue(jsonString, JsonNode.class);

                Integer nfc = jsonNode.get("nfc").asInt();
                int verre = jsonNode.get("verre").asInt();
                int plastic = jsonNode.get("plastic").asInt();
                int organic = jsonNode.get("organic").asInt();

                Utilisateur utilisateur = utilisateurRepository.findByNfc(nfc);
                if (utilisateur != null) {
                    utilisateur.setPoints(utilisateur.getPoints() + (verre * 5 + plastic * 2 + organic * 3));
                    utilisateurRepository.save(utilisateur);
                    System.out.println("User " + utilisateur.getUsername() + " was added by "
                            + (verre * 5 + plastic * 2 + organic * 3) + " points!");
                } else {
                    System.out.println("User not found for NFC: " + nfc);
                }
            } else {
                System.out.println("Input is not a JSON string");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
