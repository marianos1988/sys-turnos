import React from 'react'
import "../styles/botonNav.css"

export const BotonNav = ({ children, handleOnClick }) => {
  return (
    <button 
      className="custom-btn btn-1"
      onClick={handleOnClick}
    >{children}</button>
  )
}
