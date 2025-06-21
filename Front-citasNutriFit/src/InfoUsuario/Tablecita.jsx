import React, { useState, useEffect } from 'react'
import './Tablecita.css'
import axios, { Axios } from "axios"

function Tablecita() {

    const [citas, setCitas] = useState([]);
    const [loading, setLoading] = useState(true);
    const membresia = localStorage.getItem('membresia');

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            axios.get(`https://back-proytec.onrender.com/api/citas/obtenerCitaxCorreo/${email}`)
                .then(response => setCitas(response.data))
                .catch(error => console.error("Error al obtener las citas:", error))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [membresia]);

    const formatearFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        return fecha.toLocaleDateString('es-PE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    if (membresia !== 'Black') {
        return null; // No muestra nada si no tiene plan Black
    };

    return (
        <div className="table-container">
            {loading ? (
                <p className="mensaje-cargando"></p>
            ) : (
                <>
                    <h2 className="table-title">Citas con Nutricionistas</h2>
                    <table className="table-citas">
                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Modalidad</th>
                                <th>Dirección</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {citas.map((cita, index) => (
                                <tr key={index}>
                                    <td>{cita.nombre_doctor}</td>
                                    <td>{cita.modalidad}</td>
                                    <td>{cita.direccion}</td>
                                    <td>{formatearFecha(cita.fecha)}</td>
                                    <td>{cita.hora}</td>
                                    <td>{cita.estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {citas.length === 0 && (
                        <p className="mensaje-no-citas">No tiene Citas Registradas</p>
                    )}
                </>
            )}
        </div>
    )
}

export default Tablecita