import React from 'react'
import './Plans.css'

function Plans() {
    return (
        <section className="plans">
            <h2>ELIGE <span className="tu-plan">TU PLAN</span></h2>

            <div className="plans-container">
                <div className="plan-card2 plan-fit">
                    <div className="plan-circle">
                        <div className="plan-name">PLAN<br />FIT</div>
                    </div>
                    <ul className="plan-features">
                        <li>✓ Área de peso libre</li>
                        <li>✓ Acceso limitado</li>
                        <li>✓ Vestidores</li>
                        <li>✓ Área de cardio</li>
                        <li>✓ Zona de estiramiento</li>
                        <li>✓ Acceso a tiendas</li>
                        <li>✓ Gimnasios Smart Fit</li>
                    </ul>
                </div>

                <div className="plan-card2 plan-black">
                    <div className="plan-circle">
                        <div className="plan-name">PLAN<br />BLACK</div>
                    </div>
                    <ul className="plan-features">
                        <li>✓ Área de peso libre</li>
                        <li>✓ Acceso ilimitado</li>
                        <li>✓ Vestidores de toallas</li>
                        <li>✓ Clases grupales</li>
                        <li>✓ Acceso a regaderas</li>
                        <li>✓ Invitados 4 veces/mes</li>
                        <li>✓ Acceso a Smart Fit Go</li>
                        <li>✓ Sin multa por cancelación</li>
                    </ul>
                    <div className="plan-tag">¡MÁS<br />BENEFICIOS!</div>
                </div>

                <div className="plan-card2 plan-smart">
                    <div className="plan-circle">
                        <div className="plan-name">PLAN<br />SMART</div>
                    </div>
                    <ul className="plan-features">
                        <li>✓ Área de peso libre</li>
                        <li>✓ Acceso ilimitado</li>
                        <li>✓ Vestidores</li>
                        <li>✓ Área de cardio</li>
                        <li>✓ Zona de estiramiento</li>
                        <li>✓ Acceso a tiendas</li>
                        <li>✓ Gimnasios Smart Fit</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Plans