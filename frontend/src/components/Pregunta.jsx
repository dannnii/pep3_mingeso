import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "/src/styles/Pregunta.css";

const Pregunta = ({ nroPregunta, codigo, enunciado, logica, isReset }) => {
    const [respuesta, setRespuesta] = useState('');
    const [viewCode, setViewCode] = useState(false);
    ;

    useEffect(() => {
        const codigo2 = codigo.replace(/\\n/g, "\n");
        console.log(codigo2);
        setViewCode(codigo2);
    }, [codigo]);

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
    }, [isReset]);

    return (
        <div className='container-preg'>
            <span className='Enunciado'>
                <strong>Pregunta {nroPregunta}:</strong> {enunciado}
            </span>
            <SyntaxHighlighter className='codigo' language="python" style={atomOneLight} customStyle={{ textAlign: "left", padding: "1em" }}>
                {viewCode}
            </SyntaxHighlighter>

            <div className="input-answer">
                <label className='title' htmlFor="enunciado">Ingrese su respuesta aquí:</label>
                <input value={respuesta} onChange={handleAnswer} className='input-answer' type='text' />
            </div>


        </div>
    );
};

export default Pregunta;
