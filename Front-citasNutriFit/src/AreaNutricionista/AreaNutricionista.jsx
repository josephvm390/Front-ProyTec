import React, { useState, useEffect } from 'react';
import './AreaNutricionista.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function AreaNutricionista() {
    const [citas, setCitas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [doctorInfo, setDoctorInfo] = useState(null);
    const [editFields, setEditFields] = useState({});
    const correoDoctor = localStorage.getItem('correo');

    const convertirHoraAMPM = (horaStr) => { //para convertir el formato de 12h "AM/PM" a formato de 24 "HH:mm"
        if (!horaStr) return '';             //asi poder utilizar el intup type "time"
        if (horaStr.includes('AM') || horaStr.includes('PM')) {
            const [horaMinuto, ampm] = horaStr.split(' ');
            let [hora, minuto] = horaMinuto.split(':').map(Number);
            if (ampm.toLowerCase() === 'pm' && hora < 12) hora += 12;
            if (ampm.toLowerCase() === 'am' && hora === 12) hora = 0;
            return `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
        } else {
            return horaStr;
        }
    };

    useEffect(() => {
        if (correoDoctor) {
            axios.get(`https://back-proytec.onrender.com/api/citas/obtenerCitaxCorreoDoc/${correoDoctor}`) // Api para obtener datos de las citas
                .then(response => {
                    setCitas(response.data);
                    const camposIniciales = {};
                    response.data.forEach(cita => {
                        camposIniciales[cita._id] = {
                            fecha: cita.fecha?.slice(0, 10),
                            hora: convertirHoraAMPM(cita.hora), //para formatear la hora
                            estado: cita.estado
                        };
                    });
                    setEditFields(camposIniciales);
                })
                .catch(error => console.error("Error al obtener citas:", error))
                .finally(() => setLoading(false));

            axios.get(`https://back-proytec.onrender.com/api/doctores/detallesDoctor/${correoDoctor}`) // Api para obtener datos del doctor
                .then(response => setDoctorInfo(response.data))
                .catch(error => console.error("Error al obtener datos del doctor:", error));
        } else {
            setLoading(false);
        }
    }, [correoDoctor]);

    const handleChange = (id, campo, valor) => {
        setEditFields(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                [campo]: valor
            }
        }));
    };

    const handleActualizar = (id) => {
        const { fecha, hora, estado } = editFields[id];
        const horaAMPM = convertirHora12AMPM(hora);
        axios.put(`https://back-proytec.onrender.com/api/citas/editarCita/${id}`, { //Api para actualizar datos de la Cita
            fecha,
            hora: horaAMPM,
            estado
        })
            .then(() => {
                alert("Cita actualizada");
                const nuevasCitas = citas.map(cita =>
                    cita._id === id ? { ...cita, fecha, hora: horaAMPM, estado } : cita
                );
                setCitas(nuevasCitas);
            })
            .catch(() => alert("Error al actualizar cita"));
    };

    const handleCancelar = (idCita) => { //logica para cambiar el estado a cancelar mediante el boton (Cancelar)
        const confirmar = window.confirm("¿Estás seguro de cancelar esta cita?");
        if (!confirmar) return;

        axios.put(`https://back-proytec.onrender.com/api/citas/editarCita/${idCita}`, {
            estado: 'Cancelado'
        })
            .then(() => {
                setCitas(prev =>
                    prev.map(cita =>
                        cita._id === idCita ? { ...cita, estado: 'Cancelado' } : cita
                    )
                );
                setEditFields(prev => ({
                    ...prev,
                    [idCita]: {
                        ...prev[idCita],
                        estado: 'Cancelado'
                    }
                }));
            })
            .catch(error => console.error("Error al cancelar cita:", error));
    };

    const convertirHora12AMPM = (hora24) => { //para convertir la hora en 12h antes de guardar
    if (!hora24) return '';
    const [hora, minuto] = hora24.split(':').map(Number);
    const ampm = hora >= 12 ? 'PM' : 'AM';
    const hora12 = hora % 12 === 0 ? 12 : hora % 12;
    return `${hora12.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')} ${ampm}`;
};

    return (
        <div>
            <nav className="navbar02">
                <img src="/img/logo_black.jpg" alt="Smart Fit Logo" className="logo02" />
                <div className="nav-links02">
                    <NavLink
                        to="/AreaNutricionista"
                        className={({ isActive }) =>
                            `nav-link02 ${isActive ? "active02" : ""}`
                        }
                    >
                        ESPACIO PERSONAL
                    </NavLink>
                </div>
            </nav>

            <div className="container02">
                <div className="sidebar02">
                    <div className="profile-section02">
                        <h3>{doctorInfo?.nombre || 'Doctor(a)'}</h3>
                        <div className="profile-avatar02">
                            {doctorInfo?.imagenPath ? (
                                <img src={`https://back-proytec.onrender.com/${doctorInfo.imagenPath}`} alt="Doctor" className="avatar-image02" />
                            ) : (
                                <div className="avatar-placeholder02"></div>
                            )}
                        </div>
                        <NavLink
                            to="/login2"
                            className="logout-btn02"
                            onClick={() => {
                                localStorage.removeItem('correo');
                            }}
                        >
                            LOG OUT
                        </NavLink>
                    </div>
                </div>

                <div className="main-content02">
                    <div className="appointments-section02">
                        <h2>CITAS PROGRAMADAS</h2>

                        <div className="patients-section02">
                            <h3>PACIENTES</h3>
                            <div className="table-container02">
                                <table className="patients-table02">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Apellidos</th>
                                            <th>Correo</th>
                                            <th>Celular</th>
                                            <th>Fecha</th>
                                            <th>Hora</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    {/* AQUI SE VA A OBTENER LOS DATOS REQUERIDOS DE LA BD */}
                                    <tbody>
                                        {citas.length > 0 ? (
                                            citas.map((cita, index) => (
                                                <tr key={index}>
                                                    <td>{cita.nombre_paciente}</td>
                                                    <td>{cita.apellido_paciente}</td>
                                                    <td>{cita.email}</td>
                                                    <td>{cita.celular_paciente}</td>
                                                    <td>
                                                        <input
                                                            type="date"
                                                            value={editFields[cita._id]?.fecha || ''}
                                                            onChange={(e) => handleChange(cita._id, 'fecha', e.target.value)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="time"
                                                            value={editFields[cita._id]?.hora || ''}
                                                            onChange={(e) => handleChange(cita._id, 'hora', e.target.value)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <select
                                                            value={editFields[cita._id]?.estado ?? ''}
                                                            onChange={(e) => handleChange(cita._id, 'estado', e.target.value)}
                                                        >
                                                            <option value="pendiente">Pendiente</option>
                                                            <option value="Cancelado">Cancelado</option>
                                                            <option value="reprogramado">Reprogramado</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <div className="action-buttons02">
                                                            <button className="action-btn02" onClick={() => handleActualizar(cita._id)}>Actualizar</button>
                                                            <button className="action-btn03" onClick={() => handleCancelar(cita._id)}>Cancelar</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="8" style={{ textAlign: 'center' }}>
                                                    Usted no tiene citas pendientes.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AreaNutricionista;