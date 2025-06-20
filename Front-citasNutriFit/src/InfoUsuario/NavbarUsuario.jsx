import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './NavbarUsuario.css'

function NavbarUsuario({ forceNutrifitActive = false }) {
    const location = useLocation()
    const isNutrifitActive = forceNutrifitActive || location.pathname === '/Nutrifit'
    return (
        <nav className="navbar-usuario">
            <img src="/img/logo_black.jpg" alt="Smart Fit Logo" className="logo-usuario" />
            <div className="nav-links-usuario">
                <NavLink to="/mainUsuario" className={({ isActive }) => isActive ? 'active' : ''}>INFORMACIÓN PERSONAL</NavLink>
                <NavLink to="/Rutinas" className={({ isActive }) => isActive ? 'active' : ''}>TUS RUTINAS</NavLink>
                <NavLink to="/Nutrifit" className={`nav-links-usuario-link ${isNutrifitActive ? 'active' : ''}`}>NUTRI FIT</NavLink>
            </div>
        </nav>
    )
}

export default NavbarUsuario