import React from 'react'
import NavbarUsuario from '../InfoUsuario/NavbarUsuario'
import './Nutrifit1.css'
import { Link } from 'react-router-dom'

function Nutrifit1() {
    return (
        <>
            <NavbarUsuario forceNutrifitActive={true}></NavbarUsuario>
            <main className="main-content1">
                <h1 className="title1">Realiza tu Cita con un Nutricionista de confianza</h1>
                <div className="title-underline1"></div>

                {/* Progress Steps */}
                <div className="progress-container1">
                    <div className="step1 active1">
                        <div className="step-number1">1</div>
                        <div className="step-label1">Selecciona Modalidad</div>
                    </div>
                    <div className="step-line1"></div>
                    <div className="step1">
                        <div className="step-number1">2</div>
                        <div className="step-label1">Elige el Nutricionista</div>
                    </div>
                    <div className="step-line1"></div>
                    <div className="step1">
                        <div className="step-number1">3</div>
                        <div className="step-label1">Requerimientos opcionales</div>
                    </div>
                    <div className="step-line1"></div>
                    <div className="step1">
                        <div className="step-number1">4</div>
                        <div className="step-label1">Confirma tu reserva</div>
                    </div>
                </div>

                {/* Modality Selection */}
                <div className="modality-container1">
                    <button className="modality-btn1 presencial1">PRESENCIAL</button>
                    <button className="modality-btn1 virtual1">VIRTUAL</button>
                </div>
            </main>
        </>
    )
}

export default Nutrifit1