import React, { useState } from "react";
import axios from "axios";
import "./Popup.css";

const ResetPassword = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/reset-password", {
        email,
      });
      setMessage(
        "Um link para redefinir sua senha foi enviado para seu e-mail."
      );
    } catch (err) {
      setError("Erro ao enviar e-mail de recuperação. Tente novamente.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close" onClick={onClose}>
          ×
        </button>
        <h2>Recuperar Senha</h2>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
