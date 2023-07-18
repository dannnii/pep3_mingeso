package backend.mingeso.pruebasintermedia.services;

import backend.mingeso.pruebasintermedia.entities.PruebasIntermediaEntity;
import backend.mingeso.pruebasintermedia.repositories.PruebasIntermediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service
public class PruebasIntermediaService {
    @Autowired
    private PruebasIntermediaRepository pruebasIntermediaRepository;

    public ArrayList<PruebasIntermediaEntity> obtenerData(){

        return (ArrayList<PruebasIntermediaEntity>) pruebasIntermediaRepository.findAll();
    }
    public PruebasIntermediaEntity guardarPrueba(PruebasIntermediaEntity pruebasIntermedia) {

            return pruebasIntermediaRepository.save(pruebasIntermedia);
    }


}

