import React from 'react'
import "../styles/navbar.css"
import { BotonNav } from './BotonNav'
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
          <NavLink to="/NuevoTurno">
            <BotonNav>
              <CreateIcon /><p>Nuevo Turno</p>
            </BotonNav></NavLink>
        </div>
        <div className='position-button-nav'>
          <NavLink to="/">
            <BotonNav>
              <CalendarMonthIcon className='icon-nav' /><p>Mis Turnos</p>
            </BotonNav>
          </NavLink>
        </div>
      </nav>
    </>
  )
}
