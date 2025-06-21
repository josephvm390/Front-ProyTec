import React, { useEffect, useState } from 'react';
import NavbarUsuario from '../InfoUsuario/NavbarUsuario'
import './Nutrifit4.css'
import { useNavigate } from 'react-router-dom'
import axios, { Axios } from "axios"

function Nutrifit4() {

    const [modalidad, setModalidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [doctor, setDoctor] = useState('');

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setModalidad(localStorage.getItem('modalidad') || '');
        setDireccion(localStorage.getItem('direccion') || 'Virtual');
        setFecha(localStorage.getItem('fecha') || '');
        setHora(localStorage.getItem('hora') || '');
        setDoctor(localStorage.getItem('nombre_doctor') || '');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!termsAccepted) {
            alert("Debes aceptar los Términos y Condiciones.");
            return;
        }

        const [dia, mes, anio] = fecha.split('/');
        const fechaEdit = new Date(`${anio}-${mes}-${dia}`);

        try {
            const response = await axios.post('https://back-proytec.onrender.com/api/citas/crearCita', {
                modalidad,
                direccion,
                fecha: fechaEdit,
                hora,
                nombre_doctor: doctor,
                nombre_paciente: nombres,
                apellido_paciente: apellidos,
                email,
                celular_paciente: celular
            });

            alert("Cita registrada exitosamente");
            localStorage.removeItem('modalidad');
            localStorage.removeItem('direccion');
            localStorage.removeItem('fecha');
            localStorage.removeItem('hora');
            localStorage.removeItem('nombre_doctor');
            navigate('/Nutrifit');

        } catch (err) {
            console.error(err);
            alert("Error al registrar la cita");
        }
    };
    return (
        <>
            <NavbarUsuario forceNutrifitActive={true}></NavbarUsuario>
            <main className="main-content4">
                <h1 className="title4">Realiza tu Cita con un Nutricionista de confianza</h1>
                <div className="title-underline4"></div>

                {/* Progress Steps */}
                <div className="progress-container4">
                    <div className="step4 completed4">
                        <div className="step-number4">1</div>
                        <div className="step-label4">Selecciona Modalidad</div>
                    </div>
                    <div className="step-line4 completed4"></div>
                    <div className="step4 completed4">
                        <div className="step-number4">2</div>
                        <div className="step-label4">Elige el Nutricionista</div>
                    </div>
                    <div className="step-line4 completed4"></div>
                    <div className="step4 completed4">
                        <div className="step-number4">3</div>
                        <div className="step-label4">Elige Fecha</div>
                    </div>
                    <div className="step-line4 completed4"></div>
                    <div className="step4 active4">
                        <div className="step-number4">4</div>
                        <div className="step-label4">Confirma tu cita</div>
                    </div>
                </div>

                {/* Appointment Info */}
                <div className="appointment-info4">
                    <h2 className="appointment-title4">NUTRICIONISTA - {modalidad}</h2>

                    <div className="info-item4">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{direccion}</span>
                    </div>

                    <div className="info-item4">
                        <i className="fas fa-calendar-alt"></i>
                        <span>{fecha}</span>
                    </div>

                    <div className="info-item4">
                        <i className="fas fa-clock"></i>
                        <span>{hora}</span>
                    </div>

                    <div className="info-item4">
                        <i className="fas fa-user-md"></i>
                        <span>{doctor}</span>
                    </div>
                </div>

                {/* Form */}
                <form className="appointment-form4" onSubmit={handleSubmit}>
                    <div className="form-group4">
                        <input
                            type="text"
                            className="form-input4"
                            placeholder="Nombres"
                            required
                            value={nombres}
                            onChange={(e) => setNombres(e.target.value)}
                        />
                    </div>

                    <div className="form-group4">
                        <input
                            type="text"
                            className="form-input4"
                            placeholder="Apellidos"
                            required
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                        />
                    </div>

                    <div className="form-group4">
                        <input
                            type="email"
                            className="form-input4"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group4">
                        <input
                            type="tel"
                            className="form-input4"
                            placeholder="Celular"
                            required
                            value={celular}
                            onChange={(e) => setCelular(e.target.value)}
                        />
                    </div>

                    <div className="checkbox-group4">
                        <input
                            type="checkbox"
                            id="terms4"
                            className="checkbox-input4"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <label htmlFor="terms4" className="checkbox-label4">He leído TyC.</label>
                    </div>

                    <button type="submit" className="confirm-button4">Confirmar Cita</button>
                </form>

                {/* Terms Text */}
                <div className="terms-text4">
                    <p>
                        Al seleccionar "Confirmar Cita", estás aceptando los términos y condiciones del Acuerdo de Usuario y la Política de Privacidad de SmartFit. *Pueden aplicarse tarifas por mensajes y datos. Puedes dejar de recibir mensajes respondiendo con STOP.
                    </p>
                    <p>
                        SmartFit usará tu información personal para procesar tu solicitud, lo cual puedes autorizar haciendo clic en <a href="#" className="terms-link4">No vender ni compartir mi información personal</a>.
                    </p>
                </div>
            </main>
        </>
    )
}

export default Nutrifit4