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
            navigate('/SumaResta'); //Vamos hacia SumaResta / nivel facil
        } else if (nivel === 'Medium') {
            navigate('/MultiplicacionDivision'); // Vamos hacia el nivel Medio / MultiplicacionDivison
            
        } else if (nivel === 'Hard') {
           
           navigate('/Operaciones'); // Vamos hacia el nivel dificil / Operaciones
        }
    }
    return(
        <div className="container">
                <Card style={{ width: '20rem' }}>
                    <Card.Img className="Imagen" variant="top" src="./skibidi-math.jpg" width={250} />
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