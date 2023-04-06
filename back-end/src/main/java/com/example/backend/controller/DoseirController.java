package com.example.backend.controller;

import com.example.backend.modelsDossier.esf_all2;
import com.example.backend.modelsDossier.mv_auto_fl;
import com.example.backend.repositoryDossier.esf_all2Repo;
import com.example.backend.repositoryDossier.mv_auto_fl_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class DoseirController {
    @Autowired
    esf_all2Repo esfAll2Repo;
    @Autowired
    mv_auto_fl_repo mvAutoFlRepo;

    @GetMapping("/ch")
    public List<mv_auto_fl> getCh() {
        return mvAutoFlRepo.getUsersByLike("810615301348");
    }
}
