import React from 'react'
import "../styles/navbar.css"
import { Boton } from './Boton'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';


export const Navbar = () => {
  return (
    <>
      <nav className="container-navbar">
        <img src="../src/img/logo.jpg" alt="Logo" />
        <h2 className='title-nav'>Sys Turnos</h2>
        <div className='position-button-nav'>
          <Boton><CreateIcon /><p>Crear Turno</p></Boton>
        </div>
        <div className='position-button-nav'>
          <Boton><CalendarMonthIcon className='icon-nav' /><p>Mis Turnos</p></Boton>
        </div>
      </nav>
    </>
  )
}
