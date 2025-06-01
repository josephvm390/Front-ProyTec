import React from 'react'
import './Rutinas.css'
import NavbarUsuario from '../InfoUsuario/NavbarUsuario'


function Rutinas() {
    return (
        <>
        <NavbarUsuario />
        <div className="container-rutinas">
            <h1 className="page-title">RUTINA PRINCIPIANTE</h1>

            {/* Pectorales */}
            <h2 className="section-title">Pectorales</h2>
            <div className="exercise-grid">
                <div className="exercise-card">
                    <div className="exercise-name">Press de banca</div>
                    <img src="img/rutinas_img/pectorales.jpg" alt="Press de banca" className="exercise-image" />
                    <div className="exercise-details">
                        <p>3×15 - Descanso entre series 00:45 seg - <b>MAX RECOMENDADO</b></p>
                        <p>3×9 - Descanso entre series 00:45 seg - <b>Minimo</b></p>
                    </div>
                </div>

                <div className="exercise-card">
                    <div className="exercise-name">Aperturas con mancuernas</div>
                    <img src="img/rutinas_img//apertura.jpeg" alt="Aperturas con mancuernas" className="exercise-image" />
                    <div className="exercise-details">
                        <p>3×15 - Descanso entre series 00:50 seg - <b>MAX RECOMENDADO</b></p>
                        <p>3×9 - Descanso entre series 00:50 seg - <b>Minimo</b></p>
                    </div>
                </div>

                <div className="exercise-card">
                    <div className="exercise-name">Hombros</div>
                    <img src="img/rutinas_img/hombros.jpg" alt="Flexiones" className="exercise-image" />
                    <div className="exercise-details">
                        <p>3×15 - Descanso entre series 00:50 seg - <b>MAX RECOMENDADO</b></p>
                        <p>3×10 - Descanso entre series 00:50 seg - <b>Minimo</b></p>
                    </div>
                </div>
            </div>

            {/* Dorsales */}
            <h2 className="section-title">Dorsales</h2>
            <div className="exercise-grid">
                <div className="exercise-card">
                    <div className="exercise-name">Jalón al pecho</div>
                    <img src="img/rutinas_img/dorsales.jpg" alt="Jalón al pecho" className="exercise-image" />
                    <div className="exercise-details">
                        <p>3×15 - Descanso entre series 01:00 min - <b>MAX RECOMENDADO</b></p>
                        <p>3×8 - Descanso entre series 01:00 min - <b>Minimo</b></p>
                    </div>
                </div>

                <div className="exercise-card">
                    <div className="exercise-name">Remo con barra</div>
                    <img src="img/rutinas_img/remos.jpg" alt="Remo con barra" className="exercise-image" />
                    <div className="exercise-details">
                        <p>3×12 - Descanso entre series 01:00 min - <b>MAX RECOMENDADO</b></p>
                        <p>3×9 - Descanso entre series 01:00 min - <b>Minimo</b></p>
                    </div>
                </div>
            </div>

            {/* Brazos */}
            <h2 className="section-title">Brazos</h2>
            <div className="exercise-grid">
                <div className="exercise-card">
                    <div className="exercise-name">Curl de bíceps</div>
                    <img src="img/rutinas_img/deltoides.jpg" alt="Curl de bíceps" className="exercise-image" />
                    <div className="exercise-details">
                        <p>3×12 - Descanso entre series 01:00 min - <b>MAX RECOMENDADO</b></p>
                        <p>3×9 - Descanso entre series 01:00 min - <b>Minimo</b></p>
                    </div>
                </div>

                <div className="exercise-card">
                    <div className="exercise-name">Extensión de tríceps</div>
                    <img src="img/rutinas_img/triceps.jpg" alt="Extensión de tríceps" className="exercise-image" />
                    <div className="exercise-details">
                        <p>3×14 - Descanso entre series 00:45 seg - <b>MAX RECOMENDADO</b></p>
                        <p>3×8 - Descanso entre series 00:45 seg - <b>Minimo</b></p>
                    </div>
                </div>
            </div>

            {/* Piernas */}
            <h2 className="section-title">Piernas</h2>
            <div className="exercise-grid">
                <div className="exercise-card">
                    <div className="exercise-name">Leg Press</div>
                    <img src="img/rutinas_img/abductordecadera.jpg" alt="Leg Press" className="exercise-image" />
                    <div className="exercise-details">
                        <p>3×14 - Descanso entre series 00:45 seg - <b>MAX RECOMENDADO</b></p>
                        <p>3×10 - Descanso entre series 00:45 seg - </p>
                    </div>
                </div>

                <div className="exercise-card">
                    <div className="exercise-name">Leg Extension</div>
                    <img src="img/rutinas_img/legextension.jpg" alt="Leg Extension" className="exercise-image" />
                    <div className="exercise-details">
                        <p>3×14 - Descanso entre series 00:45 seg - <b>MAX RECOMENDADO</b></p>
                        <p>3×10 - Descanso entre series 00:45 seg - <b>Minimo</b></p>
                    </div>
                </div>
            </div>

            {/* Nota final */}
            <div className="note">
                NOTA: SE RECOMIENDA HACER CARDIO 5 MINUTOS ANTES Y DESPUES DE UNA RUTINA COMPLETA DE MINIMO 5 EJERCICIOS
            </div>
        </div>
        </>
    )
}

export default Rutinas