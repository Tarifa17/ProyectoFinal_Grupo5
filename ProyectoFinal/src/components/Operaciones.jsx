
import React, { useState } from 'react'; 
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

//Componente funcional para generar operaciones con fracciones y decimales
function Operaciones() { 
  // Funcion callback para generarr operación avanzada con decimales o fracciones
  const generarOperacionAvanzada = () => {
    const esDecimal = Math.random() > 0.5; // Elige un numero entre 0 y 1, si es mayor a 0.5 la operacion será decimal
    if (esDecimal) {
      //Genera 2 numeros random con solo un decimal
      const decimal1 = (Math.random() * 10).toFixed(1); 
      const decimal2 = (Math.random() * 10).toFixed(1); 
      return { //Retorna los elementos de la operacion decimal junto con el resultado con 2 decimales
        tipo: 'decimal', 
        texto: `${decimal1} × ${decimal2}`, 
        resultado: (decimal1 * decimal2).toFixed(2) 
      }; 
    } else {
      //Genera una 2 numeros fraccionarios evitando los 0 en el denominador y el resultado es un numero decimal de 2 decimales
      const numerador1 = Math.floor(Math.random() * 5) + 1; 
      const denominador1 = Math.floor(Math.random() * 5) + 1; 
      const numerador2 = Math.floor(Math.random() * 5) + 1; 
      const denominador2 = Math.floor(Math.random() * 5) + 1; 
      const resultado = ((numerador1 / denominador1) + (numerador2 / denominador2)).toFixed(2); 
      return { //Retorna los elementos de la operacion fraccionaria junto con el resultado
        tipo: 'fracción', 
        texto: `${numerador1}/${denominador1} + ${numerador2}/${denominador2}`, 
        resultado
      }; 
    } 
  }; 

  const [operacion, setOperacion] = useState(generarOperacionAvanzada()); // Establce el estado de la operacion a la operacion generada
  const [respuesta, setRespuesta] = useState(''); // Estado de la respuesta del usuario
  const [puntaje, setPuntaje] = useState(0); //Estado del puntaje del usuario incializado en 0
  const [mensaje, setMensaje] = useState(''); //Estado del mensaje que se muestra en pantalla
  const [intento, setIntento] = useState(1); //Estado del intento del usuario
  const [verificado, setVerificado] = useState(false); // Estado para verificar si el jugador verifico su respuesta

  //Funcion callback para verificar la respuesta del usuario
  const verificarRespuesta = () => {
    if(!verificado){ // Si no esta verificado
    const esCorrecto = parseFloat(respuesta) === parseFloat(operacion.resultado); //Comparamos la respuesta ingresada con la correcta
    setPuntaje(esCorrecto ? puntaje + 1 : puntaje); //Si es correcta, aumentamos un punto
    setMensaje(esCorrecto ? '¡Correcto!' : 'Incorrecto. Intenta nuevamente.'); //Establcemos el estado dependiendo si es correcta la respuesta
    setVerificado(true); // El verificado pasa a verdadero para no verificar mas de una vez
    }
  }; 
  
  //Funcion callback para generar un nuevo desafio
  const siguienteDesafio = () => {
    setRespuesta(''); //Reiniciamos el estado de la respuesta
    setOperacion(generarOperacionAvanzada()); //Generamos una nueva operacion
    setMensaje(''); //Reiniciamos el valor del mensaje
    setIntento(prevIntento => prevIntento + 1); //Aumenta el numero de intentos en 1 unidad
    setVerificado(false); // El verificado pasa a falso para volver a verificar
  };

  //Si hemos alcanzado los 5 intentos pasamos a la pantalla de puntuacion y nos muestra el puntaje
  if (intento === 6) return <div><h2>Puntuación final: {puntaje}</h2></div>; 

  return ( 
    <div className="container-flex"> 
      <Card style={{ width: '20rem' }}> 
      <Card.Img className="Imagen" variant="top" src="./skibidi-math.jpg" width={250} />
        <Card.Body> 
          <Card.Title> 
            {/* Muestra la operacion al usuario */}
            <h2>{operacion.texto}</h2> 
          </Card.Title> 
          <input 
            type="text" 
            value={respuesta} 
            onChange={(e) => setRespuesta(e.target.value)} //Establcemos el estado de la respuesta cada vez que haya un cambio
            placeholder="Ingresa tu respuesta" 
          /> 
          {/* Boton para verificar la respuesta que llama a la funcion callback y se desactiva una vez verificado el resultado */}
          <Button variant="primary" onClick={verificarRespuesta} disabled={verificado}>Verificar Resultado</Button> 
          {/* Boton para generar una nueva operacion que llama a la funcion callback */}
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
