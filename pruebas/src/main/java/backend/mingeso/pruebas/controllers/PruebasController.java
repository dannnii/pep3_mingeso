package backend.mingeso.pruebas.controllers;

import backend.mingeso.pruebas.entities.PruebasEntity;
import backend.mingeso.pruebas.services.PruebasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController
@RequestMapping("/pruebas")
public class PruebasController {
    @Autowired
    PruebasService pruebasService;

    @GetMapping
    public ResponseEntity<ArrayList<PruebasEntity>> listadoProblemas(){
        ArrayList<PruebasEntity> listaProblemas = pruebasService.obtenerData();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }
    // para obtener las preguntas de pruebas por dificultad

    @GetMapping("/{dificultad_prueba}")
    public ResponseEntity<ArrayList<PruebasEntity>> getByDif(@PathVariable("dificultad_prueba") String dificultad_prueba) {
        ArrayList<PruebasEntity> preguntas = pruebasService.obtenerDificultad(dificultad_prueba);
        if (preguntas.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    // para guardar una nueva pregunta
    @PostMapping
    public ResponseEntity<PruebasEntity> nuevoPregunta(@RequestBody PruebasEntity pruebas){
        PruebasEntity guardarProblema = pruebasService.savePregunta(pruebas);
        return ResponseEntity.ok(guardarProblema);
    }

}
