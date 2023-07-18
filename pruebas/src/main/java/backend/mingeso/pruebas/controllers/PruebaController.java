package backend.mingeso.pruebas.controllers;

import backend.mingeso.pruebas.services.PruebaService;
import backend.mingeso.pruebas.entities.PruebaEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;


@Restcontroller
@RequestMapping("/prueba")
public class PruebaController {
    @Autowired
    PruebaService pruebaService;

    @GetMapping
    public ResponseEntity<ArrayList<PruebaEntity>> listadoProblemas(){
        ArrayList<PruebaEntity> listaProblemas = pruebaService.obtenerData();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }
}
