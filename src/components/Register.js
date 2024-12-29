import React, { useState } from "react";
import axios from "axios";
import "./Popup.css";

const Register = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
        name,
      });
      onClose();
      alert("Cadastro realizado com sucesso. Você pode fazer login agora.");
    } catch (err) {
      setError("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close" onClick={onClose}>
          ×
        </button>
        <h2>Cadastro</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Cadastrar-se</button>
          <button type="button" className="cancel" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
