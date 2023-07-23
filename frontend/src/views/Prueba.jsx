import React, { useState, useEffect } from 'react';
import Pregunta from "/src/components/Pregunta.jsx"
import { Link } from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';
import "/src/styles/Prueba.css";
import axios from 'axios';
const Prueba = () => {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [averageGrade, setAverageGrade] = useState(0);
    const [testFinish, setTestFinish] = useState(false);
    const [preguntas, setPreguntas] = useState([]);
    const [preguntasData, setPreguntasData] = useState([]);
    const [codigo, setCodigo] = useState([]);

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    const [enunciado, setEnunciado] = useState([]);
    const [correct1, setCorrect1] = useState("");
    const [correct2, setCorrect2] = useState("");
    const [correct3, setCorrect3] = useState("");
    const [correct4, setCorrect4] = useState("");
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
            setCorrect1("correct");
            correctAnswers++;
            nota1 = 7;
        } else {
            setCorrect1("incorrect");
            nota1 = 1;
            incorrectAnswers++;
        }

        if (respuestas[1] === ingresado.pregunta2) {
            setCorrect2("correct");
            correctAnswers++;
            nota2 = 7;
        } else {
            setCorrect2("incorrect");
            nota2 = 1;
            incorrectAnswers++;
        }

        if (respuestas[2] === ingresado.pregunta3) {
            setCorrect3("correct");
            correctAnswers++;
            nota3 = 7;
        } else {
            setCorrect3("incorrect");
            nota3 = 1;
            incorrectAnswers++;
        }
        if (respuestas[3] === ingresado.pregunta4) {
            setCorrect4("correct");
            correctAnswers++;
            nota4 = 7;
        } else {
            setCorrect4("incorrect");
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
        setAverageGrade(averageGrade);
        setCorrectAnswers(correctAnswers);
        setIncorrectAnswers(incorrectAnswers);
        window.scrollTo(0, 0);

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
            pause();
        } else {
            alert('El formulario no puede ser enviado, debido a que no se han contestado todas las preguntas');

        }
    };

    const handleReset = () => {
        reset();
        setTestFinish(false);
        setCompletedPreg({
            pregunta1: false,
            pregunta2: false,
            pregunta3: false,
            pregunta4: false,
        });

        setIngresados({
            pregunta1: "",
            pregunta2: "",
            pregunta3: "",
            pregunta4: "",
        });

        setCorrect1("");
        setCorrect2("");
        setCorrect3("");
        setCorrect4("");
    };


    const handleContent = (content, answer, pregunta) => {
        console.log("content", content, "answer", answer);
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
        reset();
        setDificultad(dificultad);
        const preguntas = preguntasData.filter((pregunta) => pregunta.dificultadPrueba === dificultad);

        /*
        // Obtener 4 preguntas aleatorias
        const selectedQuestions = [];
        while (selectedQuestions.length < 4) {
            const randomIndex = Math.floor(Math.random() * preguntas.length);
            const randomQuestion = preguntas[randomIndex];
            if (!selectedQuestions.includes(randomQuestion)) {
                selectedQuestions.push(randomQuestion);
            }
        }
        */
        //Obtener las primera 4 preguntas
        const selectedQuestions = [
            preguntas[0],
            preguntas[1],
            preguntas[2],
            preguntas[3]
        ];

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
        console.log("codigo in prueba", codigo);
        console.log("enunciado in prueba", enunciado);
        console.log("respuestas in prueba", respuestas);
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

            {testFinish && (
                <>
                    <h1>Respuestas correctas: {correctAnswers}</h1>
                    <h1>Respuestas incorrectas: {incorrectAnswers}</h1>
                    <h1>Nota: {averageGrade}</h1>

                </>
            )}
            {dificultad === "" ?
                (
                    <>
                        <div className='content-dificultad'>
                            <h1 className='title'>Seleccione la dificultad de la prueba</h1>
                            <div className='content-btns'>
                                <button onClick={() => handleQuestion("facil")} className='btns'>Fácil</button>
                                <button onClick={() => handleQuestion("intermedia")} className='btns'>Intermedia</button>
                                <button onClick={() => handleQuestion("dificil")} className='btns'>Difícil</button>
                            </div>
                        </div>
                    </>
                )
                :
                (
                    <>
                        <div className="timer">
                            <h1>Tiempo: </h1>
                            <div style={{ fontSize: '100px' }}>
                                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                            </div>
                        </div>
                        <form action='' className='formCont' onSubmit={handleSubmit}>
                            <div className={`pregunta1-cont ${correct1}`}>
                                <Pregunta nroPregunta={1} codigo={codigo[0]} enunciado={enunciado[0]} isReset={testFinish} logica={(content, answer) => handleContent(content, answer, 'pregunta1')} />
                            </div>
                            <div className={`pregunta2-cont ${correct2}`}>
                                <Pregunta nroPregunta={2} codigo={codigo[1]} enunciado={enunciado[1]} isReset={testFinish} logica={(content, answer) => handleContent(content, answer, 'pregunta2')} />
                            </div>
                            <div className={`pregunta3-cont ${correct3}`}>
                                <Pregunta nroPregunta={3} codigo={codigo[2]} enunciado={enunciado[2]} isReset={testFinish} logica={(content, answer) => handleContent(content, answer, 'pregunta3')} />
                            </div>
                            <div className={`pregunta4-cont ${correct4}`}>
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
