package backend.mingeso.pruebas.controllers;

import backend.mingeso.pruebas.entities.PruebasEntity;
import backend.mingeso.pruebas.entities.repositories.PruebasEntity;
import backend.mingeso.pruebas.services.PruebasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/prueba")
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

    @PostMapping
    public void nuevoPregunta(@RequestBody PruebasEntity pruebas) {
        pruebasService.guardarPrueba(pruebas);
    }

}
