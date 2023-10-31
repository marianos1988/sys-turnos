import React from 'react'
import "../styles/navbar.css"
import { BotonNav } from './BotonNav'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import  CreateIcon from '@mui/icons-material/Create';
import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { IUserLogeado } from '../types/interface';
import { unsetUserLogeado } from '../reducer/UserLogin';


export const Navbar = () => {
  const { userLogeado } = useSelector((state:IUserLogeado) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="container-navbar">

        <img src="../src/img/logo.jpg" alt="Logo" />
        <h2 className='title-nav'>Sys Turnos</h2>
        <div className='position-button-nav'>
          {
            (userLogeado.logeado) 
              && (
                <NavLink to="/NuevoTurno">
                  <BotonNav newClass='btn-responsive' handleOnClick={undefined}>
                    <CreateIcon /><p className='text-btn'>Nuevo Turno</p>
                  </BotonNav>
                </NavLink>
                )
          }
        </div>
        <div className='position-button-nav'>
          {
            (userLogeado.logeado) && (
              <NavLink to="/home">
                <BotonNav newClass='btn-responsive' handleOnClick={undefined}>
                  <CalendarMonthIcon className='icon-nav' />
                  <p className='text-btn'>Mis Turnos</p>
                </BotonNav>
              </NavLink>
            )
          }
        </div>
        <div className='container-user-login'>
          <p>{ (userLogeado.logeado) ? `Usuario: ${userLogeado.user[0].toUpperCase()}${userLogeado.user.slice(1,100)}` : "Iniciar Sesion" }</p>
          <button
            onClick={()=>{dispatch(unsetUserLogeado())}}
          >Salir</button>
        </div>
      </nav>
    </>
  )
}
