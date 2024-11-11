import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import SumaResta from './SumaResta';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dificultad from './Dificultad';

function Juego(){
    const [isPlaying, setIsPlaying] = useState(false);
    
    const VerificarClick = () => {
         // Reproducir sonido al hacer clic
         const sonido = new Audio('./sound/desafioMatematico.mp3');
         sonido.play();
        setIsPlaying(true); 
        
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
                        <Button variant="primary" onClick={VerificarClick}>Play</Button>
                    </Card.Body>
                </Card>
                
               
            </div>
        )}
    </div>
    )
   }
   export default Juego;