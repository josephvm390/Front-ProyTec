import React from 'react'
import NavbarUsuario from './NavbarUsuario'
import './MainUsuario.css'
import { Outlet } from 'react-router-dom'
import InfoUsu from './InfoUsu'

function MainUsuario() {
    return (
        <>
            <NavbarUsuario />
            <InfoUsu></InfoUsu>
        </>
    )
}

export default MainUsuario