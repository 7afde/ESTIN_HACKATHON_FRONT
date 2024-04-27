package com.ecobin.backend.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ecobin.backend.model.dal.entities.Admin;
import com.ecobin.backend.model.dal.entities.Subtrash;
import com.ecobin.backend.model.dal.entities.Trash;
import com.ecobin.backend.model.dal.entities.TypeEnum;
import com.ecobin.backend.model.dal.repositories.AdminRepository;
import com.ecobin.backend.model.dal.repositories.SubtrashRepository;
import com.ecobin.backend.model.dal.repositories.TrashRepository;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private TrashRepository trashRepository;

    @Autowired
    private SubtrashRepository subtrashRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public void run(String... args) throws Exception {
        // Check if roles are already initialized
        if (trashRepository.findAll().isEmpty()) {
            Trash trash1 = new Trash();
            trash1.setNeighborhood("Tichi");
            trashRepository.save(trash1);
            Trash trash2 = new Trash();
            trash2.setNeighborhood("Akbou");
            trashRepository.save(trash2);
            Trash trash3 = new Trash();
            trash3.setNeighborhood("Amizour");
            trashRepository.save(trash3);
        }

        if (adminRepository.findAll().isEmpty()) {
            adminRepository.save(new Admin("admin", "admin@gmail.com", "admin"));
        }

        if (subtrashRepository.findAll().isEmpty()) {
            Trash tichiTrash = trashRepository.findByNeighborhood("Tichi");

            Subtrash subtrash1 = new Subtrash();
            subtrash1.setTrash(tichiTrash);
            subtrash1.setType(TypeEnum.GLASS);
            subtrash1.setAvailableSapce(100f);
            subtrashRepository.save(subtrash1);

            Subtrash subtrash2 = new Subtrash();
            subtrash2.setTrash(tichiTrash);
            subtrash2.setType(TypeEnum.PLASTIC);
            subtrash2.setAvailableSapce(100f);
            subtrashRepository.save(subtrash2);

            Subtrash subtrash3 = new Subtrash();
            subtrash3.setTrash(tichiTrash);
            subtrash3.setType(TypeEnum.ORGANIC);
            subtrash3.setAvailableSapce(100f);
            subtrashRepository.save(subtrash3);

            Trash akbouTrash = trashRepository.findByNeighborhood("Akbou");

            Subtrash subtrash4 = new Subtrash();
            subtrash4.setTrash(akbouTrash);
            subtrash4.setType(TypeEnum.GLASS);
            subtrash4.setAvailableSapce(100f);
            subtrashRepository.save(subtrash4);

            Subtrash subtrash5 = new Subtrash();
            subtrash5.setTrash(akbouTrash);
            subtrash5.setType(TypeEnum.PLASTIC);
            subtrash5.setAvailableSapce(100f);
            subtrashRepository.save(subtrash5);

            Subtrash subtrash6 = new Subtrash();
            subtrash6.setTrash(akbouTrash);
            subtrash6.setType(TypeEnum.ORGANIC);
            subtrash6.setAvailableSapce(100f);
            subtrashRepository.save(subtrash6);

            Trash amizouTrash = trashRepository.findByNeighborhood("Amizour");

            Subtrash subtrash7 = new Subtrash();
            subtrash7.setTrash(amizouTrash);
            subtrash7.setType(TypeEnum.GLASS);
            subtrash7.setAvailableSapce(100f);
            subtrashRepository.save(subtrash7);

            Subtrash subtrash8 = new Subtrash();
            subtrash8.setTrash(amizouTrash);
            subtrash8.setType(TypeEnum.PLASTIC);
            subtrash8.setAvailableSapce(100f);
            subtrashRepository.save(subtrash8);

            Subtrash subtrash9 = new Subtrash();
            subtrash9.setTrash(amizouTrash);
            subtrash9.setType(TypeEnum.ORGANIC);
            subtrash9.setAvailableSapce(100f);
            subtrashRepository.save(subtrash9);
        }
    }
}
