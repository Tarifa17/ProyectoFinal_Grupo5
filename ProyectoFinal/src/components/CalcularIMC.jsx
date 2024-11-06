import React, { useState } from 'react';
import './Calculadora.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CalcularImc() { //Funcion para calcular el peso del usuario
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [imc, setImc] = useState(null);
    const [nivelPeso, setNivelPeso] = useState('');

    const calcularIMC = () => {
        const alturaMetros = parseFloat(altura); //Convertimos los datos del usuario a flotantes
        const pesoKg = parseFloat(peso); //Convertimos los datos del usuario a flotantes

        if (!pesoKg || !alturaMetros) return; //Si los datos introducidos son invalidos se detiene la funcion 

        const imcCalculado = pesoKg / Math.pow(alturaMetros, 2); //Calculo usando la formula y lo guardamos en una variable
        setImc(imcCalculado.toFixed(2)); //El resultado del calculo lo redondeamos a maximo 2 decimales

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
    const limpiarCampos = () => {
        // Metodo para restablecer el valor de todos los campos
        setPeso('');
        setAltura('');
        setNombre('');
        setApellido('');
        setImc(null);
        setNivelPeso('');
    };


    return (
        <div className='container' id='bodyIMC'>
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
                onChange={(e) => setApellido(e.target.value)} //Actualizamos al estado correspondiente con OnChange
            />
            <input 
                type="number" 
                placeholder="Peso en kg" 
                value={peso} 
                onChange={(e) => setPeso(e.target.value)} //Actualizamos al estado correspondiente con OnChange
            />
            <input 
                type="number" 
                placeholder="Altura en metros" 
                value={altura} 
                onChange={(e) => setAltura(e.target.value)} //Actualizamos al estado correspondiente con OnChange
            /> 
            <button onClick={calcularIMC}>Calcular IMC</button> 
            <button onClick={limpiarCampos}>Limpiar</button>

            {imc && ( //Esto se muestra despues de ingresar los resultados
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
