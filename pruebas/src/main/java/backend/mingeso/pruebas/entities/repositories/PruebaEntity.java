package backend.mingeso.pruebas.entities.repositories;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;


@Entity
@Table(name = "prueba")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PruebaEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String dificultad_pregunta;
    private String enunciado;
    private String codigo;
    private String respuesta;
}
