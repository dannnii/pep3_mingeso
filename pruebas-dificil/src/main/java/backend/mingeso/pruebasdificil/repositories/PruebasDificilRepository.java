package backend.mingeso.pruebasdificil.repositories;

import backend.mingeso.pruebasdificil.entities.PruebasDificilEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PruebasDificilRepository extends JpaRepository<PruebasDificilEntity, Integer>{
}
