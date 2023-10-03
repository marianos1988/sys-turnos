import React from 'react'
import { Navbar } from './components/Navbar'
import { MisTurnos } from "./routes/MisTurnos"
import { NuevoTurno } from "./routes/NuevoTurno"
import { Navigate, Route, Routes } from 'react-router-dom'
import { CartelAdvertencia } from './components/CartelAdvertencia'
import { CartelAdvertenciaProvider } from './context/CartelAdvertenciaProvider'
import { EditarTurno } from './routes/EditarTurno'
import { CartelConfirmar } from './components/CartelConfirmar'
import { CartelConfirmarProvider } from './context/CartelConfirmarProvider'

export const App = () => {
  return (
    <>
      <CartelAdvertenciaProvider>
        <CartelConfirmarProvider>
          <CartelAdvertencia />
          <CartelConfirmar />
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element= { <MisTurnos></MisTurnos> }></Route>
            <Route path='/NuevoTurno' element= { <NuevoTurno></NuevoTurno> }></Route>
            <Route path="/*" element= { <Navigate to="/" /> }></Route>
            <Route path='/EditarTurno' element= { <EditarTurno></EditarTurno> }></Route>
          </Routes> 
        </CartelConfirmarProvider>
      </CartelAdvertenciaProvider>
    </>
  )
}
