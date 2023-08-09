import React from 'react'
import { Navbar } from './components/Navbar'
import { MisTurnos } from "./routes/MisTurnos"
import { NuevoTurno } from "./routes/NuevoTurno"
import { Navigate, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element= { <MisTurnos></MisTurnos> }></Route>
        <Route path='/NuevoTurno' element= { <NuevoTurno></NuevoTurno> }></Route>
        <Route path="/*" element= { <Navigate to="/" /> }></Route>
      </Routes> 
    </>
  )
}
