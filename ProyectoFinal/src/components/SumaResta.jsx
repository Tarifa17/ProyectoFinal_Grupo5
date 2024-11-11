// components/SumaResta.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Puntuacion from './Puntuacion';
import 'bootstrap/dist/css/bootstrap.min.css';

//Componente funcional para generar operaciones basicas de suma y resta
function SumaResta() {
    //Funcion callback para generar operaciones de suma y resta
    const generarOperacion = () => {
        const numero1 = Math.floor(Math.random() * 10) + 1; //Genera un numero aleatorio entre 1 y 10
        const numero2 = Math.floor(Math.random() * numero1); //El numero 2 va a ser menor o igual al numero 1
        const esSuma = Math.random() > 0.5; //Genera un numero random entre 0 y 1, si es mayor a 0.5 la operacion es suma
        const resultado = esSuma ? numero1 + numero2 : numero1 - numero2; //Calcula el resultado de la operacion si es suma o resta

        //Devuelve los elementos de la operacion junto al resultado
        return {
            tipo: esSuma ? 'suma' : 'resta',
            numero1,
            numero2,
            resultado
        };
    };

    const [operacion, setOperacion] = useState(generarOperacion()); //Establce el estado de la operacion a la operacion generada
    const [respuesta, setRespuesta] = useState(''); //Estado de la respuesta del usuario
    const [puntaje, setPuntaje] = useState(0); //Estado del puntaje que inicializamos en 0
    const [mensaje, setMensaje] = useState(''); //Estado del mensaje mostrado en pantalla
    const [intento, setIntento] = useState(1); //Estado del numero de intentos del usuario
    const [verificado, setVerificado] = useState(false); //Estado para verificar si el usuario verifico su respuesta

    //Funcion callback para verificar la respuesta del usuario
    const verificarRespuesta = () => {
        //Si la respuesta no esta verificada y la respuesta es igual al resultado
        if ( !verificado && parseInt(respuesta) === operacion.resultado) {
            setPuntaje(puntaje + 1); //Sumamos una unidad al puntaje
            setMensaje('¡Correcto!'); //Establecemos el estado del mensaje en correcto
            setVerificado(true); //El estado de verificado pasa a true
        } else {
            setMensaje('Incorrecto. Intenta nuevamente.'); //Establecemos el estado del mensaje en incorrecto
            setVerificado(true);  //El estado de verificado pasa a true
        }
    };

    //Funcion callback para generar una nueva operacion
    const siguienteDesafio = () => {
        setRespuesta(''); //Reiniciamos el estado de la respuesta
        setOperacion(generarOperacion()); //Generamos una nueva operacion
        setMensaje('');  //Reiniciamos el valor del mensaje
        setIntento(prevIntento => prevIntento + 1); //Aumenta el numero de intentos en 1 unidad
        setVerificado(false); // El verificado pasa a falso para volver a verificar
    };

    //Si hemos alcanzado los 5 intentos pasamos a la pantalla de puntuacion y mostramos el puntaje
    if (intento === 6){
        return <Puntuacion puntos={puntaje}/>
    }

    return (
        <div className="container-flex">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="./skibidi-math.jpg" width={250} />
                <Card.Body>
                    <Card.Title>
                        {/* Mostramos la operacion al usuario segun el tipo, verificando si es true o false*/}
                        <h2>
                            {operacion.tipo === 'suma' 
                                ? `${operacion.numero1} + ${operacion.numero2}` 
                                : `${operacion.numero1} - ${operacion.numero2}`}
                        </h2>
                    </Card.Title>
                    <input 
                        type="text" 
                        value={respuesta} 
                        onChange={(e) => setRespuesta(e.target.value)} //Cambiamos el estado de respuesta cada vez que haya un cambio
                        placeholder="Ingresa tu respuesta" 
                    />
                    {/* Boton para verificar el resultado que llama a la funcion callback y se desactiva una vez verificado el resultado*/}
                    <Button variant="primary" onClick={verificarRespuesta} disabled={verificado}>Verificar Resultado</Button>
                    {/* Boton para generar una nueva operacion que llama a la funcion callback siguienteDesafio */}
                    <Button variant="primary" onClick={siguienteDesafio}>Siguiente Desafío</Button>
                    <Card.Text>
                        <h6>{mensaje}</h6>
                        <h6>Puntaje: {puntaje}</h6>
                        <h6>Intento: {intento}</h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SumaResta;
