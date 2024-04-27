
package com.ecobin.backend.model.dal.repositories;

import com.ecobin.backend.model.dal.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, String> {
    // Add your repository methods here
}
