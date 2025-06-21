import React from 'react'
import NavbarUsuario from './NavbarUsuario'
import './MainUsuario.css'
import { Outlet } from 'react-router-dom'
import InfoUsu from './InfoUsu'
import Tablecita from './Tablecita'

function MainUsuario() {
    return (
        <>
            <NavbarUsuario />
            <InfoUsu></InfoUsu>
            <Tablecita></Tablecita>
        </>
    )
}

export default MainUsuario