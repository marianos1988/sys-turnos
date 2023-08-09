import React from 'react'
import "../styles/navbar.css"
import { Boton } from './Boton'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <>
      <nav className="container-navbar">
        <img src="../src/img/logo.jpg" alt="Logo" />
        <h2 className='title-nav'>Sys Turnos</h2>
        <div className='position-button-nav'>
          <NavLink to="/NuevoTurno"><Boton><CreateIcon /><p>Crear Turno</p></Boton></NavLink>
        </div>
        <div className='position-button-nav'>
          <NavLink to="/"><Boton><CalendarMonthIcon className='icon-nav' /><p>Mis Turnos</p></Boton></NavLink>
        </div>
      </nav>
    </>
  )
}
