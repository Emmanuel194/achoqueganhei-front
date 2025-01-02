import React, { useState } from "react";
import axios from "axios";
import "./Popup.css";

const Register = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
        name,
      });
      onClose();
      setSuccess(
        "Seu cadastro foi realizado com sucesso. Efetue o login no sistema."
      );
      setError("");
    } catch (err) {
      setError("Erro ao cadastrar. Tente novamente.");
      setSuccess("");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close" onClick={onClose}>
          ×
        </button>
        <h2 className="popup-title">Cadastro</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Nome:</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">
              Cadastrar-se
            </button>
            <button type="button" className="cancel" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
