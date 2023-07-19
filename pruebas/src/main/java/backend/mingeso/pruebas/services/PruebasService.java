package backend.mingeso.pruebas.services;

import backend.mingeso.pruebas.entities.PruebasEntity;
import backend.mingeso.pruebas.repositories.PruebasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;


@Service
public class PruebasService {
    @Autowired
    private PruebasRepository pruebasRepository;

    @Autowired
    RestTemplate restTemplate;

    public ArrayList<PruebasEntity> obtenerData(){

        return (ArrayList<PruebasEntity>) pruebasRepository.findAll();
    }

    public PruebasEntity guardarPrueba(PruebasEntity pruebas) {

        return pruebasRepository.save(pruebas);
    }



    /*
        public List<PruebasEntity> getAll(){
            return PruebasRepository.findAll();
        }


     buscar por el tipo de prueba o dificultad
        public PruebasEntity getPersonalById(int id){
            return PruebasRepository.findById(id).orElse(null);
        }


    public PruebasEntity save(PruebasEntity pruebas){
        PruebasEntity nuevo_personal = PruebasRepository.save(pruebas);
        return nuevo_personal;
    }

    */




}
