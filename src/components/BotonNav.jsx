import React from 'react'
import "../styles/botonNav.css"

export const BotonNav = ({ children }) => {
  return (
    <button className="custom-btn btn-1">{children}</button>
  )
}
