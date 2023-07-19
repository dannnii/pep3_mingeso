package backend.mingeso.pruebas.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;




@Entity
@Table(name = "pruebas")
@Data
@NoArgsConstructor(force = true)
@AllArgsConstructor
public class PruebasEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String dificultad_prueba;
    private String enunciado;
    private String codigo;
    private String respuesta;
}
