import React from 'react'
import { Link } from 'react-router-dom';

import "/src/styles/Home.css";
const Home = () => {
  return (
    <div className="general">
      <div className="informacion1">
        <h1 className='title' >Bienvenido a DesafiosPython</h1>
      </div>
      <div className="informacion2">
        <h1 className='subtitle'>Un sitio donde podrás practicar y aportar con tus conocimientos</h1>

      </div>
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
    </div>

  );
};


export default Home