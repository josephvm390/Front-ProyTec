import React from 'react'
import './GroupClasses.css'
function GroupClasses() {
    return (
        <section className="group-classes">
            <h2>
                Clases Grupales <span className="exclusivas">EXCLUSIVAS</span>
            </h2>

            <div className="classes-gallery">
                <div className="class-item">
                    <img src="/img/zumba.jpg" alt="Zumba" />
                    <div className="class-name">ZUMBA</div>
                </div>
                <div className="class-item">
                    <img src="/img/tabata.jpg" alt="Smart Shape" />
                    <div className="class-name">SMART SHAPE</div>
                </div>
                <div className="class-item">
                    <img src="/img/bike.jpg" alt="Bike" />
                    <div className="class-name">BIKE</div>
                </div>
            </div>
        </section>
    )
}

export default GroupClasses