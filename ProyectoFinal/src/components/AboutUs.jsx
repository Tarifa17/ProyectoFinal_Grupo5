import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import desarrolladores from "../data/desarrolladores.json"; 

class AboutUs extends React.Component {
    render() {
        return (
            <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {desarrolladores.map(desarrollador => (
                    <Card key={desarrollador.id} style={{ width: '30rem', height: '14rem', overflow: 'hidden' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Card.Img variant="left" src={desarrollador.image} style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '10px' }} />
                            <Card.Body>
                                <Card.Title>{desarrollador.name}</Card.Title>
                                <Card.Text style={{ fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {desarrollador.description}  
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                ))}
            </div>
        );
    }
}

export default AboutUs;
