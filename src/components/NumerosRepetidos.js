import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NumerosRepetidos.css";

const NumerosRepetidos = () => {
  const [numerosRepetidos, setNumerosRepetidos] = useState([]);

  useEffect(() => {
    const fetchNumerosRepetidos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/lottery/numeros-repetidos/megasena"
        ); // Ajuste a URL conforme necessário
        setNumerosRepetidos(response.data);
      } catch (error) {
        console.error("Erro ao obter números repetidos:", error);
      }
    };

    fetchNumerosRepetidos();
  }, []);

  return (
    <div className="numeros-repetidos-container">
      <h2>Números Mais Repetidos</h2>
      <ul>
        {numerosRepetidos.map(({ numero, frequencia }) => (
          <li key={numero}>
            <span className="numero">{numero}</span>: {frequencia} vezes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NumerosRepetidos;
