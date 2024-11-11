import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

//Componente funcional que recibe un props de puntos, es la puntuacion final del usuario
function Puntuacion ({ puntos }) {
    return (
      <div>
        <h2>¡Juego terminado!</h2>
        {/* Muestra la puntuacion final con el valor de los puntos recibidos por props */}
        <h3>Puntuación final: {puntos}</h3>
      </div>
    );
  };

  export default Puntuacion;


