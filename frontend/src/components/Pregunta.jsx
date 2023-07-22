import React, { useEffect, useState } from 'react';
import "/src/styles/Pregunta.css";
const Pregunta = ({ nroPregunta, imagen, enunciado, logica, isReset }) => {
    const [respuesta, setRespuesta] = useState('');
    const handleAnswer = (event) => {
        if (event.target.value === '') {
            setRespuesta('');
            logica(false, event.target.value);
        } else {
            setRespuesta(event.target.value);
            logica(true, event.target.value);
        }
    };

    useEffect(() => {
        if (!isReset) {
            setRespuesta("");
        }
        console.log(nroPregunta);
    }, [isReset])

    return (
        <div className='container-preg'>
            <span className='Enunciado'>
                <strong>Pregunta {nroPregunta}:</strong> {enunciado}
            </span>
            <img className='imagen' src={imagen} alt='Imagen de prueba' />

            <div className="input-answer">
                <label className='title' htmlFor="enunciado">Ingrese su respuesta aquí:</label>
                <input value={respuesta} onChange={handleAnswer} className='input-answer' type='text' />
            </div>
        </div>
    );
};

export default Pregunta;
