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


    public ArrayList<PruebasEntity> obtenerData(){

        return (ArrayList<PruebasEntity>) pruebasRepository.findAll();
    }


    public PruebasEntity savePregunta(PruebasEntity prueba){
        PruebasEntity guardarProblema = pruebasRepository.save(prueba);
        return guardarProblema;
    }


    /*


     buscar por el tipo de prueba o dificultad
        public PruebasEntity getPruebaByDificultad(String dificultad_prueba){
            return PruebasRepository.findByDificultad(String).orElse(null);
        }


    public PruebasEntity save(PruebasEntity pruebas){
        PruebasEntity nuevo_personal = PruebasRepository.save(pruebas);
        return nuevo_personal;
    }

    */




}
