import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Register from "../components/Register";
import ResetPassword from "../components/ResetPassword";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      setSuccess("Login efetuado com sucesso!");
      navigate("/dashboard");
    } catch (err) {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="/loteria.jpg" alt="Login" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>{" "}
          <div className="links">
            <button
              type="button"
              className="link-button"
              onClick={() => setShowRegister(true)}
            >
              Cadastrar-se
            </button>
            <button
              type="button"
              className="link-button"
              onClick={() => setShowResetPassword(true)}
            >
              Recuperar Senha
            </button>
          </div>
        </form>
      </div>
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
      {showResetPassword && (
        <ResetPassword onClose={() => setShowResetPassword(false)} />
      )}
    </div>
  );
};

export default Login;
