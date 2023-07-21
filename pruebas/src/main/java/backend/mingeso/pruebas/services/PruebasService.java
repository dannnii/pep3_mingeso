package backend.mingeso.pruebas.services;

import backend.mingeso.pruebas.entities.PruebasEntity;
import backend.mingeso.pruebas.repositories.PruebasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service
public class PruebasService {
    @Autowired
    private PruebasRepository pruebasRepository;


    public ArrayList<PruebasEntity> obtenerData(){

        return (ArrayList<PruebasEntity>) pruebasRepository.findAll();
    }

    public ArrayList<PruebasEntity> obtenerDificultad(String dificultadPrueba) {
        ArrayList<PruebasEntity> preguntas = pruebasRepository.findByDificultadPrueba(dificultadPrueba);
        return preguntas;
    }

/*
    public PruebasEntity savePregunta(PruebasEntity pruebasEntity) {
        PruebasEntity nuevaPregunta = pruebasRepository.save(pruebasEntity);
        return nuevaPregunta;
}
*/

    public ResponseEntity<PruebasEntity> savePregunta(PruebasEntity pruebasEntity) {
        // Validar si ya existe una pregunta con el mismo enunciado
        PruebasEntity preguntaExistente = pruebasRepository.findByEnunciado(pruebasEntity.getEnunciado());
        if (preguntaExistente != null) {
            // Si ya existe una pregunta con el mismo enunciado, retornar un error
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        // Si la pregunta no existe, guardarla en la base de datos
        PruebasEntity nuevaPregunta = pruebasRepository.save(pruebasEntity);
        return ResponseEntity.ok(nuevaPregunta);
    }



}
