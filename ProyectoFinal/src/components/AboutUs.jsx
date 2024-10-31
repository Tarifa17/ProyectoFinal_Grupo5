import React from 'react';
import './AboutUs.css'; 
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

class AboutUs extends React.Component {
    render() {
        return (
            <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {/* Primera Tarjeta Tarifa*/}
                <Card className="custom-card" style={{ width: '30rem', height: '14rem', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Card.Img className="ilustracion" variant="left" src="/Cat.jpeg" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '15px',marginLeft: '5px' }} />
                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Card.Title>Mateo Tarifa "Spine"</Card.Title>
                            <Card.Text style={{ fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                textp
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>

                {/* Segunda Tarjeta Ruben*/}
                <Card className="custom-card" style={{ width: '30rem', height: '14rem', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Card.Img className="ilustracion" variant="left" src="/meme.jpg" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '15px',marginLeft: '5px' }} />
                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Card.Title>Ruben</Card.Title>
                            <Card.Text style={{ fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                texto-
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>

                {/* Tercera Tarjeta EstebanIbañez */}
                <Card className="custom-card" style={{ width: '30rem', height: '14rem', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Card.Img className="ilustracion" variant="left" src="/Quito.png" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '15px',marginLeft: '5px'}} />
                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Card.Title className="Name">Esteban Ibañez "Qutiox"</Card.Title>
                            <Card.Text style={{ fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                Soy Esteban Ibañez un desarrollador que le gusta la parte de la estetica y el diseño en si, tengo 18 años y aspiro a ser un front-end developer
                                me gusta roblox y hacer modelos 3D en blender :P
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>

                {/* Cuarta Tarjeta Abachino*/}
                <Card className="custom-card" style={{ width: '30rem', height: '14rem', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Card.Img className="ilustracion" variant="left" src="/Cat.jpeg" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '15px',marginLeft: '5px' }} />
                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Card.Title>Mateo Tarifa "Spine"</Card.Title>
                            <Card.Text style={{ fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                texto-
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </div>
        );
    }
}

export default AboutUs;
