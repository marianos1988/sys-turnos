import React, { useState } from 'react'
import { CartelAdvertenciaContext } from './CartelAdvertenciaContext';

export const CartelAdvertenciaProvider = ({ children }) => {
  const [mostrarCartelAdvertencia, setMostrarCartelAdvertencia] = useState(false);

  const handleMostrarCartelAdvertencia = () => {
    setMostrarCartelAdvertencia(!mostrarCartelAdvertencia);

  }
  return (
    <CartelAdvertenciaContext.Provider value={{ mostrarCartelAdvertencia, handleMostrarCartelAdvertencia}}>
      { children }
    </CartelAdvertenciaContext.Provider>
  )
}
