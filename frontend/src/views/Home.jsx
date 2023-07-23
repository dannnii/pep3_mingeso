import React from 'react'
import { Link } from 'react-router-dom';

import "/src/styles/Home.css";
const Home = () => {
  return (
    <div className="Home">
      <h1>Selecciona una de las siguientes opciones para continuar</h1>      
      <div className='home-btns'>
        <Link to="/prueba">
          <button className='btns'>Empezar prueba</button>
        </Link>
        <Link to="/nueva-pregunta">
          <button className='btns'>Ingresar una nueva pregunta</button>
        </Link>

      </div>
    </div>
  );
};


export default Home