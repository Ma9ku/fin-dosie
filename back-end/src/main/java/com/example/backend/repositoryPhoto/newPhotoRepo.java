package com.example.backend.repositoryPhoto;

import com.example.backend.modelsPhoto.photoDb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface newPhotoRepo extends JpaRepository<photoDb, Long> {
    photoDb findByIin(String iin);
}
