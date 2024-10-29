import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SumaResta from './SumaResta';
import 'bootstrap/dist/css/bootstrap.min.css';

function Juego(){
    const [isPlaying, setIsPlaying] = useState(false);

    const VerificarClick = () => {
        setIsPlaying(true); 
    };
    return(
        <>
        {isPlaying ? (
            <SumaResta />
        ) : (
            <div className="container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="Imagen" variant="top" src="public/nado.jpeg" width={250} />
                    <Card.Body>
                        <Card.Title><h2>Desafío Matemático</h2></Card.Title>
                        <Button variant="primary" onClick={VerificarClick}>Play</Button>
                    </Card.Body>
                </Card>
            </div>
        )}
    </>
    )
   }
   export default Juego;