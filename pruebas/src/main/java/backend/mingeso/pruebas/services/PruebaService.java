package backend.mingeso.pruebas.services;

import backend.mingeso.pruebas.entities.PruebaEntity;
import backend.mingeso.pruebas.repositories.PruebaRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class PruebaService {
    @Autowired
    private PruebaRepository pruebaRepository;

    public ArrayList<PruebaEntity> obtenerData(){
        return (ArrayList<PruebaEntity>) pruebaRepository.findAll();
    }

}
