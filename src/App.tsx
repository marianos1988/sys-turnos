import React from 'react'
import { Navbar } from './components/Navbar'
import { MisTurnos } from "./routes/MisTurnos"
import { NuevoTurno } from "./routes/NuevoTurno"
import { Navigate, Route, Routes } from 'react-router-dom'
import { EditarTurno } from './routes/EditarTurno'
import { Login } from "./routes/Login"
import { CartelAdvertencia } from './components/CartelAdvertencia'
import { CartelConfirmar } from './components/CartelConfirmar'

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <CartelAdvertencia></CartelAdvertencia>
      <CartelConfirmar></CartelConfirmar>
      <Routes>
        <Route path='/' element={ <Login></Login>}></Route>
        <Route path="/home" element= { <MisTurnos></MisTurnos> }></Route>
        <Route path='/NuevoTurno' element= { <NuevoTurno></NuevoTurno> }></Route>
        <Route path="/*" element= { <Navigate to="/" /> }></Route>
        <Route path='/EditarTurno' element= { <EditarTurno></EditarTurno> }></Route>
      </Routes> 

    </>
  )
}
