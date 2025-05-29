import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function MainLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [failedAttempts, setFailedAttempts] = useState(0);
    const [cooldownUntil, setCooldownUntil] = useState(null);
    const navigate = useNavigate();

    const verificarUsuario = async () => {
        const now = new Date();
        if (cooldownUntil && now < cooldownUntil) {
            const remaining = Math.ceil((cooldownUntil - now) / 1000);
            setErrorMessage(`Demasiados intentos fallidos. Intente de nuevo en ${remaining} segundos.`);
            return;
        }

        try {
            const data = { email, password };
            const response = await axios.post("https://back-proytec.onrender.com/api/usuario/loginUsuario", data);

            if (response.status === 200) {
                const { token, usuario } = response.data;

                // Guardar el token en localStorage
                localStorage.setItem("token", token);
                localStorage.setItem("email", email);
                if (usuario && usuario.dni) {
                    localStorage.setItem("dni", usuario.dni);
                }

                // Limpiar estados y redirigir
                setFailedAttempts(0);
                setErrorMessage('');
                navigate("/mainUsuario");
            }
        } catch (error) {
            console.error("Error al verificar el usuario:", error);

            setFailedAttempts(prev => {
                const newAttempts = prev + 1;
                if (newAttempts >= 3) {
                    setCooldownUntil(new Date(Date.now() + 3 * 60 * 1000));
                    setErrorMessage("Demasiados intentos fallidos. Espere 3 minutos antes de volver a intentarlo.");
                    return 0;
                } else {
                    setErrorMessage("Email o contraseña incorrectos");
                    return newAttempts;
                }
            });
        }
    };

    return (
        <div className="container">
            <Link to="/" className="back-button">BACK</Link>
            <div className="login-container">
                <div className="login-box">
                    <div className="login-header">
                        <h2>LOGIN<span className="yellow-arrow"></span></h2>
                    </div>
                    <div className="login-form">
                        <input
                            type="email"
                            placeholder="INGRESE EMAIL"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="forgot-password"></div>
                        <button onClick={verificarUsuario} className="login-button">INGRESAR</button>
                        <div className="register-link">
                            <Link to="/Singup" className="register-button">Registrate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLogin;