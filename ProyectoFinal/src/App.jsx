import { useState } from 'react';
//import './App.css'; 
//import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Juego from './components/Juego';
//router
import {Routes,Route} from 'react-router-dom'
import AboutUs from './components/AboutUs';
import ErrorPage from './components/ErrorPage';
import JuegoPhaser from './components/JuegoPhaser';
import Layout from './components/Layout';
import Home from './components/Home';
import GestorBilletera from './components/GestorBilletera';
import CalcularImc from './components/CalcularIMC';
import Dificultad from './components/Dificultad';
import SumaResta from './components/SumaResta';

function App() {
  return ( 
    <div className='container'>
      <Routes>
    <Route path='/' element={<Layout/>}>
       <Route index element = {<Home/>}/>
       <Route path='/aboutUs' element ={<AboutUs/>}/>
       <Route path='/juego' element ={<Juego/>}/>
       <Route path='/juegoPhaser' element ={<JuegoPhaser/>}/>
       <Route path='/gestorBillerera' element ={<GestorBilletera/>}/>
       <Route path='/calcularIMC' element ={<CalcularImc/>}/>
       <Route path='/dificultad' element={<Dificultad/>}/>
       <Route path='/sumaResta' element={<SumaResta/>}/> 
       <Route path='*' element={<ErrorPage/>}/>
       </Route>
    </Routes>
   
    </div>

  );
}

export default App;
