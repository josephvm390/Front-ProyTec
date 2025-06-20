import React from 'react'
import NavbarUsuario from '../InfoUsuario/NavbarUsuario'
import './Nutrifit3.css'
import { Link } from 'react-router-dom'

function Nutrifit3() {
    return (
        <>
            <NavbarUsuario forceNutrifitActive={true}></NavbarUsuario>
            <main className="main-content3">
                <h1 className="title3">Realiza tu Cita con un Nutricionista de confianza</h1>
                <div className="title-underline3"></div>

                {/* Progress Steps */}
                <div className="progress-container3">
                    <div className="step3 completed3">
                        <div className="step-number3">1</div>
                        <div className="step-label3">Selecciona Modalidad</div>
                    </div>
                    <div className="step-line3"></div>
                    <div className="step3 completed3">
                        <div className="step-number3">2</div>
                        <div className="step-label3">Elige el Nutricionista</div>
                    </div>
                    <div className="step-line3"></div>
                    <div className="step3 active3">
                        <div className="step-number3">3</div>
                        <div className="step-label3">Elige Fecha</div>
                    </div>
                    <div className="step-line3"></div>
                    <div className="step3">
                        <div className="step-number3">4</div>
                        <div className="step-label3">Confirma tu cita</div>
                    </div>
                </div>

                {/* Date and Time Selection */}
                <div className="selection-container3">
                    <div className="date-selector3">
                        <input type="date" className="date-dropdown3" id="fechaCita" name="fechaCita" />
                        <button className="date-button3">Elige tu Fecha</button>
                    </div>

                    <div className="time-selector3">
                        <input
                            type="time"
                            className="time-dropdown3"
                            id="horaCita"
                            name="horaCita"
                            step="1800"
                        />
                        <button className="time-button3">HORARIOS DISPONIBLES</button>
                    </div>

                    <div className="next-button-container3">
                        <button className="next-button3">
                            <span>&#8250;</span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Nutrifit3