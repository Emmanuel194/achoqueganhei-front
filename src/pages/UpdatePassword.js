import React, { useState } from "react";
import axios from "axios";
import "./UpdatePassword.css";

const UpdatePassword = ({ match }) => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/update-password", {
        token: match.params.token,
        newPassword,
      });
      setMessage("Senha atualizada com sucesso.");
    } catch (err) {
      setError("Erro ao atualizar senha. Tente novamente.");
    }
  };

  return (
    <div className="update-password-container">
      <h2>Atualizar Senha</h2>
      {error && <p className="error">{error}</p>}
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Nova Senha:</label>
          <input
            type="password"
            placeholder="Digite sua nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
