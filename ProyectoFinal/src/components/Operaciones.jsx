
import React, { useState } from 'react'; 
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Operaciones() { 
  // Generar operación avanzada con decimales o fracciones
  const generarOperacionAvanzada = () => {
    const esDecimal = Math.random() > 0.5; // Aleatorio entre decimal y fracción 
    if (esDecimal) {
      const decimal1 = (Math.random() * 10).toFixed(1); 
      const decimal2 = (Math.random() * 10).toFixed(1); 
      return { 
        tipo: 'decimal', 
        texto: `${decimal1} × ${decimal2}`, 
        resultado: (decimal1 * decimal2).toFixed(2) 
      }; 
    } else {
      const numerador1 = Math.floor(Math.random() * 5) + 1; 
      const denominador1 = Math.floor(Math.random() * 5) + 1; 
      const numerador2 = Math.floor(Math.random() * 5) + 1; 
      const denominador2 = Math.floor(Math.random() * 5) + 1; 
      const resultado = ((numerador1 / denominador1) + (numerador2 / denominador2)).toFixed(2); 
      return { 
        tipo: 'fracción', 
        texto: `${numerador1}/${denominador1} + ${numerador2}/${denominador2}`, 
        resultado
      }; 
    } 
  }; 

  const [operacion, setOperacion] = useState(generarOperacionAvanzada()); 
  const [respuesta, setRespuesta] = useState(''); 
  const [puntaje, setPuntaje] = useState(0); 
  const [mensaje, setMensaje] = useState(''); 
  const [intento, setIntento] = useState(1); 

  const verificarRespuesta = () => {
    const esCorrecto = parseFloat(respuesta) === parseFloat(operacion.resultado);
    setPuntaje(esCorrecto ? puntaje + 1 : puntaje); 
    setMensaje(esCorrecto ? '¡Correcto!' : 'Incorrecto. Intenta nuevamente.');
  }; 
  
  const siguienteDesafio = () => {
    setRespuesta(''); 
    setOperacion(generarOperacionAvanzada()); 
    setMensaje(''); 
    setIntento(prevIntento => prevIntento + 1); 
  };

  if (intento === 6) return <div><h2>Puntuación final: {puntaje}</h2></div>; 

  return ( 
    <div className="container-flex"> 
      <Card style={{ width: '20rem' }}> 
      <Card.Img className="Imagen" variant="top" src="./skibidi-math.jpg" width={250} />
        <Card.Body> 
          <Card.Title> 
            <h2>{operacion.texto}</h2> 
          </Card.Title> 
          <input 
            type="text" 
            value={respuesta} 
            onChange={(e) => setRespuesta(e.target.value)} 
            placeholder="Ingresa tu respuesta" 
          /> 
          <Button variant="primary" onClick={verificarRespuesta}>Verificar Resultado</Button> 
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

export default Operaciones; 
