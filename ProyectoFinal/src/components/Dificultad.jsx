import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import SumaResta from './SumaResta';
import MultiplicacionDivision from "./MultiplicacionDivision";
import Operaciones from "./Operaciones";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dificultad(){
    const navigate = useNavigate(); 

    const elegirDificultad = (nivel) =>{
        if (nivel === 'Easy') {
            navigate('/SumaResta'); //Vamos hacia SumaResta
        } else if (nivel === 'Medium') {
            navigate('/MultiplicacionDivision'); // Mantén esto para futuras referencias, como '/multiplicacion'
            
        } else if (nivel === 'Hard') {
           
           navigate('/Operaciones');
        }
    }
    return(
        <div className="container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="Imagen" variant="top" src="public/nado.jpeg" width={250} />
                    <Card.Body>
                        <Card.Title><h2>Elige la dificultad</h2></Card.Title>
                        <Button variant="warning" onClick={ ()=>elegirDificultad('Easy')}>Easy</Button>
                        <Button variant="warning" onClick={ ()=>elegirDificultad('Medium')}>Medium</Button>
                        <Button variant="warning" onClick={ ()=>elegirDificultad('Hard')}>Hard</Button>
                    </Card.Body>
                </Card>
            </div>
    )

}

export default Dificultad;