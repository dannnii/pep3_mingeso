package backend.mingeso.pruebasdificil.services;


import backend.mingeso.pruebasdificil.entities.PruebasDificilEntity;
import backend.mingeso.pruebasdificil.repositories.PruebasDificilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service

public class PruebasDificilService {
    @Autowired
    private PruebasDificilRepository pruebasDificilRepository;

    public ArrayList<PruebasDificilEntity> obtenerData(){

        return (ArrayList<PruebasDificilEntity>) pruebasDificilRepository.findAll();
    }

    public PruebasDificilEntity guardarPrueba(PruebasDificilEntity pruebasDificil) {

        return pruebasDificilRepository.save(pruebasDificil);
    }
}
