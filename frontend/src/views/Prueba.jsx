import React, { useState, useEffect } from 'react';
import Pregunta from "/src/components/Pregunta.jsx"
import { Link } from 'react-router-dom';
import "/src/styles/Prueba.css";
import axios from 'axios';
const Prueba = () => {
    const [testFinish, setTestFinish] = useState(false);
    const [preguntas, setPreguntas] = useState([]);
    const [preguntasData, setPreguntasData] = useState([]);
    const [codigo, setCodigo] = useState([]);

    const [enunciado, setEnunciado] = useState([]);

    const [completed_preg, setCompletedPreg] = useState({
        pregunta1: false,
        pregunta2: false,
        pregunta3: false,
        pregunta4: false,
    });

    const [respuestas, setRespuestas] = useState([])

    const [ingresado, setIngresados] = useState({
        pregunta1: "",
        pregunta2: "",
        pregunta3: "",
        pregunta4: "",
    })

    const [dificultad, setDificultad] = useState("");

    // Calculate the grade
    const calculateGrade = () => {
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        let nota1 = 0;
        let nota2 = 0;
        let nota3 = 0;
        let nota4 = 0;
        //Verificamos la respuesta
        console.log("INGRESADO", ingresado);
        console.log("RESPUESTAS", respuestas);
        if (respuestas[0] === ingresado.pregunta1) {
            correctAnswers++;
            nota1 = 7;
        } else {
            nota1 = 1;
            incorrectAnswers++;
        }

        if (respuestas[1] === ingresado.pregunta2) {
            correctAnswers++;
            nota2 = 7;
        } else {
            nota2 = 1;
            incorrectAnswers++;
        }

        if (respuestas[2] === ingresado.pregunta3) {
            correctAnswers++;
            nota3 = 7;
        } else {
            nota3 = 1;
            incorrectAnswers++;
        }
        if (respuestas[3] === ingresado.pregunta4) {
            correctAnswers++;
            nota4 = 7;
        } else {
            nota4 = 1;
            incorrectAnswers++;
        }
        // Calculamos la nota
        const totalQuestions = 4;

        console.log('nota1', nota1);
        console.log('nota2', nota2);
        console.log('nota3', nota3);
        console.log('nota4', nota4);
        const averageGrade = (nota1 + nota2 + nota3 + nota4) / totalQuestions;
        // Mostramos los resultados
        alert(`Respuestas correctas: ${correctAnswers}\nRespuestas incorrectas: ${incorrectAnswers}\nNota: ${averageGrade}`);

        // Cambiamos el estilo en base a los
        const pregunta1Cont = document.querySelector('.pregunta1-cont');
        const pregunta2Cont = document.querySelector('.pregunta2-cont');
        const pregunta3Cont = document.querySelector('.pregunta3-cont');
        const pregunta4Cont = document.querySelector('.pregunta4-cont');
        
        console.log("pregunta1Cont", pregunta1Cont);
        console.log("pregunta2Cont", pregunta2Cont);
        console.log("pregunta3Cont", pregunta3Cont);
        console.log("pregunta4Cont", pregunta4Cont);

        if (respuestas[0] === ingresado.pregunta1) {
            console.log("Pregunta 1 correcta");
            pregunta1Cont.classList.add('correct');
        } else {
            console.log("Pregunta 1 incorrecta");
            pregunta1Cont.classList.add('incorrect');
        }

        if (respuestas[1] === ingresado.pregunta2) {
            console.log("Pregunta 2 correcta");
            pregunta2Cont.classList.add('correct');
        } else {
            console.log("Pregunta 2 incorrecta");
            pregunta2Cont.classList.add('incorrect');
        }

        if (respuestas[2] === ingresado.pregunta3) {
            console.log("Pregunta 3 correcta");
            pregunta3Cont.classList.add('correct');
        } else {
            console.log("Pregunta 3 incorrecta");
            pregunta3Cont.classList.add('incorrect');
        }

        if (respuestas[3] === ingresado.pregunta4) {
            console.log("Pregunta 4 correcta");
            pregunta4Cont.classList.add('correct');
        } else {
            console.log("Pregunta 4 incorrecta");
            pregunta4Cont.classList.add('incorrect');
        }
    };

    // Call the calculateGrade function in handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para manejar el envío del formulario
        if (completed_preg.pregunta1 && completed_preg.pregunta2 && completed_preg.pregunta3 && completed_preg.pregunta4) {
            // Aquí debería ir la lógica de respuesta
            console.log('Formulario enviado');
            calculateGrade();
            setTestFinish(true);

        } else {
            alert('El formulario no puede ser enviado, debido a que no se han contestado todas las preguntas');

        }
    };

    const handleReset = () => {
        setTestFinish(false);
        setCompletedPreg({
            pregunta1: false,
            pregunta2: false,
            pregunta3: false,
            pregunta4: false,
        });

        setRespuestas({
            pregunta1: "",
            pregunta2: "",
            pregunta3: "",
            pregunta4: "",
        });

        // Desmarcar preguntas de revisión
        const pregunta1Cont = document.querySelector('.pregunta1-cont');
        const pregunta2Cont = document.querySelector('.pregunta2-cont');
        const pregunta3Cont = document.querySelector('.pregunta3-cont');
        const pregunta4Cont = document.querySelector('.pregunta4-cont');

        pregunta1Cont.classList.remove('correct', 'incorrect');
        pregunta2Cont.classList.remove('correct', 'incorrect');
        pregunta3Cont.classList.remove('correct', 'incorrect');
        pregunta4Cont.classList.remove('correct', 'incorrect');
    };


    const handleContent = (content, answer, pregunta) => {
        console.log("content", content, "answer",answer);
        setCompletedPreg((prevState) => ({
            ...prevState,
            [pregunta]: content,
        }));
        setIngresados((prevState) => ({
            ...prevState,
            [pregunta]: answer,
        }));
    };

    const handleQuestion = (dificultad) => {
        setDificultad(dificultad);
        const preguntas = preguntasData.filter((pregunta) => pregunta.dificultadPrueba === dificultad);

        // Obtener 4 preguntas aleatorias
        const selectedQuestions = [];
        while (selectedQuestions.length < 4) {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            const randomIndex = Math.floor(Math.random() * preguntas.length);
            const randomQuestion = preguntas[randomIndex];
            if (!selectedQuestions.includes(randomQuestion)) {
                selectedQuestions.push(randomQuestion);
            }
        }
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA", selectedQuestions);
        setPreguntas(selectedQuestions);
        setCodigo([
            selectedQuestions[0].codigo,
            selectedQuestions[1].codigo,
            selectedQuestions[2].codigo,
            selectedQuestions[3].codigo
        ]);

        setEnunciado([
            selectedQuestions[0].enunciado,
            selectedQuestions[1].enunciado,
            selectedQuestions[2].enunciado,
            selectedQuestions[3].enunciado
        ]);

        setRespuestas([
            selectedQuestions[0].respuesta,
            selectedQuestions[1].respuesta,
            selectedQuestions[2].respuesta,
            selectedQuestions[3].respuesta
        ]);
    };

    useEffect(() => {
        console.log("ingresadoaaaaaa", ingresado);
        console.log("codigo in preuba", codigo);
        console.log("enunciado in preuba", enunciado);
        console.log("respuestas in preuba", respuestas);
    }, [codigo]);

    useEffect(() => {
        axios.get('http://localhost:8080/pruebas')
            .then(response => {
                setPreguntasData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                // Aquí puedes manejar los errores
                console.error(error);
            });

    }, []);

    return (
        <div className='container-Form'>
            {dificultad === "" ?
                (
                    <>
                        <div className='content-dificultad'>
                            <h1 className='title'>Seleccione la dificultad de la prueba</h1>
                            <div className='content-btns'>
                                <button onClick={() => handleQuestion("facil")} className='btns'>Básico</button>
                                <button onClick={() => handleQuestion("intermedia")} className='btns'>Medio</button>
                                <button onClick={() => handleQuestion("dificil")} className='btns'>Difícil</button>
                            </div>
                        </div>
                    </>
                )
                :
                (
                    <>
                        <form action='' className='formCont' onSubmit={handleSubmit}>
                            <div className='pregunta1-cont'>
                                <Pregunta nroPregunta={1} codigo={codigo[0]} enunciado={enunciado[0]} isReset={testFinish} logica={(content, answer) => handleContent(content, answer, 'pregunta1')} />
                            </div>
                            <div className='pregunta2-cont'>
                                <Pregunta nroPregunta={2} codigo={codigo[1]} enunciado={enunciado[1]} isReset={testFinish} logica={(content, answer) => handleContent(content, answer, 'pregunta2')} />
                            </div>
                            <div className='pregunta3-cont'>
                                <Pregunta nroPregunta={3} codigo={codigo[2]} enunciado={enunciado[2]} isReset={testFinish} logica={(content, answer) => handleContent(content, answer, 'pregunta3')} />
                            </div>
                            <div className='pregunta4-cont'>
                                <Pregunta nroPregunta={4} codigo={codigo[3]} enunciado={enunciado[3]} isReset={testFinish} logica={(content, answer) => handleContent(content, answer, 'pregunta4')} />
                            </div>
                            {!testFinish &&
                                <>
                                    <button type='submit'>Enviar Respuesta</button>

                                </>
                            }
                        </form>

                        {testFinish &&
                            <>
                                <button onClick={handleReset}>Reiniciar</button>
                            </>
                        }

                        <Link to='/'>
                            <button className='btns'>Volver</button>
                        </Link>
                    </>
                )

            }



        </div>
    );
};

export default Prueba;
