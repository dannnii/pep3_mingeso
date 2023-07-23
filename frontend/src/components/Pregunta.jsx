import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "/src/styles/Pregunta.css";

const Pregunta = ({ nroPregunta, codigo, enunciado, logica, isReset }) => {
    const [respuesta, setRespuesta] = useState('');
    const [viewCode, setViewCode] = useState(false);

    const codigo2 = `a = 8
    b = 4
    c = 2 
    d = a / b % c ** c
    print(d)`;

    const formatCode = (code) => {
        console.log(code)
        const lines = code.split('\n');
        const formattedCode = lines.map((line) => `${line.trim()}`).join('\n');
        setViewCode(formattedCode);
        console.log(formattedCode);
    }
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
        formatCode(codigo);
    }, [codigo])
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
            <pre className="codigo">
                <code>{codigo}</code>
            </pre>
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
