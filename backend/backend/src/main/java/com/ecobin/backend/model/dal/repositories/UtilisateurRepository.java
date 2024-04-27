
package com.ecobin.backend.model.dal.repositories;

import com.ecobin.backend.model.dal.entities.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, String> {
    // Add your repository methods here
    public Utilisateur findByNfc(Integer nfc);
}
