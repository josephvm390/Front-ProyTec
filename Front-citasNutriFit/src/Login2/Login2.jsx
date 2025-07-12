import React, { useState } from 'react';
import './login2.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Login2() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [failedAttempts, setFailedAttempts] = useState(0);
    const [cooldownUntil, setCooldownUntil] = useState(null);
    const navigate = useNavigate();

    const verificarDoctor = async () => {
        const now = new Date();
        if (cooldownUntil && now < cooldownUntil) {
            const remaining = Math.ceil((cooldownUntil - now) / 1000);
            setErrorMessage(`Demasiados intentos fallidos. Intente de nuevo en ${remaining} segundos.`);
            return;
        }

        try {
            const data = { correo, password };
            const response = await axios.post("https://back-proytec.onrender.com/api/doctores/loginDoctor", data);

            if (response.status === 200) {
                const { token, doctor } = response.data;

                // Guardar en localStorage
                localStorage.setItem("token", token);
                localStorage.setItem("correo", doctor.correo);

                setFailedAttempts(0);
                setErrorMessage('');
                navigate("/AreaNutricionista"); // Cambia por la ruta que desees para doctores
            }
        } catch (error) {
            console.error("Error al verificar el doctor:", error);

            setFailedAttempts(prev => {
                const newAttempts = prev + 1;
                if (newAttempts >= 3) {
                    setCooldownUntil(new Date(Date.now() + 3 * 60 * 1000));
                    setErrorMessage("Demasiados intentos fallidos. Espere 3 minutos antes de volver a intentarlo.");
                    return 0;
                } else {
                    setErrorMessage("Correo o contraseña incorrectos");
                    return newAttempts;
                }
            });
        }
    };

    return (
        <div className="container-login2">
            <Link to="/" className="back-button-login2">BACK</Link>

            <div className="login-container-login2">
                <div className="login-box-login2">
                    <div className="login-header-login2">
                        <h2>LOGIN COLABORADOR</h2>
                    </div>

                    <div className="login-form-login2">
                        <input
                            type="text"
                            placeholder="INGRESE EMAIL"
                            className="login-input-login2"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="login-input-login2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <button onClick={verificarDoctor} className="login-button-login2">INGRESAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login2;