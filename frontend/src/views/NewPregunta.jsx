import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "/src/styles/NewPregunta.css";
const NewPregunta = () => {

  const [enunciado, setEnunciado] = useState('');
  const [codigo, setCodigo] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [dificultad, setDificultad] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enunciado", enunciado);
    console.log("codigo", codigo);
    console.log("respuesta", respuesta);
    console.log("dificultad", dificultad);
    
    if (enunciado && codigo && respuesta && dificultad) {
      const data = {
        enunciado,
        codigo,
        respuesta,
        dificultadPrueba: dificultad
      };
      axios.post('http://localhost:8080/pruebas/agregar-pregunta', data)
        .then(response => {
          console.log(response.data);
          alert("Pregunta subida");
        })
        .catch(error => {
          // Aquí puedes manejar los errores
          console.error(error);
        });
    } else {
      alert("Ingrese todos los datos");
    }

  };

  const handleChangeInput = (e) => {
    console.log("ajdslkasdj",e.target.name);
    if (e.target.name === "enunciado") {
      setEnunciado(e.target.value);
    } else if (e.target.name === "codigo") {
      setCodigo(e.target.value);
    } else if (e.target.name === "respuesta") {
      setRespuesta(e.target.value);
    } else {
      console.log("es dificultad", e.target.value);
      setDificultad(e.target.value);
    }
  };
  return (
    <div>
      <form className='content-addQuestion'>

        <div className="contentFormEnunciado">
          <label className='title' htmlFor="enunciado">Enunciado :</label>
          <input onChange={handleChangeInput} className='input' type="text" name='enunciado' id="enunciado" placeholder="Ingrese el enunciado" />
        </div>

        <div className="contentFormEnunciado">
          <label className='title' htmlFor="respuesta">Respuesta :</label>
          <input onChange={handleChangeInput} className='input' type="text" name="respuesta" id="respuesta" placeholder="Ingrese la respuesta numérica" />
        </div>

        <div className="contentFormEnunciado">
          <label className='title' htmlFor="respuesta">Dificultad :</label>
          <select onChange={handleChangeInput} className='select' id="nivel" name="nivel">
            
            <option value="facil">Fácil</option>
            <option value="intermedia">Intermedia</option>
            <option value="dificil">Difícil</option>
          </select>
        </div>

        <div className="contentFormEnunciado">
          <label className='title' htmlFor="codigo">Código : </label>
          <div className="ejemploInput">
              <span className="ejemplo">
                Ejemplo:
                "a = 7\nb = 3\nc = a & b\nprint(c)"
              </span>
          </div>
          <input onChange={handleChangeInput} className='input' type="text" name="codigo" id="codigo" placeholder="Ingrese el código en formato de texto" />

        </div>

        <div className="contentFormBTNS">
          <button onClick={handleSubmit} className='btns-newQuestion' type="submit">Subir Pregunta</button>
          <Link to='/'>
            <button className='btns-back'>Volver</button>
          </Link>
        </div>

      </form>
    </div>
  );
};

export default NewPregunta;
