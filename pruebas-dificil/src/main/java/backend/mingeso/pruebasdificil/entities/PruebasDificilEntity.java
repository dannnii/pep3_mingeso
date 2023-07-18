package backend.mingeso.pruebasdificil.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;
@Entity
@Table(name = "pruebas_dificil")
@Data
@NoArgsConstructor(force = true)
@AllArgsConstructor
public class PruebasDificilEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String enunciado;
    private String codigo;
    private String respuesta;
}
