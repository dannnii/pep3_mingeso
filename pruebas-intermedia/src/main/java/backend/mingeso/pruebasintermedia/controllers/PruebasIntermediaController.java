package backend.mingeso.pruebasintermedia.controllers;

import backend.mingeso.pruebasintermedia.entities.PruebasIntermediaEntity;
import backend.mingeso.pruebasintermedia.services.PruebasIntermediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/intermedia")
public class PruebasIntermediaController {
    @Autowired
    PruebasIntermediaService pruebasIntermediaService;

    @GetMapping
    public ResponseEntity<ArrayList<PruebasIntermediaEntity>> listadoProblemas(){
        ArrayList<PruebasIntermediaEntity> listaProblemas = pruebasIntermediaService.obtenerData();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }

    @PostMapping
    public void nuevoPregunta(@RequestBody PruebasIntermediaEntity pruebasIntermedia) {

        pruebasIntermediaService.guardarPrueba(pruebasIntermedia);
    }

}
