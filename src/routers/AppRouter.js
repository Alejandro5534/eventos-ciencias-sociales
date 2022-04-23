import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AcercaScreen } from '../components/acerca/AcercaScreen';
import { ActividadScreen } from '../components/actividad/ActividadScreen';
import { EstanciasScreen } from '../components/estancias/EstanciasScreen';
import { InicioScreen } from '../components/inicio/InicioScreen';
import { SedesScreen } from '../components/sedes/SedesScreen';
import Navbar from '../components/ui/Navbar';
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<InicioScreen />} />
            <Route path="/inicio" element={<InicioScreen />} />
            <Route path="/acerca" element={<AcercaScreen />} />
            <Route path="/actividad" element={<ActividadScreen />} />
            <Route path="/estancias" element={<EstanciasScreen />} />
            <Route path="/sedes" element={<SedesScreen />} />
        </Routes>    
    </BrowserRouter>
  )
}
