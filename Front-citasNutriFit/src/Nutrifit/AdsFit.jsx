import React from 'react'
import './AdsFit.css'
import { Link } from 'react-router-dom'

function AdsFit() {
    return (
        <div className="adsfit-wrapper">
        <div className="background-overlay-black">
            <div class="blue-overlay"></div>
            {/* Equipos decorativos */}
            <div className="gym-equipment left">🏋️</div>
            <div className="gym-equipment right">💪</div>

            <div className="container-Ads">
                <header className="header-black">
                    <Link to="/NutriFit" className="back-button-black">BACK</Link>
                    <div className="logo-black">
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
                            smart<span style={{ color: '#FFD700' }}>fit</span>
                        </div>
                    </div>
                </header>

                <main className="main-content-Ads">
                    <div className="plan-card">
                        <div className="plan-title">PLAN BLACK</div>

                        <ul className="benefits-list">
                            <li>Área de peso libre y peso integrado</li>
                            <li>Sillón de masajes (PRÓXIMAMENTE)</li>
                            <li>Acceso a otras sedes de la cadena</li>
                            <li>Camiseta Black (PRÓXIMAMENTE)</li>
                            <li>Invita a un amigo</li>
                            <li>Acceso ilimitado a más de 280 sedes en latinoamérica</li>
                            <li>Trae un invitado a entrenar contigo</li>
                        </ul>

                        <div className="price-section">
                            <div className="price-label">A PARTIR DE</div>
                            <div className="price">
                                <span className="price-currency">$</span>109<span style={{ fontSize: '24px' }}>.00</span>
                            </div>
                            <div className="price-period">MENSUALES</div>
                        </div>

                        <div className="qr-code">
                            <div>
                                smart<br />
                                <span style={{ color: '#FFD700' }}>fit</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </div>
    )
}

export default AdsFit