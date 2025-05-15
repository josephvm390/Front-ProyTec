import React from 'react'
import NavbarUsuario from './NavbarUsuario'
import './MainUsuario.css'
function MainUsuario() {
    return (
        <>
        <NavbarUsuario></NavbarUsuario>
        <div className="proximo-mensaje">
                PROXIMAMENTE ÁREA DE INFORMACIÓN DEL USUARIO<br />
                Gracias por su Preferencia<br />
                ATTE: GRUPO FIT
            </div>
        </>
    )
}

export default MainUsuario