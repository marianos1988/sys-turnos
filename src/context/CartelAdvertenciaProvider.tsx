import React, { useState } from 'react'
import { CartelAdvertenciaContext } from './CartelAdvertenciaContext';

type DatosCartel = {
  mostrar: boolean
  mensaje?: string
  confirmarBtn?:string
}

type Props = {
  children: JSX.Element | JSX.Element[],
}

export const CartelAdvertenciaProvider = ({ children }:Props) => {
  const [mostrarCartelAdvertencia, setMostrarCartelAdvertencia] = useState<DatosCartel>({
    mostrar: false,
    mensaje: "",
    confirmarBtn : ""
  });

  const handleMostrarCartelAdvertencia = (mensaje: string) => {
    setMostrarCartelAdvertencia({ 
      mostrar: !mostrarCartelAdvertencia.mostrar, 
      mensaje: mensaje,
    });
  }


  return (
    <CartelAdvertenciaContext.Provider value={{ mostrarCartelAdvertencia, handleMostrarCartelAdvertencia}}>
      { children }
    </CartelAdvertenciaContext.Provider>
  )
}
