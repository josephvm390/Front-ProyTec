import React, { useState } from 'react'
import './SingUp.css'
import { Link, useNavigate } from 'react-router-dom'
import axios, { Axios } from "axios"

function SingUp() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dni, setDni] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (email.trim().toLowerCase() !== confirmEmail.trim().toLowerCase()) {
            setErrorMessage("Los correos no coinciden");
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage("Las contraseñas no coinciden");
            return;
        }

        try {
            const data = {
                name,
                lastName,
                email: email.trim().toLowerCase(),
                confirmEmail: confirmEmail.trim().toLowerCase(),
                password,
                confirmPassword,
                dni
            };
            await axios.post("https://back-proytec.onrender.com/api/usuario/crearUsuario", data);
            navigate("/login");
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Error al registrar usuario");
        }
    };

    return (
        <div className="singup-container">
            <Link to="/" className="home-button">HOME</Link>
            <div className="register-container">
                <div className="register-box">
                    <div className="register-header">
                        <div className="sign-up-icon">
                            {/* Icono SVG */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <h2>SIGN UP</h2>
                        </div>
                    </div>
                    <div className="register-form">
                        <div className="input-row">
                            <input type="text" placeholder="NAME" className="register-input half-width" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="LAST NAME" className="register-input half-width" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <input type="email" placeholder="EMAIL" className="register-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="email" placeholder="CONFIRM EMAIL" className="register-input" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                        <input type="password" placeholder="PASSWORD" className="register-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder="CONFIRM PASSWORD" className="register-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <input type="text" placeholder="DNI" className="register-input" value={dni} onChange={(e) => setDni(e.target.value)} />

                        {/* Mensaje de error si hay */}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}

                        <button className="signup-button" onClick={handleSubmit}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SingUp