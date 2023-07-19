package backend.mingeso.pruebas.repositories;

import backend.mingeso.pruebas.entities.PruebasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PruebasRepository extends JpaRepository<PruebasEntity, Integer>{
    public ArrayList<PruebasEntity> findByDificultadPrueba(String dificultadPrueba);


}
