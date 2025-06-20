import React from 'react'
import NavbarUsuario from '../InfoUsuario/NavbarUsuario'
import './Nutrifit2.css'
import { Link } from 'react-router-dom'

function Nutrifit2() {
    return (
        <>
            <NavbarUsuario forceNutrifitActive={true}></NavbarUsuario>
            <main className="main-content2">
                <h1 className="title2">Realiza tu Cita con un Nutricionista de confianza</h1>
                <div className="title-underline2"></div>

                {/* Progress Steps */}
                <div className="progress-container2">
                    <div className="step2 completed2">
                        <div className="step-number2">1</div>
                        <div className="step-label2">Selecciona Modalidad</div>
                    </div>
                    <div className="step-line2"></div>
                    <div className="step2 active2">
                        <div className="step-number2">2</div>
                        <div className="step-label2">Elige el Nutricionista</div>
                    </div>
                    <div className="step-line2"></div>
                    <div className="step2">
                        <div className="step-number2">3</div>
                        <div className="step-label2">Elige tu horario</div>
                    </div>
                    <div className="step-line2"></div>
                    <div className="step2">
                        <div className="step-number2">4</div>
                        <div className="step-label2">Confirma tu cita</div>
                    </div>
                </div>

                {/* Nutritionist Selection */}
                <div className="nutritionist-container2">
                    <div className="nutritionist-card2">
                        <img src="img/doctor1.jpg" alt="Dr. Lucas" className="nutritionist-avatar2" />
                        <div className="nutritionist-info2">
                            <h3 className="nutritionist-name2">DR. Lucas LLano Baldera</h3>
                            <p className="nutritionist-detail2">Celular: 966567890</p>
                            <p className="nutritionist-detail2">Correo: Lucas@gmail.com</p>
                        </div>
                    </div>

                    <div className="nutritionist-card2">
                        <img src="img/doctor2.jpg" alt="Dr. Piero" className="nutritionist-avatar2" />
                        <div className="nutritionist-info2">
                            <h3 className="nutritionist-name2">DR. PIERO MENDEZ LEON</h3>
                            <p className="nutritionist-detail2">Celular: 966567890</p>
                            <p className="nutritionist-detail2">Correo: Piero@gmail.com</p>
                        </div>
                    </div>

                    <div className="nutritionist-card2">
                        <img src="img/doctor3.jpg" alt="Dr. Jean" className="nutritionist-avatar2" />
                        <div className="nutritionist-info2">
                            <h3 className="nutritionist-name2">DR. JEAN PINTO VILCA</h3>
                            <p className="nutritionist-detail2">Celular: 966567890</p>
                            <p className="nutritionist-detail2">Correo: JEAN@gmail.com</p>
                        </div>
                    </div>

                    <div className="nutritionist-card2">
                        <img src="img/doctor4.jpg" alt="Dr. Pedro" className="nutritionist-avatar2" />
                        <div className="nutritionist-info2">
                            <h3 className="nutritionist-name2">DR. PEDRO MEDINA VILLA</h3>
                            <p className="nutritionist-detail2">Celular: 966567890</p>
                            <p className="nutritionist-detail2">Correo: Pedro@gmail.com</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Nutrifit2