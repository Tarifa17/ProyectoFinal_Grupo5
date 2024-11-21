import React, { useState } from 'react';
import '../Styles/Calculadora.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente funcional para calcular el peso del usuario
function CalcularImc() { 
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [imc, setImc] = useState(null);
    const [nivelPeso, setNivelPeso] = useState('');

    //Funcion callback para calcular el IMC
    const calcularIMC = () => {
        const alturaMetros = parseFloat(altura); //Convertimos los datos del usuario a flotantes
        const pesoKg = parseFloat(peso); //Convertimos los datos del usuario a flotantes

        if (!pesoKg || !alturaMetros) return; //Si los datos introducidos son invalidos se detiene la funcion 

        const imcCalculado = pesoKg / Math.pow(alturaMetros, 2); //Calculo usando la formula y lo guardamos en una variable
        setImc(imcCalculado.toFixed(2)); //El resultado del calculo lo redondeamos a maximo 2 decimales

        if (imcCalculado < 18.5) {
            setNivelPeso('Bajo Peso'); // Establecemos una condicion y si el resultado es menor a 18.5, la variable de peso cambia a este valor
        } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
            setNivelPeso('Peso Saludable'); // Establecemos una condicion y si el resultado esta entre 18.5 y 24.9, la variable de peso cambia a este valor
        } else if (imcCalculado >= 25.0 && imcCalculado <= 29.9) {
            setNivelPeso('Sobrepeso'); // Establecemos una condicion y si el resultado esta entre 25 y 29.9, la variable de peso cambia a este valor
        } else {
            setNivelPeso('Obesidad'); // Por el contrario, si ninguno de los resultados anteriores es correcto, la variable peso cambia a este valor
        }
    };
    // Funcion callback para restablecer el valor de todos los campos a vacio y el IMC nulo 
    const limpiarCampos = () => {
       
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
                onChange={(e) => setNombre(e.target.value)} //Actualizamos al estado correspondiente con OnChange
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
            <button onClick={calcularIMC}>Calcular IMC</button> {/* Boton que al haecr click llama a la funcion callback para calcular el IMC */}
            <button onClick={limpiarCampos}>Limpiar</button> {/* Boton que al haecr click llama a la funcion callback para poner el valor de los campos en vacio*/}

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
