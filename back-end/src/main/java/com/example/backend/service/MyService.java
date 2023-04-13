package com.example.backend.service;

import com.example.backend.modelsDossier.*;
import com.example.backend.photo.modelsPhot.photoDb;
import com.example.backend.repositoryDossier.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MyService {
    @Autowired
    newPhotoService newPhotoService;
    @Autowired
    mv_auto_fl_repo mvAutoFlRepo;
    @Autowired
    mv_fl_repo mv_FlRepo;
    @Autowired
    omn_repo omn_repos;
    @Autowired
    orphans_repo orphans_repo;
    @Autowired
    adm_repo admRepo;
    @Autowired
    equipment_repo equipment_repo;
    @Autowired
    dormant_repo dormantRepo;
    @Autowired
    mv_ul_repo mv_ul_repo;
    private NodesFL tryAddPhoto(NodesFL node, String IIN) {
        try {
            List<photoDb> photos = new ArrayList<>();
            photos = newPhotoService.getPhotoByIIN(IIN);
            List<photoDb> photoDbs = new ArrayList<>();
            for(photoDb photoDb1: photos){
                photoDbs.add(photoDb1);
                node.setPhotoDbf(photoDbs);
            }
            return node;
        } catch (Exception e) {
            System.out.println(e);
        }
        return node;
    }
    private Map<String, Object> getPropertyMap(Object obj) {
        Map<String, Object> properties = new HashMap<>();

        Field[] fields = obj.getClass().getDeclaredFields();
        for (Field field: fields) {
            try {
                Object value = field.get(obj);
                properties.put(field.getName(), value);
            } catch (IllegalAccessException e){
//                e.printStackTrace();
            }
        }
        return properties;
    }

    public NodesFL getNode(String IIN){
        NodesFL myNode = new NodesFL();
        List<mv_auto_fl> myMv_auto_fl =  mvAutoFlRepo.getUsersByLike(IIN);
        List<mv_fl> myMv_fl =  mv_FlRepo.getUsersByLike(IIN);
        List<omn> myOmn =  omn_repos.getUsersByLike(IIN);
        List<orphans> myOrphans =  orphans_repo.getUsersByLike(IIN);
        List<adm> MyAdm =  admRepo.getUsersByLike(IIN);
        List<dormant> myDormant =  dormantRepo.getUsersByLike(IIN);
        List<equipment> myEquipment =  equipment_repo.getUsersByLike(IIN);
        omn myOmns =  omn_repos.getUsersByLikeIin_bins(IIN);
        myOmn.add(myOmns);
        myNode = tryAddPhoto(myNode,IIN);
        myNode.setMvFls(myMv_fl);
        myNode.setMvAutoFls(myMv_auto_fl);
        myNode.setOmns(myOmn);
        myNode.setOrphans(myOrphans);
        myNode.setAdms(MyAdm);
        myNode.setDormants(myDormant);
        myNode.setEquipment(myEquipment);
        return myNode;
    }
 public NodesUL getNodeUL(String BIN){
        NodesUL myNode = new NodesUL();
        List<mv_ul> myMv_ul =  mv_ul_repo.getUsersByLike(BIN);
        List<adm> MyAdm =  admRepo.getUsersByLikeBin(BIN);
        List<dormant> myDormant =  dormantRepo.getUsersByLike(BIN);
        List<equipment> myEquipment =  equipment_repo.getUsersByLike(BIN);
        List<omn> myOmns =  omn_repos.getUsersByLikeIin_bin(BIN);
        myNode.setMvUls(myMv_ul);
        myNode.setOmns(myOmns);
        myNode.setAdms(MyAdm);
        myNode.setDormants(myDormant);
        myNode.setEquipment(myEquipment);
        return myNode;
    }

}
