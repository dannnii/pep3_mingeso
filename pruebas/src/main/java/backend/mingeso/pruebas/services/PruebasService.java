package backend.mingeso.pruebas.services;

import backend.mingeso.pruebas.entities.PruebasEntity;
import backend.mingeso.pruebas.repositories.PruebasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service
public class PruebasService {
    @Autowired
    private PruebasRepository pruebasRepository;

    public ArrayList<PruebasEntity> obtenerData(){

        return (ArrayList<PruebasEntity>) pruebasRepository.findAll();
    }

    public PruebasEntity guardarPrueba(PruebasEntity pruebas) {

        return pruebasRepository.save(pruebas);
    }


}
