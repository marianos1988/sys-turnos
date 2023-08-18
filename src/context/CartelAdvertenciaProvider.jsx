import React, { useState } from 'react'
import { CartelAdvertenciaContext } from './CartelAdvertenciaContext';

export const CartelAdvertenciaProvider = ({ children }) => {
  const [mostrarCartelAdvertencia, setMostrarCartelAdvertencia] = useState({
    mostrar: false,
    mensaje: ""
  });

  const handleMostrarCartelAdvertencia = (mensaje) => {
    setMostrarCartelAdvertencia({ 
      mostrar: !mostrarCartelAdvertencia.mostrar, 
      mensaje: mensaje
    });

  }
  return (
    <CartelAdvertenciaContext.Provider value={{ mostrarCartelAdvertencia, handleMostrarCartelAdvertencia}}>
      { children }
    </CartelAdvertenciaContext.Provider>
  )
}
