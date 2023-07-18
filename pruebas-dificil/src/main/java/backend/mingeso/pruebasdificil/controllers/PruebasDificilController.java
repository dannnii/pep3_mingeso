package backend.mingeso.pruebasdificil.controllers;

import backend.mingeso.pruebasdificil.entities.PruebasDificilEntity;
import backend.mingeso.pruebasdificil.services.PruebasDificilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/dificil")
public class PruebasDificilController {
    @Autowired
    PruebasDificilService pruebasDificilService;

    @GetMapping
    public ResponseEntity<ArrayList<PruebasDificilEntity>> listadoProblemas(){
        ArrayList<PruebasDificilEntity> listaProblemas = pruebasDificilService.obtenerData();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }

    @PostMapping
    public void nuevoPregunta(@RequestBody PruebasDificilEntity pruebasDificil) {

        pruebasDificilService.guardarPrueba(pruebasDificil);
    }

}
