function AboutUs(){
 return(

   <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {/* Tarjetas */}
      //<h1> finxd</h1>
      <Card className="custom-card" style={{ width: '30rem', height: '14rem', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Card.Img variant="left" src="/Cat.jpeg" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '2px' }} />
          <Card.Body>
            <Card.Title>Mateo Tarifa "Spine"</Card.Title>
            <Card.Text style={{ fontSize: '0.8rem', overflow: 'hidden', maxHeight: '100px' }}> 
              Soy un aspirador a programador Front-end y desarrollador Web, me encanta la musica y los videojuegos. Soy fanatico de Gustavo Cerati y mi juego Favorito es Terraria.
              Preferiblemente en el mundo de la programacion o de los videojuegos soy conocido como Spinerati, nombre proveniente de dos musico que admiro muchisimo, Spinetta y Cerati.
              Mi sueño es hacer un juego que trate los temas delicados de la salud mental, la depresión y las etapas del duelo.
            </Card.Text>
          </Card.Body>
        </div>
      </Card>

      <Card style={{ width: '30rem', height: '14rem', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Card.Img variant="left" src="/cassidy1.jpg" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '2px' }} />
          <Card.Body>
            <Card.Title>Mateo Tarifa "Spine"</Card.Title>
            <Card.Text style={{ fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Soy un aspirador a programador Front-end y desarrollador Web, me encanta la musica y los videojuegos. Soy fanatico de Gustavo Cerati y mi juego Favorito es Terraria.
              Preferiblemente en el mundo de la programacion o de los videojuegos soy conocido como Spinerati, nombre proveniente de dos musico que admiro muchisimo, Spinetta y Cerati.
              Mi sueño es hacer un juego que trate los temas delicados de la salud mental, la depresión y las etapas del duelo.
            </Card.Text>
          </Card.Body>
        </div>
      </Card>

      <Card style={{ width: '30rem', height: '14rem', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Card.Img variant="left" src="/Quito.png" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '10px' }} />
          <Card.Body>
            <Card.Title>Mateo Tarifa "Spine"</Card.Title>
            <Card.Text style={{ fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Soy un aspirador a programador Front-end y desarrollador Web, me encanta la musica y los videojuegos. Soy fanatico de Gustavo Cerati y mi juego Favorito es Terraria.
              Preferiblemente en el mundo de la programacion o de los videojuegos soy conocido como Spinerati, nombre proveniente de dos musico que admiro muchisimo, Spinetta y Cerati.
              Mi sueño es hacer un juego que trate los temas delicados de la salud mental, la depresión y las etapas del duelo.
            </Card.Text>
          </Card.Body>
        </div>
      </Card>

      <Card style={{ width: '30rem', height: '14rem', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Card.Img variant="left" src="/Cat.jpeg" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '10px' }} />
          <Card.Body>
            <Card.Title>Mateo Tarifa "Spine"</Card.Title>
            <Card.Text style={{ fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Soy un aspirador a programador Front-end y desarrollador Web, me encanta la musica y los videojuegos. Soy fanatico de Gustavo Cerati y mi juego Favorito es Terraria.
              Preferiblemente en el mundo de la programacion o de los videojuegos soy conocido como Spinerati, nombre proveniente de dos musico que admiro muchisimo, Spinetta y Cerati.
              Mi sueño es hacer un juego que trate los temas delicados de la salud mental, la depresión y las etapas del duelo.
            </Card.Text>
          </Card.Body>
        </div>
      </Card>

      {/* Mueve el componente Juego aquí, fuera de las tarjetas */}
      <div style={{ width: '100%', marginTop: '20px' }}>
      
      </div>
    </div>
  

 )
}
export default AboutUs;