import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "/src/styles/NewPregunta.css";
const NewPregunta = () => {

  const [enunciado, setEnunciado] = useState('');
  const [imagen, setImagen] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [dificultad, setDificultad] = useState('');
  const handleSubmit = (e) => {
    console.log("aaaaa");
    if (enunciado && imagen && respuesta) {
      alert("Pregunta subida");
    } else {
      alert("Ingrese todos los datos");
    }

  };

  const handleChangeInput = (e) => {
    if (e.target.name === enunciado) {
      setEnunciado(e.target.value);
    } else if (e.target.name === imagen) {
      setImagen(e.target.value);
    } else if (e.target.name === respuesta) {
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
          <label className='title' htmlFor="respuesta">Respuesta:</label>
          <input className='input' type="text" name="respuesta" id="respuesta" placeholder="Ingrese la respuesta" />
        </div>

        <div className="contentFormEnunciado">
          <label className='title' htmlFor="respuesta">Dificultad</label>
          <select onChange={handleChangeInput} className='select' id="nivel" name="nivel">
            <option value="facil">Fácil</option>
            <option value="intermedia">Intermedia</option>
            <option value="dificil">Difícil</option>
          </select>
        </div>

        <div className="contentForm">
          <label className='title' htmlFor="imagen">Imagen</label>
          <div className='contentImage'>
            <input type="file" id="imagen" name="imagen" accept="image/*" />
          </div>
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
