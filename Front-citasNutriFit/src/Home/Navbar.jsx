import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/img/logo_black.jpg" alt="Smart Fit" />
        </div>
        <div className="nav-buttons">
        <Link to="/login" className="login-btn">LOGIN-Cliente</Link>
        <Link to="/login2" className="login-btn2">LOGIN-Colaborador</Link>
        </div>
      </div>
    </div>

  )
}

export default Navbar