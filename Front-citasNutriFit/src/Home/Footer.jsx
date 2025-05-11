import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src="/img/logo_black.jpg" alt="Smart Fit" />
            </div>

            <div className="social-media">
                <p>Síguenos</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/smartfitpe/?locale=es_LA"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/smartfitpe/?hl=es"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UC9T5QGLXy2mgQePIJfjdi-Q"><i className="fab fa-youtube"></i></a>
                    <a href="https://x.com/smartfit_peru"><i className="fab fa-twitter"></i></a>
                    <a href="https://pe.linkedin.com/company/smart-fit-per%C3%BA"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            <div className="footer-info">
                <p>Lima, Perú</p>
                <p>Reserva de derechos (Grupo Fit)</p>
            </div>
        </footer>
    )
}

export default Footer