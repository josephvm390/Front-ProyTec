import React from 'react'
import './NavbarUsuario.css'
import { Link } from 'react-router-dom'

function NavbarUsuario() {
    return (
        <nav className="navbar-usuario">
            <img src="/img/logo_black.jpg" alt="Smart Fit Logo" className="logo-usuario" />
            <div className="nav-links-usuario">
                <Link to="#" className="active">INFORMACIÓN PERSONAL</Link>
                <Link to="#">TUS RUTINAS</Link>
                <Link to="#">NUTRI FIT</Link>
            </div>
        </nav>
    )
}

export default NavbarUsuario