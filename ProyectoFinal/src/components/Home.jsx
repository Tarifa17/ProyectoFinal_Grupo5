import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel className='Testing'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/FPW.png" // Reemplaza con la ruta de tu imagen
          alt="First slide"
        />
        <Carousel.Caption className='Decorations'>
          <h3>Fundamentos De Programacion Web</h3>
          <p>Grupo 5</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Phaser.png" // Reemplaza con la ruta de tu imagen
          alt="Second slide"
        />
        <Carousel.Caption className='Decorations'>
          <h3>Juego Phaser</h3>
          <p>Proyecto hecho con Phaser; Planea el espacio disparando y esquivando enemigos y enfrenta su jefe</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/GestorBilleteras.png" // Reemplaza con la ruta de tu imagen
          alt="Third slide"
        />
        <Carousel.Caption className='Decorations'>
          <h3>Gestor De Billeteras</h3>
          <p>texto3</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/IMC.png" // Reemplaza con la ruta de tu imagen
          alt="Third slide"
        />
        <Carousel.Caption className='Decorations'>
          <h3>Indice de Masa Corporal</h3>
          <p>texto3</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/DesafioMatematico.png" // Reemplaza con la ruta de tu imagen
          alt="Third slide"
        />
        <Carousel.Caption className='Decorations'>
          <h3>Desafio Matematico</h3>
          <p>texto3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
  );
}

export default Home;
