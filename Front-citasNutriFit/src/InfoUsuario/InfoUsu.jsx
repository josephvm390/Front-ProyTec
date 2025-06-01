import React, { useState, useEffect } from 'react'
import './InfoUsu.css'
import axios from 'axios'
import { Link } from 'react-router-dom'



function InfoUsu() {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const email = localStorage.getItem('email');
        const dni = localStorage.getItem('dni');

        if (email && dni) {
            Promise.all([
                axios.get(`https://back-proytec.onrender.com/api/usuario/UserDetails/${email}`),
                axios.get(`https://back-proytec.onrender.com/api/suscritos/InfoUsu/${dni}`)
            ])
                .then(([userDetailsRes, suscritosRes]) => {
                    const combinedData = {
                        ...userDetailsRes.data,
                        ...suscritosRes.data
                    };

                    setUserData(combinedData);

                    // Guardar membresía si existe
                    if (combinedData.membresia) {
                        localStorage.setItem('membresia', combinedData.membresia);
                    }
                })
                .catch(err => console.error(err));
        } else if (email) {
            axios.get(`https://back-proytec.onrender.com/api/usuario/UserDetails/${email}`)
                .then(res => setUserData(res.data))
                .catch(err => console.error(err));
        } else if (dni) {
            axios.get(`https://back-proytec.onrender.com/api/suscritos/InfoUsu/${dni}`)
                .then(res => {
                    setUserData(res.data);

                    // Guardar membresía si existe
                    if (res.data.membresia) {
                        localStorage.setItem('membresia', res.data.membresia);
                    }
                })
                .catch(err => console.error(err));
        } else {
            console.error("No hay email ni dni guardados");
        }
    }, []);

    if (!userData) {
        return <div>Cargando datos...</div> // por si se DEMORA
    }
    return (
        <div className="main-container">
            <div className="left-section">
                <h2 className="section-title">DATOS PERSONALES</h2>

                <div className="plan-info">
                    <div className="plan-text">PLAN - {userData.membresia || 'No disponible'}</div>
                </div>

                <form id="personalForm">
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-input" value={userData.name || ''} readOnly />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Apellidos</label>
                            <input type="text" className="form-input" value={userData.lastName || ''} readOnly />
                        </div>
                        <div className="form-group">
                            <label className="form-label">DNI</label>
                            <input type="text" className="form-input" value={userData.dni || ''} readOnly />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Correo</label>
                            <input type="email" className="form-input" value={userData.email || ''} readOnly />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Teléfono</label>
                            <input type="tel" className="form-input" value={userData.telefono || ''} readOnly />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Contacto de Emergencia</label>
                            <input type="tel" className="form-input" value={userData.contactoEmer || ''} readOnly />
                        </div>
                    </div>
                    <Link to="/login" className="save-btn">LOG OUT</Link>
                </form>
                {/* Apartado de horarios de atencion */}
                <div className="schedule-section">
                    <h3 className="schedule-title">HORARIO DE ATENCIÓN</h3>
                    <table className="schedule-table">
                        <tbody>
                            <tr>
                                <td className="schedule-day">Lun - Vie</td>
                                <td>6am - 11pm</td>
                            </tr>
                            <tr>
                                <td className="schedule-day">Sab</td>
                                <td>6am - 6pm</td>
                            </tr>
                            <tr>
                                <td className="schedule-day">Dom/Feriados</td>
                                <td>9am - 3pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* // Apartado de Avisos */}
            <div className="right-section">
                <h2 className="section-title">Avisos Fit</h2>

                <div className="alert-card">
                    <img src="/img/user_aviso.jpg" alt="Avisos Fit - ¡Atención SmartFitero!" />
                </div>

                <div className="nutrition-section">
                    <h3 className="nutrition-title">Citas con Nutricionistas</h3>
                    <div className="nutrition-info">
                        INFORMACIÓN DE LA CITA PREVIAMENTE REGISTRADA - Sprint 3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoUsu