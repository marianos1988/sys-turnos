import React from 'react'
import "../styles/botonNav.css"

export const BotonNav = ({ children, handleOnClick, newClass }) => {
  return (
    <button 
      className={`custom-btn btn-1 ${(newClass) ? newClass : ""}` }
      onClick={handleOnClick}
    >{children}</button>
  )
}
