import React, { useEffect, useState } from 'react';
import NavbarUsuario from '../InfoUsuario/NavbarUsuario';
import './Nutrifit3.css';
import { useNavigate } from 'react-router-dom';
import axios, { Axios } from "axios"

function Nutrifit3() {
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [citasOcupadas, setCitasOcupadas] = useState([]);
    const [doctor, setDoctor] = useState('');

    const navigate = useNavigate();

    const fechasDisponibles = [
        "15/07/2025", "16/07/2025", "17/07/2025", "18/07/2025",
        "19/07/2025", "20/07/2025", "21/07/2025", "22/07/2025"
    ];

    const horasDisponibles = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM"
    ];

    useEffect(() => {
        const nombreDoctor = localStorage.getItem('nombre_doctor') || '';
        setDoctor(nombreDoctor);

        axios.get('https://back-proytec.onrender.com/api/citas/obtenercitas')
            .then(res => setCitasOcupadas(res.data))
            .catch(err => console.error("Error cargando citas:", err));
    }, []);

    const handleContinuar = () => {
        localStorage.setItem('fecha', fecha);
        localStorage.setItem('hora', hora);
        navigate('/Nutrifit4');
    };

    const estaOcupado = (f, h) => {
        return citasOcupadas.some(cita => {
            const fechaObj = new Date(cita.fecha);
            const fechaStr = fechaObj.toISOString().slice(0, 10).split('-').reverse().join('/');
            return fechaStr === f && cita.hora === h && cita.nombre_doctor === doctor;
        });
    };

    return (
        <>
            <NavbarUsuario forceNutrifitActive={true} />
            <main className="main-content3">
                <h1 className="title3">Realiza tu Cita con un Nutricionista de confianza</h1>
                <div className="title-underline3"></div>

                <div className="progress-container3">
                    <div className="step3 completed3">
                        <div className="step-number3">1</div>
                        <div className="step-label3">Selecciona Modalidad</div>
                    </div>
                    <div className="step-line3"></div>
                    <div className="step3 completed3">
                        <div className="step-number3">2</div>
                        <div className="step-label3">Elige el Nutricionista</div>
                    </div>
                    <div className="step-line3"></div>
                    <div className="step3 active3">
                        <div className="step-number3">3</div>
                        <div className="step-label3">Elige Fecha</div>
                    </div>
                    <div className="step-line3"></div>
                    <div className="step3">
                        <div className="step-number3">4</div>
                        <div className="step-label3">Confirma tu cita</div>
                    </div>
                </div>

                <div className="selection-container3">
                    <div className="date-selector3">
                        <select
                            className="date-dropdown3"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                        >
                            <option value="">dd/mm/a</option>
                            {fechasDisponibles.map((f, idx) => (
                                <option key={idx} value={f}>{f}</option>
                            ))}
                        </select>
                        <div className="date-button3">Elige tu Fecha</div>
                    </div>

                    <div className="time-selector3">
                        <select
                            className="time-dropdown3"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                        >
                            <option value="">-- : --</option>
                            {horasDisponibles.map((h, idx) => {
                                const ocupado = estaOcupado(fecha, h);
                                return (
                                    <option key={idx} value={h} disabled={ocupado}>
                                        {h} {ocupado ? "(No disponible)" : ""}
                                    </option>
                                );
                            })}
                        </select>
                        <p className="time-button3">Horarios Disponibles</p>
                    </div>

                    <div className="next-button-container3">
                        <button
                            className="next-button3"
                            onClick={handleContinuar}
                            disabled={!fecha || !hora}
                        >
                            <span>&#8250;</span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Nutrifit3;
