import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/GestorBilletera.css'

// Componente funcional para guardar datos sobre las transacciones de una billetera de un usuario
function GestorBilletera() {
  const [usuario, setUsuario] = useState('');
  const [billetera, setBilletera] = useState('');
  const [transaccion, setTransaccion] = useState('');
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [listaBilleteras, setListaBilleteras] = useState([]);
  const [listaTransacciones, setListaTransacciones] = useState([]);
  const [resultados, setResultados] = useState([]);

  // Lista de opciones para las billeteras
  const billeterasDisponibles = ["Personal Pay", "NaranjaX", "MercadoPago", "Claro", "Otra"];
  
  // Función callback para guardar datos
  const guardarDatos = () => {
    const nombreValido = /^[a-zA-Z\s]+$/.test(usuario.trim());

    if (!nombreValido) {
      alert("El nombre de usuario debe contener solo letras.");
      return;
    }
    setListaUsuarios([...listaUsuarios, usuario]); //Guardamos los datos en la Lista de Usuarios
    setListaBilleteras([...listaBilleteras, billetera]); //Guardamos los datos en la Lista de Billeteras
    setListaTransacciones([...listaTransacciones, parseInt(transaccion, 10)]); //Guardamos los datos en la Lista de transacciones y cambiamos el valor a un entero
    setUsuario(''); //Limpiamos los campos despues de guardar los datos
    setBilletera(''); //Limpiamos los campos despues de guardar los datos
    setTransaccion(''); //Limpiamos los campos despues de guardar los datos
  };
  
   // Función callback para mostrar los datos guardados
  const mostrarDatos = () => {
    return listaUsuarios.map((usuario, index) => ( //Utilizamos map para iterar sobre el array de usuarios y generamos un elemento para cada usuario con sus datos
     //Renderizamos la lista con los datos del usuario y usamos su posicion en el array como key
     <li key={index} className="list-group-item"> 
        {usuario} - {listaBilleteras[index]} - {listaTransacciones[index]} 
      </li>
    ));
  };
  
  // Función para mostrar al usuario con la mayor transacción
  const mostrarMayor = () => {
    const maxTransacciones = {}; //Almacenamos el numero maximo de transacciones para cada usuario
    listaUsuarios.forEach((usuario, index) => { // Iteramos sobre cada usuario en la lista
      const trans = listaTransacciones[index]; // Obtenemos el numero de transacciones del usuario mediante el indice del array
      if (!maxTransacciones[usuario] || trans > maxTransacciones[usuario]) { // Si el usuario no tiene transacciones o la transaccion actual es mayor que la registrada se actualiza la transaccion mayor del usuario
        maxTransacciones[usuario] = trans;
      }
    });

    const resultadosTemp = Object.entries(maxTransacciones).map( // Mediante Object.entries convertimos el array en una tupla con clave-valor, y luego con map creamos otro array para mostrar los datos
      ([usuario, transaccion]) => `${usuario} tiene la transacción más alta: ${transaccion}` // Mostramos cada usuario y transaccion mas alta en un array legible
    );
    setResultados(resultadosTemp); // Establecemos el nuevo valor de los resultados con el valor de resultadosTemp
  };

  // Función para procesar los datos acumulados
  const obtenerDatosAcumulados = () => {
    const acumulado = {};

    listaUsuarios.forEach((u, index) => {
      const key = `${u}`; // Usar una clave única con el nombre y la billetera
      if (acumulado[key]) {
        acumulado[key].transacciones += listaTransacciones[index];
      } else {
        acumulado[key] = {
          nombre: u,
          transacciones: listaTransacciones[index],
        };
      }
    });

    return Object.values(acumulado); // Convertir el objeto en un array para mostrar
  };

  // Función para mostrar los datos acumulados
  const mostrarAcumulados = () => {
    const datosAcumulados = obtenerDatosAcumulados();
    return datosAcumulados.map((u, index) => (
      <li key={index} className="list-group-item">
        {u.nombre} - {u.billetera} - Total Transacciones: {u.transacciones}
      </li>
    ));
  };
  return (
    <div className="container-flex" id='bodyGestor'>
      <div className="card custom-card" style={{ width: '40rem' }}>
        <img src="/public/img/Bvirt.jpg" className="card-img-top" alt="Imagen Billetera" />
        <div className="card-body">
          <h5 className="card-title">Administrador de Billeteras</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input
              type="text"
              placeholder="Nombre de Usuario"
              className="form-control"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)} //Actualizamos al estado correspondiente con OnChange
            />
          </li>
          <li className="list-group-item">
          <select
              className="form-select"
              value={billetera}
              onChange={(e) => {
                const valorSeleccionado = e.target.value;
                if (valorSeleccionado === "Otra") {
                  const nuevaBilletera = prompt("Ingresa el nombre de la nueva billetera:");
                  setBilletera(nuevaBilletera || ""); // Actualiza solo si el usuario introduce un valor
                } else {
                  setBilletera(valorSeleccionado);
                }
              }}
            >
              <option value="" disabled>
                Selecciona una billetera
              </option>
              {billeterasDisponibles.map((opcion, index) => (
                <option key={index} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </li>
          <li className="list-group-item">
            <input
              type="number"
              placeholder="N° Transacciones"
              className="form-control"
              value={transaccion}
              onChange={(e) => {                       //Actualizamos y verificamos al estado correspondiente con OnChange
                const valor = e.target.value;
                if (!isNaN(valor) && parseInt(valor, 10) >= 0) {
                  setTransaccion(valor);
                } else {
                  alert('Ingresa un número válido de transacciones.');
                }
              }} 
              min = "1"
           />
          </li>
         
        </ul>
        <div className="flex-container mt-3">
          {/* Boton que al ser presionado llama a la funcion callback guardarDatos */}
          <button className="btn btn-outline-secondary me-2" onClick={guardarDatos}> 
            Guardar
          </button>
          {/* Boton que al ser presionado llama a la funciona callback mostrarMayor */}
          <button className="btn btn-outline-secondary me-2" onClick={mostrarMayor}>
            Mayor N° Trans.
          </button>
        </div>
      </div>

      <div className="container mt-4">
        <h5>Lista de Usuarios</h5>
        {/* Se enlistan los datos de la lista que contiene mostrarDatos*/}
        <ul className="list-group">{mostrarDatos()}</ul>
      </div>

      <div className="container mt-4">
        <h5>Total de Transacciones</h5>
        <ul className="list-group">{mostrarAcumulados()}</ul>
      </div>

      <div className="container mt-4">
        <h5>Resultados</h5>
        {/* Recorremos el array resultados, y para cada elemento creamos un parrafo para el contenido de cada resultado*/}
        {resultados.map((resultado, index) => (
          <p key={index}>{resultado}</p>
        ))}
      </div>
    </div>
  );
}

export default GestorBilletera;
