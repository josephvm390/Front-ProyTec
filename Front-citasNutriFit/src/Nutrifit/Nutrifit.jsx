import React from 'react'
import NavbarUsuario from '../InfoUsuario/NavbarUsuario';
import './Nutrifit.css'
import { Link } from 'react-router-dom'

function Nutrifit() {
    const membresia = localStorage.getItem('membresia')

    return (
        <>
            <NavbarUsuario />
            {membresia === 'Black' ? (
                <main className="main-content-black">
                    <h1 className="title">Realiza tu Cita con un Nutricionista de confianza</h1>
                    <div className="title-underline"></div>

                    <div className="important-notice">¡IMPORTANTE!</div>

                    <p className="info-text">
                        Antes de enviar realizar tu cita con un nutricionista debe tener en cuenta lo siguiente:
                    </p>

                    <ul className="info-list">
                        <li>Se tomarán en cuenta las citas realizadas <strong>según los horarios disponibles</strong></li>
                        <li>Se aceptarán citas por este medio <strong>solo de Lunes a Viernes.</strong></li>
                        <li>Reservas sujetas a disponibilidad del Nutricionista. <strong>No está disponible en feriados y días festivos.</strong></li>
                        <li><strong>La reserva se confirmará por medio del correo que el usuario esté brindando</strong></li>
                        <li>En caso de querer cambiar la cita comunicarse al teléfono del nutricionista</li>
                    </ul>

                    <button className="accept-button">Aceptar</button>
                </main>
            ) : (
                <main className="contenido-diferente">
                    <img src="img/SmartFit.jpg" alt="Smart Fit" className="logo-central" />
                    <p className="mensaje">SOLO DISPONIBLE PARA LOS USUARIOS CON PLAN BLACK</p>
                    <Link to="/AdsFit" className="boton">
                        Conoce más sobre el plan Black
                    </Link>
                </main>
            )}
        </>
    );
}

export default Nutrifit