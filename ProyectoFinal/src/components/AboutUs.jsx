import React from 'react';
import Card from 'react-bootstrap/Card';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import desarrolladores from "../data/desarrolladores.json"; 
import { CardImg } from 'react-bootstrap';

function AboutUs() {
    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            {desarrolladores.map(desarrollador => (
                <Card className='Card-type' key={desarrollador.id} style={{ width: '30rem', height: '15rem', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%'}}>
                        <Card.Img className='ilustracion' variant="left" src={desarrollador.image} style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '15px', marginLeft: '10px'}} />
                        <Card.Body>
                            <Card.Title>{desarrollador.name}</Card.Title>
                            <Card.Text style={{ fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {desarrollador.description} 
                                <br />                            
                                <a                                 
                                    href={desarrollador.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ color: 'blue', textDecoration: 'underline' }}                                   
                                >
                                    Perfil de GitHub
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default AboutUs;