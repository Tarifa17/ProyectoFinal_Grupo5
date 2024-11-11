// components/MultiplicacionDivision.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Puntuacion from './Puntuacion';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente funcional para generar las operaciones de Multiplicacion y division
function MultiplicacionDivision() {
    // Funcion callback que genera las operaciones
    const generarOperacion = () => {
        const numero1 = Math.floor(Math.random() * 8) + 2; //Genera un numero random entre 2 y 9
        const numero2 = Math.floor(Math.random() * 5) + 1; //Genera un numero random entre 1 y 5
        const esMultiplicacion = Math.random() > 0.5; //Elige un numero entre 0 a 1, si este es mayor a 0.5 la operacion va a ser multiplicacion
        const resultado = esMultiplicacion ? numero1 * numero2 : Math.floor(numero1 / numero2); // Calcula el resultado dependiendo del tipo de operacion que marque esMultiplicacion

        // Retorna un objeto con los elementos de la operacion
        return {
             //Si esMultiplicacion es True nos devuleve el primero, si es false el segundo, nos va a servir para establcer la operacion para el jugador
            tipo: esMultiplicacion ? 'multiplicacion' : 'division',
            numero1,
            numero2,
            resultado
        };
    };

    const [operacion, setOperacion] = useState(generarOperacion()); //Cambiamos el estado de operacion a la operacion generada
    const [respuesta, setRespuesta] = useState(''); // Estado de la respuesta del usuario
    const [puntaje, setPuntaje] = useState(0); //Iniciamos el estado del puntaje del usuario en 0
    const [mensaje, setMensaje] = useState(''); // Estado del mensaje que se muestra al usuario
    const [intento, setIntento] = useState(1); // Estado del numero de intentos que realiza el usuario
    const [verificado, setVerificado] = useState(false); // Estado para verificar si el jugador verifico su respuesta

    // Funcion callback para que el usuario verifique su respuesta
    const verificarRespuesta = () => {
        //Si la respuesta todavia no fue verificada y la respuesta es igual al resultado de la operacion
        if (!verificado && parseInt(respuesta) === operacion.resultado) { 
            setPuntaje(puntaje + 1); //Aumenta el puntaje en 1 unidad
            setMensaje('¡Correcto!'); //El valor del estado mensaje pasa a Correcto
            setVerificado(true); //Y el estado de verificado cambia a true
        } else { // Si es incorrecta la respuesta
            setMensaje('Incorrecto. Intenta nuevamente.'); //El valor del estado de mensaje cambia a Incorrecto
            setVerificado(true); //Y el estado de verificado cambia a true
        }
    };

    // Funcion callback para generar un nuevo desafio
    const siguienteDesafio = () => {
        setRespuesta(''); //Reiniciamos el campo de la respuesta
        setOperacion(generarOperacion()); //Generamos una nueva operacion
        setMensaje(''); //Reiniciamos el estado del mensaje
        setIntento(prevIntento => prevIntento + 1); //Incrementa el numero de intentos
        setVerificado(false); //Establecemos el estado de verificado de nuevo a false
    };

    //Si el usuario alcanzó lo 5 intentos mostramos la pantalla de Puntuacion 
    if (intento === 6) {
        return <Puntuacion puntos={puntaje} />; //Mostramos la pantalla puntuacion con el puntaje final
    }

    return (
        <div className="container-flex">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="./skibidi-math.jpg" width={250} />
                <Card.Body>
                    <Card.Title>
                        <h2>
                        {operacion.tipo === 'multiplicacion' //Verifica si el tipo de operacion es multiplicacion o division y lo muestra en la card
            ? `${operacion.numero1} × ${operacion.numero2}` 
            : `${operacion.numero1} ÷ ${operacion.numero2}`}
                        </h2>
                    </Card.Title>
                    <input 
                        type="text" 
                        value={respuesta} 
                        onChange={(e) => setRespuesta(e.target.value)} //Detecta cambios y los establece en la respuesta
                        placeholder="Ingresa tu respuesta" 
                    />
                    {/* Boton que al ser presionado verifica la respuesta*/}
                    <Button variant="primary" onClick={verificarRespuesta} disabled={verificado}>Verificar Resultado</Button>
                    {/* Boton que al ser presionado llamar al la funcion callback para generar un  nuevo desafio*/}
                    <Button variant="primary" onClick={siguienteDesafio}>Siguiente Desafío</Button>
                    <Card.Text>
                        <h6>{mensaje}</h6> {/* Muestra el mensaje*/}
                        <h6>Puntaje: {puntaje}</h6> {/* Muestra el puntaje acumulado*/}
                        <h6>Intento: {intento}</h6> {/* Muestra el intento actual*/}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MultiplicacionDivision;
