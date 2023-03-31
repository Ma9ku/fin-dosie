package com.example.backend.repositoryDossier;

import com.example.backend.modelsDossier.photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface newPhotoRepo extends JpaRepository<photo, Long> {
    photo findByIin(String iin);
}
