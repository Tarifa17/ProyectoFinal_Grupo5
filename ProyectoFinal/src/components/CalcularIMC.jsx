import React, { useState } from 'react';
import './Calculadora.css';

function CalcularImc() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [imc, setImc] = useState(null);
    const [nivelPeso, setNivelPeso] = useState('');

    const calcularIMC = () => {
        const alturaMetros = parseFloat(altura);
        const pesoKg = parseFloat(peso);

        if (!pesoKg || !alturaMetros) return;

        const imcCalculado = pesoKg / Math.pow(alturaMetros, 2);
        setImc(imcCalculado.toFixed(2));

        if (imcCalculado < 18.5) {
            setNivelPeso('Bajo Peso');
        } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
            setNivelPeso('Peso Saludable');
        } else if (imcCalculado >= 25.0 && imcCalculado <= 29.9) {
            setNivelPeso('Sobrepeso');
        } else {
            setNivelPeso('Obesidad');
        }
    };

    return (
        <div className='container'>
            <h1>Calculadora de IMC</h1>
            <input 
                type="text" 
                placeholder="Nombre" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Apellido" 
                value={apellido} 
                onChange={(e) => setApellido(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Peso en kg" 
                value={peso} 
                onChange={(e) => setPeso(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Altura en metros" 
                value={altura} 
                onChange={(e) => setAltura(e.target.value)} 
            />
            <button onClick={calcularIMC}>Calcular IMC</button>

            {imc && (
                <div>
                    <h2>Paciente: {nombre} {apellido}</h2>
                    <p>IMC: {imc}</p>
                    <p>Nivel de peso: {nivelPeso}</p>
                </div>
            )}
        </div>
    );
}

export default CalcularImc;
