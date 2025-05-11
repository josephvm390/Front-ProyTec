import React from 'react'
import './Experience.css'

function Experience() {
    return (
        <section className="experience">
            <h2>
                Vive la experiencia <span className="smart-fit">Smart Fit:</span> El gimnasio para ti
            </h2>

            <div className="experience-gallery">
                <div className="gallery-item">
                    <img src="/img/scenary1.jpg" alt="Equipos modernos" />
                    <p>Equipos modernos</p>
                </div>
                <div className="gallery-item">
                    <img src="/img/scenary2.jpg" alt="Clases grupales" />
                    <p>Clases grupales</p>
                </div>
                <div className="gallery-item">
                    <img src="/img/scenary3.jpg" alt="Zona de entrenamiento" />
                    <p>Zona de entrenamiento</p>
                </div>
            </div>
        </section>
    )
}

export default Experience