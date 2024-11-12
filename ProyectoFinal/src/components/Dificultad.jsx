import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import SumaResta from './SumaResta';
import MultiplicacionDivision from "./MultiplicacionDivision";
import Operaciones from "./Operaciones";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente funcional para poder elegir la dificultad del juego
function Dificultad(){
    // Hook que nos va a permitir navegar entre paginas para ir al nivel seleccionado
    const navigate = useNavigate(); 

    // Funcion callback que recibe el nivel y nos redirije a la dificultad elegida
    const elegirDificultad = (nivel) =>{
        // Verificamos el valor que tome nivel y nos redirigimos a la pagina correspondiente
        if (nivel === 'Easy') { //Si nivel toma el valor Easy
            navigate('/SumaResta'); // Navegamos hacia SumaResta / nivel facil
        } else if (nivel === 'Medium') { //Si nivel toma el valor Medium
            navigate('/MultiplicacionDivision'); // Navegamos hacia el nivel Medio / MultiplicacionDivison
            
        } else if (nivel === 'Hard') { //Si nivel toma el valor Hard
           
           navigate('/Operaciones'); // Navegamos hacia el nivel dificil / Operaciones
        }
    }
    return(
        <div className="container">
                <Card style={{ width: '20rem' }}>
                    <Card.Img className="Imagen" variant="top" src="./skibidi-math.jpg" width={250} />
                    <Card.Body>
                        <Card.Title><h2>Elige la dificultad</h2></Card.Title>
                        {/*Boton que al hacer click le establece a la funcion para elegir la dificultad el valor Facil */}
                        <Button variant="success" onClick={ ()=>elegirDificultad('Easy')}>Easy</Button> 
                        {/*Boton que al hacer click le establece a la funcion para elegir la dificultad el valor Medio */}
                        <Button variant="warning" onClick={ ()=>elegirDificultad('Medium')}>Medium</Button>
                        {/*Boton que al hacer click le establece a la funcion para elegir la dificultad el valor Dificil */}
                        <Button variant="danger" onClick={ ()=>elegirDificultad('Hard')}>Hard</Button>
                    </Card.Body>
                </Card>
            </div>
    )

}

export default Dificultad;