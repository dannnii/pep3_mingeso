package backend.mingeso.pruebas.repositories;

import backend.mingeso.pruebas.entities.PruebaEntity;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface PruebaRepository extends JpaRepository<PruebaRepository, Integer>{

}
