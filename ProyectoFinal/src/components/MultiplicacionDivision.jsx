// components/MultiplicacionDivision.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Puntuacion from './Puntuacion';
import 'bootstrap/dist/css/bootstrap.min.css';

function MultiplicacionDivision() {
    const generarOperacion = () => {
        const numero1 = Math.floor(Math.random() * 10) + 1;
        const numero2 = Math.floor(Math.random() * 10) + 1;
        const esMultiplicacion = Math.random() > 0.5;
        const resultado = esMultiplicacion ? numero1 * numero2 : Math.floor(numero1 / numero2);

        return {
            tipo: esMultiplicacion ? 'multiplicacion' : 'division',
            numero1,
            numero2,
            resultado
        };
    };

    const [operacion, setOperacion] = useState(generarOperacion());
    const [respuesta, setRespuesta] = useState('');
    const [puntaje, setPuntaje] = useState(0);
    const [mensaje, setMensaje] = useState('');
    const [intento, setIntento] = useState(1);
    const [verificado, setVerificado] = useState(false);

    const verificarRespuesta = () => {
        if (!verificado && parseInt(respuesta) === operacion.resultado) {
            setPuntaje(puntaje + 1);
            setMensaje('¡Correcto!');
            setVerificado(true);
        } else {
            setMensaje('Incorrecto. Intenta nuevamente.');
            setVerificado(true);
        }
    };

    const siguienteDesafio = () => {
        setRespuesta('');
        setOperacion(generarOperacion());
        setMensaje('');
        setIntento(prevIntento => prevIntento + 1);
        setVerificado(false);
    };

    if (intento === 6) {
        return <Puntuacion puntos={puntaje} />;
    }

    return (
        <div className="container-flex">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="public/nado.jpeg" width={250} />
                <Card.Body>
                    <Card.Title>
                        <h2>
                            {operacion.tipo === 'multiplicacion' 
                                ? `${operacion.numero1} × ${operacion.numero2}` 
                                : `${operacion.numero1 * operacion.numero2} ÷ ${operacion.numero1}`}
                        </h2>
                    </Card.Title>
                    <input 
                        type="text" 
                        value={respuesta} 
                        onChange={(e) => setRespuesta(e.target.value)} 
                        placeholder="Ingresa tu respuesta" 
                    />
                    <Button variant="primary" onClick={verificarRespuesta} disabled={verificado}>Verificar Resultado</Button>
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

export default MultiplicacionDivision;
