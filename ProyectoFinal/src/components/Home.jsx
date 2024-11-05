import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Cat.jpeg" // Reemplaza con la ruta de tu imagen
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>nombre1</h3>
          <p>texto1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/meme.jpg" // Reemplaza con la ruta de tu imagen
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>nombre2</h3>
          <p>texto.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Quito.png" // Reemplaza con la ruta de tu imagen
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>nombre3</h3>
          <p>texto3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
