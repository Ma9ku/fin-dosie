package com.example.backend.modelsDossier;

import com.example.backend.photo.modelsPhot.*;


import java.util.List;

public class NodesFL {
    private List<mv_fl> mvFls;

    private List<photoDb> photoDbf;
    private List<mv_auto_fl> mvAutoFls;
    private List<omn> omns;
    private List<orphans> orphanss;
    private List<equipment> equipment;
    private List<dormant> dormants;
    private List<adm> adms;
    private List<fl_relatives> fl_relatives;
    private List<reg_address_fl> regAddressFls;

    private List<pdl> pdls;



    public List<pdl> getPdls() {
        return pdls;
    }

    public void setPdls(List<pdl> pdls) {
        this.pdls = pdls;
    }

    public List<reg_address_fl> getRegAddressFls() {
        return regAddressFls;
    }

    public void setRegAddressFls(List<reg_address_fl> regAddressFls) {
        this.regAddressFls = regAddressFls;
    }

    public List<com.example.backend.photo.modelsPhot.fl_relatives> getFl_relatives() {
        return fl_relatives;
    }

    public void setFl_relatives(List<com.example.backend.photo.modelsPhot.fl_relatives> fl_relatives) {
        this.fl_relatives = fl_relatives;
    }

    public List<orphans> getOrphanss() {
        return orphanss;
    }

    public void setOrphanss(List<orphans> orphanss) {
        this.orphanss = orphanss;
    }

    public List<com.example.backend.modelsDossier.equipment> getEquipment() {
        return equipment;
    }

    public void setEquipment(List<com.example.backend.modelsDossier.equipment> equipment) {
        this.equipment = equipment;
    }

    public List<dormant> getDormants() {
        return dormants;
    }

    public void setDormants(List<dormant> dormants) {
        this.dormants = dormants;
    }

    public List<adm> getAdms() {
        return adms;
    }

    public void setAdms(List<adm> adms) {
        this.adms = adms;
    }

    public List<com.example.backend.modelsDossier.orphans> getOrphans() {
        return orphanss;
    }

    public void setOrphans(List<com.example.backend.modelsDossier.orphans> orphans) {
        this.orphanss = orphans;
    }

    public List<omn> getOmns() {
        return omns;
    }

    public void setOmns(List<omn> omns) {
        this.omns = omns;
    }

    public List<mv_fl> getMvFls() {
        return mvFls;
    }

    public void setMvFls(List<mv_fl> mvFls) {
        this.mvFls = mvFls;
    }

    public List<mv_auto_fl> getMvAutoFls() {
        return mvAutoFls;
    }

    public void setMvAutoFls(List<mv_auto_fl> mvAutoFls) {
        this.mvAutoFls = mvAutoFls;
    }

    public List<photoDb> getPhotoDbf() {
        return photoDbf;
    }

    public void setPhotoDbf(List<photoDb> photoDbf) {
        this.photoDbf = photoDbf;
    }



}
