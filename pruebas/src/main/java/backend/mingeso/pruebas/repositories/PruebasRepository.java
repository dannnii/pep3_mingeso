package backend.mingeso.pruebas.repositories;

import backend.mingeso.pruebas.entities.PruebasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PruebasRepository extends JpaRepository<PruebasRepository, Integer>{

}
