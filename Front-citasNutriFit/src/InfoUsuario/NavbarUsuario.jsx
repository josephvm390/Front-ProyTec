import React from 'react'
import './NavbarUsuario.css'
import { Link } from 'react-router-dom'

function NavbarUsuario() {
    return (
        <div className="navbar-usuario">
            <div className="navbar-container-usuario">
                <div className="logo-usuario">
                    <img src="/img/logo_black.jpg" alt="Smart Fit" />
                </div>
            </div>
        </div>

    )
}

export default NavbarUsuario