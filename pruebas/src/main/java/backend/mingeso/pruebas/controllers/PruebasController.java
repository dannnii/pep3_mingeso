package backend.mingeso.pruebas.controllers;

import backend.mingeso.pruebas.entities.PruebasEntity;
import backend.mingeso.pruebas.services.PruebasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


import java.util.List;

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

    @PostMapping
    public void nuevoPregunta(@RequestBody PruebasEntity pruebas) {

        pruebasService.guardarPrueba(pruebas);
    }










 /*   @GetMapping
    public ResponseEntity<List<PruebasEntity>> getAll(){
        List<PruebasEntity> lista_pruebas = pruebasService.getAll();
        if (lista_pruebas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(lista_pruebas);
    }

    @GetMapping("/{id")
    public ResponseEntity<PruebasEntity> getById(@PathVariable("id") int id){
        PruebasEntity pruebas = pruebasService.getPruebaById(id);
        if (pruebas==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(pruebas);
    }

    @PostMapping
    public ResponseEntity<PruebasEntity> save(@RequestBody PruebasEntity pruebas){
        PruebasEntity nueva_prueba = pruebasService.save(pruebas);
        return ResponseEntity.ok(pruebas);
    }
*/
}
