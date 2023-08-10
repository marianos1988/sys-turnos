import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import "./styles/index.css"
import { BrowserRouter } from "react-router-dom"
import { NuevoTurnoProvider } from './context/NuevoTurnoProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <NuevoTurnoProvider>
        <App />
      </NuevoTurnoProvider>
    </React.StrictMode>
  </BrowserRouter>,

)
