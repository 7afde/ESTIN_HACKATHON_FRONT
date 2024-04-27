
package com.ecobin.backend.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecobin.backend.model.dal.repositories.TrashRepository;

@Service
public class TrashService {
    @Autowired
    private TrashRepository trashRepository;
    // Add your service methods here
}
