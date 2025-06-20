import React from 'react'
import NavbarUsuario from '../InfoUsuario/NavbarUsuario'
import './Nutrifit4.css'
import { Link } from 'react-router-dom'

function Nutrifit4() {
    return (
        <>
            <NavbarUsuario forceNutrifitActive={true}></NavbarUsuario>
            <main className="main-content4">
                <h1 className="title4">Realiza tu Cita con un Nutricionista de confianza</h1>
                <div className="title-underline4"></div>

                {/* Progress Steps */}
                <div className="progress-container4">
                    <div className="step4 completed4">
                        <div className="step-number4">1</div>
                        <div className="step-label4">Selecciona Modalidad</div>
                    </div>
                    <div className="step-line4 completed4"></div>
                    <div className="step4 completed4">
                        <div className="step-number4">2</div>
                        <div className="step-label4">Elige el Nutricionista</div>
                    </div>
                    <div className="step-line4 completed4"></div>
                    <div className="step4 completed4">
                        <div className="step-number4">3</div>
                        <div className="step-label4">Elige Fecha</div>
                    </div>
                    <div className="step-line4 completed4"></div>
                    <div className="step4 active4">
                        <div className="step-number4">4</div>
                        <div className="step-label4">Confirma tu cita</div>
                    </div>
                </div>

                {/* Appointment Info */}
                <div className="appointment-info4">
                    <h2 className="appointment-title4">NUTRICIONISTA - PRESENCIAL</h2>

                    <div className="info-item4">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Av. Paseo de la República 6500, Barranco</span>
                    </div>

                    <div className="info-item4">
                        <i className="fas fa-calendar-alt"></i>
                        <span>Miércoles, Octubre 3</span>
                    </div>

                    <div className="info-item4">
                        <i className="fas fa-clock"></i>
                        <span>7:30 p.m.</span>
                    </div>

                    <div className="info-item4">
                        <i className="fas fa-user-md"></i>
                        <span>DR. Jean Pitto Vilca</span>
                    </div>
                </div>

                {/* Form */}
                <form className="appointment-form4">
                    <div className="form-group4">
                        <input type="text" className="form-input4" placeholder="Nombres" required />
                    </div>

                    <div className="form-group4">
                        <input type="text" className="form-input4" placeholder="Apellidos" required />
                    </div>

                    <div className="form-group4">
                        <input type="email" className="form-input4" placeholder="Email" required />
                    </div>

                    <div className="form-group4">
                        <input type="tel" className="form-input4" placeholder="Celular" required />
                    </div>

                    <div className="checkbox-group4">
                        <input type="checkbox" id="terms4" className="checkbox-input4" />
                        <label htmlFor="terms4" className="checkbox-label4">He leído TyC.</label>
                    </div>

                    <button type="submit" className="confirm-button4">Confirmar Cita</button>
                </form>

                {/* Terms Text */}
                <div className="terms-text4">
                    <p>
                        Al seleccionar "Confirmar Cita", estás aceptando los términos y condiciones del Acuerdo de Usuario y la Política de Privacidad de SmartFit. *Pueden aplicarse tarifas por mensajes y datos. Puedes dejar de recibir mensajes respondiendo con STOP.
                    </p>
                    <p>
                        SmartFit usará tu información personal para procesar tu solicitud, lo cual puedes autorizar haciendo clic en <a href="#" className="terms-link4">No vender ni compartir mi información personal</a>.
                    </p>
                </div>
            </main>
        </>
    )
}

export default Nutrifit4