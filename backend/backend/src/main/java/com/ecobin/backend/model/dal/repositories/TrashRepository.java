
package com.ecobin.backend.model.dal.repositories;

import com.ecobin.backend.model.dal.entities.Trash;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrashRepository extends JpaRepository<Trash, String> {
    // Add your repository methods here
    Trash findByNeighborhood(String neighborhood);
}
