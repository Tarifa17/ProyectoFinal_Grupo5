import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import SumaResta from './SumaResta';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dificultad from './Dificultad';

//Componente funcional principal del juego react
function Juego(){
    const [isPlaying, setIsPlaying] = useState(false); // Hook useState que nos permite indica si el jugador esta jugando o no, lo iniciamos en falso
    
    // Funcion callback para verificar si se hizo click para jugar
    const VerificarClick = () => { 
         // Reproducir sonido al hacer clic
         const sonido = new Audio('./sound/desafioMatematico.mp3'); //Cargamos la musica
         sonido.play(); //Reproducimos la musica
        setIsPlaying(true); // Cambiamos el estado de isPlaying a verdadero para indicar que el jugador esta jugando
        
    };
    return(
        <div className='container-flex'>
        {isPlaying ? (
            <Dificultad />
        ) : (
            <div className="container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="Imagen" variant="top" src="./skibidi-math.jpg" width={250} />
                    <Card.Body>
                        <Card.Title><h2>Desafío Matemático</h2></Card.Title>
                        {/* Boton que al hacer click llama a la funcion callback VerificarClick*/}
                        <Button variant="primary" onClick={VerificarClick}>Play</Button>
                    </Card.Body>
                </Card>
                
               
            </div>
        )}
    </div>
    )
   }
   export default Juego;