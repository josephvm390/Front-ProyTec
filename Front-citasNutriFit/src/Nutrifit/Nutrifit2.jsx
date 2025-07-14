import React, { useEffect, useState } from 'react';
import NavbarUsuario from '../InfoUsuario/NavbarUsuario'
import './Nutrifit2.css'
import { useNavigate } from 'react-router-dom'

function Nutrifit2() {

    const [modalidad, setModalidad] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const modo = localStorage.getItem('modalidad');
        setModalidad(modo);
    }, []);

    const doctoresPresenciales = [
        {
            nombre: "DR. Lucas LLano Baldera",
            celular: "912454768",
            correo: "lucasnutfit@gmail.com",
            direccion: "Av. Javier Prado 123",
            imagen: "img/doctor1.jpg"
        },
        {
            nombre: "DR. Piero Mendez Leon",
            celular: "912454231",
            correo: "Piero@gmail.com",
            direccion: "Calle Las Palmeras 456",
            imagen: "img/doctor2.jpg"
        },
        {
            nombre: "DR. Lucas Carrion Perez",
            celular: "912454123",
            correo: "Lucas@gmail.com",
            direccion: "Jr. Los Sauces 789",
            imagen: "img/doctor2.jpg"
        }
    ];

    const doctoresVirtuales = [
        {
            nombre: "DR. Jean Pinto Vilca",
            celular: "912454456",
            correo: "Jean@gmail.com",
            imagen: "img/doctor3.jpg"
        },
        {
            nombre: "DR. Pedro Medina Villa",
            celular: "912454011",
            correo: "Pedro@gmail.com",
            imagen: "img/doctor4.jpg"
        }
    ];

    const doctoresMostrar = modalidad === 'PRESENCIAL' ? doctoresPresenciales : doctoresVirtuales;

    const seleccionarDoctor = (nombre, direccion,correo) => {
        localStorage.setItem('nombre_doctor', nombre);
        localStorage.setItem('direccion', direccion || '');
        localStorage.setItem('correo_doctor', correo);
        navigate('/Nutrifit3');
    };


    return (
        <>
            <NavbarUsuario forceNutrifitActive={true}></NavbarUsuario>
            <main className="main-content2">
                <h1 className="title2">Realiza tu Cita con un Nutricionista de confianza</h1>
                <div className="title-underline2"></div>

                {/* Progress Steps */}
                <div className="progress-container2">
                    <div className="step2 completed2">
                        <div className="step-number2">1</div>
                        <div className="step-label2">Selecciona Modalidad</div>
                    </div>
                    <div className="step-line2"></div>
                    <div className="step2 active2">
                        <div className="step-number2">2</div>
                        <div className="step-label2">Elige el Nutricionista</div>
                    </div>
                    <div className="step-line2"></div>
                    <div className="step2">
                        <div className="step-number2">3</div>
                        <div className="step-label2">Elige tu horario</div>
                    </div>
                    <div className="step-line2"></div>
                    <div className="step2">
                        <div className="step-number2">4</div>
                        <div className="step-label2">Confirma tu cita</div>
                    </div>
                </div>

                {/* Doctor List */}
                <div className="nutritionist-container2">
                    {doctoresMostrar.map((doc, index) => (
                        <div
                            className="nutritionist-card2"
                            key={index}
                            onClick={() => seleccionarDoctor(doc.nombre, doc.direccion, doc.correo)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={doc.imagen} alt={doc.nombre} className="nutritionist-avatar2" />
                            <div className="nutritionist-info2">
                                <h3 className="nutritionist-name2">{doc.nombre}</h3>
                                <p className="nutritionist-detail2">Celular: {doc.celular}</p>
                                <p className="nutritionist-detail2">Correo: {doc.correo}</p>
                                {doc.direccion && (
                                    <p className="nutritionist-detail2">Dirección: {doc.direccion}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Nutrifit2