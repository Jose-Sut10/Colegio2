import './App.css';
import Actividades from './components/actividadesDestac/acctDest';
import CarrerasDisponibles from './components/carreras/carreras';
import Home from './components/home/home';
import './reset.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pagos from './components/pagos/pagos';
import Preincripcion from './components/preinscripcion/preinscripcion';
import Devs from './components/desarrolladores/devs';

const App = ()=> {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/carreras' element={<CarrerasDisponibles/>}/>
          <Route path='/actividades' element={<Actividades/>} />
          <Route path='/pagos' element={<Pagos/>} />
          <Route path='/preinscripcion' element={<Preincripcion/>} />
          <Route path='/devs' element={<Devs/>} />
        </Routes>
    </Router>
  );
}

export default App;